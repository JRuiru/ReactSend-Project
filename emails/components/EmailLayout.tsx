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
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
      />
      <style dangerouslySetInnerHTML={{ __html: `
        :root { color-scheme: light dark; supported-color-schemes: light dark; }
        @media (prefers-color-scheme: dark) {
          .email-bg {
            background-color: #000000 !important;
          }
          .email-container {
            background-color: #0a0a0a !important;
            border-color: rgba(255, 255, 255, 0.06) !important;
          }
          .dark-safe p, .dark-safe td, .dark-safe span, .dark-safe a,
          .dark-safe h1, .dark-safe h2, .dark-safe h3 {
            color: inherit !important;
          }
        }
        .force-white p, .force-white span, .force-white td,
        .force-white h1, .force-white h2, .force-white h3 {
          color: #ffffff !important;
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
          /* Metric grid - tighten on mobile */
          .metric-value {
            font-size: 20px !important;
          }
          .metric-label {
            font-size: 9px !important;
            letter-spacing: 1px !important;
          }
          .metric-delta {
            font-size: 11px !important;
          }
          /* Mood grid */
          .mood-number {
            font-size: 22px !important;
          }
          .mood-emoji {
            font-size: 26px !important;
          }
          /* Goal percent */
          .goal-percent {
            font-size: 14px !important;
          }
          /* Hero text */
          .hero-period {
            font-size: 22px !important;
          }
          /* Button full width on mobile */
          .primary-btn {
            width: 100% !important;
            text-align: center !important;
          }
        }
      `}} />
    </Head>
    <Preview>{preview}</Preview>
    <Body style={main}>
      <Section style={outerBg} className="email-bg">
        <Container style={container} className="email-container">
          <Header title={title} />
          {children}
          <Footer />
        </Container>
      </Section>
    </Body>
  </Html>
);

const main = {
  backgroundColor: "#0a0a0a",
  fontFamily:
    'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  margin: "0",
  padding: "0",
};

const outerBg = {
  backgroundColor: "#0a0a0a",
  padding: "40px 16px",
};

const container = {
  backgroundColor: "#0a0a0a",
  margin: "0 auto",
  padding: "0 40px",
  maxWidth: "560px",
};
