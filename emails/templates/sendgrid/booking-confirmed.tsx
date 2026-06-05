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

export default function BookingConfirmedEmail() {
  return (
    <EmailLayout preview={`Your booking with {{provider_name}} is confirmed`}>

      {/* ── Hero ── */}
      <Section style={heroSection}>
        <Img
          src={`${CDN}/app-video-consultation/public`}
          width="560"
          alt="Booking confirmed"
          style={heroImage}
        />
        <Section style={heroOverlay} className="force-white">
          <Text style={heroLabel}>BOOKING CONFIRMED</Text>
          <Text style={heroTitle}>You are all set.</Text>
        </Section>
      </Section>

      {/* ── Greeting ── */}
      <Text style={heading}>
        Confirmed, {"{{recipient_name}}"}.
      </Text>

      <Text style={bodyText}>
        Your booking has been confirmed. Here are the details for your upcoming visit.
      </Text>

      {/* ── Booking Details Card ── */}
      <Section style={bookingCard}>

        <Section style={detailRow}>
          <Row>
            <Column style={detailLabelCol}>
              <Text style={detailLabel}>PROVIDER</Text>
            </Column>
            <Column>
              <Text style={detailValue}>{"{{provider_name}}"}</Text>
            </Column>
          </Row>
        </Section>

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

        <Section style={detailRow}>
          <Row>
            <Column style={detailLabelCol}>
              <Text style={detailLabel}>VISIT TYPE</Text>
            </Column>
            <Column>
              <Text style={detailValue}>{"{{visit_type}}"}</Text>
            </Column>
          </Row>
        </Section>

        <Section style={detailRow}>
          <Row>
            <Column style={detailLabelCol}>
              <Text style={detailLabel}>LOCATION</Text>
            </Column>
            <Column>
              <Text style={detailValue}>{"{{location}}"}</Text>
            </Column>
          </Row>
        </Section>

        <Section style={detailRow}>
          <Row>
            <Column style={detailLabelCol}>
              <Text style={detailLabel}>DURATION</Text>
            </Column>
            <Column>
              <Text style={detailValue}>{"{{duration}}"}</Text>
            </Column>
          </Row>
        </Section>

        <Section style={detailRow}>
          <Row>
            <Column style={detailLabelCol}>
              <Text style={detailLabel}>AMOUNT</Text>
            </Column>
            <Column>
              <Text style={detailValue}>{"{{currency}}"} {"{{amount}}"}</Text>
            </Column>
          </Row>
        </Section>

        <Text style={bookingIdText}>Booking ID: {"{{booking_id}}"}</Text>
      </Section>

      {/* ── CTA ── */}
      <Section style={ctaCenter}>
        <PrimaryButton href={"{{action_url}}"}>
          View Booking
        </PrimaryButton>
      </Section>

      <Hr style={divider} />

      {/* ── Preparation tips ── */}
      <Text style={sectionLabel}>PREPARE FOR YOUR VISIT</Text>

      <Section style={tipCard}>
        <Section style={tipRow}>
          <Row>
            <Column style={tipNumCol}>
              <Text style={tipNum}>1</Text>
            </Column>
            <Column>
              <Text style={tipTitle}>Share your health data</Text>
              <Text style={tipText}>
                Open the app and share relevant health metrics with your provider before the visit.
              </Text>
            </Column>
          </Row>
        </Section>

        <Section style={tipRow}>
          <Row>
            <Column style={tipNumCol}>
              <Text style={tipNum}>2</Text>
            </Column>
            <Column>
              <Text style={tipTitle}>Note your questions</Text>
              <Text style={tipText}>
                Write down any health concerns or questions you want to discuss.
              </Text>
            </Column>
          </Row>
        </Section>

        <Section style={tipRowLast}>
          <Row>
            <Column style={tipNumCol}>
              <Text style={tipNum}>3</Text>
            </Column>
            <Column>
              <Text style={tipTitle}>Check your devices</Text>
              <Text style={tipText}>
                Make sure your SeeMyHealth devices are synced so your provider sees the latest data.
              </Text>
            </Column>
          </Row>
        </Section>
      </Section>

      <Hr style={divider} />

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

      {/* ── Final CTA ── */}
      <Section style={finalCtaSection}>
        <Text style={finalCtaText}>
          Need to make changes? You can reschedule or cancel your booking directly from the SeeMyHealth app.
        </Text>
        <Section style={ctaCenter}>
          <PrimaryButton href={"{{action_url}}"}>
            View Booking
          </PrimaryButton>
        </Section>
      </Section>

      <Hr style={divider} />

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

const heroLabel = {
  fontSize: "11px",
  fontWeight: "600" as const,
  color: "#b3b3b3",
  letterSpacing: "3px",
  textTransform: "uppercase" as const,
  margin: "0 0 4px 0",
};

const heroTitle = {
  fontSize: "26px",
  fontWeight: "700" as const,
  color: "#ffffff",
  margin: "0",
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

// ── Booking card ──

const bookingCard = {
  backgroundColor: "#141414",
  borderRadius: "12px",
  padding: "28px 24px",
  border: "1px solid #1a1a1a",
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
  color: "#f5f5f5",
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
  margin: "28px 0 0 0",
};

// ── Tips ──

const tipCard = {
  backgroundColor: "#141414",
  borderRadius: "12px",
  padding: "24px",
  border: "1px solid #1a1a1a",
};

const tipRow = {
  marginBottom: "14px",
};

const tipRowLast = {
  marginBottom: "0",
};

const tipNumCol = {
  width: "28px",
  verticalAlign: "top" as const,
};

const tipNum = {
  fontSize: "14px",
  fontWeight: "700" as const,
  color: "#252525",
  margin: "0",
  lineHeight: "22px",
};

const tipTitle = {
  fontSize: "14px",
  fontWeight: "600" as const,
  color: "#f5f5f5",
  margin: "0 0 2px 0",
  lineHeight: "22px",
};

const tipText = {
  fontSize: "14px",
  color: "#8a8a8a",
  lineHeight: "22px",
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

// ── Final CTA ──

const finalCtaSection = {
  textAlign: "center" as const,
};

const finalCtaText = {
  fontSize: "13px",
  color: "#5e5e5e",
  lineHeight: "20px",
  margin: "0",
  textAlign: "center" as const,
};
