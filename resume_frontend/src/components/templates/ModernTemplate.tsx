'use client'

import { ResumeData } from '@/types/resume'
import { Mail, Phone, MapPin, Linkedin, Globe, Calendar } from 'lucide-react'

interface ModernTemplateProps {
  data: ResumeData
}

// PUBLIC_INTERFACE
export function ModernTemplate({ data }: ModernTemplateProps) {
  const formatDate = (dateString: string) => {
    if (!dateString) return ''
    const date = new Date(dateString + '-01')
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' })
  }

  return (
    <div className="p-8 h-full bg-white text-gray-900">
      {/* Header */}
      <div className="border-b border-blue-200 pb-6 mb-6">
        <h1 className="text-3xl font-bold text-blue-900 mb-2">
          {data.personalInfo.fullName || 'Your Name'}
        </h1>
        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
          {data.personalInfo.email && (
            <div className="flex items-center gap-1">
              <Mail className="w-4 h-4" />
              {data.personalInfo.email}
            </div>
          )}
          {data.personalInfo.phone && (
            <div className="flex items-center gap-1">
              <Phone className="w-4 h-4" />
              {data.personalInfo.phone}
            </div>
          )}
          {data.personalInfo.location && (
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {data.personalInfo.location}
            </div>
          )}
          {data.personalInfo.linkedIn && (
            <div className="flex items-center gap-1">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </div>
          )}
          {data.personalInfo.portfolio && (
            <div className="flex items-center gap-1">
              <Globe className="w-4 h-4" />
              Portfolio
            </div>
          )}
        </div>
      </div>

      {/* Summary */}
      {data.summary && (
        <section className="mb-6">
          <h2 className="text-lg font-semibold text-blue-900 mb-3 border-b border-blue-100 pb-1">
            Professional Summary
          </h2>
          <p className="text-gray-700 leading-relaxed">{data.summary}</p>
        </section>
      )}

      {/* Experience */}
      {data.experience.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-semibold text-blue-900 mb-3 border-b border-blue-100 pb-1">
            Work Experience
          </h2>
          <div className="space-y-4">
            {data.experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="font-semibold text-gray-900">{exp.position}</h3>
                    <p className="text-blue-700 font-medium">{exp.company}</p>
                  </div>
                  <div className="text-sm text-gray-600 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate)}
                  </div>
                </div>
                {exp.description && (
                  <p className="text-gray-700 text-sm leading-relaxed mt-2">{exp.description}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {data.education.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-semibold text-blue-900 mb-3 border-b border-blue-100 pb-1">
            Education
          </h2>
          <div className="space-y-3">
            {data.education.map((edu) => (
              <div key={edu.id} className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">{edu.degree} in {edu.field}</h3>
                  <p className="text-blue-700">{edu.institution}</p>
                  {edu.gpa && <p className="text-sm text-gray-600">GPA: {edu.gpa}</p>}
                </div>
                <div className="text-sm text-gray-600">
                  {formatDate(edu.graduationDate)}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-semibold text-blue-900 mb-3 border-b border-blue-100 pb-1">
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {data.projects.length > 0 && (
        <section>
          <h2 className="text-lg font-semibold text-blue-900 mb-3 border-b border-blue-100 pb-1">
            Projects
          </h2>
          <div className="space-y-4">
            {data.projects.map((project) => (
              <div key={project.id}>
                <h3 className="font-semibold text-gray-900">{project.name}</h3>
                {project.description && (
                  <p className="text-gray-700 text-sm leading-relaxed mt-1">{project.description}</p>
                )}
                {project.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-orange-100 text-orange-800 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
