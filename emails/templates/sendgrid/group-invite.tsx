import {
  Text,
  Section,
  Img,
  Row,
  Column,
  Hr,
  Button,
} from "@react-email/components";
import * as React from "react";
import { EmailLayout } from "../../components/EmailLayout";
import { PrimaryButton } from "../../components/PrimaryButton";
import { SecondaryButton } from "../../components/SecondaryButton";

const CDN = "https://imagedelivery.net/NnC2JvU8j4bgBbmedVhjJg";
const BASE_URL = "https://seemyhealth.ai";

const IMAGES = {
  hero: `${CDN}/app-community-challenges/public`,
  lifestyle: `${CDN}/lifestyle-friends-bar/public`,
};

export default function GroupInviteEmail() {
  return (
    <EmailLayout preview="{{inviter_name}} invited you to join {{group_name}}">

      {/* ── Hero ── */}
      <Section style={heroSection}>
        <Img
          src={IMAGES.hero}
          width="560"
          alt="Group invite"
          style={heroImage}
        />
        <Section style={heroOverlay} className="force-white">
          <Text style={heroLabel}>GROUP INVITATION</Text>
          <Text style={heroTitle}>You are invited.</Text>
        </Section>
      </Section>

      {/* ── Greeting ── */}
      <Text style={heading}>
        Hey {"{{first_name}}"},
      </Text>
      <Text style={paragraph}>
        <strong style={{ color: "#f5f5f5" }}>{"{{inviter_name}}"}</strong> invited
        you to join <strong style={{ color: "#f5f5f5" }}>{"{{group_name}}"}</strong> on
        SeeMyHealth. Groups are a great way to stay motivated and share your
        health journey.
      </Text>

      <Hr style={divider} />

      {/* ── Group details card ── */}
      <Section style={groupCard}>
        <Text style={groupName}>{"{{group_name}}"}</Text>
        <Text style={groupDesc}>{"{{group_description}}"}</Text>

        <Hr style={cardDivider} />

        <Section style={detailGrid}>
          <Row>
            <Column style={detailCell}>
              <Text style={detailValue}>{"{{member_count}}"}</Text>
              <Text style={detailLabel}>MEMBERS</Text>
            </Column>
            <Column style={detailCell}>
              <Text style={detailValue}>{"{{group_category}}"}</Text>
              <Text style={detailLabel}>FOCUS</Text>
            </Column>
          </Row>
        </Section>

        <Section style={{ marginTop: "12px" }}>
          <Row>
            <Column style={detailCell}>
              <Text style={detailValue}>{"{{created_date}}"}</Text>
              <Text style={detailLabel}>CREATED</Text>
            </Column>
            <Column style={detailCell}>
              <Text style={detailValue}>{"{{active_challenges}}"} active</Text>
              <Text style={detailLabel}>CHALLENGES</Text>
            </Column>
          </Row>
        </Section>
      </Section>

      {/* ── CTAs ── */}
      <Section style={ctaCenter}>
        <PrimaryButton href={`${BASE_URL}/groups/{{group_id}}/join`}>
          Join Group
        </PrimaryButton>
      </Section>
      <Section style={ctaSecondary}>
        <SecondaryButton href={`${BASE_URL}/groups/{{group_id}}`}>
          View Group
        </SecondaryButton>
      </Section>

      <Hr style={divider} />

      {/* ── What groups offer ── */}
      <Text style={sectionLabel}>WHAT GROUPS OFFER</Text>

      <Section style={benefitRow}>
        <Row>
          <Column style={benefitNumCol}>
            <Text style={benefitNum}>1</Text>
          </Column>
          <Column>
            <Text style={benefitTitle}>Shared feed</Text>
            <Text style={benefitDesc}>
              Celebrate wins and share health milestones with the group.
            </Text>
          </Column>
        </Row>
      </Section>

      <Section style={benefitRow}>
        <Row>
          <Column style={benefitNumCol}>
            <Text style={benefitNum}>2</Text>
          </Column>
          <Column>
            <Text style={benefitTitle}>Group challenges</Text>
            <Text style={benefitDesc}>
              Compete together and hold each other accountable.
            </Text>
          </Column>
        </Row>
      </Section>

      <Section style={benefitRow}>
        <Row>
          <Column style={benefitNumCol}>
            <Text style={benefitNum}>3</Text>
          </Column>
          <Column>
            <Text style={benefitTitle}>Leaderboards</Text>
            <Text style={benefitDesc}>
              See how you stack up against the rest of the group.
            </Text>
          </Column>
        </Row>
      </Section>

      {/* ── Lifestyle image ── */}
      <Section style={lifestyleImageSection}>
        <Img
          src={IMAGES.lifestyle}
          width="560"
          alt="Friends being social and healthy together"
          style={lifestyleImage}
        />
      </Section>

      <Hr style={divider} />

      {/* ── Social proof ── */}
      <Section style={proofSection}>
        <Text style={proofNumber}>{"{{member_count}}"} members</Text>
        <Text style={proofText}>
          are already in this group. Join them and start your health
          journey together.
        </Text>
      </Section>

      {/* ── Testimonial ── */}
      <Section style={testimonialSection}>
        <Text style={testimonialQuote}>
          "Our running group has done three challenges together. The leaderboard keeps everyone honest."
        </Text>
        <Text style={testimonialAuthor}>
          Amara W., group admin
        </Text>
      </Section>

      <Hr style={divider} />

      {/* ── App download ── */}
      <Section style={downloadSection}>
        <Text style={downloadHeading}>New to SeeMyHealth?</Text>
        <Text style={downloadText}>
          Download the app to join the group and start participating
          in challenges.
        </Text>
        <Section style={downloadStoreRow}>
          <Row>
            <Column align="center" style={downloadStoreCol}>
              <Button href="https://apps.apple.com/app/seemyhealth" style={downloadStoreButton}>
                App Store
              </Button>
            </Column>
            <Column align="center" style={downloadStoreCol}>
              <Button href="https://play.google.com/store/apps/details?id=ai.seemyhealth" style={downloadStoreButton}>
                Google Play
              </Button>
            </Column>
          </Row>
        </Section>
      </Section>

    </EmailLayout>
  );
}

