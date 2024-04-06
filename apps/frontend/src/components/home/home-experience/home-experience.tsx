'use client';

import { Card, CardBody, CardHeader, Chip, Link } from '@nextui-org/react';
import { ExperienceContext } from 'components/core/providers/experience';
import { HomeSection } from 'components/home/hoc/home-section';
import { FC, useContext } from 'react';
import css from './home-experience.module.scss';

export const HomeExperience: FC = () => {
  const experienceList = useContext(ExperienceContext);

  return (
    <HomeSection className={css.container}>
      <h2 className={css.header}>Experience</h2>
      <div className={css.column}>
        {experienceList.map((experience) => (
          <Card className={css.card} key={experience.dates}>
            <CardHeader className={css.cardHeader}>
              <p className={css.cardDates}>{experience.dates}</p>
              <h3 className={css.cardJobName}>{experience.position}</h3>
              <h4 className={css.cardCompanyName}>{experience.company}</h4>
            </CardHeader>
            <CardBody className={css.cardProjectsContainer}>
              {experience.projects.map((project, index) => (
                <Link
                  key={project.name ?? index.toString()}
                  href={project.link}
                  target="_blank"
                  className={css.project}
                  color="foreground"
                  isBlock
                >
                  <div className={css.projectInfo}>
                    {project.name && <p className={css.projectName}>{project.name}</p>}
                    <p className={css.projectDomain}>Domain: {project.domain}</p>
                    <p className={css.projectRole}>Role: {project.role}</p>
                  </div>
                  <ul className={css.projectResponsibilityContainer}>
                    {project.responsibilities.map((responsibility) => (
                      <li key={responsibility} className={css.projectResponsibility}>
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                  {project.stack.length && (
                    <div className={css.stackContainer}>
                      {project.stack.map((technology) => (
                        <Chip key={project.name ?? '' + technology}>{technology}</Chip>
                      ))}
                    </div>
                  )}
                </Link>
              ))}
            </CardBody>
          </Card>
        ))}
      </div>
    </HomeSection>
  );
};
