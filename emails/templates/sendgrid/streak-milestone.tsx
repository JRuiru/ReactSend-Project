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
  hero: `${CDN}/ring-yoga/public`,
  lifestyle: `${CDN}/ring-fitness-body/public`,
  ring: `${CDN}/ring-gold-hands-portrait/public`,
  scale: `${CDN}/scale-black-nutritionist/public`,
  bp: `${CDN}/bp-black-poster/public`,
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

      {/* ── Lifestyle Image ── */}
      <Section style={lifestyleSection}>
        <Img
          src={IMAGES.lifestyle}
          width="560"
          alt="Stay consistent with SeeMyHealth"
          style={lifestyleImage}
        />
        <Text style={lifestyleCaption}>
          Consistency is the ultimate superpower.
        </Text>
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

      {/* ── Challenge nudge ── */}
      <Section style={challengeCard}>
        <Text style={challengeHeading}>Take it to the next level</Text>
        <Text style={challengeText}>
          You are on fire. Channel that momentum into a challenge and
          compete with friends.
        </Text>
        <Section style={ctaCenter}>
          <Button href={`${BASE_URL}/challenges`} style={challengeButton}>
            Browse Challenges
          </Button>
        </Section>
      </Section>

      <Hr style={divider} />

      {/* ── Invite ── */}
      <Section style={inviteCard}>
        <Text style={inviteHeading}>Bring a friend along</Text>
        <Text style={inviteText}>
          Streaks are easier with accountability. Invite someone to join
          and build streaks together.
        </Text>
        <Section style={ctaCenter}>
          <Button href={`${BASE_URL}/invite?ref={{user_id}}&name={{first_name}}`} style={inviteCta}>
            Invite a Friend
          </Button>
        </Section>
      </Section>

      <Hr style={divider} />

      {/* ── Ecosystem Strip ── */}
      <Text style={ecosystemHeading}>Level up your tracking</Text>
      <Section style={ecosystemStrip}>
        <Row>
          <Column align="center" style={ecosystemCol}>
            <Img
              src={IMAGES.ring}
              width="160"
              alt="SeeMyHealth Ring"
              style={ecosystemImage}
            />
            <Text style={ecosystemName}>Smart Ring</Text>
            <Button href={`${BASE_URL}/shop/ring`} style={ecosystemShopLink}>
              Shop
            </Button>
          </Column>
          <Column align="center" style={ecosystemCol}>
            <Img
              src={IMAGES.scale}
              width="160"
              alt="SeeMyHealth Scale"
              style={ecosystemImage}
            />
            <Text style={ecosystemName}>Smart Scale</Text>
            <Button href={`${BASE_URL}/shop/scale`} style={ecosystemShopLink}>
              Shop
            </Button>
          </Column>
          <Column align="center" style={ecosystemCol}>
            <Img
              src={IMAGES.bp}
              width="160"
              alt="SeeMyHealth Blood Pressure Monitor"
              style={ecosystemImage}
            />
            <Text style={ecosystemName}>BP Monitor</Text>
            <Button href={`${BASE_URL}/shop/bp-monitor`} style={ecosystemShopLink}>
              Shop
            </Button>
          </Column>
        </Row>
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

      {/* ── App Store Buttons ── */}
      <Section style={{ textAlign: "center" as const, marginTop: "24px" }}>
        <Text style={storeLabel}>GET THE APP</Text>
        <Section style={{ textAlign: "center" as const, marginTop: "12px" }}>
          <Row>
            <Column align="center" style={storeCol}>
              <Button href="https://apps.apple.com/app/seemyhealth" style={storeButton}>
                App Store
              </Button>
            </Column>
            <Column align="center" style={storeCol}>
              <Button href="https://play.google.com/store/apps/details?id=ai.seemyhealth" style={storeButton}>
                Google Play
              </Button>
            </Column>
          </Row>
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
  color: "#a3a3a3",
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
  color: "#b3b3b3",
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
  color: "#a3a3a3",
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

// ── Stats card ──

const statsCard = {
  backgroundColor: "#141414",
  borderRadius: "12px",
  padding: "20px 24px",
  border: "1px solid #1a1a1a",
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
  color: "#5e5e5e",
  letterSpacing: "1.5px",
  margin: "0",
};

const statDivider = {
  borderColor: "#1a1a1a",
  margin: "8px 0",
};

