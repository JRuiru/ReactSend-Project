/**
 * Send a test email using a rendered React Email template.
 *
 * Usage:
 *   npm run test-send -- welcome you@email.com
 *   npm run test-send -- password-reset you@email.com
 *   npm run test-send -- appointment-reminder you@email.com
 */
import "dotenv/config";
import sgMail from "@sendgrid/mail";
import { render } from "@react-email/render";
import * as path from "path";
import * as fs from "fs";

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
if (!SENDGRID_API_KEY) {
  console.error("Missing SENDGRID_API_KEY in .env");
  process.exit(1);
}

// You need a verified sender in SendGrid
const FROM_EMAIL = process.env.FROM_EMAIL || "noreply@seemyhealth.ai";

sgMail.setApiKey(SENDGRID_API_KEY);

// Load template map for subject lines
const MAP_PATH = path.resolve(__dirname, "../template-map.json");
const templateMap = JSON.parse(fs.readFileSync(MAP_PATH, "utf-8"));

// Test data for each template — SendGrid {{variables}} get replaced with these
const TEST_DATA: Record<string, Record<string, string>> = {
  welcome: {
    first_name: "John",
    user_id: "test-user-123",
  },
  "appointment-reminder": {
    first_name: "John",
    doctor_name: "Dr. Sarah Chen",
    doctor_specialty: "Cardiologist",
    appointment_date: "May 20, 2026",
    appointment_time: "10:30 AM",
    appointment_id: "appt-001",
    visit_type: "In-Person",
    location: "123 Health St, Suite 200, Nairobi",
    duration: "30 minutes",
    time_until: "24 hours",
  },
  "challenge-won": {
    first_name: "John",
    challenge_name: "10K Steps Daily",
    challenge_category: "MOVEMENT",
    challenge_type: "Steps",
    goal_type: "Most Total",
    final_rank: "#1",
    your_score: "142,500",
    total_participants: "24",
    start_date: "Apr 1, 2026",
    end_date: "Apr 30, 2026",
    duration: "30 days",
    achievement_name: "Steps Champion",
    personal_best: "18,200 steps",
    longest_streak: "22",
    improvement: "+34%",
  },
  "family-invite": {
    first_name: "Sarah",
    inviter_name: "John",
    invite_id: "invite-001",
  },
  "password-reset": {
    first_name: "John",
    email: "john@example.com",
    reset_token: "test-token-abc123",
    expiry_time: "30 minutes",
  },
  "health-report": {
    first_name: "John",
    report_period: "Apr 1 – Apr 30, 2026",
    report_period_label: "month",
    report_id: "report-001",
    avg_steps: "8,420",
    steps_change: "+12%",
    steps_trend: "up",
    avg_sleep: "7.2h",
    sleep_change: "+0.4h",
    sleep_trend: "up",
    avg_heart_rate: "68",
    hr_change: "-2 bpm",
    hr_trend: "down",
    avg_calories: "2,150",
    cal_change: "-5%",
    cal_trend: "down",
    avg_water: "2.1L",
    water_change: "+0.3L",
    water_trend: "up",
    workouts: "14",
    workout_change: "+3",
    workout_trend: "up",
    goal_1_name: "Daily Steps",
    goal_1_progress: "8,420",
    goal_1_target: "10,000",
    goal_1_percent: "84%",
    goal_2_name: "Sleep Duration",
    goal_2_progress: "7.2h",
    goal_2_target: "8h",
    goal_2_percent: "90%",
    goal_3_name: "Weekly Workouts",
    goal_3_progress: "3.5",
    goal_3_target: "4",
    goal_3_percent: "88%",
    avg_bp: "118/76",
    resting_hr: "62",
    avg_hrv: "45",
    avg_spo2: "97",
    current_weight: "74.2 kg",
    avg_mood_emoji: "😊",
    avg_mood: "Good",
    journal_count: "12",
    mood_streak: "8",
  },
  "device-connected": {
    first_name: "John",
    device_name: "The Ring One",
    device_category: "WEARABLE",
    tracking_1: "Sleep duration and quality",
    tracking_2: "Heart rate and HRV",
    tracking_3: "SpO2 and temperature",
    tracking_4: "Steps, calories, and activity",
  },
  "challenge-invite": {
    first_name: "John",
    inviter_name: "Sarah",
    challenge_name: "30-Day Step Challenge",
    challenge_category: "MOVEMENT",
    challenge_description: "Walk 10,000 steps every day for 30 days. The person with the most total steps wins!",
    challenge_goal: "10,000 steps/day",
    challenge_id: "challenge-001",
    start_date: "Jun 1, 2026",
    end_date: "Jun 30, 2026",
    duration: "30 days",
    participant_count: "12",
    goal_type: "Most Total",
  },
  "achievement-unlocked": {
    first_name: "John",
    achievement_icon: "🏆",
    achievement_name: "Steps Champion",
    achievement_description: "Walk over 10,000 steps every day for 30 consecutive days.",
    earned_date: "May 7, 2026",
    achievement_category: "Movement",
    achievement_criteria: "10,000+ steps daily for 30 days straight",
    total_achievements: "12",
    achievements_remaining: "23",
  },
  "streak-milestone": {
    first_name: "John",
    streak_count: "30",
    streak_category: "Movement",
    streak_goal: "10,000 steps per day",
    streak_start_date: "Apr 7, 2026",
    personal_record: "45",
    avg_performance: "11,240 steps/day",
    milestone_14_icon: "✅",
    milestone_30_icon: "✅",
    milestone_60_icon: "⭕",
    milestone_100_icon: "⭕",
  },
  "re-engagement": {
    first_name: "John",
    days_inactive: "14",
    unsynced_days: "12",
    active_goal: "Daily 10K Steps",
    last_streak: "18",
    friend_activity: "8",
    active_challenges: "3",
    new_feature_1_title: "AI Health Insights",
    new_feature_1_desc: "Get personalized health recommendations powered by AI based on your data.",
    new_feature_2_title: "Group Challenges",
    new_feature_2_desc: "Create or join group challenges and compete with friends.",
  },
  "friend-request": {
    first_name: "John",
    requester_name: "Sarah Kimani",
    requester_avatar_url: "https://storage.googleapis.com/seemyhealth-email-assets/logo.png",
    requester_bio: "Fitness enthusiast on a wellness journey",
    requester_challenges: "8",
    requester_achievements: "15",
    requester_friends: "42",
    request_id: "req-001",
  },
  "group-invite": {
    first_name: "John",
    inviter_name: "Sarah Kimani",
    group_name: "Nairobi Runners",
    group_description: "A community of runners in Nairobi pushing each other to hit new milestones.",
    member_count: "34",
    group_category: "Running & Cardio",
    created_date: "Jan 15, 2026",
    active_challenges: "2",
    group_id: "group-001",
  },
};

