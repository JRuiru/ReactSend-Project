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

export default function AbandonedCartLastChance() {
  return (
    <EmailLayout preview="Last chance — your cart expires soon." title="Last Chance">

      {/* Spacer */}
      <Section style={{ height: "32px" }} />

      {/* Badge — urgency red */}
      <Section style={{ textAlign: "center", paddingBottom: "24px" }}>
        <Section style={styles.badgeRed}>
          <Text style={styles.badgeRedText}>Last Chance</Text>
        </Section>
      </Section>

      {/* Greeting */}
      <Text style={styles.heading}>
        {"{{ person|lookup:'first_name'|default:'Hey' }}"}, your cart is about to expire.
      </Text>
      <Text style={styles.subtext}>
        We&rsquo;ve been holding your items, but we can&rsquo;t keep them reserved much longer. Complete your order now to secure your health upgrade.
      </Text>

      {/* Spacer */}
      <Section style={{ height: "16px" }} />

      {/* Urgency Card */}
      <Section style={styles.urgencyCard}>
        <Text style={styles.urgencyIcon}>&#9888;</Text>
        <Text style={styles.urgencyText}>
          Cart items are not guaranteed &mdash; stock is limited and your cart will expire soon.
        </Text>
      </Section>

      {/* Spacer */}
      <Section style={{ height: "16px" }} />

      {/* Cart Items */}
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

        {/* Total */}
        <Hr style={styles.cardDivider} />
        <Section style={{ padding: "16px 24px 20px" }}>
          <Row>
            <Column>
              <Text style={styles.totalLabel}>Estimated Total</Text>
            </Column>
            <Column>
              <Text style={styles.totalValue}>{"{{ event.extra.total_price|floatformat:2|money }}"}</Text>
            </Column>
          </Row>
        </Section>
      </Section>

      {/* Spacer */}
      <Section style={{ height: "24px" }} />

      {/* CTA */}
      <Section style={{ textAlign: "center" }}>
        <PrimaryButton href="{{ event.extra.checkout_url }}">
          Complete Your Order Now
        </PrimaryButton>
      </Section>

      {/* Spacer */}
      <Section style={{ height: "24px" }} />

      <Hr style={styles.divider} />

      {/* Spacer */}
      <Section style={{ height: "24px" }} />

      {/* What You're Missing Card */}
      <Section style={styles.card}>
        <Section style={styles.cardHeader}>
          <Text style={styles.cardLabel}>What You&rsquo;re Missing</Text>
        </Section>
        <Hr style={styles.cardDivider} />
        <Section style={{ padding: "20px 24px" }}>
          <Row style={{ marginBottom: "16px" }}>
            <Column style={{ width: "48px", verticalAlign: "top" }}>
              <Text style={styles.statNumber}>24/7</Text>
            </Column>
            <Column style={{ verticalAlign: "top", paddingLeft: "16px" }}>
              <Text style={styles.statDesc}>Continuous health monitoring while you sleep, work, and exercise</Text>
            </Column>
          </Row>
          <Hr style={{ borderColor: "#171717", margin: "0 0 16px 0" }} />
          <Row style={{ marginBottom: "16px" }}>
            <Column style={{ width: "48px", verticalAlign: "top" }}>
              <Text style={styles.statNumber}>50+</Text>
            </Column>
            <Column style={{ verticalAlign: "top", paddingLeft: "16px" }}>
              <Text style={styles.statDesc}>Health metrics tracked across all devices in one unified dashboard</Text>
            </Column>
          </Row>
          <Hr style={{ borderColor: "#171717", margin: "0 0 16px 0" }} />
          <Row>
            <Column style={{ width: "48px", verticalAlign: "top" }}>
              <Text style={styles.statNumber}>5min</Text>
            </Column>
            <Column style={{ verticalAlign: "top", paddingLeft: "16px" }}>
              <Text style={styles.statDesc}>Setup time. Unbox, pair with the app, and start tracking immediately</Text>
            </Column>
          </Row>
        </Section>
      </Section>

      {/* Spacer */}
      <Section style={{ height: "24px" }} />

      {/* App Section */}
      <Section style={styles.appCard}>
        <Text style={styles.appCategory}>The App</Text>
        <Text style={styles.appTitle}>Track everything in one place.</Text>
        <Text style={styles.appDesc}>All your health data, insights, and goals in a single dashboard.</Text>
        <SecondaryButton href="https://seemyhealth.ai/app">
          Explore the App
        </SecondaryButton>
      </Section>

      {/* Spacer */}
      <Section style={{ height: "24px" }} />

      {/* Testimonial */}
      <Section style={{ textAlign: "center" }}>
        <Text style={styles.testimonialQuote}>
          &ldquo;The Ring One tracks my sleep and the app shows me exactly what to improve. I have never felt more in control of my health.&rdquo;
        </Text>
        <Text style={styles.testimonialAuthor}>Sarah M. &mdash; Verified Customer</Text>
      </Section>

      {/* Spacer */}
      <Section style={{ height: "24px" }} />

      {/* Final CTA */}
      <Section style={{ textAlign: "center" }}>
        <PrimaryButton href="{{ event.extra.checkout_url }}">
          Don&rsquo;t Miss Out &mdash; Order Now
        </PrimaryButton>
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
  badgeRed: {
    backgroundColor: "#1f1111",
    border: "1px solid #4d1a1a",
    borderRadius: "50px",
    padding: "8px 20px",
    display: "inline-block" as const,
  },
  badgeRedText: {
    margin: "0",
    fontSize: "13px",
    fontWeight: "600" as const,
    color: "#EF4444",
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
  urgencyCard: {
    backgroundColor: "#1f1111",
    border: "1px solid #4d1a1a",
    borderRadius: "12px",
    padding: "16px 20px",
    textAlign: "center" as const,
  },
  urgencyIcon: {
    margin: "0 0 4px 0",
    fontSize: "20px",
    color: "#EF4444",
  },
  urgencyText: {
    margin: "0",
    fontSize: "14px",
    lineHeight: "22px",
    color: "#EF4444",
    fontWeight: "600" as const,
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
  statNumber: {
    margin: "0",
    fontSize: "18px",
    fontWeight: "700" as const,
    color: "#22c55e",
  },
  statDesc: {
    margin: "0",
    fontSize: "14px",
    lineHeight: "22px",
    color: "#8a8a8a",
  },
  appCard: {
    backgroundColor: "#141414",
    border: "1px solid #1a1a1a",
    borderRadius: "12px",
    padding: "24px",
    textAlign: "center" as const,
  },
  appCategory: {
    margin: "0 0 4px 0",
    fontSize: "10px",
    fontWeight: "700" as const,
    color: "#22c55e",
    letterSpacing: "2px",
    textTransform: "uppercase" as const,
  },
  appTitle: {
    margin: "0 0 8px 0",
    fontSize: "18px",
    fontWeight: "700" as const,
    color: "#f5f5f5",
  },
  appDesc: {
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
  footerNote: {
    fontSize: "13px",
    color: "#525252",
    textAlign: "center" as const,
    margin: "16px 0 0 0",
    lineHeight: "20px",
  },
};
