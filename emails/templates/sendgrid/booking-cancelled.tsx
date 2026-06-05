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

const CDN = "https://imagedelivery.net/NnC2JvU8j4bgBbmedVhjJg";
const BASE_URL = "https://seemyhealth.ai";

export default function BookingCancelledEmail() {
  return (
    <EmailLayout preview={`Your booking with {{provider_name}} has been cancelled`}>

      {/* ── Cancelled badge ── */}
      <Section style={cancelledBadgeSection}>
        <Text style={cancelledBadge}>BOOKING CANCELLED</Text>
      </Section>

      {/* ── Heading ── */}
      <Text style={heading}>Booking cancelled.</Text>

      {/* ── Body ── */}
      <Text style={bodyText}>
        Your {"{{service_name}}"} with {"{{provider_name}}"} on {"{{appointment_date}}"} at {"{{appointment_time}}"} has been cancelled.
      </Text>

      {/* ── Cancellation reason card ── */}
      <Section style={reasonCard}>
        <Text style={reasonLabel}>REASON</Text>
        <Text style={reasonValue}>{"{{cancellation_reason}}"}</Text>
      </Section>

      {/* ── Original booking details card ── */}
      <Section style={detailsCard}>
        <Text style={detailsCardLabel}>ORIGINAL BOOKING</Text>

        <Section style={detailRow}>
          <Row>
            <Column style={detailLabelCol}>
              <Text style={detailLabel}>SERVICE</Text>
            </Column>
            <Column>
              <Text style={detailValue}>{"{{service_name}}"}</Text>
            </Column>
          </Row>
        </Section>

        <Section style={detailRow}>
          <Row>
            <Column style={detailLabelCol}>
              <Text style={detailLabel}>DATE</Text>
            </Column>
            <Column>
              <Text style={detailValue}>{"{{appointment_date}}"}</Text>
            </Column>
          </Row>
        </Section>

        <Section style={detailRow}>
          <Row>
            <Column style={detailLabelCol}>
              <Text style={detailLabel}>TIME</Text>
            </Column>
            <Column>
              <Text style={detailValue}>{"{{appointment_time}}"}</Text>
            </Column>
          </Row>
        </Section>

        <Text style={bookingIdText}>Booking ID: {"{{booking_id}}"}</Text>
      </Section>

      <Hr style={divider} />

      {/* ── CTA ── */}
      <Section style={ctaCenter}>
        <PrimaryButton href={"{{action_url}}"}>
          Book Again
        </PrimaryButton>
      </Section>

      <Hr style={divider} />

      {/* ── Help note ── */}
      <Section style={helpSection}>
        <Text style={helpText}>
          Need help? Reach out to our support team at support@seemyhealth.ai
        </Text>
      </Section>

      {/* ── Cross-sell strip ── */}
      <Text style={ecosystemHeading}>Complete your health ecosystem</Text>
      <Text style={ecosystemSubtext}>
        Track every metric that matters. One app, three powerful devices.
      </Text>

      <Section style={ecosystemStrip}>
        <Row>
          <Column style={deviceCol}>
            <Section style={deviceCard}>
              <Img src={`${CDN}/ring-gold-hands-portrait/public`} width="160" alt="SeeMyHealth Ring" style={deviceImage} />
              <Text style={deviceBadgeOrange}>WEARABLE</Text>
              <Text style={deviceName}>The Ring</Text>
              <Button href={`${BASE_URL}/products/ring`} style={exploreBtnOrange}>Explore</Button>
            </Section>
          </Column>
          <Column style={deviceCol}>
            <Section style={deviceCard}>
              <Img src={`${CDN}/scale-black-nutritionist/public`} width="160" alt="SeeMyHealth Scale" style={deviceImage} />
              <Text style={deviceBadgeBlue}>BODY COMP</Text>
              <Text style={deviceName}>The Scale</Text>
              <Button href={`${BASE_URL}/products/scale`} style={exploreBtnBlue}>Explore</Button>
            </Section>
          </Column>
          <Column style={deviceCol}>
            <Section style={deviceCard}>
              <Img src={`${CDN}/bp-black-poster/public`} width="160" alt="SeeMyHealth BP Monitor" style={deviceImage} />
              <Text style={deviceBadgeRed}>VITALS</Text>
              <Text style={deviceName}>BP Monitor</Text>
              <Button href={`${BASE_URL}/products/bp-monitor`} style={exploreBtnRed}>Explore</Button>
            </Section>
          </Column>
        </Row>
      </Section>

      <Hr style={divider} />

    </EmailLayout>
  );
}

// ── Styles ──

const cancelledBadgeSection = {
  marginBottom: "20px",
};

const cancelledBadge = {
  fontSize: "11px",
  fontWeight: "700" as const,
  color: "#EF4444",
  letterSpacing: "3px",
  textTransform: "uppercase" as const,
  margin: "0",
  backgroundColor: "#1a0c0c",
  border: "1px solid #3c1a1a",
  borderRadius: "6px",
  padding: "8px 16px",
  display: "inline-block" as const,
};

