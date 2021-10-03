module.exports = {
  siteMetadata: {
    siteUrl: "https://www.cryptodappy.com",
    title: "CryptoDappy Learning Hub",
    menuLinks: [
      {
        name: "What's CryptoDappy?",
        link: '/overview'
      },
      {
        name: 'Onboarding',
        link: '/missions/mission-0'
      },
      {
        name: 'Mission #1',
        link: '/missions/mission-1'
      },
      {
        name: 'Mission #2',
        link: '/missions/mission-2'
      },
      {
        name: 'Mission #3',
        link: '/missions/mission-3'
      },
      {
        name: 'Mission #4',
        link: '/missions/mission-4'
      },
      {
        name: 'Mission #5',
        link: '/missions/mission-5'
      },
      {
        name: 'Mission #6',
        link: '/missions/mission-6'
      },
      {
        name: 'Resources',
        link: '/resources'
      },
      {
        name: 'Community',
        link: 'https://forum.onflow.org/c/community-projects/cryptodappy/35'
      }
      ,
      {
        name: 'Demo App',
        link: 'https://demo.cryptodappy.com'
      },
    ]
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `missions`,
        path: `${__dirname}/src/missions`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/config/translations`,
        name: `translations`,
      },
    },    
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'CryptoDappy Learning Hub',
        short_name: 'CryptoDappy',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#a2466c',
        display: 'standalone',
        icon: 'src/images/icon.png',
      }
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "crypto-dappy-learning-hub",
      },
    },
    "gatsby-plugin-mdx",
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-43X0VSTBPJ"
        ],
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: 'G-43X0VSTBPJ',
        },
        environments: ['production']
      },
    },
    `gatsby-transformer-json`,
  ],
};