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

const footerNote = {
  fontSize: "13px",
  color: "rgba(255, 255, 255, 0.3)",
  textAlign: "center" as const,
  lineHeight: "20px",
  margin: "0",
};
