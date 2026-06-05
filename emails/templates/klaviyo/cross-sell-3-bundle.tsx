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

const CDN = "https://imagedelivery.net/NnC2JvU8j4bgBbmedVhjJg";
const BASE_URL = "https://seemyhealth.ai";

const IMAGES = {
  hero: `${CDN}/ring-gold-shh-portrait/public`,
  ring: `${CDN}/ring-gold-portrait-email/public`,
  scale: `${CDN}/scale-bathroom-stepon-v3/public`,
  hydra: `${CDN}/bottle-black-gym-v2/public`,
};

const DEVICE_COLORS = {
  ring: "#F97316",
  scale: "#3B82F6",
  hydra: "#06B6D4",
};

export default function CrossSellBundle() {
  return (
    <EmailLayout preview="Exclusive offer for existing customers — 15% off your next device.">

      {/* ── Hero Image ── */}
      <Section style={heroSection}>
        <Img
          src={IMAGES.hero}
          width="560"
          alt="Exclusive customer offer"
          style={heroImage}
        />
        <Section style={heroOverlay} className="force-white">
          <Text style={heroTagline}>CUSTOMER EXCLUSIVE</Text>
          <Text style={heroTitle}>Just for you.</Text>
        </Section>
      </Section>

      {/* ── Greeting ── */}
      <Section style={greetingSection}>
        <Text style={heading}>
          {"{{ person|lookup:'first_name'|default:'Hey' }}"}, this one is yours.
        </Text>
        <Text style={paragraph}>
          As a valued customer, here is an exclusive offer to expand your
          health ecosystem and unlock deeper insights.
        </Text>
      </Section>

      {/* ── Discount Card ── */}
      <Section style={discountCard}>
        <Text style={discountLabel}>CUSTOMER OFFER</Text>
        <Text style={discountAmount}>15% OFF</Text>
        <Text style={discountDesc}>
          Your next device. Use this code at checkout — it expires in 14 days.
        </Text>
        <Section style={couponBox}>
          <Text style={couponCode}>{"{{ coupon_code }}"}</Text>
        </Section>
        <Text style={discountNote}>
          One-time use. Cannot be combined with other offers.
        </Text>
      </Section>

      <Hr style={divider} />

      {/* ── Expand Your Setup ── */}
      <Text style={sectionLabel}>EXPAND YOUR SETUP</Text>

      {/* Ring One */}
      <Section style={deviceCard}>
        <Img src={IMAGES.ring} width="480" alt="Ring One on hand" style={deviceImage} />
        <Section style={deviceBody}>
          <Text style={deviceBadge(DEVICE_COLORS.ring)}>WEARABLE</Text>
          <Text style={deviceName}>Ring One</Text>
          <Text style={deviceDesc}>
            Sleep, heart rate, HRV, SpO2, and activity tracking. The most
            popular device in the ecosystem.
          </Text>
          <Section style={{ marginTop: "16px" }}>
            <Button href={`${BASE_URL}/products/ring-one`} style={deviceButton(DEVICE_COLORS.ring)}>
              Shop Ring One
            </Button>
          </Section>
        </Section>
      </Section>

      {/* The Scale */}
      <Section style={deviceCard}>
        <Img src={IMAGES.scale} width="480" alt="The Scale in bathroom" style={deviceImage} />
        <Section style={deviceBody}>
          <Text style={deviceBadge(DEVICE_COLORS.scale)}>BODY COMPOSITION</Text>
          <Text style={deviceName}>The Scale</Text>
          <Text style={deviceDesc}>
            Full body composition. Weight, body fat, muscle mass, and 50+
            metrics that sync automatically.
          </Text>
          <Section style={{ marginTop: "16px" }}>
            <Button href={`${BASE_URL}/products/scale`} style={deviceButton(DEVICE_COLORS.scale)}>
              Shop The Scale
            </Button>
          </Section>
        </Section>
      </Section>

      {/* Hydra One */}
      <Section style={deviceCard}>
        <Img src={IMAGES.hydra} width="480" alt="Hydra One at the gym" style={deviceImage} />
        <Section style={deviceBody}>
          <Text style={deviceBadge(DEVICE_COLORS.hydra)}>HYDRATION</Text>
          <Text style={deviceName}>Hydra One</Text>
          <Text style={deviceDesc}>
            Smart bottle that tracks every sip. Real-time hydration tracking
            and daily goals to keep you on track.
          </Text>
          <Section style={{ marginTop: "16px" }}>
            <Button href={`${BASE_URL}/products/hydra-one`} style={deviceButton(DEVICE_COLORS.hydra)}>
              Shop Hydra One
            </Button>
          </Section>
        </Section>
      </Section>

      <Hr style={divider} />

      {/* ── Guarantee Row ── */}
      <Section style={guaranteeSection}>
        <Row>
          <Column style={guaranteeCol}>
            <Text style={guaranteeCheck}>&#10003;</Text>
            <Text style={guaranteeTitle}>Free Shipping</Text>
            <Text style={guaranteeDesc}>On every order</Text>
          </Column>
          <Column style={guaranteeCol}>
            <Text style={guaranteeCheck}>&#10003;</Text>
            <Text style={guaranteeTitle}>30-Day Returns</Text>
            <Text style={guaranteeDesc}>Full refund, no hassle</Text>
          </Column>
          <Column style={guaranteeCol}>
            <Text style={guaranteeCheck}>&#10003;</Text>
            <Text style={guaranteeTitle}>1-Year Warranty</Text>
            <Text style={guaranteeDesc}>We have got you covered</Text>
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

      <Section style={ctaCenter}>
        <PrimaryButton href={`${BASE_URL}/shop`}>
          Shop Now — 15% Off
        </PrimaryButton>
      </Section>

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
  margin: "0 0 16px 0",
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
  padding: "24px",
  textAlign: "center" as const,
  marginTop: "16px",
};

const discountLabel = {
  fontSize: "11px",
  fontWeight: "600" as const,
  color: "#22c55e",
  letterSpacing: "2px",
  textTransform: "uppercase" as const,
  margin: "0 0 4px 0",
};

const discountAmount = {
  fontSize: "36px",
  fontWeight: "700" as const,
  color: "#22c55e",
  margin: "0 0 8px 0",
};

const discountDesc = {
  fontSize: "14px",
  lineHeight: "22px",
  color: "#a3a3a3",
  margin: "0 0 16px 0",
};

const couponBox = {
  backgroundColor: "#0a0a0a",
  border: "2px dashed #1a4d30",
  borderRadius: "8px",
  padding: "12px 20px",
  display: "inline-block" as const,
  marginBottom: "12px",
};

const couponCode = {
  fontSize: "20px",
  fontWeight: "700" as const,
  color: "#ffffff",
  letterSpacing: "3px",
  fontFamily: "monospace",
  margin: "0",
};

const discountNote = {
  fontSize: "12px",
  color: "#6b6b6b",
  margin: "0",
};

// ── Device cards ──

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

const deviceBadge = (color: string) => ({
  fontSize: "10px",
  fontWeight: "700" as const,
  color: color,
  letterSpacing: "2px",
  margin: "0 0 8px 0",
  textTransform: "uppercase" as const,
});

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

const deviceButton = (color: string) => ({
  backgroundColor: color,
  color: "#ffffff",
  padding: "10px 22px",
  borderRadius: "50px",
  fontSize: "12px",
  fontWeight: "600" as const,
  textDecoration: "none",
  display: "inline-block",
  letterSpacing: "0.5px",
  textTransform: "uppercase" as const,
});

// ── Guarantee row ──

const guaranteeSection = {
  padding: "0",
};

const guaranteeCol = {
  width: "33.33%",
  textAlign: "center" as const,
  verticalAlign: "top" as const,
  padding: "0 4px",
};

const guaranteeCheck = {
  fontSize: "20px",
  fontWeight: "700" as const,
  color: "#22c55e",
  margin: "0 0 4px 0",
};

const guaranteeTitle = {
  fontSize: "13px",
  fontWeight: "600" as const,
  color: "#f5f5f5",
  margin: "0 0 2px 0",
};

const guaranteeDesc = {
  fontSize: "12px",
  color: "#6b6b6b",
  margin: "0",
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
