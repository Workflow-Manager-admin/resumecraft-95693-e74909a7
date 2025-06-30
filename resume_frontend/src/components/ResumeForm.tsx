import React, { useState } from "react";

/** Resume Data Types and Defaults */
export type ResumeData = {
  personal: {
    name: string;
    email: string;
    phone: string;
    location: string;
    summary: string;
  };
  work: {
    company: string;
    position: string;
    start: string;
    end: string;
    description: string;
  }[];
  education: {
    school: string;
    degree: string;
    start: string;
    end: string;
    description: string;
  }[];
  skills: string[];
  projects: {
    name: string;
    url: string;
    description: string;
  }[];
};

export const defaultResumeData: ResumeData = {
  personal: {
    name: "",
    email: "",
    phone: "",
    location: "",
    summary: "",
  },
  work: [],
  education: [],
  skills: [],
  projects: [],
};

type Props = {
  resumeData: ResumeData;
  setResumeData: (data: ResumeData) => void;
};

const STEPS = [
  { id: "personal", title: "Personal", description: "Basic information" },
  { id: "work", title: "Experience", description: "Work history" },
  { id: "education", title: "Education", description: "Academic background" },
  { id: "skills", title: "Skills", description: "Technical abilities" },
  { id: "projects", title: "Projects", description: "Portfolio items" },
];

/**
 * PUBLIC_INTERFACE
 * Modern multi-step form for entering resume data with enhanced UX
 */
