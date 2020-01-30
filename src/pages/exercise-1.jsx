import React from 'react'
import { Link } from 'gatsby'

import Heading from 'gatsby-theme-components/src/components/Heading'
import Layout from '../components/layout'

const Excercise1 = () => (
  <Layout>
    <Heading>Exercise 1</Heading>

    <p>
      Go ahead and shadow the heading component to be an <code>h2</code> and remove <code>- Shadow me</code>
    </p>
    <p>
      Part 2: Shadow the styles in <code>gatsby-theme-styles</code>
    </p>

    <p>
      Once you&apos;re done with that, head on to the{' '}
      <Link to="/exercise-2">next example</Link>
    </p>
  </Layout>
)

export default Excercise1
