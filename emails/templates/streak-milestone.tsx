import {
  Text,
  Section,
  Row,
  Column,
  Hr,
} from "@react-email/components";
import * as React from "react";
import { EmailLayout } from "../components/EmailLayout";
import { PrimaryButton } from "../components/PrimaryButton";

const BASE_URL = "https://seemyhealth.ai";

export default function StreakMilestoneEmail() {
  return (
    <EmailLayout preview="You hit a {{streak_count}}-day streak!">

      {/* ── Fire banner ── */}
      <Section style={banner}>
        <Text style={fireIcon}>&#x1F525;</Text>
        <Text style={streakCount}>{"{{streak_count}}"}</Text>
        <Text style={streakLabel}>Day Streak!</Text>
      </Section>

      {/* ── Greeting ── */}
      <Text style={heading}>
        Unstoppable, {"{{first_name}}"}!
      </Text>

      <Text style={paragraph}>
        You've been consistent for <strong>{"{{streak_count}}"} days straight</strong> with
        your <strong>{"{{streak_category}}"}</strong> goal. That kind of
        dedication doesn't go unnoticed.
      </Text>

      <Hr style={divider} />

      {/* ── Streak details ── */}
      <Section style={streakCard}>
        <Section style={detailRow}>
          <Row>
            <Column style={detailIconCol}>
              <Text style={iconText}>&#x1F3AF;</Text>
            </Column>
            <Column>
              <Text style={detailLabel}>Goal</Text>
              <Text style={detailValue}>{"{{streak_goal}}"}</Text>
            </Column>
          </Row>
        </Section>

        <Section style={detailRow}>
          <Row>
            <Column style={detailIconCol}>
              <Text style={iconText}>&#x1F4C5;</Text>
            </Column>
            <Column>
              <Text style={detailLabel}>Started</Text>
              <Text style={detailValue}>{"{{streak_start_date}}"}</Text>
            </Column>
          </Row>
        </Section>

        <Section style={detailRow}>
          <Row>
            <Column style={detailIconCol}>
              <Text style={iconText}>&#x1F3C6;</Text>
            </Column>
            <Column>
              <Text style={detailLabel}>Personal Record</Text>
              <Text style={detailValue}>{"{{personal_record}}"} days</Text>
            </Column>
          </Row>
        </Section>

        <Section style={detailRow}>
          <Row>
            <Column style={detailIconCol}>
              <Text style={iconText}>&#x1F4AA;</Text>
            </Column>
            <Column>
              <Text style={detailLabel}>Average</Text>
              <Text style={detailValue}>{"{{avg_performance}}"}</Text>
            </Column>
          </Row>
        </Section>
      </Section>

      <Hr style={divider} />

      {/* ── Milestones ahead ── */}
      <Text style={sectionHeading}>Keep going!</Text>

      <Section style={milestoneRow}>
        <Row>
          <Column style={milestoneCheck}>
            <Text style={checkIcon}>&#x2705;</Text>
          </Column>
          <Column>
            <Text style={milestoneText}>
              <strong>7 days</strong> — First week down
            </Text>
          </Column>
        </Row>
      </Section>

      <Section style={milestoneRow}>
        <Row>
          <Column style={milestoneCheck}>
            <Text style={checkIcon}>{"{{milestone_14_icon}}"}</Text>
          </Column>
          <Column>
            <Text style={milestoneText}>
              <strong>14 days</strong> — Two weeks strong
            </Text>
          </Column>
        </Row>
      </Section>

      <Section style={milestoneRow}>
        <Row>
          <Column style={milestoneCheck}>
            <Text style={checkIcon}>{"{{milestone_30_icon}}"}</Text>
          </Column>
          <Column>
            <Text style={milestoneText}>
              <strong>30 days</strong> — Habit formed
            </Text>
          </Column>
        </Row>
      </Section>

      <Section style={milestoneRow}>
        <Row>
          <Column style={milestoneCheck}>
            <Text style={checkIcon}>{"{{milestone_60_icon}}"}</Text>
          </Column>
          <Column>
            <Text style={milestoneText}>
              <strong>60 days</strong> — Lifestyle change
            </Text>
          </Column>
        </Row>
      </Section>

      <Section style={milestoneRow}>
        <Row>
          <Column style={milestoneCheck}>
            <Text style={checkIcon}>{"{{milestone_100_icon}}"}</Text>
          </Column>
          <Column>
            <Text style={milestoneText}>
              <strong>100 days</strong> — Legend status
            </Text>
          </Column>
        </Row>
      </Section>

      <Hr style={divider} />

      {/* ── Motivation ── */}
      <Section style={quoteSection}>
        <Text style={quoteText}>
          "Success is the sum of small efforts, repeated day in and day out."
        </Text>
        <Text style={quoteAuthor}>— Robert Collier</Text>
      </Section>

      <Section style={ctaSection}>
        <PrimaryButton href={`${BASE_URL}/goals`}>
          Keep the Streak Alive
        </PrimaryButton>
      </Section>

    </EmailLayout>
  );
}

