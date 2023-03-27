import React from 'react'
import { GiArtificialIntelligence } from "react-icons/gi";
import { FaMobile } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si"; 
import { ImDisplay,ImDatabase} from "react-icons/im";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="Things I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Frontend Developer"
          des="Design and develop high-quality and highly reliable software UI features by using HTML, CSS, 
          JavaScript, Bootstrap & React JS."
          icon={<ImDisplay />}
        />
        <Card
          title="Backend Developer"
          des="Designed, implemented and maintained various back-end applications and utilities on using Java & NodeJS."
          icon={<ImDatabase/>}
        />
        <Card
          title="SEO Optimisation"
          des="Designed, implemented and maintained various applications and utilities by using SEO Optimization Tools."
          icon={<SiProgress />}
        />
        <Card
          title="UI & Design"
          des="Building interfaces in software or computerized devices, focusing on looks or style."
          icon={<FaMobile />}
        />
        <Card
          title="Hosting Websites"
          des="Web hosting services from Google Cloud, GitHub, Firebase, Netlify. Host everything from blogs to dynamic websites."
          icon={<SiAntdesign />}
        />
        <Card
          title="Artificial Intelligence"
          des="Worked on live projects from Zebo.ai in association with Verzeo.
          Worked on Text Analysis, NLP, ANN & CNN."
          icon={<GiArtificialIntelligence/>}
        />
      </div>
    </section>
  );
}

export default Features