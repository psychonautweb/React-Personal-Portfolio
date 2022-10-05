import React from 'react';
import '../styles/ProjectDisplay.css';
import { useParams } from 'react-router-dom';
import { ProjectList } from '../helpers/ProjectList';
import GitHubIcon from '@material-ui/icons/GitHub';

const ProjectDisplay = () => {
  const { id } = useParams();
  const project = ProjectList[id]; // depending on the ID we access the element of array in ProjectList

  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={project.image} alt="project" />
      <p>
        <b> TechStack: </b>
        {project.skill}
      </p>
      <p>
        <b> Live: </b>
      </p>
      <GitHubIcon />
    </div>
  );
};

export default ProjectDisplay;
