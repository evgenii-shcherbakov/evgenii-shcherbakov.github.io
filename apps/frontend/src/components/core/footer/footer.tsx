'use client';

import { Divider, Link } from '@nextui-org/react';
import { ContactsList } from 'components/core/contacts-list';
import { useFooter } from 'components/core/footer/use-footer';
import { FC } from 'react';
import css from './footer.module.scss';

// import content from '../../content/section/footer.json';
// import settings from '../../content/_settings.json';

// const content = {
//   Websites: [
//     {
//       person: 'muhammadfiaz.com',
//       link: 'https://muhammadfiaz.com/',
//       note: '',
//     },
//     {
//       person: 'articles.muhammadfiaz.com',
//       link: 'https://articles.muhammadfiaz.com/',
//       note: '',
//     },
//   ],
//   links: [
//     {
//       person: 'Home',
//       link: 'https://muhammadfiaz.com/',
//       note: '',
//     },
//     {
//       person: 'Documentations',
//       link: 'https://muhammadfiaz.com/docs',
//       note: '',
//     },
//     {
//       person: 'Articles',
//       link: 'https://muhammadfiaz.com/articles',
//       note: '',
//     },
//     {
//       person: 'Projects',
//       link: 'https://muhammadfiaz.com/projects',
//       note: '',
//     },
//     {
//       person: 'Contact',
//       link: 'mailto:contact@muhammadfiaz.com',
//       note: '',
//     },
//   ],
//   social: [
//     {
//       url: 'https://medium.com/@muhammad-fiaz',
//       icon: 'medium',
//     },
//     {
//       url: 'https://dev.to/muhammadfiaz',
//       icon: 'dev',
//     },
//     {
//       url: 'https://www.linkedin.com/in/muhammad-fiaz-/',
//       icon: 'linkedin',
//     },
//     {
//       url: 'https://github.com/muhammad-fiaz',
//       icon: 'github',
//     },
//   ],
// };

// const settings = {
//   name: 'Muhammad Fiaz',
//   logo: '',
//   splashscreen: true,
//   autoupdatecheck: true,
//   version: '1.0.6',
//   username: {
//     github: 'muhammad-fiaz',
//     medium: '@muhammad-fiaz',
//     dev: 'muhammadfiaz',
//   },
//   repository: {
//     owner: 'muhammad-fiaz',
//     name: 'portfolio',
//     repoName: 'portfolio',
//   },
//   portfolio: {
//     fork_this: 'Open-Source project 🥰',
//     repo_html: 'https://github.com/muhammad-fiaz/portfolio.git',
//     repo_api: 'https://api.github.com/repos/muhammad-fiaz/portfolio',
//   },
// };

// interface GitHubInfo {
//   stars: number | null;
//   forks: number | null;
// }

export const Footer: FC = () => {
  const { brand, navItems, isShowNav, year } = useFooter();

  return (
    <footer className={css.container}>
      <div className={css.content}>
        <Divider />
        <h5 className={css.brand}>{brand}</h5>
        {isShowNav && (
          <nav className={css.nav}>
            {navItems.map((navItem) => (
              <Link
                key={navItem.link}
                href={navItem.link}
                className={css.navItem}
                color={navItem.isActive ? 'primary' : 'foreground'}
              >
                {navItem.title}
              </Link>
            ))}
          </nav>
        )}
        <ContactsList />
        <p>© {year} copyright. All rights reserved.</p>
      </div>
    </footer>
  );
};
