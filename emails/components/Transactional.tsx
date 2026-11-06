/**
 * The building blocks every SendGrid (transactional) template is made of, so 26 emails read as one
 * family: one layout with the send's year and support address in the footer, one heading, one body
 * text, one details card, one button.
 *
 * Voice: the website's (seemyhealth.ai home and app pages). Short, warm, a little cheeky, with the
 * odd aside in brackets. British spelling, no em dashes. Never jokey about a deletion, a payment that
 * failed, a code, account security or anything health-adjacent: those stay calm and kind.
 *
 * Every merge field may arrive blank, so no sentence leans on one to make sense.
 */
import { Hr, Section, Text, Row, Column } from "@react-email/components";
import * as React from "react";
import { EmailLayout } from "./EmailLayout";
import { PrimaryButton } from "./PrimaryButton";

/** A merge field, written as SendGrid's handlebars. */
export const field = (name: string) => `{{${name}}}`;

export const TransactionalLayout = ({
  preview,
  title,
  children,
}: {
  preview: string;
  title?: string;
  children: React.ReactNode;
}) => (
  <EmailLayout preview={preview} title={title} year={field("year")} supportEmail={field("support_email")}>
    {children}
  </EmailLayout>
);

/** The small capitals above a heading ("BOOKING CONFIRMED"). */
export const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <Text style={eyebrow}>{children}</Text>
);

export const Heading = ({ children }: { children: React.ReactNode }) => (
  <Text style={heading}>{children}</Text>
);

export const Body = ({ children }: { children: React.ReactNode }) => (
  <Text style={body}>{children}</Text>
);

/** Quieter text: a footnote, a reassurance, an aside. */
export const Small = ({ children }: { children: React.ReactNode }) => (
  <Text style={small}>{children}</Text>
);

/** Label and value rows on a card. A row whose value arrives blank still reads, just empty. */
export const DetailCard = ({
  rows,
  footnote,
}: {
  rows: Array<[label: string, value: React.ReactNode]>;
  footnote?: React.ReactNode;
}) => (
  <Section style={card}>
    {rows.map(([label, value]) => (
      <Section key={label} style={detailRow}>
        <Row>
          <Column style={detailLabelCol}>
            <Text style={detailLabel}>{label}</Text>
          </Column>
          <Column>
            <Text style={detailValue}>{value}</Text>
          </Column>
        </Row>
      </Section>
    ))}
    {footnote && <Text style={footnoteText}>{footnote}</Text>}
  </Section>
);

/** One big thing to read out, like a code. */
export const BigValue = ({ children }: { children: React.ReactNode }) => (
  <Section style={bigCard}>
    <Text style={bigValue}>{children}</Text>
  </Section>
);

export const Cta = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Section style={ctaCenter}>
    <PrimaryButton href={href}>{children}</PrimaryButton>
  </Section>
);

/** Shown only when the field has a value: `{{#if name}}…{{/if}}`. */
export const IfField = ({ name, children }: { name: string; children: React.ReactNode }) => (
  <>
    {`{{#if ${name}}}`}
    {children}
    {`{{/if}}`}
  </>
);

export const Divider = () => <Hr style={divider} />;

export const SignOff = ({ children = "The SeeMyHealth team" }: { children?: React.ReactNode }) => (
  <Text style={signOff}>{children}</Text>
);

// ── Styles (the dark palette every template already uses) ──

const eyebrow = {
  fontSize: "11px",
  fontWeight: "600" as const,
  color: "#5e5e5e",
  letterSpacing: "3px",
  textTransform: "uppercase" as const,
  margin: "0 0 8px 0",
};

const heading = {
  fontSize: "24px",
  fontWeight: "700" as const,
  color: "#f5f5f5",
  lineHeight: "32px",
  margin: "0 0 12px 0",
};

const body = {
  fontSize: "15px",
  color: "#a3a3a3",
  lineHeight: "24px",
  margin: "0 0 16px 0",
};

const small = {
  fontSize: "13px",
  color: "#6b6b6b",
  lineHeight: "20px",
  margin: "0 0 12px 0",
};

const card = {
  backgroundColor: "#141414",
  borderRadius: "12px",
  padding: "24px",
  border: "1px solid #1a1a1a",
  margin: "8px 0 24px 0",
};

const detailRow = { marginBottom: "10px" };

const detailLabelCol = { width: "110px", verticalAlign: "top" as const };

const detailLabel = {
  fontSize: "10px",
  fontWeight: "600" as const,
  color: "#5e5e5e",
  letterSpacing: "1.5px",
  textTransform: "uppercase" as const,
  margin: "0",
  lineHeight: "22px",
};

const detailValue = {
  fontSize: "15px",
  color: "#f5f5f5",
  margin: "0",
  fontWeight: "500" as const,
  lineHeight: "22px",
};

const footnoteText = { fontSize: "12px", color: "#6b6b6b", margin: "12px 0 0 0" };

const bigCard = { ...card, textAlign: "center" as const, padding: "28px 24px" };

const bigValue = {
  fontSize: "36px",
  fontWeight: "700" as const,
  color: "#ffffff",
  letterSpacing: "8px",
  margin: "0",
  fontFamily: '"SF Mono", Menlo, Consolas, monospace',
};

const ctaCenter = { textAlign: "center" as const, margin: "8px 0 24px 0" };

const divider = { borderColor: "#1a1a1a", margin: "28px 0" };

const signOff = { fontSize: "15px", color: "#a3a3a3", margin: "24px 0 0 0" };
