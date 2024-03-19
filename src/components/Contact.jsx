import React from "react";

const Contact = () => {
  return (
    <section className="bg-secondary px-5 py-32" id="contact">
      <div className="text-center md:w-[60%] mx-auto text-white">
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-indigo-600 pb-2">Contact Me</h2>
        <p>
          If you would like to collaborate with me on any projects or discuss open positions, you can contact me via one
          of the following methods.
        </p>

        <p className="py-2">
          <span className="font-bold">Email:</span> <a href="mailto:jon.mendler@gmail.com">Jon.mendler@gmail.com</a>
        </p>
        <p className="py-2">
          <span className="font-bold">Phone:</span> +1 (219)669-3013
        </p>
      </div>
    </section>
  );
};

export default Contact;
