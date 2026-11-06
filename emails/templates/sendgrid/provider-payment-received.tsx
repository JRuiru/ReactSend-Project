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

/** PROVIDER_PAYMENT_RECEIVED: a client's payment to the practice has come through. */
export default function ProviderPaymentReceivedEmail() {
  return (
    <TransactionalLayout preview={`Payment received from ${field("client_name")}`} title="For Providers">
      <Eyebrow>Payment received</Eyebrow>
      <Heading>Ka-ching. {field("client_name")} has paid.</Heading>
      <Body>A payment has come through for one of your bookings. Here's the receipt.</Body>

      <DetailCard
        rows={[
          ["Client", field("client_name")],
          ["Service", field("service_name")],
          ["Amount", <>{field("amount")} {field("currency")}</>],
          ["Payment ID", field("payment_id")],
        ]}
        footnote={<>Booking ID: {field("booking_id")}</>}
      />

      <Cta href={field("action_url")}>View Payment</Cta>

      <SignOff />
    </TransactionalLayout>
  );
}
