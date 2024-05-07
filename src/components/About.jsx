import React from "react";
import AboutImg from "../assets/tech.svg";

const About = () => {
  return (
    <section className="bg-primary text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">About Me</h2>

          <p className="pb-5">
            My journey in the realm of software engineering began with a deep fascination for problem-solving and a
            relentless curiosity to understand how things work under the hood. I've honed my skills in building scalable
            web applications, crafting elegant user interfaces, and architecting backend systems that stand the test of
            time.
          </p>
          <p className="pb-5">
            Whether it's diving into the backend intricacies of Ruby on Rails or sculpting intuitive user experiences
            with React, I approach each project with dedication and a keen eye for detail. I am intrinsically motivated
            to find the intersection of beauty and function in code, crafting digital experiences that resonate with
            users and drive meaningful outcomes for businesses.
          </p>

          <p className="pb-5">
            Beyond the screen, you'll often find me exploring the latest tech trends, experimenting with new frameworks,
            or immersing myself in the vibrant developer community. I believe in the power of continuous learning and
            strive to stay at the forefront of technology to deliver innovative solutions that exceed expectations.
          </p>

          <p className="pb-5">
            If you're looking to collaborate on a project or simply want to geek out about all things tech, feel free to
            reach out. Let's build something awesome together!
          </p>
        </div>

        <div className="about-img">
          <img src={AboutImg} alt="coding illustration" className="lgw-[80%] rounded-3xl p-3 md:ml-auto" />
        </div>
      </div>
    </section>
  );
};

export default About;
