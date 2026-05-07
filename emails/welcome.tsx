import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface WelcomeEmailProps {
  name: string;
}

export const WelcomeEmail = ({ name = "there" }: WelcomeEmailProps) => (
  <Html>
    <Head />
    <Preview>Welcome aboard!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={heading}>Welcome, {name}!</Heading>
        <Text style={paragraph}>
          Thanks for signing up. We're excited to have you on board.
        </Text>
        <Section style={btnContainer}>
          <Button style={button} href="https://example.com/get-started">
            Get Started
          </Button>
        </Section>
        <Hr style={hr} />
        <Text style={footer}>
          If you have any questions, just reply to this email.
        </Text>
      </Container>
    </Body>
  </Html>
);

export default WelcomeEmail;

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "40px 20px",
  maxWidth: "560px",
  borderRadius: "5px",
};

const heading = {
  fontSize: "24px",
  fontWeight: "bold" as const,
  color: "#1a1a1a",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  color: "#484848",
};

const btnContainer = {
  textAlign: "center" as const,
  marginTop: "24px",
};

const button = {
  backgroundColor: "#5469d4",
  borderRadius: "5px",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "bold" as const,
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px 24px",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