// ── Milestones ──

const milestoneCard = {
  backgroundColor: "#141414",
  borderRadius: "12px",
  padding: "8px 24px",
  border: "1px solid #1a1a1a",
};

const milestoneRow = {
  borderBottom: "1px solid #1a1a1a",
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
  color: "#5e5e5e",
  margin: "2px 0 0 0",
};

// ── Quote ──

const quoteSection = {
  textAlign: "center" as const,
};

const quoteMark = {
  fontSize: "48px",
  color: "#222222",
  margin: "0",
  lineHeight: "1",
  fontFamily: "Georgia, serif",
};

const quoteText = {
  fontSize: "15px",
  fontStyle: "italic" as const,
  color: "#8a8a8a",
  lineHeight: "24px",
  margin: "0 0 8px 0",
};

const quoteAuthor = {
  fontSize: "13px",
  color: "#5e5e5e",
  margin: "0",
  fontWeight: "600" as const,
};

// ── Challenge nudge ──

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
  backgroundColor: "#fb923c",
  color: "#ffffff",
  padding: "10px 24px",
  borderRadius: "50px",
  fontSize: "12px",
  fontWeight: "600" as const,
  textDecoration: "none",
  display: "inline-block",
  letterSpacing: "0.5px",
  textTransform: "uppercase" as const,
};

// ── Invite ──

const inviteCard = {
  textAlign: "center" as const,
};

const inviteHeading = {
  fontSize: "18px",
  fontWeight: "700" as const,
  color: "#f5f5f5",
  margin: "0 0 6px 0",
  textAlign: "center" as const,
};

const inviteText = {
  fontSize: "14px",
  color: "#6b6b6b",
  lineHeight: "22px",
  margin: "0",
  textAlign: "center" as const,
};

const inviteCta = {
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

// ── CTA ──

const ctaSection = {
  textAlign: "center" as const,
};

const ctaText = {
  fontSize: "15px",
  color: "#8a8a8a",
  lineHeight: "24px",
  margin: "0",
  textAlign: "center" as const,
};

const ctaCenter = {
  textAlign: "center" as const,
  margin: "20px 0 0 0",
};

// ── Lifestyle image ──

const lifestyleSection = {
  textAlign: "center" as const,
};

const lifestyleImage = {
  width: "100%",
  display: "block" as const,
  borderRadius: "12px",
};

const lifestyleCaption = {
  fontSize: "13px",
  fontStyle: "italic" as const,
  color: "#6b6b6b",
  margin: "12px 0 0 0",
  textAlign: "center" as const,
};

// ── Ecosystem strip ──

const ecosystemHeading = {
  fontSize: "18px",
  fontWeight: "700" as const,
  color: "#f5f5f5",
  margin: "0 0 16px 0",
  textAlign: "center" as const,
};

const ecosystemStrip = {
  backgroundColor: "#141414",
  borderRadius: "12px",
  padding: "20px 12px",
  border: "1px solid #1a1a1a",
  textAlign: "center" as const,
};

const ecosystemCol = {
  width: "33.33%",
  padding: "0 4px",
  verticalAlign: "top" as const,
};

const ecosystemImage = {
  width: "100%",
  display: "block" as const,
  borderRadius: "8px",
};

const ecosystemName = {
  fontSize: "13px",
  fontWeight: "600" as const,
  color: "#f5f5f5",
  margin: "10px 0 4px 0",
};

const ecosystemShopLink = {
  backgroundColor: "transparent",
  color: "#fb923c",
  fontSize: "11px",
  fontWeight: "600" as const,
  textDecoration: "underline",
  padding: "0",
  letterSpacing: "0.5px",
};

// ── App Store buttons ──

const storeLabel = {
  fontSize: "11px",
  fontWeight: "600" as const,
  color: "#5e5e5e",
  letterSpacing: "3px",
  textTransform: "uppercase" as const,
  margin: "0",
  textAlign: "center" as const,
};

const storeCol = {
  width: "50%",
  padding: "0 4px",
};

const storeButton = {
  backgroundColor: "transparent",
  color: "#a3a3a3",
  padding: "10px 20px",
  borderRadius: "50px",
  fontSize: "12px",
  fontWeight: "600" as const,
  textDecoration: "none",
  display: "inline-block",
  border: "1px solid #2a2a2a",
  letterSpacing: "0.5px",
};
