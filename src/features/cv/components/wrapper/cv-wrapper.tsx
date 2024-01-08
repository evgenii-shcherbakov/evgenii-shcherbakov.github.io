import { FC } from 'react';
import './cv-wrapper.scss';
import { CvWrapperProps } from '@/features/cv/components/wrapper/types';
import { CvHeader } from '@/features/cv/components/header/cv-header';
import { CvSection } from '@/features/cv/components/section/cv-section';

export const CvWrapper: FC<CvWrapperProps> = ({ data }) => {
  return (
    <main className="app-page active">
      <div className="content-wrapper">
        <div className="app-page__wrapper">
          <header>
            <CvHeader title={data.title} job={data.job} photoUrl="/photo.webp" />
          </header>
          <div className="app-page__container">
            <aside className="app-page__row app-page__aside">
              {data.aside.map((section, index) => (
                <CvSection key={'aside-section' + index.toString()} section={section} />
              ))}
            </aside>
            <article className="app-page__row app-page__article">
              {data.content.map((section, index) => (
                <CvSection key={'content-section' + index.toString()} section={section} />
              ))}
            </article>
          </div>
        </div>
      </div>
      {/*     <span id="prev-nav-anchor" className="app-page__nav-anchor app-page__nav-anchor--left"> */}
      {/*   {{prevPage}} */}
      {/* </span> */}
      {/*     <span id="next-nav-anchor" className="app-page__nav-anchor app-page__nav-anchor--right"> */}
      {/*   {{nextPage}} */}
      {/* </span> */}
    </main>
  );
};
