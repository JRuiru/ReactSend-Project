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

// ---------------------------------------------------------------
// TODO: Replace placeholders with real product photos.
// Host on CDN / S3 / Cloudinary for production.
// ---------------------------------------------------------------
const IMAGES = {
  ringOne: "https://storage.googleapis.com/seemyhealth-email-assets/ring-one.jpg",
  scale: "https://storage.googleapis.com/seemyhealth-email-assets/scale.jpg",
  bpMonitor: "https://placehold.co/480x220/1a0533/ef4444?text=The+BP+Monitor",
  hydraOne: "https://storage.googleapis.com/seemyhealth-email-assets/hydra-one.png",
  hemaOne: "https://storage.googleapis.com/seemyhealth-email-assets/hema-one.jpg",
};

// SwiftUI system color → hex for device accents
const DEVICE_COLORS = {
  ring: "#F97316",
  scale: "#3B82F6",
  bp: "#EF4444",
  hydra: "#06B6D4",
  hema: "#A855F7",
};

const BASE_URL = "https://seemyhealth.ai";

export default function WelcomeEmail() {
  return (
    <EmailLayout preview="Welcome to SeeMyHealth — your complete health ecosystem">

      {/* ── Hero Banner ── */}
      <Section style={heroBanner} className="dark-safe">
        <Text style={heroTitle}>SeeMyHealth</Text>
        <Text style={heroTagline}>Your wellness, beautifully organized.</Text>
      </Section>

      {/* ── Greeting ── */}
      <Text style={heading}>
        Hey {"{{first_name}}"}, welcome aboard!
      </Text>

      <Text style={paragraph}>
        You've just joined a complete health ecosystem — smart hardware that
        captures your data, and an intelligent app that turns it into your
        personal wellness story.
      </Text>

      <Hr style={divider} />

      {/* ══════════════════════════════════════════════════════════
          SECTION 1 — Hardware Ecosystem
          ══════════════════════════════════════════════════════════ */}
      <Text style={sectionHeading}>Meet the hardware</Text>
      <Text style={sectionSubtext}>
        Five connected devices designed to work together — giving you a
        complete, real-time picture of your health.
      </Text>

      {/* ── The Ring One ── */}
      <Section style={hardwareCard}>
        <Img src={IMAGES.ringOne} width="480" alt="The Ring One" style={hardwareImage} />
        <Section style={hardwareBody}>
          <Text style={hardwareBadge(DEVICE_COLORS.ring)}>WEARABLE</Text>
          <Text style={hardwareName}>The Ring One</Text>
          <Text style={hardwareDesc}>
            Sleep, heart rate, HRV, SpO2, temperature &amp; activity tracking
            — 24/7 on your finger. The smallest health lab you'll ever own.
          </Text>
          <Section style={hardwareCta}>
            <Button href={`${BASE_URL}/devices/ring-one`} style={deviceButton(DEVICE_COLORS.ring)}>
              Explore The Ring One
            </Button>
          </Section>
        </Section>
      </Section>

      {/* ── The Scale ── */}
      <Section style={hardwareCard}>
        <Img src={IMAGES.scale} width="480" alt="The Scale" style={hardwareImage} />
        <Section style={hardwareBody}>
          <Text style={hardwareBadge(DEVICE_COLORS.scale)}>BODY COMPOSITION</Text>
          <Text style={hardwareName}>The Scale</Text>
          <Text style={hardwareDesc}>
            Full body composition analysis — weight, body fat, muscle mass
            and more. Step on, and your data syncs instantly.
          </Text>
          <Section style={hardwareCta}>
            <Button href={`${BASE_URL}/devices/scale`} style={deviceButton(DEVICE_COLORS.scale)}>
              Explore The Scale
            </Button>
          </Section>
        </Section>
      </Section>

      {/* ── The BP Monitor ── */}
      <Section style={hardwareCard}>
        <Img src={IMAGES.bpMonitor} width="480" alt="The BP Monitor" style={hardwareImage} />
        <Section style={hardwareBody}>
          <Text style={hardwareBadge(DEVICE_COLORS.bp)}>VITAL SIGNS</Text>
          <Text style={hardwareName}>The BP Monitor</Text>
          <Text style={hardwareDesc}>
            Clinical-grade blood pressure readings that sync directly to
            your health dashboard. Track trends over time.
          </Text>
          <Section style={hardwareCta}>
            <Button href={`${BASE_URL}/devices/bp-monitor`} style={deviceButton(DEVICE_COLORS.bp)}>
              Explore The BP Monitor
            </Button>
          </Section>
        </Section>
      </Section>

      {/* ── Hydra One ── */}
      <Section style={hardwareCard}>
        <Img src={IMAGES.hydraOne} width="480" alt="Hydra One" style={hardwareImage} />
        <Section style={hardwareBody}>
          <Text style={hardwareBadge(DEVICE_COLORS.hydra)}>HYDRATION</Text>
          <Text style={hardwareName}>Hydra One</Text>
          <Text style={hardwareDesc}>
            Smart bottle that tracks every sip. Stay hydrated automatically
            with real-time tracking and daily goals.
          </Text>
          <Section style={hardwareCta}>
            <Button href={`${BASE_URL}/devices/hydra-one`} style={deviceButton(DEVICE_COLORS.hydra)}>
              Explore Hydra One
            </Button>
          </Section>
        </Section>
      </Section>

      {/* ── Hema One ── */}
      <Section style={hardwareCard}>
        <Img src={IMAGES.hemaOne} width="480" alt="Hema One" style={hardwareImage} />
        <Section style={hardwareBody}>
          <Text style={hardwareBadge(DEVICE_COLORS.hema)}>BLOOD TESTS</Text>
          <Text style={hardwareName}>Hema One</Text>
          <Text style={hardwareDesc}>
            At-home blood analysis — lab-level insights without the lab visit.
            Know your numbers from the comfort of home.
          </Text>
          <Section style={hardwareCta}>
            <Button href={`${BASE_URL}/devices/hema-one`} style={deviceButton(DEVICE_COLORS.hema)}>
              Explore Hema One
            </Button>
          </Section>
        </Section>
      </Section>

      <Hr style={divider} />

      {/* ══════════════════════════════════════════════════════════
          SECTION 2 — App Wellness Journey (independent of hardware)
          ══════════════════════════════════════════════════════════ */}
      <Text style={sectionHeading}>Your wellness journey</Text>
      <Text style={sectionSubtext}>
        The SeeMyHealth app is your central hub for a healthier life —
        with or without the hardware.
      </Text>

      <Section style={featureBlock}>
        <Text style={featureIcon}>&#x1F4CA;</Text>
        <Text style={featureTitle}>Health Dashboard</Text>
        <Text style={featureDesc}>
          Steps, calories, sleep, heart rate, SpO2 — all your vitals in one
          beautiful daily view with trends over time.
        </Text>
      </Section>

      <Section style={featureBlock}>
        <Text style={featureIcon}>&#x1F3AF;</Text>
        <Text style={featureTitle}>Goals &amp; Progress</Text>
        <Text style={featureDesc}>
          Set fitness, nutrition, wellness, and health metric goals. Track
          your streaks and watch yourself improve week over week.
        </Text>
      </Section>

      <Section style={featureBlock}>
        <Text style={featureIcon}>&#x1F957;</Text>
        <Text style={featureTitle}>Nutrition &amp; Hydration</Text>
        <Text style={featureDesc}>
          Log meals, plan recipes, track macros, monitor water intake, and
          manage intermittent fasting — all in one place.
        </Text>
      </Section>

      <Section style={featureBlock}>
        <Text style={featureIcon}>&#x1F9E0;</Text>
        <Text style={featureTitle}>Mood &amp; Journaling</Text>
        <Text style={featureDesc}>
          Daily mood check-ins, voice journaling with transcription, and
          mental health trends to understand your well-being.
        </Text>
      </Section>

      <Section style={featureBlock}>
        <Text style={featureIcon}>&#x1F3E5;</Text>
        <Text style={featureTitle}>Appointments &amp; Providers</Text>
        <Text style={featureDesc}>
          Find healthcare providers, book in-person or virtual visits, and
          manage your medical records — all from the app.
        </Text>
      </Section>

      <Section style={featureBlock}>
        <Text style={featureIcon}>&#x1F91D;</Text>
        <Text style={featureTitle}>Community &amp; Challenges</Text>
        <Text style={featureDesc}>
          Join groups, compete in health challenges, share milestones, and
          stay motivated with friends and leaderboards.
        </Text>
      </Section>

      <Section style={featureBlock}>
        <Text style={featureIcon}>&#x1F46A;</Text>
        <Text style={featureTitle}>Family Health</Text>
        <Text style={featureDesc}>
          Share data with family members, monitor loved ones' health, and
          manage permissions — health is better together.
        </Text>
      </Section>

      <Hr style={divider} />

      {/* ══════════════════════════════════════════════════════════
          SECTION 3 — Invite Friends
          ══════════════════════════════════════════════════════════ */}
      <Section style={shareSection} className="dark-safe">
        <Text style={shareHeading}>Invite your friends!</Text>
        <Text style={shareText}>
          Know someone who'd love SeeMyHealth? Share the good news
          and start your wellness journey together.
        </Text>

        <Section style={ctaSection}>
          <Button href={`${BASE_URL}/invite?ref={{user_id}}`} style={inviteButton}>
            Invite a Friend
          </Button>
        </Section>

        <Section style={shareRow}>
          <Row>
            <Column align="center" style={shareCol}>
              <Link
                href="mailto:?subject=Join%20me%20on%20SeeMyHealth&body=Hey!%20I%20just%20joined%20SeeMyHealth%20and%20it%E2%80%99s%20amazing.%20Check%20it%20out%3A%20https%3A%2F%2Fseemyhealth.ai%2Finvite%3Fref%3D{{user_id}}"
                style={shareLink}
              >
                Email
              </Link>
            </Column>
            <Column align="center" style={shareCol}>
              <Link
                href="sms:?body=Hey!%20I%20just%20joined%20SeeMyHealth%20%E2%80%94%20check%20it%20out%3A%20https%3A%2F%2Fseemyhealth.ai%2Finvite%3Fref%3D{{user_id}}"
                style={shareLink}
              >
                SMS
              </Link>
            </Column>
            <Column align="center" style={shareCol}>
              <Link
                href="https://wa.me/?text=Hey!%20I%20just%20joined%20SeeMyHealth%20%E2%80%94%20check%20it%20out%3A%20https%3A%2F%2Fseemyhealth.ai%2Finvite%3Fref%3D{{user_id}}"
                style={shareLink}
              >
                WhatsApp
              </Link>
            </Column>
          </Row>
        </Section>
      </Section>

      <Hr style={divider} />

      {/* ── Social Proof ── */}
      <Section style={testimonialSection}>
        <Text style={testimonialQuote}>"</Text>
        <Text style={testimonialText}>
          The Ring One tracks my sleep and the app shows me exactly what to
          improve. I've never felt more in control of my health.
        </Text>
        <Text style={testimonialAuthor}>— Sarah K., member since 2024</Text>
      </Section>

    </EmailLayout>
  );
}

