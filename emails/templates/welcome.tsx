import {
  Text,
  Section,
  Img,
  Row,
  Column,
  Hr,
  Link,
  Button,
} from "@react-email/components";
import * as React from "react";
import { EmailLayout } from "../components/EmailLayout";
import { PrimaryButton } from "../components/PrimaryButton";
import { SecondaryButton } from "../components/SecondaryButton";

const CDN = "https://imagedelivery.net/NnC2JvU8j4bgBbmedVhjJg";
const BASE_URL = "https://seemyhealth.ai";

const IMAGES = {
  hero: `${CDN}/lifestyle-sun-portrait/public`,
  ringLifestyle: `${CDN}/ring-photo-08/public`,
  ringProduct: `${CDN}/ring-phantom-black-poster/public`,
  scaleLifestyle: `${CDN}/scale-bathroom-stepon-v3/public`,
  bpLifestyle: `${CDN}/bp-breakfast-reading/public`,
  hydraLifestyle: `${CDN}/bottle-black-picnic/public`,
  hemaLifestyle: `${CDN}/hema-orange-kitchen-v2/public`,
  appScreens: `${CDN}/app-hero-triple-phones/public`,
  appMood: `${CDN}/app-mood-journal/public`,
  appMeals: `${CDN}/app-meal-logging/public`,
  appChallenges: `${CDN}/app-community-challenges/public`,
  appFamily: `${CDN}/app-hubby-progress/public`,
};

const DEVICE_COLORS = {
  ring: "#F97316",
  scale: "#3B82F6",
  bp: "#EF4444",
  hydra: "#06B6D4",
  hema: "#A855F7",
};

