import React from 'react'
import { Link } from 'gatsby'

import './footer.css'
import { Config } from '../config'

const Footer = ({ author, authorUrl }) => (
  <footer
    style={{
      bottom: 0,
      left: 0,
      right: 0,
      padding: '0.5rem',
      textAlign: 'center',
      background: Config.theme.primary,
      fontSize: '1rem',
      color: 'white',
    }}
  >
    <div>
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
      by{' '}
      <a href={authorUrl} aria-label="Author url">
        {author}
      </a>{' '}
      using <a href="https://www.gatsbyjs.com/">Gatsby</a>
    </div>
    <div>
      <Link to="/about/" aria-label="Legal notice">
        Legal Notice
      </Link>{' '}
      |{' '}
      <Link to="/policy/" aria-label="Privacy statement">
        Privacy statement
      </Link>
    </div>
  </footer>
)

export default Footer
