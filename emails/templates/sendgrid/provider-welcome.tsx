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

// Hardcoded Shopify affiliate referral link (backend does not supply it).
// TODO: replace with the real provider referral URL before deploy.
const SHOPIFY_REFERRAL_URL = "https://shop.seemyhealth.ai/?ref=provider";

/**
 * Emits raw, unescaped text (used for Handlebars block helpers). react-email
 * HTML-escapes quotes in normal JSX text, which breaks SendGrid's `equals`
 * helper, so the conditional tags must be injected raw.
 */
const Raw = ({ html }: { html: string }) => (
  <span dangerouslySetInnerHTML={{ __html: html }} />
);

/**
 * Provider welcome email.
 *
 * Role-aware: the value-props section switches on the {{profession}} field
 * using SendGrid's Handlebars `equals` helper. The backend maps profession to
 * one of these exact friendly labels:
 *   "Nutritionist" | "Physiotherapist" | "Fitness Instructor" |
 *   "General Practitioner" | "Therapist"
 *
 * Fields received: {{display_name}}, {{profession}}, {{action_url}}.
 * Auto-filled by the catalog: {{action_text}}, {{app_name}}, {{year}},
 *   {{support_email}}.
 * The Shopify referral CTA is hardcoded (see SHOPIFY_REFERRAL_URL).
 */
