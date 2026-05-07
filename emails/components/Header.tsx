import { Img, Section, Text, Row, Column } from "@react-email/components";
import * as React from "react";

const LOGO_URL = "https://storage.googleapis.com/seemyhealth-email-assets/logo.png";

interface HeaderProps {
  title?: string;
}

export const Header = ({ title }: HeaderProps) => (
  <Section style={header}>
    <Row>
      <Column style={logoCol}>
        <Img src={LOGO_URL} width="44" height="44" alt="SeeMyHealth" style={logoImg} />
      </Column>
      <Column style={textCol}>
        <Text style={logoText}>SeeMyHealth</Text>
        {title && <Text style={titleStyle}>{title}</Text>}
      </Column>
    </Row>
  </Section>
);

const header = {
  borderBottom: "1px solid rgba(124, 58, 237, 0.12)",
  paddingBottom: "24px",
  marginBottom: "24px",
};

const logoCol = {
  width: "52px",
  verticalAlign: "middle" as const,
};

const logoImg = {
  borderRadius: "12px",
};

const textCol = {
  verticalAlign: "middle" as const,
  paddingLeft: "12px",
};

const logoText = {
  fontSize: "20px",
  fontWeight: "bold" as const,
  color: "#7c3aed",
  margin: "0",
};

const titleStyle = {
  fontSize: "13px",
  color: "#9ca3af",
  margin: "2px 0 0 0",
};
