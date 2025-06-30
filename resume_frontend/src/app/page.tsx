'use client'

import Link from 'next/link'
import { FormProvider } from '@/components/FormProvider'
import { FormStep } from '@/components/FormStep'
import { StepNavigation } from '@/components/StepNavigation'
import { useResumeContext } from '@/contexts/ResumeContext'
import { getSampleResumeData } from '@/utils/sampleData'
import { Eye, FileText, ArrowRight, RotateCcw } from 'lucide-react'

// PUBLIC_INTERFACE
export default function Home() {
  const { 
    resumeData, 
    setResumeData, 
    currentStep, 
    setCurrentStep,
    clearData
  } = useResumeContext()

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
            <div className="flex justify-center gap-4">
              <button
                onClick={loadSampleData}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors text-sm"
              >
                <Eye className="w-4 h-4" />
                Load Sample Data
              </button>
              <button
                onClick={clearData}
                className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors text-sm"
              >
                <RotateCcw className="w-4 h-4" />
                Clear All Data
              </button>
            </div>
          </header>

          <div className="max-w-4xl mx-auto">
            {/* Form Section */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
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

            {/* Preview Action Section */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="mb-6">
                <FileText className="w-16 h-16 mx-auto text-blue-600 mb-4" />
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">Ready to Preview?</h2>
                <p className="text-gray-600 mb-6">
                  View your resume with different templates and download when ready
                </p>
              </div>
              
              <Link
                href="/preview"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-lg font-medium"
              >
                Preview Resume
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              <div className="mt-4 text-sm text-gray-500">
                Your progress is automatically saved
              </div>
            </div>
          </div>
        </div>
      </div>
    </FormProvider>
  )
}
