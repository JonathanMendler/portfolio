import React from "react";
import CoCa from "../assets/CoCa.png";
import DevLoom from "../assets/DevLoomIconFull.png";

const Projects = () => {
  const projects = [
    {
      img: CoCa,
      title: "CoCa",
      desc: "Single page application built with HTML and CSS, providing an intuitively designed website layout utilizing parallax scrolling effect.",
      live: "https://jonathanmendler.github.io/coca/",
      code: "https://github.com/JonathanMendler/coca",
    },
    {
      img: DevLoom,
      title: "DevLoom",
      desc: "Full Stack blogging web app built with the developer in mind. Tech Stack: Ruby on Rails, JavaScript, React, Tailwind CSS, PostgreSQL (Work in Progress)",
      live: "N/A",
      code: "https://github.com/JonathanMendler/DevLoom",
    },
  ];

  return (
    <section className="bg-primary text-white px-5 py-32" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5-px] w-[180px] border-indigo-600 pb-2">Projects</h2>

          <p className="pb-5">
            Have a look at some of my best projects! These were built utilizing Ruby on Rails, JavaScript, CSS3, React,
            Bootstrap, and TailwindCSS.
          </p>
        </div>

        <div className="about-img"></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-2 gap-20">
        {projects.map((project, i) => {
          return (
            <div className="relative" key={i}>
              <img src={project.img} alt={project.title} className="rounded-3xl lgw-[80%] md:ml-auto" />
              <div className="flex absolute rounded-3xl left-0 right-0 top-[23px] bottom-0 mx-auto w-[90%] h-[90%] bg-primary opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                <p className="py-5 text-center font-bold px-2 text-white">{project.desc}</p>

                <div className="mx-auto">
                  <a href={project.live} className="px-5 py-2 bg-blue-500 hover:bg-blue-600 mr-5 font-bold">
                    Live
                  </a>
                  <a href={project.code} className="px-5 py-2 bg-blue-700 hover:bg-blue-800 font-bold">
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
