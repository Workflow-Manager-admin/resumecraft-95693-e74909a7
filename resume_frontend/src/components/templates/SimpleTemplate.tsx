import React from "react";
import { ResumeData } from "../ResumeForm";

/**
 * PUBLIC_INTERFACE
 * Simple, clean resume template with minimalist design and excellent readability
 */
export default function SimpleTemplate({ data }: { data: ResumeData }) {
  return (
    <div className="max-w-4xl mx-auto bg-white text-gray-800 leading-relaxed">
      {/* Header */}
      <header className="text-center border-b border-gray-300 pb-8 mb-8">
        <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-wide">
          {data.personal.name || "Your Name"}
        </h1>
        
        <div className="flex flex-wrap justify-center items-center gap-6 text-gray-600 mb-6">
          {data.personal.email && <span>{data.personal.email}</span>}
          {data.personal.phone && <span>{data.personal.phone}</span>}
          {data.personal.location && <span>{data.personal.location}</span>}
        </div>
        
        {data.personal.summary && (
          <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
            {data.personal.summary}
          </p>
        )}
      </header>

      {/* Work Experience */}
      {data.work.length > 0 && (
        <section className="mb-10">
          <SectionTitle title="Professional Experience" />
          
          <div className="space-y-8">
            {data.work.map((job, idx) => (
              <div key={idx}>
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-medium text-gray-900">
                      {job.position || "Position Title"}
                    </h3>
                    <div className="text-lg text-gray-600">
                      {job.company || "Company Name"}
                    </div>
                  </div>
                  
                  <div className="text-gray-500 text-sm font-mono bg-gray-100 px-3 py-1 rounded">
                    {job.start && new Date(job.start + "-01").toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                    {job.start && " — "}
                    {job.end ? new Date(job.end + "-01").toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : "Present"}
                  </div>
                </div>
                
                {job.description && (
                  <div className="text-gray-700 whitespace-pre-line leading-relaxed pl-0">
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
          <SectionTitle title="Education" />
          
          <div className="space-y-6">
            {data.education.map((edu, idx) => (
              <div key={idx}>
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-2">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      {edu.degree || "Degree"}
                    </h3>
                    <div className="text-gray-600">
                      {edu.school || "School Name"}
                    </div>
                  </div>
                  
                  <div className="text-gray-500 text-sm font-mono">
                    {edu.start && new Date(edu.start + "-01").toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                    {edu.start && " — "}
                    {edu.end ? new Date(edu.end + "-01").toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : "Present"}
                  </div>
                </div>
                
                {edu.description && (
                  <div className="text-gray-700 whitespace-pre-line text-sm">
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
        <section className="mb-10">
          <SectionTitle title="Skills" />
          
          <div className="flex flex-wrap gap-3">
            {data.skills.map((skill, i) => (
              <span
                key={i}
                className="px-4 py-2 border border-gray-300 rounded-full text-sm font-medium text-gray-700 bg-gray-50"
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
          <SectionTitle title="Projects" />
          
          <div className="space-y-6">
            {data.projects.map((project, i) => (
              <div key={i}>
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 mb-2">
                  <h3 className="text-lg font-medium text-gray-900">
                    {project.name || "Project Name"}
                  </h3>
                  
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 text-sm underline"
                    >
                      {project.url}
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

function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="text-2xl font-light text-gray-900 mb-6 pb-2 border-b border-gray-200 tracking-wide">
      {title}
    </h2>
  );
}
