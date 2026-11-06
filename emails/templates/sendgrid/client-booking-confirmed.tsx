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

/** CLIENT_BOOKING_CONFIRMED: a booking with a provider is confirmed. */
export default function BookingConfirmedEmail() {
  return (
    <TransactionalLayout preview="You're booked in. Here's everything you need.">
      <Eyebrow>Booking confirmed</Eyebrow>
      <Heading>You're booked in.</Heading>
      <Body>
        It's official. Here's everything you need for your visit, all in one place (no digging
        through your inbox later).
      </Body>

      <DetailCard
        rows={[
          ["Provider", field("provider_name")],
          ["Service", field("service_name")],
          ["Date", field("appointment_date")],
          ["Time", field("appointment_time")],
          ["Visit type", field("visit_type")],
          ["Location", field("location")],
          ["Amount", `${field("amount")} ${field("currency")}`],
        ]}
        footnote={<>Booking ID: {field("booking_id")}</>}
      />

      <Cta href={field("action_url")}>View Booking</Cta>

      <Body>
        A little prep goes a long way. Jot down your questions, and make sure your devices have
        synced so your provider sees the latest. Video visit? Pyjamas are allowed. We won't tell.
      </Body>
      <Small>Plans changed? You can reschedule or cancel right from the app.</Small>

      <SignOff />
    </TransactionalLayout>
  );
}
