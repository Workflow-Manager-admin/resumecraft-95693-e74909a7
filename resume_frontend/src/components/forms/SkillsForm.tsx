'use client'

import { useState } from 'react'
import { useResumeContext } from '@/contexts/ResumeContext'
import { Star, Plus, X } from 'lucide-react'

// PUBLIC_INTERFACE
export function SkillsForm() {
  const { resumeData, setResumeData } = useResumeContext()
  const [newSkill, setNewSkill] = useState('')

  const addSkill = () => {
    if (newSkill.trim() && !resumeData.skills.includes(newSkill.trim())) {
      setResumeData(prev => ({
        ...prev,
        skills: [...prev.skills, newSkill.trim()]
      }))
      setNewSkill('')
    }
  }

  const removeSkill = (skillToRemove: string) => {
    setResumeData(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill !== skillToRemove)
    }))
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      addSkill()
    }
  }

  const suggestedSkills = [
    'JavaScript', 'Python', 'React', 'Node.js', 'TypeScript', 'HTML/CSS',
    'SQL', 'Git', 'AWS', 'Docker', 'MongoDB', 'Express.js', 'Vue.js',
    'Angular', 'Java', 'C++', 'PHP', 'Ruby', 'Go', 'Kubernetes'
  ]

  const availableSuggestions = suggestedSkills.filter(skill => 
    !resumeData.skills.includes(skill)
  )

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Skills</h2>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <Star className="w-4 h-4 inline mr-2" />
          Add Skills
        </label>
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter a skill"
          />
          <button
            onClick={addSkill}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {resumeData.skills.length > 0 && (
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-3">Your Skills</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {resumeData.skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
              >
                {skill}
                <button
                  onClick={() => removeSkill(skill)}
                  className="ml-2 text-blue-600 hover:text-blue-800"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
          </div>
        </div>
      )}

      {availableSuggestions.length > 0 && (
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-3">Suggested Skills</h3>
          <div className="flex flex-wrap gap-2">
            {availableSuggestions.slice(0, 12).map((skill) => (
              <button
                key={skill}
                onClick={() => {
                  setResumeData(prev => ({
                    ...prev,
                    skills: [...prev.skills, skill]
                  }))
                }}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
              >
                + {skill}
              </button>
            ))}
          </div>
        </div>
      )}

      {resumeData.skills.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <Star className="w-12 h-12 mx-auto mb-4 text-gray-300" />
          <p>No skills added yet.</p>
          <p className="text-sm">Add your technical and soft skills above.</p>
        </div>
      )}
    </div>
  )
}
