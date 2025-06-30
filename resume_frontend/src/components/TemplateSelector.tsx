'use client'

import { TemplateType } from '@/types/resume'

interface TemplateSelectorProps {
  selectedTemplate: TemplateType
  onTemplateChange: (template: TemplateType) => void
}

const templates = [
  {
    id: 'modern' as TemplateType,
    name: 'Modern',
    description: 'Clean and contemporary design',
    preview: 'bg-gradient-to-br from-blue-50 to-blue-100'
  },
  {
    id: 'classic' as TemplateType,
    name: 'Classic',
    description: 'Traditional professional layout',
    preview: 'bg-gradient-to-br from-gray-50 to-gray-100'
  },
  {
    id: 'creative' as TemplateType,
    name: 'Creative',
    description: 'Bold and eye-catching design',
    preview: 'bg-gradient-to-br from-orange-50 to-orange-100'
  },
  {
    id: 'professional' as TemplateType,
    name: 'Professional',
    description: 'Corporate-focused structured layout',
    preview: 'bg-gradient-to-br from-slate-50 to-slate-100'
  },
  {
    id: 'minimal' as TemplateType,
    name: 'Minimal',
    description: 'Simple and elegant typography',
    preview: 'bg-gradient-to-br from-gray-100 to-white'
  }
]

// PUBLIC_INTERFACE
export function TemplateSelector({ selectedTemplate, onTemplateChange }: TemplateSelectorProps) {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-medium text-gray-700">Choose Template</h3>
      <div className="grid grid-cols-5 gap-2">
        {templates.map((template) => (
          <button
            key={template.id}
            onClick={() => onTemplateChange(template.id)}
            className={`p-3 rounded-lg border-2 transition-all ${
              selectedTemplate === template.id
                ? 'border-blue-500 ring-2 ring-blue-200'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className={`w-full h-16 rounded ${template.preview} mb-2`} />
            <div className="text-xs font-medium text-gray-900">{template.name}</div>
            <div className="text-xs text-gray-500">{template.description}</div>
          </button>
        ))}
      </div>
    </div>
  )
}
