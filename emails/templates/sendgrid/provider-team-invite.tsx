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

/** PROVIDER_TEAM_INVITE: someone at a practice invites a colleague onto its team. */
export default function ProviderTeamInviteEmail() {
  return (
    <TransactionalLayout preview={`You're invited to join ${field("practice_name")}`} title="For Providers">
      <Eyebrow>Team invitation</Eyebrow>
      <Heading>You're invited to join {field("practice_name")}.</Heading>
      <Body>
        {field("invited_by")} would like you on the team at {field("practice_name")} on SeeMyHealth
        for Providers, as {field("role_name")}. Accept below and you'll be set up in a couple of
        minutes.
      </Body>

      <DetailCard
        rows={[
          ["Practice", field("practice_name")],
          ["Role", field("role_name")],
          ["Invited by", field("invited_by")],
          ["Sent to", field("invite_email")],
          ["Expires", field("expires_at")],
        ]}
      />

      <Cta href={field("action_url")}>Accept Invitation</Cta>

      <Small>
        This invitation was sent to {field("invite_email")} and expires on {field("expires_at")}.
        Not expecting it? You can safely ignore this email, or get in touch and we'll look into it.
      </Small>

      <SignOff />
    </TransactionalLayout>
  );
}
