import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub, FaEnvelope } from 'react-icons/fa'
import { MdPhone, MdLocationOn } from 'react-icons/md'

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/skills', label: 'Skills' },
  { href: '/projects', label: 'Projects' },
  { href: '/fcfs', label: 'FCFS' },
  { href: '/resume', label: 'Resume' },
]

const contactDetails = [
  { icon: <FaEnvelope />, value: 'barromrvn@gmail.com' },
  { icon: <MdPhone />, value: '+63 915 038 8050' },
  { icon: <MdLocationOn />, value: 'Cordova, Cebu, Philippines' },
]

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-white px-6 py-16">
      <div className="mx-auto max-w-6xl grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.4em] text-white/60" style={{ fontFamily: 'satoshi-medium' }}>
            Studio
          </p>
          <h2 className="mt-2 text-3xl" style={{ fontFamily: 'satoshi-black' }}>
            Marvin Barro
          </h2>
          <p className="mt-4 text-white/70" style={{ fontFamily: 'satoshi-medium' }}>
            Frontend developer reshaping layouts into aesthetic, story-rich experiences.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="https://github.com/Marvin777777"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-xl transition hover:bg-white hover:text-stone-900"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:barromrvn@gmail.com"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-xl transition hover:bg-white hover:text-stone-900"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg" style={{ fontFamily: 'satoshi-bold' }}>
            Navigate
          </h3>
          <div className="mt-4 grid gap-2" style={{ fontFamily: 'satoshi-medium' }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-white/70 transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg" style={{ fontFamily: 'satoshi-bold' }}>
            Contact
          </h3>
          <div className="mt-4 space-y-3" style={{ fontFamily: 'satoshi-medium' }}>
            {contactDetails.map((item) => (
              <div key={item.value} className="flex items-center gap-3 text-white/80">
                <span className="text-xl text-white">{item.icon}</span>
                <span>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-2 border-t border-white/10 pt-6 text-sm text-white/60" style={{ fontFamily: 'satoshi-medium' }}>
        <p>© {new Date().getFullYear()} Marvin Barro. All rights reserved.</p>
        <p>Design direction, layout repositioning, and copywriting crafted in Cebu.</p>
      </div>
    </footer>
  )
}

export default Footer
