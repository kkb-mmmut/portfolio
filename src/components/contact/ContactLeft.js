import React from 'react' 
import { FaFacebookF,FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import {BsFileEarmarkPerson} from "react-icons/bs";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Kamlesh Kumar Bind</h3>
        <p className="text-lg font-normal text-gray-400">
          Advance Full Stack Developer | Software Engineer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        Hey, I am Advance full stack developer using React JS and have a very good knowledge in Data Structure & Alogrithms. 
        Currently I am Teaching Assistant at Coding Ninjas.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 9984741778</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">kkb.mmmut@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Social Links</h2>
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
            <span className="bannerIcon">
              <FaTwitter onClick={()=>{window.open('https://twitter.com/kamlesh_kkb', '_blank', 'noreferrer');}}/>
            </span> 
            <span className="bannerIcon">
              <BsFileEarmarkPerson onClick={()=>{window.open('https://kkb-mmmut.github.io/kamlesh_portfolio/', '_blank', 'noreferrer');}}/>
            </span> 
        </div>
      </div>
    </div>
  );
}

export default ContactLeft