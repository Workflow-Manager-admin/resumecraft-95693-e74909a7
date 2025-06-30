import React, { useRef } from "react";
import { ResumeData } from "./ResumeForm";
import { ResumeTemplateKey } from "./TemplateSelector";
import ModernTemplate from "./templates/ModernTemplate";
import SimpleTemplate from "./templates/SimpleTemplate";
import ElegantTemplate from "./templates/ElegantTemplate";

/**
 * PUBLIC_INTERFACE
 * Modern resume preview panel with enhanced styling and improved user experience
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
    
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${resume.personal.name || 'Resume'} - Resume</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    * { box-sizing: border-box; }
    body { 
      margin: 0; 
      padding: 20px; 
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      background: #fff;
      color: #1a1a1a;
      line-height: 1.6;
    }
    @media print {
      body { padding: 0; }
      @page { margin: 0.5in; }
    }
  </style>
</head>
<body>
  ${previewRef.current.innerHTML}
</body>
</html>`;
    
    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${resume.personal.name || 'resume'}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  function handlePrint() {
    if (!previewRef.current) return;
    
    const printWindow = window.open("", "_blank");
    if (printWindow) {
      printWindow.document.write(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Print Resume - ${resume.personal.name || 'Resume'}</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    * { box-sizing: border-box; }
    body { 
      margin: 0; 
      padding: 0; 
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      background: #fff;
      color: #1a1a1a;
      line-height: 1.6;
    }
    @media print {
      @page { 
        margin: 0.5in; 
        size: letter;
      }
    }
  </style>
</head>
<body>
  ${previewRef.current.innerHTML}
</body>
</html>`);
      printWindow.document.close();
      printWindow.focus();
      
      // Wait for fonts to load before printing
      setTimeout(() => {
        printWindow.print();
      }, 250);
    }
  }

  const TemplateComponent = TEMPLATES[templateKey] || ModernTemplate;

  return (
    <div className="space-y-4">
      {/* Preview Header */}
      <div className="flex items-center justify-between p-4 bg-background-card border border-border rounded-lg">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
          <div>
            <h3 className="font-medium text-foreground">Resume Preview</h3>
            <p className="text-sm text-muted">
              {resume.personal.name || "Your resume"} • {templateKey} template
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <button
            onClick={handleDownload}
            className="btn btn-accent btn-sm"
            title="Download as HTML file"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download
          </button>
          
          <button
            onClick={handlePrint}
            className="btn btn-secondary btn-sm"
            title="Print resume"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            Print
          </button>
        </div>
      </div>

      {/* Resume Preview */}
      <div className="card overflow-hidden">
        <div 
          ref={previewRef} 
          className="bg-white p-8 md:p-12 min-h-[800px] print-area"
          style={{ 
            maxWidth: '8.5in',
            margin: '0 auto',
            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
          }}
        >
          <TemplateComponent data={resume} />
        </div>
      </div>
      
      {/* Preview Tips */}
      <div className="bg-muted/50 border border-border rounded-lg p-4">
        <div className="flex items-start gap-3">
          <div className="w-5 h-5 text-accent mt-0.5">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="flex-1">
            <h4 className="font-medium text-foreground text-sm mb-1">Preview Tips</h4>
            <ul className="text-xs text-muted space-y-1">
              <li>• Changes in the form are reflected instantly in the preview</li>
              <li>• Download saves your resume as an HTML file for easy sharing</li>
              <li>• Print option opens a print-friendly version</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
