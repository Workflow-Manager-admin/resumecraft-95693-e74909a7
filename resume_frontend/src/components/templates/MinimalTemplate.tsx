'use client'

import { ResumeData } from '@/types/resume'

interface MinimalTemplateProps {
  data: ResumeData
}

// PUBLIC_INTERFACE
export function MinimalTemplate({ data }: MinimalTemplateProps) {
  const formatDate = (dateString: string) => {
    if (!dateString) return ''
    const date = new Date(dateString + '-01')
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' })
  }

  return (
    <div className="p-12 h-full bg-white text-gray-900 font-light">
      {/* Header - Minimal and clean */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-light tracking-wide text-gray-800 mb-6">
          {data.personalInfo.fullName || 'Your Name'}
        </h1>
        <div className="text-sm text-gray-600 space-y-1">
          {data.personalInfo.email && <div>{data.personalInfo.email}</div>}
          {data.personalInfo.phone && <div>{data.personalInfo.phone}</div>}
          {data.personalInfo.location && <div>{data.personalInfo.location}</div>}
          <div className="flex justify-center gap-6 mt-2">
            {data.personalInfo.linkedIn && <span>LinkedIn</span>}
            {data.personalInfo.portfolio && <span>Portfolio</span>}
          </div>
        </div>
      </div>

      {/* Summary */}
      {data.summary && (
        <section className="mb-12 text-center">
          <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto italic">
            &ldquo;{data.summary}&rdquo;
          </p>
        </section>
      )}

      {/* Experience */}
      {data.experience.length > 0 && (
        <section className="mb-12">
          <h2 className="text-xl font-light text-gray-800 mb-8 text-center tracking-wider uppercase">
            Experience
          </h2>
          <div className="space-y-8 max-w-3xl mx-auto">
            {data.experience.map((exp, index) => (
              <div key={exp.id} className="text-center">
                <h3 className="text-lg font-medium text-gray-900 mb-1">{exp.position}</h3>
                <p className="text-gray-600 mb-2">{exp.company}</p>
                <p className="text-sm text-gray-500 mb-3">
                  {formatDate(exp.startDate)} — {exp.current ? 'Present' : formatDate(exp.endDate)}
                </p>
                {exp.description && (
                  <p className="text-gray-700 text-sm leading-relaxed max-w-xl mx-auto">
                    {exp.description}
                  </p>
                )}
                {index < data.experience.length - 1 && (
                  <div className="mt-6 flex justify-center">
                    <div className="w-8 h-px bg-gray-300"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {data.education.length > 0 && (
        <section className="mb-12">
          <h2 className="text-xl font-light text-gray-800 mb-8 text-center tracking-wider uppercase">
            Education
          </h2>
          <div className="space-y-6 max-w-2xl mx-auto text-center">
            {data.education.map((edu) => (
              <div key={edu.id}>
                <h3 className="font-medium text-gray-900">{edu.degree}</h3>
                <p className="text-gray-600">{edu.field}</p>
                <p className="text-gray-600 text-sm">{edu.institution}</p>
                <p className="text-sm text-gray-500 mt-1">
                  {formatDate(edu.graduationDate)}
                  {edu.gpa && ` • GPA: ${edu.gpa}`}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <section className="mb-12">
          <h2 className="text-xl font-light text-gray-800 mb-8 text-center tracking-wider uppercase">
            Skills
          </h2>
          <div className="text-center">
            <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
              {data.skills.join(' • ')}
            </p>
          </div>
        </section>
      )}

      {/* Projects */}
      {data.projects.length > 0 && (
        <section>
          <h2 className="text-xl font-light text-gray-800 mb-8 text-center tracking-wider uppercase">
            Projects
          </h2>
          <div className="space-y-8 max-w-3xl mx-auto">
            {data.projects.map((project, index) => (
              <div key={project.id} className="text-center">
                <h3 className="font-medium text-gray-900 mb-2">{project.name}</h3>
                {project.description && (
                  <p className="text-gray-700 text-sm leading-relaxed max-w-xl mx-auto mb-3">
                    {project.description}
                  </p>
                )}
                {project.technologies.length > 0 && (
                  <p className="text-xs text-gray-500 uppercase tracking-wide">
                    {project.technologies.join(' • ')}
                  </p>
                )}
                {index < data.projects.length - 1 && (
                  <div className="mt-6 flex justify-center">
                    <div className="w-8 h-px bg-gray-300"></div>
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
