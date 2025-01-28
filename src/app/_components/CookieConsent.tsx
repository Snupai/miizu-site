'use client';

import { useState, useEffect } from 'react';

export type CookieConsent = {
  analytics: boolean;
  external: boolean;
};

export const getCookieConsent = (): CookieConsent | null => {
  const consent = localStorage.getItem('cookie-consent');
  return consent ? JSON.parse(consent) : null;
};

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const existingConsent = getCookieConsent();
    if (!existingConsent) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const consent: CookieConsent = {
      analytics: true,
      external: true,
    };
    localStorage.setItem('cookie-consent', JSON.stringify(consent));
    setShowBanner(false);
  };

  const handleRejectAll = () => {
    const consent: CookieConsent = {
      analytics: false,
      external: false,
    };
    localStorage.setItem('cookie-consent', JSON.stringify(consent));
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-black/95 p-4 shadow-lg">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col gap-4 text-white md:flex-row md:items-center md:justify-between">
          <div className="flex-1">
            <h3 className="mb-2 text-lg font-semibold">Cookie Settings</h3>
            <p className="text-sm text-gray-300">
              We use cookies to enhance your browsing experience and analyze our traffic. This includes
              external content from Adobe and YouTube. By clicking "Accept All", you consent to our use
              of cookies. You can reject non-essential cookies by clicking "Reject All".
            </p>
          </div>
          <div className="flex flex-col gap-2 md:flex-row">
            <button
              onClick={handleRejectAll}
              className="rounded-full border border-white px-6 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Reject All
            </button>
            <button
              onClick={handleAcceptAll}
              className="rounded-full bg-white px-6 py-2 text-sm font-semibold text-black transition hover:bg-gray-200"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 