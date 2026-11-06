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

/** PROVIDER_TEAM_MEMBER_REMOVED: a team member's access to a practice has ended. */
export default function ProviderMemberRemovedEmail() {
  return (
    <TransactionalLayout preview={`Your access to ${field("practice_name")} has ended`} title="For Providers">
      <Eyebrow>Team update</Eyebrow>
      <Heading>You're no longer part of {field("practice_name")}.</Heading>
      <Body>
        Your access to {field("practice_name")} on SeeMyHealth for Providers has ended, so its
        bookings, clients and messages are no longer available to you.
      </Body>
      <Body>
        If you think this is a mistake, the best first step is to speak to the practice directly.
        Anything else we can help with, drop us a line at the address below.
      </Body>

      <Cta href={field("action_url")}>Open SeeMyHealth for Providers</Cta>

      <SignOff />
    </TransactionalLayout>
  );
}