export default function ProviderWelcomeEmail() {
  return (
    <EmailLayout preview="Welcome to SeeMyHealth for Providers — your practice starts here.">

      {/* ── Hero ── */}
      <Section style={heroSection}>
        <Img
          src={`${CDN}/app-video-consultation/public`}
          width="560"
          alt="Welcome to SeeMyHealth for Providers"
          style={heroImage}
        />
        <Section style={heroOverlay} className="force-white">
          <Text style={heroLabel}>WELCOME TO</Text>
          <Text style={heroTitle}>SeeMyHealth for Providers</Text>
        </Section>
      </Section>

      {/* ── Badge ── */}
      <Section style={badgeWrapper}>
        <Section style={badge}>
          <Text style={badgeText}>{"{{profession}}"}</Text>
        </Section>
      </Section>

      {/* ── Greeting ── */}
      <Text style={heading}>
        Welcome aboard, {"{{display_name}}"}.
      </Text>

      <Text style={paragraph}>
        Your provider account is live. SeeMyHealth connects you with clients and
        the continuous health data from their devices, so you can deliver care
        that is informed by what actually happens between visits.
      </Text>

      <Hr style={divider} />

      {/* ══════════════════════════════════════════════════════════
          Role-specific value props
          ══════════════════════════════════════════════════════════ */}
      <Text style={sectionLabel}>WHAT YOU CAN DO</Text>

      {/* ── Nutritionist ── */}
      <Raw html={'{{#equals profession "Nutritionist"}}'} />
      <Section style={valueCard}>
        <Text style={valueTitle}>See the full nutrition picture</Text>
        <Text style={valueDesc}>
          Review clients' logged meals, macros, and hydration in real time. No
          more relying on recall from the last appointment.
        </Text>
      </Section>
      <Section style={valueCard}>
        <Text style={valueTitle}>Track body composition trends</Text>
        <Text style={valueDesc}>
          Weight, body fat, and muscle mass from The Scale sync automatically, so
          you can measure whether a plan is working.
        </Text>
      </Section>
      <Section style={valueCard}>
        <Text style={valueTitle}>Share plans that stick</Text>
        <Text style={valueDesc}>
          Send meal guidance and hydration goals straight to the client's app and
          watch adherence between sessions.
        </Text>
      </Section>
      <Raw html="{{/equals}}" />

      {/* ── Physiotherapist ── */}
      <Raw html={'{{#equals profession "Physiotherapist"}}'} />
      <Section style={valueCard}>
        <Text style={valueTitle}>Monitor recovery between sessions</Text>
        <Text style={valueDesc}>
          Activity, sleep, and HRV data show you how a client is recovering long
          after they leave the clinic.
        </Text>
      </Section>
      <Section style={valueCard}>
        <Text style={valueTitle}>Track adherence to home programs</Text>
        <Text style={valueDesc}>
          See whether prescribed movement and activity targets are being met, and
          adjust the plan with real evidence.
        </Text>
      </Section>
      <Section style={valueCard}>
        <Text style={valueTitle}>Catch setbacks early</Text>
        <Text style={valueDesc}>
          Spot drops in activity or resting heart rate trends before they become a
          missed milestone.
        </Text>
      </Section>
      <Raw html="{{/equals}}" />

      {/* ── Fitness instructor ── */}
      <Raw html={'{{#equals profession "Fitness Instructor"}}'} />
      <Section style={valueCard}>
        <Text style={valueTitle}>Coach with real training data</Text>
        <Text style={valueDesc}>
          Heart rate, workouts, and recovery from the Ring let you tune intensity
          to each client instead of guessing.
        </Text>
      </Section>
      <Section style={valueCard}>
        <Text style={valueTitle}>Keep clients accountable</Text>
        <Text style={valueDesc}>
          Set goals and challenges, then track streaks and activity so motivation
          does not fade between sessions.
        </Text>
      </Section>
      <Section style={valueCard}>
        <Text style={valueTitle}>Show progress that motivates</Text>
        <Text style={valueDesc}>
          Body composition and performance trends give clients proof their work is
          paying off.
        </Text>
      </Section>
      <Raw html="{{/equals}}" />

      {/* ── General practitioner ── */}
      <Raw html={'{{#equals profession "General Practitioner"}}'} />
      <Section style={valueCard}>
        <Text style={valueTitle}>Access vitals that matter</Text>
        <Text style={valueDesc}>
          Blood pressure, SpO2, HRV, and weight sync from your patients' devices
          into one secure view.
        </Text>
      </Section>
      <Section style={valueCard}>
        <Text style={valueTitle}>Review health reports at a glance</Text>
        <Text style={valueDesc}>
          Patient trends are summarized into clear reports, so prep for each visit
          takes minutes.
        </Text>
      </Section>
      <Section style={valueCard}>
        <Text style={valueTitle}>Monitor remotely between visits</Text>
        <Text style={valueDesc}>
          Continuous data helps you follow chronic conditions without waiting for
          the next appointment.
        </Text>
      </Section>
      <Raw html="{{/equals}}" />

      {/* ── Therapist / mental health ── */}
      <Raw html={'{{#equals profession "Therapist"}}'} />
      <Section style={valueCard}>
        <Text style={valueTitle}>Follow mood between sessions</Text>
        <Text style={valueDesc}>
          Daily mood check-ins and journaling trends give you context on how a
          client has really been since you last spoke.
        </Text>
      </Section>
      <Section style={valueCard}>
        <Text style={valueTitle}>See the physical signs of stress</Text>
        <Text style={valueDesc}>
          Sleep quality, HRV, and resting heart rate often shift before a client
          puts it into words. Spot the pattern early.
        </Text>
      </Section>
      <Section style={valueCard}>
        <Text style={valueTitle}>Support care that continues at home</Text>
        <Text style={valueDesc}>
          Share check-in prompts and track engagement, so the work continues
          gently between appointments.
        </Text>
      </Section>
      <Raw html="{{/equals}}" />

      <Hr style={divider} />

      {/* ══════════════════════════════════════════════════════════
          Setup steps (shared)
          ══════════════════════════════════════════════════════════ */}
      <Text style={sectionLabel}>GET SET UP IN 3 STEPS</Text>

      <Section style={stepCard}>
        <Row>
          <Column style={stepNumberCol}>
            <Text style={stepNumber}>1</Text>
          </Column>
          <Column>
            <Text style={stepTitle}>Complete your profile</Text>
            <Text style={stepDesc}>
              Add your credentials, specializations, and a short bio so clients
              know who they are working with.
            </Text>
          </Column>
        </Row>
      </Section>

      <Section style={stepCard}>
        <Row>
          <Column style={stepNumberCol}>
            <Text style={stepNumber}>2</Text>
          </Column>
          <Column>
            <Text style={stepTitle}>Set your services and availability</Text>
            <Text style={stepDesc}>
              List what you offer, set your rates, and open the times you are
              available for bookings.
            </Text>
          </Column>
        </Row>
      </Section>

      <Section style={stepCard}>
        <Row>
          <Column style={stepNumberCol}>
            <Text style={stepNumber}>3</Text>
          </Column>
          <Column>
            <Text style={stepTitle}>Start seeing clients</Text>
            <Text style={stepDesc}>
              Accept bookings, review shared health data, and get paid securely,
              all from your provider dashboard.
            </Text>
          </Column>
        </Row>
      </Section>

      {/* ── CTA ── */}
      <Section style={ctaCenter}>
        <PrimaryButton href="{{action_url}}">{"{{action_text}}"}</PrimaryButton>
      </Section>

      <Hr style={divider} />

      {/* ── Provider app ── */}
      <Text style={sectionLabel}>TAKE IT WITH YOU</Text>
      <Section style={appCard}>
        <Text style={appTitle}>Manage your practice from your phone</Text>
        <Text style={appDesc}>
          Review bookings, check client data, and respond between sessions.
          Download the SeeMyHealth Provider app for iOS and Android.
        </Text>
        <Section style={{ textAlign: "center" as const, marginTop: "16px" }}>
          <Row>
            <Column align="center" style={storeCol}>
              <Button href={`${BASE_URL}/providers/app`} style={storeButton}>App Store</Button>
            </Column>
            <Column align="center" style={storeCol}>
              <Button href={`${BASE_URL}/providers/app`} style={storeButton}>Google Play</Button>
            </Column>
          </Row>
        </Section>
      </Section>

      <Hr style={divider} />

      {/* ── Collaboration / affiliate (extended care) ── */}
      <Text style={sectionLabel}>EXTEND YOUR CARE</Text>
      <Section style={partnerCard}>
        <Text style={partnerTitle}>Care that continues after the appointment</Text>
        <Text style={partnerDesc}>
          The clients who see the best results are the ones still tracking at home.
          When you recommend a SeeMyHealth device, you give them that continuity,
          and richer data to bring back to you.
        </Text>
        <Text style={partnerDesc}>
          Through our provider partner program, you also earn a commission on every
          device a client buys through your link. You care for them, and we take
          care of you.
        </Text>
        <Section style={{ textAlign: "center" as const, marginTop: "16px" }}>
          <Button href={SHOPIFY_REFERRAL_URL} style={partnerButton}>Join the Partner Program</Button>
        </Section>
      </Section>

      <Hr style={divider} />

      {/* ── Device advertising ── */}
      <Text style={ecosystemHeading}>Devices worth recommending</Text>
      <Text style={ecosystemSubtext}>
        The tools your clients can take home. Recommend them through your partner link and earn on every purchase.
      </Text>
      <Section style={ecosystemStrip}>
        <Row>
          <Column style={deviceCol}>
            <Section style={deviceCard}>
              <Img src={`${CDN}/ring-gold-hands-portrait/public`} width="160" alt="SeeMyHealth Ring" style={deviceImage} />
              <Text style={deviceBadgeOrange}>WEARABLE</Text>
              <Text style={deviceName}>The Ring</Text>
              <Button href={`${BASE_URL}/products/ring`} style={exploreBtnOrange}>Explore</Button>
            </Section>
          </Column>
          <Column style={deviceCol}>
            <Section style={deviceCard}>
              <Img src={`${CDN}/scale-black-nutritionist/public`} width="160" alt="SeeMyHealth Scale" style={deviceImage} />
              <Text style={deviceBadgeBlue}>BODY COMP</Text>
              <Text style={deviceName}>The Scale</Text>
              <Button href={`${BASE_URL}/products/scale`} style={exploreBtnBlue}>Explore</Button>
            </Section>
          </Column>
          <Column style={deviceCol}>
            <Section style={deviceCard}>
              <Img src={`${CDN}/bp-black-poster/public`} width="160" alt="SeeMyHealth BP Monitor" style={deviceImage} />
              <Text style={deviceBadgeRed}>VITALS</Text>
              <Text style={deviceName}>BP Monitor</Text>
              <Button href={`${BASE_URL}/products/bp-monitor`} style={exploreBtnRed}>Explore</Button>
            </Section>
          </Column>
        </Row>
      </Section>

      <Hr style={divider} />

      {/* ── Support note ── */}
      <Section style={supportCard}>
        <Text style={supportText}>
          Questions about getting started? Reach our provider team any time at{" "}
          {"{{support_email}}"}. We are here to help you build your practice.
        </Text>
      </Section>

    </EmailLayout>
  );
}

