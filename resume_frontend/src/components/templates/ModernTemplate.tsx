import React from "react";
import { ResumeData } from "../ResumeForm";

/**
 * PUBLIC_INTERFACE
 * Modern resume template with enhanced typography and professional styling
 */
export default function ModernTemplate({ data }: { data: ResumeData }) {
  return (
    <div className="max-w-4xl mx-auto bg-white text-gray-900 leading-relaxed">
      {/* Header Section */}
      <header className="border-b-4 border-blue-600 pb-6 mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4 tracking-tight">
          {data.personal.name || "Your Name"}
        </h1>
        
        <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
          {data.personal.email && (
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
              </svg>
              <span>{data.personal.email}</span>
            </div>
          )}
          
          {data.personal.phone && (
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>{data.personal.phone}</span>
            </div>
          )}
          
          {data.personal.location && (
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{data.personal.location}</span>
            </div>
          )}
        </div>
        
        {data.personal.summary && (
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            {data.personal.summary}
          </p>
        )}
      </header>

      {/* Work Experience */}
      {data.work.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-6 flex items-center gap-3">
            <div className="w-1 h-8 bg-blue-600 rounded-full"></div>
            Professional Experience
          </h2>
          
          <div className="space-y-6">
            {data.work.map((job, idx) => (
              <div key={idx} className="relative pl-6 border-l-2 border-gray-200 last:border-l-0">
                <div className="absolute -left-2 top-2 w-4 h-4 bg-blue-600 rounded-full"></div>
                
                <div className="mb-3">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {job.position || "Position Title"}
                      </h3>
                      <div className="text-lg text-blue-600 font-medium">
                        {job.company || "Company Name"}
                      </div>
                    </div>
                    
                    <div className="text-gray-500 text-sm bg-gray-100 px-3 py-1 rounded-full whitespace-nowrap">
                      {job.start && new Date(job.start + "-01").toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                      {job.start && " - "}
                      {job.end ? new Date(job.end + "-01").toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : "Present"}
                    </div>
                  </div>
                  
                  {job.description && (
                    <div className="text-gray-700 whitespace-pre-line leading-relaxed">
                      {job.description}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {data.education.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-600 mb-6 flex items-center gap-3">
            <div className="w-1 h-8 bg-gray-600 rounded-full"></div>
            Education
          </h2>
          
          <div className="space-y-4">
            {data.education.map((edu, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-5">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {edu.degree || "Degree"}
                    </h3>
                    <div className="text-gray-600">
                      {edu.school || "School Name"}
                    </div>
                  </div>
                  
                  <div className="text-gray-500 text-sm">
                    {edu.start && new Date(edu.start + "-01").toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                    {edu.start && " - "}
                    {edu.end ? new Date(edu.end + "-01").toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : "Present"}
                  </div>
                </div>
                
                {edu.description && (
                  <div className="text-gray-700 whitespace-pre-line text-sm mt-2">
                    {edu.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-orange-500 mb-6 flex items-center gap-3">
            <div className="w-1 h-8 bg-orange-500 rounded-full"></div>
            Skills & Technologies
          </h2>
          
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, i) => (
              <span
                key={i}
                className="inline-flex items-center px-4 py-2 bg-orange-500 text-white font-medium rounded-full text-sm shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {data.projects.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-6 flex items-center gap-3">
            <div className="w-1 h-8 bg-blue-600 rounded-full"></div>
            Featured Projects
          </h2>
          
          <div className="space-y-6">
            {data.projects.map((project, i) => (
              <div key={i} className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {project.name || "Project Name"}
                  </h3>
                  
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm font-medium"
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
    </div>
  );
}
