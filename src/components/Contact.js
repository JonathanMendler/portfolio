import React from "react";

const Contact = () => {
  return (
    <section className="bg-secondary px-5 py-32" id="contact">
      <div className="text-center md:w-[60%] mx-auto text-white">
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-indigo-600 pb-2">Contact Me</h2>
        <p>
          I am currently seeking a Full Stack Developer role. If you would like to discuss any open positions with me,
          you can contact me via one of the following methods.
        </p>

        <p className="py-2">
          <span className="font-bold">Email:</span> Jon.mendler@gmail.com
        </p>
        <p className="py-2">
          <span className="font-bold">Phone:</span> +1 (219)669-3013
        </p>
      </div>
    </section>
  );
};

export default Contact;
