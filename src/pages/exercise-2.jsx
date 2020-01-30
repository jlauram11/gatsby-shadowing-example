import React from 'react'
import { Link } from 'gatsby'

import Heading from 'gatsby-theme-components/src/components/Heading'
import Image from 'gatsby-theme-components/src/components/Image'
import Layout from '../components/layout'

const Excercise2 = () => (
  <Layout>
    <Heading>Exercise 2</Heading>

    <h3>Ahhh! A wildly offensive Mural!</h3>
    <p>
      Quickly shadow
      <code>gatsby-theme-components</code> and replace it with the image called{' '}
      <code>wall.jpg</code> in <code>./src/images/</code>
    </p>

    <Image />

    <p>

      Once you&apos;re done with that, head on to the{' '}

      <Link to="/exercise-3">next example</Link>
    </p>
  </Layout>
)

export default Excercise2
