import {
  Text,
  Section,
  Img,
  Row,
  Column,
  Hr,
  Button,
} from "@react-email/components";
import * as React from "react";
import { EmailLayout } from "../../components/EmailLayout";
import { PrimaryButton } from "../../components/PrimaryButton";
import { SecondaryButton } from "../../components/SecondaryButton";

const CDN = "https://imagedelivery.net/NnC2JvU8j4bgBbmedVhjJg";
const BASE_URL = "https://seemyhealth.ai";

const IMAGES = {
  hero: `${CDN}/ring-gold-shh-portrait/public`,
  ringProduct: `${CDN}/ring-gold-woman-casual/public`,
};

export default function WinbackLastChance() {
  return (
    <EmailLayout preview="We have a special offer to welcome you back — don't miss it.">

      {/* ── Hero Image ── */}
      <Section style={heroSection}>
        <Img
          src={IMAGES.hero}
          width="560"
          alt="Welcome back to SeeMyHealth"
          style={heroImage}
        />
        <Section style={heroOverlay} className="force-white">
          <Text style={heroTagline}>WELCOME BACK OFFER</Text>
          <Text style={heroTitle}>One more chance.</Text>
        </Section>
      </Section>

      {/* ── Greeting ── */}
      <Section style={greetingSection}>
        <Text style={heading}>
          {"{{ person|lookup:'first_name'|default:'Hey' }}"}, we'd love to have you back.
        </Text>
        <Text style={paragraph}>
          It's been a while since you visited SeeMyHealth. As a thank you for
          being part of our community, here's an exclusive offer just for you.
        </Text>
      </Section>

      {/* ── Discount Card ── */}
      <Section style={discountCard}>
        <Text style={discountLabel}>WELCOME BACK</Text>
        <Text style={discountAmount}>15% OFF</Text>
        <Text style={discountDesc}>
          Use this code on your next order. It expires in 14 days.
        </Text>
        <Section style={couponBox}>
          <Text style={couponCode}>{"{{ coupon_code }}"}</Text>
        </Section>
        <Text style={discountNote}>
          One-time use. Cannot be combined with other offers.
        </Text>
      </Section>

      <Hr style={divider} />

      {/* ── Ring One Card ── */}
      <Text style={sectionLabel}>BESTSELLER</Text>
      <Text style={sectionHeading}>Our most popular device.</Text>

      <Section style={deviceCard}>
        <Img
          src={IMAGES.ringProduct}
          width="480"
          alt="Ring One in Aurora Gold"
          style={deviceImage}
        />
        <Section style={deviceBody}>
          <Text style={deviceBadge}>MOST POPULAR</Text>
          <Text style={deviceName}>Ring One</Text>
          <Text style={deviceDesc}>
            Sleep, heart rate, HRV, SpO2, temperature and activity tracking.
            24/7 on your finger. Our bestseller.
          </Text>
          <Section style={{ marginTop: "16px" }}>
            <Button href={`${BASE_URL}/products/ring-one`} style={deviceButton}>
              Shop Ring One
            </Button>
          </Section>
        </Section>
      </Section>

      <Hr style={divider} />

      {/* ── Guarantee Row ── */}
      <Section style={guaranteeCard}>
        <Row>
          <Column style={guaranteeCol}>
            <Text style={guaranteeCheck}>&#10003;</Text>
            <Text style={guaranteeTitle}>Free Shipping</Text>
            <Text style={guaranteeDesc}>On all orders</Text>
          </Column>
          <Column style={guaranteeCol}>
            <Text style={guaranteeCheck}>&#10003;</Text>
            <Text style={guaranteeTitle}>30-Day Returns</Text>
            <Text style={guaranteeDesc}>No questions asked</Text>
          </Column>
          <Column style={guaranteeCol}>
            <Text style={guaranteeCheck}>&#10003;</Text>
            <Text style={guaranteeTitle}>1-Year Warranty</Text>
            <Text style={guaranteeDesc}>Full coverage</Text>
          </Column>
        </Row>
      </Section>

      <Hr style={divider} />

      {/* ── Social Proof ── */}
      <Section style={socialProofSection}>
        <Text style={socialProofNumber}>10,000+</Text>
        <Text style={socialProofText}>
          people tracking their health with SeeMyHealth
        </Text>
      </Section>

      {/* ── Final CTA ── */}
      <Section style={ctaCenter}>
        <PrimaryButton href={`${BASE_URL}/shop`}>
          Shop Now — 15% Off
        </PrimaryButton>
      </Section>

      <Hr style={divider} />

      {/* ── Footer Note ── */}
      <Text style={footerNote}>
        This is our last email in this series. We won't send more unless you
        engage. Thank you for being part of the SeeMyHealth community.
      </Text>

    </EmailLayout>
  );
}

// ── Styles ──

const heroSection = {
  position: "relative" as const,
  borderRadius: "12px",
  overflow: "hidden" as const,
  marginBottom: "32px",
};

const heroImage = {
  width: "100%",
  display: "block" as const,
  borderRadius: "12px",
};

const heroOverlay = {
  position: "absolute" as const,
  bottom: "0",
  left: "0",
  right: "0",
  padding: "40px 24px 24px",
  background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)",
};

