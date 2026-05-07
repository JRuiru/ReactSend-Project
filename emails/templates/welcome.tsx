import { Text, Section } from "@react-email/components";
import * as React from "react";
import { EmailLayout } from "../components/EmailLayout";
import { PrimaryButton } from "../components/PrimaryButton";

export default function WelcomeEmail() {
  return (
    <EmailLayout preview="Welcome to SeeMyHealth" title="Welcome">
      <Text style={heading}>
        Welcome to SeeMyHealth, {"{{first_name}}"}
      </Text>

      <Text style={paragraph}>
        Your health journey starts here. We're excited to help you take control
        of your wellness with personalized insights and care.
      </Text>

      <Section style={buttonSection}>
        <PrimaryButton href="https://seemyhealth.ai">Open App</PrimaryButton>
      </Section>
    </EmailLayout>
  );
}

const heading = {
  fontSize: "24px",
  fontWeight: "bold" as const,
  color: "#111827",
  margin: "0 0 16px 0",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  color: "#374151",
};

const buttonSection = {
  textAlign: "center" as const,
  margin: "32px 0",
};
