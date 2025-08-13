"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"

export function Navigation() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Only apply sticky logic if menu is closed OR on desktop
      if (!isMenuOpen || window.innerWidth >= 768) { 
        setIsScrolled(window.scrollY > 20) // Adjust threshold if needed
      } else {
        // Keep non-scrolled state if mobile menu is open and scrolling
        setIsScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    // Add resize listener to handle scroll logic correctly if window size changes
    window.addEventListener("resize", handleScroll)
    // Initial check
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [isMenuOpen]) // Re-run effect if isMenuOpen changes

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/success-stories", label: "Success Stories" },
    { href: "/call", label: "Schedule a free consultation" },
  ]

  // Toggle body scroll based on menu state
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <nav
      // Removed sticky class - banner is now always visible, nav below scrolls with page unless menu open
      className={`relative z-50 transition-colors duration-300 ${isScrolled ? "bg-navy-light shadow-lg" : "bg-navy"}`}
    >
       {/* Yellow Banner - removed vertical padding on mobile */}
       <div className="bg-gold text-navy py-0 md:py-2 px-4">
         {/* Centered on desktop, space-between on mobile */}
         <div className="container mx-auto flex justify-between md:justify-center items-center">
            {/* Updated Phone Number & Text */}
            <span className="font-semibold text-xs sm:text-sm">
             Call or text Fred Talisman, MFT now at{" "}
             <a href="tel:13105893992" className="text-navy-light underline hover:no-underline transition-colors">
                1-310-589-3992
             </a>
           </span>
            {/* Mobile menu button - moved inside banner */}
           <div className="md:hidden">
              <button 
               onClick={() => setIsMenuOpen(!isMenuOpen)}
               className="text-navy hover:text-navy-light"
               aria-label={isMenuOpen ? "Close menu" : "Open menu"}
               aria-expanded={isMenuOpen}
             >
               <svg 
                 xmlns="http://www.w3.org/2000/svg" 
                 fill="none" 
                 viewBox="0 0 24 24" 
                 strokeWidth={2} // Slightly thicker stroke
                 stroke="currentColor" 
                 className="w-7 h-7" // Slightly larger icon
               >
                 {isMenuOpen ? (
                   <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /> // X icon
                 ) : (
                   <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" /> // Hamburger variant (last line shorter)
                 )}
               </svg>
             </button>
            </div>
         </div>
       </div>
       
       {/* Main Navigation Bar - Hidden on mobile */}
       <div className={`hidden md:block transition-all duration-300 ${isScrolled ? "bg-navy-light shadow-lg" : "bg-navy"} sticky top-0 z-40`}>
        <div className="container mx-auto px-4">
         {/* Adjusted Layout - Center title container on mobile, space-between on desktop */} 
          <div className="flex justify-center md:justify-between items-center h-16"> 
             {/* Container for titles - centered on mobile */}
             <div className="text-center md:text-left">
                {/* Mobile Title - REMOVED */} 
                 {/* Desktop Title Link - Hidden on mobile */} 
                 <Link 
                   href="/" 
                   className="hidden md:inline-block text-lg sm:text-xl md:text-2xl font-serif font-medium text-gold hover:text-gold-light transition-colors tracking-wide"
                 >
                   Fred Talisman MFT Relationship Saver
                 </Link>
             </div>
            
            {/* Desktop menu */} 
            <div className="hidden md:flex items-center space-x-8">
              <ul className="flex space-x-8">
                {navItems.map(
                  (item) =>
                    // Removed pathname check, show all links including current page
                    // pathname !== item.href && (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className={`transition-colors text-lg font-medium ${pathname === item.href ? 'text-gold' : 'text-white hover:text-gold'}`}
                          aria-current={pathname === item.href ? 'page' : undefined}
                        >
                          {item.label}
                        </Link>
                      </li>
                    // ),
                )}
              </ul>
            </div>

            {/* Mobile menu button - Placeholder for spacing on desktop? Or remove flex justify-end? */}
            {/* The button is now in the banner above */}
            {/* If justify-end is kept, maybe add an empty div for balance? */} 
             <div className="md:hidden w-6 h-6"></div> {/* Empty div to maintain justify-end on mobile (invisible) */} 
          </div>
        </div>
       </div>

        {/* Mobile menu dropdown - Full screen overlay */}
        {isMenuOpen && (
           <div 
             className="md:hidden fixed inset-0 bg-navy-light z-50 overflow-y-auto flex flex-col pt-20 px-4"
             // Added pt-20 matching approx height of banner + nav
           >
              {/* Close button inside overlay */}
              <button 
                 onClick={() => setIsMenuOpen(false)} 
                 className="absolute top-4 right-4 text-white hover:text-gold p-2"
                 aria-label="Close menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
             
             <ul className="space-y-6 text-center mt-8 flex-grow">
               {navItems.map((item) => (
                   <li key={item.href}>
                     <Link
                       href={item.href}
                       className={`block text-2xl font-semibold transition-colors ${pathname === item.href ? 'text-gold' : 'text-white hover:text-gold'}`}
                       onClick={() => setIsMenuOpen(false)} // Close menu on click
                       aria-current={pathname === item.href ? 'page' : undefined}
                     >
                       {item.label}
                     </Link>
                   </li>
                 )
               )}
             </ul>
             {/* Optional: Add contact info or CTA in menu */}
              <div className="py-8 text-center text-white/80">
                  {/* Removed Name as requested */}
                  {/* <p>Fred Talisman MFT</p> */}
                  <p><a href="tel:13105893992" className="hover:text-gold">1-310-589-3992</a></p>
              </div>
           </div>
         )}
    </nav>
  )
}