// ── Styles ──

const heroSection = {
  position: "relative" as const,
  borderRadius: "12px",
  overflow: "hidden" as const,
  marginBottom: "32px",
};

const heroImage = {
  width: "100%",
  display: "block" as const,
  borderRadius: "12px",
};

const heroOverlay = {
  position: "absolute" as const,
  bottom: "0",
  left: "0",
  right: "0",
  padding: "40px 24px 24px",
  background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)",
};

const heroLabel = {
  fontSize: "11px",
  fontWeight: "600" as const,
  color: "#b3b3b3",
  letterSpacing: "3px",
  textTransform: "uppercase" as const,
  margin: "0 0 4px 0",
};

const heroTitle = {
  fontSize: "26px",
  fontWeight: "700" as const,
  color: "#ffffff",
  margin: "0",
};

const heading = {
  fontSize: "24px",
  fontWeight: "700" as const,
  color: "#f5f5f5",
  margin: "0 0 10px 0",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  color: "#a3a3a3",
  margin: "0",
};

const divider = {
  borderColor: "#1a1a1a",
  margin: "28px 0",
};

const sectionLabel = {
  fontSize: "11px",
  fontWeight: "600" as const,
  color: "#5e5e5e",
  letterSpacing: "3px",
  textTransform: "uppercase" as const,
  margin: "0 0 16px 0",
};

// ── Group card ──

const groupCard = {
  backgroundColor: "#141414",
  borderRadius: "12px",
  padding: "28px 24px",
  border: "1px solid #1a1a1a",
};

const groupName = {
  fontSize: "22px",
  fontWeight: "700" as const,
  color: "#f5f5f5",
  margin: "0 0 6px 0",
};

const groupDesc = {
  fontSize: "14px",
  color: "#8a8a8a",
  lineHeight: "22px",
  margin: "0",
};

const cardDivider = {
  borderColor: "#1a1a1a",
  margin: "20px 0",
};

const detailGrid = {
  textAlign: "center" as const,
};

const detailCell = {
  width: "50%",
  textAlign: "center" as const,
};

const detailValue = {
  fontSize: "15px",
  fontWeight: "600" as const,
  color: "#f5f5f5",
  margin: "0 0 4px 0",
};

const detailLabel = {
  fontSize: "10px",
  fontWeight: "600" as const,
  color: "#5e5e5e",
  letterSpacing: "1.5px",
  margin: "0",
};

// ── CTAs ──

const ctaCenter = {
  textAlign: "center" as const,
  margin: "28px 0 12px 0",
};

const ctaSecondary = {
  textAlign: "center" as const,
};

// ── Benefits ──

const benefitRow = {
  marginBottom: "16px",
};

const benefitNumCol = {
  width: "36px",
  verticalAlign: "top" as const,
};

const benefitNum = {
  fontSize: "20px",
  fontWeight: "700" as const,
  color: "#252525",
  margin: "0",
  lineHeight: "1",
};

const benefitTitle = {
  fontSize: "15px",
  fontWeight: "600" as const,
  color: "#f5f5f5",
  margin: "0 0 4px 0",
};

const benefitDesc = {
  fontSize: "14px",
  color: "#6b6b6b",
  lineHeight: "21px",
  margin: "0",
};

// ── Lifestyle image ──

const lifestyleImageSection = {
  margin: "28px 0 0 0",
};

const lifestyleImage = {
  width: "100%",
  display: "block" as const,
  borderRadius: "12px",
};

// ── Testimonial ──

const testimonialSection = {
  textAlign: "center" as const,
  padding: "24px 20px",
};

const testimonialQuote = {
  fontSize: "16px",
  fontStyle: "italic" as const,
  lineHeight: "26px",
  color: "#a3a3a3",
  margin: "0 0 12px 0",
  textAlign: "center" as const,
};

const testimonialAuthor = {
  fontSize: "13px",
  fontWeight: "600" as const,
  color: "#6b6b6b",
  margin: "0",
  textAlign: "center" as const,
};

// ── Social proof ──

const proofSection = {
  textAlign: "center" as const,
};

const proofNumber = {
  fontSize: "28px",
  fontWeight: "700" as const,
  color: "#f5f5f5",
  margin: "0",
  textAlign: "center" as const,
};

const proofText = {
  fontSize: "14px",
  color: "#6b6b6b",
  margin: "4px 0 0 0",
  textAlign: "center" as const,
};

// ── Download ──

const downloadSection = {
  textAlign: "center" as const,
};

const downloadHeading = {
  fontSize: "18px",
  fontWeight: "700" as const,
  color: "#f5f5f5",
  margin: "0 0 6px 0",
  textAlign: "center" as const,
};

const downloadText = {
  fontSize: "14px",
  color: "#6b6b6b",
  lineHeight: "22px",
  margin: "0",
  textAlign: "center" as const,
};

const downloadStoreRow = {
  marginTop: "16px",
};

const downloadStoreCol = {
  width: "50%",
  padding: "0 4px",
};

const downloadStoreButton = {
  backgroundColor: "transparent",
  color: "#a3a3a3",
  padding: "10px 20px",
  borderRadius: "50px",
  fontSize: "12px",
  fontWeight: "600" as const,
  textDecoration: "none",
  display: "inline-block",
  border: "1px solid #2a2a2a",
  letterSpacing: "0.5px",
};