// ── Styles ──

const heroSection = {
  position: "relative" as const,
  borderRadius: "12px",
  overflow: "hidden" as const,
  marginBottom: "8px",
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
  color: "#b3b3b3",
  letterSpacing: "3px",
  textTransform: "uppercase" as const,
  margin: "0 0 4px 0",
};

const heroTitle = {
  fontSize: "26px",
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
  color: "#a3a3a3",
  margin: "0",
};

const divider = {
  borderColor: "#1a1a1a",
  margin: "28px 0",
};

const sectionLabel = {
  fontSize: "11px",
  fontWeight: "600" as const,
  color: "#5e5e5e",
  letterSpacing: "3px",
  textTransform: "uppercase" as const,
  margin: "0 0 16px 0",
};

const ctaCenter = {
  textAlign: "center" as const,
  margin: "24px 0 0 0",
};

// ── Badge ──

const badgeWrapper = {
  textAlign: "center" as const,
  paddingTop: "24px",
  paddingBottom: "24px",
};

const badge = {
  backgroundColor: "#0c1a0c",
  border: "1px solid #1a3c1a",
  borderRadius: "50px",
  padding: "8px 20px",
  display: "inline-block" as const,
};

const badgeText = {
  fontSize: "11px",
  fontWeight: "700" as const,
  color: "#22C55E",
  letterSpacing: "2px",
  textTransform: "uppercase" as const,
  margin: "0",
};

