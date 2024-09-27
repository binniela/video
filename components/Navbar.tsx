'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

function NavItem({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-sm font-medium text-gray-700 hover:text-blue-600">
      {children}
    </Link>
  )
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-black">
          Auxilium<span className="text-blue-600">.</span>
        </Link>
        <div className="hidden md:flex items-center space-x-4">
          <NavItem href="#products">Products</NavItem>
          <NavItem href="#methods">Methods</NavItem>
          <NavItem href="#resources">Resources</NavItem>
          <NavItem href="#docs">Docs</NavItem>
          <NavItem href="#company">Company</NavItem>
          <NavItem href="#pricing">Pricing</NavItem>
        </div>
        <div className="flex items-center space-x-2">
          <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
            Get a demo
          </button>
          <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Sign up
          </button>
        </div>
      </nav>
    </header>
  )
}