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
  hero: `${CDN}/og-ecosystem/public`,
  ring: `${CDN}/ring-gold-portrait-email/public`,
  scale: `${CDN}/scale-bathroom-stepon-v3/public`,
  hydra: `${CDN}/bottle-black-gym-v2/public`,
};

const DEVICE_COLORS = {
  ring: "#F97316",
  scale: "#3B82F6",
  hydra: "#06B6D4",
};

export default function CrossSellComplement() {
  return (
    <EmailLayout preview="Your device works even better with a partner — see what pairs perfectly.">

      {/* ── Hero Image ── */}
      <Section style={heroSection}>
        <Img
          src={IMAGES.hero}
          width="560"
          alt="SeeMyHealth ecosystem devices"
          style={heroImage}
        />
        <Section style={heroOverlay} className="force-white">
          <Text style={heroTagline}>BETTER TOGETHER</Text>
          <Text style={heroTitle}>Complete the picture.</Text>
        </Section>
      </Section>

      {/* ── Greeting ── */}
      <Section style={greetingSection}>
        <Text style={heading}>
          {"{{ person|lookup:'first_name'|default:'Hey' }}"}, your health picture is incomplete.
        </Text>
        <Text style={paragraph}>
          Your device is tracking one part of your health. Add another device to
          unlock cross-metric insights — like how sleep affects body composition,
          or how hydration impacts energy.
        </Text>
      </Section>

      <Hr style={divider} />

      {/* ── Recommended Devices ── */}
      <Text style={sectionLabel}>RECOMMENDED FOR YOU</Text>

      {/* Ring One */}
      <Section style={deviceCard}>
        <Img src={IMAGES.ring} width="480" alt="Ring One on hand" style={deviceImage} />
        <Section style={deviceBody}>
          <Text style={deviceBadge(DEVICE_COLORS.ring)}>WEARABLE</Text>
          <Text style={deviceName}>Ring One</Text>
          <Text style={deviceDesc}>
            Sleep, heart rate, HRV, SpO2, and activity tracking. The
            cornerstone of the ecosystem.
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
            Full body composition analysis. Weight, body fat, muscle mass,
            and 50+ metrics. Step on, and your data syncs instantly.
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
            Smart bottle that tracks every sip. Stay hydrated with real-time
            tracking, smart reminders, and daily goals.
          </Text>
          <Section style={{ marginTop: "16px" }}>
            <Button href={`${BASE_URL}/products/hydra-one`} style={deviceButton(DEVICE_COLORS.hydra)}>
              Shop Hydra One
            </Button>
          </Section>
        </Section>
      </Section>

      <Hr style={divider} />

      {/* ── Ecosystem Benefit ── */}
      <Section style={ecosystemCard}>
        <Text style={ecosystemTitle}>More devices = deeper insights</Text>
        <Text style={ecosystemDesc}>
          Each device you add unlocks new correlations in the app. See how
          every part of your health connects — sleep, activity, body
          composition, hydration, and vitals in one unified dashboard.
        </Text>
      </Section>

      <Section style={ctaCenter}>
        <PrimaryButton href={`${BASE_URL}/shop`}>
          Explore All Devices
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

// ── Ecosystem card ──

const ecosystemCard = {
  backgroundColor: "#0d2618",
  border: "1px solid #1a4d30",
  borderRadius: "12px",
  padding: "24px",
  textAlign: "center" as const,
};

const ecosystemTitle = {
  fontSize: "18px",
  fontWeight: "700" as const,
  color: "#22c55e",
  margin: "0 0 8px 0",
};

const ecosystemDesc = {
  fontSize: "14px",
  lineHeight: "22px",
  color: "#a3a3a3",
  margin: "0",
};