// ── Styles ──

// Brand purple palette
// Primary: #7c3aed  Lighter: #a855f7  Darker: #4c1d95  Deep: #1a0533

const heroBanner = {
  background: "linear-gradient(135deg, #1a0533 0%, #4c1d95 50%, #7c3aed 100%)",
  borderRadius: "16px",
  padding: "48px 24px",
  textAlign: "center" as const,
  marginBottom: "28px",
};

const heroTitle = {
  fontSize: "32px",
  fontWeight: "bold" as const,
  color: "#ffffff",
  margin: "0 0 8px 0",
  letterSpacing: "-0.5px",
};

const heroTagline = {
  fontSize: "16px",
  color: "rgba(255, 255, 255, 0.8)",
  margin: "0",
};

const heading = {
  fontSize: "28px",
  fontWeight: "bold" as const,
  color: "#111827",
  margin: "0 0 12px 0",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  color: "#374151",
  margin: "0 0 8px 0",
};

const sectionHeading = {
  fontSize: "20px",
  fontWeight: "bold" as const,
  color: "#111827",
  margin: "0 0 4px 0",
};

const sectionSubtext = {
  fontSize: "14px",
  color: "#6b7280",
  lineHeight: "22px",
  margin: "0 0 20px 0",
};

const ctaSection = {
  textAlign: "center" as const,
  margin: "24px 0",
};

