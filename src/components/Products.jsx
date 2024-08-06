import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";
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
    {
      API: "https://cdn.dribbble.com/userupload/13541293/file/original-1baad81cec474e2345a480832925a2cc.mp4",
    },
    {
      API: "https://cdn.dribbble.com/userupload/13541207/file/original-c4ae1adf60d8b827f9ba91d25298000d.mp4",
    },
    {
      API: "https://cdn.dribbble.com/userupload/13541348/file/original-242e170c2bef86a0f1b74fbc22c3ca19.mp4",
    },
    {
      API: "https://cdn.dribbble.com/userupload/13541232/file/original-ab7806e0dd00f94be5aaccae4826db61.mp4",
    },
    {
      API: "https://cdn.dribbble.com/userupload/13541181/file/original-1e6a87ff3bf9e82a217be6c279e00d1d.mp4",
    },
    {
      API: "https://cdn.dribbble.com/userupload/4397933/file/original-b279004001d149854121d9538d3417c8.mp4",
    },
    {
      API: "https://cdn.dribbble.com/userupload/4397938/file/original-1335c48b0853f2653bea6cffbe9cfaae.mp4",
    },
  ];

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
