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
  hero: `${CDN}/ring-one-sunset-meditation/public`,
  ring: `${CDN}/ring-sleeping/public`,
  scale: `${CDN}/scale-stepon-body-comp/public`,
  hydra: `${CDN}/bottle-smart-reminder/public`,
  community: `${CDN}/app-community-challenges/public`,
  moodJournal: `${CDN}/app-mood-journal/public`,
};

export default function PostPurchaseSetupTips() {
  return (
    <EmailLayout preview="Get the most out of your SeeMyHealth devices — tips and tricks inside." title="Setup Tips">

      {/* ── Hero ── */}
      <Section style={heroSection}>
        <Img src={IMAGES.hero} width="560" alt="Getting started with SeeMyHealth" style={heroImg} />
        <Section style={heroOverlay} className="force-white">
          <Text style={heroTagline}>GETTING STARTED</Text>
          <Text style={heroTitle}>Pro tips.</Text>
        </Section>
      </Section>

      {/* ── Greeting ── */}
      <Text style={heading}>
        Tips to get the most out of your devices.
      </Text>
      <Text style={paragraph}>
        Your SeeMyHealth devices are powerful out of the box, but these tips will help you unlock their full potential.
      </Text>

      <Hr style={divider} />

      {/* ── Tip 1: Ring + Sleep ── */}
      <Section style={deviceCard}>
        <Img src={IMAGES.ring} width="480" alt="Ring One heart rate tracking" style={deviceImage} />
        <Section style={deviceBody}>
          <Text style={tipLabel}>TIP 01</Text>
          <Text style={tipTitle}>Wear it every night</Text>
          <Text style={tipText}>
            If you have the Ring One, wear it to bed every night for at least a week before checking your sleep trends. The app needs consistent data to give you accurate insights and recommendations.
          </Text>
        </Section>
      </Section>

      {/* ── Tip 2: Scale consistency ── */}
      <Section style={deviceCard}>
        <Img src={IMAGES.scale} width="480" alt="Step on the Scale for body composition" style={deviceImage} />
        <Section style={deviceBody}>
          <Text style={tipLabel}>TIP 02</Text>
          <Text style={tipTitle}>Same time, every day</Text>
          <Text style={tipText}>
            Step on the Scale at the same time each morning &mdash; ideally right after waking up, before eating or drinking. Consistency is key for accurate body composition trends.
          </Text>
        </Section>
      </Section>

      {/* ── Tip 3: Hydration goals ── */}
      <Section style={deviceCard}>
        <Img src={IMAGES.hydra} width="480" alt="Hydra One smart reminders" style={deviceImage} />
        <Section style={deviceBody}>
          <Text style={tipLabel}>TIP 03</Text>
          <Text style={tipTitle}>Set hydration goals</Text>
          <Text style={tipText}>
            Open the app and set your daily hydration goal based on your body weight. The Hydra One will send you smart reminders throughout the day to keep you on track.
          </Text>
        </Section>
      </Section>

      <Hr style={divider} />

      {/* ── App features — 2-up grid ── */}
      <Text style={sectionLabel}>IN THE APP</Text>
      <Text style={sectionHeading}>More to explore.</Text>

      <Section style={{ marginTop: "16px" }}>
        <Row>
          <Column style={featureCol}>
            <Img src={IMAGES.community} width="220" alt="Community challenges" style={featureImage} />
            <Text style={featureTitle}>Challenges</Text>
            <Text style={featureDesc}>Compete with friends and other users. Stay motivated together.</Text>
          </Column>
          <Column style={featureColSpacer} />
          <Column style={featureCol}>
            <Img src={IMAGES.moodJournal} width="220" alt="Mood journaling" style={featureImage} />
            <Text style={featureTitle}>Health Journal</Text>
            <Text style={featureDesc}>Log mood, energy, and daily notes. Track mental wellness.</Text>
          </Column>
        </Row>
      </Section>

      <Hr style={divider} />

      {/* ── Checklist: Quick wins ── */}
      <Section style={checklistCard}>
        <Text style={checklistHeading}>Quick wins for your first week</Text>
        <Section style={checklistItem}>
          <Row>
            <Column style={checkNumCol}><Text style={checkIcon}>&#9633;</Text></Column>
            <Column><Text style={checkText}>Enable push notifications for daily summaries</Text></Column>
          </Row>
        </Section>
        <Section style={checklistItem}>
          <Row>
            <Column style={checkNumCol}><Text style={checkIcon}>&#9633;</Text></Column>
            <Column><Text style={checkText}>Set your first health goal in the app</Text></Column>
          </Row>
        </Section>
        <Section style={checklistItem}>
          <Row>
            <Column style={checkNumCol}><Text style={checkIcon}>&#9633;</Text></Column>
            <Column><Text style={checkText}>Check your weekly health report on Sunday</Text></Column>
          </Row>
        </Section>
        <Section style={{ marginBottom: "0" }}>
          <Row>
            <Column style={checkNumCol}><Text style={checkIcon}>&#9633;</Text></Column>
            <Column><Text style={checkText}>Invite a friend or family member to join</Text></Column>
          </Row>
        </Section>
      </Section>

      {/* ── CTA ── */}
      <Section style={ctaCenter}>
        <PrimaryButton href={`${BASE_URL}/app`}>
          Open the App
        </PrimaryButton>
      </Section>

      <Section style={{ height: "8px" }} />

      <Section style={{ textAlign: "center" as const }}>
        <SecondaryButton href={`${BASE_URL}/support`}>
          Need Help? Visit Support
        </SecondaryButton>
      </Section>

      <Section style={{ height: "16px" }} />

      <Text style={footerNote}>
        You received this email because you recently purchased from seemyhealth.ai. We want to make sure you get the most out of your devices.
      </Text>
    </EmailLayout>
  );
}

