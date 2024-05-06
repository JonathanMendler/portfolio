import React from "react";
import HeroImg from "../assets/propic.jpg";

import { RiGithubFill, RiLinkedinBoxFill } from "react-icons/ri";

const Hero = () => {
  return (
    <section className="bg-secondary px-5 text-white py-32">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="text-4xl lg:text-6xl">
            Hello! <br />I am Jonathan
            <br />
            Full Stack Developer
          </h1>

          <p className="py-5">I am proficient in Ruby on Rails, JavaScript, React.js, Vite and Tailwind CSS</p>

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
        </div>

        <div className="hero-img">
          <img src={HeroImg} alt="coding illustration" className="lgw-[80%] rounded-3xl ml-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
