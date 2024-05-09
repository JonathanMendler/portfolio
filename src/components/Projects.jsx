import React from "react";
import coca from "../assets/coca.png";
import devloom from "../assets/devloom.png";
import dumbsplain from "../assets/dumbsplain.png";

const Projects = () => {
  const projects = [
    {
      img: coca,
      title: "CoCa",
      desc: "Vanilla HTML and CSS website demonstrating parallax scrolling effect (Parallax only visible on desktop)",
      live: "https://jonathanmendler.github.io/coca/",
      code: "https://github.com/JonathanMendler/coca",
    },
    {
      img: devloom,
      title: "DevLoom",
      desc: "(WIP/MVP) Full Stack blogging app designed to function as a developers work journal",
      live: "https://devloom.xyz/",
      code: "https://github.com/JonathanMendler/DevLoom",
    },
    {
      img: dumbsplain,
      title: "Dumbsplain",
      desc: "Conversational LLM trivia game | Independent Contributor at Unfinite | Code is private repo",
      live: "https://dumbsplain.com//",
    },
  ];

  return (
    <section className="bg-secondary text-white px-5 py-32" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">Projects</h2>

          <p className="pb-5">
            Where code meets creativity! Below are highlights of some projects I have had the pleasure of working on.
            Each project represents a journey of problem-solving, innovation, and collaboration. From sleek web
            interfaces, to robust backend systems, feel free to explore my creations!
          </p>
        </div>

        <div className="about-img"></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => {
          return (
            <div className="relative" key={i}>
              <img className="proj-img rounded-3xl" src={project.img} alt={project.title} />
              <div className="flex absolute left-0 right-0 top-[22px] bottom-0 mx-auto w-[90%] h-[90%] rounded-3xl bg-secondary  opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                <p className="py-5 text-center font-bold px-2 text-white">{project.desc}</p>
                {/* Code and site link */}
                <div className="mx-auto">
                  <a href={project.live} className="px-5 py-2 bg-blue-500 hover:bg-blue-600 rounded-3xl mr-5 font-bold">
                    Live
                  </a>
                  <a href={project.code} className="px-5 py-2 bg-blue-700 hover:bg-blue-800 rounded-3xl font-bold">
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
