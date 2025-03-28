import React from 'react'
import MarqueeItem from './MarqueeItem'
import './Marquee.css'

const Marquee = () => {

    const images = ["Figma.png","Gsap.png","Nodejs.png","React.png","tailwind.png",]

  return (
    <div className="relative">
        <div className="blur-left"></div>
       <div className=" w-[50vw] overflow-x-hidden">
            <MarqueeItem images={images} from={0} to={"-100%"} />
       </div>
        <div className="blur-right"></div>
    </div>
    
  )
}

export default Marquee