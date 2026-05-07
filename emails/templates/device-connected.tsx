import {
  Text,
  Section,
  Row,
  Column,
  Hr,
} from "@react-email/components";
import * as React from "react";
import { EmailLayout } from "../components/EmailLayout";
import { PrimaryButton } from "../components/PrimaryButton";

const BASE_URL = "https://seemyhealth.ai";

export default function DeviceConnectedEmail() {
  return (
    <EmailLayout preview="{{device_name}} is connected to SeeMyHealth">

      {/* ── Success banner ── */}
      <Section style={banner}>
        <Text style={bannerIcon}>&#x2705;</Text>
        <Text style={bannerTitle}>Device Connected!</Text>
      </Section>

      {/* ── Greeting ── */}
      <Text style={heading}>
        Nice one, {"{{first_name}}"}!
      </Text>

      <Text style={paragraph}>
        Your <strong>{"{{device_name}}"}</strong> is now paired with
        SeeMyHealth and syncing data. Here's what it'll do for you.
      </Text>

      <Hr style={divider} />

      {/* ── Device info card ── */}
      <Section style={deviceCard}>
        <Text style={deviceCategory}>{"{{device_category}}"}</Text>
        <Text style={deviceName}>{"{{device_name}}"}</Text>

        <Hr style={cardDivider} />

        <Text style={trackingHeading}>Now tracking:</Text>

        <Section style={trackItem}>
          <Row>
            <Column style={bulletCol}><Text style={bullet}>&#x2022;</Text></Column>
            <Column><Text style={trackText}>{"{{tracking_1}}"}</Text></Column>
          </Row>
        </Section>
        <Section style={trackItem}>
          <Row>
            <Column style={bulletCol}><Text style={bullet}>&#x2022;</Text></Column>
            <Column><Text style={trackText}>{"{{tracking_2}}"}</Text></Column>
          </Row>
        </Section>
        <Section style={trackItem}>
          <Row>
            <Column style={bulletCol}><Text style={bullet}>&#x2022;</Text></Column>
            <Column><Text style={trackText}>{"{{tracking_3}}"}</Text></Column>
          </Row>
        </Section>
        <Section style={trackItem}>
          <Row>
            <Column style={bulletCol}><Text style={bullet}>&#x2022;</Text></Column>
            <Column><Text style={trackText}>{"{{tracking_4}}"}</Text></Column>
          </Row>
        </Section>
      </Section>

      <Hr style={divider} />

      {/* ── Tips ── */}
      <Text style={sectionHeading}>Get the most out of your {"{{device_name}}"}</Text>

      <Section style={tipBlock}>
        <Row>
          <Column style={tipIconCol}><Text style={iconText}>&#x1F50B;</Text></Column>
          <Column style={tipContent}>
            <Text style={tipTitle}>Keep it charged</Text>
            <Text style={tipDesc}>
              For the best data, keep your device charged and worn consistently.
            </Text>
          </Column>
        </Row>
      </Section>

      <Section style={tipBlock}>
        <Row>
          <Column style={tipIconCol}><Text style={iconText}>&#x1F4F2;</Text></Column>
          <Column style={tipContent}>
            <Text style={tipTitle}>Enable Bluetooth</Text>
            <Text style={tipDesc}>
              Keep Bluetooth on so your device can sync data automatically
              in the background.
            </Text>
          </Column>
        </Row>
      </Section>

      <Section style={tipBlock}>
        <Row>
          <Column style={tipIconCol}><Text style={iconText}>&#x1F4CA;</Text></Column>
          <Column style={tipContent}>
            <Text style={tipTitle}>Check your dashboard</Text>
            <Text style={tipDesc}>
              Your data will start appearing on your health dashboard
              within minutes of your first sync.
            </Text>
          </Column>
        </Row>
      </Section>

      <Section style={tipBlock}>
        <Row>
          <Column style={tipIconCol}><Text style={iconText}>&#x1F3AF;</Text></Column>
          <Column style={tipContent}>
            <Text style={tipTitle}>Set a goal</Text>
            <Text style={tipDesc}>
              Create a health goal related to your new device — tracking
              progress is the best motivator.
            </Text>
          </Column>
        </Row>
      </Section>

      <Hr style={divider} />

      {/* ── CTA ── */}
      <Section style={ctaSection}>
        <PrimaryButton href={`${BASE_URL}/devices`}>
          View Your Devices
        </PrimaryButton>
      </Section>

    </EmailLayout>
  );
}

// ── Styles ──

const banner = {
  background: "linear-gradient(135deg, #1a0533 0%, #4c1d95 40%, #7c3aed 70%, #a855f7 100%)",
  borderRadius: "16px",
  padding: "36px 24px",
  textAlign: "center" as const,
  marginBottom: "24px",
};

const bannerIcon = {
  fontSize: "44px",
  margin: "0 0 8px 0",
  lineHeight: "1",
};

const bannerTitle = {
  fontSize: "26px",
  fontWeight: "bold" as const,
  color: "#ffffff",
  margin: "0",
};

const heading = {
  fontSize: "24px",
  fontWeight: "bold" as const,
  color: "#111827",
  margin: "0 0 8px 0",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  color: "#374151",
  margin: "0",
};

const divider = {
  borderColor: "rgba(124, 58, 237, 0.1)",
  margin: "24px 0",
};

// ── Device card ──

const deviceCard = {
  background: "linear-gradient(135deg, rgba(124,58,237,0.04) 0%, rgba(168,85,247,0.06) 100%)",
  borderRadius: "14px",
  padding: "28px 24px",
  border: "1px solid rgba(124, 58, 237, 0.1)",
};

const deviceCategory = {
  fontSize: "11px",
  fontWeight: "bold" as const,
  color: "#7c3aed",
  letterSpacing: "1.5px",
  textTransform: "uppercase" as const,
  margin: "0 0 4px 0",
};

const deviceName = {
  fontSize: "22px",
  fontWeight: "bold" as const,
  color: "#111827",
  margin: "0",
};

const cardDivider = {
  borderColor: "rgba(124, 58, 237, 0.08)",
  margin: "16px 0",
};

const trackingHeading = {
  fontSize: "13px",
  fontWeight: "bold" as const,
  color: "#6b7280",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
  margin: "0 0 10px 0",
};

const trackItem = {
  marginBottom: "6px",
};

const bulletCol = {
  width: "20px",
  verticalAlign: "top" as const,
};

const bullet = {
  fontSize: "16px",
  color: "#7c3aed",
  margin: "0",
  lineHeight: "1.4",
};

const trackText = {
  fontSize: "15px",
  color: "#374151",
  margin: "0",
  lineHeight: "22px",
};

// ── Tips ──

const sectionHeading = {
  fontSize: "18px",
  fontWeight: "bold" as const,
  color: "#111827",
  margin: "0 0 16px 0",
};

const tipBlock = {
  marginBottom: "14px",
};

const tipIconCol = {
  width: "36px",
  verticalAlign: "top" as const,
};

const iconText = {
  fontSize: "20px",
  margin: "0",
  lineHeight: "1",
};

const tipContent = {
  verticalAlign: "top" as const,
  paddingLeft: "4px",
};

const tipTitle = {
  fontSize: "15px",
  fontWeight: "bold" as const,
  color: "#111827",
  margin: "0 0 2px 0",
};

const tipDesc = {
  fontSize: "14px",
  color: "#6b7280",
  lineHeight: "20px",
  margin: "0",
};

const ctaSection = {
  textAlign: "center" as const,
};
