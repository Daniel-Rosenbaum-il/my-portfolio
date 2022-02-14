import React from "react";
import { AiOutlineClose } from "react-icons/ai";

export const HeaderNav = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <nav className={isMenuOpen ? "menu-open" : ""}>
      {isMenuOpen && (
        <AiOutlineClose
          className="close-menu-icon"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
      <a onClick={() => setIsMenuOpen(false)} href="#about-me">
        About me
      </a>
      <a onClick={() => setIsMenuOpen(false)} href="#my-projects">
        My projects
      </a>
      <a onClick={() => setIsMenuOpen(false)} href="#contact-me">
        Contact me
      </a>
    </nav>
  );
};
