import React,{useState} from 'react'
import './Nav.css';
/*import {gsap} from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";*/


const Nav = () => {
  /*gsap.registerPlugin(ScrollTrigger);

  useGSAP(()=>{
    gsap.to(".nav",{
      borderBottom:"1px solid gray",
      height:"3.5vw",
      duration:.3,
      ease:"power2.out",
      scrollTrigger:{
        trigger:".under-1",
        //markers: true,
        start:"top 0%",
        end:"top 7%",
        screb:1
      }
    })
  })*/

  /*const [animationFlags, setAnimationFlags] = useState({
      isAnimating1: false,
      isAnimating2: false,
      isAnimating3: false,
      isAnimating4: false,
  });
  
    // Single function to handle animations
  const handleMouseEnter = (underClass, flagKey) => {
      if (animationFlags[flagKey]) return; // Prevent re-animation if already animating
  
      setAnimationFlags((prevFlags) => ({ ...prevFlags, [flagKey]: true })); // Set flag to true
  
      // Text animation
      gsap
        .from(`.${under}`, {
          y: "2vw",
          duration: 0.4,
          ease: "cubic-bezier(0.5, 1, 0.89, 1)",
          stagger: 0.05,
        })
        .then(() =>
          setAnimationFlags((prevFlags) => ({ ...prevFlags, [flagKey]: false }))
        ); // Reset flag after animation ends

  };*/

  return (
    <div className='nav w-full h-[3.5vw] bg-[#131415] flex items-center px-[5vw] justify-between transition-all duration-75 fixed z-10'>

      <div className="logo w-[7vw] select-none">
        <img src="logo.png" alt="" />
      </div>

      <div className="Nav-Links text-white flex gap-[1vw] items-center select-none">


      {/* Home */}
      <div
        className="Home btnClass text-[1.3vw] hover:cursor-pointer px-[.4vw]  rounded-[.4vw] overflow-hidden relative inline-block ">

        <h5 className="btn-h5-1 font-[Barlow-semibold] ">Home</h5>
        <div className="underClass under-1 w-full h-[.2vw] bg-zinc-200 "></div>

        
      </div>

      {/* Skills */}
      <div
        className="skills btnClass text-[1.3vw] hover:cursor-pointer px-[.4vw] py-[.2vw]  rounded-[.4vw] overflow-hidden relative inline-block">

        <h5 className="btn-h5-2 font-[Barlow-semibold]">Skills</h5>
        <div className="underClass under-1 w-full h-[.2vw] bg-zinc-200 "></div>
      </div>

      {/* Projects */}
      <div
        className="projects btnClass text-[1.3vw] hover:cursor-pointer px-[.4vw] py-[.2vw] rounded-[.4vw] overflow-hidden  inline-block relative">

        <h5 className="btn-h5-3 font-[Barlow-semibold]">Projects</h5>
        <div className="underClass under-1 w-full h-[.2vw] bg-zinc-200 "></div>
      </div>

      {/* Contact */}
      <div
        className="contact btnClass text-[1.3vw] hover:cursor-pointer px-[.4vw] py-[.2vw] rounded-[.4vw] overflow-hidden  inline-block relative">

        <h5 className="btn-h5-4 font-[Barlow-semibold]">Contact us</h5>
        <div className="underClass under-1 w-full h-[.2vw] bg-zinc-200 "></div>

      </div>
     </div>
    </div>
  )
}

export default Nav