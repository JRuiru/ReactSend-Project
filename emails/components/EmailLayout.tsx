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
    <Head>
      <meta name="color-scheme" content="light dark" />
      <meta name="supported-color-schemes" content="light dark" />
      <style dangerouslySetInnerHTML={{ __html: `
        :root { color-scheme: light dark; supported-color-schemes: light dark; }
        @media (prefers-color-scheme: dark) {
          .email-bg {
            background: #1a0533 !important;
          }
          .email-container {
            background-color: #1e1e2e !important;
            border-color: rgba(167, 139, 250, 0.2) !important;
          }
          .email-container h1, .email-container h2, .email-container h3,
          .email-container p, .email-container td, .email-container span {
            color: #e4e4e7 !important;
          }
          .email-container a {
            color: #a78bfa !important;
          }
          .header-border {
            border-bottom-color: rgba(167, 139, 250, 0.2) !important;
          }
          .footer-hr {
            border-color: rgba(167, 139, 250, 0.2) !important;
          }
          .footer-text {
            color: #71717a !important;
          }
          .logo-text {
            color: #a78bfa !important;
          }
        }
        @media only screen and (max-width: 600px) {
          .email-container {
            padding: 24px 16px !important;
            border-radius: 0 !important;
            margin: 0 !important;
            max-width: 100% !important;
            width: 100% !important;
          }
          .email-bg {
            padding: 0 !important;
          }
          table, td, div, p, a, span {
            max-width: 100% !important;
            word-break: break-word !important;
          }
          img {
            max-width: 100% !important;
            height: auto !important;
          }
        }
      `}} />
    </Head>
    <Preview>{preview}</Preview>
    <Body style={main}>
      <Section style={gradientBg} className="email-bg">
        <Container style={glassContainer} className="email-container">
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
