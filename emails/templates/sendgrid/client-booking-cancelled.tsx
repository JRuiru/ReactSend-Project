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

/** CLIENT_BOOKING_CANCELLED: a booking with a provider has been cancelled. */
export default function BookingCancelledEmail() {
  return (
    <TransactionalLayout preview="Your booking is cancelled. Here are the details.">
      <Eyebrow>Booking cancelled</Eyebrow>
      <Heading>Your booking is cancelled.</Heading>
      <Body>
        This one's off the calendar. Here's what was cancelled, so nothing catches you by surprise.
      </Body>

      <DetailCard
        rows={[
          ["Provider", field("provider_name")],
          ["Service", field("service_name")],
          ["Date", field("appointment_date")],
        ]}
        footnote={<>Booking ID: {field("booking_id")}</>}
      />

      <IfField name="cancellation_reason">
        <Body>Reason given: {field("cancellation_reason")}</Body>
      </IfField>

      <Body>
        Still want to be seen? Book another time whenever suits you. If you'd paid, any refund
        follows on its own.
      </Body>

      <Cta href={field("action_url")}>Book Again</Cta>

      <SignOff />
    </TransactionalLayout>
  );
}
