"use client"

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/success-stories", label: "Success Stories" },
  { href: "/calendlybooking", label: "Schedule a free consultation" },
]

function FooterNav() {
  const pathname = usePathname()
  
  return (
    <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mb-8 border-b border-gold/30 pb-8 text-center">
      {navItems.map((item) => 
        item.href !== pathname && (
          <Link 
            key={item.href}
            href={item.href} 
            className="text-gold hover:text-gold-light transition-colors"
          >
            {item.label}
          </Link>
        )
      )}
    </div>
  )
}

export function Footer() {
  return (
    <footer className="bg-navy-light text-white py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Navigation Links */}
        <FooterNav />

        <div className="flex flex-col items-center text-center">
          {/* Image */}
          <div className="mb-6">
            <Image
              src="/FooterFred.jpg"
              width={120}
              height={120}
              alt="Fred Talisman MFT"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Text Content */}
          <div className="space-y-4 w-full max-w-md">
            <h3 className="text-2xl font-serif">Fred Talisman MFT</h3>
            <p>
              Cell:{" "}
              <a href="tel:+13104293658" className="text-gold hover:text-gold-light transition-colors underline">
                1-310-429-3658
              </a>
            </p>
            <p>
              Email:{" "}
              <a href="mailto:Fred@fredtalisman.com" className="text-gold hover:text-gold-light transition-colors">
                Fred@FredTalisman.com
              </a>
            </p>
            <div className="flex flex-col items-center gap-4">
              <Link 
                href="/calendlybooking" 
                className="inline-block bg-navy hover:bg-navy-light text-gold py-3 px-6 rounded-lg transition-colors text-lg font-semibold mb-4 underline hover:no-underline"
              >
                Schedule a free consultation
              </Link>
              <a 
                href="https://www.instagram.com/fred_talisman/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold-light transition-colors flex justify-center"
                aria-label="Follow on Instagram"
              >
                <svg 
                  className="w-10 h-10" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-sm mt-8 text-gray-400">
          © {new Date().getFullYear()} Effective Tools for Success LLC All rights reserved.
        </div>
      </div>
    </footer>
  )
} 