import { Cv, CvSection } from '@/features/cv/types/models/cv';

const LANGUAGES_SECTION: CvSection = {
  header: 'languages',
  content: {
    binaryBlocks: [
      {
        name: 'Russian',
        value: 'native (C2)',
      },
      {
        name: 'English',
        value: 'intermediate (B1)',
      },
    ],
  },
};

const CONTACTS_SECTION: CvSection = {
  header: 'contacts',
  content: {
    contactBlocks: [
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
  },
};

const EDUCATION_SECTION: CvSection = {
  header: 'education',
  content: {
    educationBlocks: [
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
  },
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
      header: 'skills',
      content: {
        skillBlocks: [
          {
            groups: [
              {
                values: ['Typescript', 'JavaScript', 'ES6+'],
              },
              {
                values: ['Nest.js', 'Next.js', 'React', 'Express'],
              },
              {
                values: ['MongoDB', 'PostgreSQL', 'Firebase'],
              },
              {
                values: ['TypeORM'],
              },
              {
                values: ['Material UI', 'Bootstrap', 'Styled components', 'Tailwind'],
              },
              {
                values: ['MobX', 'RTK Query', 'RxJs'],
              },
              {
                values: ['AWS', 'Github Actions', 'Docker', 'Bash'],
              },
              {
                values: ['OOP', 'MVC', 'SOLID'],
              },
              {
                values: ['Jest'],
              },
              {
                values: ['OpenSearch', 'Websocket', 'Swagger', 'Payload CMS'],
              },
            ],
          },
        ],
      },
    },
    {
      header: 'certifications',
      content: {
        certificateBlocks: [
          {
            organization: 'The Rolling Scopes School',
            name: 'JAVASCRIPT/FRONTEND 2021Q3',
            date: 'Mar 2022',
            link: 'https://app.rs.school/certificate/jzy3ax0c',
          },
        ],
      },
    },
    LANGUAGES_SECTION,
  ],
  content: [
    {
      header: 'summary',
      content: {
        texts: [
          `I am Full-stack (Node.js) developer with 2 years of commercial experience in developing and delivering 
          Node.js web applications. Also i have mentoring experience less experienced developers at work`,
        ],
      },
    },
    {
      header: 'experience',
      content: {
        experienceBlocks: [
          {
            company: 'Plan9',
            position: 'Node.js developer',
            projects: [
              {
                summary: 'Worked as Node.js developer on web3 gaming platform',
                stack: ['TypeScript', 'Nest.js', 'Next.js', 'Payload CMS', 'MongoDB'],
              },
            ],
            dates: 'Sep 2023 - current',
          },
          {
            company: 'yumasoft inc.',
            position: 'Node.js developer',
            projects: [
              {
                summary:
                  'Worked as Node.js developer on web platform for managing business-clients online conversations (US Startup)',
                stack: [
                  'TypeScript',
                  'Node.js',
                  'MongoDB',
                  'PostgreSQL',
                  'Vue.js',
                  'Python',
                  'Boto3',
                  'AWS',
                  'Websocket',
                  'OpenSearch',
                  'Jest',
                ],
              },
            ],
            dates: 'Fed 2022 - Jun 2023',
          },
          {
            company: 'freelance',
            position: 'Full-Stack developer',
            projects: [
              {
                summary: 'Worked as Full-Stack developer on hotel domain web application',
                stack: [
                  'TypeScript',
                  'Next.js',
                  'Material UI',
                  'Kotlin',
                  'Spring Boot',
                  'Hibernate',
                ],
              },
            ],
            dates: 'Aug 2021 - Fed 2022',
          },
          // {
          //   company: 'SCRUMP LLC',
          //   position: 'Node.js developer',
          //   projects: [
          //     {
          //       summary:
          //         'Worked as Node js developer on some projects, blockchain and fintech services, paymets modules and more',
          //       stack: [
          //         'TypeScript',
          //         'Nest.js',
          //         'Next.js',
          //         'MongoDB',
          //         'PostgreSQL',
          //         'AWS',
          //         'Websocket',
          //       ],
          //     },
          //   ],
          //   dates: 'Jun 2023 - current',
          // },
          // {
          //   company: 'Plan9',
          //   position: 'Node.js developer',
          //   projects: [
          //     {
          //       summary: 'Worked as Node.js developer on web3 gaming platform',
          //       stack: ['TypeScript', 'Nest.js', 'Next.js', 'Payload CMS', 'MongoDB'],
          //     },
          //   ],
          //   dates: 'Sep 2022 - May 2023',
          // },
          // {
          //   company: 'yumasoft inc.',
          //   position: 'Node.js developer',
          //   projects: [
          //     {
          //       summary:
          //         'Worked as Node.js developer on web platform for managing business-clients online conversations (US Startup)',
          //       stack: [
          //         'TypeScript',
          //         'Node.js',
          //         'MongoDB',
          //         'PostgreSQL',
          //         'Vue.js',
          //         'Python',
          //         'Boto3',
          //         'AWS',
          //         'Websocket',
          //         'OpenSearch',
          //         'Jest',
          //       ],
          //     },
          //   ],
          //   dates: 'Fed 2021 - Jun 2022',
          // },
          // {
          //   company: 'freelance',
          //   position: 'Full-Stack developer',
          //   projects: [
          //     {
          //       summary: 'Worked as Full-Stack developer on hotel domain web application',
          //       stack: [
          //         'TypeScript',
          //         'Next.js',
          //         'Material UI',
          //         'Kotlin',
          //         'Spring Boot',
          //         'Hibernate',
          //       ],
          //     },
          //   ],
          //   dates: 'Aug 2020 - Fed 2021',
          // },
        ],
      },
    },
    EDUCATION_SECTION,
  ],
};

