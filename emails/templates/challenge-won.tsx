import {
  Text,
  Section,
  Row,
  Column,
  Hr,
  Link,
} from "@react-email/components";
import * as React from "react";
import { EmailLayout } from "../components/EmailLayout";
import { PrimaryButton } from "../components/PrimaryButton";

// Challenge category colors (matching SwiftUI)
const CATEGORY_COLORS: Record<string, string> = {
  movement: "#3B82F6",
  sleep: "#6366F1",
  workouts: "#F97316",
  nutrition: "#22C55E",
  weight: "#14B8A6",
  mental_health: "#A855F7",
};

const BASE_URL = "https://seemyhealth.ai";

export default function ChallengeWonEmail() {
  return (
    <EmailLayout preview="You won the {{challenge_name}} challenge!">

      {/* ── Trophy / Celebration ── */}
      <Section style={celebrationBanner} className="dark-safe">
        <Text style={trophyIcon}>&#x1F3C6;</Text>
        <Text style={celebrationTitle}>You did it!</Text>
        <Text style={celebrationSubtitle}>
          Challenge Champion
        </Text>
      </Section>

      {/* ── Greeting ── */}
      <Text style={heading}>
        Congrats, {"{{first_name}}"}!
      </Text>

      <Text style={paragraph}>
        You crushed the <strong>{"{{challenge_name}}"}</strong> challenge
        and came out on top. Your dedication is paying off — keep it going!
      </Text>

      <Hr style={divider} />

      {/* ── Challenge Results Card ── */}
      <Section style={resultsCard}>

        {/* Category badge */}
        <Text style={categoryBadge}>{"{{challenge_category}}"}</Text>

        <Text style={challengeName}>{"{{challenge_name}}"}</Text>
        <Text style={challengeType}>{"{{challenge_type}}"} &middot; {"{{goal_type}}"}</Text>

        <Hr style={cardDivider} />

        {/* Stats — stacked for mobile responsiveness */}
        <Section style={statBlock}>
          <Row>
            <Column style={statIconCol}>
              <Text style={iconText}>&#x1F947;</Text>
            </Column>
            <Column>
              <Text style={statLabel}>Final Rank</Text>
              <Text style={statValue}>{"{{final_rank}}"}</Text>
            </Column>
          </Row>
        </Section>

        <Section style={statBlock}>
          <Row>
            <Column style={statIconCol}>
              <Text style={iconText}>&#x1F4AF;</Text>
            </Column>
            <Column>
              <Text style={statLabel}>Your Score</Text>
              <Text style={statValue}>{"{{your_score}}"}</Text>
            </Column>
          </Row>
        </Section>

        <Section style={statBlock}>
          <Row>
            <Column style={statIconCol}>
              <Text style={iconText}>&#x1F465;</Text>
            </Column>
            <Column>
              <Text style={statLabel}>Participants</Text>
              <Text style={statValue}>{"{{total_participants}}"}</Text>
            </Column>
          </Row>
        </Section>

        <Hr style={cardDivider} />

        {/* Duration & dates */}
        <Section style={detailRow}>
          <Row>
            <Column style={detailIconCol}>
              <Text style={iconText}>&#x1F4C5;</Text>
            </Column>
            <Column>
              <Text style={detailText}>
                {"{{start_date}}"} — {"{{end_date}}"}
              </Text>
            </Column>
          </Row>
        </Section>

        <Section style={detailRow}>
          <Row>
            <Column style={detailIconCol}>
              <Text style={iconText}>&#x23F1;</Text>
            </Column>
            <Column>
              <Text style={detailText}>{"{{duration}}"}</Text>
            </Column>
          </Row>
        </Section>
      </Section>

      <Hr style={divider} />

      {/* ── Achievement Unlocked ── */}
      <Section style={achievementSection}>
        <Text style={achievementIcon}>&#x1F31F;</Text>
        <Text style={achievementTitle}>Achievement Unlocked</Text>
        <Text style={achievementName}>{"{{achievement_name}}"}</Text>
        <Text style={achievementDesc}>
          This badge is now on your profile for everyone to see.
        </Text>
      </Section>

      <Hr style={divider} />

      {/* ── Your Journey ── */}
      <Text style={sectionHeading}>Your journey</Text>

      <Section style={journeyBlock}>
        <Row>
          <Column style={journeyIconCol}>
            <Text style={iconText}>&#x1F4AA;</Text>
          </Column>
          <Column>
            <Text style={journeyLabel}>Personal Best</Text>
            <Text style={journeyValue}>{"{{personal_best}}"}</Text>
          </Column>
        </Row>
      </Section>

      <Section style={journeyBlock}>
        <Row>
          <Column style={journeyIconCol}>
            <Text style={iconText}>&#x1F525;</Text>
          </Column>
          <Column>
            <Text style={journeyLabel}>Longest Streak</Text>
            <Text style={journeyValue}>{"{{longest_streak}}"} days</Text>
          </Column>
        </Row>
      </Section>

      <Section style={journeyBlock}>
        <Row>
          <Column style={journeyIconCol}>
            <Text style={iconText}>&#x1F4C8;</Text>
          </Column>
          <Column>
            <Text style={journeyLabel}>Improvement</Text>
            <Text style={journeyValue}>{"{{improvement}}"} from start</Text>
          </Column>
        </Row>
      </Section>

      <Hr style={divider} />

      {/* ── Share your win ── */}
      <Section style={shareSection} className="dark-safe">
        <Text style={shareHeading}>Share your win!</Text>
        <Text style={shareText}>
          Let your friends know you're a challenge champion.
        </Text>

        <Section style={shareRow}>
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
                href="sms:?body=I%20just%20won%20the%20{{challenge_name}}%20challenge%20on%20SeeMyHealth!%20%F0%9F%8F%86%20Join%20me%3A%20https%3A%2F%2Fseemyhealth.ai"
                style={shareLink}
              >
                SMS
              </Link>
            </Column>
            <Column align="center" style={shareCol}>
              <Link
                href="https://wa.me/?text=I%20just%20won%20the%20{{challenge_name}}%20challenge%20on%20SeeMyHealth!%20%F0%9F%8F%86%20Join%20me%3A%20https%3A%2F%2Fseemyhealth.ai"
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
      <Section style={nextSection}>
        <Text style={nextHeading}>Ready for the next one?</Text>
        <Text style={nextText}>
          New challenges are starting every week. Keep your momentum going.
        </Text>
        <Section style={ctaSection}>
          <PrimaryButton href={`${BASE_URL}/challenges`}>
            Browse Challenges
          </PrimaryButton>
        </Section>
      </Section>

    </EmailLayout>
  );
}