const divider = {
  borderColor: "rgba(124, 58, 237, 0.1)",
  margin: "32px 0",
};

// ── Hardware cards ──

const hardwareCard = {
  borderRadius: "14px",
  overflow: "hidden" as const,
  marginBottom: "16px",
  border: "1px solid rgba(124, 58, 237, 0.08)",
  boxShadow: "0 2px 12px rgba(76, 29, 149, 0.06)",
};

const hardwareImage = {
  width: "100%",
  display: "block" as const,
};

const hardwareBody = {
  padding: "20px 24px 24px 24px",
};

const hardwareBadge = (color: string) => ({
  fontSize: "10px",
  fontWeight: "bold" as const,
  color: color,
  letterSpacing: "1.5px",
  margin: "0 0 6px 0",
  textTransform: "uppercase" as const,
});

const hardwareName = {
  fontSize: "20px",
  fontWeight: "bold" as const,
  color: "#111827",
  margin: "0 0 8px 0",
};

const hardwareDesc = {
  fontSize: "14px",
  lineHeight: "22px",
  color: "#6b7280",
  margin: "0",
};

const hardwareCta = {
  marginTop: "16px",
};

const deviceButton = (color: string) => ({
  backgroundColor: color,
  color: "#ffffff",
  padding: "10px 20px",
  borderRadius: "8px",
  fontSize: "13px",
  fontWeight: "bold" as const,
  textDecoration: "none",
  display: "inline-block",
});

