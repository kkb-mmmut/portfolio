import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2017 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Coursework</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="Data Structure & Algorithms"
            subTitle="2017 - Present"
            result="B-Tech|Diploma"
            des=" "
          />
          <ResumeCard
            title="Design & Analysis of Algorithms"
            subTitle="2020 - Present"
            result="B-Tech"
            des=" "
          />
          <ResumeCard
            title="Computer Architecture & Networks"
            subTitle="2020 - Present"
            result="B-Tech"
            des=" "
          />
          <ResumeCard
            title="Operating System"
            subTitle="2020 - Present"
            result="B-Tech"
            des=" "
          />
          <ResumeCard
            title="Web Development"
            subTitle="2017 - Present"
            result="B-Tech|Diploma"
            des=" "
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2017 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Training & Workshops</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Advance Web Development with React JS"
            subTitle="Coding Ninjas (Oct,2022 - Jan,2023)"
            result="Online"
            des=" "
          />
          <ResumeCard
            title="Front End|Full Stack Web Development"
            subTitle="Coding Ninjas (Oct,2022 - Jan,2023)"
            result="Online"
            des=" "
          />
          <ResumeCard
            title="Data Structure in C++"
            subTitle="Coding Ninjas (Mar,2019 - Jul,2022)"
            result="Online"
            des=" "
          />
          <ResumeCard
            title="Barclays LifeSkills Programmee"
            subTitle="GTT Foundation (Jun,2019 - Aug,2019)"
            result="Online"
            des=" "
          />
          <ResumeCard
            title="HTML, CSS & JavaScript"
            subTitle="Udmey (Jun,2019 - Aug,2019)"
            result="Remote"
            des=" "
          />
          <ResumeCard
            title="Java Technologies"
            subTitle="Softpro India (Jun,2019 - Aug,2019)"
            result="Lucknow"
            des=" "
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
