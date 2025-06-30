import React, { useState } from "react";

/** --- Resume Data Types and Defaults --- */
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
  "Personal Info",
  "Work Experience",
  "Education",
  "Skills",
  "Projects"
];

/**
 * PUBLIC_INTERFACE
 * Multi-step form for entering all resume data.
 */
export default function ResumeForm({
  resumeData,
  setResumeData,
}: Props) {
  const [step, setStep] = useState(0);

  // Changes for top-level fields
  function updatePersonal(field: keyof ResumeData["personal"], value: string) {
    setResumeData({
      ...resumeData,
      personal: {
        ...resumeData.personal,
        [field]: value,
      },
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
      work: resumeData.work.map((w, i) =>
        i === idx ? { ...w, [field]: value } : w
      ),
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
  function updateEducation(
    idx: number,
    field: keyof ResumeData["education"][0],
    value: string
  ) {
    setResumeData({
      ...resumeData,
      education: resumeData.education.map((e, i) =>
        i === idx ? { ...e, [field]: value } : e
      ),
    });
  }
  function removeEducation(idx: number) {
    setResumeData({
      ...resumeData,
      education: resumeData.education.filter((_, i) => i !== idx),
    });
  }

  function addSkill(skill: string) {
    setResumeData({
      ...resumeData,
      skills: [...resumeData.skills, skill],
    });
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
  function updateProject(
    idx: number,
    field: keyof ResumeData["projects"][0],
    value: string
  ) {
    setResumeData({
      ...resumeData,
      projects: resumeData.projects.map((p, i) =>
        i === idx ? { ...p, [field]: value } : p
      ),
    });
  }
  function removeProject(idx: number) {
    setResumeData({
      ...resumeData,
      projects: resumeData.projects.filter((_, i) => i !== idx),
    });
  }

  /* Form step content renderers */
  // Skill input state must be at the component top-level (not inside renderStep)
  const [skillInput, setSkillInput] = useState("");

  function renderStep() {
    switch (step) {
      case 0:
        // Personal Info
        return (
          <div className="flex flex-col gap-2">
            <label>
              Name
              <input
                className="input"
                type="text"
                value={resumeData.personal.name}
                onChange={(e) => updatePersonal("name", e.target.value)}
                placeholder="Your Full Name"
                required
              />
            </label>
            <label>
              Email
              <input
                className="input"
                type="email"
                value={resumeData.personal.email}
                onChange={(e) => updatePersonal("email", e.target.value)}
                placeholder="example@email.com"
                required
              />
            </label>
            <label>
              Phone
              <input
                className="input"
                type="tel"
                value={resumeData.personal.phone}
                onChange={(e) => updatePersonal("phone", e.target.value)}
                placeholder="+1 555-555-5555"
              />
            </label>
            <label>
              Location
              <input
                className="input"
                type="text"
                value={resumeData.personal.location}
                onChange={(e) => updatePersonal("location", e.target.value)}
                placeholder="City, Country"
              />
            </label>
            <label>
              Summary
              <textarea
                className="input"
                rows={2}
                value={resumeData.personal.summary}
                onChange={(e) => updatePersonal("summary", e.target.value)}
                placeholder="A brief professional summary"
              />
            </label>
          </div>
        );
      case 1:
        // Work Experience
        return (
          <div className="flex flex-col gap-3">
            {resumeData.work.length === 0 && (
              <span className="text-xs text-secondary">No work experience added.</span>
            )}
            {resumeData.work.map((exp, i) => (
              <div key={i} className="p-2 mb-2 bg-secondary/10 rounded">
                <div className="flex gap-2 items-end">
                  <label className="flex-1">
                    Company
                    <input
                      className="input"
                      type="text"
                      value={exp.company}
                      onChange={(e) => updateWork(i, "company", e.target.value)}
                      placeholder="Company Name"
                    />
                  </label>
                  <label className="flex-1">
                    Position
                    <input
                      className="input"
                      type="text"
                      value={exp.position}
                      onChange={(e) => updateWork(i, "position", e.target.value)}
                      placeholder="Title"
                    />
                  </label>
                  <button
                    type="button"
                    title="Remove"
                    onClick={() => removeWork(i)}
                    className="self-start ml-2 text-xs px-2 text-red-500"
                  >
                    ✖
                  </button>
                </div>
                <div className="flex gap-2 mt-1">
                  <label>
                    Start
                    <input
                      className="input"
                      type="month"
                      value={exp.start}
                      onChange={(e) => updateWork(i, "start", e.target.value)}
                    />
                  </label>
                  <label>
                    End
                    <input
                      className="input"
                      type="month"
                      value={exp.end}
                      onChange={(e) => updateWork(i, "end", e.target.value)}
                    />
                  </label>
                </div>
                <label className="block mt-1">
                  Description
                  <textarea
                    className="input"
                    rows={2}
                    value={exp.description}
                    onChange={(e) => updateWork(i, "description", e.target.value)}
                    placeholder="Describe your role and achievements"
                  />
                </label>
              </div>
            ))}
            <button
              type="button"
              className="button border-primary"
              onClick={addWork}
            >
              + Add Work
            </button>
          </div>
        );
      case 2:
        // Education
        return (
          <div className="flex flex-col gap-3">
            {resumeData.education.length === 0 && (
              <span className="text-xs text-secondary">No education added.</span>
            )}
            {resumeData.education.map((ed, i) => (
              <div key={i} className="p-2 mb-2 bg-secondary/10 rounded">
                <div className="flex gap-2 items-end">
                  <label className="flex-1">
                    School
                    <input
                      className="input"
                      type="text"
                      value={ed.school}
                      onChange={(e) => updateEducation(i, "school", e.target.value)}
                      placeholder="School Name"
                    />
                  </label>
                  <label className="flex-1">
                    Degree
                    <input
                      className="input"
                      type="text"
                      value={ed.degree}
                      onChange={(e) => updateEducation(i, "degree", e.target.value)}
                      placeholder="Degree/Program"
                    />
                  </label>
                  <button
                    type="button"
                    title="Remove"
                    onClick={() => removeEducation(i)}
                    className="self-start ml-2 text-xs px-2 text-red-500"
                  >
                    ✖
                  </button>
                </div>
                <div className="flex gap-2 mt-1">
                  <label>
                    Start
                    <input
                      className="input"
                      type="month"
                      value={ed.start}
                      onChange={(e) => updateEducation(i, "start", e.target.value)}
                    />
                  </label>
                  <label>
                    End
                    <input
                      className="input"
                      type="month"
                      value={ed.end}
                      onChange={(e) => updateEducation(i, "end", e.target.value)}
                    />
                  </label>
                </div>
                <label className="block mt-1">
                  Description
                  <textarea
                    className="input"
                    rows={2}
                    value={ed.description}
                    onChange={(e) => updateEducation(i, "description", e.target.value)}
                    placeholder="Describe your studies/achievements"
                  />
                </label>
              </div>
            ))}
            <button
              type="button"
              className="button border-primary"
              onClick={addEducation}
            >
              + Add Education
            </button>
          </div>
        );
      case 3:
        // Skills
        return (
          <div className="flex flex-col gap-1">
            <div className="flex flex-wrap gap-2 mb-2">
              {resumeData.skills.map((skill, i) => (
                <span
                  key={i}
                  className="inline-flex items-center border border-accent bg-accent/10 rounded-2xl px-2.5 py-1 text-xs font-mono mr-1 mt-1"
                >
                  {skill}
                  <button
                    type="button"
                    onClick={() => removeSkill(i)}
                    className="ml-1 text-secondary hover:text-red-500"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
            <form
              className="flex gap-1"
              onSubmit={(e) => {
                e.preventDefault();
                if (skillInput.trim()) {
                  addSkill(skillInput.trim());
                  setSkillInput("");
                }
              }}
            >
              <input
                className="input flex-1"
                value={skillInput}
                onChange={(e) => setSkillInput(e.target.value)}
                placeholder="Add skill"
                maxLength={32}
              />
              <button type="submit" className="button border-accent">
                Add
              </button>
            </form>
          </div>
        );
      case 4:
        // Projects
        return (
          <div className="flex flex-col gap-3">
            {resumeData.projects.length === 0 && (
              <span className="text-xs text-secondary">No projects added.</span>
            )}
            {resumeData.projects.map((proj, i) => (
              <div key={i} className="p-2 mb-2 bg-accent/10 rounded">
                <div className="flex gap-2 items-end">
                  <label className="flex-1">
                    Project Name
                    <input
                      className="input"
                      type="text"
                      value={proj.name}
                      onChange={(e) => updateProject(i, "name", e.target.value)}
                      placeholder="Project title"
                    />
                  </label>
                  <label className="flex-1">
                    URL
                    <input
                      className="input"
                      type="url"
                      value={proj.url}
                      onChange={(e) => updateProject(i, "url", e.target.value)}
                      placeholder="https://"
                      autoComplete="off"
                    />
                  </label>
                  <button
                    type="button"
                    title="Remove"
                    onClick={() => removeProject(i)}
                    className="self-start ml-2 text-xs px-2 text-red-500"
                  >
                    ✖
                  </button>
                </div>
                <label className="block mt-1">
                  Description
                  <textarea
                    className="input"
                    rows={2}
                    value={proj.description}
                    onChange={(e) => updateProject(i, "description", e.target.value)}
                    placeholder="Describe this project"
                  />
                </label>
              </div>
            ))}
            <button
              type="button"
              className="button border-accent"
              onClick={addProject}
            >
              + Add Project
            </button>
          </div>
        );
      default:
        return null;
    }
  }

  return (
    <form
      className="flex flex-col gap-2"
      autoComplete="off"
      onSubmit={(e) => e.preventDefault()}
    >
      <nav className="flex mb-3 gap-2 w-full justify-between text-xs">
        {STEPS.map((title, i) => (
          <button
            type="button"
            key={i}
            disabled={i > step}
            onClick={() => setStep(i)}
            className={`stepButton ${
              step === i ? "border-primary text-primary bg-primary/5" : "border-gray-200"
            }`}
          >
            {title}
          </button>
        ))}
      </nav>
      <div className="min-h-[250px]">{renderStep()}</div>
      <div className="flex justify-between gap-2 mt-2">
        <button
          type="button"
          className="button border-secondary"
          style={{ visibility: step === 0 ? "hidden" : undefined }}
          onClick={() => setStep((s) => Math.max(0, s - 1))}
        >
          Back
        </button>
        <button
          type="button"
          className="button border-primary"
          style={{ visibility: step === STEPS.length - 1 ? "hidden" : undefined }}
          onClick={() => setStep((s) => Math.min(s + 1, STEPS.length - 1))}
        >
          Next
        </button>
      </div>
      <style jsx>{`
        .input {
          width: 100%;
          border-radius: 0.375rem;
          border: 1px solid var(--tw-prose-hr, #64748b33);
          padding: 0.5em 0.65em;
          margin-top: 0.25em;
          color: inherit;
          background: transparent;
          outline: none;
          font-size: 1em;
        }
        .input:focus {
          border-color: #2563eb99;
        }
        .button {
          padding: 0.5em 1.15em;
          border: 1px solid;
          border-radius: 1.1em;
          background: transparent;
          color: inherit;
          cursor: pointer;
          font-size: 1em;
          transition: border-color 0.18s;
        }
        .button:hover {
          border-color: #2563eb;
        }
        .stepButton {
          flex: 1 1 0;
          border: 1px solid;
          border-radius: 10px;
          padding: 0.35em 0.4em;
          background: none;
          color: inherit;
          cursor: pointer;
          margin-right: 2px;
          transition: border-color 0.15s, background 0.15s;
          min-width: 0;
          white-space: nowrap;
        }
        .stepButton:disabled {
          opacity: 0.44;
          cursor: not-allowed;
        }
      `}</style>
    </form>
  );
}
