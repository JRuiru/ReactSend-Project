import { Hr, Section, Text, Link } from "@react-email/components";
import * as React from "react";

export const Footer = () => (
  <Section>
    <Hr style={hr} />
    <Text style={footerText}>
      &copy; {new Date().getFullYear()} SeeMyHealth. All rights reserved.
    </Text>
    <Text style={footerText}>
      <Link href="https://seemyhealth.ai" style={link}>
        seemyhealth.ai
      </Link>
    </Text>
  </Section>
);

const hr = {
  borderColor: "rgba(255, 255, 255, 0.08)",
  margin: "40px 0 16px 0",
};

const footerText = {
  fontSize: "12px",
  color: "rgba(255, 255, 255, 0.3)",
  margin: "4px 0",
  textAlign: "center" as const,
};

const link = {
  color: "rgba(255, 255, 255, 0.4)",
  textDecoration: "underline",
};
