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

/** CLIENT_BOOKING_NEW_TIME_PROPOSED: a provider suggested a new time; the person accepts or declines in the app. */
export default function AppointmentRescheduleProposedEmail() {
  return (
    <TransactionalLayout preview="Your provider suggested a new time. Your call.">
      <Eyebrow>New time suggested</Eyebrow>
      <Heading>How does this time look?</Heading>
      <Body>
        Your provider has suggested moving your booking. Nothing changes until you say so, so have
        a look and accept or decline in the app.
      </Body>

      <DetailCard
        rows={[
          ["Provider", field("provider_name")],
          ["Service", field("service_name")],
          ["Suggested date", field("appointment_date")],
          ["Suggested time", field("appointment_time")],
        ]}
        footnote={<>Booking ID: {field("booking_id")}</>}
      />

      <Cta href={field("action_url")}>See the New Time</Cta>

      <Small>If you decline, your original time stays exactly as it was.</Small>

      <SignOff />
    </TransactionalLayout>
  );
}
