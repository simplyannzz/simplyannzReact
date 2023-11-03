import React, { useState } from "react";
import Navigation from "./Navigation";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

export default function Header() {
  const [currentPage, setCurrentPage] = useState("About");

  //handle page change using current page variable
  const handlePageChange = (page) => setCurrentPage(page);

  const renderPage = () => {
    if (currentPage === "About") {
      return <About handlePageChange={handlePageChange} />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    return <Contact />;
  };
  return (
    <>
      <div>
        <header>
          <img
            id='logo'
            src='./src/assests/logo.png'
            alt="Simplyannz's character"
          />
          <Navigation
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        </header>
        {renderPage()}
      </div>
    </>
  );
}
