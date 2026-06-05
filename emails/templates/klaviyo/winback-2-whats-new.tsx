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
  hero: `${CDN}/scale-pro-athlete-gym/public`,
  scalePro: `${CDN}/scale-pro-lifestyle-v1/public`,
};

const DEVICE_COLORS = {
  scale: "#3B82F6",
};

export default function WinbackWhatsNew() {
  return (
    <EmailLayout preview="New devices, new features, new reasons to come back.">

      {/* ── Hero Image ── */}
      <Section style={heroSection}>
        <Img
          src={IMAGES.hero}
          width="560"
          alt="Scale Pro in the gym"
          style={heroImage}
        />
        <Section style={heroOverlay} className="force-white">
          <Text style={heroTagline}>WHAT'S NEW</Text>
          <Text style={heroTitle}>A lot has changed.</Text>
        </Section>
      </Section>

      {/* ── Heading ── */}
      <Section style={greetingSection}>
        <Text style={heading}>
          A lot has changed since your last visit.
        </Text>
        <Text style={paragraph}>
          We have been busy building new devices and features. Here is a
          quick look at what is new in the SeeMyHealth ecosystem.
        </Text>
      </Section>

      <Hr style={divider} />

      {/* ── NEW Scale Pro ── */}
      <Section style={deviceCard}>
        <Img src={IMAGES.scalePro} width="480" alt="Scale Pro lifestyle" style={deviceImage} />
        <Section style={deviceBody}>
          <Text style={newBadge}>NEW</Text>
          <Text style={deviceName}>Scale Pro</Text>
          <Text style={deviceDesc}>
            Our most advanced body composition scale. Professional-level
            accuracy with 50+ metrics, Wi-Fi connectivity, and multi-user
            support.
          </Text>
          <Section style={{ marginTop: "16px" }}>
            <Button href={`${BASE_URL}/products/scale-pro`} style={deviceButton(DEVICE_COLORS.scale)}>
              Explore Scale Pro
            </Button>
          </Section>
        </Section>
      </Section>

      <Hr style={divider} />

      {/* ── App Updates Checklist ── */}
      <Section style={card}>
        <Section style={cardHeader}>
          <Text style={sectionLabel}>APP UPDATES</Text>
        </Section>
        <Hr style={cardDivider} />
        <Section style={cardBody}>
          <Section style={checkRow}>
            <Row>
              <Column style={checkCol}>
                <Text style={checkmark}>&#10003;</Text>
              </Column>
              <Column>
                <Text style={checkText}>
                  <strong style={{ color: "#f5f5f5" }}>Weekly Health Reports</strong> — Automated
                  insights delivered every Sunday
                </Text>
              </Column>
            </Row>
          </Section>

          <Section style={checkRow}>
            <Row>
              <Column style={checkCol}>
                <Text style={checkmark}>&#10003;</Text>
              </Column>
              <Column>
                <Text style={checkText}>
                  <strong style={{ color: "#f5f5f5" }}>Community Challenges</strong> — Compete
                  with friends and other users
                </Text>
              </Column>
            </Row>
          </Section>

          <Section style={checkRow}>
            <Row>
              <Column style={checkCol}>
                <Text style={checkmark}>&#10003;</Text>
              </Column>
              <Column>
                <Text style={checkText}>
                  <strong style={{ color: "#f5f5f5" }}>Health Journal</strong> — Log mood,
                  energy, and daily notes
                </Text>
              </Column>
            </Row>
          </Section>

          <Section style={checkRowLast}>
            <Row>
              <Column style={checkCol}>
                <Text style={checkmark}>&#10003;</Text>
              </Column>
              <Column>
                <Text style={checkText}>
                  <strong style={{ color: "#f5f5f5" }}>Improved Dashboard</strong> — Redesigned
                  for clarity and speed
                </Text>
              </Column>
            </Row>
          </Section>
        </Section>
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
          Shop Now
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
  margin: "0",
};

const divider = {
  borderColor: "#1a1a1a",
  margin: "36px 0",
};

const ctaCenter = {
  textAlign: "center" as const,
  margin: "28px 0 0 0",
};

// ── Device card ──

const deviceCard = {
  borderRadius: "12px",
  overflow: "hidden" as const,
  marginBottom: "0",
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

const newBadge = {
  fontSize: "10px",
  fontWeight: "700" as const,
  color: "#22c55e",
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

// ── Card ──

const card = {
  backgroundColor: "#141414",
  border: "1px solid #1a1a1a",
  borderRadius: "12px",
  overflow: "hidden" as const,
};

const cardHeader = {
  padding: "20px 24px 16px",
};

const cardDivider = {
  borderColor: "#1a1a1a",
  margin: "0",
};

const cardBody = {
  padding: "20px 24px",
};

const checkRow = {
  marginBottom: "12px",
};

const checkRowLast = {
  marginBottom: "0",
};

const checkCol = {
  width: "24px",
  verticalAlign: "top" as const,
};

const checkmark = {
  fontSize: "14px",
  fontWeight: "700" as const,
  color: "#22c55e",
  margin: "0",
};

const checkText = {
  fontSize: "14px",
  lineHeight: "22px",
  color: "#8a8a8a",
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
