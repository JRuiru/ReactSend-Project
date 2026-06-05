import {
  Text,
  Section,
  Row,
  Column,
  Hr,
  Img,
} from "@react-email/components";
import * as React from "react";
import { EmailLayout } from "../../components/EmailLayout";
import { PrimaryButton } from "../../components/PrimaryButton";

const BASE_URL = "https://seemyhealth.ai";
const CDN = "https://imagedelivery.net/NnC2JvU8j4bgBbmedVhjJg";

const IMAGES = {
  heroRing: `${CDN}/ring-gold-hands-portrait/public`,
  goalsAchieved: `${CDN}/app-goals-achieved/public`,
};

export default function PasswordResetEmail() {
  return (
    <EmailLayout preview="Reset your SeeMyHealth password">

      {/* ── Hero image ── */}
      <Img
        src={IMAGES.heroRing}
        alt="SeeMyHealth smart ring"
        width="100%"
        style={heroImage}
      />

      {/* ── Heading ── */}
      <Text style={heading}>Reset your password</Text>

      <Text style={paragraph}>
        Hey {"{{first_name}}"}, we received a request to reset your
        SeeMyHealth password. Tap the button below to choose a new one.
      </Text>

      {/* ── Reset CTA ── */}
      <Section style={ctaCenter}>
        <PrimaryButton href={`${BASE_URL}/auth/reset/{{reset_token}}`}>
          Reset Password
        </PrimaryButton>
      </Section>

      {/* ── Expiry warning ── */}
      <Section style={expiryBadge}>
        <Text style={expiryText}>
          This link expires in {"{{expiry_time}}"}
        </Text>
      </Section>

      <Hr style={divider} />

      {/* ── Security notice ── */}
      <Text style={sectionLabel}>SECURITY</Text>

      <Section style={securityCard}>
        <Text style={securityHeading}>Did not request this?</Text>
        <Text style={securityText}>
          If you did not request a password reset, you can safely ignore
          this email. Your password will not change.
        </Text>

        <Hr style={cardDivider} />

        <Text style={tipsHeading}>Keep your account secure</Text>

        <Section style={tipRow}>
          <Row>
            <Column style={bulletCol}><Text style={bulletText}>&#x25CF;</Text></Column>
            <Column>
              <Text style={tipText}>Enable Face ID or Touch ID in the app</Text>
            </Column>
          </Row>
        </Section>

        <Section style={tipRow}>
          <Row>
            <Column style={bulletCol}><Text style={bulletText}>&#x25CF;</Text></Column>
            <Column>
              <Text style={tipText}>Use a strong, unique password</Text>
            </Column>
          </Row>
        </Section>

        <Section style={tipRow}>
          <Row>
            <Column style={bulletCol}><Text style={bulletText}>&#x25CF;</Text></Column>
            <Column>
              <Text style={tipText}>Never share your login credentials</Text>
            </Column>
          </Row>
        </Section>
      </Section>

      <Hr style={divider} />

      {/* ── While you're here ── */}
      <Section style={featureCard}>
        <Img
          src={IMAGES.goalsAchieved}
          alt="SeeMyHealth app goals dashboard"
          width="100%"
          style={featureImage}
        />
        <Section style={featureContent}>
          <Text style={featureLabel}>WHILE YOU ARE HERE</Text>
          <Text style={featureHeading}>Enable biometric login</Text>
          <Text style={featureText}>
            Skip the password entirely. Turn on Face ID or Touch ID in the
            app for faster, more secure access to your health data.
          </Text>
        </Section>
      </Section>

      <Hr style={divider} />

      {/* ── App download ── */}
      <Section style={appDownloadSection}>
        <Text style={appDownloadHeading}>Get the app</Text>
        <Row>
          <Column style={appBtnCol}>
            <a href={`${BASE_URL}/download/ios`} style={appButton}>
              App Store
            </a>
          </Column>
          <Column style={appBtnCol}>
            <a href={`${BASE_URL}/download/android`} style={appButton}>
              Google Play
            </a>
          </Column>
        </Row>
      </Section>

      <Hr style={divider} />

      <Text style={footerNote}>
        This email was sent to {"{{email}}"}. If you did not request a
        password reset, please contact{" "}
        <a href={`${BASE_URL}/support`} style={linkStyle}>support</a>.
      </Text>

    </EmailLayout>
  );
}