// ── Wellness feature blocks ──

const featureBlock = {
  background: "linear-gradient(135deg, rgba(124,58,237,0.04) 0%, rgba(168,85,247,0.04) 100%)",
  borderRadius: "12px",
  padding: "20px 24px",
  marginBottom: "10px",
  border: "1px solid rgba(124, 58, 237, 0.08)",
};

const featureIcon = {
  fontSize: "28px",
  margin: "0 0 4px 0",
  lineHeight: "1",
};

const featureTitle = {
  fontSize: "16px",
  fontWeight: "bold" as const,
  color: "#111827",
  margin: "0 0 4px 0",
};

const featureDesc = {
  fontSize: "14px",
  lineHeight: "22px",
  color: "#6b7280",
  margin: "0",
};

// ── Share / Invite section ──

const shareSection = {
  background: "linear-gradient(135deg, #1a0533 0%, #4c1d95 100%)",
  borderRadius: "16px",
  padding: "32px 24px",
  textAlign: "center" as const,
};

const shareHeading = {
  fontSize: "22px",
  fontWeight: "bold" as const,
  color: "#ffffff",
  margin: "0 0 8px 0",
};

const shareText = {
  fontSize: "15px",
  color: "rgba(255, 255, 255, 0.75)",
  lineHeight: "24px",
  margin: "0 0 4px 0",
};

const inviteButton = {
  backgroundColor: "#ffffff",
  color: "#7c3aed",
  padding: "14px 28px",
  borderRadius: "10px",
  fontSize: "15px",
  fontWeight: "bold" as const,
  textDecoration: "none",
  textAlign: "center" as const,
  display: "inline-block",
};

const shareRow = {
  marginTop: "8px",
};

const shareCol = {
  width: "33.33%",
  padding: "0 4px",
};

const shareLink = {
  color: "#c4b5fd",
  fontSize: "12px",
  fontWeight: "bold" as const,
  textDecoration: "underline",
};

// ── Testimonial ──

const testimonialSection = {
  background: "linear-gradient(135deg, rgba(124,58,237,0.05) 0%, rgba(168,85,247,0.05) 100%)",
  borderRadius: "16px",
  padding: "32px 24px",
  textAlign: "center" as const,
  border: "1px solid rgba(124, 58, 237, 0.1)",
};

const testimonialQuote = {
  fontSize: "48px",
  color: "#7c3aed",
  margin: "0",
  lineHeight: "1",
  fontFamily: "Georgia, serif",
};

const testimonialText = {
  fontSize: "15px",
  fontStyle: "italic" as const,
  color: "#374151",
  lineHeight: "24px",
  margin: "0 0 12px 0",
};

const testimonialAuthor = {
  fontSize: "13px",
  color: "#9ca3af",
  margin: "0",
  fontWeight: "600" as const,
};
