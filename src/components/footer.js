import React from 'react'
import { Link } from 'gatsby'

import './footer.css'

const Footer = ({ author, authorUrl }) => (
  <footer
    style={{
      bottom: 0,
      left: 0,
      right: 0,
      padding: '0.3rem',
      textAlign: 'center',
      background: '#81d4fa',
      fontSize: '1rem',
    }}
  >
    <div style={{ marginBottom: '5px' }}>
      Made with
      <span
        style={{
          color: '#e91e63',
          margin: '0 0.35rem',
          display: 'inline-block',
        }}
      >
        <i className="fas fa-heart" id="heart" />
      </span>
      by <a href={authorUrl}>{author}</a> using{' '}
      <a href="https://www.gatsbyjs.com/">Gatsby</a>
    </div>
  </footer>
)

export default Footer
