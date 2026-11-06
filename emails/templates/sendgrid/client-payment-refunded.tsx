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

/** CLIENT_PAYMENT_REFUNDED: a booking payment has been refunded. */
export default function PaymentRefundedEmail() {
  return (
    <TransactionalLayout preview="Your refund is on its way.">
      <Eyebrow>Refund processed</Eyebrow>
      <Heading>Your refund is on its way.</Heading>
      <Body>
        We've sent your money back. Banks like to take their time, so it can take a few working
        days to show up (they're thorough, we'll give them that).
      </Body>

      <DetailCard
        rows={[
          ["Refunded", `${field("amount")} ${field("currency")}`],
          ["Provider", field("provider_name")],
          ["Service", field("service_name")],
        ]}
        footnote={<>Booking ID: {field("booking_id")}</>}
      />

      <IfField name="refund_reason">
        <Body>Reason: {field("refund_reason")}</Body>
      </IfField>

      <Cta href={field("action_url")}>View Booking</Cta>

      <SignOff />
    </TransactionalLayout>
  );
}
