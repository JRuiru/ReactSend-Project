import * as React from "react";
import {
  Body,
  Cta,
  DetailCard,
  Eyebrow,
  Heading,
  SignOff,
  Small,
  TransactionalLayout,
  field,
} from "../../components/Transactional";

/** CLIENT_DEVICE_WELCOME_RING: the first time this account paired a ring. Tips for the first week. */
export default function DeviceWelcomeRingEmail() {
  return (
    <TransactionalLayout preview="Your ring is in. Here's how to get the most from your first week.">
      <Eyebrow>Ring One</Eyebrow>
      <Heading>Your ring is in.</Heading>
      <Body>
        Nice one. Your ring is paired and already talking to the app. A few small habits make the
        first week's numbers the best they can be.
      </Body>

      <DetailCard
        rows={[
          ["Wear it snug", "Index or middle finger, snug but comfy. Loose rings miss beats."],
          ["Sleep in it", "Wear it tonight and your first sleep score is waiting in the morning."],
          ["Keep it charged", "A full charge lasts up to 7 days, and the app tells you when it's low."],
          ["Open the app", "Your ring syncs whenever the app is open nearby."],
        ]}
      />

      <Cta href={field("action_url")}>See Your Ring</Cta>

      <Small>The more days it sees, the sharper your insights get.</Small>

      <SignOff />
    </TransactionalLayout>
  );
}
