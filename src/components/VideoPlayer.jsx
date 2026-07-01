import { Play } from 'lucide-react';

export default function VideoPlayer({ videoUrl, title }) {
  if (!videoUrl) return null;

  return (
    <div>
      <div className="video-player-label">
        <Play size={18} />
        Video Pembelajaran
      </div>
      <div className="video-player">
        <div className="video-player-wrapper">
          <iframe
            src={videoUrl}
            title={title || 'Video Pembelajaran'}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
