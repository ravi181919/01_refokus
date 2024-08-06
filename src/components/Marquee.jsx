import { motion } from "framer-motion";
import React from "react";

const Marquee = ({ src , direction}) => {
  return (
    <div className="flex w-full gap-60 overflow-hidden">
      <motion.div
        initial={{ x: direction === 'left' ? '0' : '-100%' }}
        animate={{ x: direction === 'left' ? '-100%' : '0' }}
        transition={{repeat:Infinity, ease:'linear', duration:10, }}
        className="flex w-full gap-20 flex-shrink-0 py-5"
      >
        {src.map((elem, index) => (
          <img key={index} src={elem} className="w-20" />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction === 'left' ? '0' : '-100%' }}
        animate={{ x: direction === 'left' ? '-100%' : '0' }}
        transition={{repeat:Infinity, ease:'linear', duration:10, }}
        className="flex w-full gap-20 flex-shrink-0 py-5 "
      >
        {src.map((elem, index) => (
          <img key={index} src={elem} className="w-20" />
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
