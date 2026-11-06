import * as React from "react";
import {
  BigValue,
  Body,
  Eyebrow,
  Heading,
  SignOff,
  Small,
  TransactionalLayout,
  field,
} from "../../components/Transactional";

/**
 * CLIENT_VERIFICATION_CODE: a walk-in at a practice's counter. The code is read back to the staff,
 * never clicked, so there is no button. Calm: it is a security code.
 */
export default function ClientVerificationCodeEmail() {
  return (
    <TransactionalLayout preview="Your SeeMyHealth verification code is inside.">
      <Eyebrow>Verification code</Eyebrow>
      <Heading>Here's your code</Heading>
      <Body>Read this code to the team at {field("practice_name")} to confirm it's really you.</Body>

      <BigValue>{field("verification_code")}</BigValue>

      <Body>It works for {field("expires_in_minutes")} minutes.</Body>
      <Small>
        If you're not at {field("practice_name")} right now, don't share it with anyone. Nobody from
        SeeMyHealth will ever ask you for it.
      </Small>
      <SignOff />
    </TransactionalLayout>
  );
}
