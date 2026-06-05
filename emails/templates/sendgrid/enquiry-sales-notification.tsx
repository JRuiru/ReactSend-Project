import {
  Text,
  Section,
  Row,
  Column,
  Hr,
  Button,
} from "@react-email/components";
import * as React from "react";
import { EmailLayout } from "../../components/EmailLayout";

const DEVICE_COLORS: Record<string, string> = {
  "Ring One": "#F97316",
  "The Scale": "#3B82F6",
  "Scale Pro": "#3B82F6",
  "BP Monitor": "#EF4444",
  "Hydra One": "#06B6D4",
  "Hema One": "#A855F7",
};

export default function EnquirySalesNotificationEmail() {
  return (
    <EmailLayout preview="New enquiry from {{name}} at {{company}}">

      {/* ── Alert Badge ── */}
      <Section style={badgeWrapper}>
        <Section style={alertBadge}>
          <Text style={alertText}>NEW ENQUIRY</Text>
        </Section>
      </Section>

      {/* ── Customer Header ── */}
      <Section style={customerHeader}>
        <Text style={customerName}>{"{{name}}"}</Text>
        <Text style={customerCompany}>{"{{company}}"}</Text>
        <Text style={customerEmail}>{"{{email}}"}</Text>
      </Section>

      {/* ── Quick Actions ── */}
      <Section style={actionsRow}>
        <Row>
          <Column style={{ width: "50%", paddingRight: "6px" }}>
            <Button href="mailto:{{email}}?subject=Re: Your SeeMyHealth Enquiry" style={replyButton}>
              Reply to Customer
            </Button>
          </Column>
          <Column style={{ width: "50%", paddingLeft: "6px" }}>
            <Button href="mailto:{{email}}?subject=Re: Your SeeMyHealth Enquiry&cc=sales@seemyhealth.ai" style={ccButton}>
              Reply + CC Sales
            </Button>
          </Column>
        </Row>
      </Section>

      <Hr style={divider} />

      {/* ── Enquiry Details ── */}
      <Text style={sectionLabel}>ENQUIRY DETAILS</Text>

      <Section style={detailsCard}>
        <Section style={detailRow}>
          <Row>
            <Column style={labelCol}>
              <Text style={label}>Source</Text>
            </Column>
            <Column style={valueCol}>
              <Text style={value}>{"{{source}}"}</Text>
            </Column>
          </Row>
        </Section>

        <Hr style={cardDivider} />

        <Section style={detailRow}>
          <Row>
            <Column style={labelCol}>
              <Text style={label}>Product</Text>
            </Column>
            <Column style={valueCol}>
              <Text style={value}>{"{{model}}"}</Text>
            </Column>
          </Row>
        </Section>

        <Hr style={cardDivider} />

        <Section style={detailRow}>
          <Row>
            <Column style={labelCol}>
              <Text style={label}>Received</Text>
            </Column>
            <Column style={valueCol}>
              <Text style={value}>{"{{timestamp}}"}</Text>
            </Column>
          </Row>
        </Section>
      </Section>

      <Hr style={divider} />

      {/* ── Customer Message ── */}
      <Text style={sectionLabel}>CUSTOMER MESSAGE</Text>

      <Section style={messageBox}>
        <Text style={messageText}>{"{{message}}"}</Text>
      </Section>

      <Hr style={divider} />

      {/* ── SLA Reminder ── */}
      <Section style={slaCard}>
        <Row>
          <Column style={slaIconCol}>
            <Text style={slaIcon}>&#9200;</Text>
          </Column>
          <Column>
            <Text style={slaTitle}>Response SLA: 24 hours</Text>
            <Text style={slaDesc}>
              Please respond to this enquiry within 24 hours. Fast replies
              convert 3x better than delayed responses.
            </Text>
          </Column>
        </Row>
      </Section>

      {/* ── Footer ── */}
      <Text style={footerNote}>
        This is an internal notification from seemyhealth.ai. Reply directly
        to {"{{email}}"} to respond to this enquiry.
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

const alertBadge = {
  backgroundColor: "#7c3aed",
  borderRadius: "50px",
  padding: "8px 20px",
  display: "inline-block" as const,
};

const alertText = {
  fontSize: "11px",
  fontWeight: "700" as const,
  color: "#ffffff",
  letterSpacing: "2px",
  textTransform: "uppercase" as const,
  margin: "0",
};

// ── Customer header ──

const customerHeader = {
  textAlign: "center" as const,
  marginBottom: "24px",
};

const customerName = {
  fontSize: "28px",
  fontWeight: "700" as const,
  color: "#f5f5f5",
  margin: "0 0 4px 0",
  letterSpacing: "-0.3px",
};

const customerCompany = {
  fontSize: "16px",
  fontWeight: "600" as const,
  color: "#a3a3a3",
  margin: "0 0 4px 0",
};

const customerEmail = {
  fontSize: "14px",
  color: "#6b6b6b",
  margin: "0",
};

// ── Quick actions ──

const actionsRow = {
  marginBottom: "8px",
};

const replyButton = {
  backgroundColor: "#7c3aed",
  color: "#ffffff",
  padding: "12px 0",
  borderRadius: "50px",
  fontSize: "12px",
  fontWeight: "600" as const,
  textDecoration: "none",
  display: "block",
  textAlign: "center" as const,
  letterSpacing: "0.5px",
  textTransform: "uppercase" as const,
  width: "100%",
};

const ccButton = {
  backgroundColor: "#1a1a1a",
  color: "#f5f5f5",
  padding: "12px 0",
  borderRadius: "50px",
  fontSize: "12px",
  fontWeight: "600" as const,
  textDecoration: "none",
  display: "block",
  textAlign: "center" as const,
  letterSpacing: "0.5px",
  textTransform: "uppercase" as const,
  width: "100%",
  border: "1px solid #333333",
};

// ── Section styles ──

const sectionLabel = {
  fontSize: "11px",
  fontWeight: "600" as const,
  color: "#5e5e5e",
  letterSpacing: "3px",
  textTransform: "uppercase" as const,
  margin: "0 0 16px 0",
};

const divider = {
  borderColor: "#1a1a1a",
  margin: "32px 0",
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
  color: "#5e5e5e",
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

// ── Message box ──

const messageBox = {
  backgroundColor: "#141414",
  borderRadius: "12px",
  padding: "20px 24px",
  borderLeft: "3px solid #7c3aed",
  border: "1px solid #1a1a1a",
  borderLeftColor: "#7c3aed",
  borderLeftWidth: "3px",
};

const messageText = {
  fontSize: "15px",
  lineHeight: "26px",
  color: "#a3a3a3",
  margin: "0",
  whiteSpace: "pre-wrap" as const,
};

// ── SLA card ──

const slaCard = {
  backgroundColor: "#1a1207",
  border: "1px solid #4d3a0a",
  borderRadius: "12px",
  padding: "20px 24px",
};

const slaIconCol = {
  width: "36px",
  verticalAlign: "top" as const,
};

const slaIcon = {
  fontSize: "20px",
  margin: "0",
};

const slaTitle = {
  fontSize: "14px",
  fontWeight: "700" as const,
  color: "#fbbf24",
  margin: "0 0 4px 0",
};

const slaDesc = {
  fontSize: "13px",
  lineHeight: "20px",
  color: "#a3a3a3",
  margin: "0",
};

// ── Footer ──

const footerNote = {
  fontSize: "13px",
  color: "#525252",
  textAlign: "center" as const,
  margin: "32px 0 0 0",
  lineHeight: "20px",
};
