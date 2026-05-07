import { Img, Section, Text } from "@react-email/components";
import * as React from "react";

interface HeaderProps {
  title?: string;
}

export const Header = ({ title }: HeaderProps) => (
  <Section style={header}>
    <Text style={logoText}>SeeMyHealth</Text>
    {title && <Text style={titleStyle}>{title}</Text>}
  </Section>
);

const header = {
  borderBottom: "1px solid #e5e7eb",
  paddingBottom: "24px",
  marginBottom: "24px",
};

const logoText = {
  fontSize: "20px",
  fontWeight: "bold" as const,
  color: "#111827",
  margin: "0",
};

const titleStyle = {
  fontSize: "14px",
  color: "#6b7280",
  margin: "4px 0 0 0",
};
