import { Injectable } from '@angular/core';
import {
  Cv,
  CvContactsSection,
  CvEducationSection,
  CvLanguagesSection,
  CvSectionTypeEnum,
} from '@shared/cv';

const LANGUAGES_SECTION: CvLanguagesSection = {
  type: CvSectionTypeEnum.LANGUAGES,
  languages: [
    {
      name: 'Russian',
      level: 'native',
      description: 'C2',
    },
    {
      name: 'English',
      level: 'intermediate',
      description: 'B1',
    },
  ],
};

const CONTACTS_SECTION: CvContactsSection = {
  type: CvSectionTypeEnum.CONTACTS,
  contacts: [
    {
      name: 'location',
      value: 'Tbilisi, Georgia',
    },
    {
      name: 'phone',
      link: 'tel:+995511419188',
      value: '+995511419188',
    },
    {
      name: 'telegram',
      link: 'https://t.me/IIPEKOLICT',
      value: 'IIPEKOLICT',
    },
    {
      name: 'github',
      link: 'https://www.github.com/evgenii-shcherbakov',
      value: 'evgenii-shcherbakov',
    },
    {
      name: 'linkedin',
      link: 'https://www.linkedin.com/in/iipekolict',
      value: 'linkedin.com/in/iipekolict',
    },
    {
      name: 'gmail',
      link: 'mailto:iipekolict@gmail.com',
      value: 'iipekolict@gmail.com',
    },
  ],
};

const EDUCATION_SECTION: CvEducationSection = {
  type: CvSectionTypeEnum.EDUCATION,
  items: [
    {
      title: 'Programmable mobile systems',
      place: 'Belarusian State University of Informatics and Radioelectronics',
      location: 'Minsk, Belarus',
      dates: 'Sep 2019 - Fed 2023',
    },
    {
      title: 'JAVASCRIPT/FRONTEND 2021Q3',
      place: 'The Rolling Scopes School',
      location: 'Minsk, Belarus',
      dates: 'Sep 2021 - Fed 2022',
    },
    {
      title: 'Electronic computing facilities',
      place: 'Minsk Radio Engineering College',
      location: 'Minsk, Belarus',
      dates: 'Sep 2015 - Jun 2019',
    },
  ],
};

const COMMON_DATA: Pick<Cv, 'title'> = {
  title: 'Evgenii Shcherbakov',
};

export const FULLSTACK_DATA: Cv = {
  ...COMMON_DATA,
  job: 'Full-Stack (Node.js) developer',
  aside: [
    CONTACTS_SECTION,
    {
      type: CvSectionTypeEnum.SKILLS,
      groups: [
        ['Typescript', 'JavaScript', 'ES6+'],
        ['Nest.js', 'Next.js', 'React', 'Express'],
        ['MongoDB', 'PostgreSQL', 'Mongoose', 'TypeORM'],
        ['Payload CMS'],
        ['Material UI', 'Bootstrap', 'Styled components', 'Tailwind'],
        ['MobX', 'React Query', 'RxJs'],
        ['AWS Lambda', 'AWS CloudWatch', 'AWS Pipeline', 'AWS Cognito', 'AWS SQS'],
        ['Docker', 'Bash'],
        ['Jest'],
        ['OpenSearch', 'Websocket', 'Swagger'],
      ],
    },
    {
      type: CvSectionTypeEnum.CERTIFICATIONS,
      certificates: [
        {
          organization: 'The Rolling Scopes School',
          name: 'JAVASCRIPT/FRONTEND 2021Q3',
          date: 'Mar 2022',
          link: 'https://app.rs.school/certificate/jzy3ax0c',
        },
      ],
    },
    LANGUAGES_SECTION,
  ],
  content: [
    {
      type: CvSectionTypeEnum.SUMMARY,
      paragraphs: [
        `I am Full-stack (Node.js) developer with 2 years of commercial experience in developing and delivering
         Node.js web applications. Also i have mentoring experience less experienced developers at work`,
      ],
    },
    {
      type: CvSectionTypeEnum.EXPERIENCE,
      items: [
        {
          company: 'Plan9',
          position: 'Node.js developer',
          projects: [
            {
              domain: 'Web3 gaming platform',
              role: 'Full-Stack developer',
              responsibilities: [
                'Nest.js backend feature development (mostly CRUD-related logic)',
                'code refactoring',
                'cooperation with frontend and gamedev teams',
                'Next.js-based admin panel feature development',
              ],
              stack: ['TypeScript', 'Nest.js', 'Next.js', 'Payload CMS', 'MongoDB', 'Mongoose'],
            },
          ],
          dates: 'Sep 2023 - present',
        },
        {
          company: 'yumasoft inc.',
          position: 'Node.js developer',
          projects: [
            {
              domain:
                'Web platform for managing business-clients online conversations (US Startup)',
              role: 'Backend developer',
              responsibilities: [
                'Express-based backend feature development (mostly CRUD-based logic)',
                'email notification templates development',
                'endpoints and database requests optimizations',
                'work closely with project AWS infrastructure (AWS Lambda, AWS CloudWatch, AWS Pipeline, AWS Cognito, AWS SQS)',
                'OpenSearch-related features implementation',
                'mentoring',
                'cooperation with frontend and data science teams',
                'websockets-related features development',
              ],
              stack: [
                'TypeScript',
                'Node.js',
                'Express',
                'MongoDB',
                'Mongoose',
                'PostgreSQL',
                'AWS Lambda',
                'AWS CloudWatch',
                'AWS Pipeline',
                'AWS Cognito',
                'AWS SQS',
                'Websocket',
                'OpenSearch',
                'Jest',
              ],
            },
          ],
          dates: 'Fed 2022 - Jun 2023',
        },
      ],
    },
    EDUCATION_SECTION,
  ],
};

