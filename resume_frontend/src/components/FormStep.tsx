'use client'

import { PersonalInfoForm } from './forms/PersonalInfoForm'
import { SummaryForm } from './forms/SummaryForm'
import { ExperienceForm } from './forms/ExperienceForm'
import { EducationForm } from './forms/EducationForm'
import { SkillsForm } from './forms/SkillsForm'
import { ProjectsForm } from './forms/ProjectsForm'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface FormStepProps {
  step: number
  onNext: () => void
  onPrev: () => void
  isFirstStep: boolean
  isLastStep: boolean
}

// PUBLIC_INTERFACE
export function FormStep({ step, onNext, onPrev, isFirstStep, isLastStep }: FormStepProps) {
  const renderStepContent = () => {
    switch (step) {
      case 0:
        return <PersonalInfoForm />
      case 1:
        return <SummaryForm />
      case 2:
        return <ExperienceForm />
      case 3:
        return <EducationForm />
      case 4:
        return <SkillsForm />
      case 5:
        return <ProjectsForm />
      default:
        return <PersonalInfoForm />
    }
  }

  return (
    <div className="space-y-6">
      {renderStepContent()}
      
      <div className="flex justify-between pt-6 border-t border-gray-200">
        <button
          onClick={onPrev}
          disabled={isFirstStep}
          className={`flex items-center px-4 py-2 rounded-md transition-colors ${
            isFirstStep
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Previous
        </button>
        
        <button
          onClick={onNext}
          disabled={isLastStep}
          className={`flex items-center px-4 py-2 rounded-md transition-colors ${
            isLastStep
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          Next
          <ChevronRight className="w-4 h-4 ml-1" />
        </button>
      </div>
    </div>
  )
}
