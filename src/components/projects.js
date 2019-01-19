import React from 'react'
import ProjectItem from './project-item'

const projects = [
  {
    title: 'PDFCreator',
    url: 'https://github.com/Larsg7/pdfcreator',
    description:
      'Certificate generator where user can upload LaTeX templates with placeholders.',
    tags: ['Angular 2', 'ASP.NET Core', 'GraphQL', 'Docker'],
    position: ['Fullstack Dev'],
    openSource: true,
  },
  {
    title: 'FPraktikum Frontend',
    url: 'https://github.com/PhysikOnline/fpraktikum_frontend',
    description: 'Frontend for a course registration site.',
    tags: ['Angular 2', 'Docker'],
    position: ['Frontend Dev'],
    openSource: true,
  },
  {
    title: 'Walking-robots',
    url: 'https://github.com/Larsg7/walking-robots',
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
