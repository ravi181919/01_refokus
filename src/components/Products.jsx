import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";
import a from '../../public/videos/a.mp4'
import b from '../../public/videos/b.mp4'
import c from '../../public/videos/c.mp4'
import d from '../../public/videos/d.mp4'
import e from '../../public/videos/e.mp4'
import f from '../../public/videos/f.mp4'
import g from '../../public/videos/g.mp4'

const Products = () => {
  const data = [
    {
      title: "Arqitel",
      des: "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
    },
    {
      title: "Cula",
      des: "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      live: true,
      case: false,
    },
    {
      title: "Layout Land",
      des: "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      des: "we've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      case: false,
    },
    {
      title: "Maniv",
      des: "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
      live: true,
      case: false,
    },
    {
      title: "Rainfall",
      des: "We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.",
      live: true,
      case: true,
    },
    {
      title: "Showcase",
      des: "Our OMR22 Masterclass teaches how to create a showcase website, and we made a showcase website about showcase websites to promote the art of showcasing.",
      live: true,
      case: true,
    },
  ];
  const [productsData, setProductsData] = useState(data);

  const [windowPosition, setWindowPosition] = useState(0);

  const windowPositionChange = (productsIndex) => {
    setWindowPosition(() => productsIndex * 15);
  };

  const productsVideoAPI = [
    {API: a},
    {API: g},
    {API: c},
    {API: e},
    {API: b},
    {API: f},
    {API: d},
    
  ]

  const [productsVideoAPICall, setProductsVideoAPICall] =
    useState(productsVideoAPI);

  return (
    <div className="w-full mt-10 relative">
      {productsData.map((values, valuesIndex) => (
        <Product
          key={valuesIndex}
          data={values}
          productsIndex={valuesIndex}
          windowPositionChange={windowPositionChange}
        />
      ))}
      <div className="absolute w-full h-full top-0 pointer-events-none">
        <motion.div
          initial={{ y: windowPosition, x: "-50%" }}
          animate={{ y: windowPosition + "rem" }}
          className="absolute overflow-hidden left-[43%]  rounded-md w-[22rem] h-[15rem]"
        >
          {productsVideoAPICall.map((ele, index) => (
            <motion.div
              key={index}
              animate={{ y: -windowPosition + "rem" }}
              className="w-full h-full overflow-hidden"
            >
              <video
                src={ele.API}
                autoPlay
                muted
                loop
                draggable="false"
                key={index}
                className="h-full w-full object-cover"
              ></video>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
