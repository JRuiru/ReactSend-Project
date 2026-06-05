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
  hero: `${CDN}/lifestyle-celebration-toast/public`,
  appDownload: `${CDN}/app-couch-download/public`,
  appGoals: `${CDN}/app-goals-achieved/public`,
  appFamily: `${CDN}/app-family-sharing/public`,
};

export default function PostPurchaseThankYou() {
  return (
    <EmailLayout preview="Thank you for your order — here's what happens next." title="Thank You">

      {/* ── Hero ── */}
      <Section style={heroSection}>
        <Img src={IMAGES.hero} width="560" alt="Welcome to the SeeMyHealth family" style={heroImg} />
        <Section style={heroOverlay} className="force-white">
          <Text style={heroTagline}>ORDER CONFIRMED</Text>
          <Text style={heroTitle}>Thank you.</Text>
        </Section>
      </Section>

      {/* ── Greeting ── */}
      <Text style={heading}>
        {"{{ person|lookup:'first_name'|default:'Hey' }}"}, your order is on its way.
      </Text>
      <Text style={paragraph}>
        Your health journey with SeeMyHealth starts now. Here&rsquo;s everything you need to know while you wait for your delivery.
      </Text>

      <Hr style={divider} />

      {/* ── What Happens Next — Checklist ── */}
      <Text style={sectionLabel}>WHAT HAPPENS NEXT</Text>
      <Section style={checklistCard}>
        <Section style={checklistItem}>
          <Row>
            <Column style={checkNumCol}>
              <Text style={checkNum}>1</Text>
            </Column>
            <Column>
              <Text style={checkTitle}>Processing</Text>
              <Text style={checkDesc}>We&rsquo;re preparing your order. This usually takes 1&ndash;2 business days.</Text>
            </Column>
          </Row>
        </Section>
        <Section style={checklistItem}>
          <Row>
            <Column style={checkNumCol}>
              <Text style={checkNum}>2</Text>
            </Column>
            <Column>
              <Text style={checkTitle}>Shipped</Text>
              <Text style={checkDesc}>You&rsquo;ll get a shipping confirmation email with tracking details.</Text>
            </Column>
          </Row>
        </Section>
        <Section style={checklistItem}>
          <Row>
            <Column style={checkNumCol}>
              <Text style={checkNum}>3</Text>
            </Column>
            <Column>
              <Text style={checkTitle}>Delivered</Text>
              <Text style={checkDesc}>Your devices arrive at your door. Free shipping, always.</Text>
            </Column>
          </Row>
        </Section>
        <Section style={{ marginBottom: "0" }}>
          <Row>
            <Column style={checkNumCol}>
              <Text style={checkNum}>4</Text>
            </Column>
            <Column>
              <Text style={checkTitle}>Set Up in 5 Minutes</Text>
              <Text style={checkDesc}>Download the app, pair your devices, and start tracking.</Text>
            </Column>
          </Row>
        </Section>
      </Section>

      <Hr style={divider} />

      {/* ── Download the App ── */}
      <Text style={sectionLabel}>GET READY</Text>
      <Text style={sectionHeading}>Download the app now.</Text>

      <Section style={deviceCard}>
        <Img src={IMAGES.appDownload} width="480" alt="Download the SeeMyHealth app" style={deviceImage} />
        <Section style={deviceBody}>
          <Text style={{ ...paragraph, margin: "0 0 16px 0" }}>
            Get a head start &mdash; download the SeeMyHealth app so it&rsquo;s ready when your devices arrive. Available on iOS and Android.
          </Text>
          <PrimaryButton href={`${BASE_URL}/app`}>
            Download the App
          </PrimaryButton>
        </Section>
      </Section>

      <Hr style={divider} />

      {/* ── What's waiting in the app — 2-up grid ── */}
      <Text style={sectionLabel}>INSIDE THE APP</Text>
      <Text style={sectionHeading}>Here&rsquo;s what&rsquo;s waiting for you.</Text>

      <Section style={{ marginTop: "16px" }}>
        <Row>
          <Column style={featureCol}>
            <Img src={IMAGES.appGoals} width="220" alt="Health goals" style={featureImage} />
            <Text style={featureTitle}>Goals &amp; Insights</Text>
            <Text style={featureDesc}>Set targets, track progress, and get personalized recommendations.</Text>
          </Column>
          <Column style={featureColSpacer} />
          <Column style={featureCol}>
            <Img src={IMAGES.appFamily} width="220" alt="Family sharing" style={featureImage} />
            <Text style={featureTitle}>Family Health</Text>
            <Text style={featureDesc}>Share data with family and monitor loved ones.</Text>
          </Column>
        </Row>
      </Section>

      <Hr style={divider} />

      {/* ── Guarantee ── */}
      <Section style={guaranteeRow}>
        <Row>
          <Column style={guaranteeCol}>
            <Text style={guaranteeIcon}>&#10003;</Text>
            <Text style={guaranteeTitle}>30-Day Returns</Text>
            <Text style={guaranteeDesc}>Not for you? Full refund.</Text>
          </Column>
          <Column style={guaranteeCol}>
            <Text style={guaranteeIcon}>&#10003;</Text>
            <Text style={guaranteeTitle}>1-Year Warranty</Text>
            <Text style={guaranteeDesc}>Every device covered.</Text>
          </Column>
          <Column style={guaranteeCol}>
            <Text style={guaranteeIcon}>&#10003;</Text>
            <Text style={guaranteeTitle}>Free Shipping</Text>
            <Text style={guaranteeDesc}>Always, no minimum.</Text>
          </Column>
        </Row>
      </Section>

      {/* ── Support CTA ── */}
      <Section style={ctaCenter}>
        <SecondaryButton href={`${BASE_URL}/support`}>
          Visit Support
        </SecondaryButton>
      </Section>

      <Section style={{ height: "16px" }} />

      <Text style={footerNote}>
        You received this email because you placed an order at seemyhealth.ai. We&rsquo;ll send you a setup guide once your order is delivered.
      </Text>
    </EmailLayout>
  );
}

