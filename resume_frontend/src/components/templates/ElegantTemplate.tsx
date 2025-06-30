import React from "react";
import { ResumeData } from "../ResumeForm";

/**
 * PUBLIC_INTERFACE
 * Elegant resume template with sophisticated two-column layout and premium styling
 */
export default function ElegantTemplate({ data }: { data: ResumeData }) {
  return (
    <div className="max-w-5xl mx-auto bg-white shadow-lg overflow-hidden">
      <div className="flex flex-col lg:flex-row min-h-[800px]">
        {/* Left Sidebar */}
        <aside className="lg:w-80 bg-gradient-to-b from-blue-600 via-blue-700 to-orange-500 text-white p-8 lg:p-10">
          {/* Personal Info */}
          <div className="text-center lg:text-left mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
              {data.personal.name || "Your Name"}
            </h1>
            
            <div className="space-y-3 text-blue-50">
              {data.personal.email && (
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                  <span className="text-sm break-all">{data.personal.email}</span>
                </div>
              )}
              
              {data.personal.phone && (
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-sm">{data.personal.phone}</span>
                </div>
              )}
              
              {data.personal.location && (
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm">{data.personal.location}</span>
                </div>
              )}
            </div>
          </div>
          
          {/* Professional Summary */}
          {data.personal.summary && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3 text-orange-100">About Me</h3>
              <p className="text-blue-100 leading-relaxed text-sm">
                {data.personal.summary}
              </p>
            </div>
          )}
          
          {/* Skills */}
          {data.skills.length > 0 && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-orange-100">Skills</h3>
              <div className="space-y-2">
                {data.skills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-300 rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-blue-100">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 lg:p-10 bg-white">
          {/* Work Experience */}
          {data.work.length > 0 && (
            <section className="mb-10">
              <SectionHeader title="Professional Experience" color="blue" />
              
              <div className="space-y-8">
                {data.work.map((job, idx) => (
                  <div key={idx} className="relative">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">
                          {job.position || "Position Title"}
                        </h3>
                        <div className="text-lg text-blue-600 font-medium mb-2">
                          {job.company || "Company Name"}
                        </div>
                      </div>
                      
                      <div className="text-gray-500 text-sm bg-gray-100 px-3 py-1.5 rounded-full whitespace-nowrap">
                        {job.start && new Date(job.start + "-01").toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                        {job.start && " – "}
                        {job.end ? new Date(job.end + "-01").toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : "Present"}
                      </div>
                    </div>
                    
                    {job.description && (
                      <div className="text-gray-700 whitespace-pre-line leading-relaxed">
                        {job.description}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Education */}
          {data.education.length > 0 && (
            <section className="mb-10">
              <SectionHeader title="Education" color="orange" />
              
              <div className="space-y-6">
                {data.education.map((edu, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-lg p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          {edu.degree || "Degree"}
                        </h3>
                        <div className="text-orange-600 font-medium">
                          {edu.school || "School Name"}
                        </div>
                      </div>
                      
                      <div className="text-gray-500 text-sm">
                        {edu.start && new Date(edu.start + "-01").toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                        {edu.start && " – "}
                        {edu.end ? new Date(edu.end + "-01").toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : "Present"}
                      </div>
                    </div>
                    
                    {edu.description && (
                      <div className="text-gray-700 whitespace-pre-line text-sm mt-3">
                        {edu.description}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Projects */}
          {data.projects.length > 0 && (
            <section className="mb-8">
              <SectionHeader title="Featured Projects" color="blue" />
              
              <div className="space-y-6">
                {data.projects.map((project, i) => (
                  <div key={i} className="border-l-4 border-blue-600 pl-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {project.name || "Project Name"}
                      </h3>
                      
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 text-sm font-medium"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          View Project
                        </a>
                      )}
                    </div>
                    
                    {project.description && (
                      <div className="text-gray-700 whitespace-pre-line leading-relaxed">
                        {project.description}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}

function SectionHeader({ title, color }: { title: string; color: "blue" | "orange" }) {
  const colorClasses = {
    blue: "text-blue-600 border-blue-600",
    orange: "text-orange-500 border-orange-500"
  };

  return (
    <h2 className={`text-2xl font-bold mb-6 pb-2 border-b-2 ${colorClasses[color]} tracking-tight`}>
      {title}
    </h2>
  );
}
