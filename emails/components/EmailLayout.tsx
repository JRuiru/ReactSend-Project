import { Html, Head, Body, Container, Preview, Section } from "@react-email/components";
import * as React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface EmailLayoutProps {
  preview: string;
  title?: string;
  children: React.ReactNode;
}

export const EmailLayout = ({ preview, title, children }: EmailLayoutProps) => (
  <Html>
    <Head />
    <Preview>{preview}</Preview>
    <Body style={main}>
      <Section style={gradientBg}>
        <Container style={glassContainer}>
          <Header title={title} />
          {children}
          <Footer />
        </Container>
      </Section>
    </Body>
  </Html>
);

const main = {
  backgroundColor: "#1a0533",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  margin: "0",
  padding: "0",
};

const gradientBg = {
  background: "linear-gradient(160deg, #1a0533 0%, #2d1654 30%, #4c1d95 60%, #1a0533 100%)",
  padding: "40px 16px",
};

const glassContainer = {
  backgroundColor: "rgba(255, 255, 255, 0.96)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  margin: "0 auto",
  padding: "40px",
  maxWidth: "560px",
  borderRadius: "16px",
  border: "1px solid rgba(124, 58, 237, 0.1)",
  boxShadow: "0 8px 32px rgba(76, 29, 149, 0.15)",
};
