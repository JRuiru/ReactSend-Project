import {
  Text,
  Section,
  Img,
  Row,
  Column,
  Hr,
  Button,
} from "@react-email/components";
import * as React from "react";
import { EmailLayout } from "../../components/EmailLayout";


const CDN = "https://imagedelivery.net/NnC2JvU8j4bgBbmedVhjJg";
const BASE_URL = "https://seemyhealth.ai";

const IMAGES = {
  hero: `${CDN}/ring-man-smiling-lifestyle/public`,
};

export default function ReviewRequestAsk() {
  return (
    <EmailLayout preview="You have had your device for 2 weeks — we would love your honest review.">

      {/* ── Hero Image ── */}
      <Section style={heroSection}>
        <Img
          src={IMAGES.hero}
          width="560"
          alt="How is your SeeMyHealth experience?"
          style={heroImage}
        />
        <Section style={heroOverlay} className="force-white">
          <Text style={heroTagline}>2 WEEKS IN</Text>
          <Text style={heroTitle}>How's it going?</Text>
        </Section>
      </Section>

      {/* ── Greeting ── */}
      <Section style={greetingSection}>
        <Text style={heading}>
          {"{{ person|lookup:'first_name'|default:'Hey' }}"}, you have had your devices for two weeks.
        </Text>
        <Text style={paragraph}>
          By now you have had enough time to settle in. We would love to hear
          your honest thoughts — good, bad, or somewhere in between.
        </Text>
      </Section>

      {/* ── One-Click Star Rating ── */}
      <Section style={reviewCard}>
        <Text style={reviewTitle}>Tap your rating</Text>
        <Text style={reviewDesc}>
          One tap takes you straight to the review form with your rating
          pre-filled. It takes less than a minute.
        </Text>
        <Section style={{ textAlign: "center" as const }}>
          <Row style={{ display: "inline-block" as const }}>
            {[1, 2, 3, 4, 5].map((star) => (
              <Column key={star} style={{ padding: "0 4px" }}>
                <Button
                  href={`${BASE_URL}/reviews?rating=${star}&product={{ event.ProductHandle|default:'' }}`}
                  style={starButton}
                >
                  {"★".repeat(star)}{"☆".repeat(5 - star)}
                </Button>
              </Column>
            ))}
          </Row>
        </Section>
        <Text style={starHint}>
          ← 1 star &nbsp;&nbsp;&nbsp; 5 stars →
        </Text>
      </Section>

      <Hr style={divider} />

      {/* ── What to Include Checklist ── */}
      <Text style={sectionLabel}>WHAT TO INCLUDE</Text>
      <Text style={sectionHeading}>A few ideas to get you started.</Text>

      <Section style={checklistCard}>
        <Section style={checklistItem}>
          <Row>
            <Column style={checkNumCol}>
              <Text style={checkNum}>1</Text>
            </Column>
            <Column>
              <Text style={checkTitle}>Which device you bought</Text>
              <Text style={checkDesc}>
                Let others know which product you are reviewing and why you chose it.
              </Text>
            </Column>
          </Row>
        </Section>

        <Section style={checklistItem}>
          <Row>
            <Column style={checkNumCol}>
              <Text style={checkNum}>2</Text>
            </Column>
            <Column>
              <Text style={checkTitle}>Results or insights</Text>
              <Text style={checkDesc}>
                What have you noticed so far? Any data points that surprised you?
              </Text>
            </Column>
          </Row>
        </Section>

        <Section style={checklistItem}>
          <Row>
            <Column style={checkNumCol}>
              <Text style={checkNum}>3</Text>
            </Column>
            <Column>
              <Text style={checkTitle}>Setup experience</Text>
              <Text style={checkDesc}>
                Was it easy to get started? How has daily use been?
              </Text>
            </Column>
          </Row>
        </Section>

        <Section style={checklistItem}>
          <Row>
            <Column style={checkNumCol}>
              <Text style={checkNum}>4</Text>
            </Column>
            <Column>
              <Text style={checkTitle}>Improvements</Text>
              <Text style={checkDesc}>
                Anything you think we could do better? We read every review.
              </Text>
            </Column>
          </Row>
        </Section>
      </Section>

      <Hr style={divider} />

      {/* ── Social Proof ── */}
      <Section style={socialProofSection}>
        <Text style={socialProofNumber}>4.8 / 5</Text>
        <Text style={socialProofText}>
          average rating from 10,000+ customers
        </Text>
      </Section>

      <Hr style={divider} />

      {/* ── Help Card ── */}
      <Section style={helpCard}>
        <Text style={helpTitle}>Having an issue?</Text>
        <Text style={helpDesc}>
          If something is not working right, do not leave a bad review — let
          us fix it first. Our support team is here to help.
        </Text>
        <Section style={{ textAlign: "center" as const, marginTop: "16px" }}>
          <Button href={`${BASE_URL}/support`} style={darkButton}>
            Contact Support
          </Button>
        </Section>
      </Section>

      {/* ── Footer Note ── */}
      <Text style={footerNote}>
        You received this email because you purchased from seemyhealth.ai
        about 2 weeks ago.
      </Text>

    </EmailLayout>
  );
}

