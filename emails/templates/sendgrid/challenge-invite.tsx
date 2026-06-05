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
import { SecondaryButton } from "../../components/SecondaryButton";

const CDN = "https://imagedelivery.net/NnC2JvU8j4bgBbmedVhjJg";
const BASE_URL = "https://seemyhealth.ai";

const IMAGES = {
  hero: `${CDN}/challenge-accepted/public`,
  challengeCard: `${CDN}/app-community-challenges/public`,
  lifestyle: `${CDN}/ring-fitness-body/public`,
  appStore: `${CDN}/badge-app-store/public`,
  googlePlay: `${CDN}/badge-google-play/public`,
};

export default function ChallengeInviteEmail() {
  return (
    <EmailLayout preview="{{inviter_name}} challenged you: {{challenge_name}}">

      {/* ── Hero ── */}
      <Section style={heroSection}>
        <Img
          src={IMAGES.hero}
          width="560"
          alt="Challenge invite"
          style={heroImage}
        />
        <Section style={heroOverlay} className="force-white">
          <Text style={heroLabel}>{"{{challenge_category}}"}</Text>
          <Text style={heroTitle}>You have been challenged.</Text>
        </Section>
      </Section>

      {/* ── Greeting ── */}
      <Text style={heading}>
        {"{{inviter_name}}"} thinks you are up for it.
      </Text>
      <Text style={paragraph}>
        Hey {"{{first_name}}"}, you have been invited to join a health
        challenge. Think you can keep up?
      </Text>

      <Hr style={divider} />

      {/* ══════════════════════════════════════════════════════════
          Challenge Details Card
          ══════════════════════════════════════════════════════════ */}
      <Section style={challengeCard}>
        <Img
          src={IMAGES.challengeCard}
          width="560"
          alt="Community challenges"
          style={challengeCardImage}
        />
        <Section style={challengeDetails} className="force-white">
          <Text style={challengeName}>{"{{challenge_name}}"}</Text>
          <Text style={challengeDesc}>{"{{challenge_description}}"}</Text>

          <Hr style={cardDivider} />

          <Section style={detailGrid}>
            <Row>
              <Column style={detailCell}>
                <Text style={detailLabel}>GOAL</Text>
                <Text style={detailValue}>{"{{challenge_goal}}"}</Text>
              </Column>
              <Column style={detailCell}>
                <Text style={detailLabel}>DURATION</Text>
                <Text style={detailValue}>{"{{duration}}"}</Text>
              </Column>
            </Row>
          </Section>

          <Section style={{ marginTop: "12px" }}>
            <Row>
              <Column style={detailCell}>
                <Text style={detailLabel}>PARTICIPANTS</Text>
                <Text style={detailValue}>{"{{participant_count}}"} joined</Text>
              </Column>
              <Column style={detailCell}>
                <Text style={detailLabel}>WINNING CRITERIA</Text>
                <Text style={detailValue}>{"{{goal_type}}"}</Text>
              </Column>
            </Row>
          </Section>

          <Section style={{ marginTop: "12px" }}>
            <Row>
              <Column style={detailCell}>
                <Text style={detailLabel}>STARTS</Text>
                <Text style={detailValue}>{"{{start_date}}"}</Text>
              </Column>
              <Column style={detailCell}>
                <Text style={detailLabel}>ENDS</Text>
                <Text style={detailValue}>{"{{end_date}}"}</Text>
              </Column>
            </Row>
          </Section>
        </Section>
      </Section>

      {/* ── CTAs ── */}
      <Section style={ctaCenter}>
        <PrimaryButton href={`${BASE_URL}/challenges/{{challenge_id}}/join`}>
          Accept Challenge
        </PrimaryButton>
      </Section>
      <Section style={ctaSecondary}>
        <SecondaryButton href={`${BASE_URL}/challenges/{{challenge_id}}`}>
          View Details
        </SecondaryButton>
      </Section>

      <Hr style={divider} />

      {/* ══════════════════════════════════════════════════════════
          Why Join
          ══════════════════════════════════════════════════════════ */}
      <Text style={sectionLabel}>WHY JOIN</Text>

      <Section style={reasonRow}>
        <Row>
          <Column style={reasonNumCol}>
            <Text style={reasonNum}>1</Text>
          </Column>
          <Column>
            <Text style={reasonTitle}>Build healthy habits</Text>
            <Text style={reasonDesc}>
              Challenges create consistency and accountability.
            </Text>
          </Column>
        </Row>
      </Section>

      <Section style={reasonRow}>
        <Row>
          <Column style={reasonNumCol}>
            <Text style={reasonNum}>2</Text>
          </Column>
          <Column>
            <Text style={reasonTitle}>Compete with friends</Text>
            <Text style={reasonDesc}>
              A little friendly competition goes a long way.
            </Text>
          </Column>
        </Row>
      </Section>

      <Section style={reasonRow}>
        <Row>
          <Column style={reasonNumCol}>
            <Text style={reasonNum}>3</Text>
          </Column>
          <Column>
            <Text style={reasonTitle}>Earn achievements</Text>
            <Text style={reasonDesc}>
              Winners get badges displayed on their profile.
            </Text>
          </Column>
        </Row>
      </Section>

      {/* ── Lifestyle image ── */}
      <Section style={lifestyleSection}>
        <Img
          src={IMAGES.lifestyle}
          width="560"
          alt="Ring fitness tracking"
          style={lifestyleImage}
        />
        <Text style={lifestyleCaption}>
          Health is better when you compete with friends.
        </Text>
      </Section>

      <Hr style={divider} />

      {/* ── Invite friends ── */}
      <Section style={inviteCard}>
        <Text style={inviteHeading}>Bring your crew</Text>
        <Text style={inviteText}>
          Challenges are better with friends. Invite someone to join and
          compete together.
        </Text>
        <Section style={inviteCtaCenter}>
          <Button href={`${BASE_URL}/invite?ref={{user_id}}&name={{first_name}}`} style={inviteButton}>
            Invite a Friend
          </Button>
        </Section>
      </Section>

      <Hr style={divider} />

      {/* ── Testimonial ── */}
      <Section style={testimonialSection}>
        <Text style={testimonialQuote}>
          "Our step challenge pushed me to walk 15,000 steps a day for two
          weeks. I have never been more motivated."
        </Text>
        <Text style={testimonialAuthor}>
          Rachel T., challenge winner
        </Text>
      </Section>

      <Hr style={divider} />

      {/* ── App download ── */}
      <Section style={appDownloadSection}>
        <Text style={appDownloadHeading}>Get the app</Text>
        <Section style={appBadgeRow}>
          <Row>
            <Column style={appBadgeCol}>
              <a href={`${BASE_URL}/download/ios`}>
                <Img
                  src={IMAGES.appStore}
                  width="120"
                  alt="Download on the App Store"
                  style={appBadge}
                />
              </a>
            </Column>
            <Column style={appBadgeCol}>
              <a href={`${BASE_URL}/download/android`}>
                <Img
                  src={IMAGES.googlePlay}
                  width="120"
                  alt="Get it on Google Play"
                  style={appBadge}
                />
              </a>
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
  background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)",
};

