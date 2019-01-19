import React from 'react'

import Layout from '../components/layout'
import Profile from '../components/profile'
import { Config } from '../config'
import Divider from '../components/divider'
import AboutMe from '../components/about-me'
import Projects from '../components/projects'
import Work from '../components/work'
const IndexPage = () => (
  <Layout>
    <Profile />
    <Divider />
    <AboutMe />
    <Divider />
    <Work />
    <Divider />
    <Projects />
  </Layout>
)

export default IndexPage
