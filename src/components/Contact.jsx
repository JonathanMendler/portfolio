import React from "react";

const Contact = () => {
  return (
    <section className="bg-primary px-5 py-32" id="contact">
      <div className="text-center md:w-[60%] mx-auto text-white">
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-indigo-600 pb-2">Contact Me</h2>
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
      </div>
    </section>
  );
};

export default Contact;
