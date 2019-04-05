import React from 'react'
import { Link } from 'gatsby'
import { Config } from '../config'

import './header.css'

const Header = ({ siteTitle, author }) => (
  <div
    style={{
      background: Config.theme.primary,
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
    }}
  >
    <div
      style={{
        padding: '0.6rem 1.0875rem',
      }}
    >
      <h1
        style={{
          margin: 0,
          fontSize: '1.5rem',
          display: 'inline-block',
          border: 'none',
        }}
        id="brand"
      >
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <div
      style={{
        flex: '1',
      }}
    />
    <div>
      <a
        href={author.linkedinUrl}
        className="headerIcon"
        target="_blank"
        id="linkedin-icon"
      >
        <i className="fab fa-linkedin" />
      </a>
      <a
        href={author.githubUrl}
        className="headerIcon"
        target="_blank"
        id="github-icon"
      >
        <i className="fab fa-github" />
      </a>
      <a
        href={author.mediumUrl}
        className="headerIcon"
        target="_blank"
        id="medium-icon"
      >
        <i className="fab fa-medium" />
      </a>
      <a
        href={author.twitterUrl}
        className="headerIcon"
        target="_blank"
        id="twitter-icon"
      >
        <i className="fab fa-twitter" />
      </a>
    </div>
  </div>
)

export default Header
