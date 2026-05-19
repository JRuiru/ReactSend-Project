import {
  Section,
  Text,
  Img,
  Row,
  Column,
  Hr,
  Link,
} from "@react-email/components";
import { EmailLayout } from "../components/EmailLayout";
import { PrimaryButton } from "../components/PrimaryButton";
import { SecondaryButton } from "../components/SecondaryButton";

const CF_IMG = "https://imagedelivery.net/NnC2JvU8j4bgBbmedVhjJg";

const IMAGES = {
  ringOne: `${CF_IMG}/ring-one/public`,
  scale: `${CF_IMG}/scale/public`,
  hydraOne: `${CF_IMG}/hydra-one/public`,
  hemaOne: `${CF_IMG}/hema-one/public`,
};

const styles = {
  thankYouBanner: {
    background: "linear-gradient(135deg, #1a0533 0%, #4c1d95 50%, #7c3aed 100%)",
    borderRadius: "12px",
    padding: "36px 24px",
    textAlign: "center" as const,
    marginBottom: "24px",
  },
  bannerEmoji: {
    fontSize: "48px",
    lineHeight: "1",
    margin: "0 0 12px 0",
  },
  bannerTitle: {
    fontSize: "26px",
    fontWeight: "bold" as const,
    color: "#ffffff",
    margin: "0 0 8px 0",
    lineHeight: "32px",
  },
  bannerSubtitle: {
    fontSize: "15px",
    color: "rgba(255,255,255,0.85)",
    margin: "0",
    lineHeight: "22px",
  },
  greeting: {
    fontSize: "16px",
    color: "#374151",
    lineHeight: "26px",
    margin: "0 0 24px 0",
  },
  sectionTitle: {
    fontSize: "20px",
    fontWeight: "bold" as const,
    color: "#111827",
    margin: "0 0 6px 0",
  },
  sectionSubtitle: {
    fontSize: "14px",
    color: "#6b7280",
    margin: "0 0 20px 0",
  },
  // Review section
  reviewCard: {
    background: "linear-gradient(135deg, rgba(124,58,237,0.06) 0%, rgba(124,58,237,0.02) 100%)",
    borderRadius: "12px",
    border: "1px solid rgba(124, 58, 237, 0.12)",
    padding: "24px",
    textAlign: "center" as const,
    marginBottom: "24px",
  },
  stars: {
    fontSize: "32px",
    margin: "0 0 12px 0",
    letterSpacing: "4px",
  },
  reviewTitle: {
    fontSize: "18px",
    fontWeight: "bold" as const,
    color: "#111827",
    margin: "0 0 8px 0",
  },
  reviewDesc: {
    fontSize: "14px",
    color: "#6b7280",
    lineHeight: "22px",
    margin: "0 0 18px 0",
  },
  // Product purchased
  purchasedCard: {
    backgroundColor: "rgba(124, 58, 237, 0.04)",
    borderRadius: "12px",
    border: "1px solid rgba(124, 58, 237, 0.08)",
    padding: "16px",
    marginBottom: "24px",
  },
  purchasedImage: {
    borderRadius: "10px",
    width: "90px",
    height: "90px",
    objectFit: "cover" as const,
  },
  purchasedName: {
    fontSize: "16px",
    fontWeight: "bold" as const,
    color: "#111827",
    margin: "0 0 2px 0",
  },
  purchasedVariant: {
    fontSize: "12px",
    color: "#6b7280",
    margin: "0 0 6px 0",
  },
  purchasedDate: {
    fontSize: "12px",
    color: "#9ca3af",
    margin: "0",
  },
  // Getting started tips
  tipCard: {
    backgroundColor: "rgba(124, 58, 237, 0.04)",
    borderRadius: "12px",
    border: "1px solid rgba(124, 58, 237, 0.08)",
    padding: "18px",
    marginBottom: "10px",
  },
  tipIcon: {
    fontSize: "24px",
    margin: "0",
    lineHeight: "1",
  },
  tipTitle: {
    fontSize: "15px",
    fontWeight: "bold" as const,
    color: "#111827",
    margin: "0 0 4px 0",
  },
  tipDesc: {
    fontSize: "13px",
    color: "#6b7280",
    lineHeight: "20px",
    margin: "0",
  },
  // Recommended products
  recommendCard: {
    backgroundColor: "rgba(124, 58, 237, 0.04)",
    borderRadius: "12px",
    border: "1px solid rgba(124, 58, 237, 0.08)",
    overflow: "hidden" as const,
    textAlign: "center" as const,
  },
  recommendImage: {
    width: "100%",
    height: "130px",
    objectFit: "cover" as const,
    display: "block" as const,
  },
  recommendContent: {
    padding: "12px",
  },
  recommendName: {
    fontSize: "14px",
    fontWeight: "bold" as const,
    color: "#111827",
    margin: "0 0 4px 0",
  },
  recommendPrice: {
    fontSize: "14px",
    fontWeight: "bold" as const,
    color: "#7c3aed",
    margin: "0",
  },
  recommendBadge: {
    backgroundColor: "rgba(124, 58, 237, 0.1)",
    borderRadius: "4px",
    padding: "2px 6px",
    fontSize: "9px",
    fontWeight: "bold" as const,
    color: "#7c3aed",
    textTransform: "uppercase" as const,
    letterSpacing: "1px",
    display: "inline-block" as const,
    margin: "0 0 6px 0",
  },
  // Referral section
  referralSection: {
    background: "linear-gradient(135deg, #1a0533 0%, #2d1654 50%, #4c1d95 100%)",
    borderRadius: "12px",
    padding: "28px 24px",
    textAlign: "center" as const,
    marginBottom: "24px",
  },
  referralTitle: {
    fontSize: "18px",
    fontWeight: "bold" as const,
    color: "#ffffff",
    margin: "0 0 8px 0",
  },
  referralDesc: {
    fontSize: "14px",
    color: "rgba(255,255,255,0.8)",
    lineHeight: "22px",
    margin: "0 0 18px 0",
  },
  referralReward: {
    fontSize: "24px",
    fontWeight: "bold" as const,
    color: "#a78bfa",
    margin: "0 0 16px 0",
  },
  divider: {
    borderColor: "rgba(124, 58, 237, 0.1)",
    margin: "24px 0",
  },
  ctaSection: {
    textAlign: "center" as const,
    margin: "24px 0",
  },
  footerNote: {
    fontSize: "13px",
    color: "#9ca3af",
    textAlign: "center" as const,
    margin: "16px 0 0 0",
    lineHeight: "20px",
  },
};

