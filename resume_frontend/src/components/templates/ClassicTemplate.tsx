'use client'

import { ResumeData } from '@/types/resume'

interface ClassicTemplateProps {
  data: ResumeData
}

// PUBLIC_INTERFACE
export function ClassicTemplate({ data }: ClassicTemplateProps) {
  const formatDate = (dateString: string) => {
    if (!dateString) return ''
    const date = new Date(dateString + '-01')
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' })
  }

  return (
    <div className="p-8 h-full bg-white text-gray-900 font-serif">
      {/* Header */}
      <div className="text-center border-b-2 border-gray-800 pb-4 mb-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-3">
          {data.personalInfo.fullName || 'Your Name'}
        </h1>
        <div className="text-sm text-gray-600 space-y-1">
          {data.personalInfo.email && <div>{data.personalInfo.email}</div>}
          <div className="flex justify-center gap-4">
            {data.personalInfo.phone && <span>{data.personalInfo.phone}</span>}
            {data.personalInfo.location && <span>{data.personalInfo.location}</span>}
          </div>
          <div className="flex justify-center gap-4">
            {data.personalInfo.linkedIn && <span>LinkedIn Profile</span>}
            {data.personalInfo.portfolio && <span>Portfolio</span>}
          </div>
        </div>
      </div>

      {/* Summary */}
      {data.summary && (
        <section className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-3 uppercase tracking-wide">
            Professional Summary
          </h2>
          <p className="text-gray-700 leading-relaxed text-justify">{data.summary}</p>
        </section>
      )}

      {/* Experience */}
      {data.experience.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-3 uppercase tracking-wide">
            Professional Experience
          </h2>
          <div className="space-y-4">
            {data.experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-lg font-bold text-gray-900">{exp.position}</h3>
                  <span className="text-sm text-gray-600">
                    {formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate)}
                  </span>
                </div>
                <p className="font-semibold text-gray-700 italic mb-2">{exp.company}</p>
                {exp.description && (
                  <p className="text-gray-700 text-sm leading-relaxed text-justify">{exp.description}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {data.education.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-3 uppercase tracking-wide">
            Education
          </h2>
          <div className="space-y-3">
            {data.education.map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between items-baseline">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {edu.degree} in {edu.field}
                    </h3>
                    <p className="font-semibold text-gray-700 italic">{edu.institution}</p>
                    {edu.gpa && <p className="text-sm text-gray-600">GPA: {edu.gpa}</p>}
                  </div>
                  <span className="text-sm text-gray-600">
                    {formatDate(edu.graduationDate)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-3 uppercase tracking-wide">
            Technical Skills
          </h2>
          <p className="text-gray-700">
            {data.skills.join(' • ')}
          </p>
        </section>
      )}

      {/* Projects */}
      {data.projects.length > 0 && (
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-3 uppercase tracking-wide">
            Notable Projects
          </h2>
          <div className="space-y-4">
            {data.projects.map((project) => (
              <div key={project.id}>
                <h3 className="text-lg font-bold text-gray-900">{project.name}</h3>
                {project.description && (
                  <p className="text-gray-700 text-sm leading-relaxed text-justify mt-1">
                    {project.description}
                  </p>
                )}
                {project.technologies.length > 0 && (
                  <p className="text-sm text-gray-600 mt-2">
                    <span className="font-semibold">Technologies:</span> {project.technologies.join(', ')}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
