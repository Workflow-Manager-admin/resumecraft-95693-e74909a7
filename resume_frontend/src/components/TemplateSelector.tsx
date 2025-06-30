import React from "react";

// Define template keys and preview names
export const RESUME_TEMPLATES = [
  { key: "modern", name: "Modern (default)" },
  { key: "simple", name: "Simple" },
  { key: "elegant", name: "Elegant" }
] as const;
export type ResumeTemplateKey = typeof RESUME_TEMPLATES[number]["key"];

type Props = {
  selected: ResumeTemplateKey;
  setSelected: (key: ResumeTemplateKey) => void;
  templates: typeof RESUME_TEMPLATES;
};

/**
 * PUBLIC_INTERFACE
 * Select from a small set of resume templates.
 */
export default function TemplateSelector({ selected, setSelected, templates }: Props) {
  return (
    <div className="flex gap-2 items-end mb-2">
      <span className="text-sm font-medium text-secondary">Template:</span>
      <ul className="flex gap-2">
        {templates.map((tpl) => (
          <li key={tpl.key}>
            <button
              className={`px-3 py-1 rounded-full border text-xs ${
                selected === tpl.key
                  ? "bg-primary text-white border-primary shadow"
                  : "border-secondary hover:bg-secondary/10"
              }`}
              aria-pressed={selected === tpl.key}
              onClick={() => setSelected(tpl.key)}
              type="button"
            >
              {tpl.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
