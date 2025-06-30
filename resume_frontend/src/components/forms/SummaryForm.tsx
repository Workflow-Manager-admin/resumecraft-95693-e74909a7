'use client'

import { useFormContext } from '../FormProvider'
import { FileText } from 'lucide-react'

// PUBLIC_INTERFACE
export function SummaryForm() {
  const { resumeData, setResumeData } = useFormContext()

  const updateSummary = (value: string) => {
    setResumeData(prev => ({
      ...prev,
      summary: value
    }))
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Professional Summary</h2>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <FileText className="w-4 h-4 inline mr-2" />
          Summary
        </label>
        <textarea
          value={resumeData.summary}
          onChange={(e) => updateSummary(e.target.value)}
          rows={6}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          placeholder="Write a brief professional summary highlighting your key skills, experience, and career objectives..."
        />
        <p className="text-sm text-gray-500 mt-2">
          Tip: Keep it concise (2-3 sentences) and focus on your most relevant achievements and skills.
        </p>
      </div>
    </div>
  )
}
