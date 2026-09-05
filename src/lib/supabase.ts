import { createClient } from '@supabase/supabase-js';

// Supabase Configuration from provided project details
export const SUPABASE_URL = 
  import.meta.env.VITE_SUPABASE_URL || 'https://liwdtpprwikqplelngtk.supabase.co';

export const SUPABASE_ANON_KEY = 
  import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_mbCqddqgHDdC4ez7W1HGAA_NsZeGiVA';

// Initialize Supabase Client
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  }
});

export interface ConsultationBookingData {
  id?: string | number;
  name: string;
  email: string;
  phone: string;
  website?: string;
  preferredTime?: string;
  serviceInterest?: string;
  currentRevenue?: string;
  created_at?: string;
  syncedToSupabase?: boolean;
}

export interface ProposalRequestData {
  id?: string | number;
  fullName: string;
  email: string;
  phone: string;
  businessName?: string;
  website?: string;
  service?: string;
  monthlyBudget?: string;
  message?: string;
  created_at?: string;
  syncedToSupabase?: boolean;
}

/**
 * Saves consultation booking to Supabase Backend and local storage
 */
export async function saveConsultationBooking(data: ConsultationBookingData) {
  const timestamp = new Date().toISOString();
  const payload = {
    name: data.name,
    full_name: data.name,
    email: data.email,
    phone: data.phone,
    website: data.website || '',
    preferred_time: data.preferredTime || '',
    service_interest: data.serviceInterest || '',
    current_revenue: data.currentRevenue || '',
    source: 'consultation_modal',
    created_at: timestamp,
  };

  let synced = false;
  let supabaseError: any = null;
  let usedTable = 'consultations';

  try {
    // Attempt insert into primary 'consultations' table
    const response = await supabase.from('consultations').insert([payload]).select();

    if (!response.error) {
      synced = true;
    } else {
      supabaseError = response.error;
      // Fallback check on alternate table names if user created under different name
      const fallbackTables = ['consultation_bookings', 'leads', 'bookings', 'contacts'];
      for (const table of fallbackTables) {
        const fb = await supabase.from(table).insert([payload]).select();
        if (!fb.error) {
          synced = true;
          usedTable = table;
          supabaseError = null;
          break;
        }
      }
    }
  } catch (err: any) {
    supabaseError = err;
  }

  // Backup to localStorage so data is visible immediately in Admin Viewer
  try {
    const existing = JSON.parse(localStorage.getItem('mg_consultations_backup') || '[]');
    const record = {
      ...payload,
      id: Date.now(),
      syncedToSupabase: synced,
      supabaseError: supabaseError ? (supabaseError.message || String(supabaseError)) : null,
    };
    existing.unshift(record);
    localStorage.setItem('mg_consultations_backup', JSON.stringify(existing.slice(0, 100)));
  } catch {
    // ignore
  }

  return {
    success: synced,
    error: supabaseError,
    table: usedTable,
    savedLocally: true,
  };
}

/**
 * Saves proposal / contact inquiry to Supabase Backend and local storage
 */
export async function saveProposalRequest(data: ProposalRequestData) {
  const timestamp = new Date().toISOString();
  const payload = {
    full_name: data.fullName,
    name: data.fullName,
    email: data.email,
    phone: data.phone,
    business_name: data.businessName || '',
    website: data.website || '',
    service: data.service || '',
    monthly_budget: data.monthlyBudget || '',
    message: data.message || '',
    source: 'proposal_form',
    created_at: timestamp,
  };

  let synced = false;
  let supabaseError: any = null;
  let usedTable = 'proposals';

  try {
    const response = await supabase.from('proposals').insert([payload]).select();
    if (!response.error) {
      synced = true;
    } else {
      supabaseError = response.error;
      const fallbackTables = ['leads', 'consultations', 'contacts', 'form_submissions'];
      for (const table of fallbackTables) {
        const fb = await supabase.from(table).insert([payload]).select();
        if (!fb.error) {
          synced = true;
          usedTable = table;
          supabaseError = null;
          break;
        }
      }
    }
  } catch (err: any) {
    supabaseError = err;
  }

  try {
    const existing = JSON.parse(localStorage.getItem('mg_proposals_backup') || '[]');
    const record = {
      ...payload,
      id: Date.now(),
      syncedToSupabase: synced,
      supabaseError: supabaseError ? (supabaseError.message || String(supabaseError)) : null,
    };
    existing.unshift(record);
    localStorage.setItem('mg_proposals_backup', JSON.stringify(existing.slice(0, 100)));
  } catch {
    // ignore
  }

  return {
    success: synced,
    error: supabaseError,
    table: usedTable,
    savedLocally: true,
  };
}

/**
 * Fetch all leads from both Supabase (if table exists) and local cache.
 */