// ── Styles ──

const heroSection = {
  position: "relative" as const,
  borderRadius: "12px",
  overflow: "hidden" as const,
  marginBottom: "32px",
};

const heroImage = {
  width: "100%",
  display: "block" as const,
  borderRadius: "12px",
};

const heroOverlay = {
  position: "absolute" as const,
  bottom: "0",
  left: "0",
  right: "0",
  padding: "40px 24px 24px",
  background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)",
};

const heroTagline = {
  fontSize: "11px",
  fontWeight: "600" as const,
  color: "#b3b3b3",
  letterSpacing: "3px",
  textTransform: "uppercase" as const,
  margin: "0 0 4px 0",
};

const heroTitle = {
  fontSize: "32px",
  fontWeight: "700" as const,
  color: "#ffffff",
  margin: "0",
  letterSpacing: "-0.5px",
};

const greetingSection = {
  marginBottom: "8px",
};

const heading = {
  fontSize: "26px",
  fontWeight: "700" as const,
  color: "#f5f5f5",
  margin: "0 0 12px 0",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  color: "#a3a3a3",
  margin: "0 0 8px 0",
};

const sectionLabel = {
  fontSize: "11px",
  fontWeight: "600" as const,
  color: "#5e5e5e",
  letterSpacing: "3px",
  textTransform: "uppercase" as const,
  margin: "0 0 8px 0",
};

const sectionHeading = {
  fontSize: "22px",
  fontWeight: "700" as const,
  color: "#f5f5f5",
  margin: "0 0 24px 0",
  letterSpacing: "-0.3px",
};

const divider = {
  borderColor: "#1a1a1a",
  margin: "36px 0",
};

// ── Review Card ──

const reviewCard = {
  backgroundColor: "#141414",
  border: "1px solid #F97316",
  borderRadius: "12px",
  padding: "24px",
  textAlign: "center" as const,
};

const reviewTitle = {
  fontSize: "20px",
  fontWeight: "700" as const,
  color: "#f5f5f5",
  margin: "0 0 8px 0",
};

const reviewDesc = {
  fontSize: "14px",
  lineHeight: "22px",
  color: "#a3a3a3",
  margin: "0 0 16px 0",
};

// ── Checklist ──

const checklistCard = {
  backgroundColor: "#141414",
  borderRadius: "12px",
  padding: "24px",
  border: "1px solid #1a1a1a",
};

const checklistItem = {
  marginBottom: "16px",
};

const checkNumCol = {
  width: "32px",
  verticalAlign: "top" as const,
};

const checkNum = {
  fontSize: "16px",
  fontWeight: "700" as const,
  color: "#252525",
  margin: "0",
  lineHeight: "1",
};

const checkTitle = {
  fontSize: "15px",
  fontWeight: "600" as const,
  color: "#f5f5f5",
  margin: "0 0 2px 0",
};

const checkDesc = {
  fontSize: "13px",
  color: "#6b6b6b",
  lineHeight: "20px",
  margin: "0",
};

// ── Social Proof ──

const socialProofSection = {
  textAlign: "center" as const,
  padding: "8px 0",
};

const socialProofNumber = {
  fontSize: "32px",
  fontWeight: "700" as const,
  color: "#F97316",
  margin: "0",
  letterSpacing: "-0.5px",
};

const socialProofText = {
  fontSize: "14px",
  color: "#6b6b6b",
  margin: "4px 0 0 0",
};

// ── Help Card ──

const helpCard = {
  backgroundColor: "#141414",
  border: "1px solid #1a3a5c",
  borderRadius: "12px",
  padding: "24px",
  textAlign: "center" as const,
};

const helpTitle = {
  fontSize: "18px",
  fontWeight: "700" as const,
  color: "#f5f5f5",
  margin: "0 0 8px 0",
};

const helpDesc = {
  fontSize: "14px",
  lineHeight: "22px",
  color: "#a3a3a3",
  margin: "0",
};

const darkButton = {
  backgroundColor: "#222222",
  color: "#f5f5f5",
  padding: "12px 28px",
  borderRadius: "50px",
  fontSize: "12px",
  fontWeight: "600" as const,
  textDecoration: "none",
  display: "inline-block",
  letterSpacing: "0.5px",
  textTransform: "uppercase" as const,
  border: "1px solid #333333",
};

// ── Star Buttons ──

const starButton = {
  backgroundColor: "#1a1a1a",
  color: "#F97316",
  padding: "10px 12px",
  borderRadius: "8px",
  fontSize: "16px",
  textDecoration: "none",
  display: "inline-block",
  border: "1px solid #2a2a2a",
  letterSpacing: "2px",
  lineHeight: "1",
};

const starHint = {
  fontSize: "11px",
  color: "#525252",
  textAlign: "center" as const,
  margin: "8px 0 0 0",
};

// ── Footer ──

const footerNote = {
  fontSize: "13px",
  color: "#525252",
  textAlign: "center" as const,
  margin: "32px 0 0 0",
  lineHeight: "20px",
};
