import React from 'react'
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaFilePdf,
} from 'react-icons/fa'
import { SiTailwindcss, SiVite } from 'react-icons/si'
import { CgWebsite } from 'react-icons/cg'
import { RiPagesLine } from 'react-icons/ri'
import { GrOptimize } from 'react-icons/gr'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const toolset = [
  { name: 'HTML5', detail: 'Semantic structure + accessibility anchors.', icon: <FaHtml5 className="text-orange-500 text-5xl" /> },
  { name: 'CSS3', detail: 'Layered layouts, fluid grids, custom animations.', icon: <FaCss3Alt className="text-blue-500 text-5xl" /> },
  { name: 'JavaScript', detail: 'Interaction logic and state orchestration.', icon: <FaJs className="text-yellow-400 text-5xl" /> },
  { name: 'React', detail: 'Component-driven architecture with hooks.', icon: <FaReact className="text-cyan-400 text-5xl" /> },
  { name: 'Tailwind CSS', detail: 'Design tokens + rapid responsive styling.', icon: <SiTailwindcss className="text-sky-400 text-5xl" /> },
  { name: 'Git', detail: 'Clean commits, branching, and collaboration.', icon: <FaGitAlt className="text-orange-600 text-5xl" /> },
  { name: 'Vite', detail: 'Fast build tooling for prototypes & launches.', icon: <SiVite className="text-purple-500 text-5xl" /> },
]

const services = [
  {
    icon: <CgWebsite className="text-emerald-700 text-4xl" />,
    title: 'Static experiences',
    description: 'Editorial-style landing pages for portfolios, events, and small businesses.',
  },
  {
    icon: <RiPagesLine className="text-emerald-700 text-4xl" />,
    title: 'Single-page apps',
    description: 'Snappy React builds with smooth route transitions and modern UI motion.',
  },
  {
    icon: <GrOptimize className="text-emerald-700 text-4xl" />,
    title: 'Redesign + audits',
    description: 'Reworking existing sites to improve hierarchy, responsiveness, and performance.',
  },
]

const Skills = () => {
  return (
    <section className="bg-gradient-to-br from-white via-emerald-50 to-white px-6 py-20 md:px-12 lg:px-20 -mt-10">
      <div className="mx-auto max-w-6xl space-y-16">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-start">
          <motion.div
            className="space-y-5 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-sm uppercase tracking-[0.4em] text-emerald-600/80" style={{ fontFamily: 'satoshi-medium' }}>
              Skill architecture
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl text-stone-900" style={{ fontFamily: 'satoshi-black' }}>
              My tools are arranged like a modular design lab.
            </h1>
            <p className="text-stone-600 leading-relaxed" style={{ fontFamily: 'satoshi-medium' }}>
              Every project starts with understanding the vibe, then assembling components, tokens, and animations that support it.
              Here’s the stack I reach for to keep things performant and visually tuned.
            </p>
            <div className="grid grid-cols-2 gap-3 pt-4">
              <div className="rounded-2xl border border-stone-200 bg-white/70 p-4 text-left">
                <p className="text-3xl text-stone-900" style={{ fontFamily: 'satoshi-black' }}>07+</p>
                <p className="text-xs uppercase tracking-[0.3em] text-stone-400" style={{ fontFamily: 'satoshi-medium' }}>
                  Core tools mastered
                </p>
              </div>
              <div className="rounded-2xl border border-stone-200 bg-white/70 p-4 text-left">
                <p className="text-3xl text-stone-900" style={{ fontFamily: 'satoshi-black' }}>∞</p>
                <p className="text-xs uppercase tracking-[0.3em] text-stone-400" style={{ fontFamily: 'satoshi-medium' }}>
                  Layout combinations
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="grid gap-6 sm:grid-cols-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {toolset.map((tool) => (
              <div
                key={tool.name}
                className="rounded-3xl border border-stone-100 bg-white/80 p-6 text-left shadow-sm backdrop-blur"
                style={{ fontFamily: 'satoshi-medium' }}
              >
                <div className="mb-4">{tool.icon}</div>
                <h3 className="text-xl text-stone-900" style={{ fontFamily: 'satoshi-bold' }}>
                  {tool.name}
                </h3>
                <p className="text-sm text-stone-600 mt-2">{tool.detail}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            className="rounded-3xl border border-stone-100 bg-white/90 p-8 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-sm uppercase tracking-[0.4em] text-stone-400" style={{ fontFamily: 'satoshi-medium' }}>
              Services
            </p>
            <h2 className="text-3xl text-stone-900 mt-3" style={{ fontFamily: 'satoshi-black' }}>
              What I can build for you
            </h2>
            <div className="mt-8 space-y-6">
              {services.map((service, index) => (
                <div key={service.title} className="flex gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl text-stone-900" style={{ fontFamily: 'satoshi-bold' }}>
                      {service.title}
                    </h3>
                    <p className="text-sm text-stone-600" style={{ fontFamily: 'satoshi-medium' }}>
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="rounded-[2.5rem] bg-stone-900 text-white p-8 flex flex-col justify-between shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div>
              <p className="text-sm uppercase tracking-[0.5em] text-white/60" style={{ fontFamily: 'satoshi-medium' }}>
                Resume capsule
              </p>
              <h3 className="mt-4 text-3xl" style={{ fontFamily: 'satoshi-black' }}>
                Dive deeper into my process, tools, and timeline.
              </h3>
              <p className="mt-3 text-white/80" style={{ fontFamily: 'satoshi-medium' }}>
                The PDF format includes a curated list of projects, responsibilities, and the way I move ideas to shipped pages.
              </p>
            </div>
            <Link
              to="/resume"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-stone-900 font-semibold transition hover:bg-white/90"
              style={{ fontFamily: 'satoshi-bold' }}
            >
              <FaFilePdf className="text-rose-500" />
              View / Download Resume
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skills
