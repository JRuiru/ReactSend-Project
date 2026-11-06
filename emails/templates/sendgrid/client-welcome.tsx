import { Img, Section, Text } from "@react-email/components";
import * as React from "react";
import {
  Body,
  Cta,
  DetailCard,
  Divider,
  Eyebrow,
  Heading,
  SignOff,
  Small,
  TransactionalLayout,
  field,
} from "../../components/Transactional";

const CDN = "https://imagedelivery.net/NnC2JvU8j4bgBbmedVhjJg";

/** CLIENT_WELCOME: a new account, the first email anybody gets from us. No name is sent. */
export default function WelcomeEmail() {
  return (
    <TransactionalLayout preview="Hey. Your body's talking. Now you can listen.">
      <Section style={heroSection}>
        <Img src={`${CDN}/lifestyle-sun-portrait/public`} width="560" alt="Welcome to SeeMyHealth" style={heroImage} />
      </Section>

      <Eyebrow>Welcome to SeeMyHealth</Eyebrow>
      <Heading>Hey. Your body's talking.</Heading>
      <Body>
        Sleep, steps, meals and water keep dropping hints. SeeMyHealth puts them side by side so
        they finally make sense together. Stop guessing. Start listening.
      </Body>
      <Body>
        It works from day one, no device needed. Here's a good place to start:
      </Body>

      <DetailCard
        rows={[
          ["Log", "A meal, a glass of water, how you're feeling (be honest)"],
          ["Set", "A goal or two. Your goals, not ours. No guilt trips included."],
          ["Bring", "Your people. Family, friends, maybe a challenge."],
        ]}
      />

      <Cta href={field("action_url")}>Open the App</Cta>

      <Divider />

      <Text style={asideHeading}>Already have a fitness tracker?</Text>
      <Small>
        Keep it. Seriously, we're not the jealous type. Switch on Apple Health or Health Connect and
        its steps, heart rate and sleep land right next to everything else.
      </Small>
      <Small>
        Premium is on us for your first two weeks, so go and have a proper look around.
      </Small>

      <SignOff />
    </TransactionalLayout>
  );
}

const heroSection = { marginBottom: "28px" };
const heroImage = { width: "100%", display: "block" as const, borderRadius: "12px" };
const asideHeading = { fontSize: "16px", fontWeight: "600" as const, color: "#f5f5f5", margin: "0 0 8px 0" };
