import {
  Text,
  Section,
  Hr,
} from "@react-email/components";
import * as React from "react";
import { EmailLayout } from "../components/EmailLayout";
import { PrimaryButton } from "../components/PrimaryButton";

const BASE_URL = "https://seemyhealth.ai";

export default function PasswordResetEmail() {
  return (
    <EmailLayout preview="Reset your SeeMyHealth password">

      {/* ── Icon ── */}
      <Section style={iconSection}>
        <Text style={lockIcon}>&#x1F510;</Text>
      </Section>

      {/* ── Heading ── */}
      <Text style={heading}>Reset your password</Text>

      <Text style={paragraph}>
        Hey {"{{first_name}}"}, we received a request to reset your
        SeeMyHealth password. Tap the button below to choose a new one.
      </Text>

      {/* ── Reset CTA ── */}
      <Section style={ctaSection}>
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
      <Section style={securityCard}>
        <Text style={securityHeading}>&#x1F6E1;&#xFE0F; Security notice</Text>

        <Text style={securityText}>
          If you didn't request this, you can safely ignore this email —
          your password won't change.
        </Text>

        <Text style={securityText}>
          If you're concerned about your account security, we recommend:
        </Text>

        <Section style={tipRow}>
          <Text style={tipText}>&#x2022; Enable Face ID or Touch ID in the app</Text>
        </Section>
        <Section style={tipRow}>
          <Text style={tipText}>&#x2022; Use a strong, unique password</Text>
        </Section>
        <Section style={tipRow}>
          <Text style={tipText}>&#x2022; Never share your login credentials</Text>
        </Section>
      </Section>

      <Hr style={divider} />

      <Text style={footerNote}>
        This email was sent to {"{{email}}"}. If you didn't request a
        password reset, please contact{" "}
        <a href={`${BASE_URL}/support`} style={linkStyle}>support</a>.
      </Text>

    </EmailLayout>
  );
}

// ── Styles ──

const iconSection = {
  textAlign: "center" as const,
  marginBottom: "8px",
};

const lockIcon = {
  fontSize: "48px",
  margin: "0",
  lineHeight: "1",
};

const heading = {
  fontSize: "26px",
  fontWeight: "bold" as const,
  color: "#111827",
  margin: "0 0 12px 0",
  textAlign: "center" as const,
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  color: "#374151",
  margin: "0",
  textAlign: "center" as const,
};

const ctaSection = {
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
  borderColor: "rgba(124, 58, 237, 0.1)",
  margin: "28px 0",
};

const securityCard = {
  background: "linear-gradient(135deg, rgba(124,58,237,0.04) 0%, rgba(168,85,247,0.06) 100%)",
  borderRadius: "12px",
  padding: "24px",
  border: "1px solid rgba(124, 58, 237, 0.08)",
};

const securityHeading = {
  fontSize: "16px",
  fontWeight: "bold" as const,
  color: "#111827",
  margin: "0 0 12px 0",
};

const securityText = {
  fontSize: "14px",
  lineHeight: "22px",
  color: "#374151",
  margin: "0 0 8px 0",
};

const tipRow = {
  marginBottom: "2px",
};

const tipText = {
  fontSize: "14px",
  color: "#374151",
  margin: "0",
  paddingLeft: "8px",
};

const footerNote = {
  fontSize: "12px",
  color: "#9ca3af",
  textAlign: "center" as const,
  lineHeight: "20px",
  margin: "0",
};

const linkStyle = {
  color: "#7c3aed",
  textDecoration: "underline",
};
