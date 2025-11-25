import React from "react";
import { motion } from "framer-motion";
import ContactPanel from "../components/ContactPanel";

const Contact = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-sky-50 px-6 py-20 md:px-12 lg:px-24 -mt-10">
      <div className="pointer-events-none absolute -top-10 right-12 h-48 w-48 rounded-full bg-emerald-200/50 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-6 h-40 w-40 rounded-full bg-rose-200/60 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl space-y-12">
        <motion.div
          className="space-y-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm uppercase tracking-[0.4em] text-emerald-600/80" style={{ fontFamily: "satoshi-medium" }}>
            Contact
          </p>
          <h1 className="text-4xl sm:text-5xl text-stone-900" style={{ fontFamily: "satoshi-black" }}>
            Ready when you’re building something intentional.
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-stone-600" style={{ fontFamily: "satoshi-medium" }}>
            Send over a brief, ask for a design critique, or collaborate on a sprint. I’m here for front-end builds that need craft, clarity,
            and personality.
          </p>
        </motion.div>

        <motion.div
          className="rounded-3xl border border-stone-200 bg-white/80 p-8 shadow-lg backdrop-blur"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <p className="text-stone-600 text-lg" style={{ fontFamily: "satoshi-medium" }}>
            Tell me about your target audience, the experience you’re chasing, or the components you can’t figure out. I’ll respond with ideas,
            timelines, and how we can make it feel uniquely “you.”
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <ContactPanel />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

