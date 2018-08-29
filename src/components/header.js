import React from 'react'
import { Link } from 'gatsby'
import { Config } from '../config'

import './header.css'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: Config.theme.primary,
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
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
