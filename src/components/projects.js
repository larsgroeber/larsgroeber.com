import React from 'react'
import ProjectItem from './project-item'

const projects = [
  {
    title: 'PDFCreator',
    url: 'https://github.com/Larsg7/pdfcreator',
    description:
      'Certificate generator where user can upload LaTeX templates with placeholders.',
    tags: ['Angular 2', 'ASP.NET Core', 'GraphQL', 'Docker'],
    openSource: true,
  },
  {
    title: 'FPraktikum Frontend',
    url: 'https://github.com/PhysikOnline/fpraktikum_frontend',
    description: 'Frontend for a course registration site.',
    tags: ['Angular 2', 'Docker'],
    openSource: true,
  },
  {
    title: 'Digitaler Einstellungstest',
    description:
      'Software product which automates the initial hiring process. The applicant goes through predefined online tests on a tablet.',
    tags: ['Angular 2', 'ASP.NET Core', 'MSSQL', 'Azure'],
    openSource: false,
  },
].map(p => {
  p.key = p.title
  return p
})

const Projects = () => (
  <>
    <h3>💯 Projects</h3>
    {projects.map(p => (
      <div style={{ marginBottom: '1rem' }}>
        <ProjectItem item={p} />
      </div>
    ))}
  </>
)

export default Projects
