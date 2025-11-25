import React from "react";
import { Link } from "react-router-dom";
import myImg from "../assets/pfp.jpg";
import { motion } from "framer-motion";
import { FiFeather, FiLayers, FiHeart } from "react-icons/fi";
import ContactPanel from "../components/ContactPanel";

const focusAreas = [
  {
    title: "Design-first builder",
    description: "Layout grids, typography, and rhythm guide every component I ship.",
    icon: <FiFeather size={28} />,
    accent: "bg-rose-50",
  },
  {
    title: "Systems over pages",
    description: "Reusable sections, tokens, and documentation for future-proof projects.",
    icon: <FiLayers size={28} />,
    accent: "bg-emerald-50",
  },
  {
    title: "Human-centered",
    description: "Interfaces are meant to feel kind—accessible, fast, and story-driven.",
    icon: <FiHeart size={28} />,
    accent: "bg-sky-50",
  },
];

const timeline = [
  {
    period: "2024 — Present",
    title: "Freelance & academic builds",
    copy: "Partnering with small brands and building polished coursework projects using React + Tailwind.",
  },
  {
    period: "2023",
    title: "Apps Dev foundations",
    copy: "Practiced HTML/CSS storytelling, honed responsive layouts, and embraced component thinking.",
  },
  {
    period: "Always learning",
    title: "Curiosity as a roadmap",
    copy: "Exploring new frameworks, design references, and creative hobbies (music, gaming) to inspire solutions.",
  },
];

const About = () => {
  return (
    <>
      <section className="bg-[#f4fbf7] px-6 py-20 md:px-12 lg:px-20 -mt-10">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1fr_1.1fr]">
          <motion.div
            className="order-2 space-y-6 text-center lg:order-1 lg:text-left"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-sm uppercase tracking-[0.4em] text-emerald-600/80" style={{ fontFamily: "satoshi-medium" }}>
              About Marvin
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl text-stone-900" style={{ fontFamily: "satoshi-black" }}>
              I move sections around like puzzle pieces until the story feels right.
            </h1>
            <p className="text-stone-600 leading-relaxed" style={{ fontFamily: "satoshi-medium" }}>
              Hi, I’m <span className="text-stone-900 font-semibold">Marvin Barro</span>—an aspiring frontend developer building modern,
              flexible layouts for portfolios, landing pages, and product ideas. My approach: think like a designer, code like an engineer,
              and keep empathy at the center.
            </p>
            <p className="text-stone-600 leading-relaxed" style={{ fontFamily: "satoshi-medium" }}>
              Outside of code, I lean on music and gaming to recharge, drawing inspiration from pacing, color palettes, and storytelling. All
              of that informs how I re-arrange interfaces to feel balanced and memorable.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-2 lg:justify-start">
              <Link
                to="/projects"
                className="rounded-full bg-stone-900 px-6 py-3 text-white shadow-lg transition hover:-translate-y-0.5"
                style={{ fontFamily: "satoshi-bold" }}
              >
                Browse projects
              </Link>
              <Link
                to="/skills"
                className="rounded-full border border-stone-900 px-6 py-3 text-stone-900 hover:bg-stone-900 hover:text-white transition"
                style={{ fontFamily: "satoshi-bold" }}
              >
                Skillset map
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2 relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="absolute -top-10 -right-6 h-32 w-32 rounded-full bg-emerald-200/50 blur-3xl" />
            <div className="absolute -bottom-12 -left-4 h-24 w-24 rounded-full bg-rose-200/50 blur-3xl" />
            <div className="relative rounded-[2.5rem] border border-white/70 bg-white/80 p-6 shadow-2xl backdrop-blur">
              <div className="rounded-[2rem] bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 p-4">
                <img
                  src={myImg}
                  alt="Marvin Barro"
                  className="h-[420px] w-full rounded-[1.5rem] object-cover"
                />
              </div>
              <div className="mt-6 rounded-2xl border border-stone-100 bg-white/90 p-5 text-left">
                <p className="text-xs uppercase tracking-[0.4em] text-stone-500" style={{ fontFamily: "satoshi-medium" }}>
                  Currently focused on
                </p>
                <p className="text-2xl text-stone-900" style={{ fontFamily: "satoshi-black" }}>
                  Immersive landing revamps
                </p>
                <p className="text-sm text-stone-500 mt-2" style={{ fontFamily: "satoshi-medium" }}>
                  Pairing Tailwind CSS, Framer Motion, and React Router to choreograph layouts.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto max-w-5xl space-y-12">
          <div className="grid gap-6 md:grid-cols-3">
            {focusAreas.map((area) => (
              <motion.div
                key={area.title}
                className={`rounded-3xl border border-stone-100 ${area.accent} p-5 text-left shadow-sm`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                style={{ fontFamily: "satoshi-medium" }}
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-stone-700 shadow">
                  {area.icon}
                </div>
                <h3 className="text-xl text-stone-900" style={{ fontFamily: "satoshi-bold" }}>
                  {area.title}
                </h3>
                <p className="mt-2 text-sm text-stone-600">{area.description}</p>
              </motion.div>
            ))}
          </div>

          <div>
            <h2 className="text-2xl text-stone-900" style={{ fontFamily: "satoshi-black" }}>
              A timeline of how I build
            </h2>
            <p className="text-stone-600 mt-2" style={{ fontFamily: "satoshi-medium" }}>
              Every project is a remix of research, iteration, and collaborative feedback loops.
            </p>

            <div className="mt-10 relative border-l-2 border-stone-200 pl-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.period}
                  className="pb-10 last:pb-0"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="absolute -left-[9px] mt-1 h-4 w-4 rounded-full border-4 border-white bg-stone-900 shadow" />
                  <p className="text-sm uppercase tracking-[0.3em] text-stone-400" style={{ fontFamily: "satoshi-medium" }}>
                    {item.period}
                  </p>
                  <h3 className="text-xl text-stone-900" style={{ fontFamily: "satoshi-bold" }}>
                    {item.title}
                  </h3>
                  <p className="text-stone-600 mt-2" style={{ fontFamily: "satoshi-medium" }}>
                    {item.copy}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-emerald-50 via-white to-sky-50 px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto max-w-5xl grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-center">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-sm uppercase tracking-[0.4em] text-emerald-600/80" style={{ fontFamily: "satoshi-medium" }}>
              Contact
            </p>
            <h2 className="text-3xl text-stone-900" style={{ fontFamily: "satoshi-black" }}>
              Let’s open a conversation
            </h2>
            <p className="text-stone-600 text-lg" style={{ fontFamily: "satoshi-medium" }}>
              Whether you’re refining a portfolio, planning a case study, or prototyping an app, I can help shape layouts,
              motion, and the entire front-end story.
            </p>
            <div className="rounded-3xl border border-stone-200 bg-white/80 p-6 shadow-sm backdrop-blur">
              <p className="text-stone-600" style={{ fontFamily: "satoshi-medium" }}>
                Prefer async? Drop a quick note through email or socials—I usually respond within a day.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <ContactPanel hideHeading />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
