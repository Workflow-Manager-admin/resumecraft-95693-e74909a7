'use client'

import { ResumeData } from '@/types/resume'
import { Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react'

interface ProfessionalTemplateProps {
  data: ResumeData
}

// PUBLIC_INTERFACE
export function ProfessionalTemplate({ data }: ProfessionalTemplateProps) {
  const formatDate = (dateString: string) => {
    if (!dateString) return ''
    const date = new Date(dateString + '-01')
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' })
  }

  return (
    <div className="p-8 h-full bg-white text-gray-900">
      {/* Header with professional styling */}
      <div className="bg-slate-800 text-white p-6 -m-8 mb-8">
        <h1 className="text-3xl font-bold mb-3">
          {data.personalInfo.fullName || 'Your Name'}
        </h1>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="space-y-2">
            {data.personalInfo.email && (
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                {data.personalInfo.email}
              </div>
            )}
            {data.personalInfo.phone && (
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                {data.personalInfo.phone}
              </div>
            )}
          </div>
          <div className="space-y-2">
            {data.personalInfo.location && (
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {data.personalInfo.location}
              </div>
            )}
            {data.personalInfo.linkedIn && (
              <div className="flex items-center gap-2">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </div>
            )}
            {data.personalInfo.portfolio && (
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                Portfolio
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Summary */}
      {data.summary && (
        <section className="mb-8">
          <h2 className="text-lg font-bold text-slate-800 mb-4 pb-2 border-b-2 border-slate-200">
            EXECUTIVE SUMMARY
          </h2>
          <p className="text-gray-700 leading-relaxed text-justify">{data.summary}</p>
        </section>
      )}

      {/* Experience */}
      {data.experience.length > 0 && (
        <section className="mb-8">
          <h2 className="text-lg font-bold text-slate-800 mb-4 pb-2 border-b-2 border-slate-200">
            PROFESSIONAL EXPERIENCE
          </h2>
          <div className="space-y-6">
            {data.experience.map((exp) => (
              <div key={exp.id} className="relative">
                <div className="absolute left-0 top-0 w-2 h-2 bg-slate-600 rounded-full mt-2"></div>
                <div className="pl-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{exp.position}</h3>
                      <p className="text-slate-700 font-semibold">{exp.company}</p>
                    </div>
                    <span className="text-sm text-gray-600 font-medium">
                      {formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate)}
                    </span>
                  </div>
                  {exp.description && (
                    <p className="text-gray-700 text-sm leading-relaxed">{exp.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="grid grid-cols-2 gap-8">
        {/* Education */}
        {data.education.length > 0 && (
          <section className="mb-8">
            <h2 className="text-lg font-bold text-slate-800 mb-4 pb-2 border-b-2 border-slate-200">
              EDUCATION
            </h2>
            <div className="space-y-4">
              {data.education.map((edu) => (
                <div key={edu.id}>
                  <h3 className="font-bold text-gray-900">{edu.degree}</h3>
                  <p className="text-slate-700 font-medium">{edu.field}</p>
                  <p className="text-gray-600 text-sm">{edu.institution}</p>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{formatDate(edu.graduationDate)}</span>
                    {edu.gpa && <span>GPA: {edu.gpa}</span>}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills */}
        {data.skills.length > 0 && (
          <section className="mb-8">
            <h2 className="text-lg font-bold text-slate-800 mb-4 pb-2 border-b-2 border-slate-200">
              CORE COMPETENCIES
            </h2>
            <div className="grid grid-cols-2 gap-1 text-sm">
              {data.skills.map((skill) => (
                <div key={skill} className="flex items-center">
                  <div className="w-2 h-2 bg-slate-600 rounded-full mr-2"></div>
                  <span className="text-gray-700">{skill}</span>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Projects */}
      {data.projects.length > 0 && (
        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4 pb-2 border-b-2 border-slate-200">
            KEY PROJECTS
          </h2>
          <div className="space-y-4">
            {data.projects.map((project) => (
              <div key={project.id} className="bg-gray-50 p-4 rounded">
                <h3 className="font-bold text-gray-900 mb-1">{project.name}</h3>
                {project.description && (
                  <p className="text-gray-700 text-sm leading-relaxed mb-2">{project.description}</p>
                )}
                {project.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-slate-200 text-slate-800 rounded text-xs font-medium"
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
