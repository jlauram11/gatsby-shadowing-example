import React from 'react'
import Link from 'gatsby-theme-components/src/components/Link'
import P from 'gatsby-theme-components/src/components/Paragraph'
import Layout from 'gatsby-theme-components/src/components/Layout'

const IndexPage = () => (
  <Layout>
    <P>
      In this repository there are three <code>gatsby-themes</code> and three
      exercises for you to try your hand at shadowing components, images and
      even components in child themes.
    </P>

    <P>
      The goal is to not edit any files directly in{' '}
      <code>gatsby-theme-components</code>, <code>gatsby-theme-utils</code> or{' '}
      <code>gatsby-theme-styles</code>
      <Link to="/exercise-1/">Get started</Link>
    </P>
  </Layout>
)

export default IndexPage
