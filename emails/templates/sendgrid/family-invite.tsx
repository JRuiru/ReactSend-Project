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
  hero: `${CDN}/app-family-sharing/public`,
};

export default function FamilyInviteEmail() {
  return (
    <EmailLayout preview="{{inviter_name}} wants to share health data with you on SeeMyHealth">

      {/* ── Hero ── */}
      <Section style={heroSection}>
        <Img
          src={IMAGES.hero}
          width="560"
          alt="Family health sharing"
          style={heroImage}
        />
        <Section style={heroOverlay} className="force-white">
          <Text style={heroLabel}>FAMILY HEALTH SHARING</Text>
          <Text style={heroTitle}>Better health, together.</Text>
        </Section>
      </Section>

      {/* ── Greeting ── */}
      <Text style={heading}>
        {"{{inviter_name}}"} invited you to connect.
      </Text>
      <Text style={paragraph}>
        Hey {"{{first_name}}"}, {"{{inviter_name}}"} wants to share health
        data with you on SeeMyHealth. When you connect as family, you can
        keep an eye on each other's wellness, on your own terms.
      </Text>

      <Section style={ctaCenter}>
        <PrimaryButton href={`${BASE_URL}/family/invite/{{invite_id}}`}>
          View Invitation
        </PrimaryButton>
      </Section>

      <Hr style={divider} />

      {/* ══════════════════════════════════════════════════════════
          You're in control
          ══════════════════════════════════════════════════════════ */}
      <Text style={sectionLabel}>YOU ARE IN CONTROL</Text>

      <Img
        src={`${CDN}/app-hubby-progress/public`}
        width="480"
        alt="Family sharing settings"
        style={controlImage}
      />

      <Text style={sectionSubtext}>
        Nothing is shared by default. You choose exactly what each family
        member can see, and you can change it anytime.
      </Text>

      {/* Permission grid - 2 column, compact */}
      <Section style={permGrid}>
        <Row>
          <Column style={permCell}>
            <Section style={permCard}>
              <Text style={permName}>Heart Health</Text>
            </Section>
          </Column>
          <Column style={permSpacer} />
          <Column style={permCell}>
            <Section style={permCard}>
              <Text style={permName}>Sleep</Text>
            </Section>
          </Column>
        </Row>
      </Section>

      <Section style={permGrid}>
        <Row>
          <Column style={permCell}>
            <Section style={permCard}>
              <Text style={permName}>Activity</Text>
            </Section>
          </Column>
          <Column style={permSpacer} />
          <Column style={permCell}>
            <Section style={permCard}>
              <Text style={permName}>Nutrition</Text>
            </Section>
          </Column>
        </Row>
      </Section>

      <Section style={permGrid}>
        <Row>
          <Column style={permCell}>
            <Section style={permCard}>
              <Text style={permName}>Body Composition</Text>
            </Section>
          </Column>
          <Column style={permSpacer} />
          <Column style={permCell}>
            <Section style={permCard}>
              <Text style={permName}>Blood Health</Text>
            </Section>
          </Column>
        </Row>
      </Section>

      <Text style={moreCategories}>
        and 5 more categories including mental health, medical records,
        appointments, goals, and health events.
      </Text>

      <Section style={toggleExplainer}>
        <Text style={toggleText}>
          Each category has its own on/off toggle per family member.
          Everything is <strong style={{ color: "#f5f5f5" }}>off by default</strong>.
        </Text>
      </Section>

      <Hr style={divider} />

      {/* ══════════════════════════════════════════════════════════
          Security
          ══════════════════════════════════════════════════════════ */}
      <Text style={sectionLabel}>SECURITY</Text>

      <Section style={securityCardOuter}>
        <Img
          src={`${CDN}/ring-phantom-black-poster/public`}
          width="560"
          alt="Security"
          style={securityImage}
        />
        <Section style={securityBody}>
          <Text style={securityHeading}>Secured with Face ID</Text>

          <Section style={securityItem}>
            <Row>
              <Column style={checkCol}><Text style={checkText}>&#x25CF;</Text></Column>
              <Column>
                <Text style={securityText}>
                  <strong style={{ color: "#f5f5f5" }}>Biometric lock</strong> on
                  all family settings. No one can change your sharing preferences
                  without your face or fingerprint.
                </Text>
              </Column>
            </Row>
          </Section>

          <Section style={securityItem}>
            <Row>
              <Column style={checkCol}><Text style={checkText}>&#x25CF;</Text></Column>
              <Column>
                <Text style={securityText}>
                  <strong style={{ color: "#f5f5f5" }}>Auto-lock after 10 seconds.</strong> Leave
                  the settings screen and it locks automatically.
                </Text>
              </Column>
            </Row>
          </Section>

          <Section style={securityItem}>
            <Row>
              <Column style={checkCol}><Text style={checkText}>&#x25CF;</Text></Column>
              <Column>
                <Text style={securityText}>
                  <strong style={{ color: "#f5f5f5" }}>End-to-end encrypted.</strong> Only
                  you and authorized family members can see shared data.
                </Text>
              </Column>
            </Row>
          </Section>

          <Section style={securityItem}>
            <Row>
              <Column style={checkCol}><Text style={checkText}>&#x25CF;</Text></Column>
              <Column>
                <Text style={securityText}>
                  <strong style={{ color: "#f5f5f5" }}>Remove anytime.</strong> Disconnect
                  a family member instantly. All shared access is revoked.
                </Text>
              </Column>
            </Row>
          </Section>
        </Section>
      </Section>

      <Hr style={divider} />

      {/* ══════════════════════════════════════════════════════════
          How it works
          ══════════════════════════════════════════════════════════ */}
      <Text style={sectionLabel}>HOW IT WORKS</Text>

      <Section style={stepRow}>
        <Row>
          <Column style={stepNumCol}>
            <Text style={stepNum}>1</Text>
          </Column>
          <Column>
            <Text style={stepTitle}>Open the invitation</Text>
            <Text style={stepDesc}>
              Tap the button above to review the invite from {"{{inviter_name}}"} in the app.
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
            <Text style={stepTitle}>Choose what to share</Text>
            <Text style={stepDesc}>
              Open Family settings and toggle on only the categories you are
              comfortable sharing.
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
            <Text style={stepTitle}>Enable Face ID</Text>
            <Text style={stepDesc}>
              Family settings are automatically protected by Face ID. Make
              sure biometrics are enabled on your device.
            </Text>
          </Column>
        </Row>
      </Section>

      <Section style={stepRow}>
        <Row>
          <Column style={stepNumCol}>
            <Text style={stepNum}>4</Text>
          </Column>
          <Column>
            <Text style={stepTitle}>Stay connected</Text>
            <Text style={stepDesc}>
              Check in on each other's health, celebrate goals, and support
              each other's wellness journey.
            </Text>
          </Column>
        </Row>
      </Section>

      <Hr style={divider} />

      {/* ══════════════════════════════════════════════════════════
          Device ecosystem strip
          ══════════════════════════════════════════════════════════ */}
      <Text style={ecosystemHeading}>Track health together</Text>
      <Text style={ecosystemSubtext}>
        Each device adds a new dimension to your family's health picture.
      </Text>

      <Section style={ecosystemStrip}>
        <Row>
          {/* Ring */}
          <Column style={deviceCol}>
            <Section style={deviceCard}>
              <Img
                src={`${CDN}/ring-gold-hands-portrait/public`}
                width="160"
                alt="SeeMyHealth Ring"
                style={deviceImage}
              />
              <Text style={deviceBadgeOrange}>WEARABLE</Text>
              <Text style={deviceName}>The Ring</Text>
              <Button href={`${BASE_URL}/products/ring`} style={exploreBtnOrange}>
                Explore
              </Button>
            </Section>
          </Column>

          {/* Scale */}
          <Column style={deviceCol}>
            <Section style={deviceCard}>
              <Img
                src={`${CDN}/scale-black-nutritionist/public`}
                width="160"
                alt="SeeMyHealth Scale"
                style={deviceImage}
              />
              <Text style={deviceBadgeBlue}>BODY COMP</Text>
              <Text style={deviceName}>The Scale</Text>
              <Button href={`${BASE_URL}/products/scale`} style={exploreBtnBlue}>
                Explore
              </Button>
            </Section>
          </Column>

          {/* BP Monitor */}
          <Column style={deviceCol}>
            <Section style={deviceCard}>
              <Img
                src={`${CDN}/bp-black-poster/public`}
                width="160"
                alt="SeeMyHealth BP Monitor"
                style={deviceImage}
              />
              <Text style={deviceBadgeRed}>VITALS</Text>
              <Text style={deviceName}>BP Monitor</Text>
              <Button href={`${BASE_URL}/products/bp-monitor`} style={exploreBtnRed}>
                Explore
              </Button>
            </Section>
          </Column>
        </Row>
      </Section>

      <Hr style={divider} />

      {/* ── Final CTA ── */}
      <Section style={finalCta}>
        <Text style={finalText}>
          {"{{inviter_name}}"} has invited you to share health data.
          Open the app to review and connect.
        </Text>
        <Section style={ctaCenter}>
          <PrimaryButton href={`${BASE_URL}/family/invite/{{invite_id}}`}>
            Open in SeeMyHealth
          </PrimaryButton>
        </Section>
      </Section>

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
  color: "#b3b3b3",
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
  color: "#a3a3a3",
  margin: "0",
};

const ctaCenter = {
  textAlign: "center" as const,
  margin: "24px 0 0 0",
};

const divider = {
  borderColor: "#1a1a1a",
  margin: "28px 0",
};

const sectionLabel = {
  fontSize: "11px",
  fontWeight: "600" as const,
  color: "#5e5e5e",
  letterSpacing: "3px",
  textTransform: "uppercase" as const,
  margin: "0 0 8px 0",
};

const sectionSubtext = {
  fontSize: "15px",
  color: "#8a8a8a",
  lineHeight: "24px",
  margin: "0 0 20px 0",
};

// ── Permission grid ──

const permGrid = {
  marginBottom: "8px",
};

const permCell = {
  width: "48%",
  verticalAlign: "top" as const,
};

const permSpacer = {
  width: "4%",
};

const permCard = {
  backgroundColor: "#141414",
  borderRadius: "10px",
  padding: "12px 14px",
  border: "1px solid #1a1a1a",
};

const controlImage = {
  width: "100%",
  display: "block" as const,
  borderRadius: "12px",
  marginBottom: "16px",
};

const moreCategories = {
  fontSize: "13px",
  color: "#5e5e5e",
  textAlign: "center" as const,
  margin: "4px 0 16px 0",
  lineHeight: "20px",
};

const permName = {
  fontSize: "13px",
  fontWeight: "600" as const,
  color: "#f5f5f5",
  margin: "0 0 2px 0",
};


const toggleExplainer = {
  backgroundColor: "#141414",
  borderRadius: "10px",
  padding: "16px 20px",
  marginTop: "12px",
  textAlign: "center" as const,
  border: "1px solid #1a1a1a",
};

const toggleText = {
  fontSize: "13px",
  color: "#6b6b6b",
  lineHeight: "20px",
  margin: "0",
};

// ── Security ──

const securityCardOuter = {
  borderRadius: "12px",
  overflow: "hidden" as const,
  border: "1px solid #1a1a1a",
  backgroundColor: "#141414",
};

const securityImage = {
  width: "100%",
  display: "block" as const,
  opacity: "0.4",
};

const securityBody = {
  padding: "24px",
};

const securityHeading = {
  fontSize: "18px",
  fontWeight: "700" as const,
  color: "#f5f5f5",
  margin: "0 0 20px 0",
};

const securityItem = {
  marginBottom: "14px",
};

const checkCol = {
  width: "20px",
  verticalAlign: "top" as const,
};

const checkText = {
  fontSize: "8px",
  color: "#5e5e5e",
  margin: "0",
  lineHeight: "22px",
};

const securityText = {
  fontSize: "14px",
  lineHeight: "22px",
  color: "#8a8a8a",
  margin: "0",
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
  color: "#252525",
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
  color: "#6b6b6b",
  margin: "0",
  lineHeight: "21px",
};

// ── Ecosystem strip ──

const ecosystemHeading = {
  fontSize: "18px",
  fontWeight: "700" as const,
  color: "#f5f5f5",
  margin: "0 0 6px 0",
  textAlign: "center" as const,
};

const ecosystemSubtext = {
  fontSize: "14px",
  color: "#6b6b6b",
  lineHeight: "22px",
  margin: "0 0 20px 0",
  textAlign: "center" as const,
};

const ecosystemStrip = {
  marginBottom: "0",
};

const deviceCol = {
  width: "33.33%",
  verticalAlign: "top" as const,
  padding: "0 4px",
};

const deviceCard = {
  backgroundColor: "#141414",
  borderRadius: "12px",
  padding: "0 0 16px 0",
  textAlign: "center" as const,
  border: "1px solid #1a1a1a",
  overflow: "hidden" as const,
};

const deviceImage = {
  width: "100%",
  display: "block" as const,
  borderRadius: "12px 12px 0 0",
};

const deviceBadgeBase = {
  fontSize: "9px",
  fontWeight: "700" as const,
  letterSpacing: "1.5px",
  textTransform: "uppercase" as const,
  margin: "12px 0 4px 0",
  lineHeight: "1",
};

const deviceBadgeOrange = {
  ...deviceBadgeBase,
  color: "#F97316",
};

const deviceBadgeBlue = {
  ...deviceBadgeBase,
  color: "#3B82F6",
};

const deviceBadgeRed = {
  ...deviceBadgeBase,
  color: "#EF4444",
};

const deviceName = {
  fontSize: "13px",
  fontWeight: "600" as const,
  color: "#f5f5f5",
  margin: "0 0 10px 0",
};

const exploreBtnBase = {
  fontSize: "11px",
  fontWeight: "600" as const,
  padding: "6px 16px",
  borderRadius: "50px",
  textDecoration: "none",
  display: "inline-block",
  letterSpacing: "0.5px",
  color: "#0a0a0a",
};

const exploreBtnOrange = {
  ...exploreBtnBase,
  backgroundColor: "#F97316",
};

const exploreBtnBlue = {
  ...exploreBtnBase,
  backgroundColor: "#3B82F6",
};

const exploreBtnRed = {
  ...exploreBtnBase,
  backgroundColor: "#EF4444",
};

// ── Final CTA ──

const finalCta = {
  textAlign: "center" as const,
};

const finalText = {
  fontSize: "15px",
  color: "#8a8a8a",
  lineHeight: "24px",
  margin: "0",
  textAlign: "center" as const,
};
