import { Hr, Section, Text, Link } from "@react-email/components";
import * as React from "react";

interface FooterProps {
  /** SendGrid templates pass "{{year}}", so the year is the send's, not the deploy's. */
  year?: string;
  /** SendGrid templates pass "{{support_email}}" for a line saying where to ask. */
  supportEmail?: string;
}

export const Footer = ({ year, supportEmail }: FooterProps = {}) => (
  <Section>
    <Hr style={hr} />
    {supportEmail && (
      <Text style={footerText}>
        Questions? We're at{" "}
        <Link href={`mailto:${supportEmail}`} style={link}>
          {supportEmail}
        </Link>
      </Text>
    )}
    <Text style={footerText}>
      &copy; {year ?? new Date().getFullYear()} SeeMyHealth. All rights reserved.
    </Text>
    <Text style={footerText}>
      <Link href="https://seemyhealth.ai" style={link}>
        seemyhealth.ai
      </Link>
    </Text>
  </Section>
);

const hr = {
  borderColor: "#1f1f1f",
  margin: "40px 0 16px 0",
};

const footerText = {
  fontSize: "12px",
  color: "#5e5e5e",
  margin: "4px 0",
  textAlign: "center" as const,
};

const link = {
  color: "#6b6b6b",
  textDecoration: "underline",
};
