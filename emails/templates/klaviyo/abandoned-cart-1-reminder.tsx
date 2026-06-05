import {
  Section,
  Text,
  Img,
  Row,
  Column,
  Hr,
} from "@react-email/components";
import { EmailLayout } from "../../components/EmailLayout";
import { PrimaryButton } from "../../components/PrimaryButton";
import { SecondaryButton } from "../../components/SecondaryButton";
import * as React from "react";

const CF_IMG = "https://imagedelivery.net/NnC2JvU8j4bgBbmedVhjJg";

export default function AbandonedCartReminder() {
  return (
    <EmailLayout preview="You left something in your cart — your health upgrade is waiting." title="Your Cart">

      {/* Spacer */}
      <Section style={{ height: "32px" }} />

      {/* Badge */}
      <Section style={{ textAlign: "center", paddingBottom: "24px" }}>
        <Section style={styles.badge}>
          <Text style={styles.badgeText}>Cart Saved</Text>
        </Section>
      </Section>

      {/* Greeting */}
      <Text style={styles.heading}>
        {"{{ person|lookup:'first_name'|default:'Hey' }}"}, you left something behind.
      </Text>
      <Text style={styles.subtext}>
        Your cart is saved and ready for you. Complete your order to start your health journey.
      </Text>

      {/* Spacer */}
      <Section style={{ height: "16px" }} />

      {/* Cart Items — Klaviyo dynamic block */}
      <Section style={styles.card}>
        <Section style={styles.cardHeader}>
          <Text style={styles.cardLabel}>Your Cart</Text>
        </Section>
        <Hr style={styles.cardDivider} />

        {/* Klaviyo item loop — renders for each cart item */}
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

        {/* Total */}
        <Hr style={styles.cardDivider} />
        <Section style={{ padding: "16px 24px 20px" }}>
          <Row>
            <Column>
              <Text style={styles.totalLabel}>Estimated Total</Text>
            </Column>
            <Column>
              <Text style={styles.totalValue}>{"${{ event.extra.total_price|floatformat:2 }}"}</Text>
            </Column>
          </Row>
        </Section>
      </Section>

      {/* Spacer */}
      <Section style={{ height: "24px" }} />

      {/* CTA */}
      <Section style={{ textAlign: "center" }}>
        <PrimaryButton href="{{ event.extra.checkout_url }}">
          Complete Your Order
        </PrimaryButton>
      </Section>

      {/* Spacer */}
      <Section style={{ height: "24px" }} />

      <Hr style={styles.divider} />

      {/* Spacer */}
      <Section style={{ height: "24px" }} />

      {/* Cross-sell */}
      <Text style={styles.sectionLabel}>Complete Your Ecosystem</Text>
      <Text style={styles.sectionTitle}>See the full picture of your health.</Text>

      {/* Ring One */}
      <Section style={styles.crossSellCard}>
        <Img
          src={`${CF_IMG}/ring-gold-portrait-email/public`}
          width="480"
          alt="Ring One"
          style={styles.crossSellImage}
        />
        <Section style={{ padding: "20px 24px 24px" }}>
          <Text style={styles.crossSellCategory}>Wearable</Text>
          <Text style={styles.crossSellName}>Ring One</Text>
          <Text style={styles.crossSellDesc}>Sleep, heart rate, HRV, SpO2, and activity tracking. 24/7 on your finger.</Text>
          <PrimaryButton href="https://seemyhealth.ai/products/ring-one">
            Explore Ring One
          </PrimaryButton>
        </Section>
      </Section>

      {/* The Scale */}
      <Section style={styles.crossSellCard}>
        <Img
          src={`${CF_IMG}/scale-bathroom-stepon-v3/public`}
          width="480"
          alt="The Scale"
          style={styles.crossSellImage}
        />
        <Section style={{ padding: "20px 24px 24px" }}>
          <Text style={styles.crossSellCategory}>Body Composition</Text>
          <Text style={styles.crossSellName}>The Scale</Text>
          <Text style={styles.crossSellDesc}>Full body composition analysis. Weight, body fat, muscle mass and more.</Text>
          <PrimaryButton href="https://seemyhealth.ai/products/scale">
            Explore The Scale
          </PrimaryButton>
        </Section>
      </Section>

      {/* Hydra One */}
      <Section style={styles.crossSellCard}>
        <Img
          src={`${CF_IMG}/bottle-black-bedside/public`}
          width="480"
          alt="Hydra One"
          style={styles.crossSellImage}
        />
        <Section style={{ padding: "20px 24px 24px" }}>
          <Text style={styles.crossSellCategory}>Hydration</Text>
          <Text style={styles.crossSellName}>Hydra One</Text>
          <Text style={styles.crossSellDesc}>Smart bottle that tracks every sip. Stay hydrated with real-time tracking and daily goals.</Text>
          <PrimaryButton href="https://seemyhealth.ai/products/hydra-one">
            Explore Hydra One
          </PrimaryButton>
        </Section>
      </Section>

      {/* Spacer */}
      <Section style={{ height: "24px" }} />

      <Hr style={styles.divider} />

      {/* Spacer */}
      <Section style={{ height: "24px" }} />

      {/* Testimonial */}
      <Section style={{ textAlign: "center" }}>
        <Text style={styles.testimonialQuote}>
          &ldquo;The Ring One tracks my sleep and the app shows me exactly what to improve. I have never felt more in control of my health.&rdquo;
        </Text>
        <Text style={styles.testimonialAuthor}>Fatima A. &mdash; Verified Customer</Text>
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
  totalLabel: {
    margin: "0",
    fontSize: "16px",
    fontWeight: "700" as const,
    color: "#f5f5f5",
  },
  totalValue: {
    margin: "0",
    fontSize: "16px",
    fontWeight: "700" as const,
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
  divider: {
    borderColor: "#1a1a1a",
    margin: "0",
  },
  sectionLabel: {
    margin: "0 0 8px 0",
    fontSize: "11px",
    fontWeight: "600" as const,
    color: "#5e5e5e",
    letterSpacing: "3px",
    textTransform: "uppercase" as const,
  },
  sectionTitle: {
    margin: "0 0 20px 0",
    fontSize: "18px",
    fontWeight: "700" as const,
    color: "#f5f5f5",
  },
  crossSellCard: {
    backgroundColor: "#141414",
    border: "1px solid #1a1a1a",
    borderRadius: "12px",
    overflow: "hidden" as const,
    marginBottom: "16px",
  },
  crossSellImage: {
    display: "block" as const,
    width: "100%",
    height: "auto",
    borderRadius: "12px 12px 0 0",
  },
  crossSellCategory: {
    margin: "0 0 4px 0",
    fontSize: "10px",
    fontWeight: "700" as const,
    color: "#F97316",
    letterSpacing: "2px",
    textTransform: "uppercase" as const,
  },
  crossSellName: {
    margin: "0 0 8px 0",
    fontSize: "20px",
    fontWeight: "700" as const,
    color: "#f5f5f5",
  },
  crossSellDesc: {
    margin: "0 0 16px 0",
    fontSize: "14px",
    lineHeight: "22px",
    color: "#8a8a8a",
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
  },
  footerNote: {
    fontSize: "13px",
    color: "#525252",
    textAlign: "center" as const,
    margin: "16px 0 0 0",
    lineHeight: "20px",
  },
};