export async function fetchAllLeads(authorizedAdminEmail?: string) {
  const localConsultations = JSON.parse(localStorage.getItem('mg_consultations_backup') || '[]');
  const localProposals = JSON.parse(localStorage.getItem('mg_proposals_backup') || '[]');

  let remoteConsultations: any[] = [];
  let remoteProposals: any[] = [];
  let tableErrors: { consultations?: string; proposals?: string } = {};

  try {
    const res1 = await supabase.from('consultations').select('*').order('created_at', { ascending: false });
    if (res1.data) remoteConsultations = res1.data;
    if (res1.error) tableErrors.consultations = res1.error.message;
  } catch (err: any) {
    tableErrors.consultations = err.message;
  }

  try {
    const res2 = await supabase.from('proposals').select('*').order('created_at', { ascending: false });
    if (res2.data) remoteProposals = res2.data;
    if (res2.error) tableErrors.proposals = res2.error.message;
  } catch (err: any) {
    tableErrors.proposals = err.message;
  }

  return {
    consultations: remoteConsultations.length > 0 ? remoteConsultations : localConsultations,
    proposals: remoteProposals.length > 0 ? remoteProposals : localProposals,
    localConsultations,
    localProposals,
    remoteConsultations,
    remoteProposals,
    tableErrors,
  };
}

/**
 * SQL Schema & Reset queries for user in Supabase SQL Editor
 */
export const SUPABASE_SQL_RESET_COMMANDS = `-- ==========================================
-- EMERGENCY ADMIN RESET & WIPE QUERIES
-- Run these queries in Supabase SQL Editor to reset admin slot
-- ==========================================

-- 1. Wipe and Reset Admin Slot Lock to "open" (0/1):
DELETE FROM public.admin_settings WHERE setting_key = 'single_admin_lock';
-- OR reset status explicitly:
-- INSERT INTO public.admin_settings (setting_key, admin_email, slot_status) VALUES ('single_admin_lock', '', 'open') ON CONFLICT (setting_key) DO UPDATE SET slot_status = 'open', admin_email = '', admin_uid = NULL;

-- 2. Clear all users from Supabase Auth so you can sign up fresh:
DELETE FROM auth.users;
`;

export const SUPABASE_SQL_SETUP = `-- Copy and paste this into your Supabase SQL Editor (https://supabase.com/dashboard/project/liwdtpprwikqplelngtk/sql)
-- Click "Run" to create your tables:

-- 1. Consultations Table
CREATE TABLE IF NOT EXISTS public.consultations (
  id BIGINT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  name TEXT,
  full_name TEXT,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  website TEXT,
  preferred_time TEXT,
  service_interest TEXT,
  current_revenue TEXT,
  source TEXT DEFAULT 'consultation_modal'
);

-- Enable Public Access for Consultations
ALTER TABLE public.consultations ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow public insert into consultations" ON public.consultations;
CREATE POLICY "Allow public insert into consultations" ON public.consultations
  FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Allow public read from consultations" ON public.consultations;
CREATE POLICY "Allow public read from consultations" ON public.consultations
  FOR SELECT USING (true);


-- 2. Proposals / Inbound Leads Table
CREATE TABLE IF NOT EXISTS public.proposals (
  id BIGINT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  full_name TEXT,
  name TEXT,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  business_name TEXT,
  website TEXT,
  service TEXT,
  monthly_budget TEXT,
  message TEXT,
  source TEXT DEFAULT 'proposal_form'
);

-- Enable Public Access for Proposals
ALTER TABLE public.proposals ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow public insert into proposals" ON public.proposals;
CREATE POLICY "Allow public insert into proposals" ON public.proposals
  FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Allow public read from proposals" ON public.proposals;
CREATE POLICY "Allow public read from proposals" ON public.proposals
  FOR SELECT USING (true);


-- 3. Admin Settings Table (Single-Slot Lock Enforcement)
CREATE TABLE IF NOT EXISTS public.admin_settings (
  id BIGINT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  setting_key TEXT UNIQUE NOT NULL,
  admin_email TEXT NOT NULL,
  admin_uid TEXT,
  locked_at TIMESTAMPTZ DEFAULT NOW(),
  slot_status TEXT DEFAULT 'locked',
  metadata JSONB
);

ALTER TABLE public.admin_settings ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow public read admin_settings" ON public.admin_settings;
CREATE POLICY "Allow public read admin_settings" ON public.admin_settings
  FOR SELECT USING (true);

DROP POLICY IF EXISTS "Allow insert admin_settings" ON public.admin_settings;
CREATE POLICY "Allow insert admin_settings" ON public.admin_settings
  FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Allow update admin_settings" ON public.admin_settings;
CREATE POLICY "Allow update admin_settings" ON public.admin_settings
  FOR UPDATE USING (true);
`;

