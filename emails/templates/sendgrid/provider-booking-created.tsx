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

export default function ProviderBookingCreatedEmail() {
  return (
    <EmailLayout preview="New booking from {{client_name}} for {{service_name}}">

      {/* ── Badge ── */}
      <Section style={badgeWrapper}>
        <Section style={badge}>
          <Text style={badgeText}>NEW BOOKING</Text>
        </Section>
      </Section>

      {/* ── Heading ── */}
      <Text style={heading}>New booking received.</Text>

      {/* ── Body ── */}
      <Text style={paragraph}>
        {"{{client_name}}"} has booked a {"{{service_name}}"} with you.
      </Text>

      <Hr style={divider} />

      {/* ── Booking Details ── */}
      <Text style={sectionLabel}>BOOKING DETAILS</Text>

      <Section style={detailsCard}>
        <Section style={detailRow}>
          <Row>
            <Column style={labelCol}>
              <Text style={label}>Client</Text>
            </Column>
            <Column style={valueCol}>
              <Text style={value}>{"{{client_name}}"}</Text>
            </Column>
          </Row>
        </Section>

        <Hr style={cardDivider} />

        <Section style={detailRow}>
          <Row>
            <Column style={labelCol}>
              <Text style={label}>Service</Text>
            </Column>
            <Column style={valueCol}>
              <Text style={value}>{"{{service_name}}"}</Text>
            </Column>
          </Row>
        </Section>

        <Hr style={cardDivider} />

        <Section style={detailRow}>
          <Row>
            <Column style={labelCol}>
              <Text style={label}>Date</Text>
            </Column>
            <Column style={valueCol}>
              <Text style={value}>{"{{booking_date}}"}</Text>
            </Column>
          </Row>
        </Section>

        <Hr style={cardDivider} />

        <Section style={detailRow}>
          <Row>
            <Column style={labelCol}>
              <Text style={label}>Time</Text>
            </Column>
            <Column style={valueCol}>
              <Text style={value}>{"{{booking_time}}"}</Text>
            </Column>
          </Row>
        </Section>

        <Hr style={cardDivider} />

        <Section style={detailRow}>
          <Row>
            <Column style={labelCol}>
              <Text style={label}>Type</Text>
            </Column>
            <Column style={valueCol}>
              <Text style={value}>{"{{visit_type}}"}</Text>
            </Column>
          </Row>
        </Section>

        <Hr style={cardDivider} />

        <Section style={detailRow}>
          <Row>
            <Column style={labelCol}>
              <Text style={label}>Duration</Text>
            </Column>
            <Column style={valueCol}>
              <Text style={value}>{"{{duration}}"}</Text>
            </Column>
          </Row>
        </Section>

        <Hr style={cardDivider} />

        <Section style={detailRow}>
          <Row>
            <Column style={labelCol}>
              <Text style={label}>Location</Text>
            </Column>
            <Column style={valueCol}>
              <Text style={value}>{"{{location}}"}</Text>
            </Column>
          </Row>
        </Section>

        <Hr style={cardDivider} />

        <Section style={detailRow}>
          <Row>
            <Column style={labelCol}>
              <Text style={label}>Booking ID</Text>
            </Column>
            <Column style={valueCol}>
              <Text style={bookingIdValue}>{"{{booking_id}}"}</Text>
            </Column>
          </Row>
        </Section>
      </Section>

      {/* ── CTA ── */}
      <Section style={ctaCenter}>
        <PrimaryButton href="{{action_url}}">View Booking</PrimaryButton>
      </Section>

      <Hr style={divider} />

      {/* ── Quick Tip ── */}
      <Section style={tipCard}>
        <Text style={tipText}>
          Prepare for your session by reviewing the client's shared health data
          in the app before the appointment.
        </Text>
      </Section>

      <Hr style={divider} />

      {/* ── Cross-sell ── */}
      <Text style={ecosystemHeading}>Enrich client data</Text>
      <Text style={ecosystemSubtext}>
        Recommend SeeMyHealth devices to your clients. Richer health data means better insights for both of you.
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

    </EmailLayout>
  );
}

// ── Styles ──

const heading = {
  fontSize: "24px",
  fontWeight: "700" as const,
  color: "#f5f5f5",
  margin: "0 0 10px 0",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  color: "#a3a3a3",
  margin: "0",
};

