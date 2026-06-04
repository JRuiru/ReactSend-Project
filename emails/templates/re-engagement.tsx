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
import { EmailLayout } from "../components/EmailLayout";
import { PrimaryButton } from "../components/PrimaryButton";

const CDN = "https://imagedelivery.net/NnC2JvU8j4bgBbmedVhjJg";
const BASE_URL = "https://seemyhealth.ai";

const IMAGES = {
  hero: `${CDN}/lifestyle-sun-portrait/public`,
};

export default function ReEngagementEmail() {
  return (
    <EmailLayout preview="We miss you, {{first_name}}. Your health journey is waiting.">

      {/* ── Hero ── */}
      <Section style={heroSection}>
        <Img
          src={IMAGES.hero}
          width="560"
          alt="We miss you"
          style={heroImage}
        />
        <Section style={heroOverlay} className="force-white">
          <Text style={heroLabel}>WE MISS YOU</Text>
          <Text style={heroTitle}>Your journey is waiting.</Text>
        </Section>
      </Section>

      {/* ── Greeting ── */}
      <Text style={heading}>
        Hey {"{{first_name}}"},
      </Text>
      <Text style={paragraph}>
        It has been <strong style={{ color: "#f5f5f5" }}>{"{{days_inactive}}"} days</strong> since
        your last visit. Your health data is still here, and there is plenty
        waiting for you.
      </Text>

      <Hr style={divider} />

      {/* ── What you're missing ── */}
      <Text style={sectionLabel}>WHAT YOU HAVE BEEN MISSING</Text>

      <Section style={missedCard}>
        <Row>
          <Column style={missedNumCol}>
            <Text style={missedNum}>1</Text>
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
          <Column style={missedNumCol}>
            <Text style={missedNum}>2</Text>
          </Column>
          <Column>
            <Text style={missedTitle}>Your goals</Text>
            <Text style={missedDesc}>
              You were making great progress on {"{{active_goal}}"}. Pick up
              where you left off.
            </Text>
          </Column>
        </Row>
      </Section>

      <Section style={missedCard}>
        <Row>
          <Column style={missedNumCol}>
            <Text style={missedNum}>3</Text>
          </Column>
          <Column>
            <Text style={missedTitle}>Your streak</Text>
            <Text style={missedDesc}>
              You had a {"{{last_streak}}"}-day streak going. Start a new one
              today.
            </Text>
          </Column>
        </Row>
      </Section>

      <Section style={missedCard}>
        <Row>
          <Column style={missedNumCol}>
            <Text style={missedNum}>4</Text>
          </Column>
          <Column>
            <Text style={missedTitle}>Your community</Text>
            <Text style={missedDesc}>
              {"{{friend_activity}}"} of your friends have been active this
              week. {"{{active_challenges}}"} challenges are running now.
            </Text>
          </Column>
        </Row>
      </Section>

      <Hr style={divider} />

      {/* ── What's new ── */}
      <Text style={sectionLabel}>WHAT IS NEW</Text>

      <Section style={newFeatureCard}>
        <Section style={featureItem}>
          <Text style={newBadge}>NEW</Text>
          <Text style={newTitle}>{"{{new_feature_1_title}}"}</Text>
          <Text style={newDesc}>{"{{new_feature_1_desc}}"}</Text>
        </Section>

        <Hr style={cardDivider} />

        <Section style={featureItem}>
          <Text style={newBadge}>NEW</Text>
          <Text style={newTitle}>{"{{new_feature_2_title}}"}</Text>
          <Text style={newDesc}>{"{{new_feature_2_desc}}"}</Text>
        </Section>
      </Section>

      <Hr style={divider} />

      {/* ── Referral ── */}
      <Section style={referralCard}>
        <Text style={referralHeading}>Bring a friend, restart together</Text>
        <Text style={referralText}>
          Getting back on track is easier with someone by your side. Invite
          a friend and hold each other accountable.
        </Text>
        <Section style={ctaCenter}>
          <Button href={`${BASE_URL}/invite?ref={{user_id}}`} style={referralButton}>
            Invite a Friend
          </Button>
        </Section>
      </Section>

      <Hr style={divider} />

      {/* ── CTA ── */}
      <Section style={ctaSection}>
        <Text style={ctaHeading}>Jump back in</Text>
        <Text style={ctaText}>
          It only takes a minute to get back on track. Open the app,
          sync your devices, and you are good to go.
        </Text>
        <Section style={ctaCenter}>
          <PrimaryButton href={BASE_URL}>
            Open SeeMyHealth
          </PrimaryButton>
        </Section>
      </Section>

      <Hr style={divider} />

      <Text style={footerNote}>
        Do not want these reminders?{" "}
        <a href={`${BASE_URL}/settings/notifications`} style={linkStyle}>
          Manage notification preferences
        </a>
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

const heroLabel = {
  fontSize: "11px",
  fontWeight: "600" as const,
  color: "rgba(255, 255, 255, 0.7)",
  letterSpacing: "3px",
  textTransform: "uppercase" as const,
  margin: "0 0 4px 0",
};

const heroTitle = {
  fontSize: "26px",
  fontWeight: "700" as const,
  color: "#ffffff",
  margin: "0",
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
  color: "rgba(255, 255, 255, 0.6)",
  margin: "0",
};

const divider = {
  borderColor: "rgba(255, 255, 255, 0.06)",
  margin: "28px 0",
};

const sectionLabel = {
  fontSize: "11px",
  fontWeight: "600" as const,
  color: "rgba(255, 255, 255, 0.35)",
  letterSpacing: "3px",
  textTransform: "uppercase" as const,
  margin: "0 0 16px 0",
};

// ── Missed cards ──

const missedCard = {
  marginBottom: "12px",
};

const missedNumCol = {
  width: "36px",
  verticalAlign: "top" as const,
};

const missedNum = {
  fontSize: "20px",
  fontWeight: "700" as const,
  color: "rgba(255, 255, 255, 0.12)",
  margin: "0",
  lineHeight: "1",
};

const missedTitle = {
  fontSize: "15px",
  fontWeight: "600" as const,
  color: "#f5f5f5",
  margin: "0 0 4px 0",
};

const missedDesc = {
  fontSize: "14px",
  color: "rgba(255, 255, 255, 0.45)",
  lineHeight: "21px",
  margin: "0",
};

// ── New features ──

const newFeatureCard = {
  backgroundColor: "#141414",
  borderRadius: "12px",
  padding: "24px",
  border: "1px solid rgba(255, 255, 255, 0.06)",
};

const featureItem = {
  marginBottom: "0",
};

const cardDivider = {
  borderColor: "rgba(255, 255, 255, 0.06)",
  margin: "16px 0",
};

const newBadge = {
  fontSize: "10px",
  fontWeight: "700" as const,
  color: "#f5f5f5",
  letterSpacing: "1.5px",
  textTransform: "uppercase" as const,
  margin: "0 0 6px 0",
  backgroundColor: "rgba(255, 255, 255, 0.08)",
  padding: "3px 8px",
  borderRadius: "4px",
  display: "inline-block" as const,
};

const newTitle = {
  fontSize: "15px",
  fontWeight: "600" as const,
  color: "#f5f5f5",
  margin: "4px 0 2px 0",
};

const newDesc = {
  fontSize: "13px",
  color: "rgba(255, 255, 255, 0.45)",
  lineHeight: "20px",
  margin: "0",
};

// ── Referral ──

const referralCard = {
  backgroundColor: "#141414",
  borderRadius: "12px",
  padding: "28px 24px",
  textAlign: "center" as const,
  border: "1px solid rgba(255, 255, 255, 0.06)",
};

const referralHeading = {
  fontSize: "18px",
  fontWeight: "700" as const,
  color: "#f5f5f5",
  margin: "0 0 6px 0",
};

const referralText = {
  fontSize: "14px",
  color: "rgba(255, 255, 255, 0.45)",
  lineHeight: "22px",
  margin: "0",
};

const referralButton = {
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  color: "#f5f5f5",
  padding: "10px 24px",
  borderRadius: "50px",
  fontSize: "12px",
  fontWeight: "600" as const,
  textDecoration: "none",
  display: "inline-block",
  letterSpacing: "0.5px",
  textTransform: "uppercase" as const,
  border: "1px solid rgba(255, 255, 255, 0.1)",
};

// ── CTA ──

const ctaSection = {
  textAlign: "center" as const,
};

const ctaHeading = {
  fontSize: "20px",
  fontWeight: "700" as const,
  color: "#f5f5f5",
  margin: "0 0 6px 0",
  textAlign: "center" as const,
};

const ctaText = {
  fontSize: "15px",
  color: "rgba(255, 255, 255, 0.5)",
  lineHeight: "24px",
  margin: "0",
  textAlign: "center" as const,
};

const ctaCenter = {
  textAlign: "center" as const,
  margin: "20px 0 0 0",
};

const footerNote = {
  fontSize: "12px",
  color: "rgba(255, 255, 255, 0.25)",
  textAlign: "center" as const,
  margin: "0",
};

const linkStyle = {
  color: "rgba(255, 255, 255, 0.4)",
  textDecoration: "underline",
};
