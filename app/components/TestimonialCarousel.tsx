'use client';

import { useState, useEffect, useCallback } from 'react';

// Testimonial data organized by category
const testimonialData = {
  "Emotional Breakthroughs": [
    "Fred gave us hope when we thought there was none left.",
    "I started with Fred hopeless and left believing in us again.",
    "We were moments from divorce — Fred saved our marriage.",
    "Fred's sessions turned our anger into understanding.",
    "We fell back in love because Fred showed us how.",
    "Fred helped me find the strength to believe in my marriage again.",
    "Without Fred, we would have been another divorce statistic.",
    "Fred helped us rebuild trust when we thought it was impossible.",
    "I was ready to give up — Fred showed me a better way.",
    "Fred's guidance helped us feel like a team again.",
    "Our home was a war zone — Fred brought back peace.",
    "Fred helped me find my partner again — under all the hurt.",
    "Fred made me believe forgiveness was possible.",
    "Thanks to Fred, my children still have a united family.",
    "We found love again after betrayal because of Fred.",
    "I felt heard for the first time in years after talking to Fred.",
    "Fred helped us stop blaming and start healing.",
    "We rediscovered why we fell in love in the first place.",
    "Fred taught us how to fight for each other, not against each other.",
    "My partner said 'I love you' again because of Fred's help."
  ],
  "Specific Success Stories": [
    "After three sessions with Fred, we stopped talking about divorce.",
    "Fred's methods healed wounds we thought were permanent.",
    "We survived infidelity because Fred showed us how.",
    "Fred turned our resentment into respect.",
    "My spouse moved back home after Fred's sessions.",
    "Fred's techniques helped us feel connected for the first time in years.",
    "Our communication improved dramatically after just one month.",
    "We saved our 20-year marriage with Fred's help.",
    "Fred's approach worked when traditional therapy failed.",
    "We were separated for 6 months — Fred helped us reunite stronger than ever.",
    "Fred helped us rebuild intimacy after betrayal.",
    "My spouse and I laugh together again thanks to Fred.",
    "Fred made saving our marriage feel possible, even joyful.",
    "Our arguments stopped escalating once Fred showed us better tools.",
    "Fred's sessions saved not just our marriage, but our family.",
    "Thanks to Fred, we can finally have hard conversations safely.",
    "Fred helped us move from pain to partnership.",
    "We renewed our vows after working with Fred.",
    "Our love life and friendship both came back stronger.",
    "Fred was the last counselor we were willing to try — and he was the one who made all the difference."
  ],
  "Fred's Unique Approach": [
    "Fred understood our situation better than anyone before.",
    "Unlike other counselors, Fred actually gave us tools that worked.",
    "Fred's sessions felt like real solutions, not just talk.",
    "Fred made us feel safe enough to be honest.",
    "Fred knew exactly how to help us move forward.",
    "Other therapists gave up on us — Fred never did.",
    "Fred teaches you not just to save the marriage but to make it thrive.",
    "Fred gave us hope without judgment.",
    "Fred's insight cut right to the heart of our issues.",
    "Fred is not just a counselor — he's a relationship saver."
  ]
};

const TestimonialCarousel = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Emotional Breakthroughs");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Get the testimonials for the active category
  const testimonials = testimonialData[activeCategory as keyof typeof testimonialData];
  
  // Handle next testimonial - removed currentIndex dependency
  const nextTestimonial = useCallback(() => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setIsTransitioning(false);
    }, 300); // Transition duration
  }, [testimonials.length, isTransitioning]);
  
  // Handle previous testimonial - removed currentIndex dependency
  const prevTestimonial = useCallback(() => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
      setIsTransitioning(false);
    }, 300); // Transition duration
  }, [testimonials.length, isTransitioning]);
  
  // Auto-advance the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000); // Change testimonial every 5 seconds
    
    return () => clearInterval(interval);
  }, [activeCategory, nextTestimonial]); // Added nextTestimonial to dependencies
  
  // Switch category and reset index
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentIndex(0);
  };
  
  return (
    <div className="w-full bg-navy-light rounded-lg shadow-lg p-6 md:p-8 border border-white/10">
      <h3 className="text-2xl md:text-3xl font-serif font-bold text-gold mb-6 text-center">Client Testimonials</h3>
      
      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
        {Object.keys(testimonialData).map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-3 py-2 md:px-4 md:py-2 rounded-full text-sm md:text-base font-semibold transition-colors ${
              activeCategory === category 
                ? 'bg-gold text-navy' 
                : 'bg-navy border border-gold/50 text-gold hover:bg-navy-dark'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* Testimonial Display */}
      <div className="relative overflow-hidden min-h-[160px] md:min-h-[120px] flex items-center justify-center">
        <div
          className={`w-full text-center transition-opacity duration-300 ${
            isTransitioning ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <p className="text-lg md:text-xl text-white/90 italic mx-auto max-w-3xl">
            "{testimonials[currentIndex]}"
          </p>
        </div>
      </div>
      
      {/* Progress Indicators */}
      <div className="flex justify-center items-center mt-6 gap-3">
        <button 
          onClick={prevTestimonial}
          className="p-2 rounded-full bg-navy hover:bg-navy-dark text-gold transition-colors"
          aria-label="Previous testimonial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <div className="flex space-x-1">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentIndex === index ? 'bg-gold w-4' : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        
        <button 
          onClick={nextTestimonial}
          className="p-2 rounded-full bg-navy hover:bg-navy-dark text-gold transition-colors"
          aria-label="Next testimonial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      {/* Testimonial count indicator */}
      <div className="text-center mt-4 text-white/60 text-sm">
        {currentIndex + 1} of {testimonials.length}
      </div>
    </div>
  );
};

export default TestimonialCarousel; 