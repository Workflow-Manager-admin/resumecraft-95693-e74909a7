'use client'

import { useState } from 'react'
import { useResumeContext } from '@/contexts/ResumeContext'
import { Code, Plus, Trash2, Link, X } from 'lucide-react'
import { Project } from '@/types/resume'

// PUBLIC_INTERFACE
export function ProjectsForm() {
  const { resumeData, setResumeData } = useResumeContext()

  const addProject = () => {
    const newProject: Project = {
      id: Date.now().toString(),
      name: '',
      description: '',
      technologies: [],
      link: ''
    }
    
    setResumeData(prev => ({
      ...prev,
      projects: [...prev.projects, newProject]
    }))
  }

  const updateProject = (id: string, field: keyof Project, value: string | string[]) => {
    setResumeData(prev => ({
      ...prev,
      projects: prev.projects.map(project =>
        project.id === id ? { ...project, [field]: value } : project
      )
    }))
  }

  const removeProject = (id: string) => {
    setResumeData(prev => ({
      ...prev,
      projects: prev.projects.filter(project => project.id !== id)
    }))
  }

  const addTechnology = (projectId: string, tech: string) => {
    const project = resumeData.projects.find(p => p.id === projectId)
    if (project && tech.trim() && !project.technologies.includes(tech.trim())) {
      updateProject(projectId, 'technologies', [...project.technologies, tech.trim()])
    }
  }

  const removeTechnology = (projectId: string, techToRemove: string) => {
    const project = resumeData.projects.find(p => p.id === projectId)
    if (project) {
      updateProject(projectId, 'technologies', 
        project.technologies.filter(tech => tech !== techToRemove)
      )
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Projects</h2>
        <button
          onClick={addProject}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Project
        </button>
      </div>

      <div className="space-y-6">
        {resumeData.projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onUpdate={updateProject}
            onRemove={removeProject}
            onAddTechnology={addTechnology}
            onRemoveTechnology={removeTechnology}
          />
        ))}

        {resumeData.projects.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            <Code className="w-12 h-12 mx-auto mb-4 text-gray-300" />
            <p>No projects added yet.</p>
            <p className="text-sm">Click &quot;Add Project&quot; to showcase your work.</p>
          </div>
        )}
      </div>
    </div>
  )
}

interface ProjectCardProps {
  project: Project
  onUpdate: (id: string, field: keyof Project, value: string | string[]) => void
  onRemove: (id: string) => void
  onAddTechnology: (projectId: string, tech: string) => void
  onRemoveTechnology: (projectId: string, tech: string) => void
}

function ProjectCard({ 
  project, 
  onUpdate, 
  onRemove, 
  onAddTechnology, 
  onRemoveTechnology 
}: ProjectCardProps) {
  const [newTech, setNewTech] = useState('')

  const handleAddTech = () => {
    if (newTech.trim()) {
      onAddTechnology(project.id, newTech)
      setNewTech('')
    }
  }

  const handleTechKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleAddTech()
    }
  }

  return (
    <div className="border border-gray-200 rounded-lg p-4 space-y-4">
      <div className="flex justify-between items-start">
        <Code className="w-5 h-5 text-gray-400 mt-1" />
        <button
          onClick={() => onRemove(project.id)}
          className="text-red-500 hover:text-red-700 transition-colors"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Project Name
          </label>
          <input
            type="text"
            value={project.name}
            onChange={(e) => onUpdate(project.id, 'name', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Project Name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            <Link className="w-4 h-4 inline mr-1" />
            Project Link (Optional)
          </label>
          <input
            type="url"
            value={project.link || ''}
            onChange={(e) => onUpdate(project.id, 'link', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="https://github.com/username/project"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Description
        </label>
        <textarea
          value={project.description}
          onChange={(e) => onUpdate(project.id, 'description', e.target.value)}
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          placeholder="Describe what the project does and your role in it..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Technologies Used
        </label>
        
        <div className="flex gap-2 mb-3">
          <input
            type="text"
            value={newTech}
            onChange={(e) => setNewTech(e.target.value)}
            onKeyPress={handleTechKeyPress}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Add technology"
          />
          <button
            onClick={handleAddTech}
            className="px-3 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>

        {project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center px-2 py-1 bg-orange-100 text-orange-800 rounded text-sm"
              >
                {tech}
                <button
                  onClick={() => onRemoveTechnology(project.id, tech)}
                  className="ml-1 text-orange-600 hover:text-orange-800"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
