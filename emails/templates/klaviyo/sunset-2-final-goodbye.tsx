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

export default function SunsetFinalGoodbye() {
  return (
    <EmailLayout preview="Last chance to stay subscribed — we're cleaning up our list.">

      {/* ── Badge ── */}
      <Section style={badgeWrapper}>
        <Section style={badge}>
          <Text style={badgeText}>FINAL NOTICE</Text>
        </Section>
      </Section>

      {/* ── Greeting ── */}
      <Section style={greetingSection}>
        <Text style={heading}>This is our last email.</Text>
        <Text style={paragraph}>
          We sent you an email a few days ago asking if you wanted to stay
          subscribed. Since we haven't heard back, we're going to remove you
          from our mailing list.
        </Text>
      </Section>

      {/* ── Want to Stay Card ── */}
      <Section style={lastChanceCard}>
        <Text style={lastChanceTitle}>Want to stay?</Text>
        <Text style={lastChanceDesc}>
          Just click the button below and you'll stay on our list. If not, no
          worries. You can always come back to seemyhealth.ai anytime.
        </Text>
        <Section style={ctaCenter}>
          <PrimaryButton href={`${BASE_URL}/shop`}>
            Keep Me Subscribed
          </PrimaryButton>
        </Section>
      </Section>

      <Hr style={divider} />

      {/* ── What You'll Miss ── */}
      <Text style={sectionLabel}>WHAT YOU'LL MISS</Text>
      <Text style={sectionHeading}>We'll miss you too.</Text>

      <Section style={missCard}>
        <Text style={missText}>
          Exclusive offers, new product launches, health tips, and early access
          to features. We only email a few times a month and never spam.
        </Text>
      </Section>

      <Hr style={divider} />

      {/* ── Italic Note ── */}
      <Text style={italicNote}>
        If you don't click, we'll unsubscribe you automatically within 48 hours.
        You can always re-subscribe anytime at seemyhealth.ai.
      </Text>

      <Hr style={divider} />

      {/* ── Footer Note ── */}
      <Text style={footerNote}>
        This is the last email in this series. Thank you for being part of the
        SeeMyHealth community.
      </Text>

    </EmailLayout>
  );
}

// ── Styles ──

const badgeWrapper = {
  textAlign: "center" as const,
  paddingTop: "32px",
  paddingBottom: "24px",
};

const badge = {
  backgroundColor: "#1f1111",
  border: "1px solid #4d1a1a",
  borderRadius: "50px",
  padding: "8px 20px",
  display: "inline-block" as const,
};

const badgeText = {
  margin: "0",
  fontSize: "11px",
  fontWeight: "600" as const,
  color: "#EF4444",
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

// ── Last Chance card ──

const lastChanceCard = {
  backgroundColor: "#141414",
  border: "1px solid #4d1a1a",
  borderRadius: "12px",
  padding: "28px 24px",
  textAlign: "center" as const,
  marginTop: "16px",
};

const lastChanceTitle = {
  margin: "0 0 8px 0",
  fontSize: "20px",
  fontWeight: "700" as const,
  color: "#f5f5f5",
};

const lastChanceDesc = {
  margin: "0",
  fontSize: "14px",
  lineHeight: "22px",
  color: "#a3a3a3",
};

// ── What You'll Miss card ──

const missCard = {
  backgroundColor: "#141414",
  borderRadius: "12px",
  padding: "24px",
  border: "1px solid #1a1a1a",
};

const missText = {
  margin: "0",
  fontSize: "15px",
  lineHeight: "24px",
  color: "#a3a3a3",
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
