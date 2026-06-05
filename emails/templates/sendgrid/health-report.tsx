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

const IMAGES = {
  hero: `${CDN}/lifestyle-athlete/public`,
  trends: `${CDN}/scale-trend-tracking/public`,
  mood: `${CDN}/ring-one-sunset-meditation/public`,
  vitals: `${CDN}/hema-black-lab/public`,
  goals: `${CDN}/ring-fitness-body/public`,
  ringGold: `${CDN}/ring-gold-hands-portrait/public`,
  scaleBlack: `${CDN}/scale-black-nutritionist/public`,
  bpBlack: `${CDN}/bp-black-poster/public`,
  videoConsult: `${CDN}/app-video-consultation/public`,
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
          Headline Metrics, 3 across, top row
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

      <Section style={vitalsCard}>
        <Img
          src={IMAGES.vitals}
          width="560"
          alt="Vitals overview"
          style={cardTopImage}
        />
        <Section style={cardBody}>
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
        </Section>
      </Section>

      <Hr style={divider} />

      {/* ══════════════════════════════════════════════════════════
          Mood and Mental Health
          ══════════════════════════════════════════════════════════ */}
      <Text style={sectionLabel}>MIND AND MOOD</Text>

      <Section style={moodCard}>
        <Img
          src={IMAGES.mood}
          width="560"
          alt="Mind and mood"
          style={cardTopImage}
        />
        <Section style={cardBody}>
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
        </Section>
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

      {/* ══════════════════════════════════════════════════════════
          Ecosystem Cross-Sell
          ══════════════════════════════════════════════════════════ */}
      <Text style={sectionLabel}>THE ECOSYSTEM</Text>

      <Section style={ecosystemStrip}>
        <Row>
          <Column style={ecosystemCell}>
            <Img
              src={IMAGES.ringGold}
              width="160"
              alt="SeeMyHealth Ring"
              style={ecosystemImage}
            />
            <Text style={ecosystemBadge("#F97316")}>Ring</Text>
            <Text style={ecosystemName}>Smart Ring</Text>
            <Button href={`${BASE_URL}/products/ring`} style={ecosystemLink}>
              Explore
            </Button>
          </Column>
          <Column style={ecosystemCell}>
            <Img
              src={IMAGES.scaleBlack}
              width="160"
              alt="SeeMyHealth Scale"
              style={ecosystemImage}
            />
            <Text style={ecosystemBadge("#3B82F6")}>Scale</Text>
            <Text style={ecosystemName}>Smart Scale</Text>
            <Button href={`${BASE_URL}/products/scale`} style={ecosystemLink}>
              Explore
            </Button>
          </Column>
          <Column style={ecosystemCell}>
            <Img
              src={IMAGES.bpBlack}
              width="160"
              alt="SeeMyHealth BP Monitor"
              style={ecosystemImage}
            />
            <Text style={ecosystemBadge("#EF4444")}>BP</Text>
            <Text style={ecosystemName}>BP Monitor</Text>
            <Button href={`${BASE_URL}/products/bp-monitor`} style={ecosystemLink}>
              Explore
            </Button>
          </Column>
        </Row>
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
          <Button href={`${BASE_URL}/invite?ref={{user_id}}&name={{first_name}}`} style={referralButton}>
            Invite a Friend
          </Button>
        </Section>
      </Section>

      <Hr style={divider} />

      {/* ── Did You Know? ── */}
      <Section style={didYouKnowCard}>
        <Row>
          <Column style={didYouKnowImageCol}>
            <Img
              src={IMAGES.videoConsult}
              width="100"
              alt="Share with your doctor"
              style={didYouKnowImage}
            />
          </Column>
          <Column style={didYouKnowContent}>
            <Text style={didYouKnowHeading}>Did you know?</Text>
            <Text style={didYouKnowText}>
              Share your report with your doctor directly from the app.
              Tap any metric to generate a printable PDF.
            </Text>
          </Column>
        </Row>
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
  backgroundColor: "#000000",
};

