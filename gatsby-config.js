module.exports = {
  siteMetadata: {
    siteUrl: "https://www.cryptodappy.com",
    title: "CryptoDappy Learning Hub",
    menuLinks: [
      {
        name: 'Overview',
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
        name: 'Resources',
        link: '/resources'
      },
      {
        name: 'FAQ',
        link: '/faq'
      },
      {
        name: 'Community',
        link: 'https://forum.onflow.org/'
      }
      ,
      {
        name: 'Demo App',
        link: 'https://ds5644cbkdnqk.cloudfront.net/'
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
  ],
};
