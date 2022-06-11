/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import ProfileImage from "../images/profile_full.jpg"
import "./layout.scss"

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className="profile-container">
        <img src={ProfileImage} alt="profile" width="500" height="500" />
      </div>
      <main>
        <div className="main-inner-wrapper">{children}</div>
        <footer>
          <Link to="/imprint">Imprint</Link>
          <Link to="/privacy">Dataprivacy</Link>
        </footer>
      </main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
