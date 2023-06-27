import React from 'react'
import { bannerImg } from "../../assets/index"; 

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative ">
      <img
        style={styled.compo}
        className="w-[300px] h-[400px] lgl:w-[400px] lgl:h-[500px] z-10 "
        src={bannerImg}
        alt="bannerImg"
      />
      <div className="absolute bottom-0 w-[300px] h-[400px] lgl:w-[400px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
}
const styled={
  compo:{
    color:"black", 
    borderRadius:"5%", 
    border: "5px solid transparent",
    borderImage:" linear-gradient(to bottom right, #ff014f 0%, #ffffff 25%, #ff014f 50%, #ffffff 75%, #ff014f 100%)",
    borderImageSlice:" 1"

  }
}
export default RightBanner