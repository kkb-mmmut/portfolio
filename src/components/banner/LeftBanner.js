import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF,FaLinkedinIn, FaReact, FaGithub } from "react-icons/fa";
import { SiJavascript ,SiRedux, SiNodedotjs, SiCplusplus } from "react-icons/si";

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Full Stack Developer.", "UI Designer.", "Competitive Programmer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Kamlesh</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        My name is Kamlesh Kumar Bind, and I'm pursuing bachelor's in Computer Science. 
        I'm a proficient Full Stack Developer with React JS have a strong understanding of Data Structures and Algorithms. 
        Currently, I work as a Teaching Assistant at Coding Ninjas.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Social Links
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaFacebookF onClick={()=>{window.open('https://www.facebook.com/kamlesh.kumarbind.7946', '_blank', 'noreferrer');}}/>
            </span>
            <span className="bannerIcon">
              <FaGithub onClick={()=>{window.open('https://github.com/kkb-mmmut/', '_blank', 'noreferrer');}}/>
            </span>
            <span className="bannerIcon">
              <FaLinkedinIn onClick={()=>{window.open('https://www.linkedin.com/in/kkb-kamlesh/', '_blank', 'noreferrer');}}/>
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <SiCplusplus />
            </span>
            <span className="bannerIcon">
              <SiJavascript />
            </span>
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiRedux />
            </span>
            <span className="bannerIcon">
              <SiNodedotjs />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBanner