'use client'

import { createContext, useContext, ReactNode, useState, useEffect } from 'react'
import { ResumeData, TemplateType } from '@/types/resume'

interface ResumeContextType {
  resumeData: ResumeData
  setResumeData: (data: ResumeData | ((prev: ResumeData) => ResumeData)) => void
  selectedTemplate: TemplateType
  setSelectedTemplate: (template: TemplateType) => void
  currentStep: number
  setCurrentStep: (step: number) => void
  clearData: () => void
}

const defaultResumeData: ResumeData = {
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
}

const ResumeContext = createContext<ResumeContextType | undefined>(undefined)

interface ResumeProviderProps {
  children: ReactNode
}

// PUBLIC_INTERFACE
export function ResumeProvider({ children }: ResumeProviderProps) {
  const [resumeData, setResumeData] = useState<ResumeData>(defaultResumeData)
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateType>('modern')
  const [currentStep, setCurrentStep] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  // Load data from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const savedData = localStorage.getItem('resumeBuilderData')
        if (savedData) {
          const parsed = JSON.parse(savedData)
          setResumeData(parsed.resumeData || defaultResumeData)
          setSelectedTemplate(parsed.selectedTemplate || 'modern')
          setCurrentStep(parsed.currentStep || 0)
        }
      } catch (error) {
        console.error('Error loading resume data from localStorage:', error)
      }
      setIsLoaded(true)
    }
  }, [])

  // Save data to localStorage whenever it changes
  useEffect(() => {
    if (isLoaded && typeof window !== 'undefined') {
      try {
        const dataToSave = {
          resumeData,
          selectedTemplate,
          currentStep
        }
        localStorage.setItem('resumeBuilderData', JSON.stringify(dataToSave))
      } catch (error) {
        console.error('Error saving resume data to localStorage:', error)
      }
    }
  }, [resumeData, selectedTemplate, currentStep, isLoaded])

  const clearData = () => {
    setResumeData(defaultResumeData)
    setSelectedTemplate('modern')
    setCurrentStep(0)
    if (typeof window !== 'undefined') {
      localStorage.removeItem('resumeBuilderData')
    }
  }

  return (
    <ResumeContext.Provider value={{
      resumeData,
      setResumeData,
      selectedTemplate,
      setSelectedTemplate,
      currentStep,
      setCurrentStep,
      clearData
    }}>
      {children}
    </ResumeContext.Provider>
  )
}

// PUBLIC_INTERFACE
export function useResumeContext() {
  const context = useContext(ResumeContext)
  if (!context) {
    throw new Error('useResumeContext must be used within a ResumeProvider')
  }
  return context
}
