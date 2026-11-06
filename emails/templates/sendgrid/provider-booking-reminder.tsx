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

/** PROVIDER_BOOKING_REMINDER: a client's booking is coming up soon. */
export default function ProviderBookingReminderEmail() {
  return (
    <TransactionalLayout preview={`Coming up: ${field("client_name")} in ${field("time_until")}`} title="For Providers">
      <Eyebrow>Coming up</Eyebrow>
      <Heading>{field("client_name")} is in {field("time_until")}.</Heading>
      <Body>A quick heads-up so nothing sneaks up on you. Here's who and what.</Body>

      <DetailCard
        rows={[
          ["Client", field("client_name")],
          ["Service", field("service_name")],
          ["Date", field("booking_date")],
          ["Starts in", field("time_until")],
        ]}
        footnote={<>Booking ID: {field("booking_id")}</>}
      />

      <Cta href={field("action_url")}>View Booking</Cta>

      <SignOff />
    </TransactionalLayout>
  );
}