const heroLabel = {
  fontSize: "11px",
  fontWeight: "600" as const,
  color: "#b3b3b3",
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
  fontSize: "22px",
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

// ── Challenge card ──

const challengeCard = {
  borderRadius: "12px",
  overflow: "hidden" as const,
};

const challengeCardImage = {
  width: "100%",
  display: "block" as const,
  borderRadius: "12px 12px 0 0",
};

const challengeDetails = {
  backgroundColor: "#141414",
  padding: "28px 24px",
  borderRadius: "0 0 12px 12px",
};

const challengeName = {
  fontSize: "22px",
  fontWeight: "700" as const,
  color: "#f5f5f5",
  margin: "0 0 8px 0",
};

const challengeDesc = {
  fontSize: "14px",
  color: "#a3a3a3",
  lineHeight: "22px",
  margin: "0",
};

const cardDivider = {
  borderColor: "#222222",
  margin: "20px 0",
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
  color: "#5e5e5e",
  letterSpacing: "1.5px",
  margin: "0 0 4px 0",
};

const detailValue = {
  fontSize: "14px",
  fontWeight: "600" as const,
  color: "#f5f5f5",
  margin: "0",
};

// ── CTAs ──

const ctaCenter = {
  textAlign: "center" as const,
  margin: "28px 0 12px 0",
};

const ctaSecondary = {
  textAlign: "center" as const,
};

// ── Reasons ──

const reasonRow = {
  marginBottom: "16px",
};

const reasonNumCol = {
  width: "36px",
  verticalAlign: "top" as const,
};

const reasonNum = {
  fontSize: "20px",
  fontWeight: "700" as const,
  color: "#252525",
  margin: "0",
  lineHeight: "1",
};

const reasonTitle = {
  fontSize: "15px",
  fontWeight: "600" as const,
  color: "#f5f5f5",
  margin: "0 0 4px 0",
};

const reasonDesc = {
  fontSize: "14px",
  color: "#6b6b6b",
  lineHeight: "21px",
  margin: "0",
};

// ── Invite ──

const inviteCard = {
  backgroundColor: "#141414",
  borderRadius: "12px",
  padding: "28px 24px",
  textAlign: "center" as const,
  border: "1px solid #1a1a1a",
};

const inviteHeading = {
  fontSize: "18px",
  fontWeight: "700" as const,
  color: "#f5f5f5",
  margin: "0 0 6px 0",
};

const inviteText = {
  fontSize: "14px",
  color: "#6b6b6b",
  lineHeight: "22px",
  margin: "0",
};

const inviteCtaCenter = {
  textAlign: "center" as const,
  marginTop: "16px",
};

const inviteButton = {
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

// ── Lifestyle ──

const lifestyleSection = {
  marginTop: "28px",
};

const lifestyleImage = {
  width: "100%",
  display: "block" as const,
  borderRadius: "12px",
};

const lifestyleCaption = {
  fontSize: "14px",
  color: "#6b6b6b",
  textAlign: "center" as const,
  margin: "12px 0 0 0",
  fontStyle: "italic" as const,
};

// ── Testimonial ──

const testimonialSection = {
  textAlign: "center" as const,
  padding: "8px 16px",
};

const testimonialQuote = {
  fontSize: "16px",
  lineHeight: "26px",
  color: "#d4d4d4",
  fontStyle: "italic" as const,
  margin: "0 0 12px 0",
};

const testimonialAuthor = {
  fontSize: "13px",
  fontWeight: "600" as const,
  color: "#5e5e5e",
  margin: "0",
};

// ── App download ──

const appDownloadSection = {
  textAlign: "center" as const,
};

const appDownloadHeading = {
  fontSize: "18px",
  fontWeight: "700" as const,
  color: "#f5f5f5",
  margin: "0 0 16px 0",
  textAlign: "center" as const,
};

const appBadgeRow = {
  textAlign: "center" as const,
};

const appBadgeCol = {
  width: "50%",
  textAlign: "center" as const,
  verticalAlign: "middle" as const,
};

const appBadge = {
  display: "inline-block" as const,
};
