import { Button } from "@react-email/components";
import * as React from "react";

interface PrimaryButtonProps {
  href: string;
  children: React.ReactNode;
}

export const PrimaryButton = ({ href, children }: PrimaryButtonProps) => (
  <Button href={href} style={button}>
    {children}
  </Button>
);

const button = {
  backgroundColor: "#000000",
  color: "#ffffff",
  padding: "12px 24px",
  borderRadius: "8px",
  fontSize: "14px",
  fontWeight: "bold" as const,
  textDecoration: "none",
  textAlign: "center" as const,
  display: "inline-block",
};
