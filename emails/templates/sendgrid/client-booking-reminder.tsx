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

/** CLIENT_BOOKING_REMINDER: a booked visit is coming up. */
export default function AppointmentReminderEmail() {
  return (
    <TransactionalLayout preview="Your visit is coming up. Quick reminder.">
      <Eyebrow>Coming up {field("time_until")}</Eyebrow>
      <Heading>Your visit is nearly here.</Heading>
      <Body>
        A friendly nudge, so it doesn't sneak up on you. Here's who, when and where.
      </Body>

      <DetailCard
        rows={[
          ["With", field("doctor_name")],
          ["Specialty", field("doctor_specialty")],
          ["Date", field("appointment_date")],
          ["Time", field("appointment_time")],
          ["Duration", field("duration")],
          ["Visit type", field("visit_type")],
          ["Location", field("location")],
        ]}
      />

      <Cta href={field("action_url")}>View Booking</Cta>

      <Body>
        Got questions? Write them down now, while you remember them. Video visit? Find a quiet
        corner and a decent signal (pyjamas still fine).
      </Body>
      <Small>Can't make it? You can reschedule or cancel from the app.</Small>

      <SignOff />
    </TransactionalLayout>
  );
}
