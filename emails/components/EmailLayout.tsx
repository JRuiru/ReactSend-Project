import { Html, Head, Body, Container, Preview, Section } from "@react-email/components";
import * as React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface EmailLayoutProps {
  preview: string;
  title?: string;
  /** Passed to the footer; SendGrid templates use `transactional` instead of setting these by hand. */
  year?: string;
  supportEmail?: string;
  children: React.ReactNode;
}

export const EmailLayout = ({ preview, title, year, supportEmail, children }: EmailLayoutProps) => (
  <Html>
    <Head>
      <meta name="color-scheme" content="dark" />
      <meta name="supported-color-schemes" content="dark" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
      />
      <style dangerouslySetInnerHTML={{ __html: `
        :root { color-scheme: light dark; }
        .force-white p, .force-white span, .force-white td,
        .force-white h1, .force-white h2, .force-white h3 {
          color: #ffffff !important;
        }
        /* Force dark mode — prevent email clients from inverting */
        @media (prefers-color-scheme: dark) {
          body, .email-bg, .outer-bg { background-color: #0a0a0a !important; }
          .email-container { background-color: #0a0a0a !important; }
          h1, h2, h3, p, td, span { color: inherit !important; }
          a { color: #ffffff !important; }
          .primary-btn { color: #0a0a0a !important; background-color: #ffffff !important; }
        }
        /* Outlook dark mode overrides */
        [data-ogsc] body, [data-ogsc] .email-bg, [data-ogsc] .outer-bg { background-color: #0a0a0a !important; }
        [data-ogsc] .email-container { background-color: #0a0a0a !important; }
        [data-ogsc] h1, [data-ogsc] h2, [data-ogsc] h3, [data-ogsc] p, [data-ogsc] td, [data-ogsc] span { color: inherit !important; }
        [data-ogsc] .primary-btn { color: #0a0a0a !important; background-color: #ffffff !important; }
        [data-ogsb] body, [data-ogsb] .email-bg, [data-ogsb] .outer-bg { background-color: #0a0a0a !important; }
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
          .metric-value { font-size: 20px !important; }
          .metric-label { font-size: 9px !important; letter-spacing: 1px !important; }
          .metric-delta { font-size: 11px !important; }
          .mood-number { font-size: 22px !important; }
          .mood-emoji { font-size: 26px !important; }
          .goal-percent { font-size: 14px !important; }
          .hero-period { font-size: 22px !important; }
          .primary-btn { width: 100% !important; text-align: center !important; }
        }
      `}} />
    </Head>
    <Preview>{preview}</Preview>
    <Body style={main}>
      <Section style={outerBg} className="email-bg">
        <Container style={container} className="email-container">
          <Header title={title} />
          {children}
          <Footer year={year} supportEmail={supportEmail} />
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
