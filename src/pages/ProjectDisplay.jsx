import React from 'react';
import '../styles/ProjectDisplay.css';
import { useNavigate, useParams } from 'react-router-dom';
import { ProjectList } from '../helpers/ProjectList';
import GitHubIcon from '@material-ui/icons/GitHub';

const ProjectDisplay = () => {
  const { id } = useParams();
  const project = ProjectList[id]; // depending on the ID we access the element of array in ProjectList
  const navigate = useNavigate();

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
        <a target="_blank" rel="noreferrer" href={project.link}>
          {project.name}
        </a>
      </p>
      <GitHubIcon />
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

export default ProjectDisplay;
