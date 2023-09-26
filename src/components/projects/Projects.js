import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree,projectFour,projectFive,projectSix} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="Check these out on my github"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Blogs Site using Gatsby and React"
          des=" A Blog Site Website built using Gatsby and React which can be changed as per the requirements"
          src={projectOne}
          githubLink="https://github.com/Bulliswami/blogapi"
          websiteLink="https://bulliswami.github.io/SiteBlog/"

        />
        <ProjectsCard
          title="Blog API CRUD Operations"
          des=" This is a blog crud api's have a JWT, Node & Express as backend and Mongoose & MongoDB database."
          src={projectTwo}
          githubLink="https://github.com/Bulliswami/blogapi"
          websiteLink="https://crudblogapi.onrender.com/api/v1/users"
        />
        <ProjectsCard
          title="Millionaire Game Website"
          des=" This is a Game website for who wants to become a millionaire which is developed in PHP & MYSql"
          src={projectThree}
          githubLink="https://github.com/Bulliswami/millionaire_game/tree/master"
          // websiteLink="https://mihirs-secrets-sharing-website.onrender.com/"
        />
        <ProjectsCard
          title="GraphQL Queries for Library System"
          des="GraphQL queries for library information system which is designed using NodeJS & GraphQL"
          src={projectFour}
          githubLink="https://github.com/Bulliswami/Graphql"
         // websiteLink="https://mihirc0111.github.io/AfterSchoolDiaries-HTML-CSS-JS-BootStrap-Website/"
        />
        {/* <ProjectsCard
          title="Weather Website"
          des=" This is a weather website created using HTML,CSS,Bootstrap,Node.js,Express.js and OpenWeather API ."
          src={projectFive}
          githubLink="https://github.com/mihirc0111/Weather-Website-UsingAPI--node.js--express.js"
          websiteLink="https://mihirs-weather-website.onrender.com/"
        />
        <ProjectsCard
          title="Face Detection"
          des=" This project uses various libraries like to detect human face from a given image, detect a face from a live -webcam video and to create an attendance system."
          src={projectSix}
          githubLink="https://github.com/mihirc0111/Face-Detection-ML-Project-Python.git"
          websiteLink=""
        /> */}
      </div>
    </section>
  );
}

export default Projects