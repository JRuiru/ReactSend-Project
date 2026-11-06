import * as React from "react";
import {
  BigValue,
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

/** CLIENT_STORE_DISCOUNT_ISSUED: a discount code for the SeeMyHealth store. The code is in the body only. */
export default function StoreDiscountIssuedEmail() {
  return (
    <TransactionalLayout preview="Psst. A little something for the store.">
      <Eyebrow>Store discount</Eyebrow>
      <Heading>Psst. This one's for you.</Heading>
      <Body>
        A little thank you for being here. Use the code below at checkout in the SeeMyHealth store.
        We're not pushy. Okay, maybe a little.
      </Body>

      <BigValue>{field("discount_code")}</BigValue>

      <DetailCard
        rows={[
          ["Worth", <>{field("amount")} {field("currency")}</>],
          ["Use it by", field("expires_on")],
        ]}
      />

      <Cta href={field("action_url")}>Shop Now</Cta>

      <Small>One code, one checkout. It's yours, so maybe don't post it in the group chat.</Small>
      <SignOff />
    </TransactionalLayout>
  );
}
