import {
  Text,
  Section,
  Row,
  Column,
  Hr,
  Img,
} from "@react-email/components";
import * as React from "react";
import { EmailLayout } from "../components/EmailLayout";
import { PrimaryButton } from "../components/PrimaryButton";

const BASE_URL = "https://seemyhealth.ai";
const RING_IMG = "https://storage.googleapis.com/seemyhealth-email-assets/ring-peekaboo.jpg";

export default function ReEngagementEmail() {
  return (
    <EmailLayout preview="We'd love to see you back, {{first_name}}">

      {/* ── Editorial hero ── */}
      <Section style={heroWrapper}>
        <Img
          src={RING_IMG}
          alt="We'd love to see you back"
          width="560"
          style={heroImage}
        />
        <Section style={heroTitleCard} className="dark-safe">
          <Text style={heroTitle}>We'd Love to See You Back</Text>
          <Text style={heroSubtitle}>
            Looking for you, {"{{first_name}}"} — it's been {"{{days_inactive}}"} days
          </Text>
        </Section>
      </Section>

      {/* ── Greeting ── */}
      <Text style={paragraph}>
        Your health journey is still here waiting for you — and here's what
        you've been missing.
      </Text>

      <Hr style={divider} />

      {/* ── What you're missing ── */}
      <Text style={sectionHeading}>What's been happening</Text>

      <Section style={missedCard}>
        <Row>
          <Column style={missedIconCol}>
            <Text style={iconText}>&#x1F4CA;</Text>
          </Column>
          <Column>
            <Text style={missedTitle}>Your health data</Text>
            <Text style={missedDesc}>
              {"{{unsynced_days}}"} days of health data waiting to be synced
              from your devices.
            </Text>
          </Column>
        </Row>
      </Section>

      <Section style={missedCard}>
        <Row>
          <Column style={missedIconCol}>
            <Text style={iconText}>&#x1F3AF;</Text>
          </Column>
          <Column>
            <Text style={missedTitle}>Your goals</Text>
            <Text style={missedDesc}>
              You were making great progress on {"{{active_goal}}"}
              — pick up where you left off.
            </Text>
          </Column>
        </Row>
      </Section>

      <Section style={missedCard}>
        <Row>
          <Column style={missedIconCol}>
            <Text style={iconText}>&#x1F525;</Text>
          </Column>
          <Column>
            <Text style={missedTitle}>Your streak</Text>
            <Text style={missedDesc}>
              You had a {"{{last_streak}}"}-day streak going.
              Start a new one today!
            </Text>
          </Column>
        </Row>
      </Section>

      <Section style={missedCard}>
        <Row>
          <Column style={missedIconCol}>
            <Text style={iconText}>&#x1F91D;</Text>
          </Column>
          <Column>
            <Text style={missedTitle}>Your community</Text>
            <Text style={missedDesc}>
              {"{{friend_activity}}"} of your friends have been active
              this week. {"{{active_challenges}}"} challenges are running now.
            </Text>
          </Column>
        </Row>
      </Section>

      <Hr style={divider} />

      {/* ── What's new ── */}
      <Text style={sectionHeading}>What's new in SeeMyHealth</Text>

      <Section style={newFeature}>
        <Text style={newBadge}>NEW</Text>
        <Text style={newTitle}>{"{{new_feature_1_title}}"}</Text>
        <Text style={newDesc}>{"{{new_feature_1_desc}}"}</Text>
      </Section>

      <Section style={newFeature}>
        <Text style={newBadge}>NEW</Text>
        <Text style={newTitle}>{"{{new_feature_2_title}}"}</Text>
        <Text style={newDesc}>{"{{new_feature_2_desc}}"}</Text>
      </Section>

      <Hr style={divider} />

      {/* ── Quick start ── */}
      <Section style={quickStartSection}>
        <Text style={quickStartHeading}>Jump back in</Text>
        <Text style={quickStartText}>
          It only takes a minute to get back on track. Open the app,
          sync your devices, and you're good to go.
        </Text>
        <Section style={ctaSection}>
          <PrimaryButton href={BASE_URL}>
            Open SeeMyHealth
          </PrimaryButton>
        </Section>
      </Section>

      <Hr style={divider} />

      <Text style={footerNote}>
        Don't want these reminders?{" "}
        <a href={`${BASE_URL}/settings/notifications`} style={linkStyle}>
          Manage notification preferences
        </a>
      </Text>

    </EmailLayout>
  );
}

