module.exports = {
  siteMetadata: {
    title: 'Lars Gröber',
    author: {
      name: 'Lars Gröber',
      pictureUrl: '/static/profile.jpg',
      authorUrl: 'https://github.com/Larsg7',
    },
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#4fc3f7',
        theme_color: '#4fc3f7',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
  ],
}
