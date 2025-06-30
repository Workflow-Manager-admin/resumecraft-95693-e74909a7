import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ResumeCraft - Professional Resume Builder",
  description: "Create stunning, professional resumes with our modern resume builder. Choose from multiple templates, get real-time previews, and download instantly.",
  keywords: "resume builder, cv maker, professional resume, job application, career tools",
  authors: [{ name: "ResumeCraft" }],
  robots: "index, follow",
  openGraph: {
    title: "ResumeCraft - Professional Resume Builder",
    description: "Build your professional resume with our modern, responsive builder. Multiple templates available.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ResumeCraft - Professional Resume Builder",
    description: "Create stunning resumes with our modern builder",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2563eb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
