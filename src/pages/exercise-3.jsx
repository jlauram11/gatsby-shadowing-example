import React from 'react'

import Heading from 'gatsby-theme-components/src/components/Heading'
import P from 'gatsby-theme-components/src/components/Paragraph'
import Link from 'gatsby-theme-components/src/components/Link'
import Math from 'gatsby-theme-components/src/components/Math'
import Layout from '../components/layout'

const Excercise3 = () => (
  <Layout>
    <Heading>Exercise 3</Heading>

    <P>
      Shadow the <code>Math</code> component and fix the equation
    </P>

    <Math />

    <Link style={{ display: 'block', marginTop: '30px' }} to="/">
      Back to Home
    </Link>
  </Layout>
)

export default Excercise3
