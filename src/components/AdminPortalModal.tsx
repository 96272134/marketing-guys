import React, { useState, useEffect, useMemo } from 'react';
import { 
  X, 
  Database, 
  RefreshCw, 
  CheckCircle2, 
  AlertCircle, 
  Copy, 
  Check, 
  Users, 
  Calendar, 
  Mail, 
  Phone, 
  ExternalLink,
  Download,
  Lock,
  ShieldCheck,
  LogOut,
  Eye,
  EyeOff,
  Search,
  Filter,
  DollarSign,
  TrendingUp,
  Key,
  Clock,
  Briefcase,
  Globe
} from 'lucide-react';
import { 
  fetchAllLeads, 
  SUPABASE_SQL_SETUP, 
  SUPABASE_SQL_RESET_COMMANDS,
  supabase 
} from '../lib/supabase';
import { 
  loginAdmin, 
  getCurrentAdminSession, 
  logoutAdmin, 
  updateAdminPassword,
  AdminSession 
} from '../lib/adminAuth';

interface AdminPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminPortalModal: React.FC<AdminPortalModalProps> = ({ isOpen, onClose }) => {
  // Auth state - strictly locked to login-only
  const [session, setSession] = useState<AdminSession | null>(null);
  
  // Login form inputs
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Feedback notifications
  const [authError, setAuthError] = useState<string | null>(null);
  const [authSuccess, setAuthSuccess] = useState<string | null>(null);
  const [authLoading, setAuthLoading] = useState(false);

