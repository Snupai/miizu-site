'use client';

export default function CommissionsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#000000] to-[#15162c] text-white pt-20 pb-32">
      <div className="container mx-auto px-4">
        <h1 className="text-6xl font-bold mb-8 mt-16 text-center">Commissions</h1>
        
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <section className="mb-16">
            <h2 className="text-8xl font-bold mb-6 text-center">Let&apos;s work together!</h2>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">What I Offer</h2>
            <ul className="space-y-4 text-lg">
              <li>✦ Animations</li>
              <li>✦ Video Editing</li>
              <li>✦ Sound Design</li>
            </ul>
          </section>

          <section className="mb-16">
            <p className="text-lg mb-4">
                Contact me directly on Instagram
            </p>
            <div className="flex justify-center">
                <button aria-label="Quick Contact" className="bg-white text-black px-4 py-2 rounded-full hover:bg-pink-200 transition-colors" onClick={() => window.open('https://www.instagram.com/miizumelon/')}>Quick Contact</button>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