export default function ResumeForm({ resumeData, setResumeData }: Props) {
  const [step, setStep] = useState(0);
  const [skillInput, setSkillInput] = useState("");

  // Helper functions for data updates
  function updatePersonal(field: keyof ResumeData["personal"], value: string) {
    setResumeData({
      ...resumeData,
      personal: { ...resumeData.personal, [field]: value },
    });
  }

  function addWork() {
    setResumeData({
      ...resumeData,
      work: [
        ...resumeData.work,
        { company: "", position: "", start: "", end: "", description: "" },
      ],
    });
  }

  function updateWork(idx: number, field: keyof ResumeData["work"][0], value: string) {
    setResumeData({
      ...resumeData,
      work: resumeData.work.map((w, i) => (i === idx ? { ...w, [field]: value } : w)),
    });
  }

  function removeWork(idx: number) {
    setResumeData({
      ...resumeData,
      work: resumeData.work.filter((_, i) => i !== idx),
    });
  }

  function addEducation() {
    setResumeData({
      ...resumeData,
      education: [
        ...resumeData.education,
        { school: "", degree: "", start: "", end: "", description: "" },
      ],
    });
  }

  function updateEducation(idx: number, field: keyof ResumeData["education"][0], value: string) {
    setResumeData({
      ...resumeData,
      education: resumeData.education.map((e, i) => (i === idx ? { ...e, [field]: value } : e)),
    });
  }

  function removeEducation(idx: number) {
    setResumeData({
      ...resumeData,
      education: resumeData.education.filter((_, i) => i !== idx),
    });
  }

  function addSkill(skill: string) {
    if (skill.trim() && !resumeData.skills.includes(skill.trim())) {
      setResumeData({
        ...resumeData,
        skills: [...resumeData.skills, skill.trim()],
      });
    }
  }

  function removeSkill(idx: number) {
    setResumeData({
      ...resumeData,
      skills: resumeData.skills.filter((_, i) => i !== idx),
    });
  }

  function addProject() {
    setResumeData({
      ...resumeData,
      projects: [
        ...resumeData.projects,
        { name: "", url: "", description: "" },
      ],
    });
  }

  function updateProject(idx: number, field: keyof ResumeData["projects"][0], value: string) {
    setResumeData({
      ...resumeData,
      projects: resumeData.projects.map((p, i) => (i === idx ? { ...p, [field]: value } : p)),
    });
  }

  function removeProject(idx: number) {
    setResumeData({
      ...resumeData,
      projects: resumeData.projects.filter((_, i) => i !== idx),
    });
  }



  function renderStepContent() {
    switch (step) {
      case 0:
        return (
          <div className="space-y-4">
            <div className="form-group">
              <label className="form-label" htmlFor="name">
                Full Name *
              </label>
              <input
                id="name"
                type="text"
                className="form-input"
                value={resumeData.personal.name}
                onChange={(e) => updatePersonal("name", e.target.value)}
                placeholder="Enter your full name"
                required
              />
            </div>
            
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                Email Address *
              </label>
              <input
                id="email"
                type="email"
                className="form-input"
                value={resumeData.personal.email}
                onChange={(e) => updatePersonal("email", e.target.value)}
                placeholder="your.email@example.com"
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-group">
                <label className="form-label" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  className="form-input"
                  value={resumeData.personal.phone}
                  onChange={(e) => updatePersonal("phone", e.target.value)}
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label" htmlFor="location">
                  Location
                </label>
                <input
                  id="location"
                  type="text"
                  className="form-input"
                  value={resumeData.personal.location}
                  onChange={(e) => updatePersonal("location", e.target.value)}
                  placeholder="City, State"
                />
              </div>
            </div>
            
            <div className="form-group">
              <label className="form-label" htmlFor="summary">
                Professional Summary
              </label>
              <textarea
                id="summary"
                className="form-input resize-none"
                rows={4}
                value={resumeData.personal.summary}
                onChange={(e) => updatePersonal("summary", e.target.value)}
                placeholder="Brief overview of your professional background and goals"
              />
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-6">
            {resumeData.work.length === 0 ? (
              <div className="text-center py-8">
                <div className="text-muted mb-4">
                  <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v6a2 2 0 01-2 2H10a2 2 0 01-2-2V6m8 0H8" />
                  </svg>
                  <p>No work experience added yet</p>
                </div>
                <button onClick={addWork} className="btn btn-primary">
                  Add Your First Job
                </button>
              </div>
            ) : (
              <>
                {resumeData.work.map((job, i) => (
                  <div key={i} className="card p-4 space-y-4">
                    <div className="flex justify-between items-start">
                      <h4 className="font-medium text-foreground">Experience #{i + 1}</h4>
                      <button
                        onClick={() => removeWork(i)}
                        className="btn btn-ghost btn-sm text-error hover:bg-error/10"
                        aria-label="Remove work experience"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="form-group">
                        <label className="form-label">Company Name</label>
                        <input
                          type="text"
                          className="form-input"
                          value={job.company}
                          onChange={(e) => updateWork(i, "company", e.target.value)}
                          placeholder="Company Name"
                        />
                      </div>
                      
                      <div className="form-group">
                        <label className="form-label">Job Title</label>
                        <input
                          type="text"
                          className="form-input"
                          value={job.position}
                          onChange={(e) => updateWork(i, "position", e.target.value)}
                          placeholder="Software Engineer"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="form-group">
                        <label className="form-label">Start Date</label>
                        <input
                          type="month"
                          className="form-input"
                          value={job.start}
                          onChange={(e) => updateWork(i, "start", e.target.value)}
                        />
                      </div>
                      
                      <div className="form-group">
                        <label className="form-label">End Date</label>
                        <input
                          type="month"
                          className="form-input"
                          value={job.end}
                          onChange={(e) => updateWork(i, "end", e.target.value)}
                          placeholder="Leave blank if current"
                        />
                      </div>
                    </div>
                    
                    <div className="form-group">
                      <label className="form-label">Job Description</label>
                      <textarea
                        className="form-input resize-none"
                        rows={3}
                        value={job.description}
                        onChange={(e) => updateWork(i, "description", e.target.value)}
                        placeholder="Describe your role, responsibilities, and achievements..."
                      />
                    </div>
                  </div>
                ))}
                
                <button onClick={addWork} className="btn btn-secondary w-full">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Add Another Job
                </button>
              </>
            )}
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            {resumeData.education.length === 0 ? (
              <div className="text-center py-8">
                <div className="text-muted mb-4">
                  <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                  <p>No education added yet</p>
                </div>
                <button onClick={addEducation} className="btn btn-primary">
                  Add Education
                </button>
              </div>
            ) : (
              <>
                {resumeData.education.map((edu, i) => (
                  <div key={i} className="card p-4 space-y-4">
                    <div className="flex justify-between items-start">
                      <h4 className="font-medium text-foreground">Education #{i + 1}</h4>
                      <button
                        onClick={() => removeEducation(i)}
                        className="btn btn-ghost btn-sm text-error hover:bg-error/10"
                        aria-label="Remove education"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="form-group">
                        <label className="form-label">School/University</label>
                        <input
                          type="text"
                          className="form-input"
                          value={edu.school}
                          onChange={(e) => updateEducation(i, "school", e.target.value)}
                          placeholder="University Name"
                        />
                      </div>
                      
                      <div className="form-group">
                        <label className="form-label">Degree/Program</label>
                        <input
                          type="text"
                          className="form-input"
                          value={edu.degree}
                          onChange={(e) => updateEducation(i, "degree", e.target.value)}
                          placeholder="Bachelor of Science"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="form-group">
                        <label className="form-label">Start Date</label>
                        <input
                          type="month"
                          className="form-input"
                          value={edu.start}
                          onChange={(e) => updateEducation(i, "start", e.target.value)}
                        />
                      </div>
                      
                      <div className="form-group">
                        <label className="form-label">End Date</label>
                        <input
                          type="month"
                          className="form-input"
                          value={edu.end}
                          onChange={(e) => updateEducation(i, "end", e.target.value)}
                        />
                      </div>
                    </div>
                    
                    <div className="form-group">
                      <label className="form-label">Description (Optional)</label>
                      <textarea
                        className="form-input resize-none"
                        rows={2}
                        value={edu.description}
                        onChange={(e) => updateEducation(i, "description", e.target.value)}
                        placeholder="GPA, honors, relevant coursework, etc."
                      />
                    </div>
                  </div>
                ))}
                
                <button onClick={addEducation} className="btn btn-secondary w-full">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Add Another Education
                </button>
              </>
            )}
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="form-group">
              <label className="form-label">Add Skills</label>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (skillInput.trim()) {
                    addSkill(skillInput);
                    setSkillInput("");
                  }
                }}
                className="flex gap-2"
              >
                <input
                  type="text"
                  className="form-input flex-1"
                  value={skillInput}
                  onChange={(e) => setSkillInput(e.target.value)}
                  placeholder="e.g., JavaScript, React, Python"
                  maxLength={30}
                />
                <button type="submit" className="btn btn-accent">
                  Add
                </button>
              </form>
            </div>
            
            {resumeData.skills.length > 0 && (
              <div>
                <h4 className="form-label mb-3">Your Skills ({resumeData.skills.length})</h4>
                <div className="flex flex-wrap gap-2">
                  {resumeData.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium"
                    >
                      {skill}
                      <button
                        onClick={() => removeSkill(i)}
                        className="hover:text-error transition-colors"
                        aria-label={`Remove ${skill} skill`}
                      >
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {resumeData.skills.length === 0 && (
              <div className="text-center py-8 text-muted">
                <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <p>Add your skills to showcase your expertise</p>
              </div>
            )}
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            {resumeData.projects.length === 0 ? (
              <div className="text-center py-8">
                <div className="text-muted mb-4">
                  <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  <p>No projects added yet</p>
                </div>
                <button onClick={addProject} className="btn btn-primary">
                  Add Project
                </button>
              </div>
            ) : (
              <>
                {resumeData.projects.map((project, i) => (
                  <div key={i} className="card p-4 space-y-4">
                    <div className="flex justify-between items-start">
                      <h4 className="font-medium text-foreground">Project #{i + 1}</h4>
                      <button
                        onClick={() => removeProject(i)}
                        className="btn btn-ghost btn-sm text-error hover:bg-error/10"
                        aria-label="Remove project"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="form-group">
                        <label className="form-label">Project Name</label>
                        <input
                          type="text"
                          className="form-input"
                          value={project.name}
                          onChange={(e) => updateProject(i, "name", e.target.value)}
                          placeholder="My Awesome Project"
                        />
                      </div>
                      
                      <div className="form-group">
                        <label className="form-label">Project URL (Optional)</label>
                        <input
                          type="url"
                          className="form-input"
                          value={project.url}
                          onChange={(e) => updateProject(i, "url", e.target.value)}
                          placeholder="https://github.com/username/project"
                        />
                      </div>
                    </div>
                    
                    <div className="form-group">
                      <label className="form-label">Project Description</label>
                      <textarea
                        className="form-input resize-none"
                        rows={3}
                        value={project.description}
                        onChange={(e) => updateProject(i, "description", e.target.value)}
                        placeholder="Describe what you built, technologies used, and key achievements..."
                      />
                    </div>
                  </div>
                ))}
                
                <button onClick={addProject} className="btn btn-secondary w-full">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Add Another Project
                </button>
              </>
            )}
          </div>
        );

      default:
        return null;
    }
  }

  return (
    <div className="space-y-6">
      {/* Step Indicator */}
      <div className="relative">
        <div className="flex items-center justify-between mb-8">
          {STEPS.map((stepInfo, index) => (
            <div key={stepInfo.id} className="flex flex-col items-center relative">
              <button
                onClick={() => setStep(index)}
                className={`w-10 h-10 rounded-full flex items-center justify-center font-medium text-sm transition-all focus-ring ${
                  index === step
                    ? "bg-primary text-white shadow-md"
                    : index < step
                    ? "bg-success text-white"
                    : "bg-muted text-secondary border border-border"
                }`}
                aria-current={index === step ? "step" : undefined}
              >
                {index < step ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  index + 1
                )}
              </button>
              <div className="mt-2 text-center">
                <div className={`text-xs font-medium ${index === step ? "text-primary" : "text-secondary"}`}>
                  {stepInfo.title}
                </div>
                <div className="text-xs text-muted hidden md:block">
                  {stepInfo.description}
                </div>
              </div>
              {index < STEPS.length - 1 && (
                <div
                  className={`absolute top-5 left-full w-full h-0.5 -translate-y-1/2 ${
                    index < step ? "bg-success" : "bg-border"
                  }`}
                  style={{ width: "calc(100% - 2.5rem)" }}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <div className="min-h-[400px]">
        {renderStepContent()}
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-6 border-t border-border">
        <button
          onClick={() => setStep(Math.max(0, step - 1))}
          disabled={step === 0}
          className="btn btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Previous
        </button>
        
        <div className="text-sm text-muted">
          Step {step + 1} of {STEPS.length}
        </div>
        
        <button
          onClick={() => setStep(Math.min(STEPS.length - 1, step + 1))}
          disabled={step === STEPS.length - 1}
          className="btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
