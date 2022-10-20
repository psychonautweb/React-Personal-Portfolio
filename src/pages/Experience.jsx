import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import '../styles/Experience.css';

const Experience = () => {
  return (
    <div className="experience">
      <section>
        <p>
          Hello world and hello dear visitor, I'm Dubravko. Hard working,
          honest, reliable, dedicated and responsible member of the human
          species - but, hey, that's boring part and you already know that ...
          or do you? :) Currently, I'm working remotely as a contractor and in
          my free time I'm fully devoted in learning Web Development - JS and
          React library.
        </p>
      </section>
      <h2 className="experience-subtitle">Education</h2>
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020"
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            University of Banja Luka, Faculty of Natural Sciences and
            Mathematics
          </h3>
          <p>BSc degree in Biology Education</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021 - 2022"
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">QStation Course</h3>
          <p>HTML, CSS and intro to JavaScript</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022"
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">QStation Course</h3>
          <p>Advanced JavaScript and intro to ReactJS</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      <h2 className="experience-subtitle">Work</h2>
      <VerticalTimeline lineColor="#e88963">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 - 2019"
          iconStyle={{ background: '#e9d35b', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">NCR Corporation</h3>
          <p>Technical Support Representative</p>
          <p>Aloha POS Software and Hardware Support</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022"
          iconStyle={{ background: '#e9d35b', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">IdeaCompiler</h3>
          <p>Internship - Supporting role in FinTech project</p>
          <p>Monitoring SQL Database, File and Data feeds</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
