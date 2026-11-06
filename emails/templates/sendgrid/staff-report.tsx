import * as React from "react";
import {
  Body,
  Cta,
  DetailCard,
  Eyebrow,
  Heading,
  IfField,
  SignOff,
  Small,
  TransactionalLayout,
  field,
} from "../../components/Transactional";

/** STAFF_REPORT: a person reported something in the app; internal to the SeeMyHealth team. */
export default function StaffReportEmail() {
  return (
    <TransactionalLayout preview={`New report: ${field("report_kind_label")}, ${field("item_name")}`} title="Staff">
      <Eyebrow>New report</Eyebrow>
      <Heading>A {field("report_kind_label")} has been reported.</Heading>
      <Body>Someone flagged this in the app. The details are below.</Body>

      <DetailCard
        rows={[
          ["Kind", field("report_kind_label")],
          ["Name", field("item_name")],
          ["Item ID", field("item_id")],
          ["Category", field("item_category")],
        ]}
      />

      <DetailCard
        rows={[
          ["Reason", <>{field("reason_label")} ({field("reason")})</>],
          ["Details", field("details")],
        ]}
      />

      <DetailCard
        rows={[
          ["Reporter ID", field("reporter_id")],
          ["Reported at", field("reported_at")],
          ["Open reports", <>{field("open_report_count")} on this {field("report_kind")}</>],
        ]}
        footnote={<>Report ID: {field("report_id")}</>}
      />

      <Cta href={field("action_url")}>Open Report</Cta>
    </TransactionalLayout>
  );
}
