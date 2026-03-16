import React, { useState } from "react";
import { styles } from "../styles";
import { Link } from "react-router-dom";
import { close, menu } from "../assets";
import {
  navLinks,
  navigationPaths,
  personalInfo,
  publicUrls,
} from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} py-5 w-full flex items-center fixed top-0 z-20 bg-primary/80 backdrop-blur-md border-b border-white/5`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto gap-5">
        <Link
          to={navigationPaths.home}
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#ff6b6b] to-[#c92a2a] flex items-center justify-center text-white text-sm font-bold">
            SS
          </div>
          <p className="text-white text-[16px] sm:text-[18px] font-bold cursor-pointer flex flex-wrap max-w-[65vw] sm:max-w-none">
            {personalInfo.name} &nbsp;
            <span className="lg:block hidden">| {personalInfo.role}</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-8 items-center">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } text-[17px] font-medium cursor-pointer hover:text-white transition-colors`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}

          <li className="text-secondary text-[17px] font-medium cursor-pointer hover:text-white transition-colors">
            <a
              href={publicUrls.resume}
              download="Sahil_Shaikh_Resume.pdf"
              target="_blank"
            >
              Resume
            </a>
          </li>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } absolute top-20 right-0 black-gradient mx-4 my-2 p-6 rounded-xl z-10 min-w-[160px] border border-white/10`}
          >
            <ul className="list-none flex flex-col gap-4 justify-end items-start">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } text-[17px] font-medium cursor-pointer hover:text-white`}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}

              <li className="text-secondary text-[17px] font-medium cursor-pointer hover:text-white">
                <a
                  href={publicUrls.resume}
                  download="Sahil_Shaikh_Resume.pdf"
                  target="_blank"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
