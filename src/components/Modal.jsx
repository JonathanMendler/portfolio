import React from "react";
import resume from "../assets/resume.png";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Modal = () => {
  return (
    <div className="modal-container ">
      <div className="close flex">
        <AiOutlineCloseCircle />
      </div>
      <img className="resume bg-secondary p-5" src={resume} alt="resume" />
    </div>
  );
};

export default Modal;
