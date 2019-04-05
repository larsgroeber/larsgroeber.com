module.exports = {
  siteMetadata: {
    title: 'Lars Gröber',
    author: {
      name: 'Lars Gröber',
      pictureUrl: '/static/profile.jpg',
      authorUrl: 'https://github.com/Larsg7',
      githubUrl: 'https://github.com/Larsg7',
      linkedinUrl: 'https://www.linkedin.com/in/larsgroeber',
      twitterUrl: 'https://twitter.com/GroeberLars',
      mediumUrl: 'https://medium.com/@larsgroeber',
    },
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Lars Gröber',
        short_name: 'LGroeber',
        start_url: '/',
        background_color: '#5c6bc0',
        theme_color: '#5c6bc0',
        display: 'minimal-ui',
        icon: 'src/images/profile.jpg', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-112082276-1',
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: false,
      },
    },
  ],
}
