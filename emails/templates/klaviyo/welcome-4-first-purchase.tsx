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
  ring: `${CDN}/ring-gold-woman-casual/public`,
  scale: `${CDN}/scale-bathroom-stepon-v3/public`,
  hydra: `${CDN}/bottle-black-gym-v2/public`,
  bp: `${CDN}/bp-breakfast-reading/public`,
  appScreens: `${CDN}/app-goals-achieved/public`,
};

const DEVICE_COLORS = {
  ring: "#F97316",
  scale: "#3B82F6",
  bp: "#EF4444",
  hydra: "#06B6D4",
};

export default function WelcomeFirstPurchase() {
  return (
    <EmailLayout preview="Your exclusive welcome offer is waiting — don't miss out." title="Your Offer">

      {/* ── Hero ── */}
      <Section style={heroSection}>
        <Img
          src={IMAGES.hero}
          width="560"
          alt="Exclusive offer for you"
          style={heroImage}
        />
        <Section style={heroOverlay} className="force-white">
          <Text style={heroTagline}>EXCLUSIVE OFFER</Text>
          <Text style={heroTitle}>Just for you.</Text>
        </Section>
      </Section>

      {/* ── Greeting ── */}
      <Section style={{ marginBottom: "8px" }}>
        <Text style={heading}>
          {"{{ person|lookup:'first_name'|default:'Hey' }}"}, ready to start?
        </Text>
        <Text style={paragraph}>
          We&rsquo;ve saved a special welcome offer just for you. This is your chance to start your health journey with SeeMyHealth at a discount.
        </Text>
      </Section>

      {/* ── Discount Card ── */}
      <Section style={discountCard}>
        <Text style={discountLabel}>WELCOME OFFER</Text>
        <Text style={discountAmount}>10% OFF</Text>
        <Text style={discountDesc}>
          Your first order. Use this code at checkout &mdash; it expires in 7 days.
        </Text>
        <Section style={couponBox}>
          <Text style={couponCode}>{"{{ coupon_code }}"}</Text>
        </Section>
        <Text style={discountNote}>
          One-time use. Cannot be combined with other offers.
        </Text>
      </Section>

      <Hr style={divider} />

      {/* ── Most Popular ── */}
      <Text style={sectionLabel}>MOST POPULAR</Text>
      <Text style={sectionHeading}>Our bestselling devices.</Text>
      <Text style={sectionSubtext}>
        Each one tracks a different part of your health. Pick one &mdash; or build the full ecosystem.
      </Text>

      {/* Ring One */}
      <Section style={deviceCard}>
        <Img src={IMAGES.ring} width="480" alt="Ring One in Aurora Gold" style={deviceImage} />
        <Section style={deviceBody}>
          <Text style={deviceBadge(DEVICE_COLORS.ring)}>WEARABLE</Text>
          <Text style={deviceName}>Ring One</Text>
          <Text style={deviceDesc}>
            Sleep, heart rate, HRV, SpO2, and activity tracking. Our most popular device.
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
            Full body composition analysis. Weight, body fat, muscle mass, and 50+ metrics.
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
            Smart bottle that tracks every sip. Stay hydrated with real-time tracking and daily goals.
          </Text>
          <Section style={{ marginTop: "16px" }}>
            <Button href={`${BASE_URL}/products/hydra-one`} style={deviceButton(DEVICE_COLORS.hydra)}>
              Shop Hydra One
            </Button>
          </Section>
        </Section>
      </Section>

      <Hr style={divider} />

      {/* ── Free shipping + guarantee ── */}
      <Section style={guaranteeRow}>
        <Row>
          <Column style={guaranteeCol}>
            <Text style={guaranteeIcon}>&#10003;</Text>
            <Text style={guaranteeTitle}>Free Shipping</Text>
            <Text style={guaranteeDesc}>Every order, no minimum.</Text>
          </Column>
          <Column style={guaranteeCol}>
            <Text style={guaranteeIcon}>&#10003;</Text>
            <Text style={guaranteeTitle}>30-Day Returns</Text>
            <Text style={guaranteeDesc}>Try it risk-free.</Text>
          </Column>
          <Column style={guaranteeCol}>
            <Text style={guaranteeIcon}>&#10003;</Text>
            <Text style={guaranteeTitle}>1-Year Warranty</Text>
            <Text style={guaranteeDesc}>Every device covered.</Text>
          </Column>
        </Row>
      </Section>

      <Hr style={divider} />

      {/* ── Social Proof ── */}
      <Section style={socialSection}>
        <Text style={socialNumber}>10,000+</Text>
        <Text style={socialText}>people tracking their health with SeeMyHealth</Text>
      </Section>

      <Hr style={divider} />

      {/* ── App teaser ── */}
      <Img
        src={IMAGES.appScreens}
        width="480"
        alt="SeeMyHealth app"
        style={fullImage}
      />
      <Section style={{ textAlign: "center" as const, marginTop: "16px" }}>
        <Text style={sectionHeading}>All your data. One app.</Text>
        <Text style={sectionSubtext}>
          Download the SeeMyHealth app so it&rsquo;s ready when your devices arrive.
        </Text>
      </Section>

      {/* ── Final CTA ── */}
      <Section style={ctaCenter}>
        <PrimaryButton href={`${BASE_URL}/shop`}>
          Shop Now &mdash; 10% Off
        </PrimaryButton>
      </Section>

      {/* Spacer */}
      <Section style={{ height: "16px" }} />

      <Text style={footerNote}>
        You received this email because you created an account at seemyhealth.ai. This is the final email in our welcome series.
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
  color: "#22c55e",
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
  margin: "0 0 8px 0",
  letterSpacing: "-0.3px",
};

const sectionSubtext = {
  fontSize: "15px",
  color: "#8a8a8a",
  lineHeight: "24px",
  margin: "0 0 24px 0",
};

const divider = {
  borderColor: "#1a1a1a",
  margin: "36px 0",
};

const ctaCenter = {
  textAlign: "center" as const,
  margin: "28px 0 0 0",
};

// ── Discount ──

const discountCard = {
  backgroundColor: "#0d2618",
  border: "1px solid #1a4d30",
  borderRadius: "12px",
  padding: "32px 24px",
  textAlign: "center" as const,
  marginTop: "24px",
};

const discountLabel = {
  margin: "0 0 4px 0",
  fontSize: "11px",
  fontWeight: "600" as const,
  color: "#22c55e",
  letterSpacing: "3px",
};

const discountAmount = {
  margin: "0 0 12px 0",
  fontSize: "42px",
  fontWeight: "700" as const,
  color: "#22c55e",
  letterSpacing: "-1px",
};

const discountDesc = {
  margin: "0 0 20px 0",
  fontSize: "15px",
  lineHeight: "24px",
  color: "#a3a3a3",
};

const couponBox = {
  backgroundColor: "#0a0a0a",
  border: "2px dashed #1a4d30",
  borderRadius: "8px",
  padding: "14px 24px",
  display: "inline-block" as const,
  marginBottom: "12px",
};

const couponCode = {
  margin: "0",
  fontSize: "22px",
  fontWeight: "700" as const,
  color: "#ffffff",
  letterSpacing: "4px",
  fontFamily: "monospace",
};

const discountNote = {
  margin: "0",
  fontSize: "12px",
  color: "#6b6b6b",
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

// ── Guarantee ──

const guaranteeRow = {
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

const guaranteeIcon = {
  margin: "0 0 4px 0",
  fontSize: "16px",
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

const socialSection = {
  textAlign: "center" as const,
  padding: "8px 0",
};

const socialNumber = {
  fontSize: "32px",
  fontWeight: "700" as const,
  color: "#f5f5f5",
  margin: "0",
  letterSpacing: "-0.5px",
};

const socialText = {
  fontSize: "14px",
  color: "#6b6b6b",
  margin: "4px 0 0 0",
};

const fullImage = {
  width: "100%",
  display: "block" as const,
  borderRadius: "12px",
};

const footerNote = {
  fontSize: "13px",
  color: "#525252",
  textAlign: "center" as const,
  margin: "16px 0 0 0",
  lineHeight: "20px",
};
