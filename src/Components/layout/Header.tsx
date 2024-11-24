'use client'

import Image from 'next/image'
import Link from 'next/link'
import { MessageCircle, User } from 'lucide-react'

export function Header() {
  return (
    <header className="border-b">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <MessageCircle className="w-6 h-6 text-gray-600 cursor-pointer" />
        <Link href="/" className="flex-1 flex justify-center">
          <Image
            src="https://picsum.photos/200/50"
            alt="Tractor Marketplace"
            width={200}
            height={50}
            className="object-contain"
          />
        </Link>
        <User className="w-6 h-6 text-gray-600 cursor-pointer" />
      </div>
    </header>
  )
}