const heading = {
  fontSize: "22px",
  fontWeight: "700" as const,
  color: "#f5f5f5",
  margin: "0 0 10px 0",
};

const bodyText = {
  fontSize: "15px",
  color: "#a3a3a3",
  lineHeight: "24px",
  margin: "0 0 24px 0",
};

const divider = {
  borderColor: "#1a1a1a",
  margin: "28px 0",
};

// ── Cancellation reason card ──

const reasonCard = {
  backgroundColor: "#141414",
  borderRadius: "12px",
  padding: "24px",
  border: "1px solid #1a1a1a",
  marginBottom: "16px",
};

const reasonLabel = {
  fontSize: "10px",
  fontWeight: "600" as const,
  color: "#5e5e5e",
  letterSpacing: "1.5px",
  textTransform: "uppercase" as const,
  margin: "0 0 8px 0",
};

const reasonValue = {
  fontSize: "15px",
  color: "#f5f5f5",
  lineHeight: "24px",
  margin: "0",
  fontWeight: "500" as const,
};

// ── Original booking details card ──

const detailsCard = {
  backgroundColor: "#141414",
  borderRadius: "12px",
  padding: "24px",
  border: "1px solid #1a1a1a",
};

const detailsCardLabel = {
  fontSize: "10px",
  fontWeight: "600" as const,
  color: "#5e5e5e",
  letterSpacing: "1.5px",
  textTransform: "uppercase" as const,
  margin: "0 0 16px 0",
};

const detailRow = {
  marginBottom: "10px",
};

const detailLabelCol = {
  width: "90px",
  verticalAlign: "top" as const,
};

const detailLabel = {
  fontSize: "10px",
  fontWeight: "600" as const,
  color: "#5e5e5e",
  letterSpacing: "1.5px",
  margin: "0",
  lineHeight: "22px",
};

const detailValue = {
  fontSize: "15px",
  color: "#a3a3a3",
  margin: "0",
  fontWeight: "500" as const,
};

const bookingIdText = {
  fontSize: "12px",
  color: "#6b6b6b",
  margin: "16px 0 0 0",
};

// ── CTA ──

const ctaCenter = {
  textAlign: "center" as const,
  margin: "0",
};

// ── Help ──

const helpSection = {
  backgroundColor: "#141414",
  borderRadius: "10px",
  padding: "16px 20px",
  textAlign: "center" as const,
  border: "1px solid #1a1a1a",
  marginBottom: "28px",
};

const helpText = {
  fontSize: "13px",
  color: "#5e5e5e",
  lineHeight: "20px",
  margin: "0",
};

// ── Cross-sell ──

const ecosystemHeading = {
  fontSize: "18px",
  fontWeight: "700" as const,
  color: "#f5f5f5",
  margin: "0 0 6px 0",
  textAlign: "center" as const,
};

const ecosystemSubtext = {
  fontSize: "14px",
  color: "#6b6b6b",
  lineHeight: "22px",
  margin: "0 0 20px 0",
  textAlign: "center" as const,
};

const ecosystemStrip = {
  marginBottom: "0",
};

const deviceCol = {
  width: "33.33%",
  verticalAlign: "top" as const,
  padding: "0 4px",
};

const deviceCard = {
  backgroundColor: "#141414",
  borderRadius: "12px",
  padding: "0 0 16px 0",
  textAlign: "center" as const,
  border: "1px solid #1a1a1a",
  overflow: "hidden" as const,
};

const deviceImage = {
  width: "100%",
  display: "block" as const,
  borderRadius: "12px 12px 0 0",
};

const deviceBadgeBase = {
  fontSize: "9px",
  fontWeight: "700" as const,
  letterSpacing: "1.5px",
  textTransform: "uppercase" as const,
  margin: "12px 0 4px 0",
  lineHeight: "1",
};

const deviceBadgeOrange = { ...deviceBadgeBase, color: "#F97316" };
const deviceBadgeBlue = { ...deviceBadgeBase, color: "#3B82F6" };
const deviceBadgeRed = { ...deviceBadgeBase, color: "#EF4444" };

const deviceName = {
  fontSize: "13px",
  fontWeight: "600" as const,
  color: "#f5f5f5",
  margin: "0 0 10px 0",
};

const exploreBtnBase = {
  fontSize: "11px",
  fontWeight: "600" as const,
  padding: "6px 16px",
  borderRadius: "50px",
  textDecoration: "none",
  display: "inline-block",
  letterSpacing: "0.5px",
  color: "#0a0a0a",
};

const exploreBtnOrange = { ...exploreBtnBase, backgroundColor: "#F97316" };
const exploreBtnBlue = { ...exploreBtnBase, backgroundColor: "#3B82F6" };
const exploreBtnRed = { ...exploreBtnBase, backgroundColor: "#EF4444" };
