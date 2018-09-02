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
  ],
}
