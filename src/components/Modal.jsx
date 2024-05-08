import React from "react";
import Resume from "../assets/resume.png";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Modal = () => {
  return (
    <div className="modal-container ">
      <div className="close flex">
        <AiOutlineCloseCircle />
      </div>
      <img className="resume bg-secondary p-5" src={Resume} alt="resume" />
    </div>
  );
};

export default Modal;
