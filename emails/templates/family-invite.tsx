import {
  Text,
  Section,
  Row,
  Column,
  Hr,
} from "@react-email/components";
import * as React from "react";
import { EmailLayout } from "../components/EmailLayout";
import { PrimaryButton } from "../components/PrimaryButton";

const BASE_URL = "https://seemyhealth.ai";

export default function FamilyInviteEmail() {
  return (
    <EmailLayout preview="{{inviter_name}} wants to share health data with you on SeeMyHealth">

      {/* ── Family banner ── */}
      <Section style={banner}>
        <Text style={bannerIcon}>&#x1F46A;</Text>
        <Text style={bannerTitle}>Family Health Sharing</Text>
        <Text style={bannerSubtitle}>Better health, together</Text>
      </Section>

      {/* ── Greeting ── */}
      <Text style={heading}>
        {"{{inviter_name}}"} invited you to connect
      </Text>

      <Text style={paragraph}>
        Hey {"{{first_name}}"}, {"{{inviter_name}}"} wants to share health
        data with you on SeeMyHealth. When you connect as family, you can
        keep an eye on each other's wellness — on your own terms.
      </Text>

      {/* ── Accept CTA ── */}
      <Section style={ctaSection}>
        <PrimaryButton href={`${BASE_URL}/family/accept/{{invite_id}}`}>
          Accept Invitation
        </PrimaryButton>
      </Section>

      <Hr style={divider} />

      {/* ══════════════════════════════════════════════════════════
          You're in control
          ══════════════════════════════════════════════════════════ */}
      <Text style={sectionHeading}>You're in full control</Text>
      <Text style={sectionSubtext}>
        Nothing is shared by default. You choose exactly what each family
        member can see — and you can change it anytime.
      </Text>

      {/* Permission categories - 2 column grid */}
      <Section style={permGrid}>
        <Row>
          <Column style={permCell}>
            <Section style={permCard}>
              <Text style={permIcon}>&#x2764;&#xFE0F;</Text>
              <Text style={permName}>Heart Health</Text>
              <Text style={permDesc}>Blood pressure, heart rate, HRV, SpO2</Text>
            </Section>
          </Column>
          <Column style={permSpacer} />
          <Column style={permCell}>
            <Section style={permCard}>
              <Text style={permIcon}>&#x1F4AA;</Text>
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
              <Text style={permIcon}>&#x1F634;</Text>
              <Text style={permName}>Sleep</Text>
              <Text style={permDesc}>Patterns, quality, duration</Text>
            </Section>
          </Column>
          <Column style={permSpacer} />
          <Column style={permCell}>
            <Section style={permCard}>
              <Text style={permIcon}>&#x1F3C3;</Text>
              <Text style={permName}>Activity</Text>
              <Text style={permDesc}>Steps, exercise, fitness metrics</Text>
            </Section>
          </Column>
        </Row>
      </Section>

      <Section style={permGrid}>
        <Row>
          <Column style={permCell}>
            <Section style={permCard}>
              <Text style={permIcon}>&#x1F957;</Text>
              <Text style={permName}>Nutrition</Text>
              <Text style={permDesc}>Meals, calories, dietary info</Text>
            </Section>
          </Column>
          <Column style={permSpacer} />
          <Column style={permCell}>
            <Section style={permCard}>
              <Text style={permIcon}>&#x1F9E0;</Text>
              <Text style={permName}>Mental Health</Text>
              <Text style={permDesc}>Mood, stress, journal entries</Text>
            </Section>
          </Column>
        </Row>
      </Section>

      <Section style={permGrid}>
        <Row>
          <Column style={permCell}>
            <Section style={permCard}>
              <Text style={permIcon}>&#x1FA78;</Text>
              <Text style={permName}>Blood Health</Text>
              <Text style={permDesc}>Glucose, haemoglobin, lipids</Text>
            </Section>
          </Column>
          <Column style={permSpacer} />
          <Column style={permCell}>
            <Section style={permCard}>
              <Text style={permIcon}>&#x1F4CB;</Text>
              <Text style={permName}>Medical Records</Text>
              <Text style={permDesc}>History, diagnoses, test results</Text>
            </Section>
          </Column>
        </Row>
      </Section>

      <Section style={permGrid}>
        <Row>
          <Column style={permCell}>
            <Section style={permCard}>
              <Text style={permIcon}>&#x1F4C5;</Text>
              <Text style={permName}>Appointments</Text>
              <Text style={permDesc}>Upcoming medical visits</Text>
            </Section>
          </Column>
          <Column style={permSpacer} />
          <Column style={permCell}>
            <Section style={permCard}>
              <Text style={permIcon}>&#x1F3AF;</Text>
              <Text style={permName}>Goals</Text>
              <Text style={permDesc}>Health goals and progress</Text>
            </Section>
          </Column>
        </Row>
      </Section>

      <Section style={permGrid}>
        <Row>
          <Column style={permCell}>
            <Section style={permCard}>
              <Text style={permIcon}>&#x26A0;&#xFE0F;</Text>
              <Text style={permName}>Health Events</Text>
              <Text style={permDesc}>Alerts and health incidents</Text>
            </Section>
          </Column>
          <Column style={permSpacer} />
          <Column style={permCell}>
            {/* Empty cell for alignment */}
          </Column>
        </Row>
      </Section>

      {/* Toggle explainer */}
      <Section style={toggleExplainer}>
        <Text style={toggleText}>
          Each category has its own on/off toggle per family member.
          Everything is <strong>off by default</strong> — you turn on only
          what you want to share.
        </Text>
      </Section>

      <Hr style={divider} />

      {/* ══════════════════════════════════════════════════════════
          Security — Face ID
          ══════════════════════════════════════════════════════════ */}
      <Section style={securitySection}>
        <Text style={securityIcon}>&#x1F512;</Text>
        <Text style={securityHeading}>Secured with Face ID</Text>

        <Section style={securityItem}>
          <Row>
            <Column style={securityBulletCol}>
              <Text style={checkmark}>&#x2705;</Text>
            </Column>
            <Column>
              <Text style={securityText}>
                <strong>Biometric lock on all family settings</strong> —
                Face ID or Touch ID is required every time you open family
                management. No one can change your sharing preferences
                without your face or fingerprint.
              </Text>
            </Column>
          </Row>
        </Section>

        <Section style={securityItem}>
          <Row>
            <Column style={securityBulletCol}>
              <Text style={checkmark}>&#x2705;</Text>
            </Column>
            <Column>
              <Text style={securityText}>
                <strong>Auto-lock after 10 seconds</strong> —
                leave the family settings screen or switch apps, and it
                locks automatically. You'll need to re-authenticate to
                make any changes.
              </Text>
            </Column>
          </Row>
        </Section>

        <Section style={securityItem}>
          <Row>
            <Column style={securityBulletCol}>
              <Text style={checkmark}>&#x2705;</Text>
            </Column>
            <Column>
              <Text style={securityText}>
                <strong>End-to-end encrypted</strong> —
                your health data is encrypted in transit and at rest.
                Only you and the family members you authorize can see it.
              </Text>
            </Column>
          </Row>
        </Section>

        <Section style={securityItem}>
          <Row>
            <Column style={securityBulletCol}>
              <Text style={checkmark}>&#x2705;</Text>
            </Column>
            <Column>
              <Text style={securityText}>
                <strong>Remove anytime</strong> —
                you can disconnect a family member instantly. All shared
                access is revoked immediately.
              </Text>
            </Column>
          </Row>
        </Section>
      </Section>

      <Hr style={divider} />

      {/* ══════════════════════════════════════════════════════════
          How it works
          ══════════════════════════════════════════════════════════ */}
      <Text style={sectionHeading}>How it works</Text>

      <Section style={stepRow}>
        <Row>
          <Column style={stepNumCol}>
            <Text style={stepCircle}>1</Text>
          </Column>
          <Column style={stepContent}>
            <Text style={stepTitle}>Accept the invite</Text>
            <Text style={stepDesc}>
              Tap the button above to connect with {"{{inviter_name}}"}.
            </Text>
          </Column>
        </Row>
      </Section>

      <Section style={stepRow}>
        <Row>
          <Column style={stepNumCol}>
            <Text style={stepCircle}>2</Text>
          </Column>
          <Column style={stepContent}>
            <Text style={stepTitle}>Choose what to share</Text>
            <Text style={stepDesc}>
              Open Family settings and toggle on only the categories you're
              comfortable sharing.
            </Text>
          </Column>
        </Row>
      </Section>

      <Section style={stepRow}>
        <Row>
          <Column style={stepNumCol}>
            <Text style={stepCircle}>3</Text>
          </Column>
          <Column style={stepContent}>
            <Text style={stepTitle}>Enable Face ID</Text>
            <Text style={stepDesc}>
              Family settings are automatically protected by Face ID — make
              sure biometrics are enabled on your device.
            </Text>
          </Column>
        </Row>
      </Section>

      <Section style={stepRow}>
        <Row>
          <Column style={stepNumCol}>
            <Text style={stepCircle}>4</Text>
          </Column>
          <Column style={stepContent}>
            <Text style={stepTitle}>Stay connected</Text>
            <Text style={stepDesc}>
              Check in on each other's health, celebrate goals, and support
              each other's wellness journey.
            </Text>
          </Column>
        </Row>
      </Section>

      {/* ── Final CTA ── */}
      <Hr style={divider} />

      <Section style={finalSection}>
        <Text style={finalText}>
          {"{{inviter_name}}"} is waiting for you. Connect now and start
          looking after each other's health.
        </Text>
        <Section style={ctaSection}>
          <PrimaryButton href={`${BASE_URL}/family/accept/{{invite_id}}`}>
            Accept &amp; Connect
          </PrimaryButton>
        </Section>
      </Section>

    </EmailLayout>
  );
}

