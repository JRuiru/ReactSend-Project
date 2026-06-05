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
