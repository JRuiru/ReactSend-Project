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

const BASE_URL = "https://seemyhealth.ai";

export default function EnquiryCustomerAcknowledgmentEmail() {
  return (
    <EmailLayout preview="Thanks {{first_name}}, we got your enquiry about the {{model}}">

      {/* ── Warm greeting ── */}
      <Text style={heading}>
        Hi {"{{first_name}}"}, we got your message
      </Text>

      <Text style={paragraph}>
        Thank you for your interest in the <strong>{"{{model}}"}</strong>.
        We know choosing the right health device matters, and we are glad
        you reached out. A real person on our team is already reviewing
        your enquiry.
      </Text>

      <Hr style={divider} />

      {/* ── Enquiry summary ── */}
      <Text style={sectionHeading}>Here is what you sent us</Text>

      <Section style={summaryCard}>
        <Section style={detailRow}>
          <Row>
            <Column style={iconCol}>
              <Text style={detailIcon}>&#x1F3E2;</Text>
            </Column>
            <Column>
              <Text style={summaryLabel}>Company</Text>
              <Text style={summaryValue}>{"{{company}}"}</Text>
            </Column>
          </Row>
        </Section>

        <Section style={detailRow}>
          <Row>
            <Column style={iconCol}>
              <Text style={detailIcon}>&#x2764;&#xFE0F;</Text>
            </Column>
            <Column>
              <Text style={summaryLabel}>Product of interest</Text>
              <Text style={summaryValue}>{"{{model}}"}</Text>
            </Column>
          </Row>
        </Section>

        <Text style={summaryLabel}>Your message</Text>
        <Section style={messageBox}>
          <Text style={messageText}>{"{{message}}"}</Text>
        </Section>
      </Section>

      <Hr style={divider} />

      {/* ── What to expect ── */}
      <Text style={sectionHeading}>What happens next</Text>

      <Section style={stepRow}>
        <Row>
          <Column style={stepNumCol}>
            <Text style={stepCircle}>1</Text>
          </Column>
          <Column style={stepContent}>
            <Text style={stepTitle}>We review your enquiry</Text>
            <Text style={stepDesc}>
              Our team is looking at the details you shared so we can give
              you the most helpful response.
            </Text>
          </Column>
        </Row>
      </Section>

      <Section style={stepRow}>
        <Row>
          <Column style={stepNumCol}>
            <Text style={stepCircle}>2</Text>
          </Column>
          <Column style={stepContent}>
            <Text style={stepTitle}>You will hear from us within 24 hours</Text>
            <Text style={stepDesc}>
              We will reply to the email address you used to reach out. Keep
              an eye on your inbox.
            </Text>
          </Column>
        </Row>
      </Section>

      <Section style={stepRow}>
        <Row>
          <Column style={stepNumCol}>
            <Text style={stepCircle}>3</Text>
          </Column>
          <Column style={stepContent}>
            <Text style={stepTitle}>Need something sooner?</Text>
            <Text style={stepDesc}>
              You can always reach us directly at{" "}
              <a href="mailto:sales@seemyhealth.ai" style={link}>
                sales@seemyhealth.ai
              </a>.
            </Text>
          </Column>
        </Row>
      </Section>

      <Hr style={divider} />

      {/* ── Browse CTA ── */}
      <Section style={ctaSection}>
        <Text style={ctaText}>
          While you wait, explore what SeeMyHealth can do for {"{{company}}"}.
        </Text>
        <PrimaryButton href={`${BASE_URL}/shop/`}>
          Browse Our Products
        </PrimaryButton>
      </Section>

      <Hr style={divider} />

      <Text style={closingText}>
        Thanks again, {"{{first_name}}"}. We are looking forward to helping
        you find the right fit.
      </Text>

    </EmailLayout>
  );
}

// ── Styles ──

const heading = {
  fontSize: "24px",
  fontWeight: "bold" as const,
  color: "#111827",
  margin: "0 0 8px 0",
};

const paragraph = {
  fontSize: "15px",
  lineHeight: "24px",
  color: "#374151",
  margin: "0",
};

const divider = {
  borderColor: "rgba(124, 58, 237, 0.1)",
  margin: "24px 0",
};

const sectionHeading = {
  fontSize: "18px",
  fontWeight: "bold" as const,
  color: "#111827",
  margin: "0 0 12px 0",
};

const summaryCard = {
  background: "linear-gradient(135deg, rgba(124,58,237,0.04) 0%, rgba(168,85,247,0.06) 100%)",
  borderRadius: "12px",
  padding: "20px 24px",
  border: "1px solid rgba(124, 58, 237, 0.08)",
};

const detailRow = {
  marginBottom: "16px",
};

const iconCol = {
  width: "36px",
  verticalAlign: "top" as const,
};

const detailIcon = {
  fontSize: "20px",
  margin: "0",
  lineHeight: "1.2",
};

const summaryLabel = {
  fontSize: "11px",
  fontWeight: "bold" as const,
  color: "#6b7280",
  textTransform: "uppercase" as const,
  letterSpacing: "1px",
  margin: "0 0 2px 0",
};

const summaryValue = {
  fontSize: "15px",
  color: "#111827",
  margin: "0",
};

const messageBox = {
  background: "rgba(255, 255, 255, 0.6)",
  borderRadius: "8px",
  padding: "12px 16px",
  borderLeft: "3px solid #7c3aed",
  marginTop: "6px",
};

const messageText = {
  fontSize: "14px",
  lineHeight: "22px",
  color: "#374151",
  margin: "0",
  whiteSpace: "pre-wrap" as const,
};

// ── Steps ──

const stepRow = {
  marginBottom: "16px",
};

const stepNumCol = {
  width: "44px",
  verticalAlign: "top" as const,
};

const stepCircle = {
  background: "linear-gradient(135deg, #7c3aed, #a855f7)",
  color: "#ffffff",
  width: "32px",
  height: "32px",
  borderRadius: "50%",
  textAlign: "center" as const,
  lineHeight: "32px",
  fontSize: "14px",
  fontWeight: "bold" as const,
  margin: "0",
};

const stepContent = {
  verticalAlign: "top" as const,
  paddingLeft: "8px",
};

const stepTitle = {
  fontSize: "15px",
  fontWeight: "bold" as const,
  color: "#111827",
  margin: "0 0 2px 0",
};

const stepDesc = {
  fontSize: "14px",
  color: "#6b7280",
  margin: "0",
  lineHeight: "20px",
};

const link = {
  color: "#7c3aed",
  textDecoration: "underline",
};

// ── CTA ──

const ctaSection = {
  textAlign: "center" as const,
};

const ctaText = {
  fontSize: "15px",
  color: "#374151",
  lineHeight: "24px",
  margin: "0 0 16px 0",
  textAlign: "center" as const,
};

const closingText = {
  fontSize: "15px",
  color: "#374151",
  textAlign: "center" as const,
  margin: "0",
};
