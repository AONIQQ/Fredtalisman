"use client"

import { ProgramCheckoutPage } from "@/components/ProgramCheckoutPage"

export default function LegacySingleSession() {
  return (
    <ProgramCheckoutPage
      pageTitle="Legacy Single Strategy Session"
      heroSubtitle="Exclusive $225 rate for qualified clients"
      heroDescription="Schedule a focused session with Fred at the legacy rate to get strategic direction for your relationship right away."
      heroHighlight="Apply this legacy-rate session toward any multi-session legacy package if you upgrade within 30 days."
      priceDisplay="$225"
      priceLabel="Per session"
      priceSubheading="1 private coaching session • legacy $225 rate"
      priceDescription="Perfect for returning clients who need a tune-up or immediate support at the legacy rate."
      packageHighlights={[
        "One 60-minute session with Fred Talisman, MFT",
        "Legacy pricing reserved for approved clients",
        "Upgrade to a multi-session legacy package with full credit within 30 days",
      ]}
      productComponentId="product-component-1759818195367"
      productId="7914353197118"
      buttonText="Book Legacy Session"
      checkoutNote="Secure payment processing through Shopify."
      guaranteeTitle="Upgrade Credit:"
      guaranteeMessage="Apply this session fee toward a legacy multi-session package within 30 days of your appointment."
    />
  )
}

