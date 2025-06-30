"use client";
import React, { useState } from "react";
import ResumeForm, { ResumeData, defaultResumeData } from "@/components/ResumeForm";
import ResumePreview from "@/components/ResumePreview";
import TemplateSelector, { RESUME_TEMPLATES, ResumeTemplateKey } from "@/components/TemplateSelector";

const bg = "bg-white dark:bg-[#0a0a0a]";
const border = "border border-secondary dark:border-secondary/40";
const shadow = "shadow-sm";

export default function Home() {
  // State for all form data and selected template
  const [resumeData, setResumeData] = useState<ResumeData>(defaultResumeData);
  const [templateKey, setTemplateKey] = useState<ResumeTemplateKey>("modern");

  return (
    <div className={`min-h-screen w-full px-2 sm:px-6 ${bg} font-sans`}>
      <h1 className="text-3xl font-bold tracking-tight my-6 text-primary mb-2">
        Resume Builder
      </h1>
      <section className="flex flex-col gap-4 md:flex-row md:items-start">
        <div
          className={`w-full md:w-[340px] md:min-w-[304px] ${bg} ${border} ${shadow} rounded-xl p-3 md:sticky md:top-6 self-start`}
        >
          <ResumeForm
            resumeData={resumeData}
            setResumeData={setResumeData}
          />
        </div>
        <div className={`flex-1 w-full flex flex-col gap-3`}>
          <TemplateSelector
            selected={templateKey}
            setSelected={setTemplateKey}
            templates={RESUME_TEMPLATES}
          />
          <ResumePreview
            resume={resumeData}
            templateKey={templateKey}
          />
        </div>
      </section>
      <footer className="text-center text-xs opacity-60 mt-12 pb-4 pt-8">
        &copy; {new Date().getFullYear()} ResumeCraft | Modern Resume Builder
      </footer>
    </div>
  );
}
