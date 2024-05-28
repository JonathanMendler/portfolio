import React from "react";
import HeroImg from "../assets/propic.jpg";
import { RiDownload2Fill } from "react-icons/ri";
import PdfDownload from "./PdfDownload";

import { RiGithubFill, RiLinkedinBoxFill } from "react-icons/ri";

const Hero = () => {
  return (
    <section className="bg-primary px-5 text-teal-800 py-32">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="text-4xl lg:text-6xl">
            Hey there! <br />
            I'm Jonathan,
            <br />
            Full Stack Developer
          </h1>

          <p className="py-5 mr-28">
            With a diverse skill set spanning technologies such as Ruby on Rails, Postgres, JavaScript, React, and
            Tailwind, I thrive on bringing ideas to life through code.
          </p>

          <div className="flex py-5 text-teal-800">
            <a href="https://github.com/JonathanMendler" className="pr-4 inline-block text-accent hover:text-teal-700">
              {" "}
              <RiGithubFill size={40} />{" "}
            </a>
            <a
              href="https://www.linkedin.com/in/jonathan-mendler/"
              className="pr-4 inline-block text-accent hover:text-teal-700"
            >
              {" "}
              <RiLinkedinBoxFill size={40} />{" "}
            </a>
          </div>

          <a href="/#projects" className=" btn bg-teal-800 hover:bg-teal-700 text-yellow-400 px-6 py-3 rounded-3xl">
            See What I've Been Working On
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
          <img
            src={HeroImg}
            alt="coding illustration"
            className="lgw-[80%] rounded-3xl border-2 border-teal-800 p-1 ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
