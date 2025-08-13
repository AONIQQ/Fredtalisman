'use client';

import React from 'react';
import Script from 'next/script';

export default function BookPage() {
  return (
    <div className="container mx-auto px-4 text-center">
      <h1 className="text-4xl font-serif mb-4">Schedule a free consultation</h1>
      <p className="mb-4">Please select a time that works for you from the calendar below.</p>
      <div 
        className="calendly-inline-widget"
        style={{ 
          minWidth: '320px', 
          height: '700px', 
          backgroundColor: '#1a2f5a'
        }}
        data-url="https://calendly.com/saveyourrelationship/15-30-minute-discovery-call-with-fred?background_color=1a2f5a&text_color=ffffff&primary_color=c8a05e"
      >
        <p className="text-white/70 pt-10">Loading scheduling options...</p> 
      </div>

      <Script 
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />

      <div className="mt-8"></div>
    </div>
  )
}

export {}; // Explicitly mark as module
