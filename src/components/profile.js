import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Config } from '../config'

import './profile.css'

const Profile = () => (
  <StaticQuery
    query={graphql`
      query SiteAuthorQuery {
        site {
          siteMetadata {
            author {
              name
              pictureUrl
            }
          }
        }
      }
    `}
    render={data => {
      const size = '200px'
      const pictureUrl = data.site.siteMetadata.author.pictureUrl
      const name = data.site.siteMetadata.author.name
      return (
        <div style={{ textAlign: 'center' }}>
          <img
            style={{
              width: size,
              height: size,
              borderRadius: size,
              margin: '2rem 0',
            }}
            src={pictureUrl}
            alt={name}
          />
          <div>
            <h2
              style={{
                margin: 0,
                display: 'inline-block',
                borderBottom: `solid 4px ${Config.theme.primary}`,
              }}
            >
              {name}
            </h2>
          </div>
          <div className="keywords">
            <span> Independent Fullstack Developer</span>
            <span>⚡️ Javascript Hacker ⚡️</span>
            <span>🌟 OSS Fan 🌟</span>
          </div>
        </div>
      )
    }}
  />
)

export default Profile
