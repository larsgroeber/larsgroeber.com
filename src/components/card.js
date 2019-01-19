import React from 'react'
import { Config } from '../config'

const Card = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: 'white',
        padding: '10px',
        boxShadow: '1px 1px 10px 1px #aaa',
        borderRadius: '10px',
        marginBottom: '1rem',
      }}
    >
      {children}
    </div>
  )
}

export default Card
