import React, { useRef } from "react";
import { ResumeData } from "./ResumeForm";
import { ResumeTemplateKey } from "./TemplateSelector";
import ModernTemplate from "./templates/ModernTemplate";
import SimpleTemplate from "./templates/SimpleTemplate";
import ElegantTemplate from "./templates/ElegantTemplate";

/**
 * PUBLIC_INTERFACE
 * Preview panel for the resume with download and print buttons, styled for modern/minimal experience.
 */
type Props = {
  resume: ResumeData;
  templateKey: ResumeTemplateKey;
};

const TEMPLATES = {
  modern: ModernTemplate,
  simple: SimpleTemplate,
  elegant: ElegantTemplate,
};

export default function ResumePreview({ resume, templateKey }: Props) {
  const previewRef = useRef<HTMLDivElement>(null);

  // Download as HTML file
  function handleDownload() {
    if (!previewRef.current) return;
    const html = `
      <html><head><meta charset="utf-8"><title>Resume</title>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Fira+Mono&display=swap" rel="stylesheet"/>
        <style>
          body { background: #fff; margin:0; font-family: Inter,Arial,sans-serif;}
        </style>
      </head>
      <body>${previewRef.current.innerHTML}</body></html>
    `;
    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "resume.html";
    a.click();
    URL.revokeObjectURL(url);
  }

  function handlePrint() {
    if (!previewRef.current) return;
    // Open a new window just for printing the resume.
    const popup = window.open("", "_blank");
    if (popup) {
      popup.document.write(`
        <html><head><meta charset="utf-8">
        <title>Print Resume</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet"/>
        <style>body{margin:0;padding:0;background:#fff;}</style>
        </head>
        <body>${previewRef.current.innerHTML}</body></html>
      `);
      popup.document.close();
      popup.focus();
      popup.print();
    }
  }

  const TemplateComponent = TEMPLATES[templateKey] || ModernTemplate;

  return (
    <div className="rounded-2xl bg-white/90 border border-secondary/25 p-4 pb-6 shadow-xl relative overflow-x-auto max-w-[900px] mx-auto transition-all resume-preview-wrap">
      <div className="flex items-center justify-end gap-3 mb-1 mr-2">
        <button
          onClick={handleDownload}
          className="text-xs px-4 py-1.5 select-none rounded-full border-2 font-semibold tracking-tight border-accent bg-accent text-white hover:bg-accent/90 shadow transition-all outline-none focus:ring-2 focus:ring-primary/40"
          title="Download as HTML"
        >
          Download
        </button>
        <button
          onClick={handlePrint}
          className="text-xs px-4 py-1.5 select-none rounded-full border-2 border-primary text-primary font-semibold tracking-tight bg-white hover:bg-primary/10 shadow-sm transition-all outline-none focus:ring-2 focus:ring-accent/40"
          title="Print"
        >
          Print
        </button>
      </div>
      <div ref={previewRef} className="print-preview bg-white md:min-h-[800px] overflow-x-auto">
        <TemplateComponent data={resume} />
      </div>
      <style jsx>{`
        .print-preview {
          font-family: Inter, Arial, sans-serif;
          color: #222;
          padding: 30px;
          border-radius: 12px;
          margin: 0 auto;
          background: #fff;
          min-height: 520px;
          box-shadow: 0 3px 24px 0 rgba(85, 118, 180, 0.10);
        }
        @media (max-width: 700px) {
          .print-preview { padding: 7px 1px; }
        }
        @media (max-width: 480px) {
          .print-preview { padding: 2px 0; min-height: 410px;}
        }
      `}</style>
    </div>
  );
}
