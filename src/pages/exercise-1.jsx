import React from 'react'
import Heading from 'gatsby-theme-components/src/components/Heading'
import P from 'gatsby-theme-components/src/components/Paragraph'
import Link from 'gatsby-theme-components/src/components/Link'
import Layout from 'gatsby-theme-components/src/components/Layout'

const Excercise1 = () => (
  <Layout>
    <Heading>Exercise 1</Heading>

    <P>
      Go ahead and shadow the heading component and remove &quot;
      <code>- Shadow me</code>&quot;
    </P>
    <P>
      Part 2: Shadow the styles in <code>gatsby-theme-styles</code>
      change the fonts to your liking in the heading and paragraph components.
    </P>
    <P>
      hint: install the font <code>yarn add typeface-open-sans</code> and
      require the font in the styled component
    </P>
    <P style={{ marginTop: '20px' }}>
      Bonus: Shadow the <code>Link</code> component and style it as a button.
    </P>

    <P>
      Once you&apos;re done with that, feel free to move on.
      <Link to="/exercise-2">Next Exercise</Link>
    </P>
  </Layout>
)

export default Excercise1