// ── Styles ──

const heroImage = {
  borderRadius: "12px",
  display: "block" as const,
  marginBottom: "24px",
};

const heading = {
  fontSize: "26px",
  fontWeight: "700" as const,
  color: "#f5f5f5",
  margin: "0 0 12px 0",
  textAlign: "center" as const,
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  color: "#a3a3a3",
  margin: "0",
  textAlign: "center" as const,
};

const ctaCenter = {
  textAlign: "center" as const,
  margin: "28px 0",
};

const expiryBadge = {
  textAlign: "center" as const,
};

const expiryText = {
  fontSize: "13px",
  color: "#ef4444",
  fontWeight: "600" as const,
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

const securityCard = {
  backgroundColor: "#141414",
  borderRadius: "12px",
  padding: "24px",
  border: "1px solid #1a1a1a",
};

const securityHeading = {
  fontSize: "18px",
  fontWeight: "700" as const,
  color: "#f5f5f5",
  margin: "0 0 8px 0",
};

const securityText = {
  fontSize: "14px",
  lineHeight: "22px",
  color: "#8a8a8a",
  margin: "0",
};

const cardDivider = {
  borderColor: "#1a1a1a",
  margin: "16px 0",
};

const tipsHeading = {
  fontSize: "14px",
  fontWeight: "600" as const,
  color: "#8a8a8a",
  margin: "0 0 12px 0",
};

const tipRow = {
  marginBottom: "8px",
};

const bulletCol = {
  width: "20px",
  verticalAlign: "top" as const,
};

const bulletText = {
  fontSize: "8px",
  color: "#5e5e5e",
  margin: "0",
  lineHeight: "22px",
};

const tipText = {
  fontSize: "14px",
  color: "#8a8a8a",
  margin: "0",
  lineHeight: "22px",
};

// ── Feature highlight ──

const featureCard = {
  backgroundColor: "#141414",
  borderRadius: "12px",
  overflow: "hidden" as const,
  textAlign: "center" as const,
  border: "1px solid #1a1a1a",
};

const featureImage = {
  display: "block" as const,
  borderRadius: "0",
};

const featureContent = {
  padding: "24px",
};

const featureLabel = {
  fontSize: "10px",
  fontWeight: "600" as const,
  color: "#5e5e5e",
  letterSpacing: "2px",
  margin: "0 0 8px 0",
};

const featureHeading = {
  fontSize: "18px",
  fontWeight: "700" as const,
  color: "#f5f5f5",
  margin: "0 0 6px 0",
};

const featureText = {
  fontSize: "14px",
  color: "#6b6b6b",
  lineHeight: "22px",
  margin: "0",
};

const appDownloadSection = {
  textAlign: "center" as const,
  margin: "0",
};

const appDownloadHeading = {
  fontSize: "13px",
  fontWeight: "600" as const,
  color: "#5e5e5e",
  letterSpacing: "1px",
  textTransform: "uppercase" as const,
  margin: "0 0 12px 0",
  textAlign: "center" as const,
};

const appBtnCol = {
  width: "50%",
  paddingLeft: "4px",
  paddingRight: "4px",
  textAlign: "center" as const,
};

const appButton = {
  display: "inline-block" as const,
  fontSize: "13px",
  fontWeight: "600" as const,
  color: "#8a8a8a",
  border: "1px solid #1a1a1a",
  borderRadius: "8px",
  padding: "10px 20px",
  textDecoration: "none",
  textAlign: "center" as const,
};

const footerNote = {
  fontSize: "12px",
  color: "#404040",
  textAlign: "center" as const,
  lineHeight: "20px",
  margin: "0",
};

const linkStyle = {
  color: "#6b6b6b",
  textDecoration: "underline",
};
