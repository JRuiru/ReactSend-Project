import {
  Section,
  Text,
  Img,
  Row,
  Column,
  Hr,
} from "@react-email/components";
import { EmailLayout } from "../components/EmailLayout";
import { PrimaryButton } from "../components/PrimaryButton";
import { SecondaryButton } from "../components/SecondaryButton";
import * as React from "react";

const CF_IMG = "https://imagedelivery.net/NnC2JvU8j4bgBbmedVhjJg";

export default function AbandonedCartSocialProof() {
  return (
    <EmailLayout preview="See what SeeMyHealth owners are saying — your cart is still saved." title="Still Thinking?">

      {/* Spacer */}
      <Section style={{ height: "32px" }} />

      {/* Hero Image */}
      <Img
        src={`${CF_IMG}/fitness-ring-portrait/public`}
        width="560"
        alt="SeeMyHealth in action"
        style={{ display: "block", width: "100%", height: "auto", borderRadius: "12px" }}
      />

      {/* Spacer */}
      <Section style={{ height: "24px" }} />

      {/* Badge */}
      <Section style={{ textAlign: "center", paddingBottom: "24px" }}>
        <Section style={styles.badge}>
          <Text style={styles.badgeText}>Still Interested?</Text>
        </Section>
      </Section>

      {/* Greeting */}
      <Text style={styles.heading}>
        {"{{ person|lookup:'first_name'|default:'Hey' }}"}, your cart is still waiting.
      </Text>
      <Text style={styles.subtext}>
        Making a decision about your health is important. Here&rsquo;s what real customers are experiencing with the devices in your cart.
      </Text>

      {/* Spacer */}
      <Section style={{ height: "24px" }} />

      {/* Social Proof Banner */}
      <Section style={styles.socialProofBanner}>
        <Row>
          <Column style={{ textAlign: "center", width: "33%" }}>
            <Text style={styles.statNumber}>10,000+</Text>
            <Text style={styles.statLabel}>Active Users</Text>
          </Column>
          <Column style={{ textAlign: "center", width: "33%" }}>
            <Text style={styles.statNumber}>4.8/5</Text>
            <Text style={styles.statLabel}>Avg. Rating</Text>
          </Column>
          <Column style={{ textAlign: "center", width: "33%" }}>
            <Text style={styles.statNumber}>50+</Text>
            <Text style={styles.statLabel}>Health Metrics</Text>
          </Column>
        </Row>
      </Section>

      {/* Spacer */}
      <Section style={{ height: "24px" }} />

      {/* Testimonials Card — outcome-focused */}
      <Section style={styles.card}>
        <Section style={styles.cardHeader}>
          <Text style={styles.cardLabel}>Real Results From Real Customers</Text>
        </Section>
        <Hr style={styles.cardDivider} />

        {/* Testimonial 1 — sleep improvement */}
        <Section style={{ padding: "20px 24px" }}>
          <Row style={{ marginBottom: "8px" }}>
            <Column>
              <Text style={styles.stars}>&#9733;&#9733;&#9733;&#9733;&#9733;</Text>
            </Column>
          </Row>
          <Text style={styles.testimonialQuote}>
            &ldquo;After two weeks with the Ring One, my sleep score went from 62 to 84. I wake up feeling rested for the first time in years. The app pinpointed that my late caffeine was the problem.&rdquo;
          </Text>
          <Text style={styles.testimonialAuthor}>Sarah M. &mdash; Ring One Owner</Text>
        </Section>

        <Hr style={{ borderColor: "#171717", margin: "0 24px" }} />

        {/* Testimonial 2 — body composition results */}
        <Section style={{ padding: "20px 24px" }}>
          <Row style={{ marginBottom: "8px" }}>
            <Column>
              <Text style={styles.stars}>&#9733;&#9733;&#9733;&#9733;&#9733;</Text>
            </Column>
          </Row>
          <Text style={styles.testimonialQuote}>
            &ldquo;Lost 4kg of fat and gained 2kg of muscle in 3 months. The Scale tracks everything and the trends in the app kept me accountable. Worth every penny.&rdquo;
          </Text>
          <Text style={styles.testimonialAuthor}>James R. &mdash; Scale Owner</Text>
        </Section>

        <Hr style={{ borderColor: "#171717", margin: "0 24px" }} />

        {/* Testimonial 3 — hydration impact */}
        <Section style={{ padding: "20px 24px" }}>
          <Row style={{ marginBottom: "8px" }}>
            <Column>
              <Text style={styles.stars}>&#9733;&#9733;&#9733;&#9733;&#9733;</Text>
            </Column>
          </Row>
          <Text style={styles.testimonialQuote}>
            &ldquo;I was only drinking 1.2L a day and didn&rsquo;t even know it. The Hydra One got me to 2.5L consistently. My energy levels and skin have completely changed.&rdquo;
          </Text>
          <Text style={styles.testimonialAuthor}>Amira K. &mdash; Hydra One Owner</Text>
        </Section>
      </Section>

      {/* Spacer */}
      <Section style={{ height: "24px" }} />

      {/* Free Shipping Banner */}
      <Section style={styles.freeShippingCard}>
        <Text style={styles.freeShippingIcon}>&#10003;</Text>
        <Text style={styles.freeShippingTitle}>Free Shipping on Your Order</Text>
        <Text style={styles.freeShippingDesc}>Every order ships free, straight to your door. No minimum, no code needed.</Text>
      </Section>

      {/* Spacer */}
      <Section style={{ height: "24px" }} />

      {/* Benefits Card */}
      <Section style={styles.card}>
        <Section style={styles.cardHeader}>
          <Text style={styles.cardLabel}>Why SeeMyHealth</Text>
        </Section>
        <Hr style={styles.cardDivider} />
        <Section style={{ padding: "20px 24px" }}>
          <Row style={{ marginBottom: "12px" }}>
            <Column style={{ width: "24px", verticalAlign: "top" }}>
              <Text style={styles.checkmark}>&#10003;</Text>
            </Column>
            <Column style={{ verticalAlign: "top", paddingLeft: "8px" }}>
              <Text style={styles.benefitText}><strong style={{ color: "#f5f5f5" }}>Advanced Sensors</strong> &mdash; Professional-level health insights from home</Text>
            </Column>
          </Row>
          <Row style={{ marginBottom: "12px" }}>
            <Column style={{ width: "24px", verticalAlign: "top" }}>
              <Text style={styles.checkmark}>&#10003;</Text>
            </Column>
            <Column style={{ verticalAlign: "top", paddingLeft: "8px" }}>
              <Text style={styles.benefitText}><strong style={{ color: "#f5f5f5" }}>One App, All Devices</strong> &mdash; Everything syncs to a single dashboard</Text>
            </Column>
          </Row>
          <Row style={{ marginBottom: "12px" }}>
            <Column style={{ width: "24px", verticalAlign: "top" }}>
              <Text style={styles.checkmark}>&#10003;</Text>
            </Column>
            <Column style={{ verticalAlign: "top", paddingLeft: "8px" }}>
              <Text style={styles.benefitText}><strong style={{ color: "#f5f5f5" }}>30-Day Money-Back Guarantee</strong> &mdash; Try it risk-free with free returns</Text>
            </Column>
          </Row>
          <Row>
            <Column style={{ width: "24px", verticalAlign: "top" }}>
              <Text style={styles.checkmark}>&#10003;</Text>
            </Column>
            <Column style={{ verticalAlign: "top", paddingLeft: "8px" }}>
              <Text style={styles.benefitText}><strong style={{ color: "#f5f5f5" }}>5-Minute Setup</strong> &mdash; Unbox, pair with the app, and start tracking instantly</Text>
            </Column>
          </Row>
        </Section>
      </Section>

      {/* Spacer */}
      <Section style={{ height: "24px" }} />

      {/* Cart Recap */}
      <Section style={styles.card}>
        <Section style={styles.cardHeader}>
          <Text style={styles.cardLabel}>Your Cart</Text>
        </Section>
        <Hr style={styles.cardDivider} />

        <Text style={styles.klaviyoBlock}>
          {"{% for item in event.extra.line_items %}"}
        </Text>
        <Section style={{ padding: "16px 24px" }}>
          <Row>
            <Column style={{ width: "80px", verticalAlign: "top" }}>
              <Img
                src={"{{ item.product.image_url }}"}
                width="80"
                height="80"
                alt={"{{ item.product.title }}"}
                style={styles.productImage}
              />
            </Column>
            <Column style={{ verticalAlign: "top", paddingLeft: "16px" }}>
              <Text style={styles.productName}>{"{{ item.product.title }}"}</Text>
              <Text style={styles.productVariant}>{"{{ item.product.variant }}"}</Text>
              <Text style={styles.productQty}>{"Qty: {{ item.quantity }}"}</Text>
            </Column>
            <Column style={{ verticalAlign: "top", textAlign: "right" }}>
              <Text style={styles.productPrice}>{"${{ item.row_total|floatformat:2 }}"}</Text>
            </Column>
          </Row>
        </Section>
        <Text style={styles.klaviyoBlock}>
          {"{% if not forloop.last %}"}
        </Text>
        <Hr style={{ borderColor: "#171717", margin: "0 24px" }} />
        <Text style={styles.klaviyoBlock}>
          {"{% endif %}"}
        </Text>
        <Text style={styles.klaviyoBlock}>
          {"{% endfor %}"}
        </Text>
      </Section>

      {/* Spacer */}
      <Section style={{ height: "24px" }} />

      {/* CTA */}
      <Section style={{ textAlign: "center" }}>
        <PrimaryButton href="{{ event.extra.checkout_url }}">
          Return to Your Cart
        </PrimaryButton>
      </Section>

      {/* Spacer */}
      <Section style={{ height: "8px" }} />

      <Section style={{ textAlign: "center" }}>
        <SecondaryButton href="https://seemyhealth.ai/shop">
          Continue Shopping
        </SecondaryButton>
      </Section>

      {/* Spacer */}
      <Section style={{ height: "16px" }} />

      <Text style={styles.footerNote}>
        You received this email because you started a checkout at seemyhealth.ai. If you&rsquo;ve already completed your purchase, please disregard this message.
      </Text>
    </EmailLayout>
  );
}

