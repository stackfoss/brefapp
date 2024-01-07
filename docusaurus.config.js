// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

const config = {
  title: 'Brefapp',
  tagline: 'Big Ideas Summarized For You',
  favicon: 'img/favicon.ico',
  url: 'https://brefapp.com',
  baseUrl: '/',
  organizationName: 'stackfoss',
  projectName: 'brefapp',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: [
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/docusaurus.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(37, 194, 160)',
          },
        ],
      },
    ],
    [
      '@docusaurus/plugin-google-tag-manager',
      {
        containerId: 'GTM-53DL4FDC',
      },
    ],
[
  "@gracefullight/docusaurus-plugin-google-adsense",
  { adClient: "ca-pub-5854603559905812", enableAutoAd: true },
],
  ],
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/stackfoss/brefapp/blob/main/docs/',
        },
        blog: {
          showReadingTime: true,
          blogTitle: 'Book Summaries Central Blog',
          blogDescription: 'Explore insightful book summaries in psychology, philosophy, sociology, and more.',
          editUrl: 'https://github.com/stackfoss/brefapp/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],
  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Brefapp',
      logo: {
        alt: 'Brefapp',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Summaries',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        { to: '/quotes', label: 'Quotes', position: 'left' },
        { to: '/reviews', label: 'Reviews', position: 'left' },
        { to: '/booklist', label: 'Awesome List', position: 'left' },
        {
          href: 'https://github.com/stackfoss/brefapp',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Book Summaries',
          items: [
            {
              label: 'Summaries',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Youtube',
              href: 'https://www.youtube.com/@brefapp',
            },
            {
              label: 'Github',
              href: 'https://github.com/stackfoss/brefapp',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/brefapp1',
            },
          ],
        },
        {
          title: 'Quick Links',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'Donate',
              href: 'https://www.buymeacoffee.com/stackfoss',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Brefapp. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    metadata: [
      { name: 'description', content: 'Explore book summaries and enhance your knowledge.' }, 
      { name: 'keywords', content: 'book summaries, literature summaries, best book summaries, non-fiction summaries, fiction summaries, self-help summaries, business book summaries, philosophy book summaries, psychology book summaries, science book summaries, history book summaries, technology book summaries, education book summaries, personal development summaries, key takeaways, insightful summaries, recommended books, must-read book summaries, reading guides, intellectual growth, literary analysis, classic literature summaries, contemporary literature summaries,top book sumamries, literary reviews, literature recommendations, curated book summaries' },
      { name: 'og:title', content: 'Brefapp - Big Ideas Summarized For You' },
      { name: 'og:description', content: 'Explore book summaries and enhance your knowledge.' },
      { name: 'og:image', content: 'img/docusaurus-social-card.jpg' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Brefapp - Big Ideas Summarized For You' },
      { name: 'twitter:description', content: 'Explore book summaries and enhance your knowledge.' },
      { name: 'twitter:image', content: 'img/docusaurus-social-card.jpg' },
    ],
  },
};

export default config;

