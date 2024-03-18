import React from "react";
import "./Projects.scss";
import { RiArrowRightUpLine } from "react-icons/ri";

const projects = [
  {
    title: "Chatapp",
    description: "this is a chat app using react with jsx also uses scss for better understanding",
    image:"https://i.postimg.cc/P5CxN2KZ/pixlr-image-generator-58d1e582-07f4-4c2e-9716-41cfdc1cc68a.png",
    url: "https://prismatic-parfait-d998a1.netlify.app/"
  },
  {
    title: "To-do-List-maker",
    description: "This is a to do maker website build using react.",
    image: "https://i.postimg.cc/2yz8QBBN/pixlr-image-generator-db7d2a9c-d5b5-4f92-b84f-0d67ee1fa4ef.png",
    url: "https://to-do-list-make-gad22p1jg-the1612raj.vercel.app/"
  },
  {
    title: "Sign in design project",
    description: "This is a demo project using figma.",
    image: "https://i.postimg.cc/hjv73kgP/Screenshot-2024-02-21-at-15-59-17-Figma.png",
    url: "https://www.figma.com/proto/KQxTViMqwCM03Pb0Ng2PHf/Sign-In-%26-Sign-Up-(Community)?type=design&node-id=3-19&t=ZpIWq6b64qge3dpy-0&scaling=min-zoom&page-id=3%3A4&starting-point-node-id=3%3A63"
  }
];

const Projects = () => {
  return (
    <div className="Project_container">
      <div className="heading">Projects</div>
      <div className="content">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-description">
              <div className="project-title">{project.title}</div>
              <div className="project-hover">
                <div className="project-text">{project.description}</div>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <a href="https://github.com/The1612raj" className="viewmorebtn" target="_blanck"rel="noopener noreferrer">view more projects  <RiArrowRightUpLine/></a>
    </div>
  );
};

export default Projects;