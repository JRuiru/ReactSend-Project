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
 * CLIENT_SHOP_ACCOUNT_READY: a day after sign-up, the app account has been joined to a store account
 * with the same verified email. Says which email to sign in with on the website. No marketing: the
 * store account was created with marketing consent off.
 */
export default function ShopAccountReadyEmail() {
  return (
    <TransactionalLayout preview="Your SeeMyHealth shop account is ready, and it already knows you.">
      <Eyebrow>Your shop account</Eyebrow>
      <Heading>One you, everywhere.</Heading>
      <Body>
        We've set up your account at the SeeMyHealth shop and joined it to your app, so your orders,
        your devices and any Premium discounts all live in one place.
      </Body>

      <DetailCard rows={[["Sign in with", field("shop_email")]]} />

      <Cta href={field("action_url")}>Visit Your Shop Account</Cta>

      <Small>
        No password needed: the shop sends a sign-in code to this address. We won't send you
        marketing unless you ask for it.
      </Small>

      <SignOff />
    </TransactionalLayout>
  );
}
