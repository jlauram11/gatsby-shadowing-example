import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

// import Heading from "gatsby-theme-components/src/components/Heading"
// import Mural from "gatsby-theme-components/src/components/Mural"
// import Math from "gatsby-theme-components/src/utils/Math"

const IndexPage = () => (
  <Layout>
    <p>
      In this repository there are three <code>gatsby-themes</code> and three
      exercises for you to try your hand at shadowing components, images and
      even components in child themes.
    </p>

    <p>
      The goal is to not edit any files in <code>gatsby-theme-components</code>,
      <code>gatsby-theme-utils</code> or <code>gatsby-theme-styles</code>
    </p>

    <Link to="/exercise-1/">Get started</Link>
  </Layout>
)

export default IndexPage
