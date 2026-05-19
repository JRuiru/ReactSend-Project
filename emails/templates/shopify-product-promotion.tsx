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
  heroBanner: "https://placehold.co/560x300/1a0533/a855f7?text=Health+Tech+Sale",
};

const styles = {
  heroSection: {
    borderRadius: "12px",
    overflow: "hidden" as const,
    marginBottom: "24px",
    position: "relative" as const,
  },
  heroImage: {
    width: "100%",
    height: "auto",
    borderRadius: "12px",
    display: "block" as const,
  },
  heroBanner: {
    background: "linear-gradient(135deg, #7c3aed 0%, #a855f7 40%, #c084fc 100%)",
    borderRadius: "12px",
    padding: "40px 24px",
    textAlign: "center" as const,
    marginBottom: "24px",
  },
  heroLabel: {
    fontSize: "11px",
    fontWeight: "bold" as const,
    color: "rgba(255,255,255,0.7)",
    textTransform: "uppercase" as const,
    letterSpacing: "2px",
    margin: "0 0 8px 0",
  },
  heroTitle: {
    fontSize: "30px",
    fontWeight: "bold" as const,
    color: "#ffffff",
    margin: "0 0 10px 0",
    lineHeight: "36px",
  },
  heroSubtitle: {
    fontSize: "16px",
    color: "rgba(255,255,255,0.9)",
    margin: "0 0 20px 0",
    lineHeight: "24px",
  },
  discountBadge: {
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: "20px",
    padding: "8px 20px",
    display: "inline-block" as const,
  },
  discountText: {
    fontSize: "18px",
    fontWeight: "bold" as const,
    color: "#ffffff",
    margin: "0",
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
  // Featured product
  featuredCard: {
    backgroundColor: "rgba(124, 58, 237, 0.04)",
    borderRadius: "14px",
    border: "1px solid rgba(124, 58, 237, 0.12)",
    overflow: "hidden" as const,
    marginBottom: "24px",
  },
  featuredImage: {
    width: "100%",
    height: "auto",
    display: "block" as const,
  },
  featuredContent: {
    padding: "20px",
  },
  featuredBadge: {
    backgroundColor: "rgba(124, 58, 237, 0.1)",
    borderRadius: "4px",
    padding: "3px 8px",
    fontSize: "10px",
    fontWeight: "bold" as const,
    color: "#7c3aed",
    textTransform: "uppercase" as const,
    letterSpacing: "1.5px",
    display: "inline-block" as const,
    margin: "0 0 10px 0",
  },
  featuredName: {
    fontSize: "20px",
    fontWeight: "bold" as const,
    color: "#111827",
    margin: "0 0 6px 0",
  },
  featuredDesc: {
    fontSize: "14px",
    color: "#6b7280",
    lineHeight: "22px",
    margin: "0 0 14px 0",
  },
  priceRow: {
    margin: "0 0 16px 0",
  },
  priceOriginal: {
    fontSize: "16px",
    color: "#9ca3af",
    textDecoration: "line-through" as const,
    display: "inline" as const,
    marginRight: "10px",
  },
  priceSale: {
    fontSize: "22px",
    fontWeight: "bold" as const,
    color: "#7c3aed",
    display: "inline" as const,
  },
  saveBadge: {
    backgroundColor: "rgba(16, 185, 129, 0.1)",
    borderRadius: "4px",
    padding: "3px 8px",
    fontSize: "11px",
    fontWeight: "bold" as const,
    color: "#059669",
    display: "inline" as const,
    marginLeft: "10px",
  },
  // Product grid
  productGridCard: {
    backgroundColor: "rgba(124, 58, 237, 0.04)",
    borderRadius: "12px",
    border: "1px solid rgba(124, 58, 237, 0.08)",
    padding: "0",
    overflow: "hidden" as const,
    textAlign: "center" as const,
  },
  gridImage: {
    width: "100%",
    height: "140px",
    objectFit: "cover" as const,
    display: "block" as const,
  },
  gridContent: {
    padding: "14px",
  },
  gridName: {
    fontSize: "14px",
    fontWeight: "bold" as const,
    color: "#111827",
    margin: "0 0 4px 0",
  },
  gridPrice: {
    fontSize: "13px",
    color: "#9ca3af",
    textDecoration: "line-through" as const,
    margin: "0",
    display: "inline" as const,
  },
  gridSalePrice: {
    fontSize: "16px",
    fontWeight: "bold" as const,
    color: "#7c3aed",
    margin: "0 0 0 6px",
    display: "inline" as const,
  },
  divider: {
    borderColor: "rgba(124, 58, 237, 0.1)",
    margin: "24px 0",
  },
  couponSection: {
    background: "linear-gradient(135deg, #1a0533 0%, #2d1654 50%, #4c1d95 100%)",
    borderRadius: "12px",
    padding: "28px 24px",
    textAlign: "center" as const,
    marginBottom: "24px",
  },
  couponTitle: {
    fontSize: "16px",
    color: "rgba(255,255,255,0.8)",
    margin: "0 0 10px 0",
  },
  couponCode: {
    fontSize: "28px",
    fontWeight: "bold" as const,
    color: "#ffffff",
    margin: "0 0 6px 0",
    letterSpacing: "4px",
  },
  couponNote: {
    fontSize: "13px",
    color: "rgba(255,255,255,0.6)",
    margin: "0 0 20px 0",
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

export default function ShopifyProductPromotion() {
  return (
    <EmailLayout previewText="Exclusive deal: Up to 25% off SeeMyHealth devices — limited time only!">
      {/* Hero Banner */}
      <Section style={styles.heroBanner} className="dark-safe">
        <Text style={styles.heroLabel}>Limited Time Offer</Text>
        <Text style={styles.heroTitle}>
          Your Health Upgrade{"\n"}Starts Here
        </Text>
        <Text style={styles.heroSubtitle}>
          Get up to 25% off our most popular health devices
        </Text>
        <Section style={styles.discountBadge}>
          <Text style={styles.discountText}>Use code: HEALTH25</Text>
        </Section>
      </Section>

      {/* Greeting */}
      <Text style={styles.greeting}>
        Hi {'{{ first_name|default:"there" }}'}, we have something special for
        you! For a limited time, enjoy exclusive savings on our award-winning
        health devices.
      </Text>

      {/* Featured Product */}
      <Text style={styles.sectionTitle}>Featured Deal</Text>
      <Text style={styles.sectionSubtitle}>
        Our most popular device at the best price ever
      </Text>

      <Section style={styles.featuredCard}>
        <Img
          src={IMAGES.ringOne}
          alt="Ring One"
          style={styles.featuredImage}
        />
        <Section style={styles.featuredContent}>
          <Text style={styles.featuredBadge}>Best Seller</Text>
          <Text style={styles.featuredName}>Ring One</Text>
          <Text style={styles.featuredDesc}>
            24/7 health monitoring — track heart rate, SpO2, sleep quality,
            activity, and stress levels from your finger. Medical-grade sensors
            in a sleek, comfortable ring.
          </Text>
          <Text style={styles.priceRow}>
            <span style={styles.priceOriginal}>$199.99</span>
            <span style={styles.priceSale}>$149.99</span>
            <span style={styles.saveBadge}>Save $50</span>
          </Text>
          <PrimaryButton href="https://shop.seemyhealth.ai/products/ring-one">
            Shop Ring One
          </PrimaryButton>
        </Section>
      </Section>

      <Hr style={styles.divider} />

      {/* More Deals */}
      <Text style={styles.sectionTitle}>More Deals for You</Text>
      <Text style={styles.sectionSubtitle}>
        Build your complete health ecosystem
      </Text>

      {/* Product Grid — 2 columns */}
      <Row style={{ marginBottom: "12px" }}>
        <Column style={{ width: "48%", verticalAlign: "top" }}>
          <Section style={styles.productGridCard}>
            <Img
              src={IMAGES.scale}
              alt="Smart Scale"
              style={styles.gridImage}
            />
            <Section style={styles.gridContent}>
              <Text style={styles.gridName}>Smart Scale</Text>
              <Text style={{ margin: "4px 0 0 0" }}>
                <span style={styles.gridPrice}>$99.99</span>
                <span style={styles.gridSalePrice}>$79.99</span>
              </Text>
            </Section>
          </Section>
        </Column>
        <Column style={{ width: "4%" }}>&nbsp;</Column>
        <Column style={{ width: "48%", verticalAlign: "top" }}>
          <Section style={styles.productGridCard}>
            <Img
              src={IMAGES.hydraOne}
              alt="Hydra One"
              style={styles.gridImage}
            />
            <Section style={styles.gridContent}>
              <Text style={styles.gridName}>Hydra One</Text>
              <Text style={{ margin: "4px 0 0 0" }}>
                <span style={styles.gridPrice}>$79.99</span>
                <span style={styles.gridSalePrice}>$59.99</span>
              </Text>
            </Section>
          </Section>
        </Column>
      </Row>

      <Row style={{ marginBottom: "12px" }}>
        <Column style={{ width: "48%", verticalAlign: "top" }}>
          <Section style={styles.productGridCard}>
            <Img
              src={IMAGES.hemaOne}
              alt="Hema One"
              style={styles.gridImage}
            />
            <Section style={styles.gridContent}>
              <Text style={styles.gridName}>Hema One</Text>
              <Text style={{ margin: "4px 0 0 0" }}>
                <span style={styles.gridPrice}>$129.99</span>
                <span style={styles.gridSalePrice}>$99.99</span>
              </Text>
            </Section>
          </Section>
        </Column>
        <Column style={{ width: "4%" }}>&nbsp;</Column>
        <Column style={{ width: "48%", verticalAlign: "top" }}>
          <Section style={styles.productGridCard}>
            <Img
              src={IMAGES.bpMonitor}
              alt="BP Monitor"
              style={styles.gridImage}
            />
            <Section style={styles.gridContent}>
              <Text style={styles.gridName}>BP Monitor</Text>
              <Text style={{ margin: "4px 0 0 0" }}>
                <span style={styles.gridPrice}>$89.99</span>
                <span style={styles.gridSalePrice}>$69.99</span>
              </Text>
            </Section>
          </Section>
        </Column>
      </Row>

      <Section style={styles.ctaSection}>
        <SecondaryButton href="https://shop.seemyhealth.ai/collections/all">
          View All Products
        </SecondaryButton>
      </Section>

      <Hr style={styles.divider} />

      {/* Coupon Code */}
      <Section style={styles.couponSection} className="dark-safe">
        <Text style={styles.couponTitle}>Your exclusive discount code</Text>
        <Text style={styles.couponCode}>HEALTH25</Text>
        <Text style={styles.couponNote}>
          Valid for 7 days · Free shipping on all orders
        </Text>
        <PrimaryButton href="https://shop.seemyhealth.ai">
          Shop Now
        </PrimaryButton>
      </Section>

      {/* Benefits */}
      <Text style={{ ...styles.sectionTitle, textAlign: "center" as const }}>
        Why SeeMyHealth?
      </Text>
      <Row style={{ marginTop: "16px" }}>
        <Column style={{ textAlign: "center" as const, padding: "0 8px" }}>
          <Text style={{ fontSize: "28px", margin: "0 0 6px 0" }}>🔬</Text>
          <Text
            style={{
              fontSize: "12px",
              fontWeight: "bold" as const,
              color: "#111827",
              margin: "0 0 4px 0",
            }}
          >
            Medical-Grade
          </Text>
          <Text style={{ fontSize: "11px", color: "#6b7280", margin: "0" }}>
            Lab-quality sensors
          </Text>
        </Column>
        <Column style={{ textAlign: "center" as const, padding: "0 8px" }}>
          <Text style={{ fontSize: "28px", margin: "0 0 6px 0" }}>📱</Text>
          <Text
            style={{
              fontSize: "12px",
              fontWeight: "bold" as const,
              color: "#111827",
              margin: "0 0 4px 0",
            }}
          >
            App Connected
          </Text>
          <Text style={{ fontSize: "11px", color: "#6b7280", margin: "0" }}>
            Real-time health data
          </Text>
        </Column>
        <Column style={{ textAlign: "center" as const, padding: "0 8px" }}>
          <Text style={{ fontSize: "28px", margin: "0 0 6px 0" }}>🛡️</Text>
          <Text
            style={{
              fontSize: "12px",
              fontWeight: "bold" as const,
              color: "#111827",
              margin: "0 0 4px 0",
            }}
          >
            30-Day Guarantee
          </Text>
          <Text style={{ fontSize: "11px", color: "#6b7280", margin: "0" }}>
            Risk-free returns
          </Text>
        </Column>
      </Row>

      <Text style={styles.footerNote}>
        Sale ends soon. Discount applies at checkout. Cannot be combined with
        other offers.{" "}
        <Link href="https://shop.seemyhealth.ai" style={{ color: "#7c3aed" }}>
          Terms apply
        </Link>
        .
      </Text>
    </EmailLayout>
  );
}
