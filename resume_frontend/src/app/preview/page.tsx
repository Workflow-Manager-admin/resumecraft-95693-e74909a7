'use client'

import Link from 'next/link'
import { ResumePreview } from '@/components/ResumePreview'
import { TemplateSelector } from '@/components/TemplateSelector'
import { PrintDownloadActions } from '@/components/PrintDownloadActions'
import { useResumeContext } from '@/contexts/ResumeContext'
import { ArrowLeft, Edit3 } from 'lucide-react'

// PUBLIC_INTERFACE
export default function PreviewPage() {
  const { resumeData, selectedTemplate, setSelectedTemplate } = useResumeContext()

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header with navigation */}
        <header className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 rounded-md shadow-sm hover:bg-gray-50 transition-colors border border-gray-200"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Editor
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Resume Preview</h1>
              <p className="text-gray-600">Review and customize your resume</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              <Edit3 className="w-4 h-4" />
              Edit Resume
            </Link>
            <PrintDownloadActions resumeData={resumeData} template={selectedTemplate} />
          </div>
        </header>

        <div className="max-w-4xl mx-auto">
          {/* Template selector */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <TemplateSelector
              selectedTemplate={selectedTemplate}
              onTemplateChange={setSelectedTemplate}
            />
          </div>

          {/* Preview */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-center">
              <div className="w-full max-w-2xl">
                <ResumePreview
                  data={resumeData}
                  template={selectedTemplate}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
