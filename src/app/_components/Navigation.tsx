'use client'

import Link from 'next/link'

export default function Navigation() {
  return (
    <div className="fixed top-2 left-1/2 -translate-x-1/2 z-50">
      <Link href="/">
        <div className="bg-black w-11 h-11 rounded-full flex items-center justify-center cursor-pointer">
          <img
            src="/images/sentimental.png"
            alt="Sentimental"
            className="w-7 h-7 object-contain"
          />
        </div>
      </Link>
    </div>
  )
}
