'use client'

import { createContext, useContext, ReactNode } from 'react'
import { ResumeData } from '@/types/resume'

interface FormContextType {
  resumeData: ResumeData
  setResumeData: (data: ResumeData | ((prev: ResumeData) => ResumeData)) => void
}

const FormContext = createContext<FormContextType | undefined>(undefined)

interface FormProviderProps {
  children: ReactNode
  value: FormContextType
}

// PUBLIC_INTERFACE
export function FormProvider({ children, value }: FormProviderProps) {
  return (
    <FormContext.Provider value={value}>
      {children}
    </FormContext.Provider>
  )
}

// PUBLIC_INTERFACE
export function useFormContext() {
  const context = useContext(FormContext)
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider')
  }
  return context
}