// export const MOBILE_DATA: CvModel = {
//   ...COMMON_DATA,
//   job: 'Mobile developer',
//   aside: [
//     CONTACTS_SECTION,
//     {
//       header: 'skills',
//       content: {
//         skillBlocks: [
//           {
//             groups: [
//               {
//                 values: ['Typescript', 'Kotlin', 'Dart'],
//               },
//               {
//                 values: ['Ionic', 'Android framework', 'Flutter', 'Jetpack Compose'],
//               },
//               {
//                 values: ['MongoDB', 'Firebase', 'SQLite'],
//               },
//               {
//                 values: ['ViewModel', 'Provider', 'RxJs'],
//               },
//               {
//                 values: ['Koin', 'Dagger', 'Injectable'],
//               },
//               {
//                 values: ['Retrofit', 'Coroutines', 'Dio', 'JUnit', 'Bash'],
//               },
//             ],
//           },
//         ],
//       },
//     },
//     LANGUAGES_SECTION,
//   ],
//   content: [
//     {
//       header: 'summary',
//       content: {
//         texts: [
//           `Software Engineer with 2+ years of experience in developing mobile applications using Flutter,
//             Android, and Jetpack Compose. Proven ability to work independently and as part of a team
//             to meet deadlines and deliver high-quality products. Strong problem-solving and analytical skills.`,
//         ],
//       },
//     },
//     {
//       header: 'experience',
//       content: {
//         experienceBlocks: [
//           // {
//           //   company: 'freelance',
//           //   position: 'Mobile developer',
//           //   summary: [
//           //     `worked with Android framework for build Android applications using MVVM and Clean
//           //       Architecture`,
//           //     `worked with Jetpack Compose for build application UI using declarative way`,
//           //     `worked with Flutter and Ionic for build cross-platform mobile applications`,
//           //     `used Koin and Dagger in Kotlin, and Injectable in Dart for implement DI in mobile
//           //       applications`,
//           //     `used Provider for state management in Flutter applications and RxJs in Ionic applications`,
//           //     `worked with Bash scripts and Github Actions for build web applications CI/CD and for
//           //       npm / Maven Central package publishing`,
//           //     `used Firebase services in mobile applications (Firebase Storage, FireStore, etc.)`,
//           //     `worked with SQLite database in Android applications`,
//           //     `worked with ViewBinding, ViewPager (both 1 and 2 version), DiffUtils, AndroidViewModel,
//           //       Coroutines, Retrofit during Android applications development`,
//           //   ],
//           //   dates: '2021 - current',
//           // },
//         ],
//       },
//     },
//     EDUCATION_SECTION,
//   ],
// };

@Injectable({
  providedIn: 'root',
})
export class GetCvService {
  private readonly cv: Cv = FULLSTACK_DATA;

  constructor() {}

  getCv(name?: string | null): Cv {
    return this.cv;
  }
}
