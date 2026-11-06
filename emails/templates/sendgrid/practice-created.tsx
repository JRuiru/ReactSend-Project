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

/**
 * Practice created confirmation — sent to the practice owner when they
 * create a new practice on SeeMyHealth for Providers.
 *
 * Fields received: {{practice_name}}, {{owner_name}} (best-effort, may be empty),
 *   {{action_url}} (deep link to the new practice).
 * Auto-filled by the catalog: {{action_text}}, {{app_name}}, {{year}},
 *   {{support_email}}.
 * App + partner links are static site paths (the backend does not pass them).
 */
export default function PracticeCreatedEmail() {
  return (
    <EmailLayout preview="{{practice_name}} is live on SeeMyHealth.">

      {/* ── Badge ── */}
      <Section style={badgeWrapper}>
        <Section style={badge}>
          <Text style={badgeText}>PRACTICE CREATED</Text>
        </Section>
      </Section>

      {/* ── Heading ── */}
      <Text style={heading}>
        {"{{practice_name}}"} is live.
      </Text>

      <Text style={paragraph}>
        Nice work{"{{#if owner_name}}"}, {"{{owner_name}}"}{"{{/if}}"}. Your
        practice is set up and you are the owner. Here is everything you need to
        get your team and your clients on board.
      </Text>

      {/* ── CTA ── */}
      <Section style={ctaCenter}>
        <PrimaryButton href="{{action_url}}">{"{{action_text}}"}</PrimaryButton>
      </Section>

      <Hr style={divider} />

      {/* ── Next steps ── */}
      <Text style={sectionLabel}>SET UP YOUR PRACTICE</Text>

      <Section style={stepCard}>
        <Row>
          <Column style={stepNumberCol}>
            <Text style={stepNumber}>1</Text>
          </Column>
          <Column>
            <Text style={stepTitle}>Invite your team</Text>
            <Text style={stepDesc}>
              Add the practitioners and staff who will work alongside you. Each
              member gets their own secure login and role.
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
            <Text style={stepTitle}>Add services and availability</Text>
            <Text style={stepDesc}>
              List the services your practice offers, set your rates, and open the
              hours clients can book.
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
            <Text style={stepTitle}>Customize your booking page</Text>
            <Text style={stepDesc}>
              Add your logo, bio, and branding so clients recognize you the moment
              they land on your page.
            </Text>
          </Column>
        </Row>
      </Section>

      <Hr style={divider} />

      {/* ── Provider app ── */}
      <Text style={sectionLabel}>TAKE IT WITH YOU</Text>
      <Section style={appCard}>
        <Text style={appTitle}>Run your practice from your phone</Text>
        <Text style={appDesc}>
          Manage bookings, your team, and client data on the go. Download the
          SeeMyHealth Provider app for iOS and Android.
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
          When your practice recommends a SeeMyHealth device, you give them that
          continuity, and richer data to bring back to you.
        </Text>
        <Text style={partnerDesc}>
          Through our provider partner program, your practice earns a commission on
          every device a client buys through your link. You care for them, and we
          take care of you.
        </Text>
        <Section style={{ textAlign: "center" as const, marginTop: "16px" }}>
          <Button href={`${BASE_URL}/providers/partner`} style={partnerButton}>Join the Partner Program</Button>
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
          Need a hand setting things up? Reach our provider team any time at{" "}
          {"{{support_email}}"}. We are here to help your practice grow.
        </Text>
      </Section>

    </EmailLayout>
  );
}

// ── Styles ──

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
  paddingTop: "32px",
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
