import {
  Section,
  Text,
  Img,
  Row,
  Column,
  Hr,
  Link,
} from "@react-email/components";
import { EmailLayout } from "../components/EmailLayout";
import { PrimaryButton } from "../components/PrimaryButton";

const CF_IMG = "https://imagedelivery.net/NnC2JvU8j4bgBbmedVhjJg";

const IMAGES = {
  ringOne: `${CF_IMG}/ring-one/public`,
  scale: `${CF_IMG}/scale/public`,
  hydraOne: `${CF_IMG}/hydra-one/public`,
};

const styles = {
  successBanner: {
    background: "linear-gradient(135deg, #065f46 0%, #059669 50%, #10b981 100%)",
    borderRadius: "12px",
    padding: "32px 24px",
    textAlign: "center" as const,
    marginBottom: "24px",
  },
  successEmoji: {
    fontSize: "48px",
    lineHeight: "1",
    margin: "0 0 12px 0",
  },
  successTitle: {
    fontSize: "26px",
    fontWeight: "bold" as const,
    color: "#ffffff",
    margin: "0 0 8px 0",
    lineHeight: "32px",
  },
  successSubtitle: {
    fontSize: "15px",
    color: "rgba(255,255,255,0.85)",
    margin: "0",
    lineHeight: "22px",
  },
  greeting: {
    fontSize: "16px",
    color: "#374151",
    lineHeight: "26px",
    margin: "0 0 24px 0",
  },
  orderInfoCard: {
    backgroundColor: "rgba(124, 58, 237, 0.04)",
    borderRadius: "12px",
    border: "1px solid rgba(124, 58, 237, 0.1)",
    padding: "20px",
    marginBottom: "24px",
  },
  orderLabel: {
    fontSize: "11px",
    fontWeight: "bold" as const,
    color: "#6b7280",
    textTransform: "uppercase" as const,
    letterSpacing: "1.5px",
    margin: "0 0 4px 0",
  },
  orderValue: {
    fontSize: "16px",
    fontWeight: "bold" as const,
    color: "#111827",
    margin: "0 0 16px 0",
  },
  orderValueLast: {
    fontSize: "16px",
    fontWeight: "bold" as const,
    color: "#111827",
    margin: "0",
  },
  sectionTitle: {
    fontSize: "18px",
    fontWeight: "bold" as const,
    color: "#111827",
    margin: "0 0 16px 0",
  },
  productCard: {
    backgroundColor: "rgba(124, 58, 237, 0.04)",
    borderRadius: "12px",
    border: "1px solid rgba(124, 58, 237, 0.08)",
    padding: "16px",
    marginBottom: "10px",
  },
  productImage: {
    borderRadius: "10px",
    width: "80px",
    height: "80px",
    objectFit: "cover" as const,
  },
  productName: {
    fontSize: "15px",
    fontWeight: "bold" as const,
    color: "#111827",
    margin: "0 0 2px 0",
  },
  productVariant: {
    fontSize: "12px",
    color: "#6b7280",
    margin: "0 0 6px 0",
  },
  productPrice: {
    fontSize: "15px",
    fontWeight: "bold" as const,
    color: "#7c3aed",
    margin: "0",
  },
  productQty: {
    fontSize: "12px",
    color: "#6b7280",
    margin: "2px 0 0 0",
  },
  divider: {
    borderColor: "rgba(124, 58, 237, 0.1)",
    margin: "24px 0",
  },
  summarySection: {
    marginBottom: "24px",
  },
  summaryRow: {
    marginBottom: "6px",
  },
  summaryLabel: {
    fontSize: "14px",
    color: "#6b7280",
    margin: "0",
    textAlign: "left" as const,
  },
  summaryValue: {
    fontSize: "14px",
    color: "#111827",
    margin: "0",
    textAlign: "right" as const,
  },
  totalRow: {
    borderTop: "2px solid rgba(124, 58, 237, 0.15)",
    paddingTop: "12px",
    marginTop: "12px",
  },
  totalLabel: {
    fontSize: "16px",
    fontWeight: "bold" as const,
    color: "#111827",
    margin: "0",
    textAlign: "left" as const,
  },
  totalValue: {
    fontSize: "20px",
    fontWeight: "bold" as const,
    color: "#7c3aed",
    margin: "0",
    textAlign: "right" as const,
  },
  shippingCard: {
    backgroundColor: "rgba(124, 58, 237, 0.04)",
    borderRadius: "12px",
    border: "1px solid rgba(124, 58, 237, 0.1)",
    padding: "20px",
    marginBottom: "24px",
  },
  shippingLabel: {
    fontSize: "11px",
    fontWeight: "bold" as const,
    color: "#6b7280",
    textTransform: "uppercase" as const,
    letterSpacing: "1.5px",
    margin: "0 0 6px 0",
  },
  shippingValue: {
    fontSize: "14px",
    color: "#374151",
    margin: "0 0 14px 0",
    lineHeight: "22px",
  },
  shippingValueLast: {
    fontSize: "14px",
    color: "#374151",
    margin: "0",
    lineHeight: "22px",
  },
  ctaSection: {
    textAlign: "center" as const,
    margin: "24px 0",
  },
  nextSteps: {
    background: "linear-gradient(135deg, #1a0533 0%, #2d1654 50%, #4c1d95 100%)",
    borderRadius: "12px",
    padding: "24px",
    marginTop: "8px",
  },
  nextStepsTitle: {
    fontSize: "18px",
    fontWeight: "bold" as const,
    color: "#ffffff",
    margin: "0 0 16px 0",
    textAlign: "center" as const,
  },
  stepItem: {
    fontSize: "14px",
    color: "rgba(255,255,255,0.9)",
    margin: "0 0 10px 0",
    lineHeight: "22px",
  },
  footerNote: {
    fontSize: "13px",
    color: "#9ca3af",
    textAlign: "center" as const,
    margin: "16px 0 0 0",
    lineHeight: "20px",
  },
};

