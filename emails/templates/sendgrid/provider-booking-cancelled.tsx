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

/** PROVIDER_BOOKING_CANCELLED: a client's booking with the practice has been cancelled. */
export default function ProviderBookingCancelledEmail() {
  return (
    <TransactionalLayout preview={`${field("client_name")}'s booking has been cancelled`} title="For Providers">
      <Eyebrow>Booking cancelled</Eyebrow>
      <Heading>{field("client_name")}'s booking is cancelled.</Heading>
      <Body>
        This slot is free again. Here's what was booked, in case you want to follow up.
      </Body>

      <DetailCard
        rows={[
          ["Client", field("client_name")],
          ["Service", field("service_name")],
          ["Date", field("booking_date")],
        ]}
        footnote={<>Booking ID: {field("booking_id")}</>}
      />

      <IfField name="cancellation_reason">
        <Small>Reason given: {field("cancellation_reason")}</Small>
      </IfField>

      <Cta href={field("action_url")}>View Booking</Cta>

      <SignOff />
    </TransactionalLayout>
  );
}
