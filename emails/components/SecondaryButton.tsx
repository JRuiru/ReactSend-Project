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
  backgroundColor: "#ffffff",
  color: "#7c3aed",
  padding: "12px 24px",
  borderRadius: "8px",
  fontSize: "14px",
  fontWeight: "bold" as const,
  textDecoration: "none",
  textAlign: "center" as const,
  display: "inline-block",
  border: "1px solid rgba(124, 58, 237, 0.25)",
};
