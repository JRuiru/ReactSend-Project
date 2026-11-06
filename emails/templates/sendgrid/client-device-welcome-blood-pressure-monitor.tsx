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

/**
 * CLIENT_DEVICE_WELCOME_BLOOD_PRESSURE_MONITOR: the first time this account paired a blood pressure
 * monitor. Calm and practical: how to measure, never what a reading means.
 */
export default function DeviceWelcomeBloodPressureMonitorEmail() {
  return (
    <TransactionalLayout preview="Your blood pressure monitor is ready. Here's how to measure well.">
      <Eyebrow>BP Monitor</Eyebrow>
      <Heading>Your monitor is ready.</Heading>
      <Body>
        Your blood pressure monitor is paired, and each reading saves to the app as soon as the cuff
        lets go. A steady routine gives you readings you can compare.
      </Body>

      <DetailCard
        rows={[
          ["Rest first", "Sit for five minutes, back supported and feet flat on the floor."],
          ["Cuff placement", "Upper left arm, about an inch above the elbow, at heart level."],
          ["Keep still", "No talking or moving while it measures."],
          ["Same times", "Morning before coffee, and again in the evening, works well."],
        ]}
      />

      <Cta href={field("action_url")}>See Your Monitor</Cta>

      <Small>
        Readings are for keeping track at home. If you're ever worried about one, talk to your
        doctor.
      </Small>

      <SignOff />
    </TransactionalLayout>
  );
}
