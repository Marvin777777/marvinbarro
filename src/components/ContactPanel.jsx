import React from "react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaFacebookF, FaGithub, FaTiktok } from "react-icons/fa";

const contactMethods = [
  {
    label: "Email",
    value: "barromrvn@gmail.com",
    href: "mailto:barromrvn@gmail.com",
    icon: MdEmail,
  },
  {
    label: "Phone",
    value: "+63 915 038 8050",
    href: "tel:+639150388050",
    icon: MdPhone,
  },
  {
    label: "Location",
    value: "Cordova, Cebu, Philippines",
    icon: MdLocationOn,
  },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/maviiiqtty",
    icon: FaFacebookF,
  },
  {
    label: "GitHub",
    href: "https://github.com/Marvin777777",
    icon: FaGithub,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@qtttmavii?_r=1&_t=ZS-91bvEX3t8yG",
    icon: FaTiktok,
  },
];

const ContactPanel = ({ className = "", hideHeading = false }) => {
  return (
    <div className={`space-y-6 ${className}`} style={{ fontFamily: "satoshi-medium" }}>
      <div className="space-y-4">
        {contactMethods.map(({ label, value, href, icon: Icon }) => (
          <div
            key={label}
            className="rounded-2xl border border-stone-200 bg-white/80 backdrop-blur p-5 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-gradient-to-r from-emerald-300 via-rose-200 to-sky-200 p-3 shadow-sm">
                <Icon className="text-stone-900" size={22} />
              </div>
              <div className="flex-1">
                <p className="text-xs uppercase tracking-wider text-stone-500 mb-1">{label}</p>
                {href ? (
                  <a
                    href={href}
                    className="text-stone-900 hover:text-emerald-700 transition-colors"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="text-stone-900">{value}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-6 mt-8 border-t border-stone-200">
        {!hideHeading && (
          <h4 className="text-stone-900 mb-4 text-lg" style={{ fontFamily: "satoshi-bold" }}>
            Connect on Social Media
          </h4>
        )}
        <div className="grid gap-3 sm:grid-cols-3">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-stone-200 bg-white/80 backdrop-blur p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-sky-50 flex flex-col items-center gap-2"
            >
              <div className="rounded-full bg-gradient-to-r from-emerald-300 via-rose-200 to-sky-200 p-2.5 shadow-sm group-hover:scale-110 transition-transform">
                <Icon className="text-stone-900" size={18} />
              </div>
              <span className="text-xs text-stone-600">{label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactPanel;

