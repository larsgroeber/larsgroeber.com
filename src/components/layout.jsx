/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import ProfileImage from "../images/profile_full.jpg"
import "./layout.scss"

const Layout = ({ children }) => {
  const [showBanner, setShowBanner] = useState(true)

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
      {showBanner && (
        <div className="banner">
          <div>
            <p>
              I am not storing any data about you or your visit of my website.
              Also no fonts or external scripts are loaded or cookies saved (
              <a
                href="https://github.com/larsgroeber/larsgroeber.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                check out the source
              </a>
              ).
            </p>
            <p>
              My hoster might store your IP address and/or other information
              about you (
              <a
                href="https://www.netlify.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                see their policy
              </a>
              ).
            </p>
          </div>
          <div>
            <button onClick={() => setShowBanner(false)}>Got it</button>
          </div>
        </div>
      )}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
