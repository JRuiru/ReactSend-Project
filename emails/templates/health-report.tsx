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

export default function HealthReportEmail() {
  return (
    <EmailLayout preview="Your {{report_period}} health report is ready">

      {/* ── Report banner ── */}
      <Section style={banner}>
        <Text style={bannerIcon}>&#x1F4CA;</Text>
        <Text style={bannerTitle}>Your Health Report</Text>
        <Text style={bannerPeriod}>{"{{report_period}}"}</Text>
      </Section>

      <Text style={greeting}>
        Hey {"{{first_name}}"}, here's how your {"{{report_period_label}}"} went.
      </Text>

      <Hr style={divider} />

      {/* ══════════════════════════════════════════════════════════
          Highlights
          ══════════════════════════════════════════════════════════ */}
      <Text style={sectionHeading}>Highlights</Text>

      <Section style={highlightCard}>
        <Row>
          <Column style={highlightCell}>
            <Text style={highlightValue}>{"{{avg_steps}}"}</Text>
            <Text style={highlightLabel}>Avg Steps</Text>
            <Text style={highlightDelta("{{steps_trend}}")}>{"{{steps_change}}"}</Text>
          </Column>
          <Column style={highlightCell}>
            <Text style={highlightValue}>{"{{avg_sleep}}"}</Text>
            <Text style={highlightLabel}>Avg Sleep</Text>
            <Text style={highlightDelta("{{sleep_trend}}")}>{"{{sleep_change}}"}</Text>
          </Column>
          <Column style={highlightCell}>
            <Text style={highlightValue}>{"{{avg_heart_rate}}"}</Text>
            <Text style={highlightLabel}>Avg Heart Rate</Text>
            <Text style={highlightDelta("{{hr_trend}}")}>{"{{hr_change}}"}</Text>
          </Column>
        </Row>
      </Section>

      <Section style={highlightCard}>
        <Row>
          <Column style={highlightCell}>
            <Text style={highlightValue}>{"{{avg_calories}}"}</Text>
            <Text style={highlightLabel}>Calories/Day</Text>
            <Text style={highlightDelta("{{cal_trend}}")}>{"{{cal_change}}"}</Text>
          </Column>
          <Column style={highlightCell}>
            <Text style={highlightValue}>{"{{avg_water}}"}</Text>
            <Text style={highlightLabel}>Water/Day</Text>
            <Text style={highlightDelta("{{water_trend}}")}>{"{{water_change}}"}</Text>
          </Column>
          <Column style={highlightCell}>
            <Text style={highlightValue}>{"{{workouts}}"}</Text>
            <Text style={highlightLabel}>Workouts</Text>
            <Text style={highlightDelta("{{workout_trend}}")}>{"{{workout_change}}"}</Text>
          </Column>
        </Row>
      </Section>

      <Hr style={divider} />

      {/* ══════════════════════════════════════════════════════════
          Goals Progress
          ══════════════════════════════════════════════════════════ */}
      <Text style={sectionHeading}>Goals progress</Text>

      <Section style={goalRow}>
        <Row>
          <Column style={goalIcon}>
            <Text style={iconText}>&#x1F3C3;</Text>
          </Column>
          <Column style={goalContent}>
            <Text style={goalName}>{"{{goal_1_name}}"}</Text>
            <Text style={goalProgress}>{"{{goal_1_progress}}"} of {"{{goal_1_target}}"}</Text>
          </Column>
          <Column style={goalStatus}>
            <Text style={goalPercent}>{"{{goal_1_percent}}"}</Text>
          </Column>
        </Row>
      </Section>

      <Section style={goalRow}>
        <Row>
          <Column style={goalIcon}>
            <Text style={iconText}>&#x1F634;</Text>
          </Column>
          <Column style={goalContent}>
            <Text style={goalName}>{"{{goal_2_name}}"}</Text>
            <Text style={goalProgress}>{"{{goal_2_progress}}"} of {"{{goal_2_target}}"}</Text>
          </Column>
          <Column style={goalStatus}>
            <Text style={goalPercent}>{"{{goal_2_percent}}"}</Text>
          </Column>
        </Row>
      </Section>

      <Section style={goalRow}>
        <Row>
          <Column style={goalIcon}>
            <Text style={iconText}>&#x1F4AA;</Text>
          </Column>
          <Column style={goalContent}>
            <Text style={goalName}>{"{{goal_3_name}}"}</Text>
            <Text style={goalProgress}>{"{{goal_3_progress}}"} of {"{{goal_3_target}}"}</Text>
          </Column>
          <Column style={goalStatus}>
            <Text style={goalPercent}>{"{{goal_3_percent}}"}</Text>
          </Column>
        </Row>
      </Section>

      <Hr style={divider} />

      {/* ══════════════════════════════════════════════════════════
          Vitals Summary
          ══════════════════════════════════════════════════════════ */}
      <Text style={sectionHeading}>Vitals summary</Text>

      <Section style={vitalRow}>
        <Row>
          <Column style={vitalLabel}>
            <Text style={vitalLabelText}>Blood Pressure</Text>
          </Column>
          <Column style={vitalValue}>
            <Text style={vitalValueText}>{"{{avg_bp}}"}</Text>
          </Column>
        </Row>
      </Section>

      <Section style={vitalRow}>
        <Row>
          <Column style={vitalLabel}>
            <Text style={vitalLabelText}>Resting Heart Rate</Text>
          </Column>
          <Column style={vitalValue}>
            <Text style={vitalValueText}>{"{{resting_hr}}"} bpm</Text>
          </Column>
        </Row>
      </Section>

      <Section style={vitalRow}>
        <Row>
          <Column style={vitalLabel}>
            <Text style={vitalLabelText}>HRV</Text>
          </Column>
          <Column style={vitalValue}>
            <Text style={vitalValueText}>{"{{avg_hrv}}"} ms</Text>
          </Column>
        </Row>
      </Section>

      <Section style={vitalRow}>
        <Row>
          <Column style={vitalLabel}>
            <Text style={vitalLabelText}>SpO2</Text>
          </Column>
          <Column style={vitalValue}>
            <Text style={vitalValueText}>{"{{avg_spo2}}"}%</Text>
          </Column>
        </Row>
      </Section>

      <Section style={vitalRow}>
        <Row>
          <Column style={vitalLabel}>
            <Text style={vitalLabelText}>Weight</Text>
          </Column>
          <Column style={vitalValue}>
            <Text style={vitalValueText}>{"{{current_weight}}"}</Text>
          </Column>
        </Row>
      </Section>

      <Hr style={divider} />

      {/* ══════════════════════════════════════════════════════════
          Mood & Mental Health
          ══════════════════════════════════════════════════════════ */}
      <Text style={sectionHeading}>Mood &amp; mental health</Text>

      <Section style={moodCard}>
        <Row>
          <Column style={moodStatCell}>
            <Text style={moodEmoji}>{"{{avg_mood_emoji}}"}</Text>
            <Text style={moodLabel}>Average Mood</Text>
            <Text style={moodValue}>{"{{avg_mood}}"}</Text>
          </Column>
          <Column style={moodStatCell}>
            <Text style={moodEmoji}>&#x1F4DD;</Text>
            <Text style={moodLabel}>Journal Entries</Text>
            <Text style={moodValue}>{"{{journal_count}}"}</Text>
          </Column>
          <Column style={moodStatCell}>
            <Text style={moodEmoji}>&#x1F525;</Text>
            <Text style={moodLabel}>Check-in Streak</Text>
            <Text style={moodValue}>{"{{mood_streak}}"} days</Text>
          </Column>
        </Row>
      </Section>

      <Hr style={divider} />

      {/* ── CTA ── */}
      <Section style={finalSection}>
        <Text style={finalText}>
          View your full report with charts, trends, and detailed breakdowns
          in the app.
        </Text>
        <Section style={ctaSection}>
          <PrimaryButton href={`${BASE_URL}/reports/{{report_id}}`}>
            View Full Report
          </PrimaryButton>
        </Section>
      </Section>

    </EmailLayout>
  );
}

