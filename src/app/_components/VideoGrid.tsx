'use client';

export type Video = {
  src: string;
  title: string;
  fullWidth: boolean;
};

interface VideoGridProps {
  videos: Video[];
}

export default function VideoGrid({ videos }: VideoGridProps) {
  const renderVideo = (video: Video, index: number) => (
    <div className={`flex flex-col ${video.fullWidth ? 'md:col-span-2' : ''}`} key={index}>
      <div className="aspect-video rounded-xl overflow-hidden relative">
        <iframe 
          title={`Video player ${index}`}
          className="embed-content"
          src={video.src}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
        />
      </div>
      <p className="text-white text-center text-sm mt-2">{video.title}</p>
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
      {videos.map((video, index) => renderVideo(video, index))}
    </div>
  );
}