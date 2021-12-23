const path = require("path");
const pathPrefix = "/notes";
// Change me
const siteMetadata = {
  title: "Artifactual Neural Network",
  shortName: "ANN",
  description:
    "",
  // twitterName: "theowenyoung",
  // imageUrl: "/graph-visualisation.jpg",
  siteUrl: "https://dfeng.github.io/notes/",
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
        icon: "./static/logo.webp",
        mdxOtherwiseConfigured: true,
        sidebarComponents: ["latest", "tag"],
        // remarkPlugins: [require("remark-math")],
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
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".md"],
        remarkPlugins: [
          require("remark-inline-links"),
          require("remark-unwrap-images"),
          require("remark-math")
        ],
        rehypePlugins: [[require("rehype-mathjax/chtml"), {fontURL: "https://cdn.jsdelivr.net/npm/mathjax@3/es5/output/chtml/fonts/woff-v2"}]],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-rewrite-link-for-trailing-slash",
            options: {
              fileIgnore: [],
              rewriteToParentUrlFileIgnore: [],
            },
          },

          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              icon: false,
            },
          },
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              include: ["image"],
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 561,
              showCaptions: ["title", "alt"],
            },
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              ignoreFileExtensions: [".md"]
                .map((item) => item.slice(1))
                .concat([
                  `.png`,
                  `.jpg`,
                  `.jpeg`,
                  `.bmp`,
                  `.tiff`,
                  ".svg",
                  ".gif",
                ]),
            },
          },
        ],
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
        icon: path.resolve(__dirname, "./static/logo.webp"),
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