const heroTagline = {
  fontSize: "11px",
  fontWeight: "600" as const,
  color: "#b3b3b3",
  letterSpacing: "3px",
  textTransform: "uppercase" as const,
  margin: "0 0 4px 0",
};

const heroTitle = {
  fontSize: "32px",
  fontWeight: "700" as const,
  color: "#ffffff",
  margin: "0",
  letterSpacing: "-0.5px",
};

const greetingSection = {
  marginBottom: "8px",
};

const heading = {
  fontSize: "26px",
  fontWeight: "700" as const,
  color: "#f5f5f5",
  margin: "0 0 12px 0",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  color: "#a3a3a3",
  margin: "0 0 8px 0",
};

const sectionLabel = {
  fontSize: "11px",
  fontWeight: "600" as const,
  color: "#5e5e5e",
  letterSpacing: "3px",
  textTransform: "uppercase" as const,
  margin: "0 0 8px 0",
};

const sectionHeading = {
  fontSize: "22px",
  fontWeight: "700" as const,
  color: "#f5f5f5",
  margin: "0 0 16px 0",
  letterSpacing: "-0.3px",
};

const divider = {
  borderColor: "#1a1a1a",
  margin: "36px 0",
};

const ctaCenter = {
  textAlign: "center" as const,
  margin: "28px 0 0 0",
};

// ── Discount card ──

const discountCard = {
  backgroundColor: "#0d2618",
  border: "1px solid #1a4d30",
  borderRadius: "12px",
  padding: "28px 24px",
  textAlign: "center" as const,
  marginTop: "16px",
};

const discountLabel = {
  margin: "0 0 4px 0",
  fontSize: "11px",
  fontWeight: "600" as const,
  color: "#22c55e",
  letterSpacing: "3px",
  textTransform: "uppercase" as const,
};

const discountAmount = {
  margin: "0 0 8px 0",
  fontSize: "36px",
  fontWeight: "700" as const,
  color: "#22c55e",
  letterSpacing: "-0.5px",
};

const discountDesc = {
  margin: "0 0 16px 0",
  fontSize: "14px",
  lineHeight: "22px",
  color: "#a3a3a3",
};

const couponBox = {
  backgroundColor: "#0a0a0a",
  border: "2px dashed #1a4d30",
  borderRadius: "8px",
  padding: "12px 24px",
  display: "inline-block" as const,
  marginBottom: "12px",
};

const couponCode = {
  margin: "0",
  fontSize: "20px",
  fontWeight: "700" as const,
  color: "#ffffff",
  letterSpacing: "3px",
  fontFamily: "monospace",
};

const discountNote = {
  margin: "0",
  fontSize: "12px",
  color: "#6b6b6b",
};

// ── Device card ──

const deviceCard = {
  borderRadius: "12px",
  overflow: "hidden" as const,
  marginBottom: "16px",
  border: "1px solid #1a1a1a",
  backgroundColor: "#141414",
};

const deviceImage = {
  width: "100%",
  display: "block" as const,
};

const deviceBody = {
  padding: "20px 24px 24px",
};

const deviceBadge = {
  fontSize: "10px",
  fontWeight: "700" as const,
  color: "#F97316",
  letterSpacing: "2px",
  margin: "0 0 8px 0",
  textTransform: "uppercase" as const,
};

const deviceName = {
  fontSize: "20px",
  fontWeight: "700" as const,
  color: "#f5f5f5",
  margin: "0 0 8px 0",
};

const deviceDesc = {
  fontSize: "14px",
  lineHeight: "22px",
  color: "#8a8a8a",
  margin: "0",
};

const deviceButton = {
  backgroundColor: "#F97316",
  color: "#ffffff",
  padding: "10px 22px",
  borderRadius: "50px",
  fontSize: "12px",
  fontWeight: "600" as const,
  textDecoration: "none",
  display: "inline-block",
  letterSpacing: "0.5px",
  textTransform: "uppercase" as const,
};

// ── Guarantee row ──

const guaranteeCard = {
  backgroundColor: "#141414",
  border: "1px solid #1a1a1a",
  borderRadius: "12px",
  padding: "24px 16px",
};

const guaranteeCol = {
  width: "33.33%",
  textAlign: "center" as const,
  verticalAlign: "top" as const,
};

const guaranteeCheck = {
  margin: "0 0 6px 0",
  fontSize: "18px",
  color: "#22c55e",
  fontWeight: "700" as const,
  textAlign: "center" as const,
};

const guaranteeTitle = {
  margin: "0 0 2px 0",
  fontSize: "13px",
  fontWeight: "600" as const,
  color: "#f5f5f5",
  textAlign: "center" as const,
};

const guaranteeDesc = {
  margin: "0",
  fontSize: "11px",
  color: "#6b6b6b",
  textAlign: "center" as const,
};

// ── Social proof ──

const socialProofSection = {
  textAlign: "center" as const,
  padding: "8px 0",
};

const socialProofNumber = {
  fontSize: "32px",
  fontWeight: "700" as const,
  color: "#f5f5f5",
  margin: "0",
  letterSpacing: "-0.5px",
};

const socialProofText = {
  fontSize: "14px",
  color: "#6b6b6b",
  margin: "4px 0 0 0",
};

// ── Footer ──

const footerNote = {
  fontSize: "13px",
  color: "#525252",
  textAlign: "center" as const,
  margin: "0",
  lineHeight: "20px",
};
