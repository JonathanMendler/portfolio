import React from "react";
import coca from "../assets/coca.png";
import devloom from "../assets/devloom.png";
import dumbsplain from "../assets/dumb.png";
import bce from "../assets/bce.png";

const Projects = () => {
  const projects = [
    {
      img: dumbsplain,
      title: "Dumbsplain",
      desc: "Conversational LLM trivia game | Independent Contributor at Unfinite | Code is private repo",
      lang: "Python | JavaScript | Tailwind",
      live: "https://dumbsplain.com//",
    },
    {
      img: coca,
      title: "CoCa",
      desc: "Website demonstrating parallax scrolling effect (Parallax only visible on desktop)",
      lang: "Vanilla HTML and CSS",
      live: "https://jonathanmendler.github.io/coca/",
      code: "https://github.com/JonathanMendler/coca",
    },
    {
      img: devloom,
      title: "DevLoom",
      desc: "(WIP/MVP) Full Stack blogging app designed to function as a developer's work journal",
      lang: "Rails | React | Tailwind",
      live: "https://devloom.xyz/",
      code: "https://github.com/JonathanMendler/DevLoom",
    },
    {
      img: bce,
      title: "Bridge Creek Electric",
      desc: "Site design for local electrician",
      lang: "React | Vite | TailwindCSS",
      live: "https://bridgecreekelectric.com/",
      code: "https://github.com/JonathanMendler/bridge_creek",
    },
  ];

  return (
    <section className="bg-primary text-teal-800 px-5 py-32" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-yellow-400 pb-2">Projects</h2>

          <p className="pb-5">
            Where code meets creativity! Below are highlights of some projects I have had the pleasure of working on.
            Each project represents a journey of problem-solving, innovation, and collaboration. From sleek web
            interfaces, to robust backend systems, feel free to explore my creations!
          </p>
        </div>
      </div>

      <div className="projects container mx-auto px-48 grid md:grid-cols-2 gap-10">
        {projects.map((project, i) => {
          return (
            <div className="relative" key={i}>
              <img className="proj-img rounded-3xl border-black" src={project.img} alt={project.title} />
              <div className="flex absolute left-0 right-0 top-[22px] bottom-0 mx-auto w-[90%] h-[90%] rounded-3xl bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                <p className="py-5 text-center text-3xl underline font-bold px-2 text-teal-800">{project.title}</p>
                <p className="py-5 text-center font-bold px-2 text-teal-800">{project.desc}</p>
                <p className="py-5 text-center font-bold px-2 text-teal-800">{project.lang}</p>
                {/* Code and site link */}
                <div className="mx-auto">
                  <a
                    href={project.live}
                    className="px-5 py-2 bg-teal-900 hover:bg-teal-700 text-yellow-400 rounded-3xl mr-5 font-bold"
                  >
                    Live
                  </a>
                  <a
                    href={project.code}
                    className="px-5 py-2 bg-teal-950 hover:bg-teal-700 text-yellow-400 rounded-3xl font-bold"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
