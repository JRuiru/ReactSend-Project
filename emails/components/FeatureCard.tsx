import { Section, Img, Text } from "@react-email/components";
import * as React from "react";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <Section style={card}>
    <Img src={icon} width="40" height="40" alt={title} style={iconStyle} />
    <Text style={cardTitle}>{title}</Text>
    <Text style={cardDescription}>{description}</Text>
  </Section>
);

const card = {
  backgroundColor: "#141414",
  borderRadius: "12px",
  padding: "24px",
  marginBottom: "12px",
  border: "1px solid #1a1a1a",
};

const iconStyle = {
  marginBottom: "8px",
};

const cardTitle = {
  fontSize: "16px",
  fontWeight: "bold" as const,
  color: "#f5f5f5",
  margin: "0 0 4px 0",
};

const cardDescription = {
  fontSize: "14px",
  lineHeight: "22px",
  color: "#8a8a8a",
  margin: "0",
};
