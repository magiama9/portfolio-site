module.exports = {
  siteMetadata: {
    title: 'Sam Randels Portfolio',
    name: `Portfolio`,
    siteUrl: `https://samrandels.io`,
    description: `Sam Randels is a full stack developer working to build the modern web.`,
    hero: {
      heading: `Hi, I'm Sam. I'm a full stack developer working to build the modern web.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `github`,
        url: `https://github.com/magiama9`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/sam-randels`,
      }
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sam Randels Portfolio`,
        short_name: `SRPortfolio`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon-32x32.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
