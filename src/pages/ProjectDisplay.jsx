import React from 'react';
import '../styles/ProjectDisplay.css';
import { useNavigate, useParams } from 'react-router-dom';
import { ProjectList } from '../helpers/ProjectList';
import GitHubIcon from '@material-ui/icons/GitHub';
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
    </div>
  );
};

export default ProjectDisplay;
