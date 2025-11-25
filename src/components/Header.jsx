import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navMenu = [
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/fcfs", label: "CPU Scheduling" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location.pathname === "/";

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 border-b-2 border-stone-800 ${
        scrolled
          ? "bg-gradient-to-r from-rose-100 via-emerald-100 to-sky-100 shadow-lg"
          : "bg-gradient-to-r from-emerald-50 via-white to-sky-50"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6 lg:px-8">
        <div className="flex-shrink-0">
          <Link
            to="/"
            className={`rounded-full px-5 py-2 text-2xl transition-all duration-300 ${
              isHome
                ? "bg-gradient-to-r from-emerald-300 via-rose-200 to-sky-200 text-stone-900 shadow-md"
                : "text-stone-900 hover:bg-white/50"
            }`}
            style={{ fontFamily: "satoshi-black" }}
          >
            Portfolio
          </Link>
        </div>

        <nav
          className="hidden md:flex justify-end px-12 flex-1 space-x-9 text-stone-800 text-base"
          style={{ fontFamily: "satoshi-medium" }}
        >
          {navMenu.map((link) => {
            const active = location.pathname === link.href;
            return (
              <Link
                to={link.href}
                key={link.href}
                className={`relative rounded-full px-4 py-2 transition-all duration-300 ${
                  active
                    ? "bg-gradient-to-r from-emerald-300 via-rose-200 to-sky-200 text-stone-900 shadow-md"
                    : "text-stone-700 hover:text-stone-900 hover:bg-white/40"
                }`}
              >
                {link.label}
                {!active && (
                  <span className="absolute inset-x-0 -bottom-1 h-[2px] w-0 bg-stone-800 transition-all duration-300 group-hover:w-full" />
                )}
              </Link>
            );
          })}
        </nav>


        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-stone-800 hover:scale-110 transition-transform duration-200"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gradient-to-b from-emerald-50 via-white to-sky-50 border-t border-stone-800 px-6 py-4 space-y-4">
          {navMenu.map((link) => {
            const active = location.pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                className={`block rounded-2xl border px-4 py-3 text-sm transition ${
                  active
                    ? "border-transparent bg-gradient-to-r from-emerald-300 via-rose-200 to-sky-200 text-stone-900 shadow"
                    : "border-stone-200 text-stone-700 hover:bg-white"
                }`}
                style={{ fontFamily: "satoshi-medium" }}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
};

export default Header;
