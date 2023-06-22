import { Data, Section } from '../types/models';

const LANGUAGES_SECTION: Section = {
  header: 'languages',
  content: {
    binaryBlocks: [
      {
        name: 'English',
        value: 'A2',
      },
      {
        name: 'Russian',
        value: 'native',
      },
    ],
  },
};

const CONTACTS_SECTION: Section = {
  header: 'contacts',
  content: {
    contactBlocks: [
      {
        name: 'GitHub',
        link: 'https://www.github.com/evgenii-shcherbakov',
        iconClass: 'fa-brands fa-github',
        value: 'evgenii-shcherbakov',
      },
      {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/iipekolict',
        iconClass: 'fa-brands fa-linkedin',
        value: 'https://www.linkedin.com/in/iipekolict',
      },
      {
        name: 'GMail',
        link: 'mailto:iipekolict@gmail.com',
        iconClass: 'fa-solid fa-envelope',
        value: 'iipekolict@gmail.com',
      },
    ],
  },
};

const EDUCATION_SECTION: Section = {
  header: 'education',
  content: {
    educationBlocks: [
      {
        title: 'Programmable mobile systems',
        place: 'Belarusian State University of Informatics and Radioelectronics',
        location: 'Minsk',
        dates: 'Sep 2019 - Fed 2023',
      },
      {
        title: 'Electronic computing fascilities',
        place: 'Minsk Radio Engineering College',
        location: 'Minsk',
        dates: 'Sep 2015 - Jun 2019',
      },
    ],
  },
};

const COMMON_DATA: Pick<Data, 'title' | 'location'> = {
  title: 'Evgenii Shcherbakov',
  location: 'Tbilisi, Georgia',
};

export const FULLSTACK_DATA: Data = {
  ...COMMON_DATA,
  job: 'Full-Stack developer',
  aside: [
    {
      header: 'skills',
      content: {
        skillBlocks: [
          {
            group: 'programming languages',
            values: ['Typescript', 'Kotlin'],
          },
          {
            group: 'frameworks',
            values: ['Express', 'Nest.js', 'Angular', 'Next.js', 'Spring Boot', 'Ktor'],
          },
          {
            group: 'databases',
            values: ['MongoDB', 'PostgreSQL', 'Firebase', 'TypeORM', 'Hibernate ORM', 'KMongo ODM'],
          },
          {
            group: 'UI',
            values: ['Material UI', 'Bootstrap', 'Styled components'],
          },
          {
            group: 'state management',
            values: ['MobX', 'RTK Query', 'RxJs'],
          },
          {
            group: 'other',
            values: ['OpenSearch', 'Docker', 'Socket.io', 'Jest', 'JUnit', 'Bash', 'Swagger'],
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
    CONTACTS_SECTION,
  ],
  content: [
    {
      header: 'summary',
      content: {
        texts: [
          `Full-stack software engineer with 2+ years of experience in developing and delivering 
          high-quality software applications. Proven ability to work independently and as part of a 
          team to meet deadlines and deliver projects on time and within budget. Strong problem-solving 
          and analytical skills.`,
        ],
      },
    },
    EDUCATION_SECTION,
    {
      header: 'experience',
      content: {
        experienceBlocks: [
          {
            company: 'yumasoft inc.',
            position: 'Full-Stack developer',
            summary: [
              `worked with Nest.js and TypeORM`,
              `worked with React.js and Material UI, RTK Query, MobX, Styled Components`,
              `improved backend performance and stability using Promise.all-based emulation of 
                multithreading with clever type inference via generics`,
              `implemented more useful and declarative custom send email system using reflect-metadata 
                and strategy design pattern with custom like-handlebars render template system`,
              `migrated project persistence layer to repository pattern and improved it using 
                mongoose-based custom abstract ODM with elements from Hibernate and TypeORM`,
              `worked with Socket.io and OpenSearch`,
              `implemented custom mockingoose-based testing flow for allow persistence layer testing`,
              `implemented custom backend state system using request express object for caching most 
                used database entities (user, company, etc.) across middlewares for reduce extra 
                database requests`,
              `worked with Moongoose and MongoDB aggregation`,
              `worked with AWS infrastructure for manage logs, control deployment pipelines and manage
                environment data`,
            ],
            dates: 'Fed 2022 - current',
          },
          {
            company: 'freelance',
            position: 'Full-Stack developer',
            summary: [
              `worked with Nest.js, Express, Spring Boot and Ktor for build server REST-applications`,
              `used Swagger for define API structure and endpoints params`,
              `worked with React library and Angular for build effective and fast frontend applications`,
              `used Next.js framework for implement SSR and SSG in some applications, and also Next.js 
                API helpers for define simple server-side application endpoints`,
              `used Bootstrap, Material UI and Styled Components for make applications UI more 
                user-friendly`,
              `worked with Docker, Bash scripts and Github Actions for build web applications CI/CD and 
                for npm / Maven Central package publishing`,
              `worked with MobX, RTK Query and RxJs for manage application state, also used RxJs library 
                in Nest.js applications`,
              `used Firebase services in web applications (Firebase Storage, FireStore, etc.)`,
              `used PostgreSQL database and Hibernate / TypeORM for build applications persistence layers`,
              `used Webpack bundler and have knowledge of how configure and use it`,
              `used reflect-metadata, TypeScript decorators and Kotlin reflection for create my own 
                declarative frameworks and npm / Maven Central libraries`,
            ],
            dates: '2021 - Fed 2022',
          },
        ],
      },
    },
  ],
};

export const MOBILE_DATA: Data = {
  ...COMMON_DATA,
  job: 'Mobile developer',
  aside: [
    {
      header: 'skills',
      content: {
        skillBlocks: [
          {
            group: 'programming languages',
            values: ['Typescript', 'Kotlin', 'Dart'],
          },
          {
            group: 'frameworks',
            values: ['Ionic', 'Android framework', 'Flutter', 'Jetpack Compose'],
          },
          {
            group: 'databases',
            values: ['MongoDB', 'Firebase', 'SQLite'],
          },
          {
            group: 'state management',
            values: ['ViewModel', 'Provider', 'RxJs'],
          },
          {
            group: 'DI',
            values: ['Koin', 'Dagger', 'Injectable'],
          },
          {
            group: 'other',
            values: ['Retrofit', 'Coroutines', 'Dio', 'JUnit', 'Bash'],
          },
        ],
      },
    },
    LANGUAGES_SECTION,
    CONTACTS_SECTION,
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
    EDUCATION_SECTION,
    {
      header: 'experience',
      content: {
        experienceBlocks: [
          {
            company: 'freelance',
            position: 'Mobile developer',
            summary: [
              `worked with Android framework for build Android applications using MVVM and Clean 
                Architecture`,
              `worked with Jetpack Compose for build application UI using declarative way`,
              `worked with Flutter and Ionic for build cross-platform mobile applications`,
              `used Koin and Dagger in Kotlin, and Injectable in Dart for implement DI in mobile 
                applications`,
              `used Provider for state management in Flutter applications and RxJs in Ionic applications`,
              `worked with Bash scripts and Github Actions for build web applications CI/CD and for 
                npm / Maven Central package publishing`,
              `used Firebase services in mobile applications (Firebase Storage, FireStore, etc.)`,
              `worked with SQLite database in Android applications`,
              `worked with ViewBinding, ViewPager (both 1 and 2 version), DiffUtils, AndroidViewModel, 
                Coroutines, Retrofit during Android applications development`,
            ],
            dates: '2021 - current',
          },
        ],
      },
    },
  ],
};
