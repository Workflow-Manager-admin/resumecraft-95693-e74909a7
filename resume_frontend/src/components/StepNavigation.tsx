'use client'

import { Check } from 'lucide-react'

interface StepNavigationProps {
  steps: string[]
  currentStep: number
  onStepClick: (step: number) => void
}

// PUBLIC_INTERFACE
export function StepNavigation({ steps, currentStep, onStepClick }: StepNavigationProps) {
  return (
    <div className="flex items-center justify-between mb-8">
      {steps.map((step, index) => (
        <div key={step} className="flex items-center">
          <button
            onClick={() => onStepClick(index)}
            className={`flex items-center justify-center w-8 h-8 rounded-full border-2 text-sm font-medium transition-colors ${
              index < currentStep
                ? 'bg-blue-600 border-blue-600 text-white'
                : index === currentStep
                ? 'border-blue-600 text-blue-600 bg-white'
                : 'border-gray-300 text-gray-400 bg-white hover:border-gray-400'
            }`}
          >
            {index < currentStep ? (
              <Check className="w-4 h-4" />
            ) : (
              index + 1
            )}
          </button>
          
          {index < steps.length - 1 && (
            <div
              className={`w-12 h-0.5 mx-2 ${
                index < currentStep ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          )}
        </div>
      ))}
    </div>
  )
}
