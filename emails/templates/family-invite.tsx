import {
  Text,
  Section,
  Img,
  Row,
  Column,
  Hr,
} from "@react-email/components";
import * as React from "react";
import { EmailLayout } from "../components/EmailLayout";
import { PrimaryButton } from "../components/PrimaryButton";

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
      <Text style={sectionSubtext}>
        Nothing is shared by default. You choose exactly what each family
        member can see, and you can change it anytime.
      </Text>

      {/* Permission grid - 2 column */}
      <Section style={permGrid}>
        <Row>
          <Column style={permCell}>
            <Section style={permCard}>
              <Text style={permName}>Heart Health</Text>
              <Text style={permDesc}>Blood pressure, heart rate, HRV, SpO2</Text>
            </Section>
          </Column>
          <Column style={permSpacer} />
          <Column style={permCell}>
            <Section style={permCard}>
              <Text style={permName}>Body Composition</Text>
              <Text style={permDesc}>Weight, BMI, body fat, muscle mass</Text>
            </Section>
          </Column>
        </Row>
      </Section>

      <Section style={permGrid}>
        <Row>
          <Column style={permCell}>
            <Section style={permCard}>
              <Text style={permName}>Sleep</Text>
              <Text style={permDesc}>Patterns, quality, duration tracking</Text>
            </Section>
          </Column>
          <Column style={permSpacer} />
          <Column style={permCell}>
            <Section style={permCard}>
              <Text style={permName}>Activity</Text>
              <Text style={permDesc}>Steps, exercise, daily fitness metrics</Text>
            </Section>
          </Column>
        </Row>
      </Section>

      <Section style={permGrid}>
        <Row>
          <Column style={permCell}>
            <Section style={permCard}>
              <Text style={permName}>Nutrition</Text>
              <Text style={permDesc}>Meals, calories, dietary tracking</Text>
            </Section>
          </Column>
          <Column style={permSpacer} />
          <Column style={permCell}>
            <Section style={permCard}>
              <Text style={permName}>Mental Health</Text>
              <Text style={permDesc}>Mood, stress, journal wellness</Text>
            </Section>
          </Column>
        </Row>
      </Section>

      <Section style={permGrid}>
        <Row>
          <Column style={permCell}>
            <Section style={permCard}>
              <Text style={permName}>Blood Health</Text>
              <Text style={permDesc}>Glucose, haemoglobin, lipid levels</Text>
            </Section>
          </Column>
          <Column style={permSpacer} />
          <Column style={permCell}>
            <Section style={permCard}>
              <Text style={permName}>Medical Records</Text>
              <Text style={permDesc}>History, diagnoses, lab results</Text>
            </Section>
          </Column>
        </Row>
      </Section>

      <Section style={permGrid}>
        <Row>
          <Column style={permCell}>
            <Section style={permCard}>
              <Text style={permName}>Appointments</Text>
              <Text style={permDesc}>Upcoming visits, doctor schedules</Text>
            </Section>
          </Column>
          <Column style={permSpacer} />
          <Column style={permCell}>
            <Section style={permCard}>
              <Text style={permName}>Goals</Text>
              <Text style={permDesc}>Health goals, targets, progress</Text>
            </Section>
          </Column>
        </Row>
      </Section>

      <Section style={permGrid}>
        <Row>
          <Column style={permCell}>
            <Section style={permCard}>
              <Text style={permName}>Health Events</Text>
              <Text style={permDesc}>Alerts and health incidents</Text>
            </Section>
          </Column>
          <Column style={permSpacer} />
          <Column style={permCell} />
        </Row>
      </Section>

      <Section style={toggleExplainer}>
        <Text style={toggleText}>
          Each category has its own on/off toggle per family member.
          Everything is <strong style={{ color: "#f5f5f5" }}>off by default</strong>.
          You turn on only what you want to share.
        </Text>
      </Section>

      <Hr style={divider} />

      {/* ══════════════════════════════════════════════════════════
          Security
          ══════════════════════════════════════════════════════════ */}
      <Text style={sectionLabel}>SECURITY</Text>

      <Section style={securityCard}>
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

const ctaCenter = {
  textAlign: "center" as const,
  margin: "24px 0 0 0",
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
  margin: "0 0 8px 0",
};

const sectionSubtext = {
  fontSize: "15px",
  color: "rgba(255, 255, 255, 0.5)",
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
  padding: "14px 12px",
  border: "1px solid rgba(255, 255, 255, 0.06)",
  height: "72px",
};

const permName = {
  fontSize: "13px",
  fontWeight: "600" as const,
  color: "#f5f5f5",
  margin: "0 0 2px 0",
};

const permDesc = {
  fontSize: "11px",
  lineHeight: "16px",
  color: "rgba(255, 255, 255, 0.35)",
  margin: "0",
};

const toggleExplainer = {
  backgroundColor: "#141414",
  borderRadius: "10px",
  padding: "16px 20px",
  marginTop: "12px",
  textAlign: "center" as const,
  border: "1px solid rgba(255, 255, 255, 0.06)",
};

const toggleText = {
  fontSize: "13px",
  color: "rgba(255, 255, 255, 0.45)",
  lineHeight: "20px",
  margin: "0",
};

// ── Security ──

const securityCard = {
  backgroundColor: "#141414",
  borderRadius: "12px",
  padding: "24px",
  border: "1px solid rgba(255, 255, 255, 0.06)",
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
  color: "rgba(255, 255, 255, 0.3)",
  margin: "0",
  lineHeight: "22px",
};

const securityText = {
  fontSize: "14px",
  lineHeight: "22px",
  color: "rgba(255, 255, 255, 0.5)",
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

// ── Final CTA ──

const finalCta = {
  textAlign: "center" as const,
};

const finalText = {
  fontSize: "15px",
  color: "rgba(255, 255, 255, 0.5)",
  lineHeight: "24px",
  margin: "0",
  textAlign: "center" as const,
};