// ── Value cards ──

const valueCard = {
  backgroundColor: "#141414",
  borderRadius: "12px",
  padding: "18px 20px",
  border: "1px solid #1a1a1a",
  marginBottom: "8px",
};

const valueTitle = {
  fontSize: "15px",
  fontWeight: "600" as const,
  color: "#f5f5f5",
  margin: "0 0 4px 0",
};

const valueDesc = {
  fontSize: "14px",
  lineHeight: "22px",
  color: "#8a8a8a",
  margin: "0",
};

// ── Steps ──

const stepCard = {
  backgroundColor: "#141414",
  borderRadius: "12px",
  padding: "16px 20px",
  border: "1px solid #1a1a1a",
  marginBottom: "8px",
};

const stepNumberCol = {
  width: "36px",
  verticalAlign: "top" as const,
};

const stepNumber = {
  fontSize: "14px",
  fontWeight: "700" as const,
  color: "#22C55E",
  margin: "0",
};

const stepTitle = {
  fontSize: "14px",
  fontWeight: "600" as const,
  color: "#f5f5f5",
  margin: "0 0 4px 0",
};

const stepDesc = {
  fontSize: "13px",
  lineHeight: "20px",
  color: "#a3a3a3",
  margin: "0",
};

// ── Provider app ──

const appCard = {
  backgroundColor: "#141414",
  borderRadius: "12px",
  padding: "24px",
  border: "1px solid #1a1a1a",
  textAlign: "center" as const,
};

