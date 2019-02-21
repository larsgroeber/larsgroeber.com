import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'
import Footer from './footer'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            author {
              authorUrl
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content:
                'Personal website of Lars Gröber, independent fullstack software developer',
            },
            { name: 'keywords', content: 'developer, larsgroeber, physics' },
            {
              name: 'google-site-verification',
              content: 'k5FyLGattOf3fzpCLttJ5Tf5P6ZQjJSp_9-btYKIouY',
            },
          ]}
          link={[
            {
              href: 'https://use.fontawesome.com/releases/v5.2.0/css/all.css',
              rel: 'stylesheet',
              integrity:
                'sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ',
              crossorigin: 'anonymous',
            },
          ]}
          script={[{}]}
        >
          <html lang="en" />
          <script
            src="https://cdn.logrocket.io/LogRocket.min.js"
            crossorigin="anonymous"
          />
          <script>
            window.LogRocket && window.LogRocket.init('dy8wwz/website');
          </script>
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: '0 auto',
            marginBottom: '10px',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children}
        </div>
        <Footer
          author="Lars Gröber"
          authorUrl={data.site.siteMetadata.author.authorUrl}
        />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
