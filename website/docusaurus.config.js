const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const config = {
  title: 'David Sanchez',
  tagline: 'Personal Website under construction.',
  url: 'https://dsamsft.net',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'dsamsft',
  projectName: 'website',

  presets: [
    [
      'classic',
      ({        
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    ({
      navbar: {
        title: 'Home',
        logo: {
          alt: 'David Sanchez Personal Website',
          src: 'img/logo.png',
        },
        items: [
          /**{to: '/blog', label: 'Blog', position: 'left'},
          {to: '/projects', label: 'Projects', position: 'left'},
          {to: '/Volunteering', label: 'Volunteering', position: 'left'},
          {to: '/Speaking', label: 'Speaking', position: 'left'},
          {to: '/Contact', label: 'Contact', position: 'left'},
          {to: '/About', label: 'About', position: 'left'},*/
          {
            to: 'https://tiktok.com/@dsamsft',
            label: 'TikTok',
            position: 'right',
          },
          {
            to: 'https://instagram.com/dsamsft',
            label: 'Instagram',
            position: 'right',
          },
          {
            to: 'https://fb.com/dsamsft',
            label: 'Facebook',
            position: 'right',
          },
          {
            to: 'https://twitter.com/dsamsft',
            label: 'Twitter',
            position: 'right',
          },
          {
            to: 'https://linkedin.com/in/dsamsft',
            label: 'LinkedIn',
            position: 'right',
          },
          {
            to: 'https://github.com/dsamsft',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',        
        copyright: `Copyright © ${new Date().getFullYear()} David Sanchez. Built with Docusaurus. Running on Azure Static Web Sites.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;