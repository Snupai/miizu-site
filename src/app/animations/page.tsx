'use client';

import VideoGrid, { Video } from '../_components/VideoGrid';

const videos: Video[] = [
  {
    src: "https://www-ccv.adobe.io/v1/player/ccv/HXLiRAQ-aAg/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
    title: "NEWEST: AMV for Epidemic Sound",
    fullWidth: true
  },
  {
    src: "https://www-ccv.adobe.io/v1/player/ccv/UHEC9WibFXQ/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
    title: "Intro part - VRCHAT UNCENSORED",
    fullWidth: false
  },
  {
    src: "https://www-ccv.adobe.io/v1/player/ccv/Krb68pt3Lxm/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
    title: "AMV for Social Media",
    fullWidth: false
  },
  {
    src: "https://www-ccv.adobe.io/v1/player/ccv/NBfN3uLIRcB/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
    title: "THE CLIMB! - Animation for Ryan Trahan (Concept)",
    fullWidth: false
  },
  {
    src: "https://www-ccv.adobe.io/v1/player/ccv/LtWHS7kxZLB/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
    title: "Donation Stream Alert for myself",
    fullWidth: false
  },
  {
    src: "https://www-ccv.adobe.io/v1/player/ccv/MLEbpIMFmgE/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
    title: "My Outro",
    fullWidth: true
  },
  {
    src: "https://www-ccv.adobe.io/v1/player/ccv/I2wM4_I6vda/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
    title: "Clip from my Index Controller Review",
    fullWidth: false
  },
  {
    src: "https://www-ccv.adobe.io/v1/player/ccv/7erYwGASLhh/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
    title: "Clip from my Index Controller Review",
    fullWidth: false
  },
  {
    src: "https://www-ccv.adobe.io/v1/player/ccv/Pz8mQY9e-xa/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
    title: "Clip from my Index Controller Review",
    fullWidth: true
  }
];

export default function AnimationsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#000000] to-[#15162c] text-white pt-20 pb-32">
      <div className="container mx-auto px-4">
        <h1 className="text-6xl font-bold mb-8 mt-16 text-center">Animations</h1>
        <p className="text-xl mb-16 text-center">After Effects Animations for my Social Media content.</p>
        <VideoGrid videos={videos} />
      </div>
    </main>
  );
}
