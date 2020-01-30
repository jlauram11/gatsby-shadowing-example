import React from 'react'
import { Link } from 'gatsby'

import Heading from 'gatsby-theme-components/src/components/Heading'
import Layout from '../components/layout'
import Math from 'gatsby-theme-components/src/components/Math'

const Excercise3 = () => (
  <Layout>
    <Heading>Exercise 3</Heading>

    <p>The Math component is</p>

    <p>Shadow the <code>Math</code> component to fix the equation.</p>

    <Math />

    <br />
    <Link to="/">Back to Home</Link>
  </Layout>
)

export default Excercise3