const appTitle = {
  fontSize: "16px",
  fontWeight: "700" as const,
  color: "#f5f5f5",
  margin: "0 0 6px 0",
};

const appDesc = {
  fontSize: "14px",
  lineHeight: "22px",
  color: "#8a8a8a",
  margin: "0",
};

const storeCol = {
  width: "50%",
  padding: "0 4px",
};

const storeButton = {
  backgroundColor: "transparent",
  color: "#a3a3a3",
  padding: "10px 20px",
  borderRadius: "50px",
  fontSize: "12px",
  fontWeight: "600" as const,
  textDecoration: "none",
  display: "inline-block",
  border: "1px solid #2a2a2a",
  letterSpacing: "0.5px",
};

// ── Partner / affiliate ──

const partnerCard = {
  backgroundColor: "#0c1a0c",
  borderRadius: "12px",
  padding: "24px",
  border: "1px solid #1a3c1a",
};

const partnerTitle = {
  fontSize: "17px",
  fontWeight: "700" as const,
  color: "#f5f5f5",
  margin: "0 0 8px 0",
};

const partnerDesc = {
  fontSize: "14px",
  lineHeight: "22px",
  color: "#a3a3a3",
  margin: "0 0 10px 0",
};

const partnerButton = {
  backgroundColor: "#22C55E",
  color: "#0a0a0a",
  padding: "12px 28px",
  borderRadius: "50px",
  fontSize: "13px",
  fontWeight: "700" as const,
  textDecoration: "none",
  display: "inline-block",
  letterSpacing: "0.5px",
  textTransform: "uppercase" as const,
};

// ── Support ──

const supportCard = {
  backgroundColor: "#141414",
  borderRadius: "12px",
  padding: "16px 20px",
  border: "1px solid #1a1a1a",
};

const supportText = {
  fontSize: "13px",
  lineHeight: "20px",
  color: "#6b6b6b",
  margin: "0",
};

// ── Cross-sell ──

const ecosystemHeading = { fontSize: "18px", fontWeight: "700" as const, color: "#f5f5f5", margin: "0 0 6px 0", textAlign: "center" as const };
const ecosystemSubtext = { fontSize: "14px", color: "#6b6b6b", lineHeight: "22px", margin: "0 0 20px 0", textAlign: "center" as const };
const ecosystemStrip = { marginBottom: "0" };
const deviceCol = { width: "33.33%", verticalAlign: "top" as const, padding: "0 4px" };
const deviceCard = { backgroundColor: "#141414", borderRadius: "12px", padding: "0 0 16px 0", textAlign: "center" as const, border: "1px solid #1a1a1a", overflow: "hidden" as const };
const deviceImage = { width: "100%", display: "block" as const, borderRadius: "12px 12px 0 0" };
const deviceBadgeBase = { fontSize: "9px", fontWeight: "700" as const, letterSpacing: "1.5px", textTransform: "uppercase" as const, margin: "12px 0 4px 0", lineHeight: "1" };
const deviceBadgeOrange = { ...deviceBadgeBase, color: "#F97316" };
const deviceBadgeBlue = { ...deviceBadgeBase, color: "#3B82F6" };
const deviceBadgeRed = { ...deviceBadgeBase, color: "#EF4444" };
const deviceName = { fontSize: "13px", fontWeight: "600" as const, color: "#f5f5f5", margin: "0 0 10px 0" };
const exploreBtnBase = { fontSize: "11px", fontWeight: "600" as const, padding: "6px 16px", borderRadius: "50px", textDecoration: "none", display: "inline-block", letterSpacing: "0.5px", color: "#0a0a0a" };
const exploreBtnOrange = { ...exploreBtnBase, backgroundColor: "#F97316" };
const exploreBtnBlue = { ...exploreBtnBase, backgroundColor: "#3B82F6" };
const exploreBtnRed = { ...exploreBtnBase, backgroundColor: "#EF4444" };