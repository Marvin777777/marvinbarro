import React from 'react'
import { Link } from 'react-router-dom'
import profileImg from '../assets/vin.jpg'
import { TypeAnimation } from 'react-type-animation'
import { FaLaptopCode } from 'react-icons/fa'
import { MdStyle } from 'react-icons/md'
import { TbComponents } from 'react-icons/tb'
import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'

const statHighlights = [
  { label: 'Projects shipped', value: '6', detail: 'Freelance & capstone builds' },
  { label: 'Design systems', value: '04', detail: 'Reusable component kits' },
  { label: 'Focus hours /wk', value: '30+', detail: 'Crafting front-end experiences' },
]

const craftHighlights = [
  {
    icon: <FaLaptopCode size={52} />,
    title: 'Pattern-driven code',
    copy: 'Atomic layouts, composable hooks, and readable semantics.',
  },
  {
    icon: <MdStyle size={52} />,
    title: 'Editorial-level styling',
    copy: 'Type scales, layering, and color systems tailored per brand.',
  },
  {
    icon: <TbComponents size={52} />,
    title: 'Playful interactions',
    copy: 'Micro-animations and meaningful motion powered by React + Framer.',
  },
]

const quickPanels = [
  {
    title: 'About the designer',
    copy: 'From Cebu, blending storytelling with precise front-end craft.',
    link: '/about',
    accent: 'from-rose-50 to-rose-100',
  },
  {
    title: 'Skill architecture',
    copy: 'Stacks, tools, and the way I build multi-device experiences.',
    link: '/skills',
    accent: 'from-emerald-50 to-emerald-100',
  },
  {
    title: 'Project library',
    copy: 'A mix of commissions, coursework, and personal explorations.',
    link: '/projects',
    accent: 'from-sky-50 to-sky-100',
  },
  {
    title: 'Resume capsule',
    copy: 'Download the latest snapshot of my journey and toolkit.',
    link: '/resume',
    accent: 'from-amber-50 to-amber-100',
  },
]

const LandingPage = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-emerald-100 px-6 md:px-12 lg:px-20 py-16 lg:py-24 -mt-10">
        <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-12 h-48 w-48 rounded-full bg-rose-100/70 blur-3xl" />

        <div className="relative z-10 grid gap-12 lg:grid-cols-[1.1fr_minmax(0,0.9fr)] items-center">
          <motion.div
            className="space-y-6 text-center lg:text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm uppercase tracking-[0.4em] text-emerald-700/80" style={{ fontFamily: 'satoshi-medium' }}>
              Marvin Barro • Frontend Art Direction
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-stone-900 leading-tight" style={{ fontFamily: 'satoshi-black' }}>
              Interfaces that feel curated, precise, and alive.
            </h1>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xl text-stone-700" style={{ fontFamily: 'satoshi-medium' }}>
              <span>Currently crafting</span>
              <TypeAnimation
                sequence={[
                  'immersive landing systems',
                  1800,
                  'minimal e‑commerce shells',
                  1800,
                  'responsive design libraries',
                  1800,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-emerald-700 font-semibold"
              />
            </div>

            <p className="mx-auto lg:mx-0 max-w-xl text-lg text-stone-700" style={{ fontFamily: 'satoshi-medium' }}>
            𝙔𝙤𝙪𝙧 𝙫𝙞𝙨𝙞𝙤𝙣, 𝙢𝙮 𝙘𝙤𝙙𝙚.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
              <Link
                to="/projects"
                className="rounded-full bg-stone-900 px-6 py-3 text-white shadow-lg shadow-stone-900/20 transition hover:translate-y-0.5"
                style={{ fontFamily: 'satoshi-bold' }}
              >
                Explore work
              </Link>
              <Link
                to="/resume"
                className="rounded-full border border-stone-900 px-6 py-3 text-stone-900 hover:bg-stone-900 hover:text-white transition"
                style={{ fontFamily: 'satoshi-bold' }}
              >
                Download CV
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-8">
              {statHighlights.map((item) => (
                <div key={item.label} className="rounded-2xl border border-stone-200 bg-white/70 px-4 py-5 text-left backdrop-blur">
                  <p className="text-2xl text-stone-900" style={{ fontFamily: 'satoshi-black' }}>
                    {item.value}
                  </p>
                  <p className="text-xs uppercase tracking-wide text-stone-500" style={{ fontFamily: 'satoshi-medium' }}>
                    {item.label}
                  </p>
                  <p className="mt-2 text-xs text-stone-400" style={{ fontFamily: 'satoshi-medium' }}>
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative w-full max-w-md mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-emerald-200 via-white to-rose-100 blur-2xl" />
            <div className="relative rounded-[2.2rem] border border-white/50 bg-white/80 p-6 shadow-2xl backdrop-blur">
              <div className="rounded-[1.8rem] bg-stone-900/90 p-2">
                <img
                  src={profileImg}
                  alt="Marvin Barro"
                  className="h-[420px] w-full rounded-[1.5rem] object-cover"
                />
              </div>
              <div className="mt-6 rounded-2xl border border-stone-200 bg-white/70 p-5">
                <p className="text-sm uppercase tracking-widest text-stone-500" style={{ fontFamily: 'satoshi-medium' }}>
                  Currently open for
                </p>
                <p className="text-2xl text-stone-900" style={{ fontFamily: 'satoshi-black' }}>
                  Freelance collaborations
                </p>
                <p className="text-sm text-stone-500 mt-2" style={{ fontFamily: 'satoshi-medium' }}>
                  Interfaces, design systems, and front-end audits.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {craftHighlights.map((item) => (
            <motion.div
              key={item.title}
              className="rounded-3xl border border-stone-200 bg-white/80 p-6 text-left shadow-sm backdrop-blur"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 text-emerald-700">{item.icon}</div>
              <h3 className="text-xl text-stone-900" style={{ fontFamily: 'satoshi-bold' }}>
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-stone-600" style={{ fontFamily: 'satoshi-medium' }}>
                {item.copy}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-white px-6 py-16 md:px-12 lg:px-20">
        <motion.div
          className="max-w-5xl mx-auto text-center space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm uppercase tracking-[0.5em] text-stone-400" style={{ fontFamily: 'satoshi-medium' }}>
            Navigate the studio
          </p>
          <h2 className="text-3xl text-stone-900" style={{ fontFamily: 'satoshi-black' }}>
            Each page is arranged like a mini experience.
          </h2>
          <p className="text-stone-600 max-w-3xl mx-auto" style={{ fontFamily: 'satoshi-medium' }}>
            Choose a path below and explore re-positioned sections designed for better storytelling and flow.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {quickPanels.map((panel) => (
            <Link
              key={panel.title}
              to={panel.link}
              className={`group flex flex-col justify-between rounded-3xl bg-gradient-to-br ${panel.accent} p-6 border border-stone-100 shadow-sm transition hover:-translate-y-1`}
              style={{ fontFamily: 'satoshi-medium' }}
            >
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-stone-500">Discover</p>
                <h3 className="mt-3 text-2xl text-stone-900" style={{ fontFamily: 'satoshi-bold' }}>
                  {panel.title}
                </h3>
                <p className="mt-2 text-stone-600">{panel.copy}</p>
              </div>
              <span className="mt-6 inline-flex items-center text-stone-900 font-semibold">
                Enter
                <FiArrowUpRight className="ml-2 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}

export default LandingPage
