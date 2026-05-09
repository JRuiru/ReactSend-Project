import { Button } from "@react-email/components";
import * as React from "react";

interface PrimaryButtonProps {
  href: string;
  children: React.ReactNode;
}

export const PrimaryButton = ({ href, children }: PrimaryButtonProps) => (
  <Button href={href} style={button} className="dark-safe">
    {children}
  </Button>
);

const button = {
  background: "linear-gradient(135deg, #7c3aed, #a855f7)",
  color: "#ffffff",
  padding: "14px 28px",
  borderRadius: "10px",
  fontSize: "15px",
  fontWeight: "bold" as const,
  textDecoration: "none",
  textAlign: "center" as const,
  display: "inline-block",
  boxShadow: "0 4px 14px rgba(124, 58, 237, 0.35)",
};
