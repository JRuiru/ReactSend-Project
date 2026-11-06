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

/** PROVIDER_BOOKING_CONFIRMED: the client has paid and the booking is confirmed. */
export default function ProviderBookingConfirmedEmail() {
  return (
    <TransactionalLayout preview={`${field("client_name")} has paid. Booking confirmed.`} title="For Providers">
      <Eyebrow>Booking confirmed</Eyebrow>
      <Heading>Paid and confirmed: {field("client_name")}.</Heading>
      <Body>
        Payment is in, so this booking is confirmed. Nothing for you to chase, just see you there.
      </Body>

      <DetailCard
        rows={[
          ["Client", field("client_name")],
          ["Service", field("service_name")],
          ["Date", field("booking_date")],
          ["Amount", <>{field("amount")} {field("currency")}</>],
        ]}
        footnote={<>Booking ID: {field("booking_id")}</>}
      />

      <Cta href={field("action_url")}>View Booking</Cta>

      <SignOff />
    </TransactionalLayout>
  );
}
