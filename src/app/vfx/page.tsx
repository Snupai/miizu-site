'use client';

import { type Video } from '../_components/VideoGrid';
import VideoGrid from '../_components/VideoGrid';

const videos: Video[] = [
  {
    src: "https://www-ccv.adobe.io/v1/player/ccv/GjZsHjGMijY/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
    title: "Clip from my Index Controller Review",
    fullWidth: false
  },
  {
    src: "https://www-ccv.adobe.io/v1/player/ccv/Srm_tW5QJGc/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
    title: "Clip from my Index Controller Review",
    fullWidth: false
  },
  {
    src: "https://www-ccv.adobe.io/v1/player/ccv/CuJxJ3Urd8W/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
    title: "Clip from my Index Controller Review",
    fullWidth: false
  },
  {
    src: "https://www-ccv.adobe.io/v1/player/ccv/KtvmmAq5UVD/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
    title: "Clip from my Index Controller Review",
    fullWidth: false
  },
]

export default function VFX() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#000000] to-[#15162c] text-white pt-20 pb-32">
      <div className="container mx-auto px-4">
        <h1 className="text-6xl font-bold mb-8 mt-16 text-center">VFX</h1>
        <p className="text-xl mb-16 text-center">Visual Effects on some of my newest Youtube posts.</p>
        <VideoGrid videos={videos} />
      </div>
    </main>
  )
}