import React from "react";
import { RiDownload2Fill } from "react-icons/ri";
import Resume from "../assets/Jonathan_Mendler_FS_Software_Developer.pdf";

const Contact = () => {
  return (
    <section className="bg-primary border-4 border-y-teal-800 px-5 py-32" id="contact">
      <div className="text-center md:w-[60%] mx-auto text-teal-800">
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-yellow-400 pb-2">Contact Me</h2>
        <p>Interested in building something together? Let's chat!</p>

        <p className="mt-3 py-1">
          <span className="font-bold">Email:</span>
          <br />
          {/* Clickable email link */}
          <a href="mailto:jon.mendler@gmail.com">jon.mendler@gmail.com</a>
        </p>
        <p className="py-1">
          <span className="font-bold">Phone:</span>
          <br /> (219) 669-3013
        </p>
        {/* Resume Download Button */}
        <a href={Resume} download="Jonathan Mendler Resume">
          <button
            type="button"
            className="inline-flex items-center gap-x-1.5 rounded-md bg-teal-800 mt-3 px-3 py-2 text-sm font-semibold text-yellow-400 shadow-sm hover:bg-teal-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-800"
          >
            <RiDownload2Fill className="-ml-0.5 h-5 w-5" aria-hidden="true" />
            Resume
          </button>
        </a>
      </div>
    </section>
  );
};

export default Contact;