const styles = {
  badge: {
    backgroundColor: "#0c1a2e",
    border: "1px solid #1a3a5c",
    borderRadius: "50px",
    padding: "8px 20px",
    display: "inline-block" as const,
  },
  badgeText: {
    margin: "0",
    fontSize: "13px",
    fontWeight: "600" as const,
    color: "#3B82F6",
    letterSpacing: "0.5px",
  },
  heading: {
    fontSize: "26px",
    fontWeight: "700" as const,
    color: "#f5f5f5",
    margin: "0 0 12px 0",
  },
  subtext: {
    fontSize: "16px",
    lineHeight: "26px",
    color: "#a3a3a3",
    margin: "0 0 8px 0",
  },
  socialProofBanner: {
    backgroundColor: "#141414",
    border: "1px solid #1a4d30",
    borderRadius: "12px",
    padding: "20px 16px",
  },
  statNumber: {
    margin: "0 0 2px 0",
    fontSize: "22px",
    fontWeight: "700" as const,
    color: "#22c55e",
    textAlign: "center" as const,
  },
  statLabel: {
    margin: "0",
    fontSize: "11px",
    fontWeight: "600" as const,
    color: "#6b6b6b",
    letterSpacing: "1px",
    textTransform: "uppercase" as const,
    textAlign: "center" as const,
  },
  card: {
    backgroundColor: "#141414",
    border: "1px solid #1a1a1a",
    borderRadius: "12px",
    overflow: "hidden" as const,
  },
  cardHeader: {
    padding: "20px 24px 16px",
  },
  cardLabel: {
    margin: "0",
    fontSize: "11px",
    fontWeight: "600" as const,
    color: "#5e5e5e",
    letterSpacing: "3px",
    textTransform: "uppercase" as const,
  },
  cardDivider: {
    borderColor: "#1a1a1a",
    margin: "0",
  },
  stars: {
    margin: "0",
    fontSize: "16px",
    color: "#F97316",
    letterSpacing: "2px",
  },
  testimonialQuote: {
    margin: "0 0 8px 0",
    fontSize: "15px",
    lineHeight: "24px",
    color: "#a3a3a3",
    fontStyle: "italic" as const,
  },
  testimonialAuthor: {
    margin: "0",
    fontSize: "13px",
    color: "#525252",
    fontWeight: "600" as const,
  },
  freeShippingCard: {
    backgroundColor: "#0d2618",
    border: "1px solid #1a4d30",
    borderRadius: "12px",
    padding: "20px 24px",
    textAlign: "center" as const,
  },
  freeShippingIcon: {
    margin: "0 0 4px 0",
    fontSize: "20px",
    color: "#22c55e",
    fontWeight: "700" as const,
  },
  freeShippingTitle: {
    margin: "0 0 4px 0",
    fontSize: "16px",
    fontWeight: "700" as const,
    color: "#22c55e",
  },
  freeShippingDesc: {
    margin: "0",
    fontSize: "14px",
    lineHeight: "22px",
    color: "#a3a3a3",
  },
  checkmark: {
    margin: "0",
    fontSize: "14px",
    color: "#22c55e",
    fontWeight: "700" as const,
  },
  benefitText: {
    margin: "0",
    fontSize: "14px",
    lineHeight: "22px",
    color: "#8a8a8a",
  },
  productImage: {
    borderRadius: "8px",
    display: "block" as const,
    objectFit: "cover" as const,
  },
  productName: {
    margin: "0 0 4px 0",
    fontSize: "15px",
    fontWeight: "600" as const,
    color: "#f5f5f5",
  },
  productVariant: {
    margin: "0 0 4px 0",
    fontSize: "13px",
    color: "#6b6b6b",
  },
  productQty: {
    margin: "0",
    fontSize: "13px",
    color: "#6b6b6b",
  },
  productPrice: {
    margin: "0",
    fontSize: "15px",
    fontWeight: "600" as const,
    color: "#f5f5f5",
    textAlign: "right" as const,
  },
  klaviyoBlock: {
    margin: "0",
    fontSize: "0px",
    lineHeight: "0px",
    color: "transparent",
    maxHeight: "0px",
    overflow: "hidden" as const,
  },
  footerNote: {
    fontSize: "13px",
    color: "#525252",
    textAlign: "center" as const,
    margin: "16px 0 0 0",
    lineHeight: "20px",
  },
};