  // Dashboard state
  const [activeTab, setActiveTab] = useState<'consultations' | 'proposals' | 'database' | 'security'>('consultations');
  const [loadingLeads, setLoadingLeads] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterService, setFilterService] = useState('all');
  const [copiedSql, setCopiedSql] = useState(false);
  const [copiedResetSql, setCopiedResetSql] = useState(false);
  const [leadStatusMap, setLeadStatusMap] = useState<Record<string, string>>({});

  // Password update form in Settings
  const [currentPwd, setCurrentPwd] = useState('');
  const [newPwd, setNewPwd] = useState('');
  const [pwdMsg, setPwdMsg] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Leads Data
  const [data, setData] = useState<{
    consultations: any[];
    proposals: any[];
    localConsultations: any[];
    localProposals: any[];
    remoteConsultations: any[];
    remoteProposals: any[];
    tableErrors: { consultations?: string; proposals?: string };
  }>({
    consultations: [],
    proposals: [],
    localConsultations: [],
    localProposals: [],
    remoteConsultations: [],
    remoteProposals: [],
    tableErrors: {}
  });

  // Supabase Auth listener
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event, sbSession) => {
      if (sbSession?.user?.email) {
        const current = getCurrentAdminSession();
        if (current) {
          setSession(current);
        }
      } else if (event === 'SIGNED_OUT') {
        setSession(null);
      }
    });

    return () => {
      authListener?.subscription?.unsubscribe();
    };
  }, []);

  // Initial check on modal open
  useEffect(() => {
    if (isOpen) {
      setAuthError(null);
      setAuthSuccess(null);

      const current = getCurrentAdminSession();
      if (current) {
        setSession(current);
        loadData(current.email);
      } else {
        setSession(null);
      }

      // Load saved lead statuses
      try {
        const savedStatuses = JSON.parse(localStorage.getItem('mg_lead_statuses') || '{}');
        setLeadStatusMap(savedStatuses);
      } catch {
        // ignore
      }
    }
  }, [isOpen]);

  const loadData = async (adminEmail?: string) => {
    setLoadingLeads(true);
    try {
      const result = await fetchAllLeads(adminEmail || session?.email);
      setData(result);
    } catch (err) {
      console.error('Failed to load leads:', err);
    } finally {
      setLoadingLeads(false);
    }
  };

  // Direct Supabase Authentication Login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(null);
    setAuthSuccess(null);

    const inputEmail = loginEmail.trim();
    if (!inputEmail) {
      setAuthError('Please enter your admin email address.');
      return;
    }

    if (!loginPassword) {
      setAuthError('Please enter your password.');
      return;
    }

    setAuthLoading(true);
    try {
      const res = await loginAdmin({
        email: inputEmail,
        password: loginPassword,
      });

      if (!res.success) {
        setAuthError(res.error || 'Invalid login credentials. Please verify your email and password.');
      } else {
        setSession(res.session || null);
        if (res.session?.email) {
          loadData(res.session.email);
        }
      }
    } catch (err: any) {
      setAuthError(err.message || 'Invalid login credentials. Please try again.');
    } finally {
      setAuthLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
    } catch {
      // ignore
    }
    logoutAdmin();
    setSession(null);
    setAuthError(null);
    setLoginPassword('');
    setData({
      consultations: [],
      proposals: [],
      localConsultations: [],
      localProposals: [],
      remoteConsultations: [],
      remoteProposals: [],
      tableErrors: {}
    });
  };

  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setPwdMsg(null);

    if (newPwd.length < 6) {
      setPwdMsg({ type: 'error', text: 'New password must be at least 6 characters.' });
      return;
    }

    const res = await updateAdminPassword({
      currentPassword: currentPwd,
      newPassword: newPwd,
    });

    if (res.success) {
      setPwdMsg({ type: 'success', text: 'Password successfully updated!' });
      setCurrentPwd('');
      setNewPwd('');
    } else {
      setPwdMsg({ type: 'error', text: res.error || 'Failed to update password.' });
    }
  };

  const handleStatusChange = (leadId: string, status: string) => {
    const updated = { ...leadStatusMap, [leadId]: status };
    setLeadStatusMap(updated);
    localStorage.setItem('mg_lead_statuses', JSON.stringify(updated));
  };

  const handleCopySql = () => {
    navigator.clipboard.writeText(SUPABASE_SQL_SETUP);
    setCopiedSql(true);
    setTimeout(() => setCopiedSql(false), 2500);
  };

  const handleCopyResetSql = () => {
    navigator.clipboard.writeText(SUPABASE_SQL_RESET_COMMANDS);
    setCopiedResetSql(true);
    setTimeout(() => setCopiedResetSql(false), 2500);
  };

  const handleExportCSV = (type: 'consultations' | 'proposals' | 'all') => {
    let items: any[] = [];
    if (type === 'consultations') items = filteredConsultations;
    else if (type === 'proposals') items = filteredProposals;
    else items = [...filteredConsultations, ...filteredProposals];

    if (items.length === 0) return;

    const headers = Object.keys(items[0]).join(',');
    const rows = items.map(obj => 
      Object.values(obj).map(val => `"${String(val || '').replace(/"/g, '""')}"`).join(',')
    ).join('\n');

    const csvContent = "data:text/csv;charset=utf-8," + headers + "\n" + rows;
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `marketing_guys_${type}_leads_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Filtered consultations
  const filteredConsultations = useMemo(() => {
    return data.consultations.filter(item => {
      const q = searchQuery.toLowerCase();
      const matchSearch = !searchQuery || 
        (item.name && item.name.toLowerCase().includes(q)) ||
        (item.full_name && item.full_name.toLowerCase().includes(q)) ||
        (item.email && item.email.toLowerCase().includes(q)) ||
        (item.phone && item.phone.toLowerCase().includes(q)) ||
        (item.service_interest && item.service_interest.toLowerCase().includes(q));

      const matchService = filterService === 'all' || 
        (item.service_interest && item.service_interest.toLowerCase().includes(filterService.toLowerCase()));

      return matchSearch && matchService;
    });
  }, [data.consultations, searchQuery, filterService]);

  // Filtered proposals
  const filteredProposals = useMemo(() => {
    return data.proposals.filter(item => {
      const q = searchQuery.toLowerCase();
      const matchSearch = !searchQuery || 
        (item.full_name && item.full_name.toLowerCase().includes(q)) ||
        (item.name && item.name.toLowerCase().includes(q)) ||
        (item.email && item.email.toLowerCase().includes(q)) ||
        (item.phone && item.phone.toLowerCase().includes(q)) ||
        (item.business_name && item.business_name.toLowerCase().includes(q)) ||
        (item.service && item.service.toLowerCase().includes(q));

      const matchService = filterService === 'all' || 
        (item.service && item.service.toLowerCase().includes(filterService.toLowerCase()));

      return matchSearch && matchService;
    });
  }, [data.proposals, searchQuery, filterService]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-5xl w-full shadow-2xl border border-slate-200 max-h-[92vh] flex flex-col relative text-left overflow-hidden">
        
        {/* Top Header Bar */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-900 text-white shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-md">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold font-heading">
                  Marketing Guys Admin Portal
                </h3>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700 text-[11px] font-semibold">
                  <Lock className="w-3 h-3 text-blue-400" /> Slot Locked (1/1) - Authorized Access Only
                </span>
              </div>
              <p className="text-xs text-slate-400">
                {session 
                  ? `Authenticated as ${session.name} (${session.email})` 
                  : 'Slot Locked (1/1) • Master Administrator Access Only'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {session && (
              <button
                onClick={handleLogout}
                title="Log out of Admin Dashboard"
                className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer border border-slate-700"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* NOT LOGGED IN: Permanent Login Screen Across All Browsers & Devices */}
        {!session ? (
          <div className="p-6 sm:p-10 overflow-y-auto max-w-md mx-auto w-full">
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-2 shadow-xs">
                  <Lock className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 font-heading">
                  Admin Portal Login
                </h2>
                <p className="text-xs sm:text-sm text-slate-600">
                  Enter your master credentials to access client bookings, lead inquiries, and CRM data.
                </p>
              </div>

              {authError && (
                <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                  <span>{authError}</span>
                </div>
              )}

              {authSuccess && (
                <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                  <span>{authSuccess}</span>
                </div>
              )}

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Admin Email
                  </label>
                  <input
                    type="email"
                    required
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    placeholder="marketingguys99@gmail.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-xs font-bold text-slate-700">
                      Password
                    </label>
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="text-[11px] text-blue-600 hover:text-blue-700 flex items-center gap-1 font-semibold cursor-pointer"
                    >
                      {showPassword ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                      <span>{showPassword ? 'Hide' : 'Show'}</span>
                    </button>
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm"
                  />
                </div>

                <button
                  type="submit"
                  disabled={authLoading}
                  className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-lg shadow-blue-600/20 transition cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {authLoading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Lock className="w-4 h-4" />}
                  <span>Log In to Dashboard</span>
                </button>
              </form>

              <div className="text-center text-xs text-slate-400 pt-2">
                Protected by Supabase Auth & 256-bit encryption • Authorized Personnel Only
              </div>
            </div>
          </div>
        ) : (
          /* LOGGED IN: Full-Featured Admin Dashboard */
          <div className="flex-1 flex flex-col overflow-hidden">
            
            {/* Top KPI Metrics Bar */}
            <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-3 shrink-0">
              <div className="p-3 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <div className="text-slate-500 text-[11px] font-semibold flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-blue-600" />
                  <span>Consultations</span>
                </div>
                <div className="text-xl font-extrabold text-slate-900 mt-1 font-heading">
                  {data.consultations.length}
                </div>
              </div>

              <div className="p-3 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <div className="text-slate-500 text-[11px] font-semibold flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Proposal Inquiries</span>
                </div>
                <div className="text-xl font-extrabold text-slate-900 mt-1 font-heading">
                  {data.proposals.length}
                </div>
              </div>

              <div className="p-3 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <div className="text-slate-500 text-[11px] font-semibold flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Total Leads</span>
                </div>
                <div className="text-xl font-extrabold text-emerald-700 mt-1 font-heading">
                  {data.consultations.length + data.proposals.length}
                </div>
              </div>

              <div className="p-3 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <div className="text-slate-500 text-[11px] font-semibold flex items-center gap-1">
                  <Database className="w-3.5 h-3.5 text-purple-600" />
                  <span>Supabase Sync</span>
                </div>
                <div className="text-xs font-bold text-purple-700 mt-1 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                  <span>Live & Active</span>
                </div>
              </div>
            </div>

            {/* Navigation Tabs Bar */}
            <div className="px-6 py-2 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 shrink-0 bg-white">
              <div className="flex items-center gap-1 sm:gap-2">
                <button
                  onClick={() => setActiveTab('consultations')}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
                    activeTab === 'consultations'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Consultations ({data.consultations.length})</span>
                </button>

                <button
                  onClick={() => setActiveTab('proposals')}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
                    activeTab === 'proposals'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <Users className="w-3.5 h-3.5" />
                  <span>Proposals ({data.proposals.length})</span>
                </button>

                <button
                  onClick={() => setActiveTab('database')}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
                    activeTab === 'database'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <Database className="w-3.5 h-3.5" />
                  <span>SQL & Schema</span>
                </button>

                <button
                  onClick={() => setActiveTab('security')}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
                    activeTab === 'security'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <Key className="w-3.5 h-3.5" />
                  <span>Admin Security</span>
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => loadData()}
                  disabled={loadingLeads}
                  title="Refresh Leads Data"
                  className="p-1.5 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-600 transition cursor-pointer"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${loadingLeads ? 'animate-spin' : ''}`} />
                </button>

                {(activeTab === 'consultations' || activeTab === 'proposals') && (
                  <button
                    onClick={() => handleExportCSV(activeTab)}
                    className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Export CSV</span>
                  </button>
                )}
              </div>
            </div>

            {/* Main Tab Content Area */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
              
              {/* 1. CONSULTATIONS TAB */}
              {activeTab === 'consultations' && (
                <div className="space-y-4">
                  {/* Search and Filters */}
                  <div className="flex flex-wrap gap-2 items-center justify-between pb-2">
                    <div className="relative flex-1 min-w-[200px] max-w-md">
                      <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                      <input
                        type="text"
                        placeholder="Search consultations by name, email, phone..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div className="flex items-center gap-2">
                      <Filter className="w-3.5 h-3.5 text-slate-400" />
                      <select
                        value={filterService}
                        onChange={(e) => setFilterService(e.target.value)}
                        className="bg-slate-50 border border-slate-200 text-slate-700 text-xs px-3 py-2 rounded-xl focus:outline-none focus:border-blue-500"
                      >
                        <option value="all">All Services</option>
                        <option value="Growth">Growth Strategy</option>
                        <option value="Google">Google Ads</option>
                        <option value="Meta">Meta Ads</option>
                        <option value="SEO">SEO</option>
                      </select>
                    </div>
                  </div>

                  {filteredConsultations.length === 0 ? (
                    <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-200">
                      <Calendar className="w-10 h-10 text-slate-300 mx-auto mb-2" />
                      <h4 className="text-sm font-bold text-slate-700">No Consultations Found</h4>
                      <p className="text-xs text-slate-500 max-w-sm mx-auto mt-1">
                        When clients book a strategy call through the Consultation modal, inquiries appear here in real-time.
                      </p>
                    </div>
                  ) : (
                    filteredConsultations.map((item, idx) => {
                      const leadKey = `cons_${item.id || idx}_${item.email}`;
                      const currentStatus = leadStatusMap[leadKey] || 'New';

                      return (
                        <div key={leadKey} className="p-4 rounded-2xl border border-slate-200 hover:border-blue-300 bg-white shadow-xs space-y-3 transition">
                          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
                            <div>
                              <div className="flex items-center gap-2">
                                <h4 className="font-bold text-slate-900 text-sm">
                                  {item.full_name || item.name || 'Anonymous Client'}
                                </h4>
                                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                                  currentStatus === 'Completed' ? 'bg-emerald-100 text-emerald-800' :
                                  currentStatus === 'Contacted' ? 'bg-blue-100 text-blue-800' :
                                  'bg-amber-100 text-amber-800'
                                }`}>
                                  {currentStatus}
                                </span>
                              </div>
                              <div className="text-slate-400 text-xs flex items-center gap-1.5 mt-0.5">
                                <Clock className="w-3 h-3" />
                                <span>Booked: {item.created_at ? new Date(item.created_at).toLocaleString() : 'Recent'}</span>
                              </div>
                            </div>

                            <div className="flex items-center gap-2">
                              <span className="text-[11px] font-semibold text-slate-500">Status:</span>
                              <select
                                value={currentStatus}
                                onChange={(e) => handleStatusChange(leadKey, e.target.value)}
                                className="px-2 py-1 rounded-lg border border-slate-200 text-xs font-semibold bg-slate-50 focus:outline-none focus:border-blue-500"
                              >
                                <option value="New">🟡 New</option>
                                <option value="Contacted">🔵 Contacted</option>
                                <option value="Scheduled">🟣 Scheduled</option>
                                <option value="Completed">🟢 Completed</option>
                                <option value="Archived">⚪ Archived</option>
                              </select>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                            <div>
                              <div className="text-slate-400 text-[10px] uppercase font-bold">Email Address</div>
                              <div className="flex items-center gap-1.5 mt-0.5">
                                <Mail className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                                <a href={`mailto:${item.email}`} className="text-blue-600 hover:underline font-medium truncate">
                                  {item.email}
                                </a>
                              </div>
                            </div>

                            <div>
                              <div className="text-slate-400 text-[10px] uppercase font-bold">Phone Number</div>
                              <div className="flex items-center gap-1.5 mt-0.5">
                                <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                                <a href={`tel:${item.phone}`} className="text-slate-800 hover:underline font-medium">
                                  {item.phone}
                                </a>
                                <a
                                  href={`https://wa.me/${String(item.phone).replace(/[^0-9]/g, '')}`}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="ml-1 text-[10px] bg-emerald-100 hover:bg-emerald-200 text-emerald-800 px-1.5 py-0.5 rounded font-bold"
                                >
                                  WhatsApp
                                </a>
                              </div>
                            </div>

                            <div>
                              <div className="text-slate-400 text-[10px] uppercase font-bold">Service / Slot</div>
                              <div className="flex items-center gap-1.5 mt-0.5 text-slate-800 font-medium">
                                <Briefcase className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                                <span className="truncate">{item.service_interest || 'General Growth'}</span>
                              </div>
                            </div>
                          </div>

                          {item.website && (
                            <div className="text-xs text-slate-500 flex items-center gap-1.5">
                              <Globe className="w-3.5 h-3.5 text-slate-400" />
                              <span>Website: </span>
                              <a href={item.website.startsWith('http') ? item.website : `https://${item.website}`} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                                {item.website}
                              </a>
                            </div>
                          )}
                        </div>
                      );
                    })
                  )}
                </div>
              )}

              {/* 2. PROPOSALS TAB */}
              {activeTab === 'proposals' && (
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 items-center justify-between pb-2">
                    <div className="relative flex-1 min-w-[200px] max-w-md">
                      <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                      <input
                        type="text"
                        placeholder="Search proposals by business, contact, or service..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  {filteredProposals.length === 0 ? (
                    <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-200">
                      <Users className="w-10 h-10 text-slate-300 mx-auto mb-2" />
                      <h4 className="text-sm font-bold text-slate-700">No Proposals Found</h4>
                      <p className="text-xs text-slate-500 max-w-sm mx-auto mt-1">
                        Inquiries submitted via the proposal form appear here instantly.
                      </p>
                    </div>
                  ) : (
                    filteredProposals.map((item, idx) => {
                      const leadKey = `prop_${item.id || idx}_${item.email}`;
                      const currentStatus = leadStatusMap[leadKey] || 'New';

                      return (
                        <div key={leadKey} className="p-4 rounded-2xl border border-slate-200 hover:border-blue-300 bg-white shadow-xs space-y-3 transition">
                          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
                            <div>
                              <div className="flex items-center gap-2">
                                <h4 className="font-bold text-slate-900 text-sm">
                                  {item.full_name || item.name || 'Anonymous Prospect'}
                                </h4>
                                {item.business_name && (
                                  <span className="text-xs text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md font-semibold">
                                    {item.business_name}
                                  </span>
                                )}
                                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                                  currentStatus === 'Completed' ? 'bg-emerald-100 text-emerald-800' :
                                  currentStatus === 'Contacted' ? 'bg-blue-100 text-blue-800' :
                                  'bg-amber-100 text-amber-800'
                                }`}>
                                  {currentStatus}
                                </span>
                              </div>
                              <div className="text-slate-400 text-xs flex items-center gap-1.5 mt-0.5">
                                <Clock className="w-3 h-3" />
                                <span>Requested: {item.created_at ? new Date(item.created_at).toLocaleString() : 'Recent'}</span>
                              </div>
                            </div>

                            <div className="flex items-center gap-2">
                              <span className="text-[11px] font-semibold text-slate-500">Status:</span>
                              <select
                                value={currentStatus}
                                onChange={(e) => handleStatusChange(leadKey, e.target.value)}
                                className="px-2 py-1 rounded-lg border border-slate-200 text-xs font-semibold bg-slate-50 focus:outline-none focus:border-blue-500"
                              >
                                <option value="New">🟡 New</option>
                                <option value="Contacted">🔵 Contacted</option>
                                <option value="Proposal Sent">🟣 Proposal Sent</option>
                                <option value="Closed Won">🟢 Closed Won</option>
                                <option value="Archived">⚪ Archived</option>
                              </select>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                            <div>
                              <div className="text-slate-400 text-[10px] uppercase font-bold">Email Address</div>
                              <div className="flex items-center gap-1.5 mt-0.5">
                                <Mail className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                                <a href={`mailto:${item.email}`} className="text-blue-600 hover:underline font-medium truncate">
                                  {item.email}
                                </a>
                              </div>
                            </div>

                            <div>
                              <div className="text-slate-400 text-[10px] uppercase font-bold">Phone Number</div>
                              <div className="flex items-center gap-1.5 mt-0.5">
                                <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                                <a href={`tel:${item.phone}`} className="text-slate-800 hover:underline font-medium">
                                  {item.phone}
                                </a>
                                <a
                                  href={`https://wa.me/${String(item.phone).replace(/[^0-9]/g, '')}`}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="ml-1 text-[10px] bg-emerald-100 hover:bg-emerald-200 text-emerald-800 px-1.5 py-0.5 rounded font-bold"
                                >
                                  WhatsApp
                                </a>
                              </div>
                            </div>

                            <div>
                              <div className="text-slate-400 text-[10px] uppercase font-bold">Budget Tier</div>
                              <div className="flex items-center gap-1.5 mt-0.5 text-slate-900 font-bold">
                                <DollarSign className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                                <span>{item.monthly_budget || 'Custom'}</span>
                              </div>
                            </div>
                          </div>

                          {item.message && (
                            <div className="p-3 bg-slate-50/80 rounded-xl border border-slate-200 text-xs text-slate-700">
                              <span className="font-bold text-slate-900 block mb-1">Client Note:</span>
                              <p className="italic leading-relaxed">"{item.message}"</p>
                            </div>
                          )}

                          {item.service && (
                            <div className="text-xs text-slate-600 pt-1">
                              <span className="font-semibold text-slate-800">Requested Focus:</span>{' '}
                              <span className="text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md font-medium">
                                {item.service}
                              </span>
                            </div>
                          )}
                        </div>
                      );
                    })
                  )}
                </div>
              )}

              {/* 3. DATABASE & SQL TAB */}
              {activeTab === 'database' && (
                <div className="space-y-4">
                  {/* Database Setup Script */}
                  <div className="p-4 rounded-2xl bg-slate-900 text-slate-100 text-xs font-mono space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                      <span className="text-slate-400 font-sans text-xs">Supabase Database Setup Script</span>
                      <button
                        onClick={handleCopySql}
                        className="px-3 py-1 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-sans font-bold flex items-center gap-1.5 transition cursor-pointer"
                      >
                        {copiedSql ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedSql ? 'Copied!' : 'Copy SQL Schema'}</span>
                      </button>
                    </div>
                    <pre className="overflow-x-auto text-[11px] leading-relaxed text-emerald-400 max-h-56 p-2 bg-slate-950 rounded-lg">
                      {SUPABASE_SQL_SETUP}
                    </pre>
                  </div>

                  {/* Database Reset Script */}
                  <div className="p-4 rounded-2xl bg-rose-950 text-slate-100 text-xs font-mono space-y-3 border border-rose-900">
                    <div className="flex items-center justify-between pb-2 border-b border-rose-900">
                      <div className="flex items-center gap-1.5 text-rose-300 font-sans font-bold text-xs">
                        <span>Supabase SQL Reset Script (For Supabase Dashboard SQL Editor)</span>
                      </div>
                      <button
                        onClick={handleCopyResetSql}
                        className="px-3 py-1 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-sans font-bold flex items-center gap-1.5 transition cursor-pointer"
                      >
                        {copiedResetSql ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedResetSql ? 'Copied!' : 'Copy Reset SQL'}</span>
                      </button>
                    </div>
                    <pre className="overflow-x-auto text-[11px] leading-relaxed text-rose-300 max-h-36 p-2 bg-slate-950 rounded-lg">
                      {SUPABASE_SQL_RESET_COMMANDS}
                    </pre>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-blue-950">
                      <div className="font-bold text-blue-900 flex items-center gap-1.5 mb-1">
                        <Database className="w-4 h-4 text-blue-600" />
                        <span>Supabase Live Instance</span>
                      </div>
                      <p className="text-blue-900/80 leading-relaxed">
                        Endpoint: <code className="font-mono bg-white px-1.5 py-0.5 rounded border border-blue-200">liwdtpprwikqplelngtk.supabase.co</code>
                      </p>
                      <div className="mt-3">
                        <a
                          href="https://supabase.com/dashboard/project/liwdtpprwikqplelngtk/editor"
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-blue-700 hover:underline font-bold"
                        >
                          <span>Open Supabase Table Editor</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950">
                      <div className="font-bold text-emerald-900 flex items-center gap-1.5 mb-1">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>Active Tables</span>
                      </div>
                      <ul className="list-disc list-inside space-y-1 text-emerald-900/80 mt-1">
                        <li><code>public.consultations</code> ({data.consultations.length} records)</li>
                        <li><code>public.proposals</code> ({data.proposals.length} records)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* 4. ADMIN SECURITY TAB */}
              {activeTab === 'security' && (
                <div className="space-y-6 max-w-xl mx-auto">
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-emerald-600" />
                      <h4 className="text-sm font-bold text-slate-900">Admin Account Details</h4>
                    </div>
                    <div className="text-xs space-y-1 text-slate-600">
                      <div><strong className="text-slate-800">Admin Name:</strong> {session.name}</div>
                      <div><strong className="text-slate-800">Email:</strong> {session.email}</div>
                      <div><strong className="text-slate-800">Access Tier:</strong> Primary Administrator</div>
                      <div><strong className="text-slate-800">Session Started:</strong> {new Date(session.loginTime).toLocaleString()}</div>
                    </div>
                  </div>

                  {/* Change Password */}
                  <form onSubmit={handleUpdatePassword} className="p-5 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-sm">
                    <div className="flex items-center gap-2">
                      <Key className="w-4 h-4 text-blue-600" />
                      <h4 className="text-sm font-bold text-slate-900">Update Master Password</h4>
                    </div>

                    {pwdMsg && (
                      <div className={`p-3 rounded-xl text-xs flex items-center gap-1.5 ${
                        pwdMsg.type === 'success' 
                          ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' 
                          : 'bg-rose-50 text-rose-800 border border-rose-200'
                      }`}>
                        {pwdMsg.type === 'success' ? <CheckCircle2 className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
                        <span>{pwdMsg.text}</span>
                      </div>
                    )}

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Current Password</label>
                      <input
                        type="password"
                        required
                        value={currentPwd}
                        onChange={(e) => setCurrentPwd(e.target.value)}
                        placeholder="••••••••"
                        className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">New Password (min 6 characters)</label>
                      <input
                        type="password"
                        required
                        value={newPwd}
                        onChange={(e) => setNewPwd(e.target.value)}
                        placeholder="••••••••"
                        className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <button
                      type="submit"
                      className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition cursor-pointer"
                    >
                      Update Password
                    </button>
                  </form>
                </div>
              )}

            </div>

          </div>
        )}

      </div>
    </div>
  );
};
