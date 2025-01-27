'use client';

import { useState } from 'react';

export type Video = {
  src: string;
  title: string;
  fullWidth: boolean;
};

interface VideoGridProps {
  videos: Video[];
}

type PlayingVideos = Record<number, boolean>;

export default function VideoGrid({ videos }: VideoGridProps) {
  const [playingVideos, setPlayingVideos] = useState<PlayingVideos>({});

  const handleVideoClick = (index: number) => {
    setPlayingVideos(prev => ({ ...prev, [index]: true }));
  };

  const renderVideo = (video: Video, index: number) => (
    <div className={`flex flex-col ${video.fullWidth ? 'md:col-span-2' : ''}`} key={index}>
      <div className="aspect-video rounded-xl overflow-hidden relative">
        <iframe 
          title={`Video player ${index}`}
          className="embed-content"
          src={video.src}
          frameBorder="0"
          allowFullScreen
          style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
        />
        {!playingVideos[index] && (
          <div 
            className="absolute inset-0 bg-transparent cursor-pointer"
            onClick={() => handleVideoClick(index)}
          />
        )}
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