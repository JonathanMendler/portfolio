import React, { useState } from "react";
import { saveAs } from "file-saver";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import ResumeFile from "../assets/Jonathan_Mendler_FS_Software_Developer.pdf";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  const downloadButton = document.querySelector(`.download-button`);
  const downloadIcon = document.querySelector(`.download-icon`);
  const downloadLoader = document.querySelector(`.download-loader`);
  const downloadCheckMark = document.querySelector(`.check-svg`);
  const downloadText = document.querySelector(`.button-copy`);

  downloadButton.addEventListener(
    "click",
    () => {
      downloadIcon.classList.add(`hidden`);
      downloadLoader.classList.remove(`hidden`);
      downloadText.innerHTML = "DOWNLOADING";
    },
    { once: true }
  );

  downloadLoader.addEventListener("animationend", () => {
    downloadLoader.classList.add(`hidden`);
    downloadLoader.classList.remove(`hidden`);
    downloadText.innerHTML = "DOWNLOADED";
  });

  return (
    <header className="flex justify-between px-5 py-2 bg-primary text-white fixed w-full z-10">
      <a href="/" className="logo text 2xl font-bold text-accent">
        Jonathan Mendler
      </a>

      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex">
          <li>
            <a href="/#about">About</a>
          </li>
          <li>
            <a href="/#projects">Projects</a>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
          <li>
            <button class="download-button transform active:scale-95 bg-indigo-600 hover:bg-indigo-300 text-white px-3 py-4 rounded-3xl font-bold tracking-widest w-full">
              <div class="flex justify-center items-center relative">
                <div class="svg-container">
                  {/* <!-- Download Icon --> */}
                  <svg
                    class="download-icon"
                    width="18"
                    height="22"
                    viewBox="0 0 18 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      class="download-arrow"
                      d="M13 9L9 13M9 13L5 9M9 13V1"
                      stroke="#F2F2F2"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M1 17V18C1 18.7956 1.31607 19.5587 1.87868 20.1213C2.44129 20.6839 3.20435 21 4 21H14C14.7956 21 15.5587 20.6839 16.1213 20.1213C16.6839 19.5587 17 18.7956 17 18V17"
                      stroke="#F2F2F2"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div class="download-loader text-white hidden"></div>
                  {/* <!-- Checked Icon --> */}
                  <svg
                    class="check-svg hidden"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM15.1071 7.9071C15.4976 7.51658 15.4976 6.88341 15.1071 6.49289C14.7165 6.10237 14.0834 6.10237 13.6929 6.49289L8.68568 11.5001L7.10707 9.92146C6.71655 9.53094 6.08338 9.53094 5.69286 9.92146C5.30233 10.312 5.30233 10.9452 5.69286 11.3357L7.97857 13.6214C8.3691 14.0119 9.00226 14.0119 9.39279 13.6214L15.1071 7.9071Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div class="button-copy pl-2 leading-none uppercase">RESUME</div>
              </div>
            </button>
            {/* <a
              href="https://drive.google.com/file/d/1PsmJyyVftTM_0dN562En7Ynl4OWBTH8j/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a> */}
          </li>
        </ul>
      </nav>

      {/* Mobile Nav */}
      <nav className={!toggle ? "mobile-nav left-[-100%]" : "mobile-nav left-0"}>
        <ul className="flex flex-col">
          <li>
            <a href="/#about">About</a>
          </li>
          <li>
            <a href="/#projects">Projects</a>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
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
