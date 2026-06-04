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
import { EmailLayout } from "../components/EmailLayout";
import { PrimaryButton } from "../components/PrimaryButton";

const CDN = "https://imagedelivery.net/NnC2JvU8j4bgBbmedVhjJg";
const BASE_URL = "https://seemyhealth.ai";

const IMAGES = {
  hero: `${CDN}/lifestyle-sun-portrait/public`,
  ring: `${CDN}/ring-gold-hands-portrait/public`,
  scale: `${CDN}/scale-pro-using/public`,
  bp: `${CDN}/bp-black-poster/public`,
  hydra: `${CDN}/bottle-black-config/public`,
  hema: `${CDN}/hema-black-poster/public`,
};

const DEVICE_COLORS = {
  ring: "#F97316",
  scale: "#3B82F6",
  bp: "#EF4444",
  hydra: "#06B6D4",
  hema: "#A855F7",
};

export default function EnquiryCustomerAcknowledgmentEmail() {
  return (
    <EmailLayout preview="Thanks {{first_name}}, we got your enquiry about the {{model}}">

      {/* ── Hero ── */}
      <Section style={heroSection}>
        <Img
          src={IMAGES.hero}
          width="560"
          alt="SeeMyHealth"
          style={heroImage}
        />
        <Section style={heroOverlay} className="force-white">
          <Text style={heroLabel}>ENQUIRY RECEIVED</Text>
          <Text style={heroTitle}>We are on it.</Text>
        </Section>
      </Section>

      {/* ── Greeting ── */}
      <Text style={heading}>
        Hi {"{{first_name}}"}, thanks for reaching out.
      </Text>
      <Text style={paragraph}>
        We received your enquiry about the <strong style={{ color: "#f5f5f5" }}>{"{{model}}"}</strong>.
        A real person on our team is already reviewing your message and will
        get back to you within 24 hours.
      </Text>

      <Hr style={divider} />

      {/* ── Enquiry summary ── */}
      <Text style={sectionLabel}>YOUR ENQUIRY</Text>

      <Section style={summaryCard}>
        <Section style={detailRow}>
          <Row>
            <Column style={labelCol}>
              <Text style={detailLabel}>COMPANY</Text>
            </Column>
            <Column>
              <Text style={detailValue}>{"{{company}}"}</Text>
            </Column>
          </Row>
        </Section>

        <Section style={detailRow}>
          <Row>
            <Column style={labelCol}>
              <Text style={detailLabel}>PRODUCT</Text>
            </Column>
            <Column>
              <Text style={detailValue}>{"{{model}}"}</Text>
            </Column>
          </Row>
        </Section>

        <Hr style={cardDivider} />

        <Text style={messageLabel}>YOUR MESSAGE</Text>
        <Section style={messageBox}>
          <Text style={messageText}>{"{{message}}"}</Text>
        </Section>
      </Section>

      <Hr style={divider} />

      {/* ── What happens next ── */}
      <Text style={sectionLabel}>WHAT HAPPENS NEXT</Text>

      <Section style={stepRow}>
        <Row>
          <Column style={stepNumCol}>
            <Text style={stepNum}>1</Text>
          </Column>
          <Column>
            <Text style={stepTitle}>We review your enquiry</Text>
            <Text style={stepDesc}>
              Our team is looking at the details you shared so we can give
              you the most helpful response.
            </Text>
          </Column>
        </Row>
      </Section>

      <Section style={stepRow}>
        <Row>
          <Column style={stepNumCol}>
            <Text style={stepNum}>2</Text>
          </Column>
          <Column>
            <Text style={stepTitle}>We reply within 24 hours</Text>
            <Text style={stepDesc}>
              You will hear from us at the email address you used to reach
              out. Keep an eye on your inbox.
            </Text>
          </Column>
        </Row>
      </Section>

      <Section style={stepRow}>
        <Row>
          <Column style={stepNumCol}>
            <Text style={stepNum}>3</Text>
          </Column>
          <Column>
            <Text style={stepTitle}>Need something sooner?</Text>
            <Text style={stepDesc}>
              Reach us directly at{" "}
              <a href="mailto:sales@seemyhealth.ai" style={linkStyle}>
                sales@seemyhealth.ai
              </a>
            </Text>
          </Column>
        </Row>
      </Section>

      <Hr style={divider} />

      {/* ── Ecosystem strip ── */}
      <Text style={sectionLabel}>THE ECOSYSTEM</Text>
      <Text style={ecosystemIntro}>
        Five devices, one complete picture of your health. Explore the full
        range while you wait.
      </Text>

      <Section style={ecosystemGrid}>
        <Row>
          <Column style={ecoCell}>
            <Img src={IMAGES.ring} width="96" alt="Ring One" style={ecoImage} />
            <Text style={ecoName}>Ring One</Text>
            <Text style={ecoCategory(DEVICE_COLORS.ring)}>WEARABLE</Text>
          </Column>
          <Column style={ecoCell}>
            <Img src={IMAGES.scale} width="96" alt="The Scale" style={ecoImage} />
            <Text style={ecoName}>The Scale</Text>
            <Text style={ecoCategory(DEVICE_COLORS.scale)}>BODY</Text>
          </Column>
          <Column style={ecoCell}>
            <Img src={IMAGES.bp} width="96" alt="BP Monitor" style={ecoImage} />
            <Text style={ecoName}>BP Monitor</Text>
            <Text style={ecoCategory(DEVICE_COLORS.bp)}>VITALS</Text>
          </Column>
          <Column style={ecoCell}>
            <Img src={IMAGES.hydra} width="96" alt="Hydra One" style={ecoImage} />
            <Text style={ecoName}>Hydra One</Text>
            <Text style={ecoCategory(DEVICE_COLORS.hydra)}>HYDRATION</Text>
          </Column>
          <Column style={ecoCell}>
            <Img src={IMAGES.hema} width="96" alt="Hema One" style={ecoImage} />
            <Text style={ecoName}>Hema One</Text>
            <Text style={ecoCategory(DEVICE_COLORS.hema)}>BLOOD</Text>
          </Column>
        </Row>
      </Section>

      <Section style={ctaCenter}>
        <PrimaryButton href={`${BASE_URL}/shop`}>
          Browse All Products
        </PrimaryButton>
      </Section>

      <Hr style={divider} />

      {/* ── Testimonial ── */}
      <Section style={testimonialSection}>
        <Text style={testimonialQuote}>"</Text>
        <Text style={testimonialText}>
          SeeMyHealth changed how our team thinks about employee wellness.
          The data is actionable, and the devices are genuinely impressive.
        </Text>
        <Text style={testimonialAuthor}>David M., Corporate Wellness Lead</Text>
      </Section>

      <Hr style={divider} />

      {/* ── FAQ ── */}
      <Text style={sectionLabel}>COMMON QUESTIONS</Text>

      <Section style={faqCard}>
        <Section style={faqItem}>
          <Text style={faqQuestion}>How long does shipping take?</Text>
          <Text style={faqAnswer}>
            Standard delivery is 5 to 7 business days. Express options are
            available at checkout.
          </Text>
        </Section>

        <Hr style={cardDivider} />

        <Section style={faqItem}>
          <Text style={faqQuestion}>Do the devices work together?</Text>
          <Text style={faqAnswer}>
            Yes. All five devices sync to the SeeMyHealth app, giving you a
            unified health dashboard.
          </Text>
        </Section>

        <Hr style={cardDivider} />

        <Section style={faqItem}>
          <Text style={faqQuestion}>Is there a warranty?</Text>
          <Text style={faqAnswer}>
            Every device comes with a 1-year warranty covering manufacturing
            defects and hardware issues.
          </Text>
        </Section>
      </Section>

      <Hr style={divider} />

      <Text style={closingText}>
        Thanks again, {"{{first_name}}"}. We are looking forward to helping
        you find the right fit.
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

const heroLabel = {
  fontSize: "11px",
  fontWeight: "600" as const,
  color: "rgba(255, 255, 255, 0.7)",
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
  fontSize: "22px",
  fontWeight: "700" as const,
  color: "#f5f5f5",
  margin: "0 0 10px 0",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  color: "rgba(255, 255, 255, 0.6)",
  margin: "0",
};

const divider = {
  borderColor: "rgba(255, 255, 255, 0.06)",
  margin: "28px 0",
};

const sectionLabel = {
  fontSize: "11px",
  fontWeight: "600" as const,
  color: "rgba(255, 255, 255, 0.35)",
  letterSpacing: "3px",
  textTransform: "uppercase" as const,
  margin: "0 0 16px 0",
};

// ── Enquiry summary ──

const summaryCard = {
  backgroundColor: "#141414",
  borderRadius: "12px",
  padding: "24px",
  border: "1px solid rgba(255, 255, 255, 0.06)",
};

const detailRow = {
  marginBottom: "12px",
};

const labelCol = {
  width: "90px",
  verticalAlign: "top" as const,
};

const detailLabel = {
  fontSize: "10px",
  fontWeight: "600" as const,
  color: "rgba(255, 255, 255, 0.3)",
  letterSpacing: "1.5px",
  margin: "0",
  lineHeight: "22px",
};

const detailValue = {
  fontSize: "15px",
  color: "#f5f5f5",
  margin: "0",
  fontWeight: "500" as const,
};

const cardDivider = {
  borderColor: "rgba(255, 255, 255, 0.06)",
  margin: "16px 0",
};

const messageLabel = {
  fontSize: "10px",
  fontWeight: "600" as const,
  color: "rgba(255, 255, 255, 0.3)",
  letterSpacing: "1.5px",
  margin: "0 0 8px 0",
};

const messageBox = {
  backgroundColor: "rgba(255, 255, 255, 0.04)",
  borderRadius: "8px",
  padding: "14px 16px",
  borderLeft: "3px solid rgba(255, 255, 255, 0.15)",
};

const messageText = {
  fontSize: "14px",
  lineHeight: "22px",
  color: "rgba(255, 255, 255, 0.5)",
  margin: "0",
  whiteSpace: "pre-wrap" as const,
};

// ── Steps ──

const stepRow = {
  marginBottom: "16px",
};

const stepNumCol = {
  width: "36px",
  verticalAlign: "top" as const,
};

const stepNum = {
  fontSize: "20px",
  fontWeight: "700" as const,
  color: "rgba(255, 255, 255, 0.12)",
  margin: "0",
  lineHeight: "1",
};

const stepTitle = {
  fontSize: "15px",
  fontWeight: "600" as const,
  color: "#f5f5f5",
  margin: "0 0 4px 0",
};

const stepDesc = {
  fontSize: "14px",
  color: "rgba(255, 255, 255, 0.45)",
  margin: "0",
  lineHeight: "21px",
};

const linkStyle = {
  color: "rgba(255, 255, 255, 0.6)",
  textDecoration: "underline",
};

// ── Ecosystem strip ──

const ecosystemIntro = {
  fontSize: "15px",
  color: "rgba(255, 255, 255, 0.5)",
  lineHeight: "24px",
  margin: "0 0 20px 0",
};

const ecosystemGrid = {
  textAlign: "center" as const,
};

const ecoCell = {
  width: "20%",
  textAlign: "center" as const,
  verticalAlign: "top" as const,
  padding: "0 2px",
};

const ecoImage = {
  width: "100%",
  display: "block" as const,
  borderRadius: "8px",
  marginBottom: "8px",
};

const ecoName = {
  fontSize: "11px",
  fontWeight: "600" as const,
  color: "#f5f5f5",
  margin: "0 0 2px 0",
};

const ecoCategory = (color: string) => ({
  fontSize: "8px",
  fontWeight: "700" as const,
  color: color,
  letterSpacing: "1px",
  margin: "0",
});

const ctaCenter = {
  textAlign: "center" as const,
  margin: "24px 0 0 0",
};

// ── Testimonial ──

const testimonialSection = {
  textAlign: "center" as const,
  padding: "8px 0",
};

const testimonialQuote = {
  fontSize: "48px",
  color: "rgba(255, 255, 255, 0.15)",
  margin: "0",
  lineHeight: "1",
  fontFamily: "Georgia, serif",
};

const testimonialText = {
  fontSize: "15px",
  fontStyle: "italic" as const,
  color: "rgba(255, 255, 255, 0.6)",
  lineHeight: "24px",
  margin: "0 0 12px 0",
};

const testimonialAuthor = {
  fontSize: "13px",
  color: "rgba(255, 255, 255, 0.3)",
  margin: "0",
  fontWeight: "600" as const,
};

// ── FAQ ──

const faqCard = {
  backgroundColor: "#141414",
  borderRadius: "12px",
  padding: "24px",
  border: "1px solid rgba(255, 255, 255, 0.06)",
};

const faqItem = {
  marginBottom: "0",
};

const faqQuestion = {
  fontSize: "15px",
  fontWeight: "600" as const,
  color: "#f5f5f5",
  margin: "0 0 4px 0",
};

const faqAnswer = {
  fontSize: "14px",
  color: "rgba(255, 255, 255, 0.45)",
  lineHeight: "22px",
  margin: "0",
};

// ── Closing ──

const closingText = {
  fontSize: "15px",
  color: "rgba(255, 255, 255, 0.5)",
  textAlign: "center" as const,
  margin: "0",
};
