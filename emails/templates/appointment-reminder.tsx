import {
  Text,
  Section,
  Row,
  Column,
  Hr,
  Button,
} from "@react-email/components";
import * as React from "react";
import { EmailLayout } from "../components/EmailLayout";
import { PrimaryButton } from "../components/PrimaryButton";
import { SecondaryButton } from "../components/SecondaryButton";

const BASE_URL = "https://seemyhealth.ai";

export default function AppointmentReminderEmail() {
  return (
    <EmailLayout preview="Appointment reminder — {{doctor_name}} on {{appointment_date}}">

      {/* ── Time badge ── */}
      <Section style={timeBadge} className="dark-safe">
        <Text style={timeBadgeText}>{"{{time_until}}"} away</Text>
      </Section>

      {/* ── Greeting ── */}
      <Text style={heading}>
        Hi {"{{first_name}}"}, you have an upcoming appointment
      </Text>

      <Hr style={divider} />

      {/* ── Appointment Details Card ── */}
      <Section style={appointmentCard}>

        {/* Visit type badge */}
        <Section style={visitTypeBadge}>
          <Text style={visitTypeBadgeText}>{"{{visit_type}}"}</Text>
        </Section>

        {/* Doctor info */}
        <Text style={doctorName}>{"{{doctor_name}}"}</Text>
        <Text style={doctorSpecialty}>{"{{doctor_specialty}}"}</Text>

        <Hr style={cardDivider} />

        {/* Date & Time row */}
        <Section style={detailRow}>
          <Row>
            <Column style={detailIcon}>
              <Text style={iconText}>&#x1F4C5;</Text>
            </Column>
            <Column style={detailContent}>
              <Text style={detailLabel}>Date</Text>
              <Text style={detailValue}>{"{{appointment_date}}"}</Text>
            </Column>
          </Row>
        </Section>

        <Section style={detailRow}>
          <Row>
            <Column style={detailIcon}>
              <Text style={iconText}>&#x1F552;</Text>
            </Column>
            <Column style={detailContent}>
              <Text style={detailLabel}>Time</Text>
              <Text style={detailValue}>{"{{appointment_time}}"}</Text>
            </Column>
          </Row>
        </Section>

        {/* Location / virtual link */}
        <Section style={detailRow}>
          <Row>
            <Column style={detailIcon}>
              <Text style={iconText}>&#x1F4CD;</Text>
            </Column>
            <Column style={detailContent}>
              <Text style={detailLabel}>Location</Text>
              <Text style={detailValue}>{"{{location}}"}</Text>
            </Column>
          </Row>
        </Section>

        {/* Duration */}
        <Section style={detailRow}>
          <Row>
            <Column style={detailIcon}>
              <Text style={iconText}>&#x23F1;</Text>
            </Column>
            <Column style={detailContent}>
              <Text style={detailLabel}>Duration</Text>
              <Text style={detailValue}>{"{{duration}}"}</Text>
            </Column>
          </Row>
        </Section>
      </Section>

      {/* ── Action buttons ── */}
      <Section style={ctaSection}>
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
      <Text style={sectionHeading}>Before your visit</Text>

      <Section style={tipBlock}>
        <Row>
          <Column style={tipIcon}>
            <Text style={iconText}>&#x1F4CB;</Text>
          </Column>
          <Column style={tipContent}>
            <Text style={tipText}>
              Have your insurance information and ID ready
            </Text>
          </Column>
        </Row>
      </Section>

      <Section style={tipBlock}>
        <Row>
          <Column style={tipIcon}>
            <Text style={iconText}>&#x1F48A;</Text>
          </Column>
          <Column style={tipContent}>
            <Text style={tipText}>
              Bring a list of current medications and supplements
            </Text>
          </Column>
        </Row>
      </Section>

      <Section style={tipBlock}>
        <Row>
          <Column style={tipIcon}>
            <Text style={iconText}>&#x2753;</Text>
          </Column>
          <Column style={tipContent}>
            <Text style={tipText}>
              Write down any questions or symptoms to discuss
            </Text>
          </Column>
        </Row>
      </Section>

      <Section style={tipBlock}>
        <Row>
          <Column style={tipIcon}>
            <Text style={iconText}>&#x1F4F1;</Text>
          </Column>
          <Column style={tipContent}>
            <Text style={tipText}>
              Your SeeMyHealth data will be available to share with your provider
            </Text>
          </Column>
        </Row>
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

const timeBadge = {
  backgroundColor: "#7c3aed",
  borderRadius: "20px",
  padding: "6px 16px",
  textAlign: "center" as const,
  marginBottom: "20px",
  display: "inline-block" as const,
};

const timeBadgeText = {
  color: "#ffffff",
  fontSize: "13px",
  fontWeight: "bold" as const,
  margin: "0",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
};

const heading = {
  fontSize: "24px",
  fontWeight: "bold" as const,
  color: "#111827",
  margin: "0 0 8px 0",
  lineHeight: "32px",
};

const divider = {
  borderColor: "rgba(124, 58, 237, 0.1)",
  margin: "24px 0",
};

// ── Appointment card ──

const appointmentCard = {
  background: "linear-gradient(135deg, rgba(124,58,237,0.04) 0%, rgba(168,85,247,0.06) 100%)",
  borderRadius: "14px",
  padding: "28px 24px",
  border: "1px solid rgba(124, 58, 237, 0.1)",
};

const visitTypeBadge = {
  marginBottom: "12px",
};

const visitTypeBadgeText = {
  fontSize: "11px",
  fontWeight: "bold" as const,
  color: "#7c3aed",
  letterSpacing: "1.5px",
  textTransform: "uppercase" as const,
  margin: "0",
  backgroundColor: "rgba(124, 58, 237, 0.08)",
  padding: "4px 12px",
  borderRadius: "12px",
  display: "inline-block" as const,
};

const doctorName = {
  fontSize: "22px",
  fontWeight: "bold" as const,
  color: "#111827",
  margin: "0 0 2px 0",
};

const doctorSpecialty = {
  fontSize: "14px",
  color: "#6b7280",
  margin: "0",
};

const cardDivider = {
  borderColor: "rgba(124, 58, 237, 0.08)",
  margin: "16px 0",
};

const detailRow = {
  marginBottom: "12px",
};

const detailIcon = {
  width: "36px",
  verticalAlign: "top" as const,
};

const iconText = {
  fontSize: "20px",
  margin: "0",
  lineHeight: "1",
};

const detailContent = {
  verticalAlign: "top" as const,
  paddingLeft: "4px",
};

const detailLabel = {
  fontSize: "11px",
  color: "#9ca3af",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
  margin: "0",
  fontWeight: "600" as const,
};

const detailValue = {
  fontSize: "15px",
  color: "#111827",
  margin: "2px 0 0 0",
  fontWeight: "500" as const,
};

// ── Action buttons ──

const ctaSection = {
  textAlign: "center" as const,
  margin: "24px 0 12px 0",
};

const buttonRow = {
  marginBottom: "8px",
};

const buttonCol = {
  width: "50%",
  padding: "0 4px",
};

const rescheduleButton = {
  backgroundColor: "#ffffff",
  color: "#7c3aed",
  padding: "10px 20px",
  borderRadius: "8px",
  fontSize: "13px",
  fontWeight: "bold" as const,
  textDecoration: "none",
  display: "inline-block",
  border: "1px solid rgba(124, 58, 237, 0.25)",
};

const cancelButton = {
  backgroundColor: "#ffffff",
  color: "#ef4444",
  padding: "10px 20px",
  borderRadius: "8px",
  fontSize: "13px",
  fontWeight: "bold" as const,
  textDecoration: "none",
  display: "inline-block",
  border: "1px solid rgba(239, 68, 68, 0.25)",
};

// ── Preparation tips ──

const sectionHeading = {
  fontSize: "18px",
  fontWeight: "bold" as const,
  color: "#111827",
  margin: "0 0 16px 0",
};

const tipBlock = {
  marginBottom: "12px",
};

const tipIcon = {
  width: "36px",
  verticalAlign: "top" as const,
};

const tipContent = {
  verticalAlign: "top" as const,
  paddingLeft: "4px",
};

const tipText = {
  fontSize: "14px",
  color: "#374151",
  lineHeight: "22px",
  margin: "0",
};

// ── Help section ──

const helpSection = {
  background: "rgba(124, 58, 237, 0.04)",
  borderRadius: "10px",
  padding: "16px 20px",
  textAlign: "center" as const,
};

const helpText = {
  fontSize: "13px",
  color: "#6b7280",
  lineHeight: "20px",
  margin: "0",
};
