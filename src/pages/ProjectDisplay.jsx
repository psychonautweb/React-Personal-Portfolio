import React from 'react';
import '../styles/ProjectDisplay.css';
import { useNavigate, useParams } from 'react-router-dom';
import { ProjectList } from '../helpers/ProjectList';
import CancelIcon from '@mui/icons-material/Cancel';
import { useStyles } from '../components/StyleMUI';

const ProjectDisplay = () => {
  const { id } = useParams();
  const project = ProjectList[id]; // depending on the ID we access the element of array in ProjectList
  const navigate = useNavigate();

  const classes = useStyles();

  return (
    <div className="project">
      <h1>{project.name}</h1>
      <CancelIcon
        className={`${classes.customHover} cancel-icon`}
        onClick={() => navigate(-1)}
      >
        Back
      </CancelIcon>
      <img src={project.image} alt="project" />

      <ul className="project-info-wrapper">
        <li>
          <p className="project-info">
            <b> TechStack: </b>
            {project.skill}
          </p>
        </li>
        <li>
          <p className="project-info">
            <b> Live: </b>
            <a target="_blank" rel="noreferrer" href={project.link}>
              {project.name}
            </a>
          </p>
        </li>
        <li>
          <p className="project-info">
            {project.code ? (
              <b>
                Code:{' '}
                <a href={project.code} target="_blank" rel="noreferrer">
                  Github
                </a>
              </b>
            ) : (
              ''
            )}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default ProjectDisplay;
