import React from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/img4.jpeg";
import img5 from "../assets/img5.jpeg";
import img6 from "../assets/img6.png";

import Links from "./Links";

const Head = () => {
  const images = [
    { src: img1, text: "bg sliding img 1" },
    { src: img2, text: "bg sliding img 2" },
    { src: img3, text: "bg sliding img 3" },
    { src: img4, text: "bg sliding img 4" },
    { src: img5, text: "bg sliding img 5" },
    { src: img6, text: "bg sliding img 6" },
  ];

  const imagesWithLoop = [...images, img1];
  return (
    <section className="h-screen bg-[#363636] overflow-hidden max-sm:h-auto max-lg:h-auto max-xl:h-auto">
      <div className="flex max-sm:pt-[2rem] animate-slide-images">
      {imagesWithLoop.map((img, idx) => (
          <img
            key={idx}
            src={img.src}
            alt={img.text}
            className="w-1/7 h-full"
          />
        ))}
      </div>
      <Links />
    </section>
  );
};

export default Head;
