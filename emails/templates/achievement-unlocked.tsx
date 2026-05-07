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

const BASE_URL = "https://seemyhealth.ai";

export default function AchievementUnlockedEmail() {
  return (
    <EmailLayout preview="Achievement unlocked: {{achievement_name}}">

      {/* ── Celebration banner ── */}
      <Section style={banner}>
        <Text style={bannerEmoji}>{"{{achievement_icon}}"}</Text>
        <Text style={bannerTitle}>Achievement Unlocked!</Text>
      </Section>

      {/* ── Greeting ── */}
      <Text style={heading}>
        Way to go, {"{{first_name}}"}!
      </Text>

      <Text style={paragraph}>
        You just earned a new achievement. This badge is now on your profile
        for everyone to see.
      </Text>

      <Hr style={divider} />

      {/* ── Achievement card ── */}
      <Section style={achievementCard}>
        <Text style={badgeIcon}>{"{{achievement_icon}}"}</Text>
        <Text style={badgeName}>{"{{achievement_name}}"}</Text>
        <Text style={badgeDesc}>{"{{achievement_description}}"}</Text>

        <Hr style={cardDivider} />

        <Section style={detailRow}>
          <Row>
            <Column style={detailIconCol}>
              <Text style={iconText}>&#x1F4C5;</Text>
            </Column>
            <Column>
              <Text style={detailLabel}>Earned</Text>
              <Text style={detailValue}>{"{{earned_date}}"}</Text>
            </Column>
          </Row>
        </Section>

        <Section style={detailRow}>
          <Row>
            <Column style={detailIconCol}>
              <Text style={iconText}>&#x1F3AF;</Text>
            </Column>
            <Column>
              <Text style={detailLabel}>Category</Text>
              <Text style={detailValue}>{"{{achievement_category}}"}</Text>
            </Column>
          </Row>
        </Section>

        <Section style={detailRow}>
          <Row>
            <Column style={detailIconCol}>
              <Text style={iconText}>&#x1F4CA;</Text>
            </Column>
            <Column>
              <Text style={detailLabel}>What you did</Text>
              <Text style={detailValue}>{"{{achievement_criteria}}"}</Text>
            </Column>
          </Row>
        </Section>
      </Section>

      {/* ── Progress ── */}
      <Section style={progressSection}>
        <Text style={progressText}>
          You now have <strong>{"{{total_achievements}}"}</strong> achievements.
          {"{{achievements_remaining}}"} more to collect!
        </Text>
      </Section>

      <Hr style={divider} />

      {/* ── Share ── */}
      <Section style={shareSection}>
        <Text style={shareHeading}>Show it off!</Text>
        <Text style={shareText}>
          Let your friends know about your latest achievement.
        </Text>

        <Section style={shareRow}>
          <Row>
            <Column align="center" style={shareCol}>
              <Link
                href="mailto:?subject=I%20unlocked%20{{achievement_name}}%20on%20SeeMyHealth!&body=Just%20earned%20a%20new%20achievement%20on%20SeeMyHealth!%20Check%20it%20out%3A%20https%3A%2F%2Fseemyhealth.ai"
                style={shareLink}
              >
                Email
              </Link>
            </Column>
            <Column align="center" style={shareCol}>
              <Link
                href="sms:?body=I%20just%20unlocked%20{{achievement_name}}%20on%20SeeMyHealth!%20%F0%9F%8C%9F%20https%3A%2F%2Fseemyhealth.ai"
                style={shareLink}
              >
                SMS
              </Link>
            </Column>
            <Column align="center" style={shareCol}>
              <Link
                href="https://wa.me/?text=I%20just%20unlocked%20{{achievement_name}}%20on%20SeeMyHealth!%20%F0%9F%8C%9F%20https%3A%2F%2Fseemyhealth.ai"
                style={shareLink}
              >
                WhatsApp
              </Link>
            </Column>
          </Row>
        </Section>
      </Section>

      <Hr style={divider} />

      <Section style={ctaSection}>
        <PrimaryButton href={`${BASE_URL}/achievements`}>
          View All Achievements
        </PrimaryButton>
      </Section>

    </EmailLayout>
  );
}

// ── Styles ──

const banner = {
  background: "linear-gradient(135deg, #78350f 0%, #b45309 40%, #f59e0b 70%, #fbbf24 100%)",
  borderRadius: "16px",
  padding: "40px 24px",
  textAlign: "center" as const,
  marginBottom: "24px",
};

const bannerEmoji = {
  fontSize: "52px",
  margin: "0 0 8px 0",
  lineHeight: "1",
};

const bannerTitle = {
  fontSize: "28px",
  fontWeight: "bold" as const,
  color: "#ffffff",
  margin: "0",
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

// ── Achievement card ──

const achievementCard = {
  background: "linear-gradient(135deg, #fef3c7 0%, #fde68a 50%, #fef3c7 100%)",
  borderRadius: "14px",
  padding: "32px 24px",
  textAlign: "center" as const,
  border: "1px solid rgba(245, 158, 11, 0.2)",
};

const badgeIcon = {
  fontSize: "64px",
  margin: "0 0 12px 0",
  lineHeight: "1",
};

const badgeName = {
  fontSize: "24px",
  fontWeight: "bold" as const,
  color: "#78350f",
  margin: "0 0 6px 0",
};

const badgeDesc = {
  fontSize: "14px",
  color: "#92400e",
  lineHeight: "22px",
  margin: "0",
};

const cardDivider = {
  borderColor: "rgba(120, 53, 15, 0.15)",
  margin: "20px 0",
};

const detailRow = {
  marginBottom: "10px",
  textAlign: "left" as const,
};

const detailIconCol = {
  width: "32px",
  verticalAlign: "top" as const,
};

const iconText = {
  fontSize: "18px",
  margin: "0",
  lineHeight: "1",
};

const detailLabel = {
  fontSize: "11px",
  color: "#92400e",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
  margin: "0",
  fontWeight: "600" as const,
};

const detailValue = {
  fontSize: "14px",
  color: "#78350f",
  margin: "2px 0 0 0",
  fontWeight: "500" as const,
};

// ── Progress ──

const progressSection = {
  textAlign: "center" as const,
  background: "rgba(124, 58, 237, 0.04)",
  borderRadius: "10px",
  padding: "16px 20px",
};

const progressText = {
  fontSize: "14px",
  color: "#374151",
  margin: "0",
};

// ── Share ──

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

const shareRow = { marginTop: "0" };
const shareCol = { width: "33.33%", padding: "0 4px" };

const shareLink = {
  color: "#c4b5fd",
  fontSize: "12px",
  fontWeight: "bold" as const,
  textDecoration: "underline",
};

const ctaSection = {
  textAlign: "center" as const,
};
