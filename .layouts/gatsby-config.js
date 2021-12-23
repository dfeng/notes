const path = require("path");
const pathPrefix = "/notes";
// Change me
const siteMetadata = {
  title: "Artefactual Neural Network",
  shortName: "ANN",
  description:
    "",
  // twitterName: "theowenyoung",
  // imageUrl: "/graph-visualisation.jpg",
  siteUrl: "http://dfeng.github.io/notes/",
};
module.exports = {
  siteMetadata,
  pathPrefix,
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    {
      resolve: "gatsby-theme-primer-wiki",
      // Change me
      options: {
        icon: "./static/logo.jpg",
        sidebarComponents: ["latest", "tag"],
        // nav: [
        //   {
        //     title: "Github",
        //     url: "https://github.com/theowenyoung/foam-template-gatsby-theme-primer-wiki/",
        //   },
        //   {
        //     title: "Twitter",
        //     url: "https://twitter.com/theowenyoung",
        //   },
        // ],
        editUrl:
          "https://github.com/dfeng/notes/tree/main/",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/..`,
        ignore: [`**/\.*/**/*`],
      },
    },

    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: siteMetadata.title,
        short_name: siteMetadata.shortName,
        start_url: pathPrefix,
        background_color: `#f7f0eb`,
        display: `standalone`,
        icon: path.resolve(__dirname, "./static/logo.jpg"),
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: siteMetadata.siteUrl,
        sitemap: `${siteMetadata.siteUrl}/sitemap/sitemap-index.xml`,
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [],
      },
    },
  ],
};
