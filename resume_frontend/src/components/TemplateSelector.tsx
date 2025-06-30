import React from "react";

// Define template keys and preview names
export const RESUME_TEMPLATES = [
  { key: "modern", name: "Modern (default)" },
  { key: "simple", name: "Simple" },
  { key: "elegant", name: "Elegant" },
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
    <div className="flex gap-3 items-end mb-3 w-full">
      <span className="text-[0.98rem] font-semibold text-secondary font-mono uppercase tracking-tight mr-2">Template:</span>
      <ul className="flex gap-2 flex-wrap">
        {templates.map((tpl) => (
          <li key={tpl.key}>
            <button
              className={`px-4 py-1.5 rounded-full border font-mono text-xs transition-all shadow-sm outline-none
                ${
                  selected === tpl.key
                    ? "bg-primary text-white border-primary font-semibold ring-2 ring-accent/30 shadow-md"
                    : "border-secondary hover:border-accent hover:text-accent bg-white dark:bg-[#1d2430] text-secondary"
                }
                `}
              style={{
                minWidth: 90,
                letterSpacing: "0.01em",
              }}
              tabIndex={0}
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
