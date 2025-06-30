import React from "react";
import { ResumeData } from "../ResumeForm";

/**
 * PUBLIC_INTERFACE
 * Modern (default) resume template.
 */
export default function ModernTemplate({ data }: { data: ResumeData }) {
  return (
    <div
      style={{
        maxWidth: 710,
        margin: "0 auto",
        padding: 0,
        fontFamily: "Inter, Arial, sans-serif",
        color: "#222",
        background: "#fff",
      }}
    >
      <header
        style={{
          borderBottom: "3px solid #2563eb",
          paddingBottom: 16,
          marginBottom: 14,
        }}
      >
        <h2
          style={{
            fontSize: 32,
            fontWeight: 700,
            color: "#2563eb",
            letterSpacing: "-0.5px",
          }}
        >
          {data.personal.name || "Your Name"}
        </h2>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", color: "#64748b", fontSize: 15 }}>
          <span>{data.personal.email}</span>
          {data.personal.phone && <span> | {data.personal.phone}</span>}
          {data.personal.location && <span> | {data.personal.location}</span>}
        </div>
        {data.personal.summary && (
          <p style={{ fontSize: 15, color: "#353535", marginTop: 9 }}>
            {data.personal.summary}
          </p>
        )}
      </header>
      {data.work.length > 0 && (
        <section style={{ marginBottom: 18 }}>
          <h3 style={{ color: "#2563eb", borderLeft: "4px solid #2563eb", paddingLeft: 8, fontSize: 20, fontWeight: 600}}>
            Work Experience
          </h3>
          {data.work.map((job, idx) => (
            <div key={idx} style={{ marginBottom: 9 }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                <b>{job.position}</b>
                <span style={{ fontSize: 16, color: "#64748b" }}>
                  {job.company}
                </span>
                <span style={{ marginLeft: "auto", fontSize: 14, color: "#888" }}>
                  {job.start && `${job.start}`} -
                  {job.end ? ` ${job.end}` : " Present"}
                </span>
              </div>
              {job.description && (
                <div style={{ whiteSpace: "pre-line", fontSize: 15, color: "#32323a" }}>
                  {job.description}
                </div>
              )}
            </div>
          ))}
        </section>
      )}
      {data.education.length > 0 && (
        <section style={{ marginBottom: 18 }}>
          <h3 style={{ color: "#64748b", borderLeft: "4px solid #64748b", paddingLeft: 8, fontSize: 20, fontWeight: 600 }}>
            Education
          </h3>
          {data.education.map((ed, idx) => (
            <div key={idx} style={{ marginBottom: 9 }}>
              <b>{ed.degree}</b> at{" "}
              <span style={{ color: "#64748b" }}>{ed.school}</span>
              <span style={{ marginLeft: 12, fontSize: 14, color: "#888" }}>
                {ed.start && `${ed.start}`} - {ed.end ? ed.end : "Present"}
              </span>
              {ed.description && (
                <div style={{ whiteSpace: "pre-line", fontSize: 15, color: "#222" }}>
                  {ed.description}
                </div>
              )}
            </div>
          ))}
        </section>
      )}
      {data.skills.length > 0 && (
        <section style={{ marginBottom: 18 }}>
          <h3 style={{ color: "#f59e42", borderLeft: "4px solid #f59e42", paddingLeft: 8, fontSize: 20, fontWeight: 600 }}>
            Skills
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5em" }}>
            {data.skills.map((s, i) => (
              <span
                key={i}
                style={{
                  background: "#f59e42",
                  color: "#fff",
                  fontWeight: 500,
                  borderRadius: 16,
                  padding: "0.35em 0.9em",
                  fontSize: 14,
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </section>
      )}
      {data.projects.length > 0 && (
        <section>
          <h3 style={{ color: "#2563eb", borderLeft: "4px solid #2563eb", paddingLeft: 8, fontSize: 20, fontWeight: 600 }}>
            Projects
          </h3>
          {data.projects.map((p, i) => (
            <div key={i} style={{ marginBottom: 9 }}>
              <b>{p.name}</b>
              {p.url && (
                <a
                  href={p.url}
                  style={{ color: "#2563eb", fontSize: 14, marginLeft: 6 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  [{p.url}]
                </a>
              )}
              <div style={{ whiteSpace: "pre-line", fontSize: 15, color: "#353535" }}>
                {p.description}
              </div>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
