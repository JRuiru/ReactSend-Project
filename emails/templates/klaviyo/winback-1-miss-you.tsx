import {
  Text,
  Section,
  Img,
  Row,
  Column,
  Hr,
} from "@react-email/components";
import * as React from "react";
import { EmailLayout } from "../../components/EmailLayout";
import { PrimaryButton } from "../../components/PrimaryButton";
import { SecondaryButton } from "../../components/SecondaryButton";

const CDN = "https://imagedelivery.net/NnC2JvU8j4bgBbmedVhjJg";
const BASE_URL = "https://seemyhealth.ai";

const IMAGES = {
  hero: `${CDN}/lifestyle-celebration-toast/public`,
  challenges: `${CDN}/app-community-challenges/public`,
  journal: `${CDN}/app-mood-journal/public`,
};

export default function WinbackMissYou() {
  return (
    <EmailLayout preview="It has been a while — your health dashboard misses you.">

      {/* ── Hero Image ── */}
      <Section style={heroSection}>
        <Img
          src={IMAGES.hero}
          width="560"
          alt="Welcome back to SeeMyHealth"
          style={heroImage}
        />
        <Section style={heroOverlay} className="force-white">
          <Text style={heroTagline}>WE MISS YOU</Text>
          <Text style={heroTitle}>Come back.</Text>
        </Section>
      </Section>

      {/* ── Greeting ── */}
      <Section style={greetingSection}>
        <Text style={heading}>
          {"{{ person|lookup:'first_name'|default:'Hey' }}"}, it has been a while.
        </Text>
        <Text style={paragraph}>
          Your health journey does not have to stop. A lot has happened since
          you last checked in — new devices, new features, and a growing
          community waiting for you.
        </Text>
      </Section>

      <Hr style={divider} />

      {/* ── What's New ── */}
      <Section style={card}>
        <Section style={cardHeader}>
          <Text style={sectionLabel}>WHAT'S NEW</Text>
        </Section>
        <Hr style={cardDivider} />
        <Section style={cardBody}>
          <Section style={bulletRow}>
            <Row>
              <Column style={bulletCol}>
                <Text style={bullet}>&#8226;</Text>
              </Column>
              <Column>
                <Text style={bulletText}>
                  <strong style={{ color: "#f5f5f5" }}>New App Features</strong> — Weekly
                  health reports, community challenges, and an improved
                  insights dashboard
                </Text>
              </Column>
            </Row>
          </Section>

          <Section style={bulletRow}>
            <Row>
              <Column style={bulletCol}>
                <Text style={bullet}>&#8226;</Text>
              </Column>
              <Column>
                <Text style={bulletText}>
                  <strong style={{ color: "#f5f5f5" }}>Scale Pro</strong> — Our most
                  advanced body composition scale with professional-grade
                  accuracy
                </Text>
              </Column>
            </Row>
          </Section>

          <Section style={bulletRowLast}>
            <Row>
              <Column style={bulletCol}>
                <Text style={bullet}>&#8226;</Text>
              </Column>
              <Column>
                <Text style={bulletText}>
                  <strong style={{ color: "#f5f5f5" }}>Hema One</strong> — At-home blood
                  analysis is coming soon. Be the first to know.
                </Text>
              </Column>
            </Row>
          </Section>
        </Section>
      </Section>

      <Hr style={divider} />

      {/* ── 2-Up Feature Grid ── */}
      <Section style={{ marginTop: "0" }}>
        <Row>
          <Column style={featureCol}>
            <Img src={IMAGES.challenges} width="220" alt="Community challenges" style={featureImage} />
            <Text style={featureTitle}>Challenges</Text>
            <Text style={featureDesc}>
              Compete in health challenges and stay motivated with friends
              and the community.
            </Text>
          </Column>
          <Column style={featureColSpacer} />
          <Column style={featureCol}>
            <Img src={IMAGES.journal} width="220" alt="Health journal" style={featureImage} />
            <Text style={featureTitle}>Health Journal</Text>
            <Text style={featureDesc}>
              Daily check-ins, mood tracking, voice journaling, and mental
              health trends.
            </Text>
          </Column>
        </Row>
      </Section>

      {/* ── Stats Row ── */}
      <Section style={statsSection}>
        <Row>
          <Column style={statCol}>
            <Text style={statNumber}>10K+</Text>
            <Text style={statLabel}>Active Users</Text>
          </Column>
          <Column style={statCol}>
            <Text style={statNumber}>4.8/5</Text>
            <Text style={statLabel}>Avg. Rating</Text>
          </Column>
          <Column style={statCol}>
            <Text style={statNumber}>6</Text>
            <Text style={statLabel}>Devices</Text>
          </Column>
        </Row>
      </Section>

      <Hr style={divider} />

      {/* ── Double CTA ── */}
      <Section style={ctaCenter}>
        <PrimaryButton href={`${BASE_URL}/shop`}>
          Visit the Shop
        </PrimaryButton>
      </Section>

      <Section style={ctaCenterSecondary}>
        <SecondaryButton href={`${BASE_URL}/app`}>
          Open the App
        </SecondaryButton>
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
  margin: "0",
};

const ctaCenterSecondary = {
  textAlign: "center" as const,
  margin: "12px 0 0 0",
};

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

const bulletRow = {
  marginBottom: "16px",
};

const bulletRowLast = {
  marginBottom: "0",
};

const bulletCol = {
  width: "24px",
  verticalAlign: "top" as const,
};

const bullet = {
  fontSize: "18px",
  fontWeight: "700" as const,
  color: "#3B82F6",
  margin: "0",
};

const bulletText = {
  fontSize: "14px",
  lineHeight: "22px",
  color: "#8a8a8a",
  margin: "0",
};

// ── Feature grid ──

const featureCol = {
  width: "48%",
  verticalAlign: "top" as const,
};

const featureColSpacer = {
  width: "4%",
};

const featureImage = {
  width: "100%",
  display: "block" as const,
  borderRadius: "10px",
  marginBottom: "12px",
};

const featureTitle = {
  fontSize: "14px",
  fontWeight: "600" as const,
  color: "#f5f5f5",
  margin: "0 0 4px 0",
};

const featureDesc = {
  fontSize: "13px",
  lineHeight: "20px",
  color: "#6b6b6b",
  margin: "0",
};

// ── Stats ──

const statsSection = {
  backgroundColor: "#141414",
  border: "1px solid #1a4d30",
  borderRadius: "12px",
  padding: "20px 16px",
  marginTop: "32px",
};

const statCol = {
  width: "33.33%",
  textAlign: "center" as const,
  verticalAlign: "top" as const,
};

const statNumber = {
  fontSize: "22px",
  fontWeight: "700" as const,
  color: "#22c55e",
  margin: "0 0 2px 0",
  textAlign: "center" as const,
};

const statLabel = {
  fontSize: "11px",
  fontWeight: "600" as const,
  color: "#6b6b6b",
  letterSpacing: "1px",
  textTransform: "uppercase" as const,
  margin: "0",
  textAlign: "center" as const,
};
