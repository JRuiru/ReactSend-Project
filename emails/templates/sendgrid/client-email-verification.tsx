import { Link } from "@react-email/components";
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

/** CLIENT_EMAIL_VERIFICATION: an email and password sign-up confirming the address is theirs. */
export default function EmailVerificationEmail() {
  return (
    <TransactionalLayout preview="One tap and you're verified.">
      <Eyebrow>Verify your email</Eyebrow>
      <Heading>Hey {field("name")}, is this you?</Heading>
      <Body>
        Just checking this inbox belongs to you before we hand over the keys. One tap below and
        you're verified. That's it, no forms, no quiz.
      </Body>

      <Cta href={field("action_url")}>Verify Email</Cta>

      <Small>
        Button being shy? Paste this into your browser instead:
        <br />
        <Link href={field("verify_url")} style={{ color: "#a3a3a3", wordBreak: "break-all" }}>
          {field("verify_url")}
        </Link>
      </Small>
      <Small>
        Didn't sign up for SeeMyHealth? No harm done. Ignore this email and nothing happens.
      </Small>

      <SignOff />
    </TransactionalLayout>
  );
}
