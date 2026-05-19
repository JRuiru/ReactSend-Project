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
import { SecondaryButton } from "../components/SecondaryButton";

const CF_IMG = "https://imagedelivery.net/NnC2JvU8j4bgBbmedVhjJg";

const IMAGES = {
  ringOne: `${CF_IMG}/ring-one/public`,
  scale: `${CF_IMG}/scale/public`,
};

const styles = {
  shippingBanner: {
    background: "linear-gradient(135deg, #1e3a5f 0%, #1d4ed8 50%, #3b82f6 100%)",
    borderRadius: "12px",
    padding: "32px 24px",
    textAlign: "center" as const,
    marginBottom: "24px",
  },
  bannerEmoji: {
    fontSize: "48px",
    lineHeight: "1",
    margin: "0 0 12px 0",
  },
  bannerTitle: {
    fontSize: "26px",
    fontWeight: "bold" as const,
    color: "#ffffff",
    margin: "0 0 8px 0",
    lineHeight: "32px",
  },
  bannerSubtitle: {
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
  trackingCard: {
    background: "linear-gradient(135deg, rgba(124,58,237,0.06) 0%, rgba(124,58,237,0.02) 100%)",
    borderRadius: "12px",
    border: "1px solid rgba(124, 58, 237, 0.12)",
    padding: "24px",
    marginBottom: "24px",
  },
  trackingLabel: {
    fontSize: "11px",
    fontWeight: "bold" as const,
    color: "#6b7280",
    textTransform: "uppercase" as const,
    letterSpacing: "1.5px",
    margin: "0 0 6px 0",
  },
  trackingValue: {
    fontSize: "16px",
    fontWeight: "bold" as const,
    color: "#111827",
    margin: "0 0 18px 0",
  },
  trackingNumber: {
    fontSize: "18px",
    fontWeight: "bold" as const,
    color: "#7c3aed",
    margin: "0 0 18px 0",
    letterSpacing: "1px",
  },
  sectionTitle: {
    fontSize: "18px",
    fontWeight: "bold" as const,
    color: "#111827",
    margin: "0 0 16px 0",
  },
  // Timeline / Progress
  progressSection: {
    marginBottom: "24px",
  },
  progressStep: {
    padding: "12px 0 12px 20px",
    borderLeft: "3px solid rgba(124, 58, 237, 0.15)",
    position: "relative" as const,
  },
  progressStepActive: {
    padding: "12px 0 12px 20px",
    borderLeft: "3px solid #7c3aed",
  },
  progressStepCompleted: {
    padding: "12px 0 12px 20px",
    borderLeft: "3px solid #10b981",
  },
  stepTitle: {
    fontSize: "14px",
    fontWeight: "bold" as const,
    color: "#111827",
    margin: "0 0 2px 0",
  },
  stepTitleActive: {
    fontSize: "14px",
    fontWeight: "bold" as const,
    color: "#7c3aed",
    margin: "0 0 2px 0",
  },
  stepDate: {
    fontSize: "12px",
    color: "#6b7280",
    margin: "0",
  },
  // Products
  productCard: {
    backgroundColor: "rgba(124, 58, 237, 0.04)",
    borderRadius: "12px",
    border: "1px solid rgba(124, 58, 237, 0.08)",
    padding: "14px",
    marginBottom: "10px",
  },
  productImage: {
    borderRadius: "8px",
    width: "70px",
    height: "70px",
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
    margin: "0",
  },
  // Shipping address
  addressCard: {
    backgroundColor: "rgba(124, 58, 237, 0.04)",
    borderRadius: "12px",
    border: "1px solid rgba(124, 58, 237, 0.1)",
    padding: "20px",
    marginBottom: "24px",
  },
  addressLabel: {
    fontSize: "11px",
    fontWeight: "bold" as const,
    color: "#6b7280",
    textTransform: "uppercase" as const,
    letterSpacing: "1.5px",
    margin: "0 0 6px 0",
  },
  addressText: {
    fontSize: "14px",
    color: "#374151",
    lineHeight: "22px",
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
  tipSection: {
    background: "linear-gradient(135deg, #1a0533 0%, #2d1654 50%, #4c1d95 100%)",
    borderRadius: "12px",
    padding: "24px",
    marginTop: "8px",
  },
  tipTitle: {
    fontSize: "18px",
    fontWeight: "bold" as const,
    color: "#ffffff",
    margin: "0 0 14px 0",
    textAlign: "center" as const,
  },
  tipItem: {
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

export default function ShopifyShippingUpdate() {
  return (
    <EmailLayout previewText="Your order is on the way! Track your shipment in real time.">
      {/* Shipping Banner */}
      <Section style={styles.shippingBanner} className="dark-safe">
        <Text style={styles.bannerEmoji}>📦</Text>
        <Text style={styles.bannerTitle}>Your Order Has Shipped!</Text>
        <Text style={styles.bannerSubtitle}>
          Your health devices are on their way to you
        </Text>
      </Section>

      {/* Greeting */}
      <Text style={styles.greeting}>
        Hi {'{{ first_name|default:"there" }}'}, exciting news — your order has
        been shipped and is headed your way! Here are the details:
      </Text>

      {/* Tracking Info Card */}
      <Section style={styles.trackingCard}>
        <Row>
          <Column>
            <Text style={styles.trackingLabel}>Order Number</Text>
            <Text style={styles.trackingValue}>#SMH-20250509-001</Text>
          </Column>
          <Column>
            <Text style={styles.trackingLabel}>Carrier</Text>
            <Text style={styles.trackingValue}>DHL Express</Text>
          </Column>
        </Row>
        <Text style={styles.trackingLabel}>Tracking Number</Text>
        <Text style={styles.trackingNumber}>1Z999AA10123456784</Text>
        <Text style={styles.trackingLabel}>Estimated Delivery</Text>
        <Text style={{ ...styles.trackingValue, marginBottom: "0" }}>
          May 14–16, 2026
        </Text>
      </Section>

      {/* CTA */}
      <Section style={styles.ctaSection}>
        <PrimaryButton href="https://track.dhl.com/1Z999AA10123456784">
          Track Your Package
        </PrimaryButton>
      </Section>

      <Hr style={styles.divider} />

      {/* Shipment Progress */}
      <Text style={styles.sectionTitle}>Shipment Progress</Text>
      <Section style={styles.progressSection}>
        <Section style={styles.progressStepCompleted}>
          <Text style={styles.stepTitle}>✅ Order Placed</Text>
          <Text style={styles.stepDate}>May 9, 2026 · 10:30 AM</Text>
        </Section>
        <Section style={styles.progressStepCompleted}>
          <Text style={styles.stepTitle}>✅ Order Confirmed</Text>
          <Text style={styles.stepDate}>May 9, 2026 · 10:32 AM</Text>
        </Section>
        <Section style={styles.progressStepActive}>
          <Text style={styles.stepTitleActive}>📦 Shipped</Text>
          <Text style={styles.stepDate}>May 10, 2026 · 2:15 PM</Text>
        </Section>
        <Section style={styles.progressStep}>
          <Text style={styles.stepTitle}>🏠 Out for Delivery</Text>
          <Text style={styles.stepDate}>Estimated May 14, 2026</Text>
        </Section>
        <Section style={styles.progressStep}>
          <Text style={styles.stepTitle}>🎉 Delivered</Text>
          <Text style={styles.stepDate}>—</Text>
        </Section>
      </Section>

      <Hr style={styles.divider} />

      {/* Items in Shipment */}
      <Text style={styles.sectionTitle}>Items in This Shipment</Text>

      <Section style={styles.productCard}>
        <Row>
          <Column style={{ width: "80px", verticalAlign: "top" }}>
            <Img
              src={IMAGES.ringOne}
              alt="Ring One"
              style={styles.productImage}
            />
          </Column>
          <Column style={{ verticalAlign: "middle", paddingLeft: "12px" }}>
            <Text style={styles.productName}>Ring One</Text>
            <Text style={styles.productVariant}>Size 8 · Midnight Black · Qty: 1</Text>
          </Column>
        </Row>
      </Section>

      <Section style={styles.productCard}>
        <Row>
          <Column style={{ width: "80px", verticalAlign: "top" }}>
            <Img
              src={IMAGES.scale}
              alt="Smart Scale"
              style={styles.productImage}
            />
          </Column>
          <Column style={{ verticalAlign: "middle", paddingLeft: "12px" }}>
            <Text style={styles.productName}>Smart Scale</Text>
            <Text style={styles.productVariant}>White · Body Composition · Qty: 1</Text>
          </Column>
        </Row>
      </Section>

      {/* Delivering To */}
      <Text style={{ ...styles.sectionTitle, marginTop: "24px" }}>
        Delivering To
      </Text>
      <Section style={styles.addressCard}>
        <Text style={styles.addressLabel}>Address</Text>
        <Text style={styles.addressText}>
          John Doe{"\n"}
          123 Health Avenue{"\n"}
          Nairobi, Kenya 00100
        </Text>
      </Section>

      {/* Get Ready Tips */}
      <Section style={styles.tipSection} className="dark-safe">
        <Text style={styles.tipTitle}>Get Ready for Your Devices!</Text>
        <Text style={styles.tipItem}>
          📱 <strong>Download the SeeMyHealth app</strong> — Available on iOS
          and Android
        </Text>
        <Text style={styles.tipItem}>
          🔋 <strong>Charge your devices</strong> — Plug them in as soon as
          they arrive for the best first experience
        </Text>
        <Text style={styles.tipItem}>
          👤 <strong>Set up your profile</strong> — Add your health goals in
          the app so your devices start tracking what matters to you
        </Text>
      </Section>

      <Section style={{ textAlign: "center" as const, marginTop: "20px" }}>
        <SecondaryButton href="https://shop.seemyhealth.ai/account/orders">
          View Order Details
        </SecondaryButton>
      </Section>

      <Text style={styles.footerNote}>
        Need help? Visit{" "}
        <Link href="https://seemyhealth.ai/support" style={{ color: "#7c3aed" }}>
          our support page
        </Link>{" "}
        or reply to this email.
      </Text>
    </EmailLayout>
  );
}
