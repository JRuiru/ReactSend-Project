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
  bpMonitor: `${CF_IMG}/bp-black-studio/public`,
  logo: `${CF_IMG}/logo/public`,
  welcomeHero: "https://placehold.co/560x280/1a0533/a855f7?text=Welcome+to+SeeMyHealth",
};

// Device accent colors
const DEVICE_COLORS = {
  ringOne: "#F97316",
  scale: "#3B82F6",
  bpMonitor: "#EF4444",
  hydraOne: "#06B6D4",
  hemaOne: "#A855F7",
};

const styles = {
  welcomeBanner: {
    background: "linear-gradient(135deg, #1a0533 0%, #4c1d95 40%, #7c3aed 70%, #a855f7 100%)",
    borderRadius: "12px",
    padding: "40px 24px",
    textAlign: "center" as const,
    marginBottom: "24px",
  },
  welcomeEmoji: {
    fontSize: "48px",
    lineHeight: "1",
    margin: "0 0 12px 0",
  },
  welcomeTitle: {
    fontSize: "28px",
    fontWeight: "bold" as const,
    color: "#ffffff",
    margin: "0 0 8px 0",
    lineHeight: "34px",
  },
  welcomeSubtitle: {
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
  // Welcome discount
  discountCard: {
    background: "linear-gradient(135deg, rgba(124,58,237,0.08) 0%, rgba(168,85,247,0.06) 100%)",
    borderRadius: "12px",
    border: "2px dashed rgba(124, 58, 237, 0.3)",
    padding: "24px",
    textAlign: "center" as const,
    marginBottom: "28px",
  },
  discountLabel: {
    fontSize: "13px",
    color: "#6b7280",
    margin: "0 0 6px 0",
  },
  discountCode: {
    fontSize: "26px",
    fontWeight: "bold" as const,
    color: "#7c3aed",
    letterSpacing: "3px",
    margin: "0 0 6px 0",
  },
  discountOffer: {
    fontSize: "16px",
    fontWeight: "bold" as const,
    color: "#111827",
    margin: "0 0 4px 0",
  },
  discountExpiry: {
    fontSize: "12px",
    color: "#9ca3af",
    margin: "0",
  },
  // Brand story
  storySection: {
    marginBottom: "28px",
  },
  storyText: {
    fontSize: "15px",
    color: "#374151",
    lineHeight: "24px",
    margin: "0 0 12px 0",
  },
  // Product showcase
  productCard: {
    backgroundColor: "rgba(124, 58, 237, 0.04)",
    borderRadius: "12px",
    border: "1px solid rgba(124, 58, 237, 0.08)",
    overflow: "hidden" as const,
    marginBottom: "12px",
  },
  productImage: {
    width: "100%",
    height: "180px",
    objectFit: "cover" as const,
    display: "block" as const,
  },
  productContent: {
    padding: "16px 18px",
  },
  productName: {
    fontSize: "17px",
    fontWeight: "bold" as const,
    color: "#111827",
    margin: "0 0 4px 0",
  },
  productDesc: {
    fontSize: "13px",
    color: "#6b7280",
    lineHeight: "20px",
    margin: "0 0 10px 0",
  },
  productPrice: {
    fontSize: "16px",
    fontWeight: "bold" as const,
    color: "#7c3aed",
    margin: "0",
  },
  productBadge: (color: string) => ({
    backgroundColor: `${color}15`,
    borderRadius: "4px",
    padding: "2px 8px",
    fontSize: "10px",
    fontWeight: "bold" as const,
    color: color,
    textTransform: "uppercase" as const,
    letterSpacing: "1px",
    display: "inline-block" as const,
    margin: "0 0 8px 0",
    border: `1px solid ${color}30`,
  }),
  // How it works
  stepCard: {
    backgroundColor: "rgba(124, 58, 237, 0.04)",
    borderRadius: "12px",
    border: "1px solid rgba(124, 58, 237, 0.08)",
    padding: "18px",
    marginBottom: "10px",
  },
  stepNumber: {
    background: "linear-gradient(135deg, #7c3aed, #a855f7)",
    color: "#ffffff",
    fontWeight: "bold" as const,
    fontSize: "14px",
    width: "30px",
    height: "30px",
    lineHeight: "30px",
    textAlign: "center" as const,
    borderRadius: "50%",
    display: "inline-block" as const,
  },
  stepTitle: {
    fontSize: "15px",
    fontWeight: "bold" as const,
    color: "#111827",
    margin: "0 0 2px 0",
  },
  stepDesc: {
    fontSize: "13px",
    color: "#6b7280",
    margin: "0",
    lineHeight: "20px",
  },
  // Social proof
  socialSection: {
    background: "linear-gradient(135deg, #1a0533 0%, #2d1654 50%, #4c1d95 100%)",
    borderRadius: "12px",
    padding: "28px 24px",
    textAlign: "center" as const,
    marginBottom: "24px",
  },
  socialTitle: {
    fontSize: "18px",
    fontWeight: "bold" as const,
    color: "#ffffff",
    margin: "0 0 6px 0",
  },
  socialSubtitle: {
    fontSize: "14px",
    color: "rgba(255,255,255,0.7)",
    margin: "0 0 20px 0",
  },
  statItem: {
    textAlign: "center" as const,
    padding: "0 6px",
  },
  statValue: {
    fontSize: "24px",
    fontWeight: "bold" as const,
    color: "#a78bfa",
    margin: "0 0 2px 0",
  },
  statLabel: {
    fontSize: "11px",
    color: "rgba(255,255,255,0.7)",
    margin: "0",
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

export default function ShopifyWelcome() {
  return (
    <EmailLayout previewText="Welcome to SeeMyHealth! Here's 15% off your first order.">
      {/* Welcome Banner */}
      <Section style={styles.welcomeBanner} className="dark-safe">
        <Text style={styles.welcomeEmoji}>💜</Text>
        <Text style={styles.welcomeTitle}>
          Welcome to SeeMyHealth
        </Text>
        <Text style={styles.welcomeSubtitle}>
          Your journey to smarter health starts now
        </Text>
      </Section>

      {/* Greeting */}
      <Text style={styles.greeting}>
        Hi {'{{ first_name|default:"there" }}'}, welcome to the SeeMyHealth
        family! We're thrilled to have you. Our mission is simple — put
        medical-grade health insights in your hands with beautifully designed
        devices that work seamlessly together.
      </Text>

      {/* Welcome Discount */}
      <Section style={styles.discountCard}>
        <Text style={styles.discountLabel}>
          Here's a little something to get you started
        </Text>
        <Text style={styles.discountCode}>WELCOME15</Text>
        <Text style={styles.discountOffer}>
          15% off your first order
        </Text>
        <Text style={styles.discountExpiry}>
          Valid for 30 days · Free shipping included
        </Text>
      </Section>

      <Section style={styles.ctaSection}>
        <PrimaryButton href="https://shop.seemyhealth.ai">
          Start Shopping
        </PrimaryButton>
      </Section>

      <Hr style={styles.divider} />

      {/* Our Devices */}
      <Text style={styles.sectionTitle}>Meet Your Health Ecosystem</Text>
      <Text style={styles.sectionSubtitle}>
        Five devices. One app. Complete health visibility.
      </Text>

      {/* Ring One */}
      <Section style={styles.productCard}>
        <Img src={IMAGES.ringOne} alt="Ring One" style={styles.productImage} />
        <Section style={styles.productContent}>
          <Text style={styles.productBadge(DEVICE_COLORS.ringOne)}>
            Best Seller
          </Text>
          <Text style={styles.productName}>Ring One</Text>
          <Text style={styles.productDesc}>
            24/7 heart rate, SpO2, sleep tracking, and stress monitoring.
            Medical-grade sensors in a sleek ring you'll never want to take off.
          </Text>
          <Text style={styles.productPrice}>From $149.99</Text>
        </Section>
      </Section>

      {/* Scale */}
      <Section style={styles.productCard}>
        <Img src={IMAGES.scale} alt="Smart Scale" style={styles.productImage} />
        <Section style={styles.productContent}>
          <Text style={styles.productBadge(DEVICE_COLORS.scale)}>
            Body Composition
          </Text>
          <Text style={styles.productName}>Smart Scale</Text>
          <Text style={styles.productDesc}>
            Full body composition analysis — weight, body fat, muscle mass, bone
            density, and water percentage with medical-grade accuracy.
          </Text>
          <Text style={styles.productPrice}>From $79.99</Text>
        </Section>
      </Section>

      {/* 2-column row for smaller devices */}
      <Row style={{ marginBottom: "12px" }}>
        <Column style={{ width: "48%", verticalAlign: "top" }}>
          <Section style={{ ...styles.productCard, marginBottom: "0" }}>
            <Img
              src={IMAGES.hydraOne}
              alt="Hydra One"
              style={{ ...styles.productImage, height: "140px" }}
            />
            <Section style={styles.productContent}>
              <Text style={styles.productBadge(DEVICE_COLORS.hydraOne)}>
                Hydration
              </Text>
              <Text style={{ ...styles.productName, fontSize: "15px" }}>
                Hydra One
              </Text>
              <Text style={styles.productPrice}>$59.99</Text>
            </Section>
          </Section>
        </Column>
        <Column style={{ width: "4%" }}>&nbsp;</Column>
        <Column style={{ width: "48%", verticalAlign: "top" }}>
          <Section style={{ ...styles.productCard, marginBottom: "0" }}>
            <Img
              src={IMAGES.hemaOne}
              alt="Hema One"
              style={{ ...styles.productImage, height: "140px" }}
            />
            <Section style={styles.productContent}>
              <Text style={styles.productBadge(DEVICE_COLORS.hemaOne)}>
                Blood Health
              </Text>
              <Text style={{ ...styles.productName, fontSize: "15px" }}>
                Hema One
              </Text>
              <Text style={styles.productPrice}>$99.99</Text>
            </Section>
          </Section>
        </Column>
      </Row>

      <Section style={styles.ctaSection}>
        <SecondaryButton href="https://shop.seemyhealth.ai/collections/all">
          Explore All Devices
        </SecondaryButton>
      </Section>

      <Hr style={styles.divider} />

      {/* How It Works */}
      <Text style={styles.sectionTitle}>How It Works</Text>
      <Text style={styles.sectionSubtitle}>
        Three simple steps to start your health journey
      </Text>

      <Section style={styles.stepCard}>
        <Row>
          <Column style={{ width: "42px", verticalAlign: "top" }}>
            <Text style={styles.stepNumber}>1</Text>
          </Column>
          <Column style={{ verticalAlign: "top", paddingLeft: "10px" }}>
            <Text style={styles.stepTitle}>Choose Your Devices</Text>
            <Text style={styles.stepDesc}>
              Pick the devices that match your health goals — start with one or
              build a full ecosystem
            </Text>
          </Column>
        </Row>
      </Section>

      <Section style={styles.stepCard}>
        <Row>
          <Column style={{ width: "42px", verticalAlign: "top" }}>
            <Text style={styles.stepNumber}>2</Text>
          </Column>
          <Column style={{ verticalAlign: "top", paddingLeft: "10px" }}>
            <Text style={styles.stepTitle}>Download the App</Text>
            <Text style={styles.stepDesc}>
              Get the free SeeMyHealth app on iOS or Android and create your
              account
            </Text>
          </Column>
        </Row>
      </Section>

      <Section style={styles.stepCard}>
        <Row>
          <Column style={{ width: "42px", verticalAlign: "top" }}>
            <Text style={styles.stepNumber}>3</Text>
          </Column>
          <Column style={{ verticalAlign: "top", paddingLeft: "10px" }}>
            <Text style={styles.stepTitle}>See Your Health</Text>
            <Text style={styles.stepDesc}>
              Pair your devices and get instant access to your health data,
              insights, and trends
            </Text>
          </Column>
        </Row>
      </Section>

      <Hr style={styles.divider} />

      {/* Social Proof */}
      <Section style={styles.socialSection} className="dark-safe">
        <Text style={styles.socialTitle}>Trusted by Health Enthusiasts</Text>
        <Text style={styles.socialSubtitle}>
          Join thousands already on their health journey
        </Text>
        <Row>
          <Column style={styles.statItem}>
            <Text style={styles.statValue}>10K+</Text>
            <Text style={styles.statLabel}>Active Users</Text>
          </Column>
          <Column style={styles.statItem}>
            <Text style={styles.statValue}>4.8</Text>
            <Text style={styles.statLabel}>App Rating</Text>
          </Column>
          <Column style={styles.statItem}>
            <Text style={styles.statValue}>50M+</Text>
            <Text style={styles.statLabel}>Data Points</Text>
          </Column>
        </Row>
      </Section>

      <Text style={styles.footerNote}>
        Questions? Visit{" "}
        <Link href="https://seemyhealth.ai/support" style={{ color: "#7c3aed" }}>
          our support page
        </Link>{" "}
        or reply to this email. We're here to help!
      </Text>
    </EmailLayout>
  );
}
