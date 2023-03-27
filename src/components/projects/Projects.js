import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectFour,projectFive,projectSix } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="PROJECTS"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="lIVE BOX"
          des="A Live Box is an online chat based application used to connects everyone on a single platform, which have the features of
          login, signup, real time chat, search users, send images etc. "
          link="https://github.com/kkb-mmmut/Live_Box"
          deploy="https://kkb-mmmut.github.io/Live_Box/"
          src={projectOne}
        />
        <ProjectsCard
          title="Mini I-Pod Emulator"
          des="A Mini-iPod emulator that connects to virtual iPod player. Looks like a classic device we all used to adore with all
           working functionality for listening music, and having all controls. "
           link="https://github.com/kkb-mmmut/csb-slhyiw"
          deploy="https://kkb-mmmut.github.io/csb-slhyiw/"
          src={projectTwo}
        />
        <ProjectsCard
          title="Ninja's Todos"
          des="Ninja's Todos app to hel you stay organized and manage your day-to-day. 
          You can use to make shopping lists or task lists to increase your productivity and focus."
          link="https://github.com/kkb-mmmut/ninjas_todos"
          deploy="https://kkb-mmmut.github.io/ninjas_todos/"
          src={projectFive}
        />
        <ProjectsCard
          title="Message Me"
          des="messageMe is social networking site which will basically have the features of login, 
          signup, post creation, and deletion, like, comment, chat etc."
          link="https://github.com/kkb-mmmut/messageMe"
          deploy="https://kkb-mmmut.github.io/messageMe/"
          src={projectThree}
        />
        <ProjectsCard
          title="iNote It"
          des="A Note making application.
              Having the feature to store the information in your local machine."
          link="https://github.com/kkb-mmmut/iNote-It"
          deploy="https://kkb-mmmut.github.io/iNote-It/"
          src={projectSix}
        />
        <ProjectsCard
          title="UMS Web App"
          des=" Project on MMMUT Management System which have the facility of registration, 
          login, sms on registration, generate results, download e-books, show timetable etc. "
          link="https://github.com/kkb-mmmut/mmmut.web.com"
          deploy="https://github.com/kkb-mmmut/mmmut.web.com"
          src={projectFour}
        />
      </div>
    </section>
  );
}

export default Projects