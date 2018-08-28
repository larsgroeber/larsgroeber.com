import React from 'react'
import { Config } from '../config'

const ProjectItem = ({ item }) => {
  let github = item.openSource ? (
    <i
      style={{ float: 'right', fontSize: '1.5rem' }}
      className="fab fa-github"
    />
  ) : null
  return (
    <div
      style={{
        backgroundColor: 'white',
        padding: '10px',
        boxShadow: '1px 1px 10px 1px #aaa',
        borderRadius: '10px',
      }}
    >
      {github}
      <a href={item.url}>
        <h4 style={{ marginTop: 0 }}>{item.title}</h4>
      </a>
      <p>{item.description}</p>
      {item.tags.map(t => (
        <span
          style={{
            padding: '0 5px',
            backgroundColor: Config.theme.accent,
            color: 'white',
            margin: '0 0.2rem 0.2rem 0',
            borderRadius: '5px',
            display: 'inline-block',
          }}
        >
          {t}
        </span>
      ))}
    </div>
  )
}

export default ProjectItem
