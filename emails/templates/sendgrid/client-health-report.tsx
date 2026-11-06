import { Img, Section } from "@react-email/components";
import * as React from "react";
import {
  Body,
  Cta,
  Eyebrow,
  Heading,
  SignOff,
  Small,
  TransactionalLayout,
  field,
} from "../../components/Transactional";

const CDN = "https://imagedelivery.net/NnC2JvU8j4bgBbmedVhjJg";

/** CLIENT_HEALTH_REPORT: a report for a period is ready in the app. Only the period and a link are sent. */
export default function HealthReportEmail() {
  return (
    <TransactionalLayout preview="Your report is in. Come and have a look.">
      <Section style={heroSection}>
        <Img src={`${CDN}/lifestyle-athlete/public`} width="560" alt="Your health report" style={heroImage} />
      </Section>

      <Eyebrow>Your {"{{#if report_period}}"}{field("report_period")} {"{{/if}}"}report</Eyebrow>
      <Heading>Your report is in.</Heading>
      <Body>
        We've pulled your sleep, steps, meals and mood together, so you can see how it all fits. One
        bad day is just a bad day. A whole stretch side by side shows you what's actually going on.
      </Body>

      <Cta href={field("action_url")}>Read Your Report</Cta>

      <Small>No diagnosis, no lecture. Just a clearer view of you.</Small>
      <SignOff />
    </TransactionalLayout>
  );
}

const heroSection = { marginBottom: "28px" };
const heroImage = { width: "100%", display: "block" as const, borderRadius: "12px" };
