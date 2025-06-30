import React from "react";
import { ResumeData } from "../ResumeForm";

/**
 * PUBLIC_INTERFACE
 * Elegant resume template: left colored sidebar, accent highlights.
 */
export default function ElegantTemplate({ data }: { data: ResumeData }) {
  return (
    <div
      style={{
        display: "flex",
        maxWidth: 840,
        minHeight: 680,
        background: "#fff",
        borderRadius: 12,
        boxShadow: "0 3px 17px 0 rgba(70,100,129,0.09)",
        overflow: "hidden",
        fontFamily: "Inter, Arial, Helvetica, sans-serif",
      }}
    >
      {/* Sidebar */}
      <aside
        style={{
          background: "linear-gradient(180deg,#2563eb 70%,#f59e42 100%)",
          color: "#fff",
          width: 220,
          flexShrink: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "38px 0"
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontSize: 26,
              fontWeight: 700,
              letterSpacing: -0.6,
              lineHeight: "1.25em",
              marginBottom: 9
            }}
          >
            {data.personal.name || "Your Name"}
          </div>
          <div style={{ fontSize: 15, opacity: 0.98, marginBottom: 5 }}>{data.personal.email}</div>
          {data.personal.phone && <div style={{ fontSize: 15 }}>{data.personal.phone}</div>}
          {data.personal.location && <div style={{ fontSize: 14, opacity: 0.89 }}>{data.personal.location}</div>}
        </div>
        <div
          style={{
            fontSize: 14,
            opacity: 0.97,
            marginTop: 20,
            padding: "0 10px",
            color: "#ffeedd"
          }}
        >
          {data.personal.summary}
        </div>
        {data.skills.length > 0 && (
          <div style={{ marginTop: 36, width: "90%" }}>
            <h4 style={{ color: "#ffe6ba", fontWeight: 600 }}>SKILLS</h4>
            <ul style={{ paddingLeft: 4, margin: 0, marginTop: 7 }}>
              {data.skills.map((s, i) => (
                <li
                  key={i}
                  style={{
                    fontSize: 14,
                    marginBottom: 2,
                    paddingLeft: 0,
                    listStyle: "disc inside",
                  }}
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </aside>

      {/* Main Content */}
      <div
        style={{
          flex: 1,
          padding: "36px 32px 20px 36px",
          background: "#fff",
          minHeight: 600,
          color: "#222"
        }}
      >
        {data.work.length > 0 && (
          <section style={{ marginBottom: 16 }}>
            <h3 style={{
              color: "#2563eb",
              fontWeight: 700,
              marginBottom: 4,
              fontSize: 19,
              letterSpacing: "-0.5px"
            }}>Work Experience</h3>
            {data.work.map((job, idx) => (
              <div key={idx} style={{ marginBottom: 9 }}>
                <div style={{ fontWeight: 600, fontSize: 15, color: "#333" }}>{job.position || <i>Title</i>} <span style={{ color: "#64748b" }}>@ {job.company}</span></div>
                <div style={{ fontSize: 13, color: "#a8a8a8", marginBottom: 2 }}>
                  {job.start && `${job.start}`} {job.end ? `- ${job.end}` : " - Present"}
                </div>
                <div style={{ whiteSpace: "pre-line", fontSize: 14, color: "#464646" }}>
                  {job.description}
                </div>
              </div>
            ))}
          </section>
        )}
        {data.education.length > 0 && (
          <section style={{ marginBottom: 16 }}>
            <h3 style={{
              color: "#f59e42",
              fontWeight: 700,
              marginBottom: 4,
              fontSize: 19,
              letterSpacing: "-0.5px"
            }}>Education</h3>
            {data.education.map((ed, idx) => (
              <div key={idx} style={{ marginBottom: 9 }}>
                <span style={{ fontWeight: 600 }}>{ed.degree} at {ed.school}</span>
                <span style={{ marginLeft: 10, fontSize: 13, color: "#64748b" }}>
                  {ed.start && `${ed.start}`}{ed.end ? ` - ${ed.end}` : " - Present"}
                </span>
                <div style={{ whiteSpace: "pre-line", fontSize: 14, color: "#464646" }}>
                  {ed.description}
                </div>
              </div>
            ))}
          </section>
        )}
        {data.projects.length > 0 && (
          <section>
            <h3 style={{
              color: "#2563eb",
              fontWeight: 700,
              marginBottom: 4,
              fontSize: 19,
              letterSpacing: "-0.5px"
            }}>Projects</h3>
            {data.projects.map((p, i) => (
              <div key={i} style={{ marginBottom: 9 }}>
                <span style={{ fontWeight: 600 }}>{p.name}</span>
                {p.url && (
                  <a
                    href={p.url}
                    style={{ color: "#f59e42", fontSize: 14, marginLeft: 8 }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    [{p.url}]
                  </a>
                )}
                <div style={{ whiteSpace: "pre-line", fontSize: 14, color: "#464646" }}>
                  {p.description}
                </div>
              </div>
            ))}
          </section>
        )}
      </div>
    </div>
  );
}
