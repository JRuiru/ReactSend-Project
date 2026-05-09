import { Hr, Section, Text, Link } from "@react-email/components";
import * as React from "react";

export const Footer = () => (
  <Section>
    <Hr style={hr} className="footer-hr" />
    <Text style={footerText} className="footer-text">
      &copy; {new Date().getFullYear()} SeeMyHealth. All rights reserved.
    </Text>
    <Text style={footerText} className="footer-text">
      <Link href="https://seemyhealth.ai" style={link}>
        seemyhealth.ai
      </Link>
    </Text>
  </Section>
);

const hr = {
  borderColor: "rgba(124, 58, 237, 0.12)",
  margin: "32px 0 16px 0",
};

const footerText = {
  fontSize: "12px",
  color: "#9ca3af",
  margin: "4px 0",
  textAlign: "center" as const,
};

const link = {
  color: "#7c3aed",
  textDecoration: "underline",
};
