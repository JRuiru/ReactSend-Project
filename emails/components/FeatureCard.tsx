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
  background: "linear-gradient(135deg, rgba(249,250,251,0.8) 0%, rgba(243,244,246,0.6) 100%)",
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)",
  borderRadius: "12px",
  padding: "24px",
  marginBottom: "12px",
  border: "1px solid rgba(229, 231, 235, 0.6)",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)",
};

const iconStyle = {
  marginBottom: "8px",
};

const cardTitle = {
  fontSize: "16px",
  fontWeight: "bold" as const,
  color: "#111827",
  margin: "0 0 4px 0",
};

const cardDescription = {
  fontSize: "14px",
  lineHeight: "22px",
  color: "#6b7280",
  margin: "0",
};