// ── Styles ──

const celebrationBanner = {
  background: "linear-gradient(135deg, #1a0533 0%, #4c1d95 40%, #7c3aed 70%, #a855f7 100%)",
  borderRadius: "16px",
  padding: "40px 24px",
  textAlign: "center" as const,
  marginBottom: "24px",
};

const trophyIcon = {
  fontSize: "56px",
  margin: "0 0 8px 0",
  lineHeight: "1",
};

const celebrationTitle = {
  fontSize: "32px",
  fontWeight: "bold" as const,
  color: "#ffffff",
  margin: "0 0 4px 0",
  letterSpacing: "-0.5px",
};

const celebrationSubtitle = {
  fontSize: "14px",
  color: "rgba(255, 255, 255, 0.7)",
  margin: "0",
  textTransform: "uppercase" as const,
  letterSpacing: "2px",
  fontWeight: "600" as const,
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

// ── Results card ──

const resultsCard = {
  background: "linear-gradient(135deg, rgba(124,58,237,0.04) 0%, rgba(168,85,247,0.06) 100%)",
  borderRadius: "14px",
  padding: "28px 24px",
  border: "1px solid rgba(124, 58, 237, 0.1)",
};

const categoryBadge = {
  fontSize: "11px",
  fontWeight: "bold" as const,
  color: "#7c3aed",
  letterSpacing: "1.5px",
  textTransform: "uppercase" as const,
  margin: "0 0 8px 0",
  backgroundColor: "rgba(124, 58, 237, 0.08)",
  padding: "4px 12px",
  borderRadius: "12px",
  display: "inline-block" as const,
};

const challengeName = {
  fontSize: "22px",
  fontWeight: "bold" as const,
  color: "#111827",
  margin: "0 0 2px 0",
};

const challengeType = {
  fontSize: "14px",
  color: "#6b7280",
  margin: "0",
};

const cardDivider = {
  borderColor: "rgba(124, 58, 237, 0.08)",
  margin: "16px 0",
};

// ── Stats ──

const statBlock = {
  marginBottom: "10px",
};

const statIconCol = {
  width: "36px",
  verticalAlign: "middle" as const,
};

const statLabel = {
  fontSize: "11px",
  color: "#9ca3af",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
  margin: "0",
  fontWeight: "600" as const,
};

const statValue = {
  fontSize: "20px",
  fontWeight: "bold" as const,
  color: "#7c3aed",
  margin: "2px 0 0 0",
  lineHeight: "1.2",
};

// ── Details ──

const detailRow = {
  marginBottom: "8px",
};

const detailIconCol = {
  width: "32px",
  verticalAlign: "middle" as const,
};

const iconText = {
  fontSize: "18px",
  margin: "0",
  lineHeight: "1",
};

const detailText = {
  fontSize: "14px",
  color: "#6b7280",
  margin: "0",
};

// ── Achievement ──

const achievementSection = {
  background: "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)",
  borderRadius: "14px",
  padding: "28px 24px",
  textAlign: "center" as const,
  border: "1px solid rgba(245, 158, 11, 0.2)",
};

const achievementIcon = {
  fontSize: "40px",
  margin: "0 0 8px 0",
  lineHeight: "1",
};

const achievementTitle = {
  fontSize: "12px",
  fontWeight: "bold" as const,
  color: "#92400e",
  textTransform: "uppercase" as const,
  letterSpacing: "1.5px",
  margin: "0 0 4px 0",
};

const achievementName = {
  fontSize: "20px",
  fontWeight: "bold" as const,
  color: "#78350f",
  margin: "0 0 4px 0",
};

const achievementDesc = {
  fontSize: "13px",
  color: "#92400e",
  margin: "0",
};

// ── Journey stats ──

const sectionHeading = {
  fontSize: "18px",
  fontWeight: "bold" as const,
  color: "#111827",
  margin: "0 0 16px 0",
};

const journeyBlock = {
  marginBottom: "14px",
};

const journeyIconCol = {
  width: "36px",
  verticalAlign: "top" as const,
};

const journeyLabel = {
  fontSize: "12px",
  color: "#9ca3af",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
  margin: "0",
  fontWeight: "600" as const,
};

const journeyValue = {
  fontSize: "16px",
  fontWeight: "bold" as const,
  color: "#111827",
  margin: "2px 0 0 0",
};

// ── Share section ──

const shareSection = {
  background: "linear-gradient(135deg, #1a0533 0%, #4c1d95 100%)",
  borderRadius: "16px",
  padding: "28px 24px",
  textAlign: "center" as const,
};

const shareHeading = {
  fontSize: "20px",
  fontWeight: "bold" as const,
  color: "#ffffff",
  margin: "0 0 6px 0",
};

const shareText = {
  fontSize: "14px",
  color: "rgba(255, 255, 255, 0.7)",
  margin: "0 0 16px 0",
};

const shareRow = {
  marginTop: "0",
};

const shareCol = {
  width: "33.33%",
  padding: "0 4px",
};

const shareLink = {
  color: "#c4b5fd",
  fontSize: "12px",
  fontWeight: "bold" as const,
  textDecoration: "underline",
};

// ── Next challenge ──

const nextSection = {
  textAlign: "center" as const,
};

const nextHeading = {
  fontSize: "20px",
  fontWeight: "bold" as const,
  color: "#111827",
  margin: "0 0 4px 0",
};

const nextText = {
  fontSize: "14px",
  color: "#6b7280",
  margin: "0",
};

const ctaSection = {
  textAlign: "center" as const,
  margin: "20px 0 0 0",
};
