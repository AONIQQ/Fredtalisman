"use client"

import { ProgramCheckoutPage } from "@/components/ProgramCheckoutPage"

export default function StandardSingleSession() {
  return (
    <ProgramCheckoutPage
      pageTitle="Single Strategy Session with Fred Talisman"
      heroSubtitle="60-minute private session to stabilize your relationship fast"
      heroDescription="Work directly with Fred to diagnose your situation, identify the next best moves, and leave with a concrete action plan."
      heroHighlight="Apply this session toward any multi-session package if you choose to upgrade within 30 days."
      priceDisplay="$475"
      priceLabel="Per session"
      priceSubheading="1 private coaching session • current program rate"
      priceDescription="Perfect when you want expert direction before committing to a package or need immediate support for a crisis."
      packageHighlights={[
        "One 60-minute session with Fred Talisman, MFT",
        "Immediate action plan tailored to your relationship",
        "Upgrade to a multi-session package with full credit within 30 days",
      ]}
      productComponentId="product-component-1759818224317"
      productId="7914353033278"
      buttonText="Book Single Session"
      checkoutNote="Secure payment processing through Shopify."
      guaranteeTitle="Upgrade Credit:"
      guaranteeMessage="Apply this session fee toward any multi-session package within 30 days of your appointment."
    />
  )
}

