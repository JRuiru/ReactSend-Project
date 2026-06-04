import {
  Text,
  Section,
  Img,
  Row,
  Column,
  Hr,
} from "@react-email/components";
import * as React from "react";
import { EmailLayout } from "../components/EmailLayout";
import { PrimaryButton } from "../components/PrimaryButton";

const CDN = "https://imagedelivery.net/NnC2JvU8j4bgBbmedVhjJg";
const BASE_URL = "https://seemyhealth.ai";

// Device images mapped by category for dynamic selection
// In production, the backend picks the right image based on the device
const IMAGES = {
  hero: `${CDN}/ring-app-phone/public`,
};

export default function DeviceConnectedEmail() {
  return (
    <EmailLayout preview="{{device_name}} is connected and syncing">

      {/* ── Hero ── */}
      <Section style={heroSection}>
        <Img
          src={IMAGES.hero}
          width="560"
          alt="Device connected to SeeMyHealth"
          style={heroImage}
        />
        <Section style={heroOverlay} className="force-white">
          <Text style={heroLabel}>{"{{device_category}}"}</Text>
          <Text style={heroTitle}>You are all set.</Text>
        </Section>
      </Section>

      {/* ── Greeting ── */}
      <Text style={heading}>
        Nice one, {"{{first_name}}"}.
      </Text>
      <Text style={paragraph}>
        Your <strong style={{ color: "#f5f5f5" }}>{"{{device_name}}"}</strong> is
        paired and syncing. Data will start flowing into your dashboard within
        minutes.
      </Text>

      <Hr style={divider} />

      {/* ══════════════════════════════════════════════════════════
          What it's tracking
          ══════════════════════════════════════════════════════════ */}
      <Text style={sectionLabel}>NOW TRACKING</Text>

      <Section style={trackingCard}>
        <Section style={trackRow}>
          <Row>
            <Column style={dotCol}><Text style={dot}>&#x25CF;</Text></Column>
            <Column><Text style={trackText}>{"{{tracking_1}}"}</Text></Column>
          </Row>
        </Section>
        <Section style={trackRow}>
          <Row>
            <Column style={dotCol}><Text style={dot}>&#x25CF;</Text></Column>
            <Column><Text style={trackText}>{"{{tracking_2}}"}</Text></Column>
          </Row>
        </Section>
        <Section style={trackRow}>
          <Row>
            <Column style={dotCol}><Text style={dot}>&#x25CF;</Text></Column>
            <Column><Text style={trackText}>{"{{tracking_3}}"}</Text></Column>
          </Row>
        </Section>
        <Section style={trackRow}>
          <Row>
            <Column style={dotCol}><Text style={dot}>&#x25CF;</Text></Column>
            <Column><Text style={trackText}>{"{{tracking_4}}"}</Text></Column>
          </Row>
        </Section>
      </Section>

      <Hr style={divider} />

      {/* ══════════════════════════════════════════════════════════
          Quick tips — 3 step getting started
          ══════════════════════════════════════════════════════════ */}
      <Text style={sectionLabel}>GETTING STARTED</Text>

      <Section style={stepRow}>
        <Row>
          <Column style={stepNumberCol}>
            <Text style={stepNumber}>1</Text>
          </Column>
          <Column style={stepContent}>
            <Text style={stepTitle}>Wear it, charge it</Text>
            <Text style={stepDesc}>
              Keep your device charged and on you consistently for the most
              accurate data.
            </Text>
          </Column>
        </Row>
      </Section>

      <Section style={stepRow}>
        <Row>
          <Column style={stepNumberCol}>
            <Text style={stepNumber}>2</Text>
          </Column>
          <Column style={stepContent}>
            <Text style={stepTitle}>Keep Bluetooth on</Text>
            <Text style={stepDesc}>
              Your device syncs automatically in the background. Just keep
              Bluetooth enabled.
            </Text>
          </Column>
        </Row>
      </Section>

      <Section style={stepRow}>
        <Row>
          <Column style={stepNumberCol}>
            <Text style={stepNumber}>3</Text>
          </Column>
          <Column style={stepContent}>
            <Text style={stepTitle}>Set your first goal</Text>
            <Text style={stepDesc}>
              Create a health goal tied to your new device. Tracking progress
              is the best motivator.
            </Text>
          </Column>
        </Row>
      </Section>

      <Hr style={divider} />

      {/* ── CTA ── */}
      <Section style={ctaSection}>
        <Text style={ctaText}>
          Your dashboard is ready. Open the app to see your first data.
        </Text>
        <Section style={ctaCenter}>
          <PrimaryButton href={`${BASE_URL}/app`}>
            Open the App
          </PrimaryButton>
        </Section>
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

const heroLabel = {
  fontSize: "11px",
  fontWeight: "600" as const,
  color: "rgba(255, 255, 255, 0.7)",
  letterSpacing: "3px",
  textTransform: "uppercase" as const,
  margin: "0 0 4px 0",
};

const heroTitle = {
  fontSize: "28px",
  fontWeight: "700" as const,
  color: "#ffffff",
  margin: "0",
  letterSpacing: "-0.3px",
};

const heading = {
  fontSize: "24px",
  fontWeight: "700" as const,
  color: "#f5f5f5",
  margin: "0 0 10px 0",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  color: "rgba(255, 255, 255, 0.6)",
  margin: "0",
};

const divider = {
  borderColor: "rgba(255, 255, 255, 0.06)",
  margin: "28px 0",
};

const sectionLabel = {
  fontSize: "11px",
  fontWeight: "600" as const,
  color: "rgba(255, 255, 255, 0.35)",
  letterSpacing: "3px",
  textTransform: "uppercase" as const,
  margin: "0 0 16px 0",
};

// ── Tracking card ──

const trackingCard = {
  backgroundColor: "#141414",
  borderRadius: "12px",
  padding: "20px 24px",
  border: "1px solid rgba(255, 255, 255, 0.06)",
};

const trackRow = {
  marginBottom: "8px",
};

const dotCol = {
  width: "20px",
  verticalAlign: "top" as const,
};

const dot = {
  fontSize: "8px",
  color: "rgba(255, 255, 255, 0.3)",
  margin: "0",
  lineHeight: "22px",
};

const trackText = {
  fontSize: "15px",
  color: "rgba(255, 255, 255, 0.7)",
  margin: "0",
  lineHeight: "22px",
};

// ── Steps ──

const stepRow = {
  marginBottom: "16px",
};

const stepNumberCol = {
  width: "40px",
  verticalAlign: "top" as const,
};

const stepNumber = {
  fontSize: "20px",
  fontWeight: "700" as const,
  color: "rgba(255, 255, 255, 0.15)",
  margin: "0",
  lineHeight: "1",
};

const stepContent = {
  verticalAlign: "top" as const,
};

const stepTitle = {
  fontSize: "15px",
  fontWeight: "600" as const,
  color: "#f5f5f5",
  margin: "0 0 4px 0",
};

const stepDesc = {
  fontSize: "14px",
  color: "rgba(255, 255, 255, 0.45)",
  lineHeight: "21px",
  margin: "0",
};

// ── CTA ──

const ctaSection = {
  textAlign: "center" as const,
};

const ctaText = {
  fontSize: "15px",
  color: "rgba(255, 255, 255, 0.5)",
  lineHeight: "24px",
  margin: "0",
  textAlign: "center" as const,
};

const ctaCenter = {
  textAlign: "center" as const,
  margin: "20px 0 0 0",
};
