'use client';

import { IconBrandInstagram, IconBrandX, IconBrandYoutubeFilled, IconMailFilled, IconChevronDown } from "@tabler/icons-react";
import SocialMediaLinks from "./_components/SocialMediaLinks";

export default function HomePage() {
  const scrollToNextSection = () => {
    const targetElement = document.getElementById('next-section');
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
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          >
            <source 
              src="/videos/Cc3tLIvmX7U_720-5120w.mp4" 
              media="(min-width: 2560px)"
              type="video/mp4" 
            />
            <source 
              src="/videos/Cc3tLIvmX7U_720-2560w.mp4" 
              media="(min-width: 1920px)"
              type="video/mp4" 
            />
            <source 
              src="/videos/Cc3tLIvmX7U_720-1920w.mp4"
              media="(min-width: 1280px)"
              type="video/mp4"
            />
            <source 
              src="/videos/Cc3tLIvmX7U_720-1280w.mp4"
              media="(min-width: 640px)"
              type="video/mp4"
            />
            <source 
              src="/videos/Cc3tLIvmX7U_576-640w.mp4"
              type="video/mp4"
            />
          </video>
          {/* Grey Overlay */}
          <div className="absolute inset-0 bg-gray-900/75"></div>
        </div>

        {/* Content */}
        <div className="relative flex h-full min-h-[80vh] flex-col items-center justify-center text-center pt-16">
          <h1 className="mb-12 text-6xl font-bold tracking-tight">Hey I'm Miizu</h1>
          <p className="mb-12 text-xl text-gray-200">wanna see something cool?</p>
          <SocialMediaLinks />
          <div className="absolute bottom-20 left-0 right-0 mx-auto text-xl font-semibold text-gray-400 
              transition-colors duration-300 cursor-pointer titillium-web-semibold">
            <button onClick={scrollToNextSection}>
              <IconChevronDown className="h-20 w-20 transition-all duration-300 hover:animate-soft-bounce" />
            </button>
          </div>
        </div>
      </div>

      {/* Reel Section */}
      <div id="next-section" className="min-h-screen">
        <div className="container mx-auto px-4 py-16 flex items-center justify-center min-h-screen">
          <section>
            <h2 className="mb-8 text-3xl font-semibold"></h2>
            <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto">
              <a href="/animations" className="group relative overflow-hidden rounded-xl transform hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-300" style={{ aspectRatio: '1381/1080' }}>
                <img 
                  src="/images/animations.png" 
                  alt="Animations"
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/40 transition-colors duration-300">
                  <h3 className="text-xl font-bold">Animations</h3>
                </div>
              </a>

              <a href="/vfx" className="group relative overflow-hidden rounded-xl transform hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-300" style={{ aspectRatio: '1381/1080' }}>
                <img 
                  src="/images/vfx.png" 
                  alt="VFX"
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/40 transition-colors duration-300">
                  <h3 className="text-xl font-bold">VFX</h3>
                </div>
              </a>

              <a href="/thumbnails" className="group relative overflow-hidden rounded-xl transform hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-300" style={{ aspectRatio: '1381/1080' }}>
                <img 
                  src="/images/thumbnails.png" 
                  alt="Thumbnails"
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/40 transition-colors duration-300">
                  <h3 className="text-xl font-bold">Thumbnails</h3>
                </div>
              </a>

              <a href="/commissions" className="group relative overflow-hidden rounded-xl transform hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-300" style={{ aspectRatio: '1381/1080' }}>
                <img 
                  src="/images/commissions.png" 
                  alt="Commissions" 
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

      {/* Container for the rest of the content */}
      <div className="container mx-auto px-4">
        {/* Services Grid */}
        <section className="mb-24">
          <h2 className="mb-8 text-3xl font-semibold">Services</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-2xl bg-white/5 p-6 backdrop-blur-sm transition hover:bg-white/10">
              <h3 className="mb-2 text-xl font-semibold">Video Editing</h3>
              <p className="text-gray-400">Professional video editing with attention to pacing, storytelling, and visual impact.</p>
            </div>
            <div className="rounded-2xl bg-white/5 p-6 backdrop-blur-sm transition hover:bg-white/10">
              <h3 className="mb-2 text-xl font-semibold">Motion Design</h3>
              <p className="text-gray-400">Creative motion graphics and visual effects that bring your content to life.</p>
            </div>
            <div className="rounded-2xl bg-white/5 p-6 backdrop-blur-sm transition hover:bg-white/10">
              <h3 className="mb-2 text-xl font-semibold">3D Animation</h3>
              <p className="text-gray-400">Stunning 3D animations and visualizations for any project needs.</p>
            </div>
          </div>
        </section>

        {/* Selected Projects */}
        <section className="mb-24">
          <h2 className="mb-8 text-3xl font-semibold">Selected Projects</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {[1, 2, 3, 4].map((project) => (
              <div key={project} className="group relative aspect-video overflow-hidden rounded-2xl bg-gray-900">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-gray-500">Project {project}</p>
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 transition group-hover:opacity-100">
                  <div className="flex h-full flex-col items-center justify-center p-4 text-center">
                    <h3 className="mb-2 text-xl font-semibold">Project Title</h3>
                    <p className="text-sm text-gray-300">Brief project description</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="mb-4 text-3xl font-semibold">Let's Work Together</h2>
          <p className="mb-8 text-gray-400">Available for freelance projects and collaborations</p>
          <a
            href="mailto:contact@example.com"
            className="inline-block rounded-full bg-white px-8 py-3 text-lg font-semibold text-black transition hover:bg-gray-200"
          >
            Get in Touch
          </a>
        </section>
      </div>
    </main>
  );
}
