import React from "react";

const Links = () => {
    const linksCss = "hover:scale-110 hover:text-[#7a7a7a] transition-[.5s]";
  return (
    <article className="absolute bottom-[5rem] right-2 bg-[#292929a9] px-4 py-2 rounded-md flex items-center gap-4 max-sm:hidden max-lg:hidden max-xl:hidden shadow-md">
      <h4 className="text-[#beffff]">Follow us on</h4>
      <ul className="flex gap-2 items-center justify-around text-xl text-[#e3e3e3]">
        <a href="#" className={linksCss}>
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="#" className={linksCss}>
          <i className="fa-brands fa-youtube"></i>
        </a>
        <a href="#" className={linksCss}>
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a href="#" className={linksCss}>
          <i className="fa-brands fa-facebook"></i>
        </a>
      </ul>
    </article>
  );
};

export default Links;
