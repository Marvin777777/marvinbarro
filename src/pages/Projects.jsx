import React from "react";
import flowerShopImg from "../assets/react.png";
import ecBookstoreImg from "../assets/e-commerce.jpg";
import clothingImg from "../assets/clothing.png";
import school1Img from "../assets/school1.png";
import intraImg from "../assets/intra.png";
import biniImg from "../assets/bini.png";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const Projects = () => {
  const projects = [
    {
      title: "First React Component",
      description:
        "My very first React component and the spark for how I approach UI building today. Experimenting with props/state taught me how thinking in components boosts creativity.",
      image: flowerShopImg,
      link: "https://github.com/Marvin777777/activity-1-profilepage",
      tech: ["React", "CSS"],
    },
    {
      title: "E-Commerce Web App",
      description:
        "A bookstore SPA that lets users search, browse, and add to cart. Built with React, APIs, and Tailwind to keep navigation buttery smooth.",
      image: ecBookstoreImg,
      link: "https://github.com/Marvin777777/midterm-appsdev",
      tech: ["API", "React", "Tailwind"],
    },
    {
      title: "Clothing Website (Commission)",
      description:
        "Commissioned marketing site with a focus on editorial photography, FAQ storytelling, and clean CSS transitions.",
      image: clothingImg,
      link: "https://github.com/Marvin777777/appsdev",
      tech: ["HTML", "CSS"],
    },
    {
      title: "School Website 1 (Commission)",
      description:
        "A multi-page school experience with focus on clarity and navigation—Home, Programs, Offers, and Contact arranged for quick scanning.",
      image: school1Img,
      link: "https://github.com/Marvin777777/barro",
      tech: ["HTML", "CSS"],
    },
    {
      title: "Intramuros Cultural Website (Commission)",
      description:
        "A visual storytelling site for Intramuros heritage locations. High-quality imagery, gentle scrolling, and educational copy.",
      image: intraImg,
      link: "https://github.com/Marvin777777/apps-dev-project-1",
      tech: ["HTML", "CSS"],
    },
    {
      title: "Bini Redesign",
      description:
        "A modern refresh for BINI with bold color blocking and responsive layouts. Built with handcrafted HTML, CSS, and JavaScript.",
      image: biniImg,
      link: "https://rchll-16.github.io/bini-redesign/main.html",
      tech: ["HTML", "CSS", "JavaScript"],
    },
  ];

  return (
    <section className="bg-[#f6fbf7] px-6 py-20 md:px-12 lg:px-20 -mt-10">
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="text-center space-y-4">
          <motion.p
            className="text-sm uppercase tracking-[0.4em] text-emerald-600/80"
            style={{ fontFamily: "satoshi-medium" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Case library
          </motion.p>
          <motion.h1
            className="text-3xl sm:text-4xl text-stone-900"
            style={{ fontFamily: "satoshi-black" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Projects arranged like a mini gallery tour.
          </motion.h1>
          <motion.p
            className="mx-auto max-w-3xl text-stone-600"
            style={{ fontFamily: "satoshi-medium" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Each card pairs visuals with context, so you can trace how I reposition sections, refine palettes, and build interactions.
          </motion.p>
        </div>

        <div className="space-y-10">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className={`rounded-[2rem] border border-stone-100 bg-white shadow-lg overflow-hidden flex flex-col ${
                index % 2 ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="lg:w-1/2">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-72 w-full object-cover"
                />
              </div>
              <div className="lg:w-1/2 p-8 flex flex-col gap-4">
                <div className="text-xs uppercase tracking-[0.4em] text-stone-400" style={{ fontFamily: "satoshi-medium" }}>
                  Case {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-2xl text-stone-900" style={{ fontFamily: "satoshi-bold" }}>
                  {project.title}
                </h3>
                <p className="text-stone-600" style={{ fontFamily: "satoshi-medium" }}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={`${project.title}-${tech}`}
                      className="rounded-full bg-emerald-50 px-3 py-1 text-xs text-emerald-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="pt-2">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-stone-900 px-5 py-3 text-sm font-semibold text-stone-900 transition hover:bg-stone-900 hover:text-white"
                    style={{ fontFamily: "satoshi-bold" }}
                  >
                    Visit project
                    <FiArrowUpRight />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
