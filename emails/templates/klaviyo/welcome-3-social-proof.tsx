import {
  Text,
  Section,
  Img,
  Row,
  Column,
  Hr,
} from "@react-email/components";
import * as React from "react";
import { EmailLayout } from "../../components/EmailLayout";
import { PrimaryButton } from "../../components/PrimaryButton";

const CDN = "https://imagedelivery.net/NnC2JvU8j4bgBbmedVhjJg";
const BASE_URL = "https://seemyhealth.ai";

const IMAGES = {
  hero: `${CDN}/fitness-ring-portrait/public`,
  ring: `${CDN}/ring-gold-woman-writing/public`,
  scale: `${CDN}/scale-stepon-body-comp/public`,
  hydra: `${CDN}/bottle-black-bedside/public`,
  bp: `${CDN}/bp-doctor-sharing/public`,
};

export default function WelcomeSocialProof() {
  return (
    <EmailLayout preview="See what SeeMyHealth owners are saying about their health journey.">

      {/* ── Hero Image ── */}
      <Section style={heroSection}>
        <Img
          src={IMAGES.hero}
          width="560"
          alt="SeeMyHealth customer wearing Ring One"
          style={heroImage}
        />
        <Section style={heroOverlay} className="force-white">
          <Text style={heroTagline}>REAL RESULTS</Text>
          <Text style={heroTitle}>Don't take our word for it.</Text>
        </Section>
      </Section>

      {/* ── Greeting ── */}
      <Section style={greetingSection}>
        <Text style={heading}>
          {"{{ person|lookup:'first_name'|default:'Hey' }}"}, see what others are experiencing.
        </Text>
        <Text style={paragraph}>
          Real customers. Real results. Here is what SeeMyHealth owners have to
          say about their devices.
        </Text>
      </Section>

      <Hr style={divider} />

      {/* ── Testimonial 1 — Ring ── */}
      <Section style={testimonialCard}>
        <Img src={IMAGES.ring} width="480" alt="Ring One owner" style={testimonialImage} />
        <Section style={testimonialBody}>
          <Text style={stars}>&#9733; &#9733; &#9733; &#9733; &#9733;</Text>
          <Text style={testimonialText}>
            "After two weeks with the Ring One, my sleep score went from 62 to
            84. I wake up feeling rested for the first time in years. The app
            pinpointed that my late caffeine was the problem."
          </Text>
          <Text style={testimonialAuthor}>Nalini T., Ring One Owner</Text>
        </Section>
      </Section>

      {/* ── Testimonial 2 — Scale ── */}
      <Section style={testimonialCard}>
        <Img src={IMAGES.scale} width="480" alt="Scale body composition tracking" style={testimonialImage} />
        <Section style={testimonialBody}>
          <Text style={stars}>&#9733; &#9733; &#9733; &#9733; &#9733;</Text>
          <Text style={testimonialText}>
            "Lost 4kg of fat and gained 2kg of muscle in 3 months. The Scale
            tracks everything and the trends in the app kept me accountable.
            Worth every penny."
          </Text>
          <Text style={testimonialAuthor}>Rachel W., Scale Owner</Text>
        </Section>
      </Section>

      {/* ── Testimonial 3 — Hydra One ── */}
      <Section style={testimonialCard}>
        <Img src={IMAGES.hydra} width="480" alt="Hydra One at a cafe" style={testimonialImage} />
        <Section style={testimonialBody}>
          <Text style={stars}>&#9733; &#9733; &#9733; &#9733; &#9733;</Text>
          <Text style={testimonialText}>
            "I was only drinking 1.2L a day and did not even know it. The Hydra
            One got me to 2.5L consistently. My energy levels and skin have
            completely changed."
          </Text>
          <Text style={testimonialAuthor}>Thandiwe N., Hydra One Owner</Text>
        </Section>
      </Section>

      {/* ── Testimonial 4 — BP Monitor ── */}
      <Section style={testimonialCard}>
        <Img src={IMAGES.bp} width="480" alt="Sharing BP data with doctor" style={testimonialImage} />
        <Section style={testimonialBody}>
          <Text style={stars}>&#9733; &#9733; &#9733; &#9733; &#9733;</Text>
          <Text style={testimonialText}>
            "My doctor was impressed when I showed her 3 months of daily BP
            readings from the app. She could actually see the trend, not just a
            single snapshot."
          </Text>
          <Text style={testimonialAuthor}>Lisa M., BP Monitor Owner</Text>
        </Section>
      </Section>

      <Hr style={divider} />

      {/* ── Guarantee Row ── */}
      <Section style={guaranteeSection}>
        <Row>
          <Column style={guaranteeCol}>
            <Text style={guaranteeCheck}>&#10003;</Text>
            <Text style={guaranteeTitle}>Free Shipping</Text>
            <Text style={guaranteeDesc}>On every order</Text>
          </Column>
          <Column style={guaranteeCol}>
            <Text style={guaranteeCheck}>&#10003;</Text>
            <Text style={guaranteeTitle}>30-Day Returns</Text>
            <Text style={guaranteeDesc}>Full refund, no hassle</Text>
          </Column>
          <Column style={guaranteeCol}>
            <Text style={guaranteeCheck}>&#10003;</Text>
            <Text style={guaranteeTitle}>1-Year Warranty</Text>
            <Text style={guaranteeDesc}>We have got you covered</Text>
          </Column>
        </Row>
      </Section>

      <Hr style={divider} />

      {/* ── Social Proof ── */}
      <Section style={socialProofSection}>
        <Text style={socialProofNumber}>4.8 / 5</Text>
        <Text style={socialProofText}>
          average rating from 10,000+ customers
        </Text>
      </Section>

      <Section style={ctaCenter}>
        <PrimaryButton href={`${BASE_URL}/shop`}>
          Shop Now
        </PrimaryButton>
      </Section>

      {/* ── Footer Note ── */}
      <Text style={footerNote}>
        You received this email because you created an account at
        seemyhealth.ai. This is email 3 of 4 in our welcome series.
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

const divider = {
  borderColor: "#1a1a1a",
  margin: "36px 0",
};

const ctaCenter = {
  textAlign: "center" as const,
  margin: "28px 0 0 0",
};

// ── Testimonial cards ──

const testimonialCard = {
  borderRadius: "12px",
  overflow: "hidden" as const,
  marginBottom: "16px",
  border: "1px solid #1a1a1a",
  backgroundColor: "#141414",
};

const testimonialImage = {
  width: "100%",
  display: "block" as const,
};

const testimonialBody = {
  padding: "20px 24px 24px",
  textAlign: "center" as const,
};

const stars = {
  fontSize: "20px",
  color: "#F97316",
  letterSpacing: "4px",
  margin: "0 0 12px 0",
};

const testimonialText = {
  fontSize: "15px",
  fontStyle: "italic" as const,
  color: "#a3a3a3",
  lineHeight: "24px",
  margin: "0 0 12px 0",
};

const testimonialAuthor = {
  fontSize: "13px",
  color: "#5e5e5e",
  margin: "0",
  fontWeight: "600" as const,
};

// ── Guarantee row ──

const guaranteeSection = {
  backgroundColor: "#0d2618",
  border: "1px solid #1a4d30",
  borderRadius: "12px",
  padding: "20px 16px",
};

const guaranteeCol = {
  width: "33.33%",
  textAlign: "center" as const,
  verticalAlign: "top" as const,
  padding: "0 4px",
};

const guaranteeCheck = {
  fontSize: "20px",
  fontWeight: "700" as const,
  color: "#22c55e",
  margin: "0 0 4px 0",
};

const guaranteeTitle = {
  fontSize: "13px",
  fontWeight: "600" as const,
  color: "#f5f5f5",
  margin: "0 0 2px 0",
};

const guaranteeDesc = {
  fontSize: "12px",
  color: "#6b6b6b",
  margin: "0",
};

// ── Social proof ──

const socialProofSection = {
  textAlign: "center" as const,
  padding: "8px 0",
};

const socialProofNumber = {
  fontSize: "32px",
  fontWeight: "700" as const,
  color: "#F97316",
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
