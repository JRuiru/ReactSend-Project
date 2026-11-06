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

/** CLIENT_PAYMENT_SUCCESSFUL: the receipt for a booking payment. */
export default function PaymentSuccessfulEmail() {
  return (
    <TransactionalLayout preview="Paid and sorted. Here's your receipt.">
      <Eyebrow>Payment receipt</Eyebrow>
      <Heading>Paid and sorted.</Heading>
      <Body>
        Your payment went through. Here's your receipt, for your records (or that folder you swear
        you'll organise one day).
      </Body>

      <DetailCard
        rows={[
          ["Amount", `${field("amount")} ${field("currency")}`],
          ["Provider", field("provider_name")],
          ["Service", field("service_name")],
          ["Payment ID", field("payment_id")],
          ["Booking ID", field("booking_id")],
        ]}
      />

      <Cta href={field("action_url")}>View Booking</Cta>

      <SignOff />
    </TransactionalLayout>
  );
}
