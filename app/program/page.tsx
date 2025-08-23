"use client"

import Link from "next/link"
import { useEffect } from "react"

declare global {
  interface Window {
    ShopifyBuy: any;
  }
}

declare var ShopifyBuy: any;

// Decorative divider component
const SectionDivider = () => (
  <div className="flex items-center justify-center py-6 my-2">
    <div className="w-1/4 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>
    <div className="mx-3">
      <div className="w-2 h-2 rounded-full bg-gold transform rotate-45"></div>
    </div>
    <div className="w-1/4 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>
  </div>
);

export default function Program() {
  useEffect(() => {
    // Clear any existing content first
    const existingComponent = document.getElementById('product-component-1755991281435');
    if (existingComponent) {
      existingComponent.innerHTML = '';
    }

    // Load Shopify Buy Button script
    const scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    
    // Check if the script is already loaded
    const existingScript = document.querySelector(`script[src='${scriptURL}']`);
    if (!existingScript) {
      loadScript();
    } else if (window.ShopifyBuy && window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    }

    function loadScript() {
      const script = document.createElement('script');
      script.async = true;
      script.src = scriptURL;
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
      script.onload = ShopifyBuyInit;
    }

    function ShopifyBuyInit() {
      const client = ShopifyBuy.buildClient({
        domain: 'dfbjc0-hz.myshopify.com',
        storefrontAccessToken: 'b099e9a806d14768cca3913f95425f8a',
      });
      
      ShopifyBuy.UI.onReady(client).then(function (ui: any) {
        ui.createComponent('product', {
          id: '7826220154942',
          node: document.getElementById('product-component-1755991281435'),
          moneyFormat: '%24%7B%7Bamount%7D%7D',
          options: {
            "product": {
              "styles": {
                "product": {
                  "@media (min-width: 601px)": {
                    "max-width": "calc(25% - 20px)",
                    "margin-left": "20px",
                    "margin-bottom": "50px"
                  }
                },
                "button": {
                  ":hover": {
                    "background-color": "#aa8b55"
                  },
                  "background-color": "#bd9a5e",
                  ":focus": {
                    "background-color": "#aa8b55"
                  }
                },
                "price": {
                  "color": "#000000"
                },
                "compareAt": {
                  "color": "#000000"
                },
                "unitPrice": {
                  "color": "#000000"
                }
              },
              "contents": {
                "img": false,
                "title": false,
                "price": false
              },
              "text": {
                "button": "Join The Program"
              }
            },
            "productSet": {
              "styles": {
                "products": {
                  "@media (min-width: 601px)": {
                    "margin-left": "-20px"
                  }
                }
              }
            },
            "modalProduct": {
              "contents": {
                "img": false,
                "imgWithCarousel": true,
                "button": false,
                "buttonWithQuantity": true
              },
              "styles": {
                "product": {
                  "@media (min-width: 601px)": {
                    "max-width": "100%",
                    "margin-left": "0px",
                    "margin-bottom": "0px"
                  }
                },
                "button": {
                  ":hover": {
                    "background-color": "#aa8b55"
                  },
                  "background-color": "#bd9a5e",
                  ":focus": {
                    "background-color": "#aa8b55"
                  }
                },
                "price": {
                  "font-family": "Helvetica Neue, sans-serif",
                  "font-weight": "normal",
                  "font-size": "18px",
                  "color": "#4c4c4c"
                },
                "compareAt": {
                  "font-family": "Helvetica Neue, sans-serif",
                  "font-weight": "normal",
                  "font-size": "15.299999999999999px",
                  "color": "#4c4c4c"
                },
                "unitPrice": {
                  "font-family": "Helvetica Neue, sans-serif",
                  "font-weight": "normal",
                  "font-size": "15.299999999999999px",
                  "color": "#4c4c4c"
                }
              },
              "text": {
                "button": "Join The Program"
              }
            },
            "option": {},
            "cart": {
              "styles": {
                "button": {
                  ":hover": {
                    "background-color": "#aa8b55"
                  },
                  "background-color": "#bd9a5e",
                  ":focus": {
                    "background-color": "#aa8b55"
                  }
                }
              },
              "text": {
                "total": "Subtotal",
                "button": "Checkout"
              }
            },
            "toggle": {
              "styles": {
                "toggle": {
                  "background-color": "#bd9a5e",
                  ":hover": {
                    "background-color": "#aa8b55"
                  },
                  ":focus": {
                    "background-color": "#aa8b55"
                  }
                }
              }
            }
          },
        });
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-navy text-white">
      {/* Header Section */}
      <header className="py-12 md:py-20 border-b border-gold/30 bg-navy-light">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 animate-fade-in text-gold">
            Save Your Relationship Program
          </h1>
          <p className="text-xl md:text-2xl mb-6 animate-fade-in delay-100 text-white/90">
            The Comprehensive System That Has Saved Thousands of Relationships
          </p>
          <p className="text-lg text-white/80 max-w-3xl mx-auto animate-fade-in delay-200">
            Over 50 years of proven strategies and techniques to help you rescue and strengthen your relationship, 
            even when it seems impossible.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 space-y-16">
        
        {/* Program Overview */}
        <section className="bg-navy-light p-8 rounded-lg shadow-lg border border-white/10">
          <h2 className="text-3xl font-serif font-bold mb-6 text-gold flex items-center">
            <span className="w-6 h-0.5 bg-gold mr-2 hidden md:block"></span>
            What You Get in This Program
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-navy/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-gold">Comprehensive Training Materials</h3>
                <ul className="space-y-2 text-white/90">
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    Step-by-step relationship rescue strategies
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    Communication techniques that actually work
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    How to rebuild trust after betrayal
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    Scripts for difficult conversations
                  </li>
                </ul>
              </div>
              
              <div className="bg-navy/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-gold">Personal Support</h3>
                <ul className="space-y-2 text-white/90">
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    Direct access to Fred Talisman, MFT
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    One-on-one coaching sessions
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    Email and phone support
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-navy/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-gold">Proven Methodologies</h3>
                <ul className="space-y-2 text-white/90">
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    The "One Person Can Save the Relationship" approach
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    Techniques that work even when your partner won't participate
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    Emergency interventions for crisis situations
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    Long-term relationship strengthening strategies
                  </li>
                </ul>
              </div>
              
              <div className="bg-navy/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-gold">Lifetime Access</h3>
                <ul className="space-y-2 text-white/90">
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    Access to all materials forever
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    Updates and new content included
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    Community support forum access
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Why This Program Works */}
        <section className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gold flex items-center">
            <span className="w-6 h-0.5 bg-gold mr-2 hidden md:block"></span>
            Why This Program Works When Others Fail
          </h2>
          
          <div className="bg-navy-light p-8 rounded-lg shadow-lg border border-white/10">
            <div className="text-lg space-y-4 text-white/90 leading-relaxed">
              <p>
                Most relationship programs and traditional couples therapy fail because they assume both partners 
                are willing participants. Fred's approach is revolutionary because it recognizes that 
                <span className="font-bold text-gold"> it only takes one person to start saving a relationship</span>.
              </p>
              
              <p>
                With over 50 years of experience saving relationships that seemed hopeless, Fred has developed 
                unique strategies that work even when:
              </p>
              
              <ul className="space-y-3 pl-6">
                <li className="flex items-start">
                  <span className="text-gold mr-3 text-xl">✓</span>
                  Your partner wants to break up
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-3 text-xl">✓</span>
                  Your partner refuses to get help
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-3 text-xl">✓</span>
                  Trust has been broken by infidelity
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-3 text-xl">✓</span>
                  You've tried other counselors without success
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-3 text-xl">✓</span>
                  The relationship seems beyond repair
                </li>
              </ul>
              
              <p>
                This isn't just theory—it's a proven system that has helped thousands of people save their 
                relationships and keep their families together.
              </p>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Pricing and Payment Section */}
        <section className="bg-navy-light p-8 rounded-lg shadow-lg border border-white/10">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-gold">
              Investment in Your Relationship
            </h2>
            <p className="text-xl text-white/90 mb-6">
              Complete "Save Your Relationship" Program
            </p>
            
            {/* Price Display */}
            <div className="bg-gold/10 p-6 rounded-lg border border-gold/20 mb-8 max-w-md mx-auto">
              <div className="text-4xl md:text-5xl font-bold text-gold mb-2">
                $4,750
              </div>
              <p className="text-white/80">One-time investment</p>
              <div id='product-component-1755991281435' className="shopify-buy-frame mx-auto"></div>
            </div>
            
            <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
              This comprehensive program includes everything you need to save your relationship, 
              plus personal support from Fred Talisman himself.
            </p>
          </div>

          {/* Payment Button */}
          <div className="text-center">
            
            
            <p className="text-sm text-white/60 mb-4">
              Secure payment processing through Shopify. Pay with Affirm for flexible payment options.
            </p>
            
            <style jsx>{`
              .shopify-buy-frame :global(.shopify-buy__product) {
                background: transparent !important;
                border: none !important;
                box-shadow: none !important;
              }
              
              .shopify-buy-frame :global(.shopify-buy__product-title) {
                color: #D4AF37 !important;
                font-size: 24px !important;
                font-weight: bold !important;
                text-align: center !important;
                margin-bottom: 16px !important;
              }
              
              .shopify-buy-frame :global(.shopify-buy__product-price) {
                color: #ffffff !important;
                font-size: 28px !important;
                font-weight: bold !important;
                text-align: center !important;
                margin-bottom: 20px !important;
              }
              
              .shopify-buy-frame :global(.shopify-buy__btn) {
                background: #D4AF37 !important;
                color: #1a2332 !important;
                border: none !important;
                border-radius: 9999px !important;
                padding: 16px 32px !important;
                font-size: 18px !important;
                font-weight: bold !important;
                width: 100% !important;
                max-width: 300px !important;
                margin: 0 auto !important;
                display: block !important;
                transition: all 0.3s ease !important;
              }
              
              .shopify-buy-frame :global(.shopify-buy__btn:hover) {
                background: #e6c757 !important;
                transform: translateY(-2px) !important;
                box-shadow: 0 4px 12px rgba(212, 175, 55, 0.3) !important;
              }
              
              .shopify-buy-frame :global(.shopify-buy__product + .shopify-buy__product) {
                display: none !important;
              }
            `}</style>
            
            <div className="bg-gold/10 p-4 rounded-lg border border-gold/20 max-w-2xl mx-auto">
              <p className="text-white/90">
                <span className="font-semibold text-gold">Money-Back Guarantee:</span> If you don't see 
                improvement in your relationship within 30 days of following the program, 
                we'll refund your investment.
              </p>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Success Stories Preview */}
        <section className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gold flex items-center">
            <span className="w-6 h-0.5 bg-gold mr-2 hidden md:block"></span>
            Real Results from Real People
          </h2>
          
          <div className="bg-navy-light p-8 rounded-lg shadow-lg border border-white/10">
            <blockquote className="text-lg italic text-white/90 mb-4">
              "By the time I found Fred Talisman, my wife was ready to break up with me. I was devastated. 
              Thanks to Fred's program, she gave me a last chance. We got married almost a year after the 
              crisis that Fred got us through. Using the things that Fred taught me, my wife and I are now 
              stronger than ever as a couple."
            </blockquote>
            <p className="text-gold font-semibold">— Dennis Hart</p>
          </div>
          
          <div className="text-center">
            <Link 
              href="/success-stories" 
              className="inline-block bg-gold hover:bg-gold-light text-navy font-bold py-3 px-8 rounded-full transition-colors text-lg"
            >
              Read More Success Stories
            </Link>
          </div>
        </section>

        <SectionDivider />

        {/* Contact Section */}
        <section className="text-center bg-gold/10 p-8 rounded-lg border border-gold/20">
          <h2 className="text-2xl font-serif font-bold mb-4 text-gold">
            Questions About the Program?
          </h2>
          <p className="text-lg text-white/90 mb-6">
            Call or text Fred directly to discuss how this program can help save your relationship.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:13105893992"
              className="inline-block bg-gold hover:bg-gold-light text-navy font-bold py-3 px-8 rounded-full transition-colors text-lg"
            >
              Call or Text: 1-310-589-3992
            </a>
            <Link 
              href="/calendlybooking"
              className="inline-block bg-gold hover:bg-gold-light text-navy font-bold py-3 px-8 rounded-full transition-colors text-lg"
            >
              Schedule Free Consultation
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}
