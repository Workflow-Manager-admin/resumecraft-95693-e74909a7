"use client";
import React, { useState } from "react";
import ResumeForm, { ResumeData, defaultResumeData } from "@/components/ResumeForm";
import ResumePreview from "@/components/ResumePreview";
import TemplateSelector, { RESUME_TEMPLATES, ResumeTemplateKey } from "@/components/TemplateSelector";

/**
 * Accent palette:
 * primary:   #2563eb (blue)   -- buttons, title, major highlights
 * secondary: #64748b (grey)   -- nav, subtler text, chip borders
 * accent:    #f59e42 (orange) -- action, badge, stepper, skill tags
 */

/* Responsive modern split-screen layout, app wrapper, and typographic polish */
export default function Home() {
  // State for all form data and selected template
  const [resumeData, setResumeData] = useState<ResumeData>(defaultResumeData);
  const [templateKey, setTemplateKey] = useState<ResumeTemplateKey>("modern");

  return (
    <div className="min-h-screen w-full px-2 sm:px-6 bg-white dark:bg-[#0a0a0a] font-sans fade-in">
      <header className="pt-6 pb-3 md:py-10 px-1 md:px-6 lg:px-12">
        <h1
          className="text-[2rem] md:text-4xl font-bold tracking-tight text-primary mb-1"
          style={{ letterSpacing: "-0.5px", fontFamily: "var(--font-sans)" }}
        >
          Resume Builder <span className="text-accent text-xl md:text-2xl align-middle font-mono">Craft</span>
        </h1>
        <div className="text-secondary font-mono text-xs md:text-base">
          Build and preview your resume in real time. Choose a style, download, or print!
        </div>
      </header>
      {/* responsive split main */}
      <main className="flex resume-main-flex flex-col md:flex-row gap-6 md:gap-8 items-start w-full max-w-7xl mx-auto transition-all">
        <aside
          className="w-full md:w-[355px] md:min-w-[304px] bg-white dark:bg-[#171717] rounded-2xl border border-secondary/25 shadow-md p-3 md:sticky md:top-10 self-start transition-all"
          style={{ zIndex: 3 }}
        >
          <ResumeForm
            resumeData={resumeData}
            setResumeData={setResumeData}
          />
        </aside>
        <section className="flex-1 w-full flex flex-col gap-3 resume-preview-wrap transition-all">
          <TemplateSelector
            selected={templateKey}
            setSelected={setTemplateKey}
            templates={RESUME_TEMPLATES}
          />
          <ResumePreview
            resume={resumeData}
            templateKey={templateKey}
          />
        </section>
      </main>
      <footer className="text-center text-xs opacity-80 mt-14 pb-4 pt-10 select-none">
        &copy; {new Date().getFullYear()} <span className="text-accent font-semibold font-mono">ResumeCraft</span>{" "}
        &mdash; Modern Resume Builder
      </footer>
    </div>
  );
}
