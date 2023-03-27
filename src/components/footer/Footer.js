import React from 'react'
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa"; 
import {logo} from "../../assets/index" 
const Footer = () => { 
  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8">
      <div className="w-full h-full flex flex-col gap-8">
        <img className="w-32" src={logo} alt="logo" />
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
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Quick Link
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden"> 
          <li onClick={()=>{window.location.hash='#features';}}>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Expertise In
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li onClick={()=>{window.location.hash='#projects';}}>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Projects
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li> 
          <li onClick={()=>{window.open('https://kkb-mmmut.github.io/kamlesh_portfolio/', '_blank', 'noreferrer');}}>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Old Portfolio
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
        </ul>
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Coding Platforms
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          <li onClick={()=>{window.open('https://www.codechef.com/users/charlie_kkb', '_blank', 'noreferrer');}}>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Codechef
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li onClick={()=>{window.open('https://www.codingninjas.com/codestudio/profile/ce989d41-7ee0-4c74-8594-cbb20e668ec5', '_blank', 'noreferrer');}}>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Codestudio 
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li onClick={()=>{window.open('https://leetcode.com/charlie_kkb/', '_blank', 'noreferrer');}}>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Leetcode
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li> 
        </ul>
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          DOWNLOADS
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium overflow-hidden py-6">
          <li onClick={()=>{window.open('https://drive.google.com/file/d/1v_J-YbrY4ldZUvS6qQAR2UfBXGIqmbWz/view?usp=share_link', '_blank', 'noreferrer');}}>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Resume
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li onClick={()=>{window.open('https://drive.google.com/file/d/1uyn9P7DALsT3FYNrfCFVr4UGyYf2Zs6q/view?usp=share_link', '_blank', 'noreferrer');}}>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Cover Letter
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li onClick={()=>{window.open('https://www.google.com/maps/place/Madan+Mohan+Malaviya+University+Of+Technology/@26.7314343,83.4305473,17z/data=!3m1!4b1!4m6!3m5!1s0x39915ca3e2aa136b:0xc039bdf0211338a9!8m2!3d26.7314295!4d83.4331276!16zL20vMDQ0NWN4', '_blank', 'noreferrer');}}>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Location 
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li> 
        </ul>
      </div>
    </div>
  );
}

export default Footer