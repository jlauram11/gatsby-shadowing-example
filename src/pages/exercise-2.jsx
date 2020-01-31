import React from 'react'

import Heading from 'gatsby-theme-components/src/components/Heading'
import P from 'gatsby-theme-components/src/components/Paragraph'
import Link from 'gatsby-theme-components/src/components/Link'
import Image from 'gatsby-theme-components/src/components/Image'
import Layout from 'gatsby-theme-components/src/components/Layout'

const Excercise2 = () => (
  <Layout>
    <Heading>Exercise 2</Heading>

    <P>Ahhh! A wildly offensive Mural!</P>
    <P>
      Quickly shadow
      <code>gatsby-theme-components</code> and replace it with the image called{' '}
      <code>wall.jpg</code> in <code>./src/images/</code>
    </P>

    <Image />

    <P>
      Once you&apos;re done with that, you can move on to the last exercise.
      <Link to="/exercise-3">Next Exercise</Link>
    </P>
  </Layout>
)

export default Excercise2
