import React from 'react'
import { Link } from 'gatsby'
import { Config } from '../config'

import './header.css'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: Config.theme.primary,
      marginBottom: '1.45rem',
      display: 'flex',
      alignItems: 'start',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        padding: '0.6rem 1.0875rem',
        flex: '1',
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
          <span id="header-icon">
            <i className="fas fa-bolt">️</i>
          </span>
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
