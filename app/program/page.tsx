"use client"

import { ProgramCheckoutPage } from "@/components/ProgramCheckoutPage"

export default function Program() {
  return (
    <ProgramCheckoutPage
      pageTitle="Save Your Relationship Program"
      heroSubtitle="12-Session Private Coaching Intensive"
      heroDescription="Over 50 years of proven strategies and techniques to help you rescue and strengthen your relationship, even when it seems impossible."
      heroHighlight="Includes 12 one-on-one sessions with Fred Talisman, MFT — pay for 10 sessions and receive 12."
      priceDisplay="$4,750"
      priceLabel="One-time investment"
      priceSubheading="12-session intensive • current program rate"
      priceDescription="This comprehensive program includes everything you need to save your relationship, plus personal support from Fred Talisman himself."
      packageHighlights={[
        "12 private coaching sessions with Fred Talisman, MFT",
        "Structured roadmap tailored to your relationship",
        "Full Save Your Relationship training library",
        "Direct email and phone support between sessions",
      ]}
      productComponentId="product-component-1759818240617"
      productId="7826220154942"
      buttonText="Join the Program"
    />
  )
}

