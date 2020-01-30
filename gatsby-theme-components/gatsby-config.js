module.exports = {
  siteMetadata: {
    title: `Gatsby Theme Utils`,
    description: ``,
    author: `@james_bruner`,
  },
  plugins: [
    'gatsby-theme-utils',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
