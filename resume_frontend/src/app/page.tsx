'use client'

import { useState } from 'react'
import { FormProvider } from '@/components/FormProvider'
import { FormStep } from '@/components/FormStep'
import { ResumePreview } from '@/components/ResumePreview'
import { TemplateSelector } from '@/components/TemplateSelector'
import { StepNavigation } from '@/components/StepNavigation'
import { PrintDownloadActions } from '@/components/PrintDownloadActions'
import { ResumeData, TemplateType } from '@/types/resume'
import { getSampleResumeData } from '@/utils/sampleData'
import { Eye } from 'lucide-react'

// PUBLIC_INTERFACE
export default function Home() {
  const [currentStep, setCurrentStep] = useState(0)
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateType>('modern')
  const [resumeData, setResumeData] = useState<ResumeData>({
    personalInfo: {
      fullName: '',
      email: '',
      phone: '',
      location: '',
      linkedIn: '',
      portfolio: ''
    },
    summary: '',
    experience: [],
    education: [],
    skills: [],
    projects: []
  })

  const steps = [
    'Personal Info',
    'Summary',
    'Experience',
    'Education',
    'Skills',
    'Projects'
  ]

  const loadSampleData = () => {
    setResumeData(getSampleResumeData())
  }

  return (
    <FormProvider value={{ resumeData, setResumeData }}>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <header className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Resume Builder</h1>
            <p className="text-gray-600 mb-4">Create your professional resume in minutes</p>
            <button
              onClick={loadSampleData}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors text-sm"
            >
              <Eye className="w-4 h-4" />
              Load Sample Data
            </button>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form Section */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <StepNavigation
                steps={steps}
                currentStep={currentStep}
                onStepClick={setCurrentStep}
              />
              
              <div className="mt-8">
                <FormStep
                  step={currentStep}
                  onNext={() => setCurrentStep(Math.min(currentStep + 1, steps.length - 1))}
                  onPrev={() => setCurrentStep(Math.max(currentStep - 1, 0))}
                  isFirstStep={currentStep === 0}
                  isLastStep={currentStep === steps.length - 1}
                />
              </div>
            </div>

            {/* Preview Section */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Preview</h2>
                <PrintDownloadActions resumeData={resumeData} template={selectedTemplate} />
              </div>
              
              <TemplateSelector
                selectedTemplate={selectedTemplate}
                onTemplateChange={setSelectedTemplate}
              />
              
              <div className="mt-6">
                <ResumePreview
                  data={resumeData}
                  template={selectedTemplate}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </FormProvider>
  )
}
