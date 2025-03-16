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
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2005 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Educational Qualification</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="Masters in Computer Science"
            subTitle="Georgia State University(Aug 2022-Ongoing) in Atlanta"
            result="3.8/4.0 CGPA"
            des="Studied subjects like Web Development,Mobile App Development,Databases and Web,Advanced HCI,Cryptography,Privacy Aware Computing."
          />
          <ResumeCard
            title="BTech in Computer Science"
            subTitle="SVECW (2016 - 2020)"
            result="8.98/10 CGPA"
            des="Studied IT related subjects like Operating Systems, DBMS, OOPS, ML, Web Development, AI, DSA, Compiler Design etc."
          />
          <ResumeCard
            title="Higher Secondary Education"
            subTitle="Sasi New Gen Junior College (2014 - 2016)"
            result="98%"
            des="Studied in this school from 11th to 12th std. MPC Subjects:Maths.Physics & Chemistry."
          />
          <ResumeCard
            title="Primary & Secondary School Education"
            subTitle="ROOTS SCHOOL (2002-2014)"
            result="9.8/10"
            des="Studied in this school from Nursery to 10th std. SSC Subjects: English, Hindi, Telugu, Maths, Science, Social Sciences."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Certificates</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title=" The Complete 2023 Web Development Bootcamp By Angela Yu"
            subTitle="Udemy - (01/01/2022 - 20/06/2022) [6 months]"
            result="Online"
            des="Learnt MERN stack and made various project using the skills in this course. Check out my Github for project info !"
          />
          <ResumeCard
            title="Microservices and RESTful APIs with Spring Boot and Spring Cloud"
            subTitle="Udemy - (10/03/2021 - 24/09/2022) [6 months]"
            result="Online"
            des="Java Spring Boot Microservices 5-in-1 - Spring Boot, Spring Cloud, Docker, Kubernetes and REST API (REST Web Services)"
          />
          <ResumeCard
            title="The Complete JavaScript Course 2023: From Zero to Expert!"
            subTitle="Udemy - (05/03/2019 - 02/09/2020) [6 months]"
            result="Online"
            des="The modern JavaScript course for everyone! Master JavaScript with projects, challenges and theory. Many courses in one! "
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education