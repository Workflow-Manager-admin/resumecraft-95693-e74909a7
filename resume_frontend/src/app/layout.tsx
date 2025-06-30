import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ResumeProvider } from "@/contexts/ResumeContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Resume Builder - Create Professional Resumes",
  description: "Create professional resumes with our easy-to-use resume builder. Choose from multiple templates and download or print your resume.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ResumeProvider>
          {children}
        </ResumeProvider>
      </body>
    </html>
  );
}
