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

export default function ProviderTeamInviteEmail() {
  return (
    <EmailLayout preview="You have been invited to join {{practice_name}}">

      {/* ── Badge ── */}
      <Section style={badgeWrapper}>
        <Section style={badge}>
          <Text style={badgeText}>TEAM INVITATION</Text>
        </Section>
      </Section>

      {/* ── Heading ── */}
      <Text style={heading}>
        You have been invited to join {"{{practice_name}}"}.
      </Text>

      {/* ── Body ── */}
      <Text style={paragraph}>
        You have been invited to join {"{{practice_name}}"} on SeeMyHealth for
        Providers as a {"{{role_name}}"}. Accept the invitation below to get
        started.
      </Text>

      <Hr style={divider} />

      {/* ── Invitation Details ── */}
      <Text style={sectionLabel}>INVITATION DETAILS</Text>

      <Section style={detailsCard}>
        <Section style={detailRow}>
          <Row>
            <Column style={labelCol}>
              <Text style={label}>Practice</Text>
            </Column>
            <Column style={valueCol}>
              <Text style={value}>{"{{practice_name}}"}</Text>
            </Column>
          </Row>
        </Section>

        <Hr style={cardDivider} />

        <Section style={detailRow}>
          <Row>
            <Column style={labelCol}>
              <Text style={label}>Role</Text>
            </Column>
            <Column style={valueCol}>
              <Text style={value}>{"{{role_name}}"}</Text>
            </Column>
          </Row>
        </Section>

        <Hr style={cardDivider} />

        <Section style={detailRow}>
          <Row>
            <Column style={labelCol}>
              <Text style={label}>Email</Text>
            </Column>
            <Column style={valueCol}>
              <Text style={value}>{"{{invite_email}}"}</Text>
            </Column>
          </Row>
        </Section>
      </Section>

      {/* ── CTA ── */}
      <Section style={ctaCenter}>
        <PrimaryButton href="{{action_url}}">Accept Invitation</PrimaryButton>
      </Section>

      <Hr style={divider} />

      {/* ── How It Works ── */}
      <Text style={sectionLabel}>HOW IT WORKS</Text>

      <Section style={stepCard}>
        <Row>
          <Column style={stepNumberCol}>
            <Text style={stepNumber}>1</Text>
          </Column>
          <Column>
            <Text style={stepTitle}>Accept the invitation</Text>
            <Text style={stepDesc}>
              Click the button above to create your provider account.
            </Text>
          </Column>
        </Row>
      </Section>

      <Section style={stepCard}>
        <Row>
          <Column style={stepNumberCol}>
            <Text style={stepNumber}>2</Text>
          </Column>
          <Column>
            <Text style={stepTitle}>Complete your profile</Text>
            <Text style={stepDesc}>
              Add your credentials, specializations, and availability.
            </Text>
          </Column>
        </Row>
      </Section>

      <Section style={stepCard}>
        <Row>
          <Column style={stepNumberCol}>
            <Text style={stepNumber}>3</Text>
          </Column>
          <Column>
            <Text style={stepTitle}>Start seeing clients</Text>
            <Text style={stepDesc}>
              View your schedule, manage bookings, and access client health data
              securely.
            </Text>
          </Column>
        </Row>
      </Section>

      <Hr style={divider} />

      {/* ── Security Note ── */}
      <Section style={securityCard}>
        <Text style={securityText}>
          This invitation was sent to {"{{invite_email}}"}. If you did not expect
          this invitation, you can safely ignore this email.
        </Text>
      </Section>

      <Hr style={divider} />

      {/* ── Cross-sell ── */}
      <Text style={ecosystemHeading}>Enrich client data</Text>
      <Text style={ecosystemSubtext}>
        Recommend SeeMyHealth devices to your clients. Richer health data means better insights for both of you.
      </Text>
      <Section style={ecosystemStrip}>
        <Row>
          <Column style={deviceCol}>
            <Section style={deviceCard}>
              <Img src={`${CDN}/ring-gold-hands-portrait/public`} width="160" alt="SeeMyHealth Ring" style={deviceImage} />
              <Text style={deviceBadgeOrange}>WEARABLE</Text>
              <Text style={deviceName}>The Ring</Text>
              <Button href={`${BASE_URL}/products/ring`} style={exploreBtnOrange}>Explore</Button>
            </Section>
          </Column>
          <Column style={deviceCol}>
            <Section style={deviceCard}>
              <Img src={`${CDN}/scale-black-nutritionist/public`} width="160" alt="SeeMyHealth Scale" style={deviceImage} />
              <Text style={deviceBadgeBlue}>BODY COMP</Text>
              <Text style={deviceName}>The Scale</Text>
              <Button href={`${BASE_URL}/products/scale`} style={exploreBtnBlue}>Explore</Button>
            </Section>
          </Column>
          <Column style={deviceCol}>
            <Section style={deviceCard}>
              <Img src={`${CDN}/bp-black-poster/public`} width="160" alt="SeeMyHealth BP Monitor" style={deviceImage} />
              <Text style={deviceBadgeRed}>VITALS</Text>
              <Text style={deviceName}>BP Monitor</Text>
              <Button href={`${BASE_URL}/products/bp-monitor`} style={exploreBtnRed}>Explore</Button>
            </Section>
          </Column>
        </Row>
      </Section>

    </EmailLayout>
  );
}

