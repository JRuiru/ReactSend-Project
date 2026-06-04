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
  hero: `${CDN}/lifestyle-athlete/public`,
  trends: `${CDN}/scale-trend-tracking/public`,
  moodBg: `${CDN}/ring-one-sunset-meditation/public`,
  vitalsBg: `${CDN}/hema-black-lab/public`,
  goalsBg: `${CDN}/ring-fitness-body/public`,
};

export default function HealthReportEmail() {
  return (
    <EmailLayout preview="Your {{report_period}} health report is ready">

      {/* ── Hero ── */}
      <Section style={heroSection}>
        <Img
          src={IMAGES.hero}
          width="560"
          alt="Your health report"
          style={heroImage}
        />
        <Section style={heroOverlay} className="force-white">
          <Text style={heroLabel}>YOUR HEALTH REPORT</Text>
          <Text style={heroPeriod} className="hero-period">{"{{report_period}}"}</Text>
        </Section>
      </Section>

      {/* ── Greeting ── */}
      <Text style={greeting}>
        Hey {"{{first_name}}"}, here is how your {"{{report_period_label}}"} went.
      </Text>

      <Hr style={divider} />

      {/* ══════════════════════════════════════════════════════════
          Headline Metrics — 3 across, top row
          ══════════════════════════════════════════════════════════ */}
      <Text style={sectionLabel}>AT A GLANCE</Text>

      <Section style={metricsCard}>
        <Row>
          <Column style={metricCell}>
            <Text style={metricValue} className="metric-value">{"{{avg_steps}}"}</Text>
            <Text style={metricLabel} className="metric-label">AVG STEPS</Text>
            <Text style={metricDelta} className="metric-delta">{"{{steps_change}}"}</Text>
          </Column>
          <Column style={metricCell}>
            <Text style={metricValue} className="metric-value">{"{{avg_sleep}}"}</Text>
            <Text style={metricLabel} className="metric-label">AVG SLEEP</Text>
            <Text style={metricDelta} className="metric-delta">{"{{sleep_change}}"}</Text>
          </Column>
          <Column style={metricCell}>
            <Text style={metricValue} className="metric-value">{"{{avg_heart_rate}}"}</Text>
            <Text style={metricLabel} className="metric-label">RESTING HR</Text>
            <Text style={metricDelta} className="metric-delta">{"{{hr_change}}"}</Text>
          </Column>
        </Row>
      </Section>

      <Section style={metricsCard}>
        <Row>
          <Column style={metricCell}>
            <Text style={metricValue} className="metric-value">{"{{avg_calories}}"}</Text>
            <Text style={metricLabel} className="metric-label">CAL/DAY</Text>
            <Text style={metricDelta} className="metric-delta">{"{{cal_change}}"}</Text>
          </Column>
          <Column style={metricCell}>
            <Text style={metricValue} className="metric-value">{"{{avg_water}}"}</Text>
            <Text style={metricLabel} className="metric-label">WATER/DAY</Text>
            <Text style={metricDelta} className="metric-delta">{"{{water_change}}"}</Text>
          </Column>
          <Column style={metricCell}>
            <Text style={metricValue} className="metric-value">{"{{workouts}}"}</Text>
            <Text style={metricLabel} className="metric-label">WORKOUTS</Text>
            <Text style={metricDelta} className="metric-delta">{"{{workout_change}}"}</Text>
          </Column>
        </Row>
      </Section>

      <Hr style={divider} />

      {/* ══════════════════════════════════════════════════════════
          Goals Progress
          ══════════════════════════════════════════════════════════ */}
      <Text style={sectionLabel}>YOUR GOALS</Text>

      <Section style={goalRow}>
        <Row>
          <Column style={goalContent}>
            <Text style={goalName}>{"{{goal_1_name}}"}</Text>
            <Text style={goalProgress}>{"{{goal_1_progress}}"} of {"{{goal_1_target}}"}</Text>
          </Column>
          <Column style={goalPercentCol}>
            <Text style={goalPercent} className="goal-percent">{"{{goal_1_percent}}"}</Text>
          </Column>
        </Row>
        {/* Progress bar */}
        <Section style={progressBarBg}>
          <Section style={progressBarFill("{{goal_1_percent}}")} />
        </Section>
      </Section>

      <Section style={goalRow}>
        <Row>
          <Column style={goalContent}>
            <Text style={goalName}>{"{{goal_2_name}}"}</Text>
            <Text style={goalProgress}>{"{{goal_2_progress}}"} of {"{{goal_2_target}}"}</Text>
          </Column>
          <Column style={goalPercentCol}>
            <Text style={goalPercent} className="goal-percent">{"{{goal_2_percent}}"}</Text>
          </Column>
        </Row>
        <Section style={progressBarBg}>
          <Section style={progressBarFill("{{goal_2_percent}}")} />
        </Section>
      </Section>

      <Section style={goalRow}>
        <Row>
          <Column style={goalContent}>
            <Text style={goalName}>{"{{goal_3_name}}"}</Text>
            <Text style={goalProgress}>{"{{goal_3_progress}}"} of {"{{goal_3_target}}"}</Text>
          </Column>
          <Column style={goalPercentCol}>
            <Text style={goalPercent} className="goal-percent">{"{{goal_3_percent}}"}</Text>
          </Column>
        </Row>
        <Section style={progressBarBg}>
          <Section style={progressBarFill("{{goal_3_percent}}")} />
        </Section>
      </Section>

      <Hr style={divider} />

      {/* ══════════════════════════════════════════════════════════
          Vitals Summary
          ══════════════════════════════════════════════════════════ */}
      <Text style={sectionLabel}>VITALS</Text>

      <Section style={vitalsCard} className="force-white">
        <div style={bgImageWrapper(IMAGES.vitalsBg)}>
          <div style={bgOverlay}>
        <Section style={vitalRow}>
          <Row>
            <Column style={vitalLabelCol}>
              <Text style={vitalLabelText}>Blood Pressure</Text>
            </Column>
            <Column style={vitalValueCol}>
              <Text style={vitalValueText}>{"{{avg_bp}}"}</Text>
            </Column>
          </Row>
        </Section>

        <Section style={vitalRow}>
          <Row>
            <Column style={vitalLabelCol}>
              <Text style={vitalLabelText}>HRV</Text>
            </Column>
            <Column style={vitalValueCol}>
              <Text style={vitalValueText}>{"{{avg_hrv}}"} ms</Text>
            </Column>
          </Row>
        </Section>

        <Section style={vitalRow}>
          <Row>
            <Column style={vitalLabelCol}>
              <Text style={vitalLabelText}>SpO2</Text>
            </Column>
            <Column style={vitalValueCol}>
              <Text style={vitalValueText}>{"{{avg_spo2}}"}%</Text>
            </Column>
          </Row>
        </Section>

        <Section style={vitalRowLast}>
          <Row>
            <Column style={vitalLabelCol}>
              <Text style={vitalLabelText}>Weight</Text>
            </Column>
            <Column style={vitalValueCol}>
              <Text style={vitalValueText}>{"{{current_weight}}"}</Text>
            </Column>
          </Row>
        </Section>
          </div>
        </div>
      </Section>

      <Hr style={divider} />

      {/* ══════════════════════════════════════════════════════════
          Mood and Mental Health
          ══════════════════════════════════════════════════════════ */}
      <Text style={sectionLabel}>MIND AND MOOD</Text>

      <Section style={moodCard} className="force-white">
        {/* Background image with overlay */}
        <div style={bgImageWrapper(IMAGES.moodBg)}>
          <div style={bgOverlay}>
            <Row>
              <Column style={moodCell}>
                <Text style={moodEmoji} className="mood-emoji">{"{{avg_mood_emoji}}"}</Text>
                <Text style={moodCellLabel}>Average Mood</Text>
                <Text style={moodCellValue}>{"{{avg_mood}}"}</Text>
              </Column>
              <Column style={moodCell}>
                <Text style={moodNumber} className="mood-number">{"{{journal_count}}"}</Text>
                <Text style={moodCellLabel}>Journal Entries</Text>
              </Column>
              <Column style={moodCell}>
                <Text style={moodNumber} className="mood-number">{"{{mood_streak}}"}</Text>
                <Text style={moodCellLabel}>Day Streak</Text>
              </Column>
            </Row>
          </div>
        </div>
      </Section>

      <Hr style={divider} />

      {/* ── Trends image ── */}
      <Img
        src={IMAGES.trends}
        width="480"
        alt="Your health trends"
        style={trendsImage}
      />

      {/* ── Challenge invite ── */}
      <Section style={challengeCard}>
        <Text style={challengeHeading}>Join this week's challenge</Text>
        <Text style={challengeText}>
          {"{{active_challenge_count}}"} challenges are running right now.
          Compete with friends and stay motivated.
        </Text>
        <Section style={ctaCenter}>
          <Button href={`${BASE_URL}/challenges`} style={challengeButton}>
            Browse Challenges
          </Button>
        </Section>
      </Section>

      <Hr style={divider} />

      {/* ── Referral ── */}
      <Section style={referralSection}>
        <Text style={referralHeading}>Share your progress</Text>
        <Text style={referralText}>
          Invite a friend to SeeMyHealth and track your health journeys
          together.
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
        <Text style={ctaText}>
          Your full charts, trends, and personalized insights are waiting in the app.
        </Text>
        <Section style={ctaCenter}>
          <PrimaryButton href={`${BASE_URL}/app`}>
            Open the App
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

const heroPeriod = {
  fontSize: "26px",
  fontWeight: "700" as const,
  color: "#ffffff",
  margin: "0",
  letterSpacing: "-0.3px",
};

const greeting = {
  fontSize: "16px",
  color: "rgba(255, 255, 255, 0.6)",
  lineHeight: "26px",
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

// ── Background image helpers ──

const bgImageWrapper = (imageUrl: string) => ({
  backgroundImage: `url(${imageUrl})`,
  backgroundSize: "cover" as const,
  backgroundPosition: "center" as const,
  borderRadius: "12px",
  overflow: "hidden" as const,
});

const bgOverlay = {
  backgroundColor: "rgba(0, 0, 0, 0.75)",
  padding: "24px 20px",
};

// ── Metrics ──

const metricsCard = {
  backgroundColor: "#141414",
  borderRadius: "12px",
  padding: "20px 8px",
  marginBottom: "8px",
  border: "1px solid rgba(255, 255, 255, 0.06)",
  textAlign: "center" as const,
};

const metricCell = {
  width: "33.33%",
  textAlign: "center" as const,
};

const metricValue = {
  fontSize: "24px",
  fontWeight: "700" as const,
  color: "#f5f5f5",
  margin: "0",
  lineHeight: "1.2",
};

const metricLabel = {
  fontSize: "10px",
  color: "rgba(255, 255, 255, 0.35)",
  textTransform: "uppercase" as const,
  letterSpacing: "1.5px",
  margin: "6px 0 4px 0",
  fontWeight: "600" as const,
};

const metricDelta = {
  fontSize: "12px",
  color: "rgba(255, 255, 255, 0.5)",
  margin: "0",
  fontWeight: "500" as const,
};

// ── Goals ──

const goalRow = {
  marginBottom: "12px",
  backgroundColor: "#141414",
  borderRadius: "10px",
  padding: "16px",
  border: "1px solid rgba(255, 255, 255, 0.06)",
};

const goalContent = {
  verticalAlign: "middle" as const,
};

const goalName = {
  fontSize: "14px",
  fontWeight: "600" as const,
  color: "#f5f5f5",
  margin: "0",
};

const goalProgress = {
  fontSize: "12px",
  color: "rgba(255, 255, 255, 0.4)",
  margin: "2px 0 0 0",
};

const goalPercentCol = {
  width: "60px",
  textAlign: "right" as const,
  verticalAlign: "middle" as const,
};

const goalPercent = {
  fontSize: "16px",
  fontWeight: "700" as const,
  color: "#f5f5f5",
  margin: "0",
};

const progressBarBg = {
  backgroundColor: "rgba(255, 255, 255, 0.08)",
  borderRadius: "4px",
  height: "6px",
  marginTop: "12px",
  overflow: "hidden" as const,
};

const progressBarFill = (_percent: string) => ({
  backgroundColor: "#ffffff",
  borderRadius: "4px",
  height: "6px",
  width: "80%", // Static fallback, actual percent set by template engine
});

// ── Vitals ──

const vitalsCard = {
  borderRadius: "12px",
  overflow: "hidden" as const,
};

const vitalRow = {
  borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
  padding: "14px 0",
};

const vitalRowLast = {
  padding: "14px 0",
};

const vitalLabelCol = {
  verticalAlign: "middle" as const,
};

const vitalLabelText = {
  fontSize: "14px",
  color: "rgba(255, 255, 255, 0.5)",
  margin: "0",
};

const vitalValueCol = {
  textAlign: "right" as const,
  verticalAlign: "middle" as const,
};

const vitalValueText = {
  fontSize: "15px",
  fontWeight: "600" as const,
  color: "#f5f5f5",
  margin: "0",
};

// ── Mood ──

const moodCard = {
  borderRadius: "12px",
  overflow: "hidden" as const,
  textAlign: "center" as const,
};

const moodCell = {
  width: "33.33%",
  textAlign: "center" as const,
};

const moodEmoji = {
  fontSize: "32px",
  margin: "0 0 6px 0",
  lineHeight: "1",
};

const moodNumber = {
  fontSize: "28px",
  fontWeight: "700" as const,
  color: "#f5f5f5",
  margin: "0 0 6px 0",
  lineHeight: "1",
};

const moodCellLabel = {
  fontSize: "10px",
  color: "rgba(255, 255, 255, 0.35)",
  textTransform: "uppercase" as const,
  letterSpacing: "1px",
  margin: "0 0 2px 0",
  fontWeight: "600" as const,
};

const moodCellValue = {
  fontSize: "14px",
  fontWeight: "600" as const,
  color: "#f5f5f5",
  margin: "0",
};

// ── Trends and CTA ──

const trendsImage = {
  width: "100%",
  display: "block" as const,
  borderRadius: "12px",
  marginBottom: "24px",
};

// ── Challenge ──

const challengeCard = {
  backgroundColor: "#141414",
  borderRadius: "12px",
  padding: "28px 24px",
  textAlign: "center" as const,
  border: "1px solid rgba(255, 255, 255, 0.06)",
};

const challengeHeading = {
  fontSize: "18px",
  fontWeight: "700" as const,
  color: "#f5f5f5",
  margin: "0 0 6px 0",
};

const challengeText = {
  fontSize: "14px",
  color: "rgba(255, 255, 255, 0.45)",
  lineHeight: "22px",
  margin: "0",
};

const challengeButton = {
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

// ── Referral ──

const referralSection = {
  textAlign: "center" as const,
};

const referralHeading = {
  fontSize: "18px",
  fontWeight: "700" as const,
  color: "#f5f5f5",
  margin: "0 0 6px 0",
  textAlign: "center" as const,
};

const referralText = {
  fontSize: "14px",
  color: "rgba(255, 255, 255, 0.45)",
  lineHeight: "22px",
  margin: "0",
  textAlign: "center" as const,
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

const ctaSection = {
  textAlign: "center" as const,
};

const ctaText = {
  fontSize: "15px",
  color: "rgba(255, 255, 255, 0.5)",
  lineHeight: "24px",
  margin: "0 0 4px 0",
  textAlign: "center" as const,
};

const ctaCenter = {
  textAlign: "center" as const,
  margin: "20px 0 0 0",
};
