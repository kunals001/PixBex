import React,{useEffect, useRef} from 'react'
import './page-2.css';
import gsap from 'gsap';

const Page_2 = () => {

  const hoverRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const hover = hoverRef.current;
    const video = videoRef.current;

    gsap.set(hover, { scale: 0, opacity: 0 });

    // Mousemove Effect
    const handleMouseMove = (e) => {
      const rect = video.getBoundingClientRect(); // Get video div position
      const x = e.clientX - rect.left; // Relative X
      const y = e.clientY - rect.top; // Relative Y

      gsap.to(hover, {
        x: x-40,
        y: y-40,
        duration: 0.1,
      });
    };

    // Mouse Enter
    const handleMouseEnter = () => {
      gsap.to(hover, {
        scale: 1,
        opacity: 2,
        duration: 0.2,
      });
    };

    // Mouse Leave
    const handleMouseLeave = () => {
      gsap.to(hover, {
        scale: 0,
        opacity: 0,
        duration: 0.2,
      });
    };

    // Add Event Listeners
    if (video) {
      video.addEventListener("mousemove", handleMouseMove);
      video.addEventListener("mouseenter", handleMouseEnter);
      video.addEventListener("mouseleave", handleMouseLeave);
    }

    // Cleanup
    return () => {
      if (video) {
        video.removeEventListener("mousemove", handleMouseMove);
        video.removeEventListener("mouseenter", handleMouseEnter);
        video.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);
  
  
    {/*<div className="MarqueeEffect mt-[3vw]">
        <Marquee/>
      </div>*/}

  return (
    <div className="Page-2 w-full h-screen bg-[#131415] px-[5vw] py-[2vw] flex justify-center items-center ">

      <div ref={videoRef} className="video hover:cursor-pointer relative overflow-hidden w-full h-full rounded-[2vw]">
        <video  className="absolute w-full h-full object-cover"
        autoPlay
        muted
        loop src="web_3d_2.mp4"></video>

        <div ref={hoverRef} className="hover z-10 flex justify-center items-center transition-all duration-75 opacity-0 absolute  w-[7vw] h-[7vw] rounded-full bg-cover bg-[url(./hover.png)]">
            <h5 className='text-[1vw] mb-[1vw] font-[barlow-semibold] text-zinc-200'>Show Skills</h5>
        </div>
      </div>

    </div>
  )
}

export default Page_2