const heroLabel = {
  fontSize: "11px",
  fontWeight: "600" as const,
  color: "#b3b3b3",
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
  color: "#a3a3a3",
  lineHeight: "26px",
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

// ── Card image + body pattern ──

const cardTopImage = {
  width: "100%",
  display: "block" as const,
  borderRadius: "12px 12px 0 0",
};

const cardBody = {
  backgroundColor: "#141414",
  padding: "20px",
  borderRadius: "0 0 12px 12px",
};

// ── Metrics ──

const metricsCard = {
  backgroundColor: "#141414",
  borderRadius: "12px",
  padding: "20px 8px",
  marginBottom: "8px",
  border: "1px solid #1a1a1a",
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
  color: "#5e5e5e",
  textTransform: "uppercase" as const,
  letterSpacing: "1.5px",
  margin: "6px 0 4px 0",
  fontWeight: "600" as const,
};

const metricDelta = {
  fontSize: "12px",
  color: "#8a8a8a",
  margin: "0",
  fontWeight: "500" as const,
};

// ── Goals ──

const goalRow = {
  marginBottom: "12px",
  backgroundColor: "#141414",
  borderRadius: "10px",
  padding: "16px",
  border: "1px solid #1a1a1a",
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
  color: "#6b6b6b",
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
  backgroundColor: "#1f1f1f",
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
  border: "1px solid #1a1a1a",
};

const vitalRow = {
  borderBottom: "1px solid #1a1a1a",
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
  color: "#8a8a8a",
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
  border: "1px solid #1a1a1a",
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
  color: "#5e5e5e",
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
  border: "1px solid #1a1a1a",
};

const challengeHeading = {
  fontSize: "18px",
  fontWeight: "700" as const,
  color: "#f5f5f5",
  margin: "0 0 6px 0",
};

const challengeText = {
  fontSize: "14px",
  color: "#6b6b6b",
  lineHeight: "22px",
  margin: "0",
};

const challengeButton = {
  backgroundColor: "#222222",
  color: "#f5f5f5",
  padding: "10px 24px",
  borderRadius: "50px",
  fontSize: "12px",
  fontWeight: "600" as const,
  textDecoration: "none",
  display: "inline-block",
  letterSpacing: "0.5px",
  textTransform: "uppercase" as const,
  border: "1px solid #222222",
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
  color: "#6b6b6b",
  lineHeight: "22px",
  margin: "0",
  textAlign: "center" as const,
};

const referralButton = {
  backgroundColor: "#222222",
  color: "#f5f5f5",
  padding: "10px 24px",
  borderRadius: "50px",
  fontSize: "12px",
  fontWeight: "600" as const,
  textDecoration: "none",
  display: "inline-block",
  letterSpacing: "0.5px",
  textTransform: "uppercase" as const,
  border: "1px solid #222222",
};

const ctaSection = {
  textAlign: "center" as const,
};

const ctaText = {
  fontSize: "15px",
  color: "#8a8a8a",
  lineHeight: "24px",
  margin: "0 0 4px 0",
  textAlign: "center" as const,
};

const ctaCenter = {
  textAlign: "center" as const,
  margin: "20px 0 0 0",
};

// ── Ecosystem Cross-Sell ──

const ecosystemStrip = {
  backgroundColor: "#141414",
  borderRadius: "12px",
  padding: "24px 12px",
  border: "1px solid #1a1a1a",
  textAlign: "center" as const,
};

const ecosystemCell = {
  width: "33.33%",
  textAlign: "center" as const,
  verticalAlign: "top" as const,
  padding: "0 4px",
};

const ecosystemImage = {
  width: "100%",
  display: "block" as const,
  borderRadius: "8px",
  marginBottom: "10px",
};

const ecosystemBadge = (color: string) => ({
  display: "inline-block" as const,
  backgroundColor: color,
  color: "#ffffff",
  fontSize: "9px",
  fontWeight: "700" as const,
  letterSpacing: "1px",
  textTransform: "uppercase" as const,
  padding: "3px 8px",
  borderRadius: "4px",
  margin: "0 0 6px 0",
  lineHeight: "1.3",
});

const ecosystemName = {
  fontSize: "13px",
  fontWeight: "600" as const,
  color: "#f5f5f5",
  margin: "0 0 8px 0",
};

const ecosystemLink = {
  color: "#8a8a8a",
  fontSize: "11px",
  fontWeight: "600" as const,
  textDecoration: "underline",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
  backgroundColor: "transparent",
  border: "none",
  padding: "0",
};

// ── Did You Know ──

const didYouKnowCard = {
  backgroundColor: "#141414",
  borderRadius: "12px",
  padding: "24px 20px",
  border: "1px solid #1a1a1a",
};

const didYouKnowImageCol = {
  width: "100px",
  verticalAlign: "top" as const,
  paddingRight: "16px",
};

const didYouKnowImage = {
  width: "100px",
  display: "block" as const,
  borderRadius: "8px",
};

const didYouKnowContent = {
  verticalAlign: "top" as const,
};

const didYouKnowHeading = {
  fontSize: "15px",
  fontWeight: "700" as const,
  color: "#f5f5f5",
  margin: "0 0 6px 0",
};

const didYouKnowText = {
  fontSize: "13px",
  color: "#8a8a8a",
  lineHeight: "20px",
  margin: "0",
};
