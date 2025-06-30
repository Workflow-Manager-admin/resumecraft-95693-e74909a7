'use client'

import { useFormContext } from '../FormProvider'
import { Briefcase, Plus, Trash2, Calendar } from 'lucide-react'
import { Experience } from '@/types/resume'

// PUBLIC_INTERFACE
export function ExperienceForm() {
  const { resumeData, setResumeData } = useFormContext()

  const addExperience = () => {
    const newExperience: Experience = {
      id: Date.now().toString(),
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      current: false,
      description: ''
    }
    
    setResumeData(prev => ({
      ...prev,
      experience: [...prev.experience, newExperience]
    }))
  }

  const updateExperience = (id: string, field: keyof Experience, value: string | boolean) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.map(exp =>
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    }))
  }

  const removeExperience = (id: string) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.filter(exp => exp.id !== id)
    }))
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Work Experience</h2>
        <button
          onClick={addExperience}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Experience
        </button>
      </div>

      <div className="space-y-6">
        {resumeData.experience.map((exp) => (
          <div
            key={exp.id}
            className="border border-gray-200 rounded-lg p-4 space-y-4"
          >
            <div className="flex justify-between items-start">
              <Briefcase className="w-5 h-5 text-gray-400 mt-1" />
              <button
                onClick={() => removeExperience(exp.id)}
                className="text-red-500 hover:text-red-700 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company
                </label>
                <input
                  type="text"
                  value={exp.company}
                  onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Company Name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Position
                </label>
                <input
                  type="text"
                  value={exp.position}
                  onChange={(e) => updateExperience(exp.id, 'position', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Job Title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <Calendar className="w-4 h-4 inline mr-1" />
                  Start Date
                </label>
                <input
                  type="month"
                  value={exp.startDate}
                  onChange={(e) => updateExperience(exp.id, 'startDate', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  End Date
                </label>
                <div className="space-y-2">
                  <input
                    type="month"
                    value={exp.endDate}
                    onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)}
                    disabled={exp.current}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50"
                  />
                  <label className="flex items-center text-sm">
                    <input
                      type="checkbox"
                      checked={exp.current}
                      onChange={(e) => updateExperience(exp.id, 'current', e.target.checked)}
                      className="mr-2"
                    />
                    Currently working here
                  </label>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                value={exp.description}
                onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="Describe your responsibilities and achievements..."
              />
            </div>
          </div>
        ))}

        {resumeData.experience.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            <Briefcase className="w-12 h-12 mx-auto mb-4 text-gray-300" />
            <p>No work experience added yet.</p>
            <p className="text-sm">Click &quot;Add Experience&quot; to get started.</p>
          </div>
        )}
      </div>
    </div>
  )
}
