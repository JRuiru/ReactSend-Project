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

/**
 * CLIENT_SHOP_ACCOUNT_CONNECT: a day after sign-up, for an account behind Apple's Hide My Email, which
 * no store email can ever match. The button is a single-use connect link (seven days), where the
 * person signs in to the shop with the email they actually use.
 */
export default function ShopAccountConnectEmail() {
  return (
    <TransactionalLayout preview="Connect the SeeMyHealth shop to your app in one tap.">
      <Eyebrow>Your shop account</Eyebrow>
      <Heading>Let's join the dots.</Heading>
      <Body>
        You signed in with Apple and kept your email private (good call). It does mean we can't tell
        which shop account is yours, so tap below, sign in to the shop with the email you use there,
        and we'll connect the two.
      </Body>

      <Cta href={field("action_url")}>Connect My Shop Account</Cta>

      <Body>
        Once they're connected, your orders, your devices and any Premium discounts all live in one
        place.
      </Body>
      <Small>
        This link works once and lasts seven days. Missed it? Connect any time from the app, in
        Account, Shop Account.
      </Small>

      <SignOff />
    </TransactionalLayout>
  );
}
