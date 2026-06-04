import {
  Text,
  Section,
  Img,
  Row,
  Column,
  Hr,
} from "@react-email/components";
import * as React from "react";
import { EmailLayout } from "../components/EmailLayout";
import { PrimaryButton } from "../components/PrimaryButton";

const CDN = "https://imagedelivery.net/NnC2JvU8j4bgBbmedVhjJg";
const BASE_URL = "https://seemyhealth.ai";

const IMAGES = {
  hero: `${CDN}/ring-yoga/public`,
};

export default function StreakMilestoneEmail() {
  return (
    <EmailLayout preview="You hit a {{streak_count}}-day streak!">

      {/* ── Hero ── */}
      <Section style={heroSection}>
        <Img
          src={IMAGES.hero}
          width="560"
          alt="Streak milestone"
          style={heroImage}
        />
        <Section style={heroOverlay} className="force-white">
          <Text style={heroLabel}>{"{{streak_category}}"}</Text>
          <Text style={heroCount}>{"{{streak_count}}"}</Text>
          <Text style={heroSub}>DAY STREAK</Text>
        </Section>
      </Section>

      {/* ── Greeting ── */}
      <Text style={heading}>
        Unstoppable, {"{{first_name}}"}.
      </Text>
      <Text style={paragraph}>
        You have been consistent for <strong style={{ color: "#f5f5f5" }}>{"{{streak_count}}"} days
        straight</strong> with your <strong style={{ color: "#f5f5f5" }}>{"{{streak_category}}"}</strong> goal.
        That kind of dedication does not go unnoticed.
      </Text>

      <Hr style={divider} />

      {/* ══════════════════════════════════════════════════════════
          Streak Stats
          ══════════════════════════════════════════════════════════ */}
      <Text style={sectionLabel}>YOUR STREAK</Text>

      <Section style={statsCard}>
        <Row>
          <Column style={statCell}>
            <Text style={statValue}>{"{{streak_goal}}"}</Text>
            <Text style={statLabel}>DAILY GOAL</Text>
          </Column>
        </Row>
        <Hr style={statDivider} />
        <Row>
          <Column style={statCell}>
            <Text style={statValue}>{"{{streak_start_date}}"}</Text>
            <Text style={statLabel}>STARTED</Text>
          </Column>
          <Column style={statCell}>
            <Text style={statValue}>{"{{personal_record}}"} days</Text>
            <Text style={statLabel}>PERSONAL BEST</Text>
          </Column>
        </Row>
        <Hr style={statDivider} />
        <Row>
          <Column style={statCell}>
            <Text style={statValue}>{"{{avg_performance}}"}</Text>
            <Text style={statLabel}>AVG PERFORMANCE</Text>
          </Column>
        </Row>
      </Section>

      <Hr style={divider} />

      {/* ══════════════════════════════════════════════════════════
          Milestone Tracker
          ══════════════════════════════════════════════════════════ */}
      <Text style={sectionLabel}>MILESTONES</Text>

      <Section style={milestoneCard}>
        <Section style={milestoneRow}>
          <Row>
            <Column style={milestoneIconCol}>
              <Text style={milestoneIcon}>{"{{milestone_14_icon}}"}</Text>
            </Column>
            <Column style={milestoneContent}>
              <Text style={milestoneName}>14 days</Text>
              <Text style={milestoneSub}>Two weeks strong</Text>
            </Column>
          </Row>
        </Section>

        <Section style={milestoneRow}>
          <Row>
            <Column style={milestoneIconCol}>
              <Text style={milestoneIcon}>{"{{milestone_30_icon}}"}</Text>
            </Column>
            <Column style={milestoneContent}>
              <Text style={milestoneName}>30 days</Text>
              <Text style={milestoneSub}>Habit formed</Text>
            </Column>
          </Row>
        </Section>

        <Section style={milestoneRow}>
          <Row>
            <Column style={milestoneIconCol}>
              <Text style={milestoneIcon}>{"{{milestone_60_icon}}"}</Text>
            </Column>
            <Column style={milestoneContent}>
              <Text style={milestoneName}>60 days</Text>
              <Text style={milestoneSub}>Lifestyle change</Text>
            </Column>
          </Row>
        </Section>

        <Section style={milestoneRowLast}>
          <Row>
            <Column style={milestoneIconCol}>
              <Text style={milestoneIcon}>{"{{milestone_100_icon}}"}</Text>
            </Column>
            <Column style={milestoneContent}>
              <Text style={milestoneName}>100 days</Text>
              <Text style={milestoneSub}>Legend status</Text>
            </Column>
          </Row>
        </Section>
      </Section>

      <Hr style={divider} />

      {/* ── Quote ── */}
      <Section style={quoteSection}>
        <Text style={quoteMark}>"</Text>
        <Text style={quoteText}>
          Success is the sum of small efforts, repeated day in and day out.
        </Text>
        <Text style={quoteAuthor}>Robert Collier</Text>
      </Section>

      <Hr style={divider} />

      {/* ── CTA ── */}
      <Section style={ctaSection}>
        <Text style={ctaText}>
          Do not break the chain. Open the app and keep it going.
        </Text>
        <Section style={ctaCenter}>
          <PrimaryButton href={`${BASE_URL}/app`}>
            Keep the Streak Alive
          </PrimaryButton>
        </Section>
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
  background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)",
  textAlign: "center" as const,
};

