import { Img, Section, Text, Row, Column } from "@react-email/components";
import * as React from "react";

const LOGO_URL = "https://imagedelivery.net/NnC2JvU8j4bgBbmedVhjJg/logo/public";

interface HeaderProps {
  title?: string;
}

export const Header = ({ title }: HeaderProps) => (
  <Section style={header}>
    <Row>
      <Column style={logoCol}>
        <Img src={LOGO_URL} width="40" height="40" alt="SeeMyHealth" style={logoImg} />
      </Column>
      <Column style={textCol}>
        <Text style={logoText}>SeeMyHealth</Text>
        {title && <Text style={titleStyle}>{title}</Text>}
      </Column>
    </Row>
  </Section>
);

const header = {
  borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
  paddingBottom: "24px",
  marginBottom: "32px",
};

const logoCol = {
  width: "48px",
  verticalAlign: "middle" as const,
};

const logoImg = {
  borderRadius: "10px",
};

const textCol = {
  verticalAlign: "middle" as const,
  paddingLeft: "12px",
};

const logoText = {
  fontSize: "18px",
  fontWeight: "600" as const,
  color: "#ffffff",
  margin: "0",
  letterSpacing: "0.5px",
};

const titleStyle = {
  fontSize: "12px",
  color: "rgba(255, 255, 255, 0.4)",
  margin: "2px 0 0 0",
  textTransform: "uppercase" as const,
  letterSpacing: "1.5px",
};
