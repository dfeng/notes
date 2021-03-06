const path = require("path");
const pathPrefix = "/";
// Change me
const siteMetadata = {
  title: "Deep, Mind?",
  shortName: "DM",
  description:
    "",
  // twitterName: "theowenyoung",
  // imageUrl: "/graph-visualisation.jpg",
  siteUrl: "https://deepmind.vercel.app/",
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
        // mdxOtherwiseConfigured: true,
        sidebarComponents: ["latest", "tag"],
        imageMaxWidth: 600,
        defaultColorMode: "day",
        contentMaxWidth: 1200,
        remarkPlugins: [
          require("remark-math"),
          [require("remark-footnotes"), { inlineNotes: true}],
          [require("@supremum/remark-bibtex"), { bibtexFile: "../bib.bib"}]
        ],
        rehypePlugins: [require("rehype-katex")],
        gatsbyRemarkPlugins: [
        {
          resolve: "gatsby-remark-mermaid",
          options: {
            viewport: {width: 600, height: 300},
            theme: "neutral",
            mermaidOptions: {
              themeVariables: {
                lineColor: "#888"
              },
              themeCSS: ".arrowheadPath {fill: #888 !important;}"
            }
          }
        }],
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
  ],
};
