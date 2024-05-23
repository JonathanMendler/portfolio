import React from "react";
import HeroImg from "../assets/propic.jpg";
import { RiDownload2Fill } from "react-icons/ri";
import PdfDownload from "./PdfDownload";

import { RiGithubFill, RiLinkedinBoxFill } from "react-icons/ri";

const Hero = () => {
  return (
    <section className="bg-secondary px-5 text-white py-32">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="text-4xl lg:text-6xl">
            Hey there! <br />I am Jonathan
            <br />
            Full Stack Developer
          </h1>

          <p className="py-5">
            With a diverse skill set spanning technologies such as Ruby on Rails, Postgres, JavaScript, React, Vite, and
            Tailwind, I thrive on bringing ideas to life through code.
          </p>

          <div className="flex py-5">
            <a href="https://github.com/JonathanMendler" className="pr-4 inline-block text-accent hover:text-white">
              {" "}
              <RiGithubFill size={40} />{" "}
            </a>
            <a
              href="https://www.linkedin.com/in/jonathan-mendler/"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <RiLinkedinBoxFill size={40} />{" "}
            </a>
          </div>

          <a
            href="/#projects"
            className=" btn bg-accent border-2 border-[#7477FF] text-white px-6 py-3 rounded-3xl hover:bg-transparent"
          >
            See Projects
          </a>

          {/* Future Resume Download */}

          {/* <button
            type="button"
            className="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <RiDownload2Fill className="-ml-0.5 h-5 w-5" aria-hidden="true" />
            Resume
            <PdfDownload />
          </button> */}
        </div>

        <div className="hero-img">
          <img src={HeroImg} alt="coding illustration" className="lgw-[80%] rounded-3xl p-3 ml-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
