import React from "react";
import ChampionImg from "../assets/Avatar.png";

import { SiThreads, SiYoutube, SiTwitch } from "react-icons/si";

const Champion = () => {
  return (
    <section className="bg-primary px-5 text-white py-32">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md: justify-between">
        <div className="champion-info pb-5 md:pb-0">
          <h1 className="text-4xl lg:text-6xl">
            Hello! <br />I am <span className="text-accent">J</span>onathan <br /> Full Stack Developer
          </h1>

          <p className="py-5">My proficiencies lie in Ruby on Rails, JavaScript, React.js, and Tailwind CSS.</p>

          <div className="flex py-5">
            <a
              href="https://www.threads.net/@johnnyonthemend"
              className="pr-4 inline-block text accent hover:text-white"
            >
              {" "}
              <SiThreads size={40} />{" "}
            </a>
            <a
              href="https://www.youtube.com/@johnnyonthemend"
              className="pr-4 inline-block text accent hover:text-white"
            >
              {" "}
              <SiYoutube size={40} />{" "}
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

        <div className="ChampionImg">
          <img src={ChampionImg} alt="ChampionImg" className="rounded-3xl lgw-[80%] ml-auto" />
        </div>
      </div>
    </section>
  );
};

export default Champion;
