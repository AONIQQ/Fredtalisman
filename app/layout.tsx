import './globals.css'
import { Inter, Cormorant_Garamond, Source_Sans_3 } from 'next/font/google'
import { Navigation } from "@/components/Navigation"
import { Footer } from "./components/Footer"
import ContactForm from "./components/ContactForm"
import React from 'react'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-cormorant',
})

const sourceSansPro = Source_Sans_3({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  display: 'swap',
  variable: '--font-source-sans',
})

export const metadata = {
  title: 'Fred Talisman MFT - Save Your Relationship',
  description: 'Keeping Families Together and Saving Relationships for over 50 Years',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://fredtalisman.com'),
  openGraph: {
    title: 'Fred Talisman MFT - Save Your Relationship',
    description: 'Keeping Families Together and Saving Relationships for over 50 Years',
    images: [
      {
        url: '/api/og/facebook',
        width: 1200,
        height: 630,
        alt: 'Fred Talisman MFT',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fred Talisman MFT - Save Your Relationship',
    description: 'Keeping Families Together and Saving Relationships for over 50 Years',
    images: ['/api/og/facebook'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PFBTSNZW');
          `}
        </Script>
        {/* End Google Tag Manager */}

        {/* Meta Pixel Code */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1198329128310450');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1198329128310450&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}

        {/* Microsoft Clarity Tracking Code */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "qimwiwyiwn");
          `}
        </Script>
        {/* End Microsoft Clarity Tracking Code */}

        {/* TikTok Pixel Code Start */}
        <Script id="tiktok-pixel" strategy="afterInteractive">
          {`
            !function (w, d, t) {
              w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(
            var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script")
            ;n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};


              ttq.load('D01TO1BC77U45FDQMJ0G');
              ttq.page();
            }(window, document, 'ttq');
          `}
        </Script>
        {/* TikTok Pixel Code End */}
      </head>
      <body className={`
        ${cormorantGaramond.variable} 
        ${sourceSansPro.variable} 
        font-sans 
        min-h-screen 
        bg-navy 
        text-white
      `}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-PFBTSNZW"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        
        {/* REMOVED Yellow Banner Div - Moved to Navigation.tsx */}
        {/* <div className="bg-gold text-center py-2 text-navy font-semibold">
          <span className="animate-fade-in">
            Call or text Fred now at{" "}
            <a href="tel:+13104293658" className="text-navy-light underline hover:no-underline transition-colors">
              1-310-429-3658
            </a>
          </span>
        </div> */}
        <Navigation />
        <main className="animate-slide-in">{children}</main>
        <ContactForm />
        <Footer />
      </body>
    </html>
  )
}