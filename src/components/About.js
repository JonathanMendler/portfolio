import React from "react";
import AboutImg from "../assets/Tech.svg";

const About = () => {
  return (
    <section className="bg-secondary text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">About Me</h2>

          <p className="pb-5">
            Hello there! I'm Jonathan, an enthusiastic Full Stack Developer with a penchant for crafting high-quality
            solutions that exceed expectations and leave a lasting impression.
          </p>
          <p className="pb-5">
            My tech stack includes Ruby on Rails and PostgreSQL on the Backend, while I create eye-catching UI on the
            Frontend with JavaScript, React.js, Bootstrap, and Tailwind CSS.
          </p>
        </div>

        <div className="about-img">
          <img src={AboutImg} alt="Coding illustration" className="rounded-3xl lgw-[80%] md:ml-auto" />
        </div>
      </div>
    </section>
  );
};

export default About;