const heroLabel = {
  fontSize: "11px",
  fontWeight: "600" as const,
  color: "rgba(255, 255, 255, 0.6)",
  letterSpacing: "3px",
  textTransform: "uppercase" as const,
  margin: "0 0 4px 0",
};

const heroCount = {
  fontSize: "56px",
  fontWeight: "700" as const,
  color: "#fb923c",
  margin: "0",
  lineHeight: "1",
};

const heroSub = {
  fontSize: "14px",
  fontWeight: "700" as const,
  color: "rgba(255, 255, 255, 0.7)",
  letterSpacing: "4px",
  margin: "4px 0 0 0",
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

// ── Stats card ──

const statsCard = {
  backgroundColor: "#141414",
  borderRadius: "12px",
  padding: "20px 24px",
  border: "1px solid rgba(255, 255, 255, 0.06)",
  textAlign: "center" as const,
};

const statCell = {
  width: "50%",
  textAlign: "center" as const,
  padding: "8px 0",
};

const statValue = {
  fontSize: "16px",
  fontWeight: "600" as const,
  color: "#f5f5f5",
  margin: "0 0 4px 0",
};

const statLabel = {
  fontSize: "10px",
  fontWeight: "600" as const,
  color: "rgba(255, 255, 255, 0.3)",
  letterSpacing: "1.5px",
  margin: "0",
};

const statDivider = {
  borderColor: "rgba(255, 255, 255, 0.06)",
  margin: "8px 0",
};

// ── Milestones ──

const milestoneCard = {
  backgroundColor: "#141414",
  borderRadius: "12px",
  padding: "8px 24px",
  border: "1px solid rgba(255, 255, 255, 0.06)",
};

const milestoneRow = {
  borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
  padding: "14px 0",
};

const milestoneRowLast = {
  padding: "14px 0",
};

const milestoneIconCol = {
  width: "32px",
  verticalAlign: "middle" as const,
};

const milestoneIcon = {
  fontSize: "16px",
  margin: "0",
  lineHeight: "1",
};

const milestoneContent = {
  verticalAlign: "middle" as const,
};

const milestoneName = {
  fontSize: "14px",
  fontWeight: "600" as const,
  color: "#f5f5f5",
  margin: "0",
};

const milestoneSub = {
  fontSize: "13px",
  color: "rgba(255, 255, 255, 0.35)",
  margin: "2px 0 0 0",
};

// ── Quote ──

const quoteSection = {
  textAlign: "center" as const,
};

const quoteMark = {
  fontSize: "48px",
  color: "rgba(255, 255, 255, 0.1)",
  margin: "0",
  lineHeight: "1",
  fontFamily: "Georgia, serif",
};

const quoteText = {
  fontSize: "15px",
  fontStyle: "italic" as const,
  color: "rgba(255, 255, 255, 0.55)",
  lineHeight: "24px",
  margin: "0 0 8px 0",
};

const quoteAuthor = {
  fontSize: "13px",
  color: "rgba(255, 255, 255, 0.3)",
  margin: "0",
  fontWeight: "600" as const,
};

// ── CTA ──

const ctaSection = {
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
