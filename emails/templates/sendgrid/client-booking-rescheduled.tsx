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

/** CLIENT_BOOKING_RESCHEDULED: a booking has moved to a new time. */
export default function AppointmentRescheduledEmail() {
  return (
    <TransactionalLayout preview="Your booking has moved. Here's the new time.">
      <Eyebrow>Booking moved</Eyebrow>
      <Heading>New time, same visit.</Heading>
      <Body>
        Your booking has moved. Pop the new time in your calendar (and maybe set an alarm, we
        won't judge).
      </Body>

      <DetailCard
        rows={[
          ["Provider", field("provider_name")],
          ["Service", field("service_name")],
          ["New date", field("appointment_date")],
          ["New time", field("appointment_time")],
        ]}
        footnote={<>Booking ID: {field("booking_id")}</>}
      />

      <Cta href={field("action_url")}>View Booking</Cta>

      <Small>Doesn't work for you? You can change or cancel it from the app.</Small>

      <SignOff />
    </TransactionalLayout>
  );
}
