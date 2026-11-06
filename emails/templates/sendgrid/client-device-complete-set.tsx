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

/**
 * CLIENT_DEVICE_COMPLETE_SET: a week after somebody's first pairing, the devices they don't have yet
 * (one or two), and their store discount when they hold an unused one. Never sent when nothing is
 * missing, so device_1 always has a value; device_2 and the discount may be blank.
 */
export default function DeviceCompleteSetEmail() {
  return (
    <TransactionalLayout preview="One device sees part of the picture. Here's what fills in the rest.">
      <Eyebrow>Complete your set</Eyebrow>
      <Heading>See the whole picture.</Heading>
      <Body>
        A week in, and your device is doing its thing. Each one sees a different part of your
        health, and the app joins them up, so the more it can see, the more it can tell you.
      </Body>

      <DetailCard rows={[[field("device_1_name"), field("device_1_blurb")]]} />
      <Cta href={field("device_1_url")}>Meet {field("device_1_name")}</Cta>

      <IfField name="device_2_name">
        <DetailCard rows={[[field("device_2_name"), field("device_2_blurb")]]} />
        <Cta href={field("device_2_url")}>Meet {field("device_2_name")}</Cta>
      </IfField>

      <IfField name="discount_code">
        <Body>
          Your Premium store discount still works: use {field("discount_code")} at checkout, or
          follow the link and it's already on your cart.
        </Body>
        <Cta href={field("discount_url")}>Shop With Your Discount</Cta>
      </IfField>

      <Small>Everything pairs with the same app, and your data stays yours.</Small>

      <SignOff />
    </TransactionalLayout>
  );
}
