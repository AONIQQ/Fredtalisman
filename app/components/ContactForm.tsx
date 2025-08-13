"use client";

import React from "react";

export default function ContactForm() {
  return (
    <section className="bg-navy-light py-12 md:py-20 border-t border-gold/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold text-gold mb-8 text-center">
          Contact Fred Today
        </h2>
        <form 
          action="https://formsubmit.co/fred@fredtalisman.com" 
          method="POST"
          className="max-w-xl mx-auto bg-navy p-8 rounded-lg shadow-lg space-y-6"
        >
          {/* FormSubmit hidden inputs */}
          <input type="hidden" name="_subject" value="New Contact Form Submission!"/>
          {/* Optional: Add a redirect URL after submission */}
          {/* <input type="hidden" name="_next" value="https://yourdomain.co/thanks.html"/> */}
          {/* Optional: Disable Captcha */}
          {/* <input type="hidden" name="_captcha" value="false"/> */}

          <div>
            <label htmlFor="name" className="block text-gold text-sm font-bold mb-2">
              Name <span className="text-red-500">*</span>
            </label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required 
              className="shadow appearance-none border border-gold/30 rounded w-full py-3 px-4 bg-navy-light text-white leading-tight focus:outline-none focus:shadow-outline focus:border-gold" 
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gold text-sm font-bold mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required 
              className="shadow appearance-none border border-gold/30 rounded w-full py-3 px-4 bg-navy-light text-white leading-tight focus:outline-none focus:shadow-outline focus:border-gold" 
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-gold text-sm font-bold mb-2">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              required 
              className="shadow appearance-none border border-gold/30 rounded w-full py-3 px-4 bg-navy-light text-white leading-tight focus:outline-none focus:shadow-outline focus:border-gold" 
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gold text-sm font-bold mb-2">
              Message
            </label>
            <textarea 
              id="message" 
              name="message" 
              rows={4}
              className="shadow appearance-none border border-gold/30 rounded w-full py-3 px-4 bg-navy-light text-white leading-tight focus:outline-none focus:shadow-outline focus:border-gold" 
            ></textarea>
          </div>
          <div className="text-center">
            <button 
              type="submit" 
              className="bg-gold hover:bg-gold-light text-navy font-bold py-3 px-8 rounded-full transition-colors text-lg focus:outline-none focus:shadow-outline"
            >
              Send Message
            </button>
          </div>
        </form>
        <p className="text-center text-gold/70 mt-4 text-sm">
          We respect your privacy. Your information is confidential.
        </p>
      </div>
    </section>
  );
} 