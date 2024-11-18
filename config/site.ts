export type SiteConfig = typeof siteConfig

/**
 * Configuration object for the AlgoVisualizer site.
 * 
 * @property {string} name - The name of the site.
 * @property {string} description - A brief description of the site.
 * @property {Array<{title: string, href: string}>} mainNav - The main navigation links for the site.
 */
export const siteConfig = {
  name: "AlgoVisualizer",
  description:
    "AlgoVisualizer is a tool with beautifully designed components built with NextJs and Tailwind CSS to help visualize various algorithms.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
  ],
}
