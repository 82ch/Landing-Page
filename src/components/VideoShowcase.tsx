import { Play, Settings, Shield, Sparkles, Layout } from 'lucide-react';
import { useState, useRef } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const videos = [
  {
    id: 'overview',
    title: '실시간 탐지 및 차단',
    description: 'MCP 통신을 실시간으로 모니터링하고 보안 위협을 즉시 탐지합니다',
    video: '/mcp-dandan.mp4',
    icon: Play
  },
  {
    id: 'setup',
    title: '다양한 탐지엔진 설정',
    description: '원하는 탐지엔진을 선택하고 설정할 수 있습니다',
    video: '/Mistral_setting.mp4',
    icon: Settings
  },
  {
    id: 'detection',
    title: 'LLM 탐지',
    description: 'MCP Tool이 안전한지 실시간으로 분석합니다',
    video: '/TPA.mp4',
    icon: Shield
  },
  {
    id: 'control',
    title: '사용자 제어 & 오탐 방지',
    description: '탐지 결과를 확인하고 도구 허용/거절을 직접 제어할 수 있습니다',
    video: '/change_server.mp4',
    icon: Sparkles
  },
  {
    id: 'ui',
    title: 'UI 기능 소개',
    description: '직관적인 인터페이스와 다양한 UI 기능들',
    video: '/UI_features.mp4',
    icon: Layout
  }
];

export function VideoShowcase() {
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { ref, isVisible } = useScrollAnimation();

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
            <h2 className="text-gray-900 mb-6">
              실제 동작 영상으로<br />
              확인하세요
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              MCP-DANDAN이 실제로 어떻게 작동하는지 영상으로 확인하고,
              각 기능을 직접 체험해보세요.
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
                  브라우저가 비디오를 지원하지 않습니다.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
