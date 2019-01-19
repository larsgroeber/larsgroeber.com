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
      `As a freelancer, I work on several projects including their website and internal systems. I am also involved in training other co-workers.`,
    ],
    time: {
      start: '01.06.2018',
      end: 'now',
    },
    link: 'https://www.inheaden.com',
    tags: ['Angular 2', 'Java Spring Boot'],
    position: ['Fullstack Developer'],
  },

  {
    title: 'Coconut Capital',
    description: [
      `
      "Coconut Capital is a company specialized on financial and digital markets. We provide fully tailormade 
      IT solutions and cover any needs from consulting services up to programming, operation and maintenance."
    
    `,
      `While working there I build an app using Ionic, worked on a large Angular 2 project and developed as the team leader an digital recruitment test for a client.`,
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
            <a href={item.link} target="_blank">
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
