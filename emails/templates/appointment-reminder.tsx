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
import { EmailLayout } from "../components/EmailLayout";
import { PrimaryButton } from "../components/PrimaryButton";

const CDN = "https://imagedelivery.net/NnC2JvU8j4bgBbmedVhjJg";
const BASE_URL = "https://seemyhealth.ai";

const IMAGES = {
  hero: `${CDN}/app-video-consultation/public`,
};

export default function AppointmentReminderEmail() {
  return (
    <EmailLayout preview="Appointment reminder — {{doctor_name}} on {{appointment_date}}">

      {/* ── Hero ── */}
      <Section style={heroSection}>
        <Img
          src={IMAGES.hero}
          width="560"
          alt="Appointment reminder"
          style={heroImage}
        />
        <Section style={heroOverlay} className="force-white">
          <Text style={heroLabel}>UPCOMING APPOINTMENT</Text>
          <Text style={heroTitle}>{"{{time_until}}"} away</Text>
        </Section>
      </Section>

      {/* ── Greeting ── */}
      <Text style={heading}>
        Hi {"{{first_name}}"}, you have an upcoming appointment.
      </Text>

      <Hr style={divider} />

      {/* ── Appointment Details Card ── */}
      <Section style={appointmentCard}>

        {/* Visit type badge */}
        <Text style={visitTypeBadgeText}>{"{{visit_type}}"}</Text>

        {/* Doctor info */}
        <Text style={doctorName}>{"{{doctor_name}}"}</Text>
        <Text style={doctorSpecialty}>{"{{doctor_specialty}}"}</Text>

        <Hr style={cardDivider} />

        {/* Date & Time */}
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
      </Section>

      {/* ── Action buttons ── */}
      <Section style={ctaCenter}>
        <PrimaryButton href={`${BASE_URL}/appointments/{{appointment_id}}`}>
          View Appointment
        </PrimaryButton>
      </Section>

      <Section style={buttonRow}>
        <Row>
          <Column align="center" style={buttonCol}>
            <Button href={`${BASE_URL}/appointments/{{appointment_id}}/reschedule`} style={rescheduleButton}>
              Reschedule
            </Button>
          </Column>
          <Column align="center" style={buttonCol}>
            <Button href={`${BASE_URL}/appointments/{{appointment_id}}/cancel`} style={cancelButton}>
              Cancel
            </Button>
          </Column>
        </Row>
      </Section>

      <Hr style={divider} />

      {/* ── Preparation tips ── */}
      <Text style={sectionLabel}>BEFORE YOUR VISIT</Text>

      <Section style={tipCard}>
        <Section style={tipRow}>
          <Row>
            <Column style={tipNumCol}>
              <Text style={tipNum}>1</Text>
            </Column>
            <Column>
              <Text style={tipText}>
                Have your insurance information and ID ready.
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
              <Text style={tipText}>
                Bring a list of current medications and supplements.
              </Text>
            </Column>
          </Row>
        </Section>

        <Section style={tipRow}>
          <Row>
            <Column style={tipNumCol}>
              <Text style={tipNum}>3</Text>
            </Column>
            <Column>
              <Text style={tipText}>
                Write down any questions or symptoms to discuss.
              </Text>
            </Column>
          </Row>
        </Section>

        <Section style={tipRow}>
          <Row>
            <Column style={tipNumCol}>
              <Text style={tipNum}>4</Text>
            </Column>
            <Column>
              <Text style={tipText}>
                Your SeeMyHealth data will be available to share with your provider.
              </Text>
            </Column>
          </Row>
        </Section>
      </Section>

      <Hr style={divider} />

      {/* ── Need help ── */}
      <Section style={helpSection}>
        <Text style={helpText}>
          Need to make changes? You can reschedule or cancel directly from
          the SeeMyHealth app up to 24 hours before your appointment.
        </Text>
      </Section>

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
  color: "rgba(255, 255, 255, 0.7)",
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

const divider = {
  borderColor: "rgba(255, 255, 255, 0.06)",
  margin: "28px 0",
};

const sectionLabel = {
  fontSize: "11px",
  fontWeight: "600" as const,
  color: "rgba(255, 255, 255, 0.35)",
  letterSpacing: "3px",
  textTransform: "uppercase" as const,
  margin: "0 0 16px 0",
};

// ── Appointment card ──

const appointmentCard = {
  backgroundColor: "#141414",
  borderRadius: "12px",
  padding: "28px 24px",
  border: "1px solid rgba(255, 255, 255, 0.06)",
};

const visitTypeBadgeText = {
  fontSize: "10px",
  fontWeight: "700" as const,
  color: "#f5f5f5",
  letterSpacing: "2px",
  textTransform: "uppercase" as const,
  margin: "0 0 12px 0",
  backgroundColor: "rgba(255, 255, 255, 0.08)",
  padding: "4px 12px",
  borderRadius: "12px",
  display: "inline-block" as const,
};

const doctorName = {
  fontSize: "22px",
  fontWeight: "700" as const,
  color: "#f5f5f5",
  margin: "0 0 2px 0",
};

const doctorSpecialty = {
  fontSize: "14px",
  color: "rgba(255, 255, 255, 0.45)",
  margin: "0",
};

const cardDivider = {
  borderColor: "rgba(255, 255, 255, 0.06)",
  margin: "16px 0",
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
  color: "rgba(255, 255, 255, 0.3)",
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

// ── Action buttons ──

const ctaCenter = {
  textAlign: "center" as const,
  margin: "28px 0 12px 0",
};

const buttonRow = {
  textAlign: "center" as const,
};

const buttonCol = {
  width: "50%",
  padding: "0 4px",
};

const rescheduleButton = {
  backgroundColor: "transparent",
  color: "rgba(255, 255, 255, 0.5)",
  padding: "10px 20px",
  borderRadius: "50px",
  fontSize: "13px",
  fontWeight: "600" as const,
  textDecoration: "none",
  display: "inline-block",
  border: "1px solid rgba(255, 255, 255, 0.1)",
};

const cancelButton = {
  backgroundColor: "transparent",
  color: "#ef4444",
  padding: "10px 20px",
  borderRadius: "50px",
  fontSize: "13px",
  fontWeight: "600" as const,
  textDecoration: "none",
  display: "inline-block",
  border: "1px solid rgba(239, 68, 68, 0.2)",
};

// ── Tips ──

const tipCard = {
  backgroundColor: "#141414",
  borderRadius: "12px",
  padding: "24px",
  border: "1px solid rgba(255, 255, 255, 0.06)",
};

const tipRow = {
  marginBottom: "14px",
};

const tipNumCol = {
  width: "28px",
  verticalAlign: "top" as const,
};

const tipNum = {
  fontSize: "14px",
  fontWeight: "700" as const,
  color: "rgba(255, 255, 255, 0.12)",
  margin: "0",
  lineHeight: "22px",
};

const tipText = {
  fontSize: "14px",
  color: "rgba(255, 255, 255, 0.5)",
  lineHeight: "22px",
  margin: "0",
};

// ── Help section ──

const helpSection = {
  backgroundColor: "#141414",
  borderRadius: "10px",
  padding: "16px 20px",
  textAlign: "center" as const,
  border: "1px solid rgba(255, 255, 255, 0.06)",
};

const helpText = {
  fontSize: "13px",
  color: "rgba(255, 255, 255, 0.35)",
  lineHeight: "20px",
  margin: "0",
};
