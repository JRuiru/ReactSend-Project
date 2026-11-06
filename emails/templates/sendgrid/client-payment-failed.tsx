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

/** CLIENT_PAYMENT_FAILED: a booking payment did not go through. Calm and kind, never jokey. */
export default function PaymentFailedEmail() {
  return (
    <TransactionalLayout preview="Your payment didn't go through. Here's how to sort it.">
      <Eyebrow>Payment didn't go through</Eyebrow>
      <Heading>Your payment didn't go through.</Heading>
      <Body>
        We couldn't take the payment for your booking, so nothing has been charged. It's usually a
        quick fix, like an expired card or a bank check.
      </Body>

      <DetailCard
        rows={[
          ["Amount", `${field("amount")} ${field("currency")}`],
          ["Provider", field("provider_name")],
          ["Service", field("service_name")],
        ]}
        footnote={<>Booking ID: {field("booking_id")}</>}
      />

      <IfField name="failure_reason">
        <Body>What we were told: {field("failure_reason")}</Body>
      </IfField>

      <Cta href={field("action_url")}>Try Again</Cta>

      <Small>
        If it keeps happening, your bank can tell you more, or drop us a line at the address below and we'll help.
      </Small>

      <SignOff />
    </TransactionalLayout>
  );
}
