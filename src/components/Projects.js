import React from "react";
import CoCa from "../assets/coca.png";
import DevLoom from "../assets/devloom.png";

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
      desc: "Full Stack blogging web app built with the developer in mind. Tech Stack: Ruby on Rails, JavaScript, React, Tailwind CSS, PostgreSQL",
      live: "N/A",
      code: "https://github.com/JonathanMendler/DevLoom",
    },
  ];
};
