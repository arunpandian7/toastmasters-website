/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'KPRIET TMC',
    siteUrl: 'https://tmc.kpriet.ac.in',
    events: {
      title: 'TMC - Events',
      siteUrl: 'https://tmc.kpriet.ac.in/events',
    },
    team: {
      title: 'TMC - Team',
      siteUrl: 'https://tmc.kpriet.ac.in/team',
    },
    memberDetails: {
      title: 'TMC - Member Details',
      siteUrl: 'https://tmc.kpriet.ac.in/member-details',
    },
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sass`,
    `gatsby-remark-copy-linked-files`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1080,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options:{
        path: `${__dirname}/src`,
        name: 'images',
      },
    },
    {
      resolve:`gatsby-plugin-sitemap`,
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options:{
        color : `green`,
        showSpinner : false,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options : {
        name: 'KPRIET Toastmasters Club',
        description: 'The Offcial TMC Website',
        short_name : 'TMC',
        start_url: '/',
        background_color:'#FFFFFF',
        theme_color : '#FFFFFF',
        lang: 'en',
        display : 'standalone',
        icon: 'src/images/icon_circle.png',
        icons:[
          {
            src: '/favicons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/favicons/android-chrome-384x384.png',
            sizes: '384x384',
            type: 'image/png',
          },
          {
            src: '/favicons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ]
      },
    },

    'gatsby-plugin-offline',
  ],
}
