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

/** CLIENT_PACKAGE_REFUNDED: unused package credits have been refunded. */
export default function PackageRefundedEmail() {
  return (
    <TransactionalLayout preview="Your unused credits have been refunded.">
      <Eyebrow>Credits refunded</Eyebrow>
      <Heading>Your unused credits are coming home.</Heading>
      <Body>
        We've refunded the credits you didn't use. Banks can take a few working days to show it, so
        don't worry if it isn't there straight away.
      </Body>

      <DetailCard
        rows={[
          ["Credits", field("credits")],
          ["Refunded", `${field("amount")} ${field("currency")}`],
          ["Provider", field("provider_name")],
        ]}
      />

      <IfField name="refund_reason">
        <Body>Reason: {field("refund_reason")}</Body>
      </IfField>

      <Cta href={field("action_url")}>Open the App</Cta>

      <SignOff />
    </TransactionalLayout>
  );
}
