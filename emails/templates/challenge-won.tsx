import {
  Text,
  Section,
  Img,
  Row,
  Column,
  Hr,
  Link,
} from "@react-email/components";
import * as React from "react";
import { EmailLayout } from "../components/EmailLayout";
import { PrimaryButton } from "../components/PrimaryButton";

const CDN = "https://imagedelivery.net/NnC2JvU8j4bgBbmedVhjJg";
const BASE_URL = "https://seemyhealth.ai";

const IMAGES = {
  hero: `${CDN}/lifestyle-athlete/public`,
};

export default function ChallengeWonEmail() {
  return (
    <EmailLayout preview="You won the {{challenge_name}} challenge!">

      {/* ── Hero ── */}
      <Section style={heroSection}>
        <Img
          src={IMAGES.hero}
          width="560"
          alt="Challenge champion"
          style={heroImage}
        />
        <Section style={heroOverlay} className="force-white">
          <Text style={heroLabel}>CHALLENGE CHAMPION</Text>
          <Text style={heroTitle}>You did it.</Text>
        </Section>
      </Section>

      {/* ── Greeting ── */}
      <Text style={heading}>
        Congrats, {"{{first_name}}"}.
      </Text>
      <Text style={paragraph}>
        You crushed the <strong style={{ color: "#f5f5f5" }}>{"{{challenge_name}}"}</strong> challenge
        and came out on top. Your dedication is paying off.
      </Text>

      <Hr style={divider} />

      {/* ══════════════════════════════════════════════════════════
          Results Card
          ══════════════════════════════════════════════════════════ */}
      <Text style={sectionLabel}>YOUR RESULTS</Text>

      <Section style={resultsCard}>
        <Text style={categoryBadge}>{"{{challenge_category}}"}</Text>
        <Text style={challengeName}>{"{{challenge_name}}"}</Text>
        <Text style={challengeType}>{"{{challenge_type}}"} · {"{{goal_type}}"}</Text>

        <Hr style={cardDivider} />

        <Section style={statsGrid}>
          <Row>
            <Column style={statCell}>
              <Text style={statValue}>{"{{final_rank}}"}</Text>
              <Text style={statLabel}>FINAL RANK</Text>
            </Column>
            <Column style={statCell}>
              <Text style={statValue}>{"{{your_score}}"}</Text>
              <Text style={statLabel}>YOUR SCORE</Text>
            </Column>
            <Column style={statCell}>
              <Text style={statValue}>{"{{total_participants}}"}</Text>
              <Text style={statLabel}>PARTICIPANTS</Text>
            </Column>
          </Row>
        </Section>

        <Hr style={cardDivider} />

        <Section style={dateRow}>
          <Row>
            <Column style={dateCell}>
              <Text style={dateLabel}>STARTED</Text>
              <Text style={dateValue}>{"{{start_date}}"}</Text>
            </Column>
            <Column style={dateCell}>
              <Text style={dateLabel}>ENDED</Text>
              <Text style={dateValue}>{"{{end_date}}"}</Text>
            </Column>
            <Column style={dateCell}>
              <Text style={dateLabel}>DURATION</Text>
              <Text style={dateValue}>{"{{duration}}"}</Text>
            </Column>
          </Row>
        </Section>
      </Section>

      <Hr style={divider} />

      {/* ══════════════════════════════════════════════════════════
          Achievement Earned
          ══════════════════════════════════════════════════════════ */}
      <Section style={achievementCard} className="force-white">
        <div style={achievementBg}>
          <div style={achievementOverlay}>
            <Text style={achievementEmoji}>&#x1F31F;</Text>
            <Text style={achievementLabel}>ACHIEVEMENT UNLOCKED</Text>
            <Text style={achievementName}>{"{{achievement_name}}"}</Text>
            <Text style={achievementDesc}>
              This badge is now on your profile for everyone to see.
            </Text>
          </div>
        </div>
      </Section>

      <Hr style={divider} />

      {/* ══════════════════════════════════════════════════════════
          Your Journey Stats
          ══════════════════════════════════════════════════════════ */}
      <Text style={sectionLabel}>YOUR JOURNEY</Text>

      <Section style={journeyCard}>
        <Row>
          <Column style={journeyCell}>
            <Text style={journeyValue}>{"{{personal_best}}"}</Text>
            <Text style={journeyLabel}>PERSONAL BEST</Text>
          </Column>
          <Column style={journeyCell}>
            <Text style={journeyValue}>{"{{longest_streak}}"} days</Text>
            <Text style={journeyLabel}>LONGEST STREAK</Text>
          </Column>
          <Column style={journeyCell}>
            <Text style={journeyValue}>{"{{improvement}}"}</Text>
            <Text style={journeyLabel}>IMPROVEMENT</Text>
          </Column>
        </Row>
      </Section>

      <Hr style={divider} />

      {/* ── Share ── */}
      <Section style={shareSection} className="force-white">
        <Text style={shareHeading}>Share your win</Text>
        <Text style={shareText}>
          Let your friends know you are a challenge champion.
        </Text>
        <Section style={shareLinks}>
          <Row>
            <Column align="center" style={shareCol}>
              <Link
                href="mailto:?subject=I%20won%20a%20SeeMyHealth%20challenge!&body=I%20just%20won%20the%20{{challenge_name}}%20challenge%20on%20SeeMyHealth!%20Join%20me%3A%20https%3A%2F%2Fseemyhealth.ai"
                style={shareLink}
              >
                Email
              </Link>
            </Column>
            <Column align="center" style={shareCol}>
              <Link
                href="sms:?body=I%20just%20won%20the%20{{challenge_name}}%20challenge%20on%20SeeMyHealth!%20https%3A%2F%2Fseemyhealth.ai"
                style={shareLink}
              >
                SMS
              </Link>
            </Column>
            <Column align="center" style={shareCol}>
              <Link
                href="https://wa.me/?text=I%20just%20won%20the%20{{challenge_name}}%20challenge%20on%20SeeMyHealth!%20https%3A%2F%2Fseemyhealth.ai"
                style={shareLink}
              >
                WhatsApp
              </Link>
            </Column>
          </Row>
        </Section>
      </Section>

      <Hr style={divider} />

      {/* ── Next challenge CTA ── */}
      <Section style={ctaSection}>
        <Text style={ctaHeading}>Ready for the next one?</Text>
        <Text style={ctaText}>
          New challenges start every week. Keep your momentum going.
        </Text>
        <Section style={ctaCenter}>
          <PrimaryButton href={`${BASE_URL}/app`}>
            Browse Challenges
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
  color: "#fbbf24",
  letterSpacing: "3px",
  textTransform: "uppercase" as const,
  margin: "0 0 4px 0",
};

const heroTitle = {
  fontSize: "28px",
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

// ── Results card ──

const resultsCard = {
  backgroundColor: "#141414",
  borderRadius: "12px",
  padding: "28px 24px",
  border: "1px solid rgba(255, 255, 255, 0.06)",
};

const categoryBadge = {
  fontSize: "10px",
  fontWeight: "700" as const,
  color: "#fbbf24",
  letterSpacing: "2px",
  textTransform: "uppercase" as const,
  margin: "0 0 8px 0",
};

const challengeName = {
  fontSize: "22px",
  fontWeight: "700" as const,
  color: "#f5f5f5",
  margin: "0 0 4px 0",
};

const challengeType = {
  fontSize: "14px",
  color: "rgba(255, 255, 255, 0.4)",
  margin: "0",
};

const cardDivider = {
  borderColor: "rgba(255, 255, 255, 0.06)",
  margin: "20px 0",
};

const statsGrid = {
  textAlign: "center" as const,
};

const statCell = {
  width: "33.33%",
  textAlign: "center" as const,
};

const statValue = {
  fontSize: "22px",
  fontWeight: "700" as const,
  color: "#f5f5f5",
  margin: "0 0 4px 0",
  lineHeight: "1.2",
};

const statLabel = {
  fontSize: "10px",
  fontWeight: "600" as const,
  color: "rgba(255, 255, 255, 0.3)",
  letterSpacing: "1.5px",
  margin: "0",
};

const dateRow = {
  textAlign: "center" as const,
};

const dateCell = {
  width: "33.33%",
  textAlign: "center" as const,
};

const dateLabel = {
  fontSize: "10px",
  fontWeight: "600" as const,
  color: "rgba(255, 255, 255, 0.3)",
  letterSpacing: "1.5px",
  margin: "0 0 4px 0",
};

const dateValue = {
  fontSize: "13px",
  fontWeight: "600" as const,
  color: "rgba(255, 255, 255, 0.6)",
  margin: "0",
};

// ── Achievement ──

const achievementCard = {
  borderRadius: "12px",
  overflow: "hidden" as const,
};

const achievementBg = {
  background: "linear-gradient(135deg, #78350f 0%, #b45309 50%, #d97706 100%)",
  borderRadius: "12px",
  overflow: "hidden" as const,
};

const achievementOverlay = {
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  padding: "32px 24px",
  textAlign: "center" as const,
};

const achievementEmoji = {
  fontSize: "40px",
  margin: "0 0 12px 0",
  lineHeight: "1",
};

const achievementLabel = {
  fontSize: "10px",
  fontWeight: "600" as const,
  color: "rgba(255, 255, 255, 0.5)",
  letterSpacing: "2px",
  margin: "0 0 6px 0",
};

const achievementName = {
  fontSize: "20px",
  fontWeight: "700" as const,
  color: "#fbbf24",
  margin: "0 0 6px 0",
};

const achievementDesc = {
  fontSize: "13px",
  color: "rgba(255, 255, 255, 0.6)",
  margin: "0",
};

// ── Journey ──

const journeyCard = {
  backgroundColor: "#141414",
  borderRadius: "12px",
  padding: "24px 12px",
  border: "1px solid rgba(255, 255, 255, 0.06)",
  textAlign: "center" as const,
};

const journeyCell = {
  width: "33.33%",
  textAlign: "center" as const,
};

const journeyValue = {
  fontSize: "16px",
  fontWeight: "700" as const,
  color: "#f5f5f5",
  margin: "0 0 4px 0",
};

const journeyLabel = {
  fontSize: "10px",
  fontWeight: "600" as const,
  color: "rgba(255, 255, 255, 0.3)",
  letterSpacing: "1.5px",
  margin: "0",
};

// ── Share ──

const shareSection = {
  backgroundColor: "#141414",
  borderRadius: "12px",
  padding: "28px 24px",
  textAlign: "center" as const,
  border: "1px solid rgba(255, 255, 255, 0.06)",
};

const shareHeading = {
  fontSize: "18px",
  fontWeight: "700" as const,
  color: "#f5f5f5",
  margin: "0 0 6px 0",
};

const shareText = {
  fontSize: "14px",
  color: "rgba(255, 255, 255, 0.45)",
  margin: "0 0 16px 0",
};

const shareLinks = { marginTop: "0" };
const shareCol = { width: "33.33%", padding: "0 4px" };

const shareLink = {
  color: "rgba(255, 255, 255, 0.5)",
  fontSize: "12px",
  fontWeight: "600" as const,
  textDecoration: "underline",
};

// ── CTA ──

const ctaSection = {
  textAlign: "center" as const,
};

const ctaHeading = {
  fontSize: "20px",
  fontWeight: "700" as const,
  color: "#f5f5f5",
  margin: "0 0 4px 0",
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
