'use client';

import { IconChevronDown } from "@tabler/icons-react";
import SocialMediaLinks from "./_components/SocialMediaLinks";
import Image from 'next/image'
import * as React from "react";

export default function HomePage() {
  const scrollToNextSection = () => {
    const targetElement = document.getElementById('cards');
    if (!targetElement) return;
    
    const start = window.scrollY;
    const target = targetElement.offsetTop;
    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeInOutQuart = (x: number): number => {
        return x < 0.5 
          ? 8 * x * x * x * x 
          : 1 - Math.pow(-2 * x + 2, 4) / 2;
      };
      
      window.scrollTo(0, start + (target - start) * easeInOutQuart(progress));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#000000] to-[#15162c] text-white">
      {/* Hero Section - Full width */}
      <div className="relative h-screen">
          {/* Video Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="bg-gradient-to-b from-[#50038f] to-[#400377] h-full w-full">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
            >
              <source 
                src="https://h8xit2v5n4.ufs.sh/f/j1TrUrDzTEZYK4AFykZdXxCW9yvRpw8bU4tDrcjHNoPBEKul"
                type="video/mp4"
              />
            </video>
          </div>
          {/* Grey Overlay */}
          <div className="absolute inset-0 bg-gray-900/75"></div>
        </div>

        {/* Content */}
        <div className="relative flex h-full min-h-[80vh] flex-col items-center justify-center text-center pt-16">
          <h1 className="mb-12 text-6xl font-bold tracking-tight">Hey I&apos;m Miizu</h1>
          <p className="mb-12 text-xl text-gray-200">wanna see something cool?</p>
          <SocialMediaLinks />
          <div className="absolute bottom-32 left-0 right-0 mx-auto text-xl font-semibold text-gray-400 
              transition-colors duration-300 cursor-pointer titillium-web-semibold">
            <button 
              aria-label="Scroll down" 
              onClick={scrollToNextSection}
            >
              <IconChevronDown className="h-20 w-20 transition-all duration-300 hover:animate-soft-bounce" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Reel Section */}
      <div id="cards" className="min-h-screen">
        <div className="container mx-auto px-4 py-16 flex items-center justify-center min-h-screen">
          <section>
            <h2 className="mb-8 text-3xl font-semibold"></h2>
            <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto">
              <a href="/animations" className="group relative overflow-hidden rounded-xl transform hover:-translate-x-2 hover:-rotate-2 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-300 ease-out" style={{ aspectRatio: '1381/1080' }}>
                <Image 
                  src="/images/animations.png" 
                  alt="Examples of my Animation Work"
                  width={1381}
                  height={1080}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/40 transition-colors duration-300">
                  <h3 className="text-xl font-bold">Animations</h3>
                </div>
              </a>

              <a href="/vfx" className="group relative overflow-hidden rounded-xl transform hover:translate-x-2 hover:rotate-2 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-300 ease-out" style={{ aspectRatio: '1381/1080' }}>
                <Image 
                  src="/images/vfx.png" 
                  alt="Examples of my Visual Effects and Compositing Work"
                  width={1381}
                  height={1080}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/40 transition-colors duration-300">
                  <h3 className="text-xl font-bold">VFX</h3>
                </div>
              </a>

              <a href="/thumbnails" className="group relative overflow-hidden rounded-xl transform hover:-translate-x-2 hover:-rotate-2 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-300 ease-out" style={{ aspectRatio: '1381/1080' }}>
                <Image 
                  src="/images/thumbnails.png" 
                  alt="Examples of my YouTube Thumbnail Designs"
                  width={1381}
                  height={1080}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/40 transition-colors duration-300">
                  <h3 className="text-xl font-bold">Thumbnails</h3>
                </div>
              </a>

              <a href="/commissions" className="group relative overflow-hidden rounded-xl transform hover:translate-x-2 hover:rotate-2 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-300 ease-out" style={{ aspectRatio: '1381/1080' }}>
                <Image 
                  src="/images/commissions.png" 
                  alt="Examples of my Commission Work"
                  width={1381}
                  height={1080}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/40 transition-colors duration-300">
                  <h3 className="text-xl font-bold">Commissions</h3>
                </div>
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
