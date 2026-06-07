import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: {
    default: "COREX Technologies",
    template: "%s | COREX Technologies",
  },

  description:
    "COREX Technologies builds intelligent ERP systems and AI-powered business solutions.",

  keywords: [
    "ERP Software",
    "Business Automation",
    "AI Automation",
    "AttendX",
    "CoreX Technologies",
  ],

  metadataBase: new URL("https://corextech.info"),

  openGraph: {
    title: "COREX Technologies",
    description:
      "Where Businesses Work Smarter",
    url: "https://corextech.info",
    siteName: "COREX Technologies",
    locale: "en_US",
    type: "website",
  },
};
