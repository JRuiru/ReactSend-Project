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

/** PROVIDER_BOOKING_CREATED: a client has booked a service with the practice. */
export default function ProviderBookingCreatedEmail() {
  return (
    <TransactionalLayout preview={`New booking from ${field("client_name")}`} title="For Providers">
      <Eyebrow>New booking</Eyebrow>
      <Heading>{field("client_name")} has booked in.</Heading>
      <Body>A new booking has landed in your calendar. Here are the details.</Body>

      <DetailCard
        rows={[
          ["Client", field("client_name")],
          ["Service", field("service_name")],
          ["Date", field("booking_date")],
          ["Time", field("booking_time")],
        ]}
        footnote={<>Booking ID: {field("booking_id")}</>}
      />

      <Cta href={field("action_url")}>View Booking</Cta>

      <SignOff />
    </TransactionalLayout>
  );
}
