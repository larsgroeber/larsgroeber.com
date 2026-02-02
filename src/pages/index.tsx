import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import "./index.scss"

import Linkedin from "../images/linkedin.svg"
import Github from "../images/github.svg"
import Twitter from "../images/twitter.svg"

const links: { name: string; link: string }[] = []

const social = [
  {
    icon: Linkedin,
    name: "Linkedin",
    link: "https://www.linkedin.com/in/larsgroeber",
  },
  {
    icon: Github,
    name: "github",
    link: "https://github.com/larsgroeber",
  },
]

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="content">
      <h1>Lars Gröber</h1>
      <p className="subtitle">
        Engineering Leadership
        <br />
        Backend & Platform Architecture
        <br />
        Team & Org Building
      </p>
      <p className="subtitle">
        CTO & Co-Founder of{" "}
        <a href="https://inheaden.io" target="_blank" rel="noopener noreferrer">
          Inheaden
        </a>
      </p>

      {links.length ? (
        <div className="links">
          {links.map(l => (
            <p key={l.name}>
              <a href={l.link} target="_blank" rel="noopener noreferrer">
                {l.name}
              </a>
            </p>
          ))}
        </div>
      ) : null}

      <div
        className="social-media"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${social.length}, 40px)`,
        }}
      >
        {social.map(s => (
          <a
            key={s.name}
            href={s.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={s.icon} alt={s.name} />
          </a>
        ))}
      </div>
    </div>
  </Layout>
)

export default IndexPage
