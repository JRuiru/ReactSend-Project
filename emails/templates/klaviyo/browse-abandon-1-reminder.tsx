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
  hero: `${CDN}/fitness-sprint-motion/public`,
};

export default function BrowseAbandonReminder() {
  return (
    <EmailLayout preview="Still interested? The product you were looking at is still available.">

      {/* ── Hero Image ── */}
      <Section style={heroSection}>
        <Img
          src={IMAGES.hero}
          width="560"
          alt="Still looking at SeeMyHealth"
          style={heroImage}
        />
        <Section style={heroOverlay} className="force-white">
          <Text style={heroTagline}>STILL LOOKING?</Text>
          <Text style={heroTitle}>Take another look.</Text>
        </Section>
      </Section>

      {/* ── Greeting ── */}
      <Section style={greetingSection}>
        <Text style={heading}>
          {"{{ person|lookup:'first_name'|default:'Hey' }}"}, you were checking this out.
        </Text>
        <Text style={paragraph}>
          We noticed you were browsing one of our devices. It is still available
          and waiting for you.
        </Text>
      </Section>

      {/* ── Dynamic Product Card ── */}
      <Section style={productCard}>
        <Img
          src={"{{ event.extra.ImageURL }}"}
          width="480"
          alt={"{{ event.extra.ProductName }}"}
          style={productImage}
        />
        <Section style={productBody}>
          <Text style={productCategory}>{"{{ event.extra.Categories }}"}</Text>
          <Text style={productName}>{"{{ event.extra.ProductName }}"}</Text>
          <Text style={productPrice}>{"${{ event.extra.Price|floatformat:2 }}"}</Text>
          <Section style={{ marginTop: "16px" }}>
            <PrimaryButton href="{{ event.extra.URL }}">
              View Product
            </PrimaryButton>
          </Section>
        </Section>
      </Section>

      <Hr style={divider} />

      {/* ── Benefits Checklist ── */}
      <Text style={sectionLabel}>WHY SEEMYHEALTH</Text>
      <Text style={sectionHeading}>Everything you need to feel confident.</Text>

      <Section style={checklistCard}>
        <Section style={checklistItem}>
          <Row>
            <Column style={checkNumCol}>
              <Text style={checkNum}>1</Text>
            </Column>
            <Column>
              <Text style={checkTitle}>Free Shipping</Text>
              <Text style={checkDesc}>
                On every order, no minimum. We cover delivery worldwide.
              </Text>
            </Column>
          </Row>
        </Section>

        <Section style={checklistItem}>
          <Row>
            <Column style={checkNumCol}>
              <Text style={checkNum}>2</Text>
            </Column>
            <Column>
              <Text style={checkTitle}>30-Day Returns</Text>
              <Text style={checkDesc}>
                Try it risk-free. If it is not for you, send it back for free.
              </Text>
            </Column>
          </Row>
        </Section>

        <Section style={checklistItem}>
          <Row>
            <Column style={checkNumCol}>
              <Text style={checkNum}>3</Text>
            </Column>
            <Column>
              <Text style={checkTitle}>1-Year Warranty</Text>
              <Text style={checkDesc}>
                Every device is covered. Hardware issues? We replace it.
              </Text>
            </Column>
          </Row>
        </Section>

        <Section style={checklistItem}>
          <Row>
            <Column style={checkNumCol}>
              <Text style={checkNum}>4</Text>
            </Column>
            <Column>
              <Text style={checkTitle}>5-Minute Setup</Text>
              <Text style={checkDesc}>
                Unbox, pair, and start tracking. No complicated setup.
              </Text>
            </Column>
          </Row>
        </Section>
      </Section>

      <Hr style={divider} />

      {/* ── Social Proof ── */}
      <Section style={socialProofSection}>
        <Text style={socialProofNumber}>10,000+</Text>
        <Text style={socialProofText}>
          people tracking their health with SeeMyHealth
        </Text>
      </Section>

      <Hr style={divider} />

      {/* ── Double CTA ── */}
      <Section style={ctaCenter}>
        <PrimaryButton href="{{ event.extra.URL }}">
          Take Another Look
        </PrimaryButton>
      </Section>
      <Section style={{ textAlign: "center" as const, marginTop: "12px" }}>
        <SecondaryButton href={`${BASE_URL}/shop`}>
          Browse All Products
        </SecondaryButton>
      </Section>

      {/* ── Footer Note ── */}
      <Text style={footerNote}>
        You received this email because you recently browsed seemyhealth.ai.
        If this does not interest you, no worries — we will not send another.
      </Text>

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

const heroTagline = {
  fontSize: "11px",
  fontWeight: "600" as const,
  color: "#b3b3b3",
  letterSpacing: "3px",
  textTransform: "uppercase" as const,
  margin: "0 0 4px 0",
};

const heroTitle = {
  fontSize: "32px",
  fontWeight: "700" as const,
  color: "#ffffff",
  margin: "0",
  letterSpacing: "-0.5px",
};

const greetingSection = {
  marginBottom: "8px",
};

const heading = {
  fontSize: "26px",
  fontWeight: "700" as const,
  color: "#f5f5f5",
  margin: "0 0 12px 0",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  color: "#a3a3a3",
  margin: "0 0 8px 0",
};

const sectionLabel = {
  fontSize: "11px",
  fontWeight: "600" as const,
  color: "#5e5e5e",
  letterSpacing: "3px",
  textTransform: "uppercase" as const,
  margin: "0 0 8px 0",
};

const sectionHeading = {
  fontSize: "22px",
  fontWeight: "700" as const,
  color: "#f5f5f5",
  margin: "0 0 24px 0",
  letterSpacing: "-0.3px",
};

const divider = {
  borderColor: "#1a1a1a",
  margin: "36px 0",
};

const ctaCenter = {
  textAlign: "center" as const,
  margin: "0",
};

// ── Product Card ──

const productCard = {
  borderRadius: "12px",
  overflow: "hidden" as const,
  marginBottom: "16px",
  border: "1px solid #1a1a1a",
  backgroundColor: "#141414",
};

const productImage = {
  width: "100%",
  display: "block" as const,
};

const productBody = {
  padding: "20px 24px 24px",
};

const productCategory = {
  fontSize: "10px",
  fontWeight: "700" as const,
  color: "#F97316",
  letterSpacing: "2px",
  margin: "0 0 8px 0",
  textTransform: "uppercase" as const,
};

const productName = {
  fontSize: "20px",
  fontWeight: "700" as const,
  color: "#f5f5f5",
  margin: "0 0 8px 0",
};

const productPrice = {
  fontSize: "18px",
  fontWeight: "700" as const,
  color: "#22c55e",
  margin: "0",
};

// ── Checklist ──

const checklistCard = {
  backgroundColor: "#141414",
  borderRadius: "12px",
  padding: "24px",
  border: "1px solid #1a1a1a",
};

const checklistItem = {
  marginBottom: "16px",
};

const checkNumCol = {
  width: "32px",
  verticalAlign: "top" as const,
};

const checkNum = {
  fontSize: "16px",
  fontWeight: "700" as const,
  color: "#252525",
  margin: "0",
  lineHeight: "1",
};

const checkTitle = {
  fontSize: "15px",
  fontWeight: "600" as const,
  color: "#f5f5f5",
  margin: "0 0 2px 0",
};

const checkDesc = {
  fontSize: "13px",
  color: "#6b6b6b",
  lineHeight: "20px",
  margin: "0",
};

// ── Social Proof ──

const socialProofSection = {
  textAlign: "center" as const,
  padding: "8px 0",
};

const socialProofNumber = {
  fontSize: "32px",
  fontWeight: "700" as const,
  color: "#f5f5f5",
  margin: "0",
  letterSpacing: "-0.5px",
};

const socialProofText = {
  fontSize: "14px",
  color: "#6b6b6b",
  margin: "4px 0 0 0",
};

// ── Footer ──

const footerNote = {
  fontSize: "13px",
  color: "#525252",
  textAlign: "center" as const,
  margin: "32px 0 0 0",
  lineHeight: "20px",
};
