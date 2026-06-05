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
  hero: `${CDN}/ring-man-smiling-lifestyle/public`,
  ringOwner: `${CDN}/ring-gold-woman-casual/public`,
  scaleOwner: `${CDN}/og-scale-pro/public`,
};

const DEVICE_COLORS = {
  ring: "#F97316",
  scale: "#3B82F6",
  hydra: "#06B6D4",
};

export default function PostPurchaseReviewRequest() {
  return (
    <EmailLayout preview="How are you liking your SeeMyHealth devices? We'd love your feedback." title="Leave a Review">

      {/* ── Hero ── */}
      <Section style={heroSection}>
        <Img src={IMAGES.hero} width="560" alt="Happy SeeMyHealth customer" style={heroImg} />
        <Section style={heroOverlay} className="force-white">
          <Text style={heroTagline}>YOUR FEEDBACK</Text>
          <Text style={heroTitle}>How&rsquo;s it going?</Text>
        </Section>
      </Section>

      {/* ── Greeting ── */}
      <Text style={heading}>
        {"{{ person|lookup:'first_name'|default:'Hey' }}"}, you&rsquo;ve had your devices for a couple of weeks.
      </Text>
      <Text style={paragraph}>
        We&rsquo;d love to hear how things are going &mdash; your review helps other people make the right decision.
      </Text>

      {/* ── Review CTA Card ── */}
      <Section style={reviewCard}>
        <Text style={reviewStars}>&#9733; &#9733; &#9733; &#9733; &#9733;</Text>
        <Text style={reviewTitle}>Leave a Review</Text>
        <Text style={reviewDesc}>
          It only takes 30 seconds. Tell us what you love, what could be better, and how your health journey is going.
        </Text>
        <PrimaryButton href={`${BASE_URL}/shop`}>
          Write a Review
        </PrimaryButton>
      </Section>

      <Hr style={divider} />

      {/* ── What others are saying — with images ── */}
      <Text style={sectionLabel}>WHAT OTHERS ARE SAYING</Text>

      <Section style={deviceCard}>
        <Img src={IMAGES.ringOwner} width="480" alt="Ring One owner" style={deviceImage} />
        <Section style={deviceBody}>
          <Text style={stars}>&#9733;&#9733;&#9733;&#9733;&#9733;</Text>
          <Text style={testimonialQuote}>
            &ldquo;The Ring One changed how I think about sleep. I used to think I was getting 8 hours but the data showed I was only getting 6 hours of actual rest.&rdquo;
          </Text>
          <Text style={testimonialAuthor}>Priya S. &mdash; Ring One Owner</Text>
        </Section>
      </Section>

      <Section style={deviceCard}>
        <Img src={IMAGES.scaleOwner} width="480" alt="Scale owner" style={deviceImage} />
        <Section style={deviceBody}>
          <Text style={stars}>&#9733;&#9733;&#9733;&#9733;&#9733;</Text>
          <Text style={testimonialQuote}>
            &ldquo;I bought the Scale Pro to track my muscle gains and the body composition breakdown is incredible. Seeing my lean mass go up week over week keeps me pushing harder in the gym.&rdquo;
          </Text>
          <Text style={testimonialAuthor}>John R. &mdash; Scale Pro Owner</Text>
        </Section>
      </Section>

      <Hr style={divider} />

      {/* ── Social proof ── */}
      <Section style={socialSection}>
        <Text style={socialNumber}>4.8 / 5</Text>
        <Text style={socialText}>average rating from 10,000+ customers</Text>
      </Section>

      <Hr style={divider} />

      {/* ── Complete ecosystem ── */}
      <Text style={sectionLabel}>COMPLETE YOUR ECOSYSTEM</Text>
      <Text style={sectionHeading}>The more devices, the deeper the insights.</Text>
      <Text style={sectionSubtext}>
        Each device adds a new dimension to your health dashboard. See how everything connects.
      </Text>

      <Section style={ctaCenter}>
        <SecondaryButton href={`${BASE_URL}/shop`}>
          Explore More Devices
        </SecondaryButton>
      </Section>

      {/* ── Help card ── */}
      <Hr style={divider} />

      <Section style={helpCard}>
        <Text style={helpTitle}>Having an issue?</Text>
        <Text style={helpDesc}>
          If something isn&rsquo;t working right, let us fix it first. Our support team is here to help.
        </Text>
        <Section style={{ textAlign: "center" as const, marginTop: "12px" }}>
          <Button href={`${BASE_URL}/support`} style={helpButton}>
            Contact Support
          </Button>
        </Section>
      </Section>

      <Section style={{ height: "16px" }} />

      <Text style={footerNote}>
        You received this email because you purchased from seemyhealth.ai. Your opinion matters to us.
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
const sectionSubtext = { fontSize: "15px", color: "#8a8a8a", lineHeight: "24px", margin: "0 0 24px 0" };
const divider = { borderColor: "#1a1a1a", margin: "36px 0" };
const ctaCenter = { textAlign: "center" as const, margin: "28px 0 0 0" };

const reviewCard = { backgroundColor: "#141414", border: "1px solid #F97316", borderRadius: "12px", padding: "32px 24px", textAlign: "center" as const, marginTop: "24px" };
const reviewStars = { margin: "0 0 8px 0", fontSize: "32px", color: "#F97316", letterSpacing: "4px" };
const reviewTitle = { margin: "0 0 8px 0", fontSize: "22px", fontWeight: "700" as const, color: "#f5f5f5" };
const reviewDesc = { margin: "0 0 20px 0", fontSize: "15px", lineHeight: "24px", color: "#a3a3a3" };

const deviceCard = { borderRadius: "12px", overflow: "hidden" as const, marginBottom: "16px", border: "1px solid #1a1a1a", backgroundColor: "#141414" };
const deviceImage = { width: "100%", display: "block" as const };
const deviceBody = { padding: "20px 24px 24px" };
const stars = { margin: "0 0 8px 0", fontSize: "16px", color: "#F97316", letterSpacing: "2px" };
const testimonialQuote = { margin: "0 0 8px 0", fontSize: "15px", lineHeight: "24px", color: "#a3a3a3", fontStyle: "italic" as const };
const testimonialAuthor = { margin: "0", fontSize: "13px", color: "#525252", fontWeight: "600" as const };

const socialSection = { textAlign: "center" as const, padding: "8px 0" };
const socialNumber = { fontSize: "32px", fontWeight: "700" as const, color: "#F97316", margin: "0", letterSpacing: "-0.5px" };
const socialText = { fontSize: "14px", color: "#6b6b6b", margin: "4px 0 0 0" };

const helpCard = { backgroundColor: "#141414", border: "1px solid #1a3a5c", borderRadius: "12px", padding: "24px", textAlign: "center" as const };
const helpTitle = { margin: "0 0 8px 0", fontSize: "18px", fontWeight: "700" as const, color: "#f5f5f5" };
const helpDesc = { margin: "0", fontSize: "14px", lineHeight: "22px", color: "#8a8a8a" };
const helpButton = { backgroundColor: "#222222", color: "#f5f5f5", padding: "10px 24px", borderRadius: "50px", fontSize: "12px", fontWeight: "600" as const, textDecoration: "none", display: "inline-block", letterSpacing: "0.5px", textTransform: "uppercase" as const, border: "1px solid #333333" };
const footerNote = { fontSize: "13px", color: "#525252", textAlign: "center" as const, margin: "16px 0 0 0", lineHeight: "20px" };
