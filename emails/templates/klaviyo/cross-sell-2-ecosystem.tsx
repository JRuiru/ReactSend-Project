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

const CDN = "https://imagedelivery.net/NnC2JvU8j4bgBbmedVhjJg";
const BASE_URL = "https://seemyhealth.ai";

const IMAGES = {
  hero: `${CDN}/ring-activity-fitness/public`,
  testimonial: `${CDN}/ring-gold-hands-portrait/public`,
};

export default function CrossSellEcosystem() {
  return (
    <EmailLayout preview="See how SeeMyHealth devices work together to unlock deeper insights.">

      {/* ── Hero Image ── */}
      <Section style={heroSection}>
        <Img
          src={IMAGES.hero}
          width="560"
          alt="Ring One activity tracking"
          style={heroImage}
        />
        <Section style={heroOverlay} className="force-white">
          <Text style={heroTagline}>THE ECOSYSTEM</Text>
          <Text style={heroTitle}>Connected health.</Text>
        </Section>
      </Section>

      {/* ── Heading ── */}
      <Section style={greetingSection}>
        <Text style={heading}>
          One device is good. Two is better.
        </Text>
        <Text style={paragraph}>
          Each SeeMyHealth device tracks a different dimension of your health.
          When they work together, the app starts connecting dots you cannot
          see with just one device.
        </Text>
      </Section>

      <Hr style={divider} />

      {/* ── What You Unlock ── */}
      <Section style={card}>
        <Section style={cardHeader}>
          <Text style={sectionLabel}>WHAT YOU UNLOCK</Text>
        </Section>
        <Hr style={cardDivider} />
        <Section style={cardBody}>
          <Section style={connectionRow}>
            <Text style={connectionTitle}>Ring + Scale</Text>
            <Text style={connectionDesc}>
              See how your sleep quality directly correlates with body
              composition changes over time.
            </Text>
          </Section>

          <Hr style={connectionDivider} />

          <Section style={connectionRow}>
            <Text style={connectionTitle}>Ring + Hydra One</Text>
            <Text style={connectionDesc}>
              Discover how hydration levels affect your sleep score, HRV,
              and recovery.
            </Text>
          </Section>

          <Hr style={connectionDivider} />

          <Section style={connectionRow}>
            <Text style={connectionTitle}>Scale + Hydra One</Text>
            <Text style={connectionDesc}>
              Track how consistent hydration impacts your body water
              percentage and composition trends.
            </Text>
          </Section>

          <Hr style={connectionDivider} />

          <Section style={connectionRow}>
            <Text style={connectionTitle}>BP Monitor + Ring</Text>
            <Text style={connectionDesc}>
              Correlate stress levels and sleep with blood pressure trends
              for a full cardiovascular picture.
            </Text>
          </Section>
        </Section>
      </Section>

      <Hr style={divider} />

      {/* ── Testimonial ── */}
      <Section style={testimonialCard}>
        <Img
          src={IMAGES.testimonial}
          width="480"
          alt="Customer wearing Ring One"
          style={testimonialImage}
        />
        <Section style={testimonialBody}>
          <Text style={testimonialQuote}>"</Text>
          <Text style={testimonialText}>
            I started with just the Ring. Then added the Scale. The app
            immediately showed me that my poor sleep was stalling my weight
            loss. That insight alone was worth it.
          </Text>
          <Text style={testimonialAuthor}>Chris W., Ring + Scale Owner</Text>
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
          Build Your Ecosystem
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

const connectionRow = {
  marginBottom: "0",
};

const connectionDivider = {
  borderColor: "#171717",
  margin: "16px 0",
};

const connectionTitle = {
  fontSize: "15px",
  fontWeight: "600" as const,
  color: "#f5f5f5",
  margin: "0 0 4px 0",
};

const connectionDesc = {
  fontSize: "14px",
  lineHeight: "22px",
  color: "#8a8a8a",
  margin: "0",
};

// ── Testimonial ──

const testimonialCard = {
  borderRadius: "12px",
  overflow: "hidden" as const,
  border: "1px solid #1a1a1a",
  backgroundColor: "#141414",
};

const testimonialImage = {
  width: "100%",
  display: "block" as const,
};

const testimonialBody = {
  padding: "24px",
  textAlign: "center" as const,
};

const testimonialQuote = {
  fontSize: "48px",
  color: "#2a2a2a",
  margin: "0",
  lineHeight: "1",
  fontFamily: "Georgia, serif",
};

const testimonialText = {
  fontSize: "15px",
  fontStyle: "italic" as const,
  color: "#a3a3a3",
  lineHeight: "24px",
  margin: "0 0 12px 0",
};

const testimonialAuthor = {
  fontSize: "13px",
  color: "#5e5e5e",
  margin: "0",
  fontWeight: "600" as const,
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