// ── Styles ──

const banner = {
  background: "linear-gradient(135deg, #1a0533 0%, #4c1d95 40%, #7c3aed 70%, #a855f7 100%)",
  borderRadius: "16px",
  padding: "36px 24px",
  textAlign: "center" as const,
  marginBottom: "24px",
};

const bannerIcon = {
  fontSize: "40px",
  margin: "0 0 8px 0",
  lineHeight: "1",
};

const bannerTitle = {
  fontSize: "26px",
  fontWeight: "bold" as const,
  color: "#ffffff",
  margin: "0 0 4px 0",
};

const bannerPeriod = {
  fontSize: "14px",
  color: "rgba(255, 255, 255, 0.7)",
  margin: "0",
};

const greeting = {
  fontSize: "16px",
  color: "#374151",
  lineHeight: "26px",
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

// ── Highlights ──

const highlightCard = {
  background: "linear-gradient(135deg, rgba(124,58,237,0.04) 0%, rgba(168,85,247,0.06) 100%)",
  borderRadius: "12px",
  padding: "20px 12px",
  marginBottom: "8px",
  border: "1px solid rgba(124, 58, 237, 0.08)",
  textAlign: "center" as const,
};

const highlightCell = {
  width: "33.33%",
  textAlign: "center" as const,
};

const highlightValue = {
  fontSize: "24px",
  fontWeight: "bold" as const,
  color: "#7c3aed",
  margin: "0",
  lineHeight: "1.2",
};

const highlightLabel = {
  fontSize: "11px",
  color: "#9ca3af",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
  margin: "4px 0 2px 0",
  fontWeight: "600" as const,
};

// Trend text — SendGrid will pass "up" or "down", displayed as-is
const highlightDelta = (_trend: string) => ({
  fontSize: "12px",
  color: "#6b7280",
  margin: "0",
  fontWeight: "500" as const,
});

// ── Goals ──

const goalRow = {
  marginBottom: "12px",
  background: "rgba(124, 58, 237, 0.03)",
  borderRadius: "10px",
  padding: "14px 16px",
};

const goalIcon = {
  width: "32px",
  verticalAlign: "middle" as const,
};

const iconText = {
  fontSize: "20px",
  margin: "0",
  lineHeight: "1",
};

const goalContent = {
  verticalAlign: "middle" as const,
  paddingLeft: "8px",
};

const goalName = {
  fontSize: "14px",
  fontWeight: "bold" as const,
  color: "#111827",
  margin: "0",
};

const goalProgress = {
  fontSize: "12px",
  color: "#9ca3af",
  margin: "2px 0 0 0",
};

const goalStatus = {
  width: "60px",
  textAlign: "right" as const,
  verticalAlign: "middle" as const,
};

const goalPercent = {
  fontSize: "16px",
  fontWeight: "bold" as const,
  color: "#7c3aed",
  margin: "0",
};

// ── Vitals ──

const vitalRow = {
  marginBottom: "8px",
  borderBottom: "1px solid rgba(124, 58, 237, 0.06)",
  paddingBottom: "8px",
};

const vitalLabel = {
  verticalAlign: "middle" as const,
};

const vitalLabelText = {
  fontSize: "14px",
  color: "#6b7280",
  margin: "0",
};

const vitalValue = {
  textAlign: "right" as const,
  verticalAlign: "middle" as const,
};

const vitalValueText = {
  fontSize: "15px",
  fontWeight: "bold" as const,
  color: "#111827",
  margin: "0",
};

// ── Mood ──

const moodCard = {
  background: "linear-gradient(135deg, rgba(124,58,237,0.04) 0%, rgba(168,85,247,0.06) 100%)",
  borderRadius: "12px",
  padding: "20px 12px",
  border: "1px solid rgba(124, 58, 237, 0.08)",
  textAlign: "center" as const,
};

const moodStatCell = {
  width: "33.33%",
  textAlign: "center" as const,
};

const moodEmoji = {
  fontSize: "28px",
  margin: "0 0 4px 0",
  lineHeight: "1",
};

const moodLabel = {
  fontSize: "11px",
  color: "#9ca3af",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
  margin: "0 0 2px 0",
  fontWeight: "600" as const,
};

const moodValue = {
  fontSize: "15px",
  fontWeight: "bold" as const,
  color: "#111827",
  margin: "0",
};

// ── Final ──

const finalSection = {
  textAlign: "center" as const,
};

const finalText = {
  fontSize: "14px",
  color: "#6b7280",
  lineHeight: "22px",
  margin: "0",
};

const ctaSection = {
  textAlign: "center" as const,
  margin: "20px 0 0 0",
};
