'use client';

import { Card, CardBody, CardHeader, Image } from '@nextui-org/react';
import { HomeSection } from 'components/home/hoc/home-section';
import { FC } from 'react';
import css from './home-about.module.scss';
import { IoPeople, IoCodeSlash } from 'react-icons/io5';
import { GiMaterialsScience } from 'react-icons/gi';

export const HomeAbout: FC = () => {
  return (
    <HomeSection className={css.container}>
      <h2 className={css.header}>About me</h2>
      <div className={css.column}>
        {/*<Image*/}
        {/*  isBlurred*/}
        {/*  width={100}*/}
        {/*  src="/photo.webp"*/}
        {/*  alt="my photo"*/}
        {/*  className={css.homeAbout__image}*/}
        {/*/>*/}
        <Card className={css.card}>
          <CardHeader className={css.cardHeader}>
            <div className={css.cardIconBackground}>
              <IoPeople className={css.cardIcon} />
            </div>
            <h3>Soft skills</h3>
          </CardHeader>
          <CardBody>
            With a solid background in design and technical expertise, I am a skilled developer who
            excels in delivering high-quality solutions. Alongside my proficiency in coding, I
            possess strong leadership, time management, and multitasking skills, which I have honed
            through managing complex development projects. As a dedicated individual, I constantly
            seek opportunities to expand my knowledge and stay updated with the latest industry
            trends. With a passion for creating innovative and efficient applications, I am
            committed to bringing value and success to every development endeavor.
          </CardBody>
        </Card>
        <Card className={css.card}>
          <CardHeader className={css.cardHeader}>
            <div className={css.cardIconBackground}>
              <IoCodeSlash className={css.cardIcon} />
            </div>
            <h3>Development and Projects</h3>
          </CardHeader>
          <CardBody>
            Development and project execution are my passion. I thrive on the challenges of bringing
            ideas to life through coding and turning concepts into functional, robust solutions.
            With meticulous planning, efficient workflows, and a keen eye for detail, I ensure
            successful project delivery, meeting objectives and exceeding expectations.
          </CardBody>
        </Card>
        <Card className={css.card}>
          <CardHeader className={css.cardHeader}>
            <div className={css.cardIconBackground}>
              <GiMaterialsScience className={css.cardIcon} />
            </div>
            <h3>Research and planning</h3>
          </CardHeader>
          <CardBody>
            One of the most exhilarating aspects of my creative process is conducting in-depth
            research and meticulous planning for development projects. From Design Systems to Brand
            Strategy, I relish the opportunity to explore various touchpoints of user experience.
            Constantly seeking to expand my knowledge and skills, I immerse myself in research to
            stay ahead of industry trends. By strategically planning and executing projects, I aim
            to create exceptional digital experiences that exceed expectations and deliver
            measurable results.
          </CardBody>
        </Card>
      </div>
    </HomeSection>
  );
};
