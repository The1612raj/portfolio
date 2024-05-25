import React from "react";
import "./Navbar.scss"; // Import CSS file for styling

import { FaDownload } from "react-icons/fa6";
const url = " https://blue-elisabetta-62.tiiny.site/";
function Header() {



  const handleDownload = () => {
    // Provide the URL to your resume file
    const resumeUrl = url;

    // Creating an anchor element
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Subhasish_Panda_Resume.pdf"; // Setting the file name
    link.setAttribute("download", link.download);
    // Simulating a click on the anchor to trigger the download
    document.body.appendChild(link);
    link.click();

    // Cleaning up resources
    document.body.removeChild(link);
  };

  return (
    <nav className="navbar ">
      <div className="logo slide-in-left">Subhasish</div>
       
    
     
      <button
        onClick={handleDownload}
        className={   `slide-in-right download-btn `}
      >
        
        <FaDownload /> Download Resume 
      </button>
    </nav>
  );
}

export default Header;
