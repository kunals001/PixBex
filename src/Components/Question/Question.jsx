import React, { useEffect, useRef, useState } from "react";
import "./question.css";
import gsap from "gsap";
import clickSound from "./Sound/click.mp3";

const Question = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const answerRefs = useRef([]);

  useEffect(() => {
    // GSAP Animation when answer opens/closes
    answerRefs.current.forEach((el, index) => {
      if (el) {
        if (activeIndex === index) {
          gsap.to(el, {
            height: "auto",
            opacity: 1,
            duration: 0.5,
            ease: "power2.inOut",
          });
        } else {
          gsap.to(el, {
            height: 0,
            opacity: 0,
            duration: 0.5,
            ease: "power2.inOut",
          });
        }
      }
    });
  }, [activeIndex]);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);

    const audio = new Audio(clickSound);
    audio.volume = 0.2;
    audio.play();
  };

  return (
    <div className="w-full h-screen bg-[#131415] px-[5vw]">
      <div className="question-section w-full">
        <div>
          <h2 className="text-[3vw] text-zinc-200 select-none font-[barlow-semibold]">
            Frequently Asked Questions (FAQ)
          </h2>
        </div>

        {/* Question Section */}
        <div className="questions mt-[1vw] space-y-[0.8vw]">
          {[
            {
              question: "Can you create animated or interactive websites?",
              answer:
                "Yes, I can create websites with smooth animations and interactive elements to make them more engaging for users. I use React and Tailwind CSS to build these websites. I’m also learning React Three Fiber and WebGL, which helps me add 3D animations and cool effects. Whether it’s simple animations or advanced interactive designs, I can make the website visually appealing and fun to use.",
            },
            {
              question: "Do you work on both frontend and backend?",
              answer:
                "Yes, I work on frontend using React, Tailwind CSS, and JavaScript, and I also have experience with backend technologies like Node.js and MongoDB.",
            },
            {
              question: "Can you redesign or improve an existing website?",
              answer:
                "Yes, I can analyze your current website and suggest improvements to enhance the UI/UX and boost overall performance.",
            },
            {question:" How long does it take to complete a website?",
             answer:"It depends on the project’s complexity. Simple websites take 1-2 weeks, while advanced or interactive websites may take 3-4 weeks."   
            },
            {question:" Can you add custom features to my website?",
                answer:"Yes, I can add custom features based on your requirements, like contact forms, payment gateways, or animations."   
               },
               {question:" Can you redesign or improve existing websites?",
                answer:"Yes, I can redesign and improve existing websites. I focus on enhancing the UI/UX to make the site more modern, user-friendly, and visually appealing. I also optimize performance for faster load times and better functionality. 🚀"

               }
          ].map((item, index) => (
            <div
              key={index}
              className={`question-${index + 1} border-zinc-200 border-t-[.15vw] px-[1vw] py-[1vw] transition-all ${
                activeIndex === index ? "pb-[2vw]" : "pb-[1.5vw]"
              }`}
            >
              <div className="ques flex justify-between items-center">
                <h4 className="text-zinc-200 text-[1.5vw] transition-all duration-75">{item.question}</h4>
                <div
                  onClick={() => handleClick(index)}
                  className="info select-none w-[2vw] h-[2vw] flex justify-center items-center border-zinc-300 rounded-[.4vw] border-[.1vw] hover:cursor-pointer"
                >
                  <img
                    className={` select-none h-[1vw] transform transition-transform duration-300 ${
                      activeIndex === index ? "rotate-45" : "rotate-0"
                    }`}
                    src="Union.png"
                    alt="Toggle"
                  />
                </div>
              </div>

              {/* GSAP Controlled Answer */}
              <div
                ref={(el) => (answerRefs.current[index] = el)}
                className="ans px-[1vw] overflow-hidden h-0 opacity-0"
              >
                <p className="pt-[1vw] text-[1vw] w-[55vw] text-zinc-200 font-[barlow-light]">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Question;