// ── Styles ──

const banner = {
  background: "linear-gradient(135deg, #7c2d12 0%, #c2410c 30%, #f97316 60%, #fb923c 100%)",
  borderRadius: "16px",
  padding: "36px 24px",
  textAlign: "center" as const,
  marginBottom: "24px",
};

const fireIcon = {
  fontSize: "48px",
  margin: "0",
  lineHeight: "1",
};

const streakCount = {
  fontSize: "56px",
  fontWeight: "bold" as const,
  color: "#ffffff",
  margin: "4px 0 0 0",
  lineHeight: "1",
};

const streakLabel = {
  fontSize: "18px",
  fontWeight: "bold" as const,
  color: "rgba(255, 255, 255, 0.85)",
  margin: "4px 0 0 0",
  textTransform: "uppercase" as const,
  letterSpacing: "2px",
};

const heading = {
  fontSize: "24px",
  fontWeight: "bold" as const,
  color: "#111827",
  margin: "0 0 8px 0",
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

// ── Streak card ──

const streakCard = {
  background: "linear-gradient(135deg, rgba(249,115,22,0.06) 0%, rgba(251,146,60,0.06) 100%)",
  borderRadius: "14px",
  padding: "24px",
  border: "1px solid rgba(249, 115, 22, 0.12)",
};

const detailRow = { marginBottom: "12px" };
const detailIconCol = { width: "32px", verticalAlign: "top" as const };

const iconText = {
  fontSize: "18px",
  margin: "0",
  lineHeight: "1",
};

const detailLabel = {
  fontSize: "11px",
  color: "#9ca3af",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
  margin: "0",
  fontWeight: "600" as const,
};

const detailValue = {
  fontSize: "15px",
  color: "#111827",
  margin: "2px 0 0 0",
  fontWeight: "500" as const,
};

// ── Milestones ──

const sectionHeading = {
  fontSize: "18px",
  fontWeight: "bold" as const,
  color: "#111827",
  margin: "0 0 16px 0",
};

const milestoneRow = { marginBottom: "10px" };

const milestoneCheck = {
  width: "28px",
  verticalAlign: "middle" as const,
};

const checkIcon = {
  fontSize: "16px",
  margin: "0",
  lineHeight: "1",
};

const milestoneText = {
  fontSize: "14px",
  color: "#374151",
  margin: "0",
  lineHeight: "22px",
};

// ── Quote ──

const quoteSection = {
  background: "linear-gradient(135deg, rgba(124,58,237,0.04) 0%, rgba(168,85,247,0.06) 100%)",
  borderRadius: "12px",
  padding: "24px",
  textAlign: "center" as const,
  border: "1px solid rgba(124, 58, 237, 0.08)",
  marginBottom: "24px",
};

const quoteText = {
  fontSize: "15px",
  fontStyle: "italic" as const,
  color: "#374151",
  lineHeight: "24px",
  margin: "0 0 8px 0",
};

const quoteAuthor = {
  fontSize: "13px",
  color: "#9ca3af",
  margin: "0",
  fontWeight: "600" as const,
};

const ctaSection = {
  textAlign: "center" as const,
};