export default function WelcomeEmail() {
  return (
    <EmailLayout preview="Welcome to SeeMyHealth. Your complete health ecosystem.">

      {/* ── Hero Image ── */}
      <Section style={heroSection}>
        <Img
          src={IMAGES.hero}
          width="560"
          alt="Welcome to SeeMyHealth"
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
          Hey {"{{first_name}}"},
        </Text>
        <Text style={paragraph}>
          You just joined a complete health ecosystem. Smart hardware that
          captures your data, and an intelligent app that turns it into your
          personal wellness story.
        </Text>
        <Text style={paragraph}>
          Here is everything waiting for you.
        </Text>
      </Section>

      <Hr style={divider} />

      {/* ══════════════════════════════════════════════════════════
          SECTION 1 — Hardware Ecosystem
          ══════════════════════════════════════════════════════════ */}
      <Text style={sectionLabel}>THE ECOSYSTEM</Text>
      <Text style={sectionHeading}>Five devices. One picture of your health.</Text>
      <Text style={sectionSubtext}>
        Each device captures a different dimension of your wellness.
        Together, they give you the complete story.
      </Text>

      {/* ── Ring One ── */}
      <Section style={deviceCard}>
        <Img src={IMAGES.ringLifestyle} width="480" alt="Ring One on hand" style={deviceImage} />
        <Section style={deviceBody}>
          <Text style={deviceBadge(DEVICE_COLORS.ring)}>WEARABLE</Text>
          <Text style={deviceName}>The Ring One</Text>
          <Text style={deviceDesc}>
            Sleep, heart rate, HRV, SpO2, temperature and activity tracking.
            24/7 on your finger. The smallest health lab you will ever own.
          </Text>
          <Section style={{ marginTop: "16px" }}>
            <Button href={`${BASE_URL}/products/ring-one`} style={deviceButton(DEVICE_COLORS.ring)}>
              Explore Ring One
            </Button>
          </Section>
        </Section>
      </Section>

      {/* ── The Scale ── */}
      <Section style={deviceCard}>
        <Img src={IMAGES.scaleLifestyle} width="480" alt="The Scale in bathroom" style={deviceImage} />
        <Section style={deviceBody}>
          <Text style={deviceBadge(DEVICE_COLORS.scale)}>BODY COMPOSITION</Text>
          <Text style={deviceName}>The Scale</Text>
          <Text style={deviceDesc}>
            Full body composition analysis. Weight, body fat, muscle mass and
            more. Step on, and your data syncs instantly.
          </Text>
          <Section style={{ marginTop: "16px" }}>
            <Button href={`${BASE_URL}/products/scale`} style={deviceButton(DEVICE_COLORS.scale)}>
              Explore The Scale
            </Button>
          </Section>
        </Section>
      </Section>

      {/* ── BP Monitor ── */}
      <Section style={deviceCard}>
        <Img src={IMAGES.bpLifestyle} width="480" alt="BP Monitor morning reading" style={deviceImage} />
        <Section style={deviceBody}>
          <Text style={deviceBadge(DEVICE_COLORS.bp)}>VITAL SIGNS</Text>
          <Text style={deviceName}>The BP Monitor</Text>
          <Text style={deviceDesc}>
            Clinical-grade blood pressure readings that sync directly to
            your health dashboard. Track trends over time.
          </Text>
          <Section style={{ marginTop: "16px" }}>
            <Button href={`${BASE_URL}/products/bp-monitor`} style={deviceButton(DEVICE_COLORS.bp)}>
              Explore BP Monitor
            </Button>
          </Section>
        </Section>
      </Section>

      {/* ── Hydra One ── */}
      <Section style={deviceCard}>
        <Img src={IMAGES.hydraLifestyle} width="480" alt="Hydra One in cafe" style={deviceImage} />
        <Section style={deviceBody}>
          <Text style={deviceBadge(DEVICE_COLORS.hydra)}>HYDRATION</Text>
          <Text style={deviceName}>Hydra One</Text>
          <Text style={deviceDesc}>
            Smart bottle that tracks every sip. Stay hydrated with real-time
            tracking, smart reminders, and daily goals.
          </Text>
          <Section style={{ marginTop: "16px" }}>
            <Button href={`${BASE_URL}/products/hydra-one`} style={deviceButton(DEVICE_COLORS.hydra)}>
              Explore Hydra One
            </Button>
          </Section>
        </Section>
      </Section>

      {/* ── Hema One ── */}
      <Section style={deviceCard}>
        <Img src={IMAGES.hemaLifestyle} width="480" alt="Hema One in kitchen" style={deviceImage} />
        <Section style={deviceBody}>
          <Text style={deviceBadge(DEVICE_COLORS.hema)}>BLOOD ANALYSIS</Text>
          <Text style={deviceName}>Hema One</Text>
          <Text style={deviceDesc}>
            At-home blood analysis. Lab-level insights without the lab visit.
            Know your numbers from the comfort of home.
          </Text>
          <Section style={{ marginTop: "16px" }}>
            <Button href={`${BASE_URL}/products/hema-one`} style={deviceButton(DEVICE_COLORS.hema)}>
              Explore Hema One
            </Button>
          </Section>
        </Section>
      </Section>

      <Hr style={divider} />

      {/* ══════════════════════════════════════════════════════════
          SECTION 2 — What's waiting in the app
          ══════════════════════════════════════════════════════════ */}
      <Text style={sectionLabel}>READY FOR YOU</Text>
      <Text style={sectionHeading}>Here is what is waiting inside your app.</Text>

      {/* App hero image */}
      <Img
        src={IMAGES.appScreens}
        width="480"
        alt="SeeMyHealth app screens"
        style={fullImage}
      />

      {/* Feature grid - 2 per row */}
      <Section style={{ marginTop: "24px" }}>
        <Row>
          <Column style={featureCol}>
            <Img src={IMAGES.appFamily} width="220" alt="Family health sharing" style={featureImage} />
            <Text style={featureTitle}>Family Health</Text>
            <Text style={featureDesc}>
              Share data with family, monitor loved ones. Health is better together.
            </Text>
          </Column>
          <Column style={featureColSpacer} />
          <Column style={featureCol}>
            <Img src={IMAGES.appMeals} width="220" alt="Meal logging" style={featureImage} />
            <Text style={featureTitle}>Nutrition and Hydration</Text>
            <Text style={featureDesc}>
              Log meals, plan recipes, track macros, and monitor water intake.
            </Text>
          </Column>
        </Row>
      </Section>

      <Section style={{ marginTop: "16px" }}>
        <Row>
          <Column style={featureCol}>
            <Img src={IMAGES.appChallenges} width="220" alt="Community challenges" style={featureImage} />
            <Text style={featureTitle}>Challenges and Community</Text>
            <Text style={featureDesc}>
              Compete in health challenges and stay motivated with friends.
            </Text>
          </Column>
          <Column style={featureColSpacer} />
          <Column style={featureCol}>
            <Img src={IMAGES.appMood} width="220" alt="Mood journaling" style={featureImage} />
            <Text style={featureTitle}>Mood and Journaling</Text>
            <Text style={featureDesc}>
              Daily check-ins, voice journaling, and mental health trends.
            </Text>
          </Column>
        </Row>
      </Section>

      <Section style={ctaCenter}>
        <PrimaryButton href={`${BASE_URL}/shop`}>
          Shop the Ecosystem
        </PrimaryButton>
      </Section>

      <Hr style={divider} />

      {/* ══════════════════════════════════════════════════════════
          SECTION 3 — Invite
          ══════════════════════════════════════════════════════════ */}
      <Section style={inviteSection} className="dark-safe">
        <Text style={inviteHeading}>Know someone who would love this?</Text>
        <Text style={inviteText}>
          Share SeeMyHealth and start your wellness journey together.
        </Text>
        <Section style={ctaCenter}>
          <Button href={`${BASE_URL}/invite?ref={{user_id}}`} style={inviteButton}>
            Invite a Friend
          </Button>
        </Section>
        <Section style={shareRow}>
          <Row>
            <Column align="center" style={shareCol}>
              <Link
                href="mailto:?subject=Join%20me%20on%20SeeMyHealth&body=Hey!%20I%20just%20joined%20SeeMyHealth%20and%20it%27s%20amazing.%20Check%20it%20out%3A%20https%3A%2F%2Fseemyhealth.ai%2Finvite%3Fref%3D{{user_id}}"
                style={shareLink}
              >
                Email
              </Link>
            </Column>
            <Column align="center" style={shareCol}>
              <Link
                href="sms:?body=Hey!%20I%20just%20joined%20SeeMyHealth.%20Check%20it%20out%3A%20https%3A%2F%2Fseemyhealth.ai%2Finvite%3Fref%3D{{user_id}}"
                style={shareLink}
              >
                SMS
              </Link>
            </Column>
            <Column align="center" style={shareCol}>
              <Link
                href="https://wa.me/?text=Hey!%20I%20just%20joined%20SeeMyHealth.%20Check%20it%20out%3A%20https%3A%2F%2Fseemyhealth.ai%2Finvite%3Fref%3D{{user_id}}"
                style={shareLink}
              >
                WhatsApp
              </Link>
            </Column>
          </Row>
        </Section>
      </Section>

      <Hr style={divider} />

      {/* ── Testimonial ── */}
      <Section style={testimonialSection}>
        <Text style={testimonialQuote}>"</Text>
        <Text style={testimonialText}>
          The Ring One tracks my sleep and the app shows me exactly what to
          improve. I have never felt more in control of my health.
        </Text>
        <Text style={testimonialAuthor}>Sarah K., member since 2024</Text>
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
  color: "rgba(255, 255, 255, 0.7)",
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
  color: "rgba(255, 255, 255, 0.6)",
  margin: "0 0 8px 0",
};

const sectionLabel = {
  fontSize: "11px",
  fontWeight: "600" as const,
  color: "rgba(255, 255, 255, 0.35)",
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
  color: "rgba(255, 255, 255, 0.5)",
  lineHeight: "24px",
  margin: "0 0 24px 0",
};

const divider = {
  borderColor: "rgba(255, 255, 255, 0.06)",
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
  border: "1px solid rgba(255, 255, 255, 0.06)",
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
  color: "rgba(255, 255, 255, 0.5)",
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

// ── App features ──

const fullImage = {
  width: "100%",
  display: "block" as const,
  borderRadius: "12px",
};

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
  color: "rgba(255, 255, 255, 0.45)",
  margin: "0",
};

// ── Invite section ──

const inviteSection = {
  backgroundColor: "#141414",
  borderRadius: "12px",
  padding: "36px 24px",
  textAlign: "center" as const,
  border: "1px solid rgba(255, 255, 255, 0.06)",
};

const inviteHeading = {
  fontSize: "20px",
  fontWeight: "700" as const,
  color: "#f5f5f5",
  margin: "0 0 8px 0",
};

const inviteText = {
  fontSize: "15px",
  color: "rgba(255, 255, 255, 0.5)",
  lineHeight: "24px",
  margin: "0",
};

const inviteButton = {
  backgroundColor: "#ffffff",
  color: "#0a0a0a",
  padding: "14px 32px",
  borderRadius: "50px",
  fontSize: "14px",
  fontWeight: "600" as const,
  textDecoration: "none",
  textAlign: "center" as const,
  display: "inline-block",
  letterSpacing: "0.5px",
  textTransform: "uppercase" as const,
};

const shareRow = {
  marginTop: "16px",
};

const shareCol = {
  width: "33.33%",
  padding: "0 4px",
};

const shareLink = {
  color: "rgba(255, 255, 255, 0.4)",
  fontSize: "12px",
  fontWeight: "600" as const,
  textDecoration: "underline",
};

// ── Testimonial ──

const testimonialSection = {
  textAlign: "center" as const,
  padding: "8px 0",
};

const testimonialQuote = {
  fontSize: "48px",
  color: "rgba(255, 255, 255, 0.15)",
  margin: "0",
  lineHeight: "1",
  fontFamily: "Georgia, serif",
};

const testimonialText = {
  fontSize: "15px",
  fontStyle: "italic" as const,
  color: "rgba(255, 255, 255, 0.6)",
  lineHeight: "24px",
  margin: "0 0 12px 0",
};

const testimonialAuthor = {
  fontSize: "13px",
  color: "rgba(255, 255, 255, 0.3)",
  margin: "0",
  fontWeight: "600" as const,
};
