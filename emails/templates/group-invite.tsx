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

export default function GroupInviteEmail() {
  return (
    <EmailLayout preview="{{inviter_name}} invited you to join {{group_name}}">

      {/* ── Banner ── */}
      <Section style={banner}>
        <Text style={bannerIcon}>&#x1F46B;</Text>
        <Text style={bannerTitle}>Group Invitation</Text>
      </Section>

      {/* ── Greeting ── */}
      <Text style={heading}>
        You're invited, {"{{first_name}}"}!
      </Text>

      <Text style={paragraph}>
        <strong>{"{{inviter_name}}"}</strong> invited you to join
        <strong> {"{{group_name}}"}</strong> on SeeMyHealth. Groups are a
        great way to stay motivated and share your health journey.
      </Text>

      <Hr style={divider} />

      {/* ── Group card ── */}
      <Section style={groupCard}>
        <Text style={groupName}>{"{{group_name}}"}</Text>
        <Text style={groupDesc}>{"{{group_description}}"}</Text>

        <Hr style={cardDivider} />

        <Section style={detailRow}>
          <Row>
            <Column style={detailIconCol}>
              <Text style={iconText}>&#x1F465;</Text>
            </Column>
            <Column>
              <Text style={detailLabel}>Members</Text>
              <Text style={detailValue}>{"{{member_count}}"} members</Text>
            </Column>
          </Row>
        </Section>

        <Section style={detailRow}>
          <Row>
            <Column style={detailIconCol}>
              <Text style={iconText}>&#x1F3AF;</Text>
            </Column>
            <Column>
              <Text style={detailLabel}>Focus</Text>
              <Text style={detailValue}>{"{{group_category}}"}</Text>
            </Column>
          </Row>
        </Section>

        <Section style={detailRow}>
          <Row>
            <Column style={detailIconCol}>
              <Text style={iconText}>&#x1F4C5;</Text>
            </Column>
            <Column>
              <Text style={detailLabel}>Created</Text>
              <Text style={detailValue}>{"{{created_date}}"}</Text>
            </Column>
          </Row>
        </Section>

        <Section style={detailRow}>
          <Row>
            <Column style={detailIconCol}>
              <Text style={iconText}>&#x1F525;</Text>
            </Column>
            <Column>
              <Text style={detailLabel}>Active Challenges</Text>
              <Text style={detailValue}>{"{{active_challenges}}"} running now</Text>
            </Column>
          </Row>
        </Section>
      </Section>

      {/* ── CTAs ── */}
      <Section style={ctaSection}>
        <PrimaryButton href={`${BASE_URL}/groups/{{group_id}}/join`}>
          Join Group
        </PrimaryButton>
      </Section>

      <Section style={secondaryCta}>
        <SecondaryButton href={`${BASE_URL}/groups/{{group_id}}`}>
          View Group
        </SecondaryButton>
      </Section>

      <Hr style={divider} />

      {/* ── What to expect ── */}
      <Text style={sectionHeading}>What groups offer</Text>

      <Section style={benefitRow}>
        <Row>
          <Column style={benefitIconCol}>
            <Text style={iconText}>&#x1F4AC;</Text>
          </Column>
          <Column>
            <Text style={benefitText}>
              <strong>Shared feed</strong> — celebrate wins and share
              health milestones with the group.
            </Text>
          </Column>
        </Row>
      </Section>

      <Section style={benefitRow}>
        <Row>
          <Column style={benefitIconCol}>
            <Text style={iconText}>&#x1F3C6;</Text>
          </Column>
          <Column>
            <Text style={benefitText}>
              <strong>Group challenges</strong> — compete together and
              hold each other accountable.
            </Text>
          </Column>
        </Row>
      </Section>

      <Section style={benefitRow}>
        <Row>
          <Column style={benefitIconCol}>
            <Text style={iconText}>&#x1F4C8;</Text>
          </Column>
          <Column>
            <Text style={benefitText}>
              <strong>Leaderboards</strong> — see how you stack up
              against the rest of the group.
            </Text>
          </Column>
        </Row>
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

// ── Group card ──

const groupCard = {
  background: "linear-gradient(135deg, rgba(124,58,237,0.04) 0%, rgba(168,85,247,0.06) 100%)",
  borderRadius: "14px",
  padding: "28px 24px",
  border: "1px solid rgba(124, 58, 237, 0.1)",
};

const groupName = {
  fontSize: "22px",
  fontWeight: "bold" as const,
  color: "#111827",
  margin: "0 0 6px 0",
};

const groupDesc = {
  fontSize: "14px",
  color: "#6b7280",
  lineHeight: "22px",
  margin: "0",
};

const cardDivider = {
  borderColor: "rgba(124, 58, 237, 0.08)",
  margin: "16px 0",
};

const detailRow = { marginBottom: "12px" };
const detailIconCol = { width: "32px", verticalAlign: "top" as const };

const iconText = {
  fontSize: "18px",
  margin: "0",
  lineHeight: "1",
};

const detailLabel = {
  fontSize: "11px",
  color: "#9ca3af",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
  margin: "0",
  fontWeight: "600" as const,
};

const detailValue = {
  fontSize: "14px",
  color: "#111827",
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

// ── Benefits ──

const sectionHeading = {
  fontSize: "18px",
  fontWeight: "bold" as const,
  color: "#111827",
  margin: "0 0 16px 0",
};

const benefitRow = { marginBottom: "14px" };
const benefitIconCol = { width: "32px", verticalAlign: "top" as const };

const benefitText = {
  fontSize: "14px",
  lineHeight: "22px",
  color: "#374151",
  margin: "0",
};
