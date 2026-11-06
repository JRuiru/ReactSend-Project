import { Img, Section } from "@react-email/components";
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

const CDN = "https://imagedelivery.net/NnC2JvU8j4bgBbmedVhjJg";

/** CLIENT_FAMILY_REQUEST: somebody asked this person into their family circle. */
export default function FamilyInviteEmail() {
  return (
    <TransactionalLayout preview="Somebody wants you in their family circle.">
      <Section style={heroSection}>
        <Img src={`${CDN}/app-family-sharing/public`} width="560" alt="Family sharing" style={heroImage} />
      </Section>

      <Eyebrow>Family request</Eyebrow>
      <Heading>
        {"{{#if inviter_name}}"}{field("inviter_name")} wants{"{{else}}"}Someone wants{"{{/if}}"} you in their
        family circle.
      </Heading>
      <Body>
        Family on SeeMyHealth means keeping an eye on each other, nicely. Spot the untouched water
        bottle, cheer the good nights, and finally win the "I'm fine, honestly" argument.
      </Body>
      <Body>
        Everyone decides what they share, and you can change your mind whenever you like.
      </Body>

      <Cta href={field("action_url")}>See the Request</Cta>

      <Small>Not sure who this is? Just leave it. Nothing is shared unless you say yes.</Small>
      <SignOff />
    </TransactionalLayout>
  );
}

const heroSection = { marginBottom: "28px" };
const heroImage = { width: "100%", display: "block" as const, borderRadius: "12px" };
