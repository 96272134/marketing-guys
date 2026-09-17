import React, { useRef, useState, useEffect } from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';

export interface VideoSample {
  id: string;
  videoSrc: string;
}

export const VIDEO_SAMPLES_DATA: VideoSample[] = [
  { id: "sample-1", videoSrc: "/videos/0823.mp4" },
  { id: "sample-2", videoSrc: "/videos/0829(1).mp4" },
  { id: "sample-3", videoSrc: "/videos/cc%20xc.mp4" },
  { id: "sample-4", videoSrc: "/videos/crazistudio.mp4" },
  { id: "sample-5", videoSrc: "/videos/graphics%20videos.mp4" },
  { id: "sample-6", videoSrc: "/videos/Untitled%20369.mp4" },
  { id: "sample-7", videoSrc: "/videos/video.mp4" },
  { id: "sample-8", videoSrc: "/videos/video2.mp4" }
];

const VideoCard: React.FC<{ sample: VideoSample; indexKey: string }> = ({ sample, indexKey }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState<boolean>(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.defaultMuted = true;
    video.muted = true;
    video.play().catch(() => {});
  }, [sample.videoSrc]);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    const nextMuted = !video.muted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  return (
    <div 
      key={indexKey}
      className="relative shrink-0 w-[190px] sm:w-[210px] md:w-[220px] lg:w-[calc((min(100vw-4rem,1216px)-4*1.25rem)/5)] lg:max-w-[228px] aspect-[9/16] bg-slate-950 rounded-2xl overflow-hidden shadow-lg border border-slate-200/80 select-none group/video transition-transform duration-300 hover:shadow-2xl hover:-translate-y-1"
      style={{ transform: 'translateZ(0)' }}
    >
      {/* Background soft base */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-black pointer-events-none" />

      {/* Main Video - object-contain ensures full display without cropping text */}
      <video
        ref={videoRef}
        src={sample.videoSrc}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="relative z-10 w-full h-full object-contain pointer-events-none"
      />

      {/* Top-Right Mute / Unmute Button */}
      <div className="absolute top-3 right-3 z-20">
        <button
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute video" : "Mute video"}
          className="p-2 rounded-full bg-black/60 hover:bg-black/85 text-white backdrop-blur-md border border-white/25 transition-all cursor-pointer shadow-md hover:scale-110 active:scale-95 flex items-center justify-center"
          title={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? (
            <VolumeX className="w-3.5 h-3.5 text-white" />
          ) : (
            <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
          )}
        </button>
      </div>
    </div>
  );
};

export const VideoSamplesSection: React.FC = () => {
  const loopedVideos = [...VIDEO_SAMPLES_DATA, ...VIDEO_SAMPLES_DATA];

  return (
    <section id="video-samples" className="py-14 sm:py-16 bg-white relative overflow-hidden border-t border-slate-100">
      <style>{`
        @keyframes scrollRightToLeft {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        .video-marquee-track {
          display: flex;
          width: max-content;
          animation: scrollRightToLeft 45s linear infinite;
          will-change: transform;
          backface-visibility: hidden;
          perspective: 1000px;
        }
        .video-marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-3 border border-blue-100">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>High-Retention Creative</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-2">
            Video Samples
          </h2>
          <div className="w-14 h-1 bg-blue-600 mx-auto rounded-full mb-3"></div>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Check out our high-retention video edits, reels, and creative campaign samples designed to hook attention and drive conversions.
          </p>
        </div>
      </div>

      {/* Marquee Carousel Track */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative group w-full overflow-hidden select-none py-2">
          {/* Edge fading gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-16 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-16 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          {/* Sliding Cards */}
          <div className="video-marquee-track flex gap-5">
            {loopedVideos.map((sample, idx) => (
              <VideoCard 
                key={`video-${sample.id}-${idx}`} 
                sample={sample} 
                indexKey={`video-${sample.id}-${idx}`} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};