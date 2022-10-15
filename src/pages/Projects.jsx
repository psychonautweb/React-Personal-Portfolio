import React from 'react';
import ProjectItem from '../components/ProjectItem';
import { ProjectList } from '../helpers/ProjectList';

import '../styles/Projects.css';

const Projects = () => {
  return (
    <div className="projects">
      <h1>My personal Projects</h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => (
          <ProjectItem
            id={idx}
            name={project.name}
            image={project.image}
            key={idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
