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

const CF_IMG = "https://imagedelivery.net/NnC2JvU8j4bgBbmedVhjJg";

const IMAGES = {
  ringOne: `${CF_IMG}/ring-one/public`,
  scale: `${CF_IMG}/scale/public`,
  hydraOne: `${CF_IMG}/hydra-one/public`,
  hemaOne: `${CF_IMG}/hema-one/public`,
  cartHero: "https://placehold.co/560x240/1a0533/a855f7?text=Your+Cart+Awaits",
};

const styles = {
  heroBanner: {
    background: "linear-gradient(135deg, #1a0533 0%, #4c1d95 50%, #7c3aed 100%)",
    borderRadius: "12px",
    padding: "32px 24px",
    textAlign: "center" as const,
    marginBottom: "24px",
  },
  heroEmoji: {
    fontSize: "48px",
    lineHeight: "1",
    margin: "0 0 12px 0",
  },
  heroTitle: {
    fontSize: "26px",
    fontWeight: "bold" as const,
    color: "#ffffff",
    margin: "0 0 8px 0",
    lineHeight: "32px",
  },
  heroSubtitle: {
    fontSize: "15px",
    color: "rgba(255,255,255,0.8)",
    margin: "0",
    lineHeight: "22px",
  },
  greeting: {
    fontSize: "16px",
    color: "#374151",
    lineHeight: "26px",
    margin: "0 0 24px 0",
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
    border: "1px solid rgba(124, 58, 237, 0.1)",
    padding: "16px",
    marginBottom: "12px",
  },
  productImage: {
    borderRadius: "10px",
    width: "100px",
    height: "100px",
    objectFit: "cover" as const,
  },
  productName: {
    fontSize: "16px",
    fontWeight: "bold" as const,
    color: "#111827",
    margin: "0 0 4px 0",
  },
  productVariant: {
    fontSize: "13px",
    color: "#6b7280",
    margin: "0 0 8px 0",
  },
  productPrice: {
    fontSize: "18px",
    fontWeight: "bold" as const,
    color: "#7c3aed",
    margin: "0",
  },
  productQty: {
    fontSize: "13px",
    color: "#6b7280",
    margin: "4px 0 0 0",
  },
  summaryRow: {
    borderTop: "1px solid rgba(124, 58, 237, 0.1)",
    paddingTop: "16px",
    marginTop: "8px",
  },
  summaryLabel: {
    fontSize: "14px",
    color: "#6b7280",
    margin: "0",
    textAlign: "left" as const,
  },
  summaryValue: {
    fontSize: "14px",
    fontWeight: "bold" as const,
    color: "#111827",
    margin: "0",
    textAlign: "right" as const,
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
  urgencyBadge: {
    backgroundColor: "rgba(239, 68, 68, 0.1)",
    border: "1px solid rgba(239, 68, 68, 0.2)",
    borderRadius: "8px",
    padding: "12px 16px",
    textAlign: "center" as const,
    marginBottom: "24px",
  },
  urgencyText: {
    fontSize: "13px",
    color: "#dc2626",
    fontWeight: "bold" as const,
    margin: "0",
  },
  ctaSection: {
    textAlign: "center" as const,
    margin: "24px 0",
  },
  divider: {
    borderColor: "rgba(124, 58, 237, 0.1)",
    margin: "24px 0",
  },
  benefitsSection: {
    marginTop: "8px",
  },
  benefitItem: {
    fontSize: "14px",
    color: "#374151",
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

export default function ShopifyAbandonedCart() {
  return (
    <EmailLayout previewText="You left something in your cart — complete your order before it's gone!">
      {/* Hero Banner */}
      <Section style={styles.heroBanner} className="dark-safe">
        <Text style={styles.heroEmoji}>🛒</Text>
        <Text style={styles.heroTitle}>You Left Something Behind</Text>
        <Text style={styles.heroSubtitle}>
          Your health upgrade is waiting — don't let it slip away
        </Text>
      </Section>

      {/* Greeting */}
      <Text style={styles.greeting}>
        Hi {'{{ first_name|default:"there" }}'}, looks like you were exploring
        some great health tech but didn't finish checking out. No worries — your
        cart is saved and ready for you.
      </Text>

      {/* Urgency Badge */}
      <Section style={styles.urgencyBadge}>
        <Text style={styles.urgencyText}>
          ⏰ Items in your cart are selling fast — don't miss out!
        </Text>
      </Section>

      {/* Items in Cart */}
      <Text style={styles.sectionTitle}>Your Cart</Text>

      {/* Product 1 — Ring One (example) */}
      <Section style={styles.productCard}>
        <Row>
          <Column style={{ width: "110px", verticalAlign: "top" }}>
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

      {/* Product 2 — Scale (example) */}
      <Section style={styles.productCard}>
        <Row>
          <Column style={{ width: "110px", verticalAlign: "top" }}>
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

      {/* Order Summary */}
      <Section style={styles.summaryRow}>
        <Row>
          <Column>
            <Text style={styles.summaryLabel}>Subtotal</Text>
          </Column>
          <Column>
            <Text style={styles.summaryValue}>$229.98</Text>
          </Column>
        </Row>
        <Row>
          <Column>
            <Text style={styles.summaryLabel}>Shipping</Text>
          </Column>
          <Column>
            <Text style={styles.summaryValue}>FREE</Text>
          </Column>
        </Row>
        <Row style={{ marginTop: "8px" }}>
          <Column>
            <Text style={styles.totalLabel}>Estimated Total</Text>
          </Column>
          <Column>
            <Text style={styles.totalValue}>$229.98</Text>
          </Column>
        </Row>
      </Section>

      {/* CTA */}
      <Section style={styles.ctaSection}>
        <PrimaryButton href="https://shop.seemyhealth.ai/cart">
          Complete Your Order
        </PrimaryButton>
      </Section>

      <Hr style={styles.divider} />

      {/* Why Choose SeeMyHealth */}
      <Text style={styles.sectionTitle}>Why Choose SeeMyHealth?</Text>
      <Section style={styles.benefitsSection}>
        <Text style={styles.benefitItem}>
          🔬 <strong>Medical-Grade Accuracy</strong> — Lab-quality health
          insights from the comfort of home
        </Text>
        <Text style={styles.benefitItem}>
          📱 <strong>Seamless App Integration</strong> — All your data syncs
          automatically with the SeeMyHealth app
        </Text>
        <Text style={styles.benefitItem}>
          🛡️ <strong>30-Day Money-Back Guarantee</strong> — Try it risk-free
          with free returns
        </Text>
        <Text style={styles.benefitItem}>
          🚚 <strong>Free Shipping</strong> — On all orders, delivered to your
          door
        </Text>
      </Section>

      <Section style={{ textAlign: "center" as const, marginTop: "20px" }}>
        <SecondaryButton href="https://shop.seemyhealth.ai">
          Continue Shopping
        </SecondaryButton>
      </Section>

      <Text style={styles.footerNote}>
        This email was sent because you started a checkout at shop.seemyhealth.ai.
        If you've already completed your purchase, please disregard this message.
      </Text>
    </EmailLayout>
  );
}
