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


const CDN = "https://imagedelivery.net/NnC2JvU8j4bgBbmedVhjJg";
const BASE_URL = "https://seemyhealth.ai";

export default function ReviewRequestReminder() {
  return (
    <EmailLayout preview="Quick reminder — your review really helps other customers.">

      {/* ── Hero ── */}
      <Section style={heroSection}>
        <Img src={`${CDN}/ring-gold-woman-showing/public`} width="560" alt="SeeMyHealth customer" style={heroImage} />
        <Section style={heroOverlay} className="force-white">
          <Text style={heroTagline}>REVIEW REMINDER</Text>
          <Text style={heroTitle}>One minute matters.</Text>
        </Section>
      </Section>

      {/* ── Badge ── */}
      <Section style={{ textAlign: "center" as const, marginBottom: "24px", marginTop: "8px" }}>
        <Button href={`${BASE_URL}/reviews`} style={badge}>
          Quick Reminder
        </Button>
      </Section>

      {/* ── Heading ── */}
      <Text style={heading}>One minute makes a big difference.</Text>
      <Text style={paragraph}>
        We sent you a review request a few days ago. If you have not had a
        chance yet, we would really appreciate your honest feedback.
      </Text>

      <Hr style={divider} />

      {/* ── Why Reviews Matter Card ── */}
      <Text style={sectionLabel}>WHY REVIEWS MATTER</Text>
      <Text style={sectionHeading}>Your words help others decide.</Text>

      <Section style={statsCard}>
        <Section style={{ padding: "24px" }}>
          <Row style={{ marginBottom: "20px" }}>
            <Column style={metricNumCol}>
              <Text style={metricNumber}>93%</Text>
            </Column>
            <Column style={metricDescCol}>
              <Text style={metricDesc}>
                of customers read reviews before buying a health device
              </Text>
            </Column>
          </Row>
          <Hr style={cardDivider} />
          <Row style={{ marginTop: "20px" }}>
            <Column style={metricNumCol}>
              <Text style={metricNumber}>4.8</Text>
            </Column>
            <Column style={metricDescCol}>
              <Text style={metricDesc}>
                is our current average rating — your review keeps it honest
              </Text>
            </Column>
          </Row>
        </Section>
      </Section>

      <Hr style={divider} />

      {/* ── One-Click Star Rating ── */}
      <Section style={reviewCard}>
        <Text style={reviewTitle}>Tap your rating</Text>
        <Text style={reviewDesc}>
          One tap takes you straight to the review form with your rating
          pre-filled. Good or bad, we want to hear it.
        </Text>
        <Section style={{ textAlign: "center" as const }}>
          <Row style={{ display: "inline-block" as const }}>
            {[1, 2, 3, 4, 5].map((star) => (
              <Column key={star} style={{ padding: "0 4px" }}>
                <Button
                  href={`${BASE_URL}/reviews?rating=${star}&product={{ event.ProductHandle|default:'' }}`}
                  style={starButton}
                >
                  {"★".repeat(star)}{"☆".repeat(5 - star)}
                </Button>
              </Column>
            ))}
          </Row>
        </Section>
        <Text style={starHint}>
          ← 1 star &nbsp;&nbsp;&nbsp; 5 stars →
        </Text>
      </Section>

      {/* ── Footer Note ── */}
      <Text style={footerNote}>
        This is our last review reminder — we will not ask again.
      </Text>

    </EmailLayout>
  );
}

// ── Styles ──

const badge = {
  backgroundColor: "#0c1a2e",
  color: "#3B82F6",
  padding: "8px 20px",
  borderRadius: "50px",
  fontSize: "13px",
  fontWeight: "600" as const,
  textDecoration: "none",
  display: "inline-block",
  letterSpacing: "0.5px",
  border: "1px solid #1a3a5c",
};

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
  fontSize: "28px",
  fontWeight: "700" as const,
  color: "#ffffff",
  margin: "0",
  letterSpacing: "-0.3px",
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

// ── Stats Card ──

const statsCard = {
  backgroundColor: "#141414",
  borderRadius: "12px",
  border: "1px solid #1a1a1a",
  overflow: "hidden" as const,
};

const metricNumCol = {
  width: "64px",
  verticalAlign: "top" as const,
};

const metricDescCol = {
  verticalAlign: "top" as const,
  paddingLeft: "16px",
};

const metricNumber = {
  fontSize: "22px",
  fontWeight: "700" as const,
  color: "#F97316",
  margin: "0",
};

const metricDesc = {
  fontSize: "14px",
  lineHeight: "22px",
  color: "#a3a3a3",
  margin: "0",
};

const cardDivider = {
  borderColor: "#1a1a1a",
  margin: "0",
};

// ── Review Card ──

const reviewCard = {
  backgroundColor: "#141414",
  border: "1px solid #F97316",
  borderRadius: "12px",
  padding: "24px",
  textAlign: "center" as const,
};

const reviewTitle = {
  fontSize: "20px",
  fontWeight: "700" as const,
  color: "#f5f5f5",
  margin: "0 0 8px 0",
};

const reviewDesc = {
  fontSize: "14px",
  lineHeight: "22px",
  color: "#a3a3a3",
  margin: "0 0 16px 0",
};

// ── Star Buttons ──

const starButton = {
  backgroundColor: "#1a1a1a",
  color: "#F97316",
  padding: "10px 12px",
  borderRadius: "8px",
  fontSize: "16px",
  textDecoration: "none",
  display: "inline-block",
  border: "1px solid #2a2a2a",
  letterSpacing: "2px",
  lineHeight: "1",
};

const starHint = {
  fontSize: "11px",
  color: "#525252",
  textAlign: "center" as const,
  margin: "8px 0 0 0",
};

// ── Footer ──

const footerNote = {
  fontSize: "13px",
  color: "#525252",
  textAlign: "center" as const,
  margin: "32px 0 0 0",
  lineHeight: "20px",
};
