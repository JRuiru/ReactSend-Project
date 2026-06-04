import {
  Text,
  Section,
  Img,
  Row,
  Column,
  Hr,
} from "@react-email/components";
import * as React from "react";
import { EmailLayout } from "../components/EmailLayout";
import { PrimaryButton } from "../components/PrimaryButton";
import { SecondaryButton } from "../components/SecondaryButton";

const CDN = "https://imagedelivery.net/NnC2JvU8j4bgBbmedVhjJg";
const BASE_URL = "https://seemyhealth.ai";

const IMAGES = {
  hero: `${CDN}/challenge-accepted/public`,
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
      <Section style={challengeCard} className="force-white">
        <div style={challengeBg}>
          <div style={challengeOverlay}>
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
          </div>
        </div>
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
  fontSize: "22px",
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

// ── Challenge card ──

const challengeCard = {
  borderRadius: "12px",
  overflow: "hidden" as const,
};

const challengeBg = {
  backgroundImage: `url(${CDN}/lifestyle-athlete/public)`,
  backgroundSize: "cover" as const,
  backgroundPosition: "center" as const,
  borderRadius: "12px",
  overflow: "hidden" as const,
};

const challengeOverlay = {
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  padding: "32px 24px",
};

const challengeName = {
  fontSize: "22px",
  fontWeight: "700" as const,
  color: "#f5f5f5",
  margin: "0 0 8px 0",
};

const challengeDesc = {
  fontSize: "14px",
  color: "rgba(255, 255, 255, 0.6)",
  lineHeight: "22px",
  margin: "0",
};

const cardDivider = {
  borderColor: "rgba(255, 255, 255, 0.1)",
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
  color: "rgba(255, 255, 255, 0.35)",
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
  color: "rgba(255, 255, 255, 0.12)",
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
  color: "rgba(255, 255, 255, 0.45)",
  lineHeight: "21px",
  margin: "0",
};
