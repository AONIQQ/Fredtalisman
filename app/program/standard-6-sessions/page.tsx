"use client"

import { ProgramCheckoutPage } from "@/components/ProgramCheckoutPage"

export default function StandardSixSessionProgram() {
  return (
    <ProgramCheckoutPage
      pageTitle="6-Session Save Your Relationship Intensive"
      heroSubtitle="Private coaching package — pay for 5 sessions, receive 6"
      heroDescription="Over 50 years of proven strategies and techniques to help you rescue and strengthen your relationship, even when it seems impossible."
      heroHighlight="Includes six one-on-one sessions at the $475 rate, with a bonus session to keep you moving forward."
      priceDisplay="$2,375"
      priceLabel="One-time investment"
      priceSubheading="6 private coaching sessions • save $475 compared to booking individually"
      priceDescription="Ideal if you want a focused series of sessions to jump-start your progress without committing to the full intensive."
      packageHighlights={[
        "6 private coaching sessions with Fred Talisman, MFT",
        "Pay for 5 sessions at $475 each and receive a bonus session",
        "Customized implementation plan between sessions",
        "Upgrade to the 12-session intensive with full credit within 30 days",
      ]}
      productComponentId="product-component-1759818173551"
      productId="7914352934974"
      buttonText="Reserve 6-Session Package"
      guaranteeTitle="Upgrade Assurance:"
      guaranteeMessage="If you upgrade to the 12-session intensive within 30 days, we'll credit this full investment toward your program."
    />
  )
}

