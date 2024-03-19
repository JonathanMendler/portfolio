import React from "react";
import HeroImg from "../assets/ProfilePic.png";

import { SiLinkedin, SiGithub, SiTwitch } from "react-icons/si";

const Hero = () => {
  return (
    <section className="bg-primary px-5 text-white py-32">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md: justify-between">
        <div className="Hero-info pb-5 md:pb-0">
          <h1 className="text-4xl lg:text-6xl">
            Hi, <br />
            I'm Jonathan! <br />
            Full Stack Developer
          </h1>

          <p className="py-5">Proficient in Ruby on Rails, JavaScript, React.js, and Tailwind CSS.</p>

          <div className="flex py-5">
            <a
              href="https://www.linkedin.com/in/jonathan-mendler/"
              className="pr-4 inline-block text accent hover:text-white"
            >
              {" "}
              <SiLinkedin size={40} />{" "}
            </a>
            <a href="https://github.com/JonathanMendler" className="pr-4 inline-block text accent hover:text-white">
              {" "}
              <SiGithub size={40} />{" "}
            </a>
            <a href="https://www.twitch.tv/johnnyonthemend" className="pr-4 inline-block text accent hover:text-white">
              {" "}
              <SiTwitch size={40} />{" "}
            </a>
          </div>

          <a
            href="/#projects"
            className=" btn bg-accent border-2 border-[#7477FF text-white px-3 py-3 hover:bg-transparent"
          >
            See Projects
          </a>
        </div>

        <div className="HeroImg">
          <img src={HeroImg} alt="HeroImg" className="rounded-3xl lgw-[80%] ml-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
