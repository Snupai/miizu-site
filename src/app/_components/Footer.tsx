'use client'

import { IconHeart } from '@tabler/icons-react'
import SocialMediaLinks from './SocialMediaLinks'

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm py-4">
      <div className="container mx-auto text-center text-sm text-gray-400">
        <SocialMediaLinks />
        <p className="flex items-center justify-center gap-1 mt-2">
          Made with{' '}
            <span className="text-red-500 animate-pulse inline-block">❤</span>
            {' '}by Miizu
        </p>
      </div>
    </footer>
  )
}
