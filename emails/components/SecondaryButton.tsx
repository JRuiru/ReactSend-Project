import { Button } from "@react-email/components";
import * as React from "react";

interface SecondaryButtonProps {
  href: string;
  children: React.ReactNode;
}

export const SecondaryButton = ({ href, children }: SecondaryButtonProps) => (
  <Button href={href} style={button}>
    {children}
  </Button>
);

const button = {
  backgroundColor: "transparent",
  color: "#ffffff",
  padding: "12px 28px",
  borderRadius: "50px",
  fontSize: "14px",
  fontWeight: "600" as const,
  textDecoration: "none",
  textAlign: "center" as const,
  display: "inline-block",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  letterSpacing: "0.5px",
  textTransform: "uppercase" as const,
};