// ── Styles ──

const heroSection = { position: "relative" as const, borderRadius: "12px", overflow: "hidden" as const, marginBottom: "32px" };
const heroImg = { width: "100%", display: "block" as const, borderRadius: "12px" };
const heroOverlay = { position: "absolute" as const, bottom: "0", left: "0", right: "0", padding: "40px 24px 24px", background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)" };
const heroTagline = { fontSize: "11px", fontWeight: "600" as const, color: "#F97316", letterSpacing: "3px", textTransform: "uppercase" as const, margin: "0 0 4px 0" };
const heroTitle = { fontSize: "32px", fontWeight: "700" as const, color: "#ffffff", margin: "0", letterSpacing: "-0.5px" };

const heading = { fontSize: "26px", fontWeight: "700" as const, color: "#f5f5f5", margin: "0 0 12px 0" };
const paragraph = { fontSize: "16px", lineHeight: "26px", color: "#a3a3a3", margin: "0 0 8px 0" };
const sectionLabel = { fontSize: "11px", fontWeight: "600" as const, color: "#5e5e5e", letterSpacing: "3px", textTransform: "uppercase" as const, margin: "0 0 8px 0" };
const sectionHeading = { fontSize: "22px", fontWeight: "700" as const, color: "#f5f5f5", margin: "0 0 8px 0", letterSpacing: "-0.3px" };
const divider = { borderColor: "#1a1a1a", margin: "36px 0" };
const ctaCenter = { textAlign: "center" as const, margin: "28px 0 0 0" };

const deviceCard = { borderRadius: "12px", overflow: "hidden" as const, marginBottom: "16px", border: "1px solid #1a1a1a", backgroundColor: "#141414" };
const deviceImage = { width: "100%", display: "block" as const };
const deviceBody = { padding: "20px 24px 24px" };
const tipLabel = { fontSize: "10px", fontWeight: "700" as const, color: "#F97316", letterSpacing: "2px", margin: "0 0 4px 0" };
const tipTitle = { fontSize: "18px", fontWeight: "700" as const, color: "#f5f5f5", margin: "0 0 8px 0" };
const tipText = { fontSize: "14px", lineHeight: "22px", color: "#8a8a8a", margin: "0" };

const featureCol = { width: "48%", verticalAlign: "top" as const };
const featureColSpacer = { width: "4%" };
const featureImage = { width: "100%", display: "block" as const, borderRadius: "10px", marginBottom: "12px" };
const featureTitle = { fontSize: "14px", fontWeight: "600" as const, color: "#f5f5f5", margin: "0 0 4px 0" };
const featureDesc = { fontSize: "13px", lineHeight: "20px", color: "#6b6b6b", margin: "0" };

const checklistCard = { backgroundColor: "#141414", borderRadius: "12px", padding: "24px", border: "1px solid #1a1a1a", marginTop: "16px" };
const checklistHeading = { fontSize: "18px", fontWeight: "700" as const, color: "#f5f5f5", margin: "0 0 20px 0" };
const checklistItem = { marginBottom: "12px" };
const checkNumCol = { width: "28px", verticalAlign: "top" as const };
const checkIcon = { fontSize: "16px", color: "#333333", margin: "0" };
const checkText = { fontSize: "14px", color: "#a3a3a3", lineHeight: "22px", margin: "0" };
const footerNote = { fontSize: "13px", color: "#525252", textAlign: "center" as const, margin: "16px 0 0 0", lineHeight: "20px" };