// ── Styles ──

// ── Editorial hero ──

const heroWrapper = {
  marginBottom: "24px",
};

const heroImage = {
  width: "100%",
  height: "auto",
  display: "block" as const,
  borderRadius: "16px 16px 0 0",
};

const heroTitleCard = {
  background: "linear-gradient(135deg, #1a0533 0%, #2d1654 50%, #4c1d95 100%)",
  padding: "24px 24px",
  textAlign: "center" as const,
  borderRadius: "0 0 16px 16px",
};

const heroTitle = {
  fontSize: "24px",
  fontWeight: "bold" as const,
  color: "#ffffff",
  margin: "0 0 6px 0",
};

const heroSubtitle = {
  fontSize: "14px",
  color: "rgba(196, 181, 253, 0.8)",
  margin: "0",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  color: "#374151",
  margin: "0",
};

const divider = {
  borderColor: "rgba(124, 58, 237, 0.1)",
  margin: "24px 0",
};

const sectionHeading = {
  fontSize: "18px",
  fontWeight: "bold" as const,
  color: "#111827",
  margin: "0 0 16px 0",
};

// ── Missed cards ──

const missedCard = {
  background: "linear-gradient(135deg, rgba(124,58,237,0.04) 0%, rgba(168,85,247,0.06) 100%)",
  borderRadius: "12px",
  padding: "18px 20px",
  marginBottom: "10px",
  border: "1px solid rgba(124, 58, 237, 0.08)",
};

const missedIconCol = {
  width: "36px",
  verticalAlign: "top" as const,
};

const iconText = {
  fontSize: "20px",
  margin: "0",
  lineHeight: "1",
};

const missedTitle = {
  fontSize: "15px",
  fontWeight: "bold" as const,
  color: "#111827",
  margin: "0 0 2px 0",
};

const missedDesc = {
  fontSize: "13px",
  color: "#6b7280",
  lineHeight: "20px",
  margin: "0",
};

// ── New features ──

const newFeature = {
  marginBottom: "14px",
};

const newBadge = {
  fontSize: "10px",
  fontWeight: "bold" as const,
  color: "#7c3aed",
  letterSpacing: "1px",
  textTransform: "uppercase" as const,
  margin: "0 0 4px 0",
  backgroundColor: "rgba(124, 58, 237, 0.08)",
  padding: "3px 8px",
  borderRadius: "4px",
  display: "inline-block" as const,
};

const newTitle = {
  fontSize: "15px",
  fontWeight: "bold" as const,
  color: "#111827",
  margin: "4px 0 2px 0",
};

const newDesc = {
  fontSize: "13px",
  color: "#6b7280",
  lineHeight: "20px",
  margin: "0",
};

// ── Quick start ──

const quickStartSection = {
  textAlign: "center" as const,
};

const quickStartHeading = {
  fontSize: "20px",
  fontWeight: "bold" as const,
  color: "#111827",
  margin: "0 0 6px 0",
};

const quickStartText = {
  fontSize: "14px",
  color: "#6b7280",
  lineHeight: "22px",
  margin: "0",
};

const ctaSection = {
  textAlign: "center" as const,
  margin: "20px 0 0 0",
};

const footerNote = {
  fontSize: "12px",
  color: "#9ca3af",
  textAlign: "center" as const,
  margin: "0",
};

const linkStyle = {
  color: "#7c3aed",
  textDecoration: "underline",
};
