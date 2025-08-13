import Link from "next/link";

// Decorative divider component (reusing from other pages)
const SectionDivider = () => (
  <div className="flex items-center justify-center py-6 my-2">
    <div className="w-1/4 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>
    <div className="mx-3">
      <div className="w-2 h-2 rounded-full bg-gold transform rotate-45"></div>
    </div>
    <div className="w-1/4 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>
  </div>
);

export default function LearnMore() {
  return (
    <div className="min-h-screen bg-navy text-white">
      {/* Main Content Section */}
      <section className="bg-navy-light py-8">
        <div>
          
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white text-center mb-8 leading-tight px-4">
            Save Your Relationship
          </h1>
          
          {/* Video Embed Container */}
          <div className="flex justify-center mb-10">
            <video 
              controls
              className="h-auto"
              style={{ 
                maxHeight: '80vh',
                minHeight: '600px',
                width: 'auto'
              }}
            >
              <source src="/FredTalisman_VSL_final.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          
          {/* Call-to-Action Buttons  */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 px-4">
            {/* Book a Call Button */}
            <Link
              href="/calendlybooking"
              className="w-full sm:w-auto inline-block bg-gold hover:bg-gold-light text-navy font-bold py-4 px-8 rounded-full transition-all text-lg sm:text-xl text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200"
            >
              Book a Free Discovery Call
            </Link>
            
            {/* Call Now Button */}
            <a
              href="tel:13105893992"
              className="w-full sm:w-auto inline-block bg-gold hover:bg-gold-light text-navy font-bold py-4 px-8 rounded-full transition-all text-lg sm:text-xl text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200"
            >
              Call Now: 1-310-589-3992
            </a>
          </div>
          
          <SectionDivider />
          
          {/* Additional Context/Trust Elements */}
          <div className="text-center space-y-4 mt-8 px-4">
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
              Take the first step towards saving your relationship today. 
              Whether you prefer to schedule a consultation or speak immediately, 
              I'm here to help you rescue your relationship.
            </p>
            
            <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto">
              For over 25 years, I've helped thousands of couples save their relationships, 
              even when only one partner was willing to get help.
            </p>
            
            {/* Secondary CTA */}
            <div className="pt-6">
              <p className="text-gold font-semibold text-lg mb-3">
                Same day, evening & weekend appointments available
              </p>
              <p className="text-white/70">
                Sessions available in person, via Zoom, FaceTime, WhatsApp, or phone
              </p>
            </div>
          </div>
          
        </div>
      </section>
      
      {/* Bottom Section with Additional Info */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gold mb-6">
            Why Choose Fred Talisman, MFT?
          </h2>
          
          <div className="space-y-4 text-left bg-navy-light p-6 rounded-lg border border-white/10">
            <p className="text-white/90 flex items-start">
              <span className="text-gold mr-3 text-xl">✓</span>
              <span>Licensed Marriage & Family Therapist with 25+ years of experience</span>
            </p>
            <p className="text-white/90 flex items-start">
              <span className="text-gold mr-3 text-xl">✓</span>
              <span>Specializes in crisis relationships on the brink of ending</span>
            </p>
            <p className="text-white/90 flex items-start">
              <span className="text-gold mr-3 text-xl">✓</span>
              <span>Can help even when only one partner is willing to work on the relationship</span>
            </p>
            <p className="text-white/90 flex items-start">
              <span className="text-gold mr-3 text-xl">✓</span>
              <span>Pro-marriage, pro-relationship, pro-family approach</span>
            </p>
            <p className="text-white/90 flex items-start">
              <span className="text-gold mr-3 text-xl">✓</span>
              <span>Proven success with infidelity, broken trust, and severe relationship issues</span>
            </p>
          </div>
          
          {/* Final CTA */}
          <div className="mt-10 space-y-4">
            <p className="text-xl text-white/90 font-semibold">
              Don't wait another day to save your relationship
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/calendlybooking"
                className="inline-block bg-gold hover:bg-gold-light text-navy font-bold py-3 px-6 rounded-full transition-all text-base sm:text-lg text-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Schedule Your Free Call
              </Link>
              
              <a
                href="tel:13105893992"
                className="inline-block bg-gold hover:bg-gold-light text-navy font-bold py-3 px-6 rounded-full transition-all text-base sm:text-lg text-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Call or Text Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
