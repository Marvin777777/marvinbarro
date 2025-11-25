import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import resumePDF from "../assets/MarvinBarro_Resume.pdf";

const resumeHighlights = [
  "Detailed timeline of freelance commissions and academic projects.",
  "Breakdown of the stacks, tools, and UI methodologies I lean on.",
  "Snapshot of soft skills, collaboration style, and availability.",
];

const Resume = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-stone-900 via-black to-stone-900 px-6 py-20 text-white">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 lg:flex-row">
        <motion.div
          className="flex-1 rounded-[2.5rem] bg-white/10 p-8 backdrop-blur"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-[0.4em] text-emerald-200/80" style={{ fontFamily: "satoshi-medium" }}>
            Resume capsule
          </p>
          <h1 className="mt-4 text-4xl" style={{ fontFamily: "satoshi-black" }}>
            A curated document that mirrors this rearranged UI.
          </h1>
          <p className="mt-4 text-white/80 leading-relaxed" style={{ fontFamily: "satoshi-medium" }}>
            I treat my resume like a living product—updated with the latest client collaborations, learning sprints, and the
            design systems I am building. Download it to see how these layouts translate into responsibilities and impact.
          </p>

          <ul className="mt-8 space-y-4 text-white/80" style={{ fontFamily: "satoshi-medium" }}>
            {resumeHighlights.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={resumePDF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-stone-900 font-semibold transition hover:bg-white/90"
              style={{ fontFamily: "satoshi-bold" }}
            >
              View / Download Resume
            </a>
            <Link
              to="/projects"
              className="inline-flex items-center justify-center rounded-full border border-white px-6 py-3 text-white font-semibold transition hover:bg-white hover:text-stone-900"
              style={{ fontFamily: "satoshi-bold" }}
            >
              See related work
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="flex-1 rounded-[2.5rem] bg-white p-8 text-stone-900 shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.4em] text-stone-400" style={{ fontFamily: "satoshi-medium" }}>
              Snapshot
            </p>
            <h2 className="text-3xl" style={{ fontFamily: "satoshi-black" }}>
              What to expect inside
            </h2>
            <p className="text-stone-600" style={{ fontFamily: "satoshi-medium" }}>
              The document outlines education, freelance commissions, and the stack powering this new aesthetic layout—React,
              Tailwind, Framer Motion, and intentional content strategy.
            </p>
          </div>

          <div className="mt-6 grid gap-4">
            {[
              { label: "Focus", value: "Frontend development & UI polish" },
              { label: "Location", value: "Cordova, Cebu, Philippines" },
              { label: "Availability", value: "Freelance & collaboration-ready" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-stone-200 bg-stone-50 p-4"
                style={{ fontFamily: "satoshi-medium" }}
              >
                <p className="text-xs uppercase tracking-[0.3em] text-stone-400">{item.label}</p>
                <p className="text-lg text-stone-900" style={{ fontFamily: "satoshi-bold" }}>
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-stone-500" style={{ fontFamily: "satoshi-medium" }}>
            Want a guided tour of the resume? Reach out via the contact drawer in the header and I’ll walk you through the highlights.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