export const MOBILE_DATA: Cv = {
  ...COMMON_DATA,
  job: 'Mobile developer',
  aside: [
    CONTACTS_SECTION,
    {
      header: 'skills',
      content: {
        skillBlocks: [
          {
            groups: [
              {
                values: ['Typescript', 'Kotlin', 'Dart'],
              },
              {
                values: ['Ionic', 'Android framework', 'Flutter', 'Jetpack Compose'],
              },
              {
                values: ['MongoDB', 'Firebase', 'SQLite'],
              },
              {
                values: ['ViewModel', 'Provider', 'RxJs'],
              },
              {
                values: ['Koin', 'Dagger', 'Injectable'],
              },
              {
                values: ['Retrofit', 'Coroutines', 'Dio', 'JUnit', 'Bash'],
              },
            ],
          },
        ],
      },
    },
    LANGUAGES_SECTION,
  ],
  content: [
    {
      header: 'summary',
      content: {
        texts: [
          `Software Engineer with 2+ years of experience in developing mobile applications using Flutter, 
            Android, and Jetpack Compose. Proven ability to work independently and as part of a team 
            to meet deadlines and deliver high-quality products. Strong problem-solving and analytical skills.`,
        ],
      },
    },
    {
      header: 'experience',
      content: {
        experienceBlocks: [
          // {
          //   company: 'freelance',
          //   position: 'Mobile developer',
          //   summary: [
          //     `worked with Android framework for build Android applications using MVVM and Clean
          //       Architecture`,
          //     `worked with Jetpack Compose for build application UI using declarative way`,
          //     `worked with Flutter and Ionic for build cross-platform mobile applications`,
          //     `used Koin and Dagger in Kotlin, and Injectable in Dart for implement DI in mobile
          //       applications`,
          //     `used Provider for state management in Flutter applications and RxJs in Ionic applications`,
          //     `worked with Bash scripts and Github Actions for build web applications CI/CD and for
          //       npm / Maven Central package publishing`,
          //     `used Firebase services in mobile applications (Firebase Storage, FireStore, etc.)`,
          //     `worked with SQLite database in Android applications`,
          //     `worked with ViewBinding, ViewPager (both 1 and 2 version), DiffUtils, AndroidViewModel,
          //       Coroutines, Retrofit during Android applications development`,
          //   ],
          //   dates: '2021 - current',
          // },
        ],
      },
    },
    EDUCATION_SECTION,
  ],
};
