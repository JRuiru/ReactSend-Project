import * as React from "react";
import { Body, Eyebrow, Heading, SignOff, Small, TransactionalLayout } from "../../components/Transactional";

/**
 * CLIENT_ACCOUNT_DATA_DELETED: sent at the purge, when the account and everything in it is gone. No link and
 * no name, because the account no longer exists. Calm: this is a deletion, not a moment for jokes.
 */
export default function AccountDataDeletedEmail() {
  return (
    <TransactionalLayout preview="Your SeeMyHealth account and everything in it has been deleted.">
      <Eyebrow>Account deleted</Eyebrow>
      <Heading>Your data has been deleted</Heading>
      <Body>
        As you asked, we've permanently deleted your SeeMyHealth account and everything in it: your
        profile, health data, journal and history. This can't be undone, and there's nothing more you
        need to do.
      </Body>
      <Body>
        A few things we're required to keep, such as records of payments you made to a practice, are
        held without your name or contact details.
      </Body>
      <Body>
        If you had a subscription through the App Store or Google Play, it's managed by them, so do
        check it's cancelled there.
      </Body>
      <Small>If you'd ever like to come back, you're always welcome to make a new account.</Small>
      <SignOff />
    </TransactionalLayout>
  );
}
