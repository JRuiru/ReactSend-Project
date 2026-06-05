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

const CDN = "https://imagedelivery.net/NnC2JvU8j4bgBbmedVhjJg";
const BASE_URL = "https://seemyhealth.ai";

const IMAGES = {
  hero: `${CDN}/lifestyle-celebration-toast/public`,
  testimonial1: `${CDN}/ring-gold-hands-portrait/public`,
  testimonial2: `${CDN}/scale-stepon-body-comp/public`,
  testimonial3: `${CDN}/bottle-white-cafe-v2/public`,
};

export default function BrowseAbandonSocialProof() {
  return (
    <EmailLayout preview="People are loving the product you viewed — see what they are saying.">

      {/* ── Hero Image ── */}
      <Section style={heroSection}>
        <Img
          src={IMAGES.hero}
          width="560"
          alt="Popular choice at SeeMyHealth"
          style={heroImage}
        />
        <Section style={heroOverlay} className="force-white">
          <Text style={heroTagline}>POPULAR CHOICE</Text>
          <Text style={heroTitle}>People love this.</Text>
        </Section>
      </Section>

      {/* ── Heading ── */}
      <Section style={greetingSection}>
        <Text style={heading}>
          The {"{{ event.extra.ProductName }}"} is a customer favourite.
        </Text>
        <Text style={paragraph}>
          Here is what people who bought it are saying.
        </Text>
      </Section>

      {/* ── Small Product Reminder Card ── */}
      <Section style={productCard}>
        <Row>
          <Column style={productImageCol}>
            <Img
              src={"{{ event.extra.ImageURL }}"}
              width="120"
              alt={"{{ event.extra.ProductName }}"}
              style={productThumb}
            />
          </Column>
          <Column style={productInfoCol}>
            <Text style={productName}>{"{{ event.extra.ProductName }}"}</Text>
            <Text style={productPrice}>{"${{ event.extra.Price|floatformat:2 }}"}</Text>
          </Column>
        </Row>
      </Section>

      <Hr style={divider} />

      {/* ── Testimonials ── */}
      <Text style={sectionLabel}>CUSTOMER REVIEWS</Text>
      <Text style={sectionHeading}>Real people. Real results.</Text>

      {/* Testimonial 1 */}
      <Section style={testimonialCard}>
        <Img
          src={IMAGES.testimonial1}
          width="480"
          alt="Ring One customer"
          style={testimonialImage}
        />
        <Section style={testimonialBody}>
          <Text style={stars}>&#9733;&#9733;&#9733;&#9733;&#9733;</Text>
          <Text style={testimonialText}>
            "Best health investment I have made. The data is clear, the app
            is beautiful, and I actually use it every single day."
          </Text>
          <Text style={testimonialAuthor}>Alex P. — Verified Buyer</Text>
        </Section>
      </Section>

      {/* Testimonial 2 */}
      <Section style={testimonialCard}>
        <Img
          src={IMAGES.testimonial2}
          width="480"
          alt="Scale customer"
          style={testimonialImage}
        />
        <Section style={testimonialBody}>
          <Text style={stars}>&#9733;&#9733;&#9733;&#9733;&#9733;</Text>
          <Text style={testimonialText}>
            "Setup took literally 3 minutes. I was tracking within the hour.
            The build quality is excellent and feels premium."
          </Text>
          <Text style={testimonialAuthor}>Nina K. — Verified Buyer</Text>
        </Section>
      </Section>

      {/* Testimonial 3 */}
      <Section style={testimonialCard}>
        <Img
          src={IMAGES.testimonial3}
          width="480"
          alt="Hydra One customer"
          style={testimonialImage}
        />
        <Section style={testimonialBody}>
          <Text style={stars}>&#9733;&#9733;&#9733;&#9733;&#9733;</Text>
          <Text style={testimonialText}>
            "I have tried other brands. This is the first one where the app
            actually makes sense of the data instead of just showing numbers."
          </Text>
          <Text style={testimonialAuthor}>Tom H. — Verified Buyer</Text>
        </Section>
      </Section>

      <Hr style={divider} />

      {/* ── Stats Row ── */}
      <Section style={statsCard}>
        <Row>
          <Column style={statCol}>
            <Text style={statNumber}>4.8/5</Text>
            <Text style={statLabel}>RATING</Text>
          </Column>
          <Column style={statCol}>
            <Text style={statNumber}>10K+</Text>
            <Text style={statLabel}>OWNERS</Text>
          </Column>
          <Column style={statCol}>
            <Text style={statNumber}>30d</Text>
            <Text style={statLabel}>FREE RETURNS</Text>
          </Column>
        </Row>
      </Section>

      <Hr style={divider} />

      {/* ── CTA ── */}
      <Section style={ctaCenter}>
        <PrimaryButton href="{{ event.extra.URL }}">
          Shop Now
        </PrimaryButton>
      </Section>

      {/* ── Footer Note ── */}
      <Text style={footerNote}>
        You received this email because you recently browsed seemyhealth.ai.
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

// ── Product Reminder Card ──

const productCard = {
  backgroundColor: "#141414",
  borderRadius: "12px",
  padding: "16px 20px",
  border: "1px solid #1a1a1a",
  marginBottom: "16px",
};

const productImageCol = {
  width: "120px",
  verticalAlign: "middle" as const,
};

const productThumb = {
  width: "100%",
  display: "block" as const,
  borderRadius: "8px",
};

const productInfoCol = {
  verticalAlign: "middle" as const,
  paddingLeft: "16px",
};

const productName = {
  fontSize: "18px",
  fontWeight: "700" as const,
  color: "#f5f5f5",
  margin: "0 0 4px 0",
};

const productPrice = {
  fontSize: "16px",
  fontWeight: "700" as const,
  color: "#22c55e",
  margin: "0",
};

// ── Testimonial Cards ──

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
};

const stars = {
  fontSize: "16px",
  color: "#F97316",
  letterSpacing: "2px",
  margin: "0 0 8px 0",
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
  color: "#525252",
  fontWeight: "600" as const,
  margin: "0",
};

// ── Stats ──

const statsCard = {
  backgroundColor: "#141414",
  border: "1px solid #1a4d30",
  borderRadius: "12px",
  padding: "20px 16px",
};

const statCol = {
  width: "33.33%",
  textAlign: "center" as const,
};

const statNumber = {
  fontSize: "22px",
  fontWeight: "700" as const,
  color: "#22c55e",
  margin: "0 0 2px 0",
  textAlign: "center" as const,
};

const statLabel = {
  fontSize: "11px",
  fontWeight: "600" as const,
  color: "#6b6b6b",
  letterSpacing: "1px",
  textTransform: "uppercase" as const,
  margin: "0",
  textAlign: "center" as const,
};

// ── Footer ──

const footerNote = {
  fontSize: "13px",
  color: "#525252",
  textAlign: "center" as const,
  margin: "32px 0 0 0",
  lineHeight: "20px",
};