// ── Styles ──

const banner = {
  background: "linear-gradient(135deg, #1a0533 0%, #4c1d95 40%, #7c3aed 70%, #a855f7 100%)",
  borderRadius: "16px",
  padding: "40px 24px",
  textAlign: "center" as const,
  marginBottom: "24px",
};

const bannerIcon = {
  fontSize: "48px",
  margin: "0 0 8px 0",
  lineHeight: "1",
};

const bannerTitle = {
  fontSize: "28px",
  fontWeight: "bold" as const,
  color: "#ffffff",
  margin: "0 0 4px 0",
};

const bannerSubtitle = {
  fontSize: "15px",
  color: "rgba(255, 255, 255, 0.7)",
  margin: "0",
};

const heading = {
  fontSize: "24px",
  fontWeight: "bold" as const,
  color: "#111827",
  margin: "0 0 8px 0",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  color: "#374151",
  margin: "0",
};

const ctaSection = {
  textAlign: "center" as const,
  margin: "24px 0",
};

const divider = {
  borderColor: "rgba(124, 58, 237, 0.1)",
  margin: "28px 0",
};

const sectionHeading = {
  fontSize: "20px",
  fontWeight: "bold" as const,
  color: "#111827",
  margin: "0 0 4px 0",
};

const sectionSubtext = {
  fontSize: "14px",
  color: "#6b7280",
  lineHeight: "22px",
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
  background: "linear-gradient(135deg, rgba(124,58,237,0.04) 0%, rgba(168,85,247,0.06) 100%)",
  borderRadius: "10px",
  padding: "14px 12px",
  border: "1px solid rgba(124, 58, 237, 0.08)",
};

