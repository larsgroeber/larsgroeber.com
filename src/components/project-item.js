import React from 'react'
import { Config } from '../config'
import Card from './card'
import Tag from './tag'

const ProjectItem = ({ item }) => {
  let github = item.openSource ? (
    <a
      href={item.github}
      target="_black"
      rel="noopener"
      aria-label={`Github link for project ${item.title}`}
    >
      <i
        style={{ float: 'right', fontSize: '1.5rem', color: 'black' }}
        className="fab fa-github"
      />
    </a>
  ) : null
  return (
    <Card>
      {github}
      <a href={item.url}>
        <h4 style={{ marginTop: 0 }}>{item.title}</h4>
      </a>
      <p>{item.description}</p>
      {item.tags.map(t => (
        <Tag name={t} key={t} color={Config.theme.accent} />
      ))}
    </Card>
  )
}

export default ProjectItem
