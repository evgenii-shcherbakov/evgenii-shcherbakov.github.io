'use client';

import { HomeSection } from 'components/home/hoc/home-section';
import { FC, useContext } from 'react';
import { Code } from '@nextui-org/react';
import { IdentityContext } from 'components/core/providers/identity';
import css from './home-looking.module.scss';

export const HomeLooking: FC = () => {
  const { jobTitles } = useContext(IdentityContext);

  return (
    <HomeSection className={css.container}>
      <h2>I&apos;m currently looking for Jobs.</h2>
      <Code size="lg" className={css.code}>
        <pre>
          <p className={css.codeFunc}>jobs &#123;</p>
          {jobTitles.map((jobTitle, index) => (
            <p key={jobTitle} className={css.codeVariable}>
              {'    ' + jobTitle}
            </p>
          ))}
          <p className={css.codeFunc}>&#125;</p>
        </pre>
      </Code>
      <p className={css.summary}>
        I am particularly interested in product based positions where I can help make an
        organization wide impact.
      </p>
    </HomeSection>
  );
};
