import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col gap-20 md:flex-row"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2017</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Graduate Software Engineer"
            subTitle="Developer - (08/2022-Ongoing) at Georgia State University"
            result="Atlanta"
            des="Developing Responsive Applications using React,React Native & Spring Boot"
          />
          <ResumeCard
            title="System Engineer"
            subTitle="Digital Team -(08/2020-08/2022) [2 Years] at TataConsultancyServices(Apple GBI)"
            result="Hyderabad,India"
            des="Developed API'S using NodeJS & GraphQL and handled the front end using React & Redux"
          />
          <ResumeCard
            title="Associate Software Engineer"
            subTitle="Developer - (06/2019 - 07/2020)  [1 Year] at InnovaSolutions"
            result="Hyderabad,India"
            des="Developed Restful API's and Integrated the Node.js and Nest.js Applications with various databases including both SQL & NoSQL"
          />
            <ResumeCard
            title="Trainee Software Engineer"
            subTitle="Developer - (06/2017 - 07/2018)  [1 Year] at Tammina Infotech"
            result="Vizag,India"
            des="Developed Ruby on Rails Applications by ensuring efficient data flow"
          />  
        </div>
      </div>
     
    </motion.div>
  );
};

export default Experience;
