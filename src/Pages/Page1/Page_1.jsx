import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import './page-1.css';

const Page_1 = () => {

  const rotateRef = useRef(null);

  useGSAP(()=>{
    gsap.from(".introtext h2 span",{
      delay:.2,
      duration:.7,
      opacity:0,
      stagger:.1,
      ease:"power2.in"
    })
  });


  useEffect(() => {
    // GSAP animation after component is mounted
    gsap.to(rotateRef.current.querySelector("img"), {
      rotate: 360,
      duration: 6,
      repeat: -1, // Infinite rotation
      ease: "linear",
    });
  }, []);

  return (
    <div className=' w-full h-screen bg-[url(./background.png)] flex-col flex bg-cover  px-[5vw]'>

      <div className="textEffect h-[80vh] w-[50vw] select-none">
       <div className="textstructer text-white translate-y-[17vw] ">
            {["Creating the web", "for today and", "tomorrow."].map((item, index)=>{
                return (
                <div className="markers ">
                  <div className="w-fit flex ">
                    {index === 2 && (<motion.div initial={{width: 0}} animate={{width: "9vw"}} transition={{ease :[0.76, 0, 0.24, 1], duration: 1}} 
                    className="w-[7vw] bg-cover bg-[url(./Pixbex.png)] mr-[0.5vw] mt-[1.5vw] h-[4.5vw] relative -top-[1.1vw]  rounded-md"></motion.div>)}
                    <h1 className="  uppercase text-[6vw] leading-[4.8vw] tracking-tighter font-[Barlow-bold] font-bold">
                      {item}</h1>
                      </div>
                </div>
                );
            })}
        </div>
      </div>

      <div className="Intro w-full h-[10vw] overflow-hidden flex ">
        <div className="introtext w-[30vw] text-zinc-200 text-[1vw] capitalize font-[barlow-light]">

          <h2 className='overflow-y-hidden'>
          <span>H</span><span>i,</span> <span>I</span><span>'</span><span>m</span> <span>K</span><span>u</span><span>n</span><span>a</span><span>l,</span>  <span>a</span> <span>f</span><span>r</span><span>o</span><span>n</span><span>t</span><span>e</span><span>n</span><span>d</span> <span>d</span><span>e</span><span>v</span><span>e</span><span>l</span><span>o</span><span>p</span><span>e</span><span>r</span> <span>w</span><span>h</span><span>o</span> <span>l</span><span>o</span><span>v</span><span>e</span><span>s</span> <span>b</span><span>u</span><span>i</span><span>l</span><span>d</span><span>i</span><span>n</span><span>g</span>

          </h2>

          <h2 className='overflow-y-hidden'>
          <span>f</span><span>a</span><span>s</span><span>t</span><span> </span><span>a</span><span>n</span><span>d</span><span> </span><span>u</span><span>s</span><span>e</span><span>r</span><span>-</span><span>f</span><span>r</span><span>i</span><span>e</span><span>n</span><span>d</span><span>l</span><span>y</span><span> </span><span>w</span><span>e</span><span>b</span><span>s</span><span>i</span><span>t</span><span>e</span><span>s</span><span> </span><span>u</span><span>s</span><span>i</span><span>n</span><span>g</span><span> </span><span>R</span><span>e</span><span>a</span><span>c</span><span>t</span><span> </span><span>a</span><span>n</span><span>d</span><span> </span><span>T</span><span>a</span><span>i</span><span>l</span><span>w</span><span>i</span><span>n</span><span>d</span><span>.</span>
          </h2>
        </div>

        <div ref={rotateRef} className="rotate translate-y-[2vw] hover:cursor-pointer  translate-x-[45vw] flex items-center justify-center h-[4.5vw] w-[4.5vw] rounded-full">
          <img className='bg-cover h-[4.5vw] w-[4.5vw]' src="circle.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Page_1