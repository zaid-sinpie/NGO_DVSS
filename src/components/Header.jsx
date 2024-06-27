import React, { useState } from "react";
import img from "../assets/logo.svg";

const Header = () => {
  let linksCss = `px-4 py-2 rounded-full transition-all text-[#000] hover:text-stone-700 hover:bg-[#beffff]`;
  const toggleNav = `flex flex-col justify gap-3 font-semibold uppercase text-xs absolute -left-[10rem] text-stone-400 bg-[#000] px-5 py-4 rounded-md  tracking-wider`;

  const [clicked, setClicked] = useState(false);

  function toggleNavBtn() {
    setClicked(!clicked);
  }

  function clearNav() {
    setClicked(false);
  }

  return (
    <header className="w-full bg-[#e3e3e349] max-sm:bg-[#acacac] backdrop-blur-md py-3 max-sm:py-1 px-5 flex justify-between items-center fixed top-0 left-0 text-stone-100 z-50 animate-slideTopIn">
      <div className="cursor-pointer">
        <img
          src={img}
          alt="logo images"
          className="w-[3.5rem] max-sm:w-[2rem]"
        />
      </div>
      <nav className="flex justify-around gap-8 font-semibold uppercase max-sm:hidden max-lg:hidden max-xl:hidden">
        <a href="#" className={linksCss}>
          home
        </a>
        <a href="#" className={linksCss}>
          our programs
        </a>
        <a href="#" className={linksCss}>
          community
        </a>
        <a href="#" className={linksCss}>
        more
        </a>
        <a href="#" className={linksCss}>
          contact
        </a>
        <a href="#" className={linksCss}>
        about us
        </a>
        <a href="#" className={linksCss}>
          donate
        </a>
      </nav>
      <i
        onClick={toggleNavBtn}
        className="fa-solid fa-bars hidden max-sm:block max-lg:block max-xl:block relative"
      >
        <nav className={clicked ? toggleNav : toggleNav + ` hidden`}>
          <a
            href="#"
            className="border-b-[1px] border-stone-400"
            onClick={clearNav}
          >
            home
          </a>
          <a
            href="#"
            className="border-b-[1px] border-stone-400"
            onClick={clearNav}
          >
            more
          </a>
          <a
            href="#"
            className="border-b-[1px] border-stone-400"
            onClick={clearNav}
          >
            our programs
          </a>
          <a
            href="#"
            className="border-b-[1px] border-stone-400"
            onClick={clearNav}
          >
            community
          </a>
          <a
            href="#"
            className="border-b-[1px] border-stone-400"
            onClick={clearNav}
          >
            contact
          </a>
          <a
            href="#"
            className="border-b-[1px] border-stone-400"
            onClick={clearNav}
          >
            about us
          </a>
          <a
            href="#"
            className="border-b-[1px] border-stone-400"
            onClick={clearNav}
          >
            donate
          </a>
        </nav>
      </i>
    </header>
  );
};

export default Header;
