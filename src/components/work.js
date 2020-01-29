import React from 'react'
import Card from './card'
import Tag from './tag'
import { Config } from '../config'

const workItems = [
  {
    title: 'Inheaden',
    description: [
      `
    "Inheaden is your competent and professional partner in the field of IT and software development, 
    and will aid you in the process of making your digital projects a success!"
    
    `,
      `As the lead developer I work on several projects including client projects and internal systems. I am also involved in training other co-workers.`,
    ],
    time: {
      start: '01.06.2018',
      end: 'now',
    },
    link: 'https://www.inheaden.io',
    tags: ['Angular 2', 'Java Spring Boot'],
    position: ['Fullstack Developer', 'Team lead'],
  },
  {
    title: 'Smaller projects',
    description: [
      `
      As a freelancer I worked on several smaller projects for a variety of clients:
    `,
      `I build small interactive browser based learning experiences using Angular 1.`,
      `I improved an algorithm for a mobile app significantly by rewriting parts using NodeJS.`,
      `I build a small api using Express and CouchDB to create a new unique ID.`,
      `I developed a small tool using C# to compare prices on IKEA websites.`,
    ],
    time: {
      start: '01.03.2018',
      end: 'now',
    },
    link: 'https://larsgroeber.com',
    tags: ['C#', 'NodeJS', 'Express', 'Angular 1'],
    position: ['Fullstack Developer'],
  },

  {
    title: 'Coconut Capital',
    description: [
      `
      "Coconut Capital is a company specialized on financial and digital markets. We provide fully tailormade 
      IT solutions and cover any needs from consulting services up to programming, operation and maintenance."
    
    `,
      `While working there I build an app using Ionic, worked on a large Angular 2 project and developed a digital recruitment test for a client as the team leader.`,
    ],
    time: {
      start: '01.08.2017',
      end: 'now',
    },
    link: 'http://coconut.capital/',
    tags: ['Angular 2', 'NodeJS', 'ASP.NET Core'],
    position: ['Fullstack Developer', 'Team lead'],
  },
  {
    title: 'PhysikOnline',
    description: [
      `
      "PhysikOnline is an organization at the physics faculty of Goethe University. 
      The special feature of PhysikOnline is that it is purely driven by students (scientific assistants) without the direct influence of professors."
    `,
      ``,
    ],
    time: {
      start: '01.08.2015',
      end: '31.03.2019',
    },
    link: 'https://physikonline.uni-frankfurt.de/portal/',
    tags: ['Angular 2', 'NodeJS', 'PHP'],
    position: ['Fullstack Developer', 'Team lead'],
  },
]

const Work = () => {
  return (
    <>
      <h3 style={{ marginBottom: '1.5rem' }}>🔧 Work experience</h3>
      {workItems.map(item => {
        return (
          <Card key={item.title}>
            <a
              href={item.link}
              target="_blank"
              rel="noopener"
              aria-label={`Link to work item ${item.title}`}
            >
              <h4 style={{ marginTop: 0, display: 'inline-block' }}>
                {item.title}
              </h4>
            </a>
            <small style={{ float: 'right' }}>
              {item.time.start} - {item.time.end}
            </small>
            {item.description.map(d => (
              <p key={d}>{d}</p>
            ))}
            {item.tags.map(t => (
              <Tag name={t} key={t} color={Config.theme.accent} />
            ))}
            <br />
            {item.position.map(t => (
              <Tag name={t} key={t} color={Config.theme.primary} />
            ))}
          </Card>
        )
      })}
    </>
  )
}

export default Work
