import React from "react";

// Define template keys and preview names
export const RESUME_TEMPLATES = [
  { key: "modern", name: "Modern", description: "Clean and professional" },
  { key: "simple", name: "Simple", description: "Minimalist design" },
  { key: "elegant", name: "Elegant", description: "Sophisticated layout" },
] as const;

export type ResumeTemplateKey = typeof RESUME_TEMPLATES[number]["key"];

type Props = {
  selected: ResumeTemplateKey;
  setSelected: (key: ResumeTemplateKey) => void;
  templates: typeof RESUME_TEMPLATES;
};

/**
 * PUBLIC_INTERFACE
 * Modern template selector with enhanced visual design and accessibility
 */
export default function TemplateSelector({ selected, setSelected, templates }: Props) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Choose Template</h3>
          <p className="text-sm text-muted">Select a style that best represents you</p>
        </div>
        <div className="text-xs text-muted bg-muted px-2 py-1 rounded-full">
          {templates.length} templates
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {templates.map((template) => (
          <button
            key={template.key}
            onClick={() => setSelected(template.key)}
            className={`card-interactive p-4 text-left transition-all focus-ring ${
              selected === template.key
                ? "ring-2 ring-primary bg-primary/5 border-primary"
                : "hover:border-accent/50"
            }`}
            aria-pressed={selected === template.key}
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <h4 className={`font-medium ${
                  selected === template.key ? "text-primary" : "text-foreground"
                }`}>
                  {template.name}
                </h4>
                <p className="text-xs text-muted mt-1">
                  {template.description}
                </p>
              </div>
              
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                selected === template.key
                  ? "border-primary bg-primary"
                  : "border-border"
              }`}>
                {selected === template.key && (
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
            </div>
            
            {/* Template Preview */}
            <div className="mt-3 p-2 bg-muted rounded border">
              <div className="space-y-1">
                <div className={`h-2 rounded ${
                  template.key === "modern" ? "bg-primary" :
                  template.key === "simple" ? "bg-secondary" : "bg-accent"
                } w-3/4`} />
                <div className="h-1 bg-border rounded w-full" />
                <div className="h-1 bg-border rounded w-5/6" />
                <div className="h-1 bg-border rounded w-2/3" />
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
