import React from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/img4.jpeg";
import img5 from "../assets/img5.jpeg";
import img6 from "../assets/img6.png";

import Links from "./Links";

const Head = () => {
  return (
    <section className="w-screen h-screen bg-[#363636] overflow-hidden max-sm:h-auto max-lg:h-auto max-xl:h-auto">
      <div className="flex max-sm:pt-[2rem]">
        <img
          src={img1}
          alt="bg sliding img 1"
          className="w-full h-full animate-slide-images"
        />
        <img
          src={img2}
          alt="bg sliding img 2"
          className="w-full h-full animate-slide-images"
        />
        <img
          src={img3}
          alt="bg sliding img 3"
          className="w-full h-full animate-slide-images"
        />
        <img
          src={img4}
          alt="bg sliding img 4"
          className="w-full h-full animate-slide-images"
        />
        <img
          src={img5}
          alt="bg sliding img 5"
          className="w-full h-full animate-slide-images"
        />
        <img
          src={img6}
          alt="bg sliding img 6"
          className="w-full h-full animate-slide-images"
        />
      </div>
      <Links />
    </section>
  );
};

export default Head;
