import { Play, Settings, Shield, Sparkles, Layout } from 'lucide-react';
import { useState, useRef } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useTranslation } from '../hooks/useTranslation';

export function VideoShowcase() {
  const { ref, isVisible } = useScrollAnimation();
  const t = useTranslation();

  const videos = [
    {
      id: 'overview',
      title: t.video.realtime.title,
      description: t.video.realtime.description,
      video: '/mcp-dandan.mp4',
      icon: Play
    },
    {
      id: 'setup',
      title: t.video.setup.title,
      description: t.video.setup.description,
      video: '/Mistral_setting.mp4',
      icon: Settings
    },
    {
      id: 'detection',
      title: t.video.detection.title,
      description: t.video.detection.description,
      video: '/TPA.mp4',
      icon: Shield
    },
    {
      id: 'control',
      title: t.video.control.title,
      description: t.video.control.description,
      video: '/change_server.mp4',
      icon: Sparkles
    },
    {
      id: 'ui',
      title: t.video.ui.title,
      description: t.video.ui.description,
      video: '/UI_features.mp4',
      icon: Layout
    }
  ];

  const [selectedVideo, setSelectedVideo] = useState(videos[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoChange = (video: typeof videos[0]) => {
    if (video.id !== selectedVideo.id) {
      setIsTransitioning(true);

      // 페이드 아웃 후 비디오 변경, 그 다음 페이드 인
      setTimeout(() => {
        setSelectedVideo(video);
        setTimeout(() => {
          setIsTransitioning(false);
        }, 100);
      }, 400);
    }
  };

  const handleVideoEnd = () => {
    const currentIndex = videos.findIndex(v => v.id === selectedVideo.id);
    const nextIndex = (currentIndex + 1) % videos.length;
    handleVideoChange(videos[nextIndex]);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div>
            <h2 className="text-gray-900 mb-6" style={{ whiteSpace: 'pre-line' }}>
              {t.video.title}
            </h2>
            <p className="text-gray-600 text-lg mb-8" style={{ whiteSpace: 'pre-line' }}>
              {t.video.description}
            </p>

            <div className="space-y-6">
              {videos.map((video, index) => {
                const Icon = video.icon;
                return (
                  <div
                    key={index}
                    className={`flex gap-4 cursor-pointer transition-all duration-500 ${
                      selectedVideo.id === video.id
                        ? 'scale-105'
                        : 'opacity-60 hover:opacity-100 hover:translate-x-2'
                    } ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
                    }`}
                    style={{
                      transitionDelay: isVisible ? `${(index + 1) * 100}ms` : '0ms'
                    }}
                    onClick={() => handleVideoChange(video)}
                  >
                    <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${
                      selectedVideo.id === video.id
                        ? 'bg-blue-600 scale-110'
                        : 'bg-blue-100'
                    }`}>
                      <Icon className={`w-6 h-6 transition-all ${
                        selectedVideo.id === video.id
                          ? 'text-white'
                          : 'text-blue-600'
                      }`} />
                    </div>
                    <div>
                      <h3 className="text-gray-900 mb-1">
                        {video.title}
                      </h3>
                      <p className="text-gray-600">
                        {video.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl opacity-10 blur-2xl"></div>
            <div className="relative rounded-2xl shadow-xl overflow-hidden border border-gray-200" style={{ backgroundColor: 'transparent' }}>
              <div className="relative w-full aspect-video">
                <video
                  ref={videoRef}
                  key={selectedVideo.id}
                  className={`w-full h-full transition-opacity duration-500 ${
                    isTransitioning ? 'opacity-0' : 'opacity-100'
                  }`}
                  style={{ backgroundColor: 'transparent' }}
                  autoPlay
                  muted
                  playsInline
                  preload="auto"
                  onEnded={handleVideoEnd}
                >
                  <source src={selectedVideo.video} type="video/mp4" />
                  {t.video.notSupported}
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
