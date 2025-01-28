import { useEffect, useState } from 'react';
import { type CookieConsent, getCookieConsent } from './CookieConsent';

interface ExternalContentProps {
  src: string;
  title: string;
  type: 'video';
  onLoad?: () => void;
}

export default function ExternalContent({ src, title, type, onLoad }: ExternalContentProps) {
  const [consent, setConsent] = useState<CookieConsent | null>(null);
  const [showPlaceholder, setShowPlaceholder] = useState(true);

  useEffect(() => {
    const savedConsent = getCookieConsent();
    setConsent(savedConsent);
    if (savedConsent?.external) {
      setShowPlaceholder(false);
    }
  }, []);

  const handleLoadContent = () => {
    setShowPlaceholder(false);
  };

  if (showPlaceholder) {
    return (
      <div className="relative aspect-video w-full bg-gray-800">
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-4 text-center">
          <p className="text-sm text-gray-300">
            This content is hosted by a third party. By showing it, you accept their cookies and privacy policy.
          </p>
          <button
            onClick={handleLoadContent}
            className="rounded-full bg-white px-6 py-2 text-sm font-semibold text-black transition hover:bg-gray-200"
          >
            Load content
          </button>
        </div>
      </div>
    );
  }

  return (
    <iframe
      title={title}
      src={src}
      className="aspect-video w-full"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      onLoad={onLoad}
    />
  );
} 