import React from 'react'

const Tag = ({ name, color }) => {
  return (
    <span
      key={name}
      style={{
        padding: '0 5px',
        backgroundColor: color,
        color: 'white',
        margin: '0 0.2rem 0.2rem 0',
        borderRadius: '5px',
        display: 'inline-block',
        fontSize: '0.8rem',
      }}
    >
      {name}
    </span>
  )
}

export default Tag
