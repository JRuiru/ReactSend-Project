import {
  Text,
  Section,
  Img,
  Row,
  Column,
  Hr,
  Link,
  Button,
} from "@react-email/components";
import * as React from "react";
import { EmailLayout } from "../components/EmailLayout";
import { PrimaryButton } from "../components/PrimaryButton";

const CDN = "https://imagedelivery.net/NnC2JvU8j4bgBbmedVhjJg";
const BASE_URL = "https://seemyhealth.ai";

const IMAGES = {
  hero: `${CDN}/app-goals-achieved/public`,
};

export default function AchievementUnlockedEmail() {
  return (
    <EmailLayout preview="Achievement unlocked: {{achievement_name}}">

      {/* ── Hero ── */}
      <Section style={heroSection}>
        <Img
          src={IMAGES.hero}
          width="560"
          alt="Achievement unlocked"
          style={heroImage}
        />
        <Section style={heroOverlay} className="force-white">
          <Text style={heroLabel}>ACHIEVEMENT UNLOCKED</Text>
          <Text style={heroTitle}>{"{{achievement_name}}"}</Text>
        </Section>
      </Section>

      {/* ── Greeting ── */}
      <Text style={heading}>
        Way to go, {"{{first_name}}"}.
      </Text>
      <Text style={paragraph}>
        You just earned a new achievement. This badge is now on your profile
        for everyone to see.
      </Text>

      <Hr style={divider} />

      {/* ══════════════════════════════════════════════════════════
          Achievement Badge Card
          ══════════════════════════════════════════════════════════ */}
      <Section style={badgeCard} className="force-white">
        <div style={badgeBg}>
          <div style={badgeOverlay}>
            <Text style={badgeEmoji}>{"{{achievement_icon}}"}</Text>
            <Text style={badgeName}>{"{{achievement_name}}"}</Text>
            <Text style={badgeDesc}>{"{{achievement_description}}"}</Text>

            <Hr style={badgeDivider} />

            <Section style={detailGrid}>
              <Row>
                <Column style={detailCell}>
                  <Text style={detailLabel}>EARNED</Text>
                  <Text style={detailValue}>{"{{earned_date}}"}</Text>
                </Column>
                <Column style={detailCell}>
                  <Text style={detailLabel}>CATEGORY</Text>
                  <Text style={detailValue}>{"{{achievement_category}}"}</Text>
                </Column>
              </Row>
            </Section>

            <Text style={criteriaLabel}>WHAT YOU DID</Text>
            <Text style={criteriaValue}>{"{{achievement_criteria}}"}</Text>
          </div>
        </div>
      </Section>

      <Hr style={divider} />

      {/* ── Progress to next ── */}
      <Section style={progressCard}>
        <Text style={progressHeading}>
          {"{{total_achievements}}"} achievements earned
        </Text>
        <Text style={progressSub}>
          {"{{achievements_remaining}}"} more to collect. Keep going.
        </Text>
      </Section>

      <Hr style={divider} />

      {/* ── Share ── */}
      <Section style={shareSection} className="force-white">
        <Text style={shareHeading}>Show it off</Text>
        <Text style={shareText}>
          Let your friends know about your latest achievement.
        </Text>
        <Section style={shareLinks}>
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
                href="sms:?body=I%20just%20unlocked%20{{achievement_name}}%20on%20SeeMyHealth!%20https%3A%2F%2Fseemyhealth.ai"
                style={shareLink}
              >
                SMS
              </Link>
            </Column>
            <Column align="center" style={shareCol}>
              <Link
                href="https://wa.me/?text=I%20just%20unlocked%20{{achievement_name}}%20on%20SeeMyHealth!%20https%3A%2F%2Fseemyhealth.ai"
                style={shareLink}
              >
                WhatsApp
              </Link>
            </Column>
          </Row>
        </Section>
      </Section>

      <Hr style={divider} />

      {/* ── Invite friends ── */}
      <Section style={inviteCard}>
        <Text style={inviteHeading}>Invite friends to compete</Text>
        <Text style={inviteText}>
          Achievements are better with friends. Invite someone to join
          SeeMyHealth and start earning badges together.
        </Text>
        <Section style={ctaCenter}>
          <Button href={`${BASE_URL}/invite?ref={{user_id}}`} style={inviteButton}>
            Invite a Friend
          </Button>
        </Section>
      </Section>

      <Hr style={divider} />

      {/* ── CTA ── */}
      <Section style={ctaSection}>
        <Text style={ctaText}>
          See all your badges and find your next challenge in the app.
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

const heroTitle = {
  fontSize: "26px",
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

// ── Badge card with gold accent ──

const badgeCard = {
  borderRadius: "12px",
  overflow: "hidden" as const,
};

const badgeBg = {
  background: "linear-gradient(135deg, #78350f 0%, #b45309 50%, #d97706 100%)",
  borderRadius: "12px",
  overflow: "hidden" as const,
};

const badgeOverlay = {
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  padding: "36px 24px",
  textAlign: "center" as const,
};

const badgeEmoji = {
  fontSize: "64px",
  margin: "0 0 16px 0",
  lineHeight: "1",
};

const badgeName = {
  fontSize: "24px",
  fontWeight: "700" as const,
  color: "#fbbf24",
  margin: "0 0 8px 0",
};

const badgeDesc = {
  fontSize: "14px",
  color: "rgba(255, 255, 255, 0.7)",
  lineHeight: "22px",
  margin: "0",
};

const badgeDivider = {
  borderColor: "rgba(255, 255, 255, 0.15)",
  margin: "24px 0",
};

const detailGrid = {
  textAlign: "center" as const,
};

const detailCell = {
  width: "50%",
  textAlign: "center" as const,
};

const detailLabel = {
  fontSize: "10px",
  fontWeight: "600" as const,
  color: "rgba(255, 255, 255, 0.4)",
  letterSpacing: "2px",
  margin: "0 0 4px 0",
};

const detailValue = {
  fontSize: "14px",
  fontWeight: "600" as const,
  color: "#fbbf24",
  margin: "0",
};

const criteriaLabel = {
  fontSize: "10px",
  fontWeight: "600" as const,
  color: "rgba(255, 255, 255, 0.4)",
  letterSpacing: "2px",
  margin: "20px 0 4px 0",
};

const criteriaValue = {
  fontSize: "14px",
  color: "rgba(255, 255, 255, 0.7)",
  margin: "0",
  lineHeight: "22px",
};

// ── Progress ──

const progressCard = {
  backgroundColor: "#141414",
  borderRadius: "12px",
  padding: "20px 24px",
  textAlign: "center" as const,
  border: "1px solid rgba(255, 255, 255, 0.06)",
};

const progressHeading = {
  fontSize: "18px",
  fontWeight: "700" as const,
  color: "#f5f5f5",
  margin: "0 0 4px 0",
};

const progressSub = {
  fontSize: "14px",
  color: "rgba(255, 255, 255, 0.4)",
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

// ── Invite ──

const inviteCard = {
  backgroundColor: "#141414",
  borderRadius: "12px",
  padding: "28px 24px",
  textAlign: "center" as const,
  border: "1px solid rgba(255, 255, 255, 0.06)",
};

const inviteHeading = {
  fontSize: "18px",
  fontWeight: "700" as const,
  color: "#f5f5f5",
  margin: "0 0 6px 0",
};

const inviteText = {
  fontSize: "14px",
  color: "rgba(255, 255, 255, 0.45)",
  lineHeight: "22px",
  margin: "0",
};

const inviteButton = {
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
