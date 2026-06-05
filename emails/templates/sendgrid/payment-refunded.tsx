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

export default function PaymentRefundedEmail() {
  return (
    <EmailLayout preview={`Refund of {{currency}} {{amount}} has been processed`}>

      {/* ── Badge ── */}
      <Section style={badgeContainer}>
        <Text style={refundBadge}>REFUND PROCESSED</Text>
      </Section>

      {/* ── Heading ── */}
      <Text style={heading}>
        Your refund has been processed.
      </Text>

      <Text style={bodyText}>
        A refund of {"{{currency}}"} {"{{amount}}"} for {"{{service_name}}"} with {"{{provider_name}}"} is on its way back to you.
      </Text>

      {/* ── Refund Details Card ── */}
      <Section style={detailsCard}>
        <Text style={sectionLabel}>REFUND DETAILS</Text>

        <Section style={detailRow}>
          <Row>
            <Column style={detailLabelCol}>
              <Text style={detailLabelText}>Amount</Text>
            </Column>
            <Column>
              <Text style={detailValueBold}>{"{{currency}}"} {"{{amount}}"}</Text>
            </Column>
          </Row>
        </Section>

        <Section style={detailRow}>
          <Row>
            <Column style={detailLabelCol}>
              <Text style={detailLabelText}>Service</Text>
            </Column>
            <Column>
              <Text style={detailValue}>{"{{service_name}}"}</Text>
            </Column>
          </Row>
        </Section>

        <Section style={detailRow}>
          <Row>
            <Column style={detailLabelCol}>
              <Text style={detailLabelText}>Provider</Text>
            </Column>
            <Column>
              <Text style={detailValue}>{"{{provider_name}}"}</Text>
            </Column>
          </Row>
        </Section>

        <Section style={detailRow}>
          <Row>
            <Column style={detailLabelCol}>
              <Text style={detailLabelText}>Reason</Text>
            </Column>
            <Column>
              <Text style={detailValue}>{"{{refund_reason}}"}</Text>
            </Column>
          </Row>
        </Section>

        <Section style={detailRow}>
          <Row>
            <Column style={detailLabelCol}>
              <Text style={detailLabelText}>Payment ID</Text>
            </Column>
            <Column>
              <Text style={detailValueMuted}>{"{{payment_id}}"}</Text>
            </Column>
          </Row>
        </Section>

        <Section style={detailRow}>
          <Row>
            <Column style={detailLabelCol}>
              <Text style={detailLabelText}>Booking ID</Text>
            </Column>
            <Column>
              <Text style={detailValueMuted}>{"{{booking_id}}"}</Text>
            </Column>
          </Row>
        </Section>
      </Section>

      {/* ── CTA ── */}
      <Section style={ctaCenter}>
        <PrimaryButton href={"{{action_url}}"}>
          View Details
        </PrimaryButton>
      </Section>

      <Hr style={divider} />

      {/* ── Refund timeline note ── */}
      <Section style={noteCard}>
        <Text style={noteText}>
          Refunds typically take 5 to 10 business days to appear in your account, depending on your payment provider.
        </Text>
      </Section>

      {/* ── Cross-sell strip ── */}
      <Text style={ecosystemHeading}>Complete your ecosystem</Text>
      <Text style={ecosystemSubtext}>Each device adds a new dimension to your health picture.</Text>
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

const badgeContainer = {
  marginBottom: "20px",
};

const refundBadge = {
  fontSize: "11px",
  fontWeight: "700" as const,
  color: "#3B82F6",
  letterSpacing: "3px",
  textTransform: "uppercase" as const,
  margin: "0",
  backgroundColor: "#0c1a2e",
  border: "1px solid #1a3a5c",
  borderRadius: "50px",
  padding: "6px 16px",
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

const sectionLabel = {
  fontSize: "11px",
  fontWeight: "600" as const,
  color: "#5e5e5e",
  letterSpacing: "3px",
  textTransform: "uppercase" as const,
  margin: "0 0 16px 0",
};

const detailsCard = {
  backgroundColor: "#141414",
  borderRadius: "12px",
  padding: "28px 24px",
  border: "1px solid #1a1a1a",
};

const detailRow = {
  marginBottom: "10px",
};

const detailLabelCol = {
  width: "100px",
  verticalAlign: "top" as const,
};

const detailLabelText = {
  fontSize: "14px",
  color: "#6b6b6b",
  margin: "0",
  lineHeight: "22px",
};

const detailValue = {
  fontSize: "15px",
  color: "#f5f5f5",
  margin: "0",
  fontWeight: "500" as const,
};

const detailValueBold = {
  fontSize: "15px",
  color: "#f5f5f5",
  margin: "0",
  fontWeight: "700" as const,
};

const detailValueMuted = {
  fontSize: "13px",
  color: "#6b6b6b",
  margin: "0",
};

const ctaCenter = {
  textAlign: "center" as const,
  margin: "28px 0 0 0",
};

const noteCard = {
  backgroundColor: "#141414",
  borderRadius: "10px",
  padding: "16px 20px",
  textAlign: "center" as const,
  border: "1px solid #1a1a1a",
};

const noteText = {
  fontSize: "13px",
  color: "#5e5e5e",
  lineHeight: "20px",
  margin: "0",
};

// ── Cross-sell styles ──

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
