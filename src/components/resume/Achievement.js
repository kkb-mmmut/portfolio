import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2017 - 2023</p>
          <h2 className="text-4xl font-bold">Awards & Achievements</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Engineering Certificate"
            subTitle="Triplebyte (Sep,2022)"
            result="TEST"
            des=" Triplebyte Engineering Certificate."
          />
          <ResumeCard
            title="SQL(Basic) Certificate"
            subTitle="HackerRank (Aug,2021)"
            result="TEST"
            des="SQL(Basic) Certificate provided by the Hacker Rank."
          />
          <ResumeCard
            title="Top-3 Position"
            subTitle="Academic"
            result="Diploma"
            des=" Secured Second Position in College in three consecutive years."
          />
          <ResumeCard
            title="Best Performance Award"
            subTitle="Training"
            result="Summer Training"
            des="Best Performance in Java Technologies during training in Softpro India, Lucknow."
          /> 
        </div>
      </div>
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">&nbsp;</p>
          <h2 className="text-4xl font-bold">&nbsp;</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Certificate of Excellence"
            subTitle="Coding Ninjas (Oct,2022 - Jan,2023)"
            result="Training"
            des="Excellence in Advance Web Development using React."
          />
          <ResumeCard
            title=" Certificate of Excellence"
            subTitle="Coding Ninjas (Oct,2022 - Jan,2023)"
            result="Training"
            des="Front End|Full Stack Web Development"
          />
          <ResumeCard
            title=" Certificate of Excellence"
            subTitle="Coding Ninjas (Mar,2019 - Jul,2022)"
            result="Training"
            des="Data Structure using C++." 
          />
          <ResumeCard
            title=" Certificate of Excellence"
            subTitle="Coding Ninjas (Feb,2019 - Mar,2022)"
            result="Training"
            des="Introduction to C++."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
