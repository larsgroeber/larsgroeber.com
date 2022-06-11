import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import "./index.scss"

import Linkedin from "../images/linkedin.svg"
import Github from "../images/github.svg"
import Twitter from "../images/twitter.svg"

const links = [
  {
    name: "Podcast with Leading Tech",
    link: "https://podcasts.apple.com/de/podcast/leading-tech-der-podcast-von-und-f%C3%BCr-ceo-cto-cdo/id1619277687?i=1000565132609",
  },
  {
    name: "Podcast with StartupFever",
    link: "https://startupfever.de/lars-groeber/",
  },
  {
    name: "Interview with Citrus Global (Youtube)",
    link: "https://www.youtube.com/watch?v=fXRVv3kRdQ0",
  },
]

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
  {
    icon: Twitter,
    name: "twitter",
    link: "https://twitter.com/GroeberLars",
  },
]

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="content">
      <h1>Lars Gröber</h1>
      <p className="subtitle">
        CTO & Co-Founder of{" "}
        <a href="https://inheaden.io" target="_blank" rel="noopener noreferrer">
          Inheaden
        </a>
      </p>
      <p className="subtitle">
        Maker of{" "}
        <a href="https://inco.video" target="_blank" rel="noopener noreferrer">
          Inheaden Connect
        </a>
      </p>

      <div className="links">
        {links.map(l => (
          <p key={l.name}>
            <a href={l.link} target="_blank" rel="noopener noreferrer">
              {l.name}
            </a>
          </p>
        ))}
      </div>

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
