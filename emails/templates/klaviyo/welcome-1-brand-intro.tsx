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
  hero: `${CDN}/lifestyle-celebration-toast/public`,
  ecosystem: `${CDN}/og-ecosystem/public`,
  ring: `${CDN}/ring-gold-portrait-email/public`,
  scale: `${CDN}/scale-bathroom-stepon-v3/public`,
  bp: `${CDN}/bp-breakfast-reading/public`,
  hydra: `${CDN}/bottle-black-gym-v2/public`,
  app: `${CDN}/app-couch-download/public`,
};

const DEVICE_COLORS = {
  ring: "#F97316",
  scale: "#3B82F6",
  bp: "#EF4444",
  hydra: "#06B6D4",
};

export default function WelcomeBrandIntro() {
  return (
    <EmailLayout preview="Welcome to SeeMyHealth — your health journey starts here.">

      {/* ── Hero Image ── */}
      <Section style={heroSection}>
        <Img
          src={IMAGES.hero}
          width="560"
          alt="Welcome to the SeeMyHealth community"
          style={heroImage}
        />
        <Section style={heroOverlay} className="force-white">
          <Text style={heroTagline}>WELCOME TO</Text>
          <Text style={heroTitle}>SeeMyHealth</Text>
        </Section>
      </Section>

      {/* ── Greeting ── */}
      <Section style={greetingSection}>
        <Text style={heading}>
          {"{{ person|lookup:'first_name'|default:'Hey' }}"}, welcome aboard.
        </Text>
        <Text style={paragraph}>
          You just joined a community of people who take their health seriously.
          SeeMyHealth gives you the devices and data to understand your body
          like never before.
        </Text>
      </Section>

      <Hr style={divider} />

      {/* ── The Ecosystem ── */}
      <Section style={ecosystemCard}>
        <Img
          src={IMAGES.ecosystem}
          width="560"
          alt="SeeMyHealth ecosystem of connected devices"
          style={cardImage}
        />
        <Section style={cardBody}>
          <Text style={sectionLabel}>THE ECOSYSTEM</Text>
          <Text style={cardTitle}>
            Six devices. One app. Your complete health picture.
          </Text>
          <Text style={cardDesc}>
            We build smart health devices that work together. A ring for sleep.
            A scale for body composition. A bottle for hydration. A monitor for
            blood pressure. One app connects it all.
          </Text>
        </Section>
      </Section>

      <Hr style={divider} />

      {/* ── Devices ── */}
      <Text style={sectionLabel}>MEET THE DEVICES</Text>

      {/* Ring One */}
      <Section style={deviceCard}>
        <Img src={IMAGES.ring} width="480" alt="Ring One in Aurora Gold" style={cardImage} />
        <Section style={deviceBody}>
          <Text style={deviceBadge(DEVICE_COLORS.ring)}>WEARABLE</Text>
          <Text style={deviceName}>Ring One</Text>
          <Text style={deviceDesc}>
            Sleep, heart rate, HRV, SpO2, and activity tracking. 24/7 on your
            finger.
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
        <Img src={IMAGES.scale} width="480" alt="The Scale in bathroom" style={cardImage} />
        <Section style={deviceBody}>
          <Text style={deviceBadge(DEVICE_COLORS.scale)}>BODY COMPOSITION</Text>
          <Text style={deviceName}>The Scale</Text>
          <Text style={deviceDesc}>
            Full body composition analysis. Weight, body fat, muscle mass, and
            50+ metrics.
          </Text>
          <Section style={{ marginTop: "16px" }}>
            <Button href={`${BASE_URL}/products/scale`} style={deviceButton(DEVICE_COLORS.scale)}>
              Shop The Scale
            </Button>
          </Section>
        </Section>
      </Section>

      {/* BP Monitor */}
      <Section style={deviceCard}>
        <Img src={IMAGES.bp} width="480" alt="BP Monitor morning reading" style={cardImage} />
        <Section style={deviceBody}>
          <Text style={deviceBadge(DEVICE_COLORS.bp)}>VITAL SIGNS</Text>
          <Text style={deviceName}>BP Monitor</Text>
          <Text style={deviceDesc}>
            Accurate blood pressure readings that sync directly to your health
            dashboard.
          </Text>
          <Section style={{ marginTop: "16px" }}>
            <Button href={`${BASE_URL}/products/bp-monitor`} style={deviceButton(DEVICE_COLORS.bp)}>
              Shop BP Monitor
            </Button>
          </Section>
        </Section>
      </Section>

      {/* Hydra One */}
      <Section style={deviceCard}>
        <Img src={IMAGES.hydra} width="480" alt="Hydra One at the gym" style={cardImage} />
        <Section style={deviceBody}>
          <Text style={deviceBadge(DEVICE_COLORS.hydra)}>HYDRATION</Text>
          <Text style={deviceName}>Hydra One</Text>
          <Text style={deviceDesc}>
            Smart bottle that tracks every sip. Real-time hydration tracking and
            daily goals.
          </Text>
          <Section style={{ marginTop: "16px" }}>
            <Button href={`${BASE_URL}/products/hydra-one`} style={deviceButton(DEVICE_COLORS.hydra)}>
              Shop Hydra One
            </Button>
          </Section>
        </Section>
      </Section>

      <Hr style={divider} />

      {/* ── Stats Row ── */}
      <Section style={statsSection}>
        <Row>
          <Column style={statsCol}>
            <Text style={statsNumber}>10,000+</Text>
            <Text style={statsLabel}>Active Users</Text>
          </Column>
          <Column style={statsCol}>
            <Text style={statsNumber}>4.8/5</Text>
            <Text style={statsLabel}>Avg. Rating</Text>
          </Column>
          <Column style={statsCol}>
            <Text style={statsNumber}>6</Text>
            <Text style={statsLabel}>Devices</Text>
          </Column>
        </Row>
      </Section>

      <Hr style={divider} />

      {/* ── The App ── */}
      <Section style={appCard}>
        <Img
          src={IMAGES.app}
          width="480"
          alt="SeeMyHealth app on phone"
          style={cardImage}
        />
        <Section style={cardBody}>
          <Text style={appLabel}>THE APP</Text>
          <Text style={cardTitle}>Your health dashboard.</Text>
          <Text style={cardDesc}>
            All your devices, all your data, all your insights — in one place.
            Download it now so it is ready when you get your first device.
          </Text>
          <Section style={{ marginTop: "16px" }}>
            <PrimaryButton href={`${BASE_URL}/app`}>
              Download the App
            </PrimaryButton>
          </Section>
        </Section>
      </Section>

      <Hr style={divider} />

      {/* ── Final CTA ── */}
      <Section style={ctaCenter}>
        <PrimaryButton href={`${BASE_URL}/shop`}>
          Explore the Shop
        </PrimaryButton>
      </Section>

      {/* ── Footer Note ── */}
      <Text style={footerNote}>
        You received this email because you created an account at
        seemyhealth.ai. We will send you a few more emails to help you get
        started.
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
  margin: "0 0 16px 0",
};

const divider = {
  borderColor: "#1a1a1a",
  margin: "36px 0",
};

const ctaCenter = {
  textAlign: "center" as const,
  margin: "0 0 16px 0",
};

// ── Ecosystem card ──

const ecosystemCard = {
  borderRadius: "12px",
  overflow: "hidden" as const,
  border: "1px solid #1a1a1a",
  backgroundColor: "#141414",
};

const cardImage = {
  width: "100%",
  display: "block" as const,
};

const cardBody = {
  padding: "20px 24px 24px",
};

const cardTitle = {
  fontSize: "20px",
  fontWeight: "700" as const,
  color: "#f5f5f5",
  margin: "0 0 8px 0",
};

const cardDesc = {
  fontSize: "14px",
  lineHeight: "22px",
  color: "#8a8a8a",
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

// ── Stats row ──

const statsSection = {
  backgroundColor: "#141414",
  border: "1px solid #1a4d30",
  borderRadius: "12px",
  padding: "20px 16px",
};

const statsCol = {
  width: "33.33%",
  textAlign: "center" as const,
  verticalAlign: "top" as const,
};

const statsNumber = {
  fontSize: "22px",
  fontWeight: "700" as const,
  color: "#22c55e",
  margin: "0 0 2px 0",
};

const statsLabel = {
  fontSize: "11px",
  fontWeight: "600" as const,
  color: "#6b6b6b",
  letterSpacing: "1px",
  textTransform: "uppercase" as const,
  margin: "0",
};

// ── App card ──

const appCard = {
  borderRadius: "12px",
  overflow: "hidden" as const,
  border: "1px solid #1a1a1a",
  backgroundColor: "#141414",
};

const appLabel = {
  fontSize: "10px",
  fontWeight: "700" as const,
  color: "#22c55e",
  letterSpacing: "2px",
  textTransform: "uppercase" as const,
  margin: "0 0 8px 0",
};

// ── Footer ──

const footerNote = {
  fontSize: "13px",
  color: "#525252",
  textAlign: "center" as const,
  margin: "0",
  lineHeight: "20px",
};