const permIcon = {
  fontSize: "22px",
  margin: "0 0 4px 0",
  lineHeight: "1",
};

const permName = {
  fontSize: "13px",
  fontWeight: "bold" as const,
  color: "#111827",
  margin: "0 0 2px 0",
};

const permDesc = {
  fontSize: "11px",
  lineHeight: "16px",
  color: "#9ca3af",
  margin: "0",
};

const toggleExplainer = {
  background: "rgba(124, 58, 237, 0.04)",
  borderRadius: "10px",
  padding: "16px 20px",
  marginTop: "12px",
  textAlign: "center" as const,
};

const toggleText = {
  fontSize: "13px",
  color: "#6b7280",
  lineHeight: "20px",
  margin: "0",
};

// ── Security section ──

const securitySection = {
  background: "linear-gradient(135deg, rgba(124,58,237,0.04) 0%, rgba(168,85,247,0.06) 100%)",
  borderRadius: "14px",
  padding: "28px 24px",
  border: "1px solid rgba(124, 58, 237, 0.1)",
};

const securityIcon = {
  fontSize: "36px",
  margin: "0 0 8px 0",
  lineHeight: "1",
  textAlign: "center" as const,
};

const securityHeading = {
  fontSize: "20px",
  fontWeight: "bold" as const,
  color: "#111827",
  margin: "0 0 20px 0",
  textAlign: "center" as const,
};

const securityItem = {
  marginBottom: "16px",
};

const securityBulletCol = {
  width: "28px",
  verticalAlign: "top" as const,
};

const checkmark = {
  fontSize: "14px",
  margin: "0",
  lineHeight: "1.4",
};

const securityText = {
  fontSize: "14px",
  lineHeight: "22px",
  color: "#374151",
  margin: "0",
};

// ── Steps ──

const stepRow = {
  marginBottom: "16px",
};

const stepNumCol = {
  width: "44px",
  verticalAlign: "top" as const,
};

const stepCircle = {
  background: "linear-gradient(135deg, #7c3aed, #a855f7)",
  color: "#ffffff",
  width: "32px",
  height: "32px",
  borderRadius: "50%",
  textAlign: "center" as const,
  lineHeight: "32px",
  fontSize: "14px",
  fontWeight: "bold" as const,
  margin: "0",
};

const stepContent = {
  verticalAlign: "top" as const,
  paddingLeft: "8px",
};

const stepTitle = {
  fontSize: "15px",
  fontWeight: "bold" as const,
  color: "#111827",
  margin: "0 0 2px 0",
};

const stepDesc = {
  fontSize: "14px",
  color: "#6b7280",
  margin: "0",
  lineHeight: "20px",
};

// ── Final section ──

const finalSection = {
  textAlign: "center" as const,
};

const finalText = {
  fontSize: "15px",
  color: "#374151",
  lineHeight: "24px",
  margin: "0 0 4px 0",
};