const divider = {
  borderColor: "#1a1a1a",
  margin: "28px 0",
};

const sectionLabel = {
  fontSize: "11px",
  fontWeight: "600" as const,
  color: "#5e5e5e",
  letterSpacing: "3px",
  textTransform: "uppercase" as const,
  margin: "0 0 16px 0",
};

const ctaCenter = {
  textAlign: "center" as const,
  margin: "24px 0 0 0",
};

// ── Badge ──

const badgeWrapper = {
  textAlign: "center" as const,
  paddingTop: "32px",
  paddingBottom: "24px",
};

const badge = {
  backgroundColor: "#0c1a0c",
  border: "1px solid #1a3c1a",
  borderRadius: "50px",
  padding: "8px 20px",
  display: "inline-block" as const,
};

const badgeText = {
  fontSize: "11px",
  fontWeight: "700" as const,
  color: "#22C55E",
  letterSpacing: "2px",
  textTransform: "uppercase" as const,
  margin: "0",
};

// ── Details card ──

const detailsCard = {
  backgroundColor: "#141414",
  borderRadius: "12px",
  padding: "20px 24px",
  border: "1px solid #1a1a1a",
};

const detailRow = {
  padding: "12px 0",
};

const cardDivider = {
  borderColor: "#1a1a1a",
  margin: "0",
};

const labelCol = {
  width: "100px",
  verticalAlign: "top" as const,
};

const label = {
  fontSize: "12px",
  fontWeight: "600" as const,
  color: "#6b6b6b",
  textTransform: "uppercase" as const,
  letterSpacing: "1px",
  margin: "0",
};

const valueCol = {
  verticalAlign: "top" as const,
};

const value = {
  fontSize: "15px",
  color: "#f5f5f5",
  margin: "0",
  fontWeight: "500" as const,
};

const bookingIdValue = {
  fontSize: "13px",
  color: "#6b6b6b",
  margin: "0",
  fontWeight: "400" as const,
};

// ── Tip card ──

const tipCard = {
  backgroundColor: "#141414",
  borderRadius: "12px",
  padding: "16px 20px",
  border: "1px solid #1a1a1a",
};

const tipText = {
  fontSize: "13px",
  lineHeight: "20px",
  color: "#6b6b6b",
  margin: "0",
};

// ── Cross-sell ──

const ecosystemHeading = { fontSize: "18px", fontWeight: "700" as const, color: "#f5f5f5", margin: "0 0 6px 0", textAlign: "center" as const };
const ecosystemSubtext = { fontSize: "14px", color: "#6b6b6b", lineHeight: "22px", margin: "0 0 20px 0", textAlign: "center" as const };
const ecosystemStrip = { marginBottom: "0" };
const deviceCol = { width: "33.33%", verticalAlign: "top" as const, padding: "0 4px" };
const deviceCard = { backgroundColor: "#141414", borderRadius: "12px", padding: "0 0 16px 0", textAlign: "center" as const, border: "1px solid #1a1a1a", overflow: "hidden" as const };
const deviceImage = { width: "100%", display: "block" as const, borderRadius: "12px 12px 0 0" };
const deviceBadgeBase = { fontSize: "9px", fontWeight: "700" as const, letterSpacing: "1.5px", textTransform: "uppercase" as const, margin: "12px 0 4px 0", lineHeight: "1" };
const deviceBadgeOrange = { ...deviceBadgeBase, color: "#F97316" };
const deviceBadgeBlue = { ...deviceBadgeBase, color: "#3B82F6" };
const deviceBadgeRed = { ...deviceBadgeBase, color: "#EF4444" };
const deviceName = { fontSize: "13px", fontWeight: "600" as const, color: "#f5f5f5", margin: "0 0 10px 0" };
const exploreBtnBase = { fontSize: "11px", fontWeight: "600" as const, padding: "6px 16px", borderRadius: "50px", textDecoration: "none", display: "inline-block", letterSpacing: "0.5px", color: "#0a0a0a" };
const exploreBtnOrange = { ...exploreBtnBase, backgroundColor: "#F97316" };
const exploreBtnBlue = { ...exploreBtnBase, backgroundColor: "#3B82F6" };
const exploreBtnRed = { ...exploreBtnBase, backgroundColor: "#EF4444" };
