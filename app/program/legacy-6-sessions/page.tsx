"use client"

import { ProgramCheckoutPage } from "@/components/ProgramCheckoutPage"

export default function LegacySixSessionProgram() {
  return (
    <ProgramCheckoutPage
      pageTitle="Legacy 6-Session Package"
      heroSubtitle="Legacy $225 per session — pay for 5, receive 6"
      heroDescription="Designed for clients approved for Fred's legacy rate who want focused support over six sessions."
      heroHighlight="Reserved for returning clients and referrals who qualify for the legacy rate — contact Fred if you have questions."
      priceDisplay="$1,125"
      priceLabel="Legacy one-time investment"
      priceSubheading="6 private coaching sessions • legacy $225 rate"
      priceDescription="Ideal when you want a structured plan at the legacy rate without the full 12-session commitment."
      packageHighlights={[
        "6 private coaching sessions at the $225 legacy rate",
        "Pay for 5 sessions and receive a bonus session",
        "Includes all Save Your Relationship resources",
        "Option to upgrade to the legacy 12-session intensive with credit within 30 days",
      ]}
      productComponentId="product-component-1759818137492"
      productId="7914353164350"
      buttonText="Reserve Legacy Package"
      checkoutNote="Secure payment processing through Shopify."
      guaranteeTitle="Legacy Rate Policy:"
      guaranteeMessage="Please confirm eligibility with Fred before enrolling if you’re unsure whether you qualify for the legacy rate."
    />
  )
}

