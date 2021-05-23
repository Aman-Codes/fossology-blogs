/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'FOSSology Blogs',
  tagline: 'An open source license compliance software system and toolkit',
  url: 'https://aman-codes.github.io/blogs',
  baseUrl: '/fossology-blogs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Aman-Codes', // Usually your GitHub org/user name.
  projectName: 'fossology-blogs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'FOSSology',
      logo: {
        alt: 'FOSSology Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Documentation',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/Aman-Codes/fossology-blogs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Documentation',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Slack',
              href: 'https://join.slack.com/t/fossology/shared_invite/enQtNzI0OTEzMTk0MjYzLTYyZWQxNDc0N2JiZGU2YmI3YmI1NjE4NDVjOGYxMTVjNGY3Y2MzZmM1OGZmMWI5NTRjMzJlNjExZGU2N2I5NGY',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/channel/UCZGPJnQZVnEPQWxOuNamLpw',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Aman-Codes/fossology-blogs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} FOSSology. All Rights Reserved.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/Aman-Codes/fossology-blogs/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/Aman-Codes/fossology-blogs/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
