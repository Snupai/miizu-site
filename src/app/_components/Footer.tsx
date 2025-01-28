'use client'

import SocialMediaLinks from './SocialMediaLinks'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm py-4">
      <div className="container mx-auto text-center text-sm text-gray-400">
        <SocialMediaLinks />
        <div className="mt-2 flex flex-col items-center justify-center gap-2 md:flex-row md:gap-4">
          <p className="flex items-center gap-1">
            Made with{' '}
            <span className="inline-block animate-pulse text-red-500">❤</span>
            {' '}by Miizu
          </p>
          {/*
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/imprint" className="hover:text-white">
              Imprint
            </Link>
          </div>
          */}
        </div>
      </div>
    </footer>
  )
}
