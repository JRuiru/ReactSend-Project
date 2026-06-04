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
    <EmailLayout preview="Still thinking it over? Here's why thousands trust SeeMyHealth." title="Still Thinking?">

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
        We noticed you haven&rsquo;t completed your order yet. Here&rsquo;s what our community is saying about the devices in your cart.
      </Text>

      {/* Spacer */}
      <Section style={{ height: "24px" }} />

      {/* Testimonials Card */}
      <Section style={styles.card}>
        <Section style={styles.cardHeader}>
          <Text style={styles.cardLabel}>What Our Community Says</Text>
        </Section>
        <Hr style={styles.cardDivider} />

        {/* Testimonial 1 */}
        <Section style={{ padding: "20px 24px" }}>
          <Text style={styles.testimonialQuote}>
            &ldquo;The Ring One tracks my sleep and the app shows me exactly what to improve. I have never felt more in control of my health.&rdquo;
          </Text>
          <Text style={styles.testimonialAuthor}>Sarah M. &mdash; Verified Customer</Text>
        </Section>

        <Hr style={{ borderColor: "#171717", margin: "0 24px" }} />

        {/* Testimonial 2 */}
        <Section style={{ padding: "20px 24px" }}>
          <Text style={styles.testimonialQuote}>
            &ldquo;I bought The Scale for body composition tracking and within a week I could see real changes in my muscle mass. The app makes it so easy to follow progress.&rdquo;
          </Text>
          <Text style={styles.testimonialAuthor}>James R. &mdash; Verified Customer</Text>
        </Section>

        <Hr style={{ borderColor: "#171717", margin: "0 24px" }} />

        {/* Testimonial 3 */}
        <Section style={{ padding: "20px 24px" }}>
          <Text style={styles.testimonialQuote}>
            &ldquo;The Hydra One changed my hydration game completely. I never realized how little water I was drinking until I started tracking it.&rdquo;
          </Text>
          <Text style={styles.testimonialAuthor}>Amira K. &mdash; Verified Customer</Text>
        </Section>
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
              <Text style={styles.benefitText}><strong style={{ color: "#f5f5f5" }}>Medical-Grade Accuracy</strong> &mdash; Lab-quality health insights from home</Text>
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
              <Text style={styles.benefitText}><strong style={{ color: "#f5f5f5" }}>Free Shipping</strong> &mdash; On every order, delivered to your door</Text>
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
              <Text style={styles.productPrice}>{"{{ item.row_total|floatformat:2|money }}"}</Text>
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
