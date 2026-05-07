import {
  Text,
  Section,
  Row,
  Column,
  Hr,
  Button,
} from "@react-email/components";
import * as React from "react";
import { EmailLayout } from "../components/EmailLayout";
import { PrimaryButton } from "../components/PrimaryButton";

const BASE_URL = "https://seemyhealth.ai";

export default function FriendRequestEmail() {
  return (
    <EmailLayout preview="{{requester_name}} wants to be friends on SeeMyHealth">

      {/* ── Banner ── */}
      <Section style={banner}>
        <Text style={bannerIcon}>&#x1F44B;</Text>
        <Text style={bannerTitle}>New Friend Request</Text>
      </Section>

      {/* ── Greeting ── */}
      <Text style={heading}>
        Hey {"{{first_name}}"}!
      </Text>

      <Text style={paragraph}>
        <strong>{"{{requester_name}}"}</strong> sent you a friend request on
        SeeMyHealth. Connect to share progress, join challenges together,
        and support each other's health goals.
      </Text>

      <Hr style={divider} />

      {/* ── Requester card ── */}
      <Section style={requesterCard}>
        <Text style={avatarCircle}>{"{{requester_initial}}"}</Text>
        <Text style={requesterName}>{"{{requester_name}}"}</Text>
        <Text style={requesterBio}>{"{{requester_bio}}"}</Text>

        <Hr style={cardDivider} />

        <Section style={statRow}>
          <Row>
            <Column style={statIconCol}>
              <Text style={statIcon}>&#x1F3AF;</Text>
            </Column>
            <Column>
              <Text style={statLabel}>Challenges</Text>
            </Column>
            <Column style={statValueCol}>
              <Text style={statValue}>{"{{requester_challenges}}"}</Text>
            </Column>
          </Row>
        </Section>
        <Section style={statRow}>
          <Row>
            <Column style={statIconCol}>
              <Text style={statIcon}>&#x1F3C6;</Text>
            </Column>
            <Column>
              <Text style={statLabel}>Achievements</Text>
            </Column>
            <Column style={statValueCol}>
              <Text style={statValue}>{"{{requester_achievements}}"}</Text>
            </Column>
          </Row>
        </Section>
        <Section style={statRow}>
          <Row>
            <Column style={statIconCol}>
              <Text style={statIcon}>&#x1F465;</Text>
            </Column>
            <Column>
              <Text style={statLabel}>Friends</Text>
            </Column>
            <Column style={statValueCol}>
              <Text style={statValue}>{"{{requester_friends}}"}</Text>
            </Column>
          </Row>
        </Section>
      </Section>

      {/* ── Actions ── */}
      <Section style={ctaSection}>
        <PrimaryButton href={`${BASE_URL}/friends/accept/{{request_id}}`}>
          Accept Request
        </PrimaryButton>
      </Section>

      <Section style={declineSection}>
        <Button href={`${BASE_URL}/friends/decline/{{request_id}}`} style={declineButton}>
          Decline
        </Button>
      </Section>

      <Hr style={divider} />

      <Text style={footerNote}>
        When you accept, you'll be able to see each other's public
        activity, join challenges together, and appear on each other's
        leaderboards.
      </Text>

    </EmailLayout>
  );
}

// ── Styles ──

const banner = {
  background: "linear-gradient(135deg, #1a0533 0%, #4c1d95 40%, #7c3aed 70%, #a855f7 100%)",
  borderRadius: "16px",
  padding: "36px 24px",
  textAlign: "center" as const,
  marginBottom: "24px",
};

const bannerIcon = {
  fontSize: "44px",
  margin: "0 0 8px 0",
  lineHeight: "1",
};

const bannerTitle = {
  fontSize: "26px",
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

// ── Requester card ──

const requesterCard = {
  background: "linear-gradient(135deg, rgba(124,58,237,0.04) 0%, rgba(168,85,247,0.06) 100%)",
  borderRadius: "14px",
  padding: "28px 24px",
  textAlign: "center" as const,
  border: "1px solid rgba(124, 58, 237, 0.1)",
};

const avatarCircle = {
  backgroundColor: "#7c3aed",
  color: "#ffffff",
  width: "56px",
  height: "56px",
  borderRadius: "50%",
  textAlign: "center" as const,
  lineHeight: "56px",
  fontSize: "24px",
  fontWeight: "bold" as const,
  margin: "0 auto 12px auto",
  display: "block" as const,
};

const requesterName = {
  fontSize: "20px",
  fontWeight: "bold" as const,
  color: "#111827",
  margin: "0 0 4px 0",
};

const requesterBio = {
  fontSize: "14px",
  color: "#6b7280",
  margin: "0",
};

const cardDivider = {
  borderColor: "rgba(124, 58, 237, 0.08)",
  margin: "16px 0",
};

const statRow = {
  marginBottom: "8px",
};

const statIconCol = {
  width: "28px",
  verticalAlign: "middle" as const,
};

const statIcon = {
  fontSize: "16px",
  margin: "0",
  lineHeight: "1",
};

const statValueCol = {
  width: "40px",
  textAlign: "right" as const,
};

const statValue = {
  fontSize: "16px",
  fontWeight: "bold" as const,
  color: "#7c3aed",
  margin: "0",
};

const statLabel = {
  fontSize: "14px",
  color: "#374151",
  margin: "0",
  fontWeight: "500" as const,
};

// ── Actions ──

const ctaSection = {
  textAlign: "center" as const,
  margin: "24px 0 12px 0",
};

const declineSection = {
  textAlign: "center" as const,
};

const declineButton = {
  backgroundColor: "#ffffff",
  color: "#6b7280",
  padding: "10px 24px",
  borderRadius: "8px",
  fontSize: "13px",
  fontWeight: "bold" as const,
  textDecoration: "none",
  display: "inline-block",
  border: "1px solid #d1d5db",
};

const footerNote = {
  fontSize: "13px",
  color: "#9ca3af",
  textAlign: "center" as const,
  lineHeight: "20px",
  margin: "0",
};
