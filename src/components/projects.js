import React from 'react'
import ProjectItem from './project-item'

const projects = [
  {
    title: 'RiedbergTV Website',
    url: 'https://riedberg.netlify.com',
    github: 'https://github.com/Larsg7/riedbergtv',
    description:
      'Fully featured website for the scientific video project RiedbergTV.',
    tags: ['React', 'NodeJS'],
    position: ['Fullstack Dev'],
    openSource: true,
  },
  {
    title: 'PDFCreator',
    url: 'https://pdfcreator.larsgroeber.com',
    github: 'https://github.com/Larsg7/pdfcreator',
    description:
      'Certificate generator where user can upload LaTeX templates with placeholders.',
    tags: ['Angular 2', 'ASP.NET Core', 'GraphQL', 'Docker'],
    position: ['Fullstack Dev'],
    openSource: true,
  },
  {
    title: 'FPraktikum Frontend',
    github: 'https://github.com/PhysikOnline/fpraktikum_frontend',
    description: 'Frontend for a course registration site.',
    tags: ['Angular 2', 'Docker'],
    position: ['Frontend Dev'],
    openSource: true,
  },
  {
    title: 'Walking-robots',
    github: 'https://github.com/Larsg7/walking-robots',
    description:
      'Walking Robot using a single layered neural network, artificial evolution and supervised learning.',
    tags: ['C++', 'Neural Net'],
    position: [],
    openSource: true,
  },
]

const Projects = () => (
  <>
    <h3 style={{ marginBottom: '1.5rem' }}>💯 Projects</h3>
    {projects.map(p => (
      <div key={p.title} style={{ marginBottom: '1rem' }}>
        <ProjectItem item={p} />
      </div>
    ))}
  </>
)

export default Projects
