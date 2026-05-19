import {
  Text,
  Section,
  Row,
  Column,
  Hr,
} from "@react-email/components";
import * as React from "react";
import { EmailLayout } from "../components/EmailLayout";

export default function EnquirySalesNotificationEmail() {
  return (
    <EmailLayout preview="New enquiry from {{name}} at {{company}}">

      {/* ── Alert badge ── */}
      <Section style={alertBadge} className="dark-safe">
        <Text style={alertText}>NEW ENQUIRY</Text>
      </Section>

      {/* ── Heading ── */}
      <Text style={heading}>
        New enquiry received
      </Text>

      <Text style={paragraph}>
        A potential customer has submitted an enquiry through the website.
        Details below.
      </Text>

      <Hr style={divider} />

      {/* ── Enquiry details ── */}
      <Section style={detailsCard}>
        <Section style={detailRow}>
          <Row>
            <Column style={labelCol}>
              <Text style={label}>Company</Text>
            </Column>
            <Column style={valueCol}>
              <Text style={value}>{"{{company}}"}</Text>
            </Column>
          </Row>
        </Section>

        <Section style={detailRow}>
          <Row>
            <Column style={labelCol}>
              <Text style={label}>Name</Text>
            </Column>
            <Column style={valueCol}>
              <Text style={value}>{"{{name}}"}</Text>
            </Column>
          </Row>
        </Section>

        <Section style={detailRow}>
          <Row>
            <Column style={labelCol}>
              <Text style={label}>Email</Text>
            </Column>
            <Column style={valueCol}>
              <Text style={value}>{"{{email}}"}</Text>
            </Column>
          </Row>
        </Section>

        <Section style={detailRow}>
          <Row>
            <Column style={labelCol}>
              <Text style={label}>Model</Text>
            </Column>
            <Column style={valueCol}>
              <Text style={value}>{"{{model}}"}</Text>
            </Column>
          </Row>
        </Section>
      </Section>

      {/* ── Message ── */}
      <Text style={messageLabel}>Message</Text>
      <Section style={messageBox}>
        <Text style={messageText}>{"{{message}}"}</Text>
      </Section>

      <Hr style={divider} />

      <Text style={footerNote}>
        Reply directly to {"{{email}}"} to respond to this enquiry.
      </Text>

    </EmailLayout>
  );
}

// ── Styles ──

const alertBadge = {
  background: "linear-gradient(135deg, #7c3aed, #a855f7)",
  borderRadius: "8px",
  padding: "6px 16px",
  textAlign: "center" as const,
  marginBottom: "20px",
  display: "inline-block" as const,
};

const alertText = {
  fontSize: "11px",
  fontWeight: "bold" as const,
  color: "#ffffff",
  letterSpacing: "2px",
  textTransform: "uppercase" as const,
  margin: "0",
};

const heading = {
  fontSize: "24px",
  fontWeight: "bold" as const,
  color: "#111827",
  margin: "0 0 8px 0",
};

const paragraph = {
  fontSize: "15px",
  lineHeight: "24px",
  color: "#374151",
  margin: "0",
};

const divider = {
  borderColor: "rgba(124, 58, 237, 0.1)",
  margin: "24px 0",
};

const detailsCard = {
  background: "linear-gradient(135deg, rgba(124,58,237,0.04) 0%, rgba(168,85,247,0.06) 100%)",
  borderRadius: "12px",
  padding: "20px 24px",
  border: "1px solid rgba(124, 58, 237, 0.08)",
};

const detailRow = {
  marginBottom: "12px",
};

const labelCol = {
  width: "100px",
  verticalAlign: "top" as const,
};

const label = {
  fontSize: "13px",
  fontWeight: "bold" as const,
  color: "#6b7280",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
  margin: "0",
};

const valueCol = {
  verticalAlign: "top" as const,
};

const value = {
  fontSize: "15px",
  color: "#111827",
  margin: "0",
};

const messageLabel = {
  fontSize: "13px",
  fontWeight: "bold" as const,
  color: "#6b7280",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
  margin: "0 0 8px 0",
};

const messageBox = {
  background: "rgba(124, 58, 237, 0.04)",
  borderRadius: "10px",
  padding: "16px 20px",
  borderLeft: "3px solid #7c3aed",
};

const messageText = {
  fontSize: "15px",
  lineHeight: "24px",
  color: "#374151",
  margin: "0",
  whiteSpace: "pre-wrap" as const,
};

const footerNote = {
  fontSize: "14px",
  color: "#6b7280",
  lineHeight: "22px",
  margin: "0",
  textAlign: "center" as const,
};
