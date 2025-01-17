import React, { Component } from 'react';
import classNames from 'classnames';
import projects from './project-data';
import { useState } from 'react';
import '../style/project-menu.css';

const ProjectMenu = () => {
  const [activeProject, setActiveProject] = useState(1);

  const handleProjectClick = (project) => {
    setActiveProject(project);
  };

  const projectItems = ['PROJECT ONE', 'PROJECT TWO', 'PROJECT THREE'];

  return(
    <div className='project-menu'>
      <div className='project-items-container'>
        {projectItems.map((item, index) => (
          <div
            key={index}
            className={classNames('project-item', {
              activeProject: activeProject === index + 1,
            })}
            onClick={() => handleProjectClick(index + 1)}
          >
            <h2 className='title'>{item}</h2>
          </div>
        ))}
      </div>
      <div className='project-sub-container'>
        {
          [projects[activeProject]].map((project, index) => (
            <div
              key={index}
              className={`project-sub-container-${index + 1}`}
            >
              <h3>{project.title}</h3>
              <img src={project.image} alt={project.title} />
              <div>{project.description}</div>
              <div className='link-container'>
                <a
                  href={project.github}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  GITHUB
                </a>
                <a
                  href={project.demo}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  DEMO
                </a>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ProjectMenu;