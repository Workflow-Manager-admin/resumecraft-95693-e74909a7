'use client'

import { ResumeData } from '@/types/resume'
import { Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react'

interface CreativeTemplateProps {
  data: ResumeData
}

// PUBLIC_INTERFACE
export function CreativeTemplate({ data }: CreativeTemplateProps) {
  const formatDate = (dateString: string) => {
    if (!dateString) return ''
    const date = new Date(dateString + '-01')
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' })
  }

  return (
    <div className="flex h-full bg-white">
      {/* Left Sidebar */}
      <div className="w-1/3 bg-gradient-to-b from-orange-500 to-orange-600 text-white p-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2">
            {data.personalInfo.fullName || 'Your Name'}
          </h1>
          <div className="w-12 h-1 bg-white mb-4"></div>
        </div>

        {/* Contact Info */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4 text-orange-100">CONTACT</h2>
          <div className="space-y-3 text-sm">
            {data.personalInfo.email && (
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="break-all">{data.personalInfo.email}</span>
              </div>
            )}
            {data.personalInfo.phone && (
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>{data.personalInfo.phone}</span>
              </div>
            )}
            {data.personalInfo.location && (
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{data.personalInfo.location}</span>
              </div>
            )}
            {data.personalInfo.linkedIn && (
              <div className="flex items-center gap-2">
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </div>
            )}
            {data.personalInfo.portfolio && (
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                <span>Portfolio</span>
              </div>
            )}
          </div>
        </div>

        {/* Skills */}
        {data.skills.length > 0 && (
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4 text-orange-100">SKILLS</h2>
            <div className="space-y-2">
              {data.skills.map((skill) => (
                <div key={skill} className="text-sm">
                  <div className="flex justify-between mb-1">
                    <span>{skill}</span>
                  </div>
                  <div className="w-full bg-orange-400 rounded-full h-1">
                    <div className="bg-white h-1 rounded-full w-4/5"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {data.education.length > 0 && (
          <div>
            <h2 className="text-lg font-semibold mb-4 text-orange-100">EDUCATION</h2>
            <div className="space-y-4">
              {data.education.map((edu) => (
                <div key={edu.id} className="text-sm">
                  <h3 className="font-semibold">{edu.degree}</h3>
                  <p className="text-orange-100">{edu.field}</p>
                  <p className="text-orange-200">{edu.institution}</p>
                  <p className="text-xs text-orange-200">{formatDate(edu.graduationDate)}</p>
                  {edu.gpa && <p className="text-xs text-orange-200">GPA: {edu.gpa}</p>}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Right Content */}
      <div className="flex-1 p-8">
        {/* Summary */}
        {data.summary && (
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-orange-600 mb-4 relative">
              PROFILE
              <div className="absolute -bottom-1 left-0 w-16 h-1 bg-orange-500"></div>
            </h2>
            <p className="text-gray-700 leading-relaxed">{data.summary}</p>
          </section>
        )}

        {/* Experience */}
        {data.experience.length > 0 && (
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-orange-600 mb-4 relative">
              EXPERIENCE
              <div className="absolute -bottom-1 left-0 w-16 h-1 bg-orange-500"></div>
            </h2>
            <div className="space-y-6">
              {data.experience.map((exp) => (
                <div key={exp.id} className="relative pl-6">
                  <div className="absolute left-0 top-2 w-3 h-3 bg-orange-500 rounded-full"></div>
                  <div className="absolute left-1.5 top-5 w-0.5 h-full bg-orange-200"></div>
                  
                  <div className="mb-2">
                    <h3 className="text-lg font-bold text-gray-900">{exp.position}</h3>
                    <p className="text-orange-600 font-semibold">{exp.company}</p>
                    <p className="text-sm text-gray-600">
                      {formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate)}
                    </p>
                  </div>
                  {exp.description && (
                    <p className="text-gray-700 text-sm leading-relaxed">{exp.description}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects */}
        {data.projects.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-orange-600 mb-4 relative">
              PROJECTS
              <div className="absolute -bottom-1 left-0 w-16 h-1 bg-orange-500"></div>
            </h2>
            <div className="space-y-4">
              {data.projects.map((project) => (
                <div key={project.id} className="border-l-4 border-orange-300 pl-4">
                  <h3 className="text-lg font-bold text-gray-900">{project.name}</h3>
                  {project.description && (
                    <p className="text-gray-700 text-sm leading-relaxed mt-1">{project.description}</p>
                  )}
                  {project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-orange-100 text-orange-800 rounded text-xs font-medium"
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
    </div>
  )
}