function replacePlaceholders(html: string, data: Record<string, string>): string {
  let result = html;
  for (const [key, value] of Object.entries(data)) {
    result = result.replace(new RegExp(`\\{\\{${key}\\}\\}`, "g"), value);
  }
  return result;
}

async function main() {
  const templateKey = process.argv[2];
  const toEmail = process.argv[3];

  if (!templateKey || !toEmail) {
    console.log("\nUsage: npm run test-send -- <template> <email>\n");
    console.log("Available templates:");
    for (const key of Object.keys(templateMap)) {
      console.log(`  ${key}`);
    }
    console.log("\nExample: npm run test-send -- welcome john@example.com\n");
    process.exit(0);
  }

  if (!templateMap[templateKey]) {
    console.error(`Template "${templateKey}" not found in template-map.json`);
    process.exit(1);
  }

  const testData = TEST_DATA[templateKey];
  if (!testData) {
    console.error(`No test data defined for "${templateKey}" — add it to scripts/test-send.ts`);
    process.exit(1);
  }

  console.log(`\nRendering "${templateKey}"...`);

  const mod = await import(
    path.resolve(__dirname, `../emails/templates/${templateMap[templateKey].module}.tsx`)
  );
  const Component = mod.default;
  let html = await render(Component());

  // Replace SendGrid {{variables}} with test data
  html = replacePlaceholders(html, testData);

  // Also replace subject placeholders
  let subject = templateMap[templateKey].subject;
  subject = replacePlaceholders(subject, testData);

  console.log(`Sending to ${toEmail}...`);
  console.log(`Subject: ${subject}`);
  console.log(`From: ${FROM_EMAIL}`);

  try {
    await sgMail.send({
      to: toEmail,
      from: FROM_EMAIL,
      subject,
      html,
    });
    console.log(`\n✓ Sent! Check ${toEmail}\n`);
  } catch (err: any) {
    console.error("\n✗ Failed:", err?.response?.body || err.message);
    process.exit(1);
  }
}

main();
