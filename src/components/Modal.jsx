import React from "react";
import Resume from "../assets/resume.png";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Modal = ({ setToggleModal }) => {
  return (
    <div className="modal-bg bg-gray-400 flex flex-col size-3/5 absolute top-24 left-72 bottom-36 right-72 min-w-screen">
      <div className="modal-container flex flex-col text-center bg-slate-100 py-10 px-20 mx-4 rounded-3xl relative">
        <div className="close absolute top-5 right-5 text-3xl text-gray-500 cursor-pointer">
          <AiOutlineCloseCircle onClick={setToggleModal} />
        </div>
        <img className="resume border-black border-2" src={Resume} alt="resume" />
      </div>
    </div>
  );
};

export default Modal;
