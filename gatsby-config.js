/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata:{
    title:"Murmurs of Monologues",
    description:"A blog on culture, technology and topics I fancy.",
    author:"Danni Jiang"
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto\:400,500,700`,
          `Open Sans\:400,600,700`
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // Footnotes mode (default: true)
        footnotes: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
    {
        resolve: 'gatsby-plugin-mailchimp',
        options: {
            endpoint: 'https://hotmail.us1.list-manage.com/subscribe/post?u=ce0af335cc3e31349fac52f6a&amp;id=11cda25583', 
            timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
        },
    },
    {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `blogs`,
      path: `${__dirname}/src/blogs/`,
    }
    },
    {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `poems`,
      path: `${__dirname}/src/poems/`,
    }},
    // {
    // resolve: `gatsby-source-filesystem`,
    // options: {
    //   name: `images`,
    //   path: `${__dirname}/src/images/`,
    // },
  // },
      ],
}
