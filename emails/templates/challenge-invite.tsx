import {
  Text,
  Section,
  Row,
  Column,
  Hr,
} from "@react-email/components";
import * as React from "react";
import { EmailLayout } from "../components/EmailLayout";
import { PrimaryButton } from "../components/PrimaryButton";
import { SecondaryButton } from "../components/SecondaryButton";

const BASE_URL = "https://seemyhealth.ai";
const CHALLENGE_IMG = "https://storage.googleapis.com/seemyhealth-email-assets/challenge-fitness.jpg";

export default function ChallengeInviteEmail() {
  return (
    <EmailLayout preview="{{inviter_name}} challenged you: {{challenge_name}}">

      {/* ── Banner ── */}
      <Section style={banner} className="dark-safe">
        <Text style={bannerIcon}>&#x1F525;</Text>
        <Text style={bannerTitle}>You've Been Challenged!</Text>
      </Section>

      {/* ── Greeting ── */}
      <Text style={heading}>
        {"{{inviter_name}}"} thinks you're up for it
      </Text>

      <Text style={paragraph}>
        Hey {"{{first_name}}"}, {"{{inviter_name}}"} invited you to join
        a health challenge. Think you can keep up?
      </Text>

      <Hr style={divider} />

      {/* ── Challenge details — image bg + glass card ── */}
      <Section style={challengeBgSection} className="dark-safe">
        <Section style={glassCard}>
          <Text style={categoryBadge}>{"{{challenge_category}}"}</Text>
          <Text style={challengeName}>{"{{challenge_name}}"}</Text>
          <Text style={challengeDesc}>{"{{challenge_description}}"}</Text>

          <Hr style={cardDivider} />

          <Section style={detailRow}>
            <Row>
              <Column style={detailIconCol}><Text style={iconText}>&#x1F3AF;</Text></Column>
              <Column>
                <Text style={detailLabel}>Goal</Text>
                <Text style={detailValue}>{"{{challenge_goal}}"}</Text>
              </Column>
            </Row>
          </Section>

          <Section style={detailRow}>
            <Row>
              <Column style={detailIconCol}><Text style={iconText}>&#x1F4C5;</Text></Column>
              <Column>
                <Text style={detailLabel}>Duration</Text>
                <Text style={detailValue}>{"{{start_date}}"} — {"{{end_date}}"} ({"{{duration}}"})</Text>
              </Column>
            </Row>
          </Section>

          <Section style={detailRow}>
            <Row>
              <Column style={detailIconCol}><Text style={iconText}>&#x1F465;</Text></Column>
              <Column>
                <Text style={detailLabel}>Participants</Text>
                <Text style={detailValue}>{"{{participant_count}}"} joined so far</Text>
              </Column>
            </Row>
          </Section>

          <Section style={detailRow}>
            <Row>
              <Column style={detailIconCol}><Text style={iconText}>&#x1F3C5;</Text></Column>
              <Column>
                <Text style={detailLabel}>Winning Criteria</Text>
                <Text style={detailValue}>{"{{goal_type}}"}</Text>
              </Column>
            </Row>
          </Section>
        </Section>
      </Section>

      {/* ── Join CTA ── */}
      <Section style={ctaSection}>
        <PrimaryButton href={`${BASE_URL}/challenges/{{challenge_id}}/join`}>
          Accept Challenge
        </PrimaryButton>
      </Section>

      <Section style={secondaryCta}>
        <SecondaryButton href={`${BASE_URL}/challenges/{{challenge_id}}`}>
          View Details
        </SecondaryButton>
      </Section>

      <Hr style={divider} />

      {/* ── Motivation ── */}
      <Section style={motivationSection}>
        <Text style={motivationHeading}>Why join?</Text>

        <Section style={motivationItem}>
          <Row>
            <Column style={motivationIconCol}><Text style={iconText}>&#x1F4AA;</Text></Column>
            <Column>
              <Text style={motivationText}>
                <strong>Build healthy habits</strong> — challenges create
                consistency and accountability.
              </Text>
            </Column>
          </Row>
        </Section>

        <Section style={motivationItem}>
          <Row>
            <Column style={motivationIconCol}><Text style={iconText}>&#x1F91D;</Text></Column>
            <Column>
              <Text style={motivationText}>
                <strong>Compete with friends</strong> — a little friendly
                competition goes a long way.
              </Text>
            </Column>
          </Row>
        </Section>

        <Section style={motivationItem}>
          <Row>
            <Column style={motivationIconCol}><Text style={iconText}>&#x1F3C6;</Text></Column>
            <Column>
              <Text style={motivationText}>
                <strong>Earn achievements</strong> — winners get badges
                displayed on their profile.
              </Text>
            </Column>
          </Row>
        </Section>
      </Section>

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

// (challengeHero and challengeImage removed — using bg image now)

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

// ── Challenge bg + glass card ──

const challengeBgSection = {
  backgroundImage: `url(${CHALLENGE_IMG})`,
  backgroundSize: "cover" as const,
  backgroundPosition: "center top" as const,
  backgroundColor: "#1a0533",
  borderRadius: "16px",
  padding: "32px 16px",
};

const glassCard = {
  backgroundColor: "rgba(26, 5, 51, 0.75)",
  borderRadius: "14px",
  padding: "28px 24px",
  border: "1px solid rgba(167, 139, 250, 0.2)",
};

const categoryBadge = {
  fontSize: "11px",
  fontWeight: "bold" as const,
  color: "#c4b5fd",
  letterSpacing: "1.5px",
  textTransform: "uppercase" as const,
  margin: "0 0 8px 0",
  backgroundColor: "rgba(167, 139, 250, 0.15)",
  padding: "4px 12px",
  borderRadius: "12px",
  display: "inline-block" as const,
};

const challengeName = {
  fontSize: "22px",
  fontWeight: "bold" as const,
  color: "#ffffff",
  margin: "0 0 4px 0",
};

const challengeDesc = {
  fontSize: "14px",
  color: "rgba(255, 255, 255, 0.7)",
  lineHeight: "22px",
  margin: "0",
};

const cardDivider = {
  borderColor: "rgba(167, 139, 250, 0.2)",
  margin: "16px 0",
};

const detailRow = {
  marginBottom: "12px",
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
  color: "rgba(196, 181, 253, 0.7)",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
  margin: "0",
  fontWeight: "600" as const,
};

const detailValue = {
  fontSize: "14px",
  color: "#ffffff",
  margin: "2px 0 0 0",
  fontWeight: "500" as const,
};

// ── CTAs ──

const ctaSection = {
  textAlign: "center" as const,
  margin: "24px 0 12px 0",
};

const secondaryCta = {
  textAlign: "center" as const,
};

// ── Motivation ──

const motivationSection = {
  background: "rgba(124, 58, 237, 0.03)",
  borderRadius: "12px",
  padding: "24px",
};

const motivationHeading = {
  fontSize: "18px",
  fontWeight: "bold" as const,
  color: "#111827",
  margin: "0 0 16px 0",
};

const motivationItem = {
  marginBottom: "14px",
};

const motivationIconCol = {
  width: "32px",
  verticalAlign: "top" as const,
};

const motivationText = {
  fontSize: "14px",
  lineHeight: "22px",
  color: "#374151",
  margin: "0",
};
