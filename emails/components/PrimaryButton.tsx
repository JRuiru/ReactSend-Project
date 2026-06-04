import { Button } from "@react-email/components";
import * as React from "react";

interface PrimaryButtonProps {
  href: string;
  children: React.ReactNode;
}

export const PrimaryButton = ({ href, children }: PrimaryButtonProps) => (
  <Button href={href} style={button} className="dark-safe primary-btn">
    {children}
  </Button>
);

const button = {
  backgroundColor: "#ffffff",
  color: "#0a0a0a",
  padding: "14px 32px",
  borderRadius: "50px",
  fontSize: "14px",
  fontWeight: "600" as const,
  textDecoration: "none",
  textAlign: "center" as const,
  display: "inline-block",
  letterSpacing: "0.5px",
  textTransform: "uppercase" as const,
};
