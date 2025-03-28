import React from "react";
import { motion } from "framer-motion";

const MarqueeItem = ({ images, from, to }) => {
  return (
    <div className="flex MyGradient ">
      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {images.map((image, index) => {
          return <img className="h-[2vw] pr-[2vw]" src={image} key={index} />;
        })}
      </motion.div>

      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {images.map((image, index) => {
          return <img className="h-[2vw] pr-[2vw]" src={image} key={index} />;
        })}
      </motion.div>
    </div>
  );
};

export default MarqueeItem;