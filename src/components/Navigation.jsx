import React from "react";

export default function Navigation({ currentPage, handlePageChange }) {
  return (
    // ABOUT, PORTFOLIO, CONTACT, RESUME
    <ul className='nav justify-content-center'>
      <li className='nav-item'>
        <a
          href='#about'
          onClick={() => handlePageChange("About")}
          // Use ternary operator to check if the current page is "About".
          // If it is, use Bootstrap's active link class.
          className={currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          ABOUT
        </a>
      </li>
      <li className='nav-item'>
        <a
          href='#portfolio'
          onClick={() => handlePageChange("Portfolio")}
          className={
            currentPage === "Portfolio" ? "nav-link active" : "nav-link"
          }
        >
          PORTFOLIO
        </a>
      </li>
      <li className='nav-item'>
        <a
          href='#resume'
          onClick={() => handlePageChange("Resume")}
          className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
        >
          RESUME
        </a>
      </li>
      <li className='nav-item'>
        <a
          href='#contact'
          onClick={() => handlePageChange("Contact")}
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          CONTACT
        </a>
      </li>
    </ul>
  );
}
