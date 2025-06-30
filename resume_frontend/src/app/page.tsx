"use client";
import React, { useState } from "react";
import ResumeForm, { ResumeData, defaultResumeData } from "@/components/ResumeForm";
import ResumePreview from "@/components/ResumePreview";
import TemplateSelector, { RESUME_TEMPLATES, ResumeTemplateKey } from "@/components/TemplateSelector";

/**
 * PUBLIC_INTERFACE
 * Main Resume Builder application with modern responsive design
 * Features: Split-screen layout, real-time preview, template selection, responsive design
 */
export default function Home() {
  const [resumeData, setResumeData] = useState<ResumeData>(defaultResumeData);
  const [templateKey, setTemplateKey] = useState<ResumeTemplateKey>("modern");

  return (
    <div className="min-h-screen bg-background">
      {/* Enhanced Header */}
      <header className="container py-8 md:py-12">
        <div className="text-center md:text-left fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-3 tracking-tight">
            Resume<span className="text-accent">Craft</span>
          </h1>
          <p className="text-lg text-secondary max-w-2xl">
            Build your professional resume with our modern, responsive builder. 
            Choose from multiple templates and see your changes in real-time.
          </p>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="container pb-16">
        <div className="resume-layout">
          {/* Form Sidebar */}
          <aside className="resume-form-sidebar slide-in">
            <div className="card p-6 md:p-8">
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-foreground mb-2">
                  Build Your Resume
                </h2>
                <p className="text-sm text-secondary">
                  Fill out the form below to create your professional resume
                </p>
              </div>
              <ResumeForm
                resumeData={resumeData}
                setResumeData={setResumeData}
              />
            </div>
          </aside>

          {/* Preview Area */}
          <section className="resume-preview-area fade-in animate-delay-200">
            <div className="space-y-6">
              {/* Template Selector */}
              <div className="card p-4 md:p-6">
                <TemplateSelector
                  selected={templateKey}
                  setSelected={setTemplateKey}
                  templates={RESUME_TEMPLATES}
                />
              </div>

              {/* Resume Preview */}
              <ResumePreview
                resume={resumeData}
                templateKey={templateKey}
              />
            </div>
          </section>
        </div>
      </main>

      {/* Enhanced Footer */}
      <footer className="container py-8 text-center border-t border-border">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} 
          <span className="font-semibold text-accent ml-1">ResumeCraft</span>
          <span className="mx-2">•</span>
          Professional Resume Builder
        </p>
      </footer>
    </div>
  );
}