// ── Styles ──

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

const ctaCenter = {
  textAlign: "center" as const,
  margin: "24px 0 0 0",
};

// ── Badge ──

const badgeWrapper = {
  textAlign: "center" as const,
  paddingTop: "32px",
  paddingBottom: "24px",
};

const badge = {
  backgroundColor: "#0c1a2e",
  border: "1px solid #1a3a5c",
  borderRadius: "50px",
  padding: "8px 20px",
  display: "inline-block" as const,
};

const badgeText = {
  fontSize: "11px",
  fontWeight: "700" as const,
  color: "#3B82F6",
  letterSpacing: "2px",
  textTransform: "uppercase" as const,
  margin: "0",
};

// ── Details card ──

const detailsCard = {
  backgroundColor: "#141414",
  borderRadius: "12px",
  padding: "20px 24px",
  border: "1px solid #1a1a1a",
};

const detailRow = {
  padding: "12px 0",
};

const cardDivider = {
  borderColor: "#1a1a1a",
  margin: "0",
};

const labelCol = {
  width: "100px",
  verticalAlign: "top" as const,
};

const label = {
  fontSize: "12px",
  fontWeight: "600" as const,
  color: "#6b6b6b",
  textTransform: "uppercase" as const,
  letterSpacing: "1px",
  margin: "0",
};

const valueCol = {
  verticalAlign: "top" as const,
};

const value = {
  fontSize: "15px",
  color: "#f5f5f5",
  margin: "0",
  fontWeight: "500" as const,
};

// ── Steps ──

const stepCard = {
  backgroundColor: "#141414",
  borderRadius: "12px",
  padding: "16px 20px",
  border: "1px solid #1a1a1a",
  marginBottom: "8px",
};

const stepNumberCol = {
  width: "36px",
  verticalAlign: "top" as const,
};

const stepNumber = {
  fontSize: "14px",
  fontWeight: "700" as const,
  color: "#3B82F6",
  margin: "0",
};

const stepTitle = {
  fontSize: "14px",
  fontWeight: "600" as const,
  color: "#f5f5f5",
  margin: "0 0 4px 0",
};

const stepDesc = {
  fontSize: "13px",
  lineHeight: "20px",
  color: "#a3a3a3",
  margin: "0",
};

// ── Security ──

const securityCard = {
  backgroundColor: "#141414",
  borderRadius: "12px",
  padding: "16px 20px",
  border: "1px solid #1a1a1a",
};

const securityText = {
  fontSize: "13px",
  lineHeight: "20px",
  color: "#6b6b6b",
  margin: "0",
};

// ── Cross-sell ──

const ecosystemHeading = { fontSize: "18px", fontWeight: "700" as const, color: "#f5f5f5", margin: "0 0 6px 0", textAlign: "center" as const };
const ecosystemSubtext = { fontSize: "14px", color: "#6b6b6b", lineHeight: "22px", margin: "0 0 20px 0", textAlign: "center" as const };
const ecosystemStrip = { marginBottom: "0" };
const deviceCol = { width: "33.33%", verticalAlign: "top" as const, padding: "0 4px" };
const deviceCard = { backgroundColor: "#141414", borderRadius: "12px", padding: "0 0 16px 0", textAlign: "center" as const, border: "1px solid #1a1a1a", overflow: "hidden" as const };
const deviceImage = { width: "100%", display: "block" as const, borderRadius: "12px 12px 0 0" };
const deviceBadgeBase = { fontSize: "9px", fontWeight: "700" as const, letterSpacing: "1.5px", textTransform: "uppercase" as const, margin: "12px 0 4px 0", lineHeight: "1" };
const deviceBadgeOrange = { ...deviceBadgeBase, color: "#F97316" };
const deviceBadgeBlue = { ...deviceBadgeBase, color: "#3B82F6" };
const deviceBadgeRed = { ...deviceBadgeBase, color: "#EF4444" };
const deviceName = { fontSize: "13px", fontWeight: "600" as const, color: "#f5f5f5", margin: "0 0 10px 0" };
const exploreBtnBase = { fontSize: "11px", fontWeight: "600" as const, padding: "6px 16px", borderRadius: "50px", textDecoration: "none", display: "inline-block", letterSpacing: "0.5px", color: "#0a0a0a" };
const exploreBtnOrange = { ...exploreBtnBase, backgroundColor: "#F97316" };
const exploreBtnBlue = { ...exploreBtnBase, backgroundColor: "#3B82F6" };
const exploreBtnRed = { ...exploreBtnBase, backgroundColor: "#EF4444" };
