import React from 'react'
import { motion } from "framer-motion";
import './Marquee.css'


const PixbexMarquee = () => {


  return (
    <div className='pixbex-marquee relative overflow-hidden'>
        <div className="mar w-full overflow-hidden">
            <div className="blur-left-2 "></div>
            <div className="flex  border-zinc-200 border-solid border-b-[.5vw] border-t-[.5vw]">
                <motion.h1
                initial={{ x: "0" }}
                animate={{ x: "-100%" }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="uppercase  flex flex-shrink-0 pr-10 font-[anton] text-[9vw] text-zinc-200 "
                >Pixbex offers creativity</motion.h1>

                <motion.h1
                initial={{ x: "0" }}
                animate={{ x: "-100%" }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="uppercase  flex flex-shrink-0 pr-10 font-[anton] text-[9vw] text-zinc-200 "
                >Pixbex offers creativity</motion.h1>

                <motion.h1
                initial={{ x: "0" }}
                animate={{ x: "-100%" }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="uppercase  flex flex-shrink-0 pr-10 font-[anton] text-[9vw] text-zinc-200 "
                >Pixbex offers creativity</motion.h1>

            </div>
            <div className="blur-right-2"></div>
        </div>
    </div>
  )
}

export default PixbexMarquee