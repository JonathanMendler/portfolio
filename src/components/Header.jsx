import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <header className="flex justify-between px-5 py-2 bg-primary text-teal-800 fixed w-full z-10">
      <div className="logo text-3xl font-bold underline text-accent">JM</div>

      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex gap-1">
          <li>
            <a href="/#about" className="hover:text-teal-600">
              About
            </a>
          </li>
          <li>
            <a href="/#projects" className="hover:text-teal-600">
              Projects
            </a>
          </li>
          <li>
            <a href="/#contact" className="hover:text-teal-600">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Nav */}
      <nav className={!toggle ? "mobile-nav left-[-100%]" : "mobile-nav left-0"}>
        <ul className="flex flex-col">
          <li>
            <a href="/#about" className="hover:text-teal-600">
              About
            </a>
          </li>
          <li>
            <a href="/#projects" className="hover:text-teal-600">
              Projects
            </a>
          </li>
          <li>
            <a href="/#contact" className="hover:text-teal-600">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Toggle button */}
      <button onClick={handleToggle} className="block md:hidden">
        {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
      </button>
    </header>
  );
};

export default Header;
