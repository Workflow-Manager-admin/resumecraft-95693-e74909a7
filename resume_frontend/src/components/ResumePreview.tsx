'use client'

import { ResumeData, TemplateType } from '@/types/resume'
import { ModernTemplate } from './templates/ModernTemplate'
import { ClassicTemplate } from './templates/ClassicTemplate'
import { CreativeTemplate } from './templates/CreativeTemplate'
import { ProfessionalTemplate } from './templates/ProfessionalTemplate'
import { MinimalTemplate } from './templates/MinimalTemplate'

interface ResumePreviewProps {
  data: ResumeData
  template: TemplateType
}

// PUBLIC_INTERFACE
export function ResumePreview({ data, template }: ResumePreviewProps) {
  const renderTemplate = () => {
    switch (template) {
      case 'modern':
        return <ModernTemplate data={data} />
      case 'classic':
        return <ClassicTemplate data={data} />
      case 'creative':
        return <CreativeTemplate data={data} />
      case 'professional':
        return <ProfessionalTemplate data={data} />
      case 'minimal':
        return <MinimalTemplate data={data} />
      default:
        return <ModernTemplate data={data} />
    }
  }

  return (
    <div 
      id="resume-preview" 
      className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm"
      style={{ aspectRatio: '8.5/11' }}
    >
      <div className="h-full overflow-y-auto">
        {renderTemplate()}
      </div>
    </div>
  )
}
