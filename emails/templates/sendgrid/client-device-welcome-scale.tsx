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

/** CLIENT_DEVICE_WELCOME_SCALE: the first time this account paired a scale. Tips for good readings. */
export default function DeviceWelcomeScaleEmail() {
  return (
    <TransactionalLayout preview="Your scale is in. A few tips for readings you can trust.">
      <Eyebrow>The Scale</Eyebrow>
      <Heading>Your scale is in.</Heading>
      <Body>
        All set. Your scale is paired, and every weigh-in lands in the app on its own. Here's how to
        keep the readings steady from one day to the next.
      </Body>

      <DetailCard
        rows={[
          ["Bare feet", "Socks off and feet dry, so the body composition readings work."],
          ["Same time daily", "First thing in the morning, before breakfast, is the steadiest."],
          ["Stand still", "Weight even on both feet until the reading finishes."],
          ["Hard floor", "Carpet can throw the numbers off."],
        ]}
      />

      <Cta href={field("action_url")}>See Your Scale</Cta>

      <Small>
        Day-to-day changes are mostly water. The trend over a few weeks is the number that matters.
      </Small>

      <SignOff />
    </TransactionalLayout>
  );
}
