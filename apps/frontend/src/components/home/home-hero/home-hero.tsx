'use client';

import { HomeSection } from 'components/home/hoc/home-section';
import React, { FC } from 'react';
import { TypeAnimation } from 'react-type-animation';
import css from './home-hero.module.scss';
import { useHomeHero } from './use-home-hero';
import { ContactsList } from 'components/core/contacts-list';

export const HomeHero: FC = () => {
  const { fullName, summary, typingSpeed, greetingSequence, jobTitleSequence } = useHomeHero();

  return (
    <HomeSection className={css.container}>
      <h2 className={css.greeting}>
        <TypeAnimation
          preRenderFirstString={true}
          sequence={greetingSequence}
          speed={typingSpeed}
          repeat={Infinity}
        />
      </h2>
      <h3 className={css.fullName}>{fullName}</h3>
      <h4 className={css.jobName}>
        <TypeAnimation
          preRenderFirstString={true}
          sequence={jobTitleSequence}
          speed={typingSpeed}
          repeat={Infinity}
        />
      </h4>
      <p className={css.summary}>{summary}</p>
      <div className={css.centered}>
        <ContactsList />
      </div>
      <div className={css.background}>
        <div className={css.backgroundRadialContainer}>
          <div className={css.backgroundRadialGradient}></div>
        </div>
      </div>
    </HomeSection>
  );
};