export default function ShopifyPostPurchase() {
  return (
    <EmailLayout previewText="How are you enjoying your SeeMyHealth device? We'd love to hear from you!">
      {/* Thank You Banner */}
      <Section style={styles.thankYouBanner} className="dark-safe">
        <Text style={styles.bannerEmoji}>🙏</Text>
        <Text style={styles.bannerTitle}>How's Your New Device?</Text>
        <Text style={styles.bannerSubtitle}>
          We'd love to hear about your experience
        </Text>
      </Section>

      {/* Greeting */}
      <Text style={styles.greeting}>
        Hi {'{{ first_name|default:"there" }}'}, it's been a few days since your
        SeeMyHealth device arrived. We hope you're already discovering new
        insights about your health! We'd really appreciate your feedback.
      </Text>

      {/* Product Purchased */}
      <Section style={styles.purchasedCard}>
        <Row>
          <Column style={{ width: "100px", verticalAlign: "top" }}>
            <Img
              src={IMAGES.ringOne}
              alt="Ring One"
              style={styles.purchasedImage}
            />
          </Column>
          <Column style={{ verticalAlign: "middle", paddingLeft: "14px" }}>
            <Text style={styles.purchasedName}>Ring One</Text>
            <Text style={styles.purchasedVariant}>
              Size 8 · Midnight Black
            </Text>
            <Text style={styles.purchasedDate}>
              Purchased May 9, 2026
            </Text>
          </Column>
        </Row>
      </Section>

      {/* Leave a Review */}
      <Section style={styles.reviewCard}>
        <Text style={styles.stars}>⭐⭐⭐⭐⭐</Text>
        <Text style={styles.reviewTitle}>Share Your Experience</Text>
        <Text style={styles.reviewDesc}>
          Your review helps other health enthusiasts find the right devices for
          their journey. It only takes a minute!
        </Text>
        <PrimaryButton href="https://shop.seemyhealth.ai/products/ring-one#reviews">
          Leave a Review
        </PrimaryButton>
      </Section>

      <Hr style={styles.divider} />

      {/* Getting the Most Out of Your Device */}
      <Text style={styles.sectionTitle}>Getting the Most Out of It</Text>
      <Text style={styles.sectionSubtitle}>
        Quick tips to maximize your health insights
      </Text>

      <Section style={styles.tipCard}>
        <Row>
          <Column style={{ width: "40px", verticalAlign: "top" }}>
            <Text style={styles.tipIcon}>😴</Text>
          </Column>
          <Column style={{ verticalAlign: "top", paddingLeft: "8px" }}>
            <Text style={styles.tipTitle}>Wear It to Sleep</Text>
            <Text style={styles.tipDesc}>
              Sleep tracking unlocks some of Ring One's most powerful insights
              — sleep stages, recovery score, and overnight HRV analysis
            </Text>
          </Column>
        </Row>
      </Section>

      <Section style={styles.tipCard}>
        <Row>
          <Column style={{ width: "40px", verticalAlign: "top" }}>
            <Text style={styles.tipIcon}>📊</Text>
          </Column>
          <Column style={{ verticalAlign: "top", paddingLeft: "8px" }}>
            <Text style={styles.tipTitle}>Check Your Trends</Text>
            <Text style={styles.tipDesc}>
              After 7 days of data, your Trends tab will reveal patterns in
              your heart rate, activity, and sleep quality
            </Text>
          </Column>
        </Row>
      </Section>

      <Section style={styles.tipCard}>
        <Row>
          <Column style={{ width: "40px", verticalAlign: "top" }}>
            <Text style={styles.tipIcon}>🎯</Text>
          </Column>
          <Column style={{ verticalAlign: "top", paddingLeft: "8px" }}>
            <Text style={styles.tipTitle}>Set Health Goals</Text>
            <Text style={styles.tipDesc}>
              Open the SeeMyHealth app and set your daily step, calorie, and
              sleep goals for personalized coaching
            </Text>
          </Column>
        </Row>
      </Section>

      <Section style={styles.tipCard}>
        <Row>
          <Column style={{ width: "40px", verticalAlign: "top" }}>
            <Text style={styles.tipIcon}>👨‍👩‍👧‍👦</Text>
          </Column>
          <Column style={{ verticalAlign: "top", paddingLeft: "8px" }}>
            <Text style={styles.tipTitle}>Invite Your Family</Text>
            <Text style={styles.tipDesc}>
              Share health insights with loved ones using Family Sharing — keep
              everyone connected and healthy together
            </Text>
          </Column>
        </Row>
      </Section>

      <Hr style={styles.divider} />

      {/* Complete Your Ecosystem */}
      <Text style={styles.sectionTitle}>Complete Your Ecosystem</Text>
      <Text style={styles.sectionSubtitle}>
        Pair more devices for a full health picture
      </Text>

      <Row style={{ marginBottom: "12px" }}>
        <Column style={{ width: "48%", verticalAlign: "top" }}>
          <Section style={styles.recommendCard}>
            <Img
              src={IMAGES.scale}
              alt="Smart Scale"
              style={styles.recommendImage}
            />
            <Section style={styles.recommendContent}>
              <Text style={styles.recommendBadge}>Pairs with Ring</Text>
              <Text style={styles.recommendName}>Smart Scale</Text>
              <Text style={styles.recommendPrice}>$79.99</Text>
            </Section>
          </Section>
        </Column>
        <Column style={{ width: "4%" }}>&nbsp;</Column>
        <Column style={{ width: "48%", verticalAlign: "top" }}>
          <Section style={styles.recommendCard}>
            <Img
              src={IMAGES.hydraOne}
              alt="Hydra One"
              style={styles.recommendImage}
            />
            <Section style={styles.recommendContent}>
              <Text style={styles.recommendBadge}>Popular Add-on</Text>
              <Text style={styles.recommendName}>Hydra One</Text>
              <Text style={styles.recommendPrice}>$59.99</Text>
            </Section>
          </Section>
        </Column>
      </Row>

      <Row style={{ marginBottom: "12px" }}>
        <Column style={{ width: "48%", verticalAlign: "top" }}>
          <Section style={styles.recommendCard}>
            <Img
              src={IMAGES.hemaOne}
              alt="Hema One"
              style={styles.recommendImage}
            />
            <Section style={styles.recommendContent}>
              <Text style={styles.recommendBadge}>Blood Health</Text>
              <Text style={styles.recommendName}>Hema One</Text>
              <Text style={styles.recommendPrice}>$99.99</Text>
            </Section>
          </Section>
        </Column>
        <Column style={{ width: "4%" }}>&nbsp;</Column>
        <Column style={{ width: "48%" }}>&nbsp;</Column>
      </Row>

      <Section style={styles.ctaSection}>
        <SecondaryButton href="https://shop.seemyhealth.ai/collections/all">
          Browse All Devices
        </SecondaryButton>
      </Section>

      <Hr style={styles.divider} />

      {/* Referral */}
      <Section style={styles.referralSection} className="dark-safe">
        <Text style={styles.referralTitle}>Share the Health</Text>
        <Text style={styles.referralDesc}>
          Know someone who'd love SeeMyHealth? Refer a friend and you'll both
          get a reward!
        </Text>
        <Text style={styles.referralReward}>Give $15, Get $15</Text>
        <PrimaryButton href="https://shop.seemyhealth.ai/referrals">
          Refer a Friend
        </PrimaryButton>
      </Section>

      <Text style={styles.footerNote}>
        Need help with your device? Visit{" "}
        <Link href="https://seemyhealth.ai/support" style={{ color: "#7c3aed" }}>
          our support page
        </Link>{" "}
        or reply to this email. We're always here for you.
      </Text>
    </EmailLayout>
  );
}