export default function ShopifyOrderConfirmation() {
  return (
    <EmailLayout previewText="Your order is confirmed! Here's everything you need to know.">
      {/* Success Banner */}
      <Section style={styles.successBanner} className="dark-safe">
        <Text style={styles.successEmoji}>✅</Text>
        <Text style={styles.successTitle}>Order Confirmed!</Text>
        <Text style={styles.successSubtitle}>
          Thank you for investing in your health
        </Text>
      </Section>

      {/* Greeting */}
      <Text style={styles.greeting}>
        Hi {'{{ first_name|default:"there" }}'}, great news — your order has
        been placed successfully! We're getting your health tech ready to ship.
      </Text>

      {/* Order Info */}
      <Section style={styles.orderInfoCard}>
        <Row>
          <Column>
            <Text style={styles.orderLabel}>Order Number</Text>
            <Text style={styles.orderValue}>#SMH-20250509-001</Text>
          </Column>
          <Column>
            <Text style={styles.orderLabel}>Order Date</Text>
            <Text style={styles.orderValue}>May 9, 2026</Text>
          </Column>
        </Row>
        <Row>
          <Column>
            <Text style={styles.orderLabel}>Payment Method</Text>
            <Text style={styles.orderValueLast}>Visa •••• 4242</Text>
          </Column>
          <Column>
            <Text style={styles.orderLabel}>Estimated Delivery</Text>
            <Text style={styles.orderValueLast}>May 14–16, 2026</Text>
          </Column>
        </Row>
      </Section>

      {/* Items Ordered */}
      <Text style={styles.sectionTitle}>Items Ordered</Text>

      <Section style={styles.productCard}>
        <Row>
          <Column style={{ width: "90px", verticalAlign: "top" }}>
            <Img
              src={IMAGES.ringOne}
              alt="Ring One"
              style={styles.productImage}
            />
          </Column>
          <Column style={{ verticalAlign: "top", paddingLeft: "12px" }}>
            <Text style={styles.productName}>Ring One</Text>
            <Text style={styles.productVariant}>Size 8 · Midnight Black</Text>
            <Text style={styles.productPrice}>$149.99</Text>
            <Text style={styles.productQty}>Qty: 1</Text>
          </Column>
        </Row>
      </Section>

      <Section style={styles.productCard}>
        <Row>
          <Column style={{ width: "90px", verticalAlign: "top" }}>
            <Img
              src={IMAGES.scale}
              alt="Smart Scale"
              style={styles.productImage}
            />
          </Column>
          <Column style={{ verticalAlign: "top", paddingLeft: "12px" }}>
            <Text style={styles.productName}>Smart Scale</Text>
            <Text style={styles.productVariant}>White · Body Composition</Text>
            <Text style={styles.productPrice}>$79.99</Text>
            <Text style={styles.productQty}>Qty: 1</Text>
          </Column>
        </Row>
      </Section>

      <Section style={styles.productCard}>
        <Row>
          <Column style={{ width: "90px", verticalAlign: "top" }}>
            <Img
              src={IMAGES.hydraOne}
              alt="Hydra One"
              style={styles.productImage}
            />
          </Column>
          <Column style={{ verticalAlign: "top", paddingLeft: "12px" }}>
            <Text style={styles.productName}>Hydra One</Text>
            <Text style={styles.productVariant}>Smart Water Bottle · 750ml</Text>
            <Text style={styles.productPrice}>$59.99</Text>
            <Text style={styles.productQty}>Qty: 1</Text>
          </Column>
        </Row>
      </Section>

      <Hr style={styles.divider} />

      {/* Order Summary */}
      <Section style={styles.summarySection}>
        <Row style={styles.summaryRow}>
          <Column>
            <Text style={styles.summaryLabel}>Subtotal</Text>
          </Column>
          <Column>
            <Text style={styles.summaryValue}>$289.97</Text>
          </Column>
        </Row>
        <Row style={styles.summaryRow}>
          <Column>
            <Text style={styles.summaryLabel}>Shipping</Text>
          </Column>
          <Column>
            <Text style={styles.summaryValue}>FREE</Text>
          </Column>
        </Row>
        <Row style={styles.summaryRow}>
          <Column>
            <Text style={styles.summaryLabel}>Tax</Text>
          </Column>
          <Column>
            <Text style={styles.summaryValue}>$23.20</Text>
          </Column>
        </Row>
        <Section style={styles.totalRow}>
          <Row>
            <Column>
              <Text style={styles.totalLabel}>Total</Text>
            </Column>
            <Column>
              <Text style={styles.totalValue}>$313.17</Text>
            </Column>
          </Row>
        </Section>
      </Section>

      {/* Shipping Address */}
      <Text style={styles.sectionTitle}>Shipping To</Text>
      <Section style={styles.shippingCard}>
        <Text style={styles.shippingLabel}>Address</Text>
        <Text style={styles.shippingValue}>
          John Doe{"\n"}
          123 Health Avenue{"\n"}
          Nairobi, Kenya 00100
        </Text>
        <Text style={styles.shippingLabel}>Shipping Method</Text>
        <Text style={styles.shippingValueLast}>
          Standard Shipping (5–7 business days)
        </Text>
      </Section>

      {/* CTA */}
      <Section style={styles.ctaSection}>
        <PrimaryButton href="https://shop.seemyhealth.ai/account/orders">
          View Your Order
        </PrimaryButton>
      </Section>

      <Hr style={styles.divider} />

      {/* What's Next */}
      <Section style={styles.nextSteps} className="dark-safe">
        <Text style={styles.nextStepsTitle}>What's Next?</Text>
        <Text style={styles.stepItem}>
          📦 <strong>1. We're preparing your order</strong> — Our team is
          carefully packing your devices
        </Text>
        <Text style={styles.stepItem}>
          🚚 <strong>2. Shipping notification</strong> — You'll get a tracking
          link once it ships
        </Text>
        <Text style={styles.stepItem}>
          📱 <strong>3. Download the app</strong> — Get the SeeMyHealth app
          ready for when your devices arrive
        </Text>
        <Text style={styles.stepItem}>
          💜 <strong>4. Start your health journey</strong> — Pair your devices
          and explore your health data
        </Text>
      </Section>

      <Text style={styles.footerNote}>
        Questions about your order? Reply to this email or visit{" "}
        <Link href="https://seemyhealth.ai/support" style={{ color: "#7c3aed" }}>
          our support page
        </Link>
        .
      </Text>
    </EmailLayout>
  );
}
