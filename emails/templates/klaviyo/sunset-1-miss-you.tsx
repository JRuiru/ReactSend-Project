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
import { PrimaryButton } from "../../components/PrimaryButton";
import { SecondaryButton } from "../../components/SecondaryButton";

const CDN = "https://imagedelivery.net/NnC2JvU8j4bgBbmedVhjJg";
const BASE_URL = "https://seemyhealth.ai";

export default function SunsetMissYou() {
  return (
    <EmailLayout preview="We noticed you haven't opened our emails — want to stay connected?">

      {/* ── Hero ── */}
      <Section style={heroSection}>
        <Img src={`${CDN}/ring-app-bedside-miss-you/public`} width="560" alt="We miss you" style={heroImage} />
        <Section style={heroOverlay} className="force-white">
          <Text style={heroTagline}>WE MISS YOU</Text>
          <Text style={heroTitle}>Still there?</Text>
        </Section>
      </Section>

      {/* ── Badge ── */}
      <Section style={badgeWrapper}>
        <Section style={badge}>
          <Text style={badgeText}>ARE YOU STILL THERE?</Text>
        </Section>
      </Section>

      {/* ── Greeting ── */}
      <Section style={greetingSection}>
        <Text style={heading}>
          {"{{ person|lookup:'first_name'|default:'Hey' }}"}, we want to respect your inbox.
        </Text>
        <Text style={paragraph}>
          We noticed you haven't opened our emails in a while. We only want to
          send you content you actually want. Let us know if you'd like to stay
          connected.
        </Text>
      </Section>

      {/* ── Stay Connected Card ── */}
      <Section style={stayCard}>
        <Text style={stayTitle}>Want to keep hearing from us?</Text>
        <Text style={stayDesc}>
          Click below to stay on our list. You'll continue getting product
          updates, health tips, and exclusive offers.
        </Text>
        <Section style={ctaCenter}>
          <PrimaryButton href={`${BASE_URL}/shop`}>
            Yes, Keep Me Subscribed
          </PrimaryButton>
        </Section>
      </Section>

      <Hr style={divider} />

      {/* ── What You'll Get ── */}
      <Text style={sectionLabel}>WHAT YOU'LL GET</Text>
      <Text style={sectionHeading}>Reasons to stay.</Text>

      <Section style={checklistCard}>
        <Section style={checklistItem}>
          <Row>
            <Column style={checkCol}>
              <Text style={checkmark}>&#10003;</Text>
            </Column>
            <Column>
              <Text style={checkTitle}>New product launches</Text>
              <Text style={checkDesc}>
                Be the first to know when new devices drop.
              </Text>
            </Column>
          </Row>
        </Section>

        <Section style={checklistItem}>
          <Row>
            <Column style={checkCol}>
              <Text style={checkmark}>&#10003;</Text>
            </Column>
            <Column>
              <Text style={checkTitle}>Exclusive offers</Text>
              <Text style={checkDesc}>
                Subscriber-only discounts and early access deals.
              </Text>
            </Column>
          </Row>
        </Section>

        <Section style={checklistItem}>
          <Row>
            <Column style={checkCol}>
              <Text style={checkmark}>&#10003;</Text>
            </Column>
            <Column>
              <Text style={checkTitle}>Health tips</Text>
              <Text style={checkDesc}>
                Wellness advice and device tutorials to level up your health.
              </Text>
            </Column>
          </Row>
        </Section>

        <Section style={checklistItemLast}>
          <Row>
            <Column style={checkCol}>
              <Text style={checkmark}>&#10003;</Text>
            </Column>
            <Column>
              <Text style={checkTitle}>Early access</Text>
              <Text style={checkDesc}>
                Get new features and beta access before anyone else.
              </Text>
            </Column>
          </Row>
        </Section>
      </Section>

      <Hr style={divider} />

      {/* ── No Action Note ── */}
      <Text style={italicNote}>
        If you don't take any action, we'll send one more email and then remove
        you from our list to keep things clean. No hard feelings.
      </Text>

      <Hr style={divider} />

      {/* ── Footer Note ── */}
      <Text style={footerNote}>
        You received this email because you're subscribed to SeeMyHealth emails.
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
  fontSize: "28px",
  fontWeight: "700" as const,
  color: "#ffffff",
  margin: "0",
  letterSpacing: "-0.3px",
};

const badgeWrapper = {
  textAlign: "center" as const,
  paddingTop: "32px",
  paddingBottom: "24px",
};

const badge = {
  backgroundColor: "#0c1a2e",
  border: "1px solid #1a3a5c",
  borderRadius: "50px",
  padding: "8px 20px",
  display: "inline-block" as const,
};

const badgeText = {
  margin: "0",
  fontSize: "11px",
  fontWeight: "600" as const,
  color: "#3B82F6",
  letterSpacing: "2px",
  textTransform: "uppercase" as const,
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
  margin: "0 0 16px 0",
  letterSpacing: "-0.3px",
};

const divider = {
  borderColor: "#1a1a1a",
  margin: "36px 0",
};

const ctaCenter = {
  textAlign: "center" as const,
  margin: "20px 0 0 0",
};

// ── Stay Connected card ──

const stayCard = {
  backgroundColor: "#141414",
  border: "1px solid #1a3a5c",
  borderRadius: "12px",
  padding: "28px 24px",
  textAlign: "center" as const,
  marginTop: "16px",
};

const stayTitle = {
  margin: "0 0 8px 0",
  fontSize: "20px",
  fontWeight: "700" as const,
  color: "#f5f5f5",
};

const stayDesc = {
  margin: "0",
  fontSize: "14px",
  lineHeight: "22px",
  color: "#a3a3a3",
};

// ── Checklist card ──

const checklistCard = {
  backgroundColor: "#141414",
  borderRadius: "12px",
  padding: "24px",
  border: "1px solid #1a1a1a",
};

const checklistItem = {
  marginBottom: "16px",
};

const checklistItemLast = {
  marginBottom: "0",
};

const checkCol = {
  width: "28px",
  verticalAlign: "top" as const,
};

const checkmark = {
  margin: "0",
  fontSize: "14px",
  color: "#22c55e",
  fontWeight: "700" as const,
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

// ── Notes ──

const italicNote = {
  fontSize: "14px",
  lineHeight: "22px",
  color: "#6b6b6b",
  textAlign: "center" as const,
  margin: "0",
  fontStyle: "italic" as const,
};

const footerNote = {
  fontSize: "13px",
  color: "#525252",
  textAlign: "center" as const,
  margin: "0",
  lineHeight: "20px",
};
