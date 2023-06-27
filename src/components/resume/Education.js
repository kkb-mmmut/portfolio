import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div className='className="mt-14 w-full flex flex-col gap-6'> 
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2014 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Computer Science & Engineering"
            subTitle="B-Tech (2020 - 2023)"
            result="7.42/10"
            des="Madan Mohan Malaviya University of Technology, Gorakhpur-273010"
          />
          <ResumeCard
            title="Computer Science & Engineering"
            subTitle="Diploma (2017 - 2020)"
            result="85.33/100"
            des="Sant Ravidas Government Polytechnic, Chanduali-232103 "
          />
          <ResumeCard
            title="PCM"
            subTitle="Senior Secondary Education (2015 - 2017)"
            result="64.6/100"
            des="Sun Flower Convent School,Ghazipur-233302"
          />
          <ResumeCard
            title="Science"
            subTitle="Higher Secondary Education (2013 - 2015)"
            result="9.00/10"
            des="Sun Flower Convent School,Ghazipur-233302"
          />
        </div>
      </div>
      {/* part Two */}

      <div className='className="mt-14 w-full flex flex-col gap-6'>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Internship</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
           
          <ResumeCard
            title="Teaching Assistant"
            subTitle="Coding Ninjas - (Feb,2023 - Present)"
            result="TAship"
            des="Resolve students' doubts and evaluate projects. Worked on different technologies like HTML, CSS, JavaScript, React JS, Redux, Firebase."
          />
          <ResumeCard
            title="Artificial Intelligence"
            subTitle="Verzeo - (Jul,2022 - Aug,2022)"
            result="Internship"
            des="Artificial Intelligence live projects from Zebo.ai in association with Verzeo. Worked on Text Analysis, NLP, ANN & CNN. "
          />
          <ResumeCard
            title="Java Technologies"
            subTitle="Softpro India - (Jun,2019 - Aug,2019)"
            result="Summer Training"
            des="Worked on the projects like E-Procurement System. Worked on various skills like HTML, CSS, JavaScript, JAVA, JSP, Servlets & MySQL as well. "
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education