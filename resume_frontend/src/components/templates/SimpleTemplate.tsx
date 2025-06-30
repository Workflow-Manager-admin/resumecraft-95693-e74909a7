import React from "react";
import { ResumeData } from "../ResumeForm";

/**
 * PUBLIC_INTERFACE
 * Simple resume template: clean, understated, thin borders.
 */
export default function SimpleTemplate({ data }: { data: ResumeData }) {
  return (
    <div
      style={{
        maxWidth: 720,
        margin: "0 auto",
        fontFamily: "Arial,Helvetica,sans-serif",
        background: "#fafbfc",
        color: "#222",
        boxShadow: "0 2px 8px rgba(100, 100, 100, 0.07)",
        padding: "30px 24px 24px 24px",
        border: "1px solid #e6e8f0",
        borderRadius: 6,
      }}
    >
      <header style={{ borderBottom: "1px solid #ddd", paddingBottom: 6, marginBottom: 12 }}>
        <h2 style={{ fontSize: 30, fontWeight: 600, color: "#171717" }}>{data.personal.name || "Your Name"}</h2>
        <span style={{ fontSize: 14, color: "#666" }}>{data.personal.email}</span>
        {data.personal.phone && <span> | {data.personal.phone}</span>}
        {data.personal.location && <span> | {data.personal.location}</span>}
        {data.personal.summary && (
          <p style={{ fontSize: 15, color: "#4a5458", marginTop: 7 }}>{data.personal.summary}</p>
        )}
      </header>
      {data.work.length > 0 && (
        <section style={{ marginBottom: 12 }}>
          <SectionTitle title="Work Experience" />
          {data.work.map((job, idx) => (
            <div key={idx} style={{ marginBottom: 8 }}>
              <div>
                <b>{job.position}</b> <span style={{ color: "#56697a" }}>@ {job.company}</span>
                <span style={{ marginLeft: 14, fontSize: 12, color: "#aaa" }}>
                  {job.start && `${job.start}`}{job.end ? ` - ${job.end}` : " - Present"}
                </span>
              </div>
              {job.description && (
                <div style={{ whiteSpace: "pre-line", fontSize: 14, color: "#4c4c4c" }}>{job.description}</div>
              )}
            </div>
          ))}
        </section>
      )}
      {data.education.length > 0 && (
        <section style={{ marginBottom: 12 }}>
          <SectionTitle title="Education" />
          {data.education.map((ed, idx) => (
            <div key={idx} style={{ marginBottom: 8 }}>
              <b>{ed.degree}</b> at <span style={{ color: "#56697a" }}>{ed.school}</span>
              <span style={{ marginLeft: 14, fontSize: 12, color: "#aaa" }}>
                {ed.start && `${ed.start}`}{ed.end ? ` - ${ed.end}` : " - Present"}
              </span>
              {ed.description && (
                <div style={{ whiteSpace: "pre-line", fontSize: 14, color: "#4c4c4c" }}>{ed.description}</div>
              )}
            </div>
          ))}
        </section>
      )}
      {data.skills.length > 0 && (
        <section style={{ marginBottom: 10 }}>
          <SectionTitle title="Skills" />
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.40em" }}>
            {data.skills.map((s, i) => (
              <span key={i} style={{
                border: "1px solid #e6e8f0",
                borderRadius: 16,
                padding: "0.32em 0.85em",
                fontSize: 13,
                marginBottom: 2
              }}>{s}</span>
            ))}
          </div>
        </section>
      )}
      {data.projects.length > 0 && (
        <section>
          <SectionTitle title="Projects" />
          {data.projects.map((p, i) => (
            <div key={i} style={{ marginBottom: 9 }}>
              <b>{p.name}</b>
              {p.url && (
                <a href={p.url} style={{ color: "#2563eb", fontSize: 14, marginLeft: 8 }} target="_blank" rel="noopener noreferrer">
                  [{p.url}]
                </a>
              )}
              <div style={{ whiteSpace: "pre-line", fontSize: 14, color: "#4c4c4c" }}>
                {p.description}
              </div>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
function SectionTitle({ title }: { title: string }) {
  return <h3 style={{ fontSize: 18, color: "#2563eb", marginBottom: 5, fontWeight: 500 }}>{title}</h3>;
}
