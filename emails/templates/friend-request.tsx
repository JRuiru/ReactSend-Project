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
  hero: `${CDN}/lifestyle-friends-bar/public`,
};

export default function FriendRequestEmail() {
  return (
    <EmailLayout preview="{{requester_name}} wants to be friends on SeeMyHealth">

      {/* ── Hero ── */}
      <Section style={heroSection}>
        <Img
          src={IMAGES.hero}
          width="560"
          alt="Friend request"
          style={heroImage}
        />
        <Section style={heroOverlay} className="force-white">
          <Text style={heroLabel}>FRIEND REQUEST</Text>
          <Text style={heroTitle}>Someone wants to connect.</Text>
        </Section>
      </Section>

      {/* ── Greeting ── */}
      <Text style={heading}>
        Hey {"{{first_name}}"},
      </Text>
      <Text style={paragraph}>
        <strong style={{ color: "#f5f5f5" }}>{"{{requester_name}}"}</strong> sent
        you a friend request. Connect to share progress, join challenges
        together, and support each other's health goals.
      </Text>

      <Hr style={divider} />

      {/* ── Requester card ── */}
      <Section style={requesterCard}>
        <Img
          src="{{requester_avatar_url}}"
          alt="{{requester_name}}"
          width="72"
          height="72"
          style={avatarImage}
        />
        <Text style={requesterName}>{"{{requester_name}}"}</Text>
        <Text style={requesterBio}>{"{{requester_bio}}"}</Text>

        <Hr style={cardDivider} />

        <Section style={statsGrid}>
          <Row>
            <Column style={statCell}>
              <Text style={statValue}>{"{{requester_challenges}}"}</Text>
              <Text style={statLabel}>CHALLENGES</Text>
            </Column>
            <Column style={statCell}>
              <Text style={statValue}>{"{{requester_achievements}}"}</Text>
              <Text style={statLabel}>ACHIEVEMENTS</Text>
            </Column>
            <Column style={statCell}>
              <Text style={statValue}>{"{{requester_friends}}"}</Text>
              <Text style={statLabel}>FRIENDS</Text>
            </Column>
          </Row>
        </Section>
      </Section>

      {/* ── Actions ── */}
      <Section style={ctaCenter}>
        <PrimaryButton href={`${BASE_URL}/friends/accept/{{request_id}}`}>
          Accept Request
        </PrimaryButton>
      </Section>
      <Section style={ctaSecondary}>
        <Button href={`${BASE_URL}/friends/decline/{{request_id}}`} style={declineButton}>
          Decline
        </Button>
      </Section>

      <Hr style={divider} />

      <Text style={footerNote}>
        When you accept, you will be able to see each other's public
        activity, join challenges together, and appear on each other's
        leaderboards.
      </Text>

      <Hr style={divider} />

      {/* ── What you can do together ── */}
      <Section style={togetherCard}>
        <Text style={togetherHeading}>Better together</Text>

        <Section style={togetherItem}>
          <Row>
            <Column style={togetherNumCol}>
              <Text style={togetherNum}>1</Text>
            </Column>
            <Column>
              <Text style={togetherTitle}>Join challenges</Text>
              <Text style={togetherDesc}>
                Compete in health challenges and push each other to do more.
              </Text>
            </Column>
          </Row>
        </Section>

        <Section style={togetherItem}>
          <Row>
            <Column style={togetherNumCol}>
              <Text style={togetherNum}>2</Text>
            </Column>
            <Column>
              <Text style={togetherTitle}>Share milestones</Text>
              <Text style={togetherDesc}>
                Celebrate achievements and streaks on each other's feed.
              </Text>
            </Column>
          </Row>
        </Section>

        <Section style={togetherItem}>
          <Row>
            <Column style={togetherNumCol}>
              <Text style={togetherNum}>3</Text>
            </Column>
            <Column>
              <Text style={togetherTitle}>Leaderboards</Text>
              <Text style={togetherDesc}>
                See how you stack up against each other across all metrics.
              </Text>
            </Column>
          </Row>
        </Section>
      </Section>

      <Hr style={divider} />

      {/* ── App download ── */}
      <Section style={downloadSection}>
        <Text style={downloadHeading}>New to SeeMyHealth?</Text>
        <Text style={downloadText}>
          Download the app to accept the request and start your health
          journey.
        </Text>
        <Section style={downloadStoreRow}>
          <Row>
            <Column align="center" style={downloadStoreCol}>
              <Button href="https://apps.apple.com/app/seemyhealth" style={downloadStoreButton}>
                App Store
              </Button>
            </Column>
            <Column align="center" style={downloadStoreCol}>
              <Button href="https://play.google.com/store/apps/details?id=ai.seemyhealth" style={downloadStoreButton}>
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

// ── Requester card ──

const requesterCard = {
  backgroundColor: "#141414",
  borderRadius: "12px",
  padding: "28px 24px",
  textAlign: "center" as const,
  border: "1px solid rgba(255, 255, 255, 0.06)",
};

const avatarImage = {
  borderRadius: "50%",
  display: "block" as const,
  margin: "0 auto 12px auto",
};

const requesterName = {
  fontSize: "20px",
  fontWeight: "700" as const,
  color: "#f5f5f5",
  margin: "0 0 4px 0",
};

const requesterBio = {
  fontSize: "14px",
  color: "rgba(255, 255, 255, 0.45)",
  margin: "0",
};

const cardDivider = {
  borderColor: "rgba(255, 255, 255, 0.06)",
  margin: "16px 0",
};

const statsGrid = {
  textAlign: "center" as const,
};

const statCell = {
  width: "33.33%",
  textAlign: "center" as const,
};

const statValue = {
  fontSize: "18px",
  fontWeight: "700" as const,
  color: "#f5f5f5",
  margin: "0 0 4px 0",
};

const statLabel = {
  fontSize: "10px",
  fontWeight: "600" as const,
  color: "rgba(255, 255, 255, 0.3)",
  letterSpacing: "1.5px",
  margin: "0",
};

// ── Actions ──

const ctaCenter = {
  textAlign: "center" as const,
  margin: "28px 0 12px 0",
};

const ctaSecondary = {
  textAlign: "center" as const,
};

const declineButton = {
  backgroundColor: "transparent",
  color: "rgba(255, 255, 255, 0.4)",
  padding: "10px 24px",
  borderRadius: "50px",
  fontSize: "13px",
  fontWeight: "600" as const,
  textDecoration: "none",
  display: "inline-block",
  border: "1px solid rgba(255, 255, 255, 0.1)",
};

// ── Together ──

const togetherCard = {
  backgroundColor: "#141414",
  borderRadius: "12px",
  padding: "24px",
  border: "1px solid rgba(255, 255, 255, 0.06)",
};

const togetherHeading = {
  fontSize: "18px",
  fontWeight: "700" as const,
  color: "#f5f5f5",
  margin: "0 0 20px 0",
};

const togetherItem = {
  marginBottom: "14px",
};

const togetherNumCol = {
  width: "28px",
  verticalAlign: "top" as const,
};

const togetherNum = {
  fontSize: "14px",
  fontWeight: "700" as const,
  color: "rgba(255, 255, 255, 0.12)",
  margin: "0",
  lineHeight: "22px",
};

const togetherTitle = {
  fontSize: "15px",
  fontWeight: "600" as const,
  color: "#f5f5f5",
  margin: "0 0 2px 0",
};

const togetherDesc = {
  fontSize: "13px",
  color: "rgba(255, 255, 255, 0.45)",
  lineHeight: "20px",
  margin: "0",
};

// ── Download ──

const downloadSection = {
  textAlign: "center" as const,
};

const downloadHeading = {
  fontSize: "18px",
  fontWeight: "700" as const,
  color: "#f5f5f5",
  margin: "0 0 6px 0",
  textAlign: "center" as const,
};

const downloadText = {
  fontSize: "14px",
  color: "rgba(255, 255, 255, 0.45)",
  lineHeight: "22px",
  margin: "0",
  textAlign: "center" as const,
};

const downloadStoreRow = {
  marginTop: "16px",
};

const downloadStoreCol = {
  width: "50%",
  padding: "0 4px",
};

const downloadStoreButton = {
  backgroundColor: "transparent",
  color: "rgba(255, 255, 255, 0.6)",
  padding: "10px 20px",
  borderRadius: "50px",
  fontSize: "12px",
  fontWeight: "600" as const,
  textDecoration: "none",
  display: "inline-block",
  border: "1px solid rgba(255, 255, 255, 0.15)",
  letterSpacing: "0.5px",
};

const footerNote = {
  fontSize: "13px",
  color: "rgba(255, 255, 255, 0.3)",
  textAlign: "center" as const,
  lineHeight: "20px",
  margin: "0",
};
