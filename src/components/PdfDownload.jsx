import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Resume from "../assets/resume.png";

const PdfDownload = () => {
  const handleDownloadPDF = () => {
    const input = document.getElementById("resume");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 0, 0);
      pdf.save("mendler-resume.pdf");
    });
  };
  return (
    <div>
      <Resume id="resume" />
      <button onClick={handleDownloadPDF}>Download Resume</button>
    </div>
  );
};

export default PdfDownload;
