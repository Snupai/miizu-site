'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Navigation() {
  return (
    <div className="fixed top-2 left-1/2 -translate-x-1/2 z-50">
      <Link href="/">
        <div className="bg-black w-11 h-11 rounded-full flex items-center justify-center cursor-pointer">
          <Image
            src="/images/sentimental.png"
            alt="Sentimental"
            width={28}
            height={28}
            className="object-contain"
          />
        </div>
      </Link>
    </div>
  )
}
