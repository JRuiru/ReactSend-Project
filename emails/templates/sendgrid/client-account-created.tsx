import * as React from "react";
import {
  Body,
  Cta,
  Eyebrow,
  Heading,
  SignOff,
  Small,
  TransactionalLayout,
  field,
} from "../../components/Transactional";

/** CLIENT_ACCOUNT_CREATED: a practice made an account for this person at the counter. */
export default function ClientAccountCreatedEmail() {
  return (
    <TransactionalLayout preview="Your account is ready. A couple of taps and it's all yours.">
      <Eyebrow>Your account is ready</Eyebrow>
      <Heading>Hi {field("client_name")}, we saved you a seat.</Heading>
      <Body>
        Your SeeMyHealth account has been set up for you
        {"{{#if practice_name}}"} by {field("practice_name")}{"{{/if}}"}. All that's left
        is the fun part: pick how you'll sign in and make it yours.
      </Body>

      <Cta href={field("action_url")}>Finish Setting Up</Cta>

      <Body>
        Once you're in, your bookings and follow-ups sit right next to your sleep, meals and mood, all
        in one app. No new paperwork, promise.
      </Body>
      <Small>
        Weren't expecting this? Nothing happens until you finish setting up, so you can simply ignore
        this email.
      </Small>
      <SignOff />
    </TransactionalLayout>
  );
}
