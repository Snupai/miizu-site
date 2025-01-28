'use client';

import { useState } from 'react';
import ExternalContent from './ExternalContent';

export type Video = {
  src: string;
  title: string;
  fullWidth: boolean;
};

interface VideoGridProps {
  videos: Video[];
}

export default function VideoGrid({ videos }: VideoGridProps) {
  const [loadedVideos, setLoadedVideos] = useState<Record<number, boolean>>({});

  const handleIframeLoad = (index: number) => {
    setLoadedVideos(prev => ({ ...prev, [index]: true }));
  };

  const renderVideo = (video: Video, index: number) => (
    <div className={`flex flex-col ${video.fullWidth ? 'md:col-span-2' : ''}`} key={index}>
      <div className="relative overflow-hidden rounded-xl">
        {!loadedVideos[index] && (
          <div className="absolute inset-0 animate-pulse bg-gray-800" />
        )}
        <ExternalContent
          src={video.src}
          title={`Video player ${index}`}
          type="video"
          onLoad={() => handleIframeLoad(index)}
        />
      </div>
      <p className="mt-2 text-center text-sm text-white">{video.title}</p>
    </div>
  );

  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2">
      {videos.map((video, index) => renderVideo(video, index))}
    </div>
  );
}