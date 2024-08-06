import React, { useState } from "react";
import Stripes from "./Stripes";
import Products from "./Products";
import Marquees from "./Marquees";
import Cards from "./Cards";
import Footer from "./Footer";
import { useScroll } from "framer-motion";

const Work = () => {

  const images = [
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "53%",
      left: "48%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "57%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "58%",
      left: "60%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "55%",
      left: "55%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "64%",
      left: "50%",
      isActive: false,
    },
  ];

  const [workImages, setWorkImages] = useState(images);
  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (data) => {
    let scrollYProgressValues = Math.floor(data * 100);

    const showWorkImages = (arr) => {
      setWorkImages((prev) =>
        prev.map((item, index) =>
          arr.indexOf(index) === -1
            ? { ...item, isActive: false }
            : { ...item, isActive: true }
        )
      );
    };

    switch (scrollYProgressValues) {
      case 0:
        showWorkImages([]);
        break;
      case 3:
        showWorkImages([0]);
        break;
      case 7:
        showWorkImages([0, 1]);
        break;
      case 9:
        showWorkImages([0, 1, 2]);
        break;
      case 11:
        showWorkImages([0, 1, 2, 3]);
        break;
      case 14:
        showWorkImages([0, 1, 2, 3, 4, 5]);
        break;
    }
  });
  return (
    <div className=" w-full mt-10">
      <div className="relative max-w-screen-lg mx-auto text-center">
        <h1 className="text-[30vw] font-medium mt-6 leading-none">work</h1>
        <div className="absolute h-full w-full top-0 mt-5">
          {workImages.map(
            (ele, inde) =>
              ele.isActive && (
                <img
                key={inde}
                  src={ele.url}
                  className="absolute w-56 rounded-md -translate-x-1/2 -translate-y-1/2"
                  style={{ top: ele.top, left: ele.left }}
                  alt=""
                />
              )
          )}
        </div>
      </div>
      <p className="opacity-75 mt-5 text-sm font-extralight tracking-tight text-white text-center">
        Web Design, Webflow Development, Creative Development
      </p>
      <div>
        <Stripes />
        <Products />
        <Marquees />
        <Cards />
        <Footer />
      </div>
    </div>
  );
};

export default Work;
