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
  hero: `${CDN}/ring-one-sunset-meditation/public`,
  track: `${CDN}/ring-activity-fitness/public`,
  sync: `${CDN}/app-hubby-progress/public`,
  understand: `${CDN}/app-goals-achieved/public`,
  improve: `${CDN}/app-community-challenges/public`,
  app: `${CDN}/app-couch-download/public`,
};

export default function WelcomeProductEducation() {
  return (
    <EmailLayout preview="See how SeeMyHealth devices work together to give you the full picture.">

      {/* ── Hero Image ── */}
      <Section style={heroSection}>
        <Img
          src={IMAGES.hero}
          width="560"
          alt="Ring One during sunset meditation"
          style={heroImage}
        />
        <Section style={heroOverlay} className="force-white">
          <Text style={heroTagline}>HOW IT WORKS</Text>
          <Text style={heroTitle}>Four simple steps.</Text>
        </Section>
      </Section>

      {/* ── Greeting ── */}
      <Section style={greetingSection}>
        <Text style={heading}>One ecosystem. Full picture.</Text>
        <Text style={paragraph}>
          Each SeeMyHealth device tracks a different part of your health.
          Together, they give you a complete view — all in one app.
        </Text>
      </Section>

      <Hr style={divider} />

      {/* ── Step 1: Track ── */}
      <Section style={stepCard}>
        <Img src={IMAGES.track} width="480" alt="Activity tracking during workout" style={stepImage} />
        <Section style={stepBody}>
          <Text style={stepLabel}>STEP 01</Text>
          <Text style={stepTitle}>Track</Text>
          <Text style={stepDesc}>
            Wear the Ring One to bed. Step on the Scale each morning. Drink
            from the Hydra One throughout the day. Each device captures data
            passively — no manual logging.
          </Text>
        </Section>
      </Section>

      {/* ── Step 2: Sync ── */}
      <Section style={stepCard}>
        <Img src={IMAGES.sync} width="480" alt="SeeMyHealth app syncing data" style={stepImage} />
        <Section style={stepBody}>
          <Text style={stepLabel}>STEP 02</Text>
          <Text style={stepTitle}>Sync</Text>
          <Text style={stepDesc}>
            Everything syncs automatically to the SeeMyHealth app via Bluetooth.
            No cables, no setup headaches. Open the app and your data is there.
          </Text>
        </Section>
      </Section>

      {/* ── Step 3: Understand ── */}
      <Section style={stepCard}>
        <Img src={IMAGES.understand} width="480" alt="Health insights and goals in the app" style={stepImage} />
        <Section style={stepBody}>
          <Text style={stepLabel}>STEP 03</Text>
          <Text style={stepTitle}>Understand</Text>
          <Text style={stepDesc}>
            The app connects the dots. See how your sleep affects your weight.
            How hydration impacts your energy. Real insights, not just numbers.
          </Text>
        </Section>
      </Section>

      {/* ── Step 4: Improve ── */}
      <Section style={stepCard}>
        <Img src={IMAGES.improve} width="480" alt="Community challenges in the app" style={stepImage} />
        <Section style={stepBody}>
          <Text style={stepLabel}>STEP 04</Text>
          <Text style={stepTitle}>Improve</Text>
          <Text style={stepDesc}>
            Get personalized recommendations. Set goals, join challenges, and
            track your progress. Your health journey, on your terms.
          </Text>
        </Section>
      </Section>

      <Hr style={divider} />

      {/* ── The App ── */}
      <Section style={appCard}>
        <Img src={IMAGES.app} width="480" alt="Download the SeeMyHealth app" style={stepImage} />
        <Section style={stepBody}>
          <Text style={appLabel}>THE APP</Text>
          <Text style={stepTitle}>Your health dashboard.</Text>
          <Text style={stepDesc}>
            All your devices, data, and insights in one place. Available on iOS
            and Android.
          </Text>
          <Section style={{ marginTop: "16px" }}>
            <PrimaryButton href={`${BASE_URL}/app`}>
              Learn More
            </PrimaryButton>
          </Section>
        </Section>
      </Section>

      <Hr style={divider} />

      {/* ── CTA ── */}
      <Section style={ctaCenter}>
        <PrimaryButton href={`${BASE_URL}/shop`}>
          Start Shopping
        </PrimaryButton>
      </Section>

      {/* ── Footer Note ── */}
      <Text style={footerNote}>
        You received this email because you created an account at
        seemyhealth.ai. This is email 2 of 4 in our welcome series.
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

const divider = {
  borderColor: "#1a1a1a",
  margin: "36px 0",
};

const ctaCenter = {
  textAlign: "center" as const,
  margin: "0 0 16px 0",
};

// ── Step cards ──

const stepCard = {
  borderRadius: "12px",
  overflow: "hidden" as const,
  marginBottom: "16px",
  border: "1px solid #1a1a1a",
  backgroundColor: "#141414",
};

const stepImage = {
  width: "100%",
  display: "block" as const,
};

const stepBody = {
  padding: "20px 24px 24px",
};

const stepLabel = {
  fontSize: "10px",
  fontWeight: "700" as const,
  color: "#F97316",
  letterSpacing: "2px",
  margin: "0 0 4px 0",
};

const stepTitle = {
  fontSize: "20px",
  fontWeight: "700" as const,
  color: "#f5f5f5",
  margin: "0 0 8px 0",
};

const stepDesc = {
  fontSize: "14px",
  lineHeight: "22px",
  color: "#8a8a8a",
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
  margin: "0 0 4px 0",
};

// ── Footer ──

const footerNote = {
  fontSize: "13px",
  color: "#525252",
  textAlign: "center" as const,
  margin: "0",
  lineHeight: "20px",
};
