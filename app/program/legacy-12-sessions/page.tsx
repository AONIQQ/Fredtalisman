"use client"

import { ProgramCheckoutPage } from "@/components/ProgramCheckoutPage"

export default function LegacyTwelveSessionProgram() {
  return (
    <ProgramCheckoutPage
      pageTitle="Legacy 12-Session Intensive"
      heroSubtitle="Limited legacy rate — $225 per session (pay for 10, receive 12)"
      heroDescription="Reserved for long-time clients and referrals approved for Fred's legacy rate."
      heroHighlight="Grandfathered pricing for qualified clients — reach out to confirm eligibility if you're unsure."
      priceDisplay="$2,250"
      priceLabel="Legacy one-time investment"
      priceSubheading="12 private coaching sessions • legacy $225 rate"
      priceDescription="Enjoy the full Save Your Relationship program with the legacy rate reserved for approved clients."
      packageHighlights={[
        "12 private coaching sessions at the $225 legacy rate",
        "Pay for 10 sessions and receive 12 total",
        "Includes full program curriculum and support resources",
        "Priority access to Fred between sessions",
      ]}
      productComponentId="product-component-1759818210217"
      productId="7914353066046"
      buttonText="Reserve Legacy Package"
      checkoutNote="Secure payment processing through Shopify. Contact Fred if you need help with payment arrangements."
      guaranteeTitle="Legacy Rate Policy:"
      guaranteeMessage="Please confirm eligibility with Fred before enrolling if you’re unsure whether you qualify for the legacy rate."
    />
  )
}

