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
            title="Software Engineer II"
            subTitle="Developer - (04/2024-Ongoing) at Service Now"
            result="Atlanta"
            des="Developing Responsive Applications using React,React Native & Spring Boot"
          />
          <ResumeCard
            title="System Developer Intern"
            subTitle="Payroll Innovation Team -(05/2023-12/2023) [6 Months] at TataConsultancyServices(Apple GBI)"
            result="Hyderabad,India"
            des="Developed API'S using NodeJS & GraphQL and handled the front end using React & Redux"
          />
          <ResumeCard
            title="Graduate Research Assistant"
            subTitle="Developer - (01/2023 - 01/2024)  [1 Year] at Georgia State University"
            result="Atlanta,GA"
            des="Developed Restful API's and Integrated the Node.js and Nest.js Applications with various databases including both SQL & NoSQL"
          />
            <ResumeCard
            title="Senior Full Stack Developer"
            subTitle="Developer - (01/2022 - 08/2022)  [1 Year] at Bank of New York Mellon"
            result="Chennai,India"
            des="Developed Ruby on Rails Applications by ensuring efficient data flow"
          />  
              <ResumeCard
            title="Junior Software Developer"
            subTitle="Developer - (01/2022 - 08/2022)  [1 Year] at EPAM Systems"
            result="Hyderabad,India"
            des="Developed Ruby on Rails Applications by ensuring efficient data flow"
          />  
        </div>
      </div>
     
    </motion.div>
  );
};

export default Experience;