// ── Styles ──

const heroSection = { position: "relative" as const, borderRadius: "12px", overflow: "hidden" as const, marginBottom: "32px" };
const heroImg = { width: "100%", display: "block" as const, borderRadius: "12px" };
const heroOverlay = { position: "absolute" as const, bottom: "0", left: "0", right: "0", padding: "40px 24px 24px", background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)" };
const heroTagline = { fontSize: "11px", fontWeight: "600" as const, color: "#22c55e", letterSpacing: "3px", textTransform: "uppercase" as const, margin: "0 0 4px 0" };
const heroTitle = { fontSize: "32px", fontWeight: "700" as const, color: "#ffffff", margin: "0", letterSpacing: "-0.5px" };

const heading = { fontSize: "26px", fontWeight: "700" as const, color: "#f5f5f5", margin: "0 0 12px 0" };
const paragraph = { fontSize: "16px", lineHeight: "26px", color: "#a3a3a3", margin: "0 0 8px 0" };
const sectionLabel = { fontSize: "11px", fontWeight: "600" as const, color: "#5e5e5e", letterSpacing: "3px", textTransform: "uppercase" as const, margin: "0 0 8px 0" };
const sectionHeading = { fontSize: "22px", fontWeight: "700" as const, color: "#f5f5f5", margin: "0 0 8px 0", letterSpacing: "-0.3px" };
const divider = { borderColor: "#1a1a1a", margin: "36px 0" };
const ctaCenter = { textAlign: "center" as const, margin: "28px 0 0 0" };

const checklistCard = { backgroundColor: "#141414", borderRadius: "12px", padding: "24px", border: "1px solid #1a1a1a", marginTop: "16px" };
const checklistItem = { marginBottom: "16px" };
const checkNumCol = { width: "32px", verticalAlign: "top" as const };
const checkNum = { fontSize: "16px", fontWeight: "700" as const, color: "#22c55e", margin: "0", lineHeight: "1" };
const checkTitle = { fontSize: "15px", fontWeight: "600" as const, color: "#f5f5f5", margin: "0 0 2px 0" };
const checkDesc = { fontSize: "13px", color: "#6b6b6b", lineHeight: "20px", margin: "0" };

const deviceCard = { borderRadius: "12px", overflow: "hidden" as const, marginBottom: "16px", border: "1px solid #1a1a1a", backgroundColor: "#141414" };
const deviceImage = { width: "100%", display: "block" as const };
const deviceBody = { padding: "20px 24px 24px" };

const featureCol = { width: "48%", verticalAlign: "top" as const };
const featureColSpacer = { width: "4%" };
const featureImage = { width: "100%", display: "block" as const, borderRadius: "10px", marginBottom: "12px" };
const featureTitle = { fontSize: "14px", fontWeight: "600" as const, color: "#f5f5f5", margin: "0 0 4px 0" };
const featureDesc = { fontSize: "13px", lineHeight: "20px", color: "#6b6b6b", margin: "0" };

const guaranteeRow = { backgroundColor: "#141414", border: "1px solid #1a1a1a", borderRadius: "12px", padding: "24px 16px" };
const guaranteeCol = { width: "33.33%", textAlign: "center" as const, verticalAlign: "top" as const };
const guaranteeIcon = { margin: "0 0 4px 0", fontSize: "16px", color: "#22c55e", fontWeight: "700" as const, textAlign: "center" as const };
const guaranteeTitle = { margin: "0 0 2px 0", fontSize: "13px", fontWeight: "600" as const, color: "#f5f5f5", textAlign: "center" as const };
const guaranteeDesc = { margin: "0", fontSize: "11px", color: "#6b6b6b", textAlign: "center" as const };
const footerNote = { fontSize: "13px", color: "#525252", textAlign: "center" as const, margin: "16px 0 0 0", lineHeight: "20px" };
