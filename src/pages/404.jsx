import React from 'react'

import P from 'gatsby-theme-components/src/components/Paragraph'
import Layout from 'gatsby-theme-components/src/components/Layout'
import SEO from 'gatsby-theme-components/src/components/SEO'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <P>You just hit a route that doesn&#39;t exist... the sadness.</P>
  </Layout>
)

export default NotFoundPage
