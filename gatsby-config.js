module.exports = {
  siteMetadata: {
    title: `Prismic Gatsby documentations`,
    description: ``,
    author: `@faresd`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    {
      resolve: 'gatsby-source-prismic-graphql',
      options: {
        repositoryName: 'prismic-gatsby-documentations',
        path: '/preview',
        previews: true,
        sharpKeys: [
          /image|photo|picture/, // (default)
          'profilepic',
        ],
      }
    }
  ],
}
