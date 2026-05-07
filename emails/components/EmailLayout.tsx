import { Html, Head, Body, Container, Preview } from "@react-email/components";
import * as React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface EmailLayoutProps {
  preview: string;
  title?: string;
  children: React.ReactNode;
}

export const EmailLayout = ({ preview, title, children }: EmailLayoutProps) => (
  <Html>
    <Head />
    <Preview>{preview}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Header title={title} />
        {children}
        <Footer />
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: "#f9fafb",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "40px auto",
  padding: "40px",
  maxWidth: "560px",
  borderRadius: "12px",
};
