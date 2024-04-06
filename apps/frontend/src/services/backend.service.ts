import {
  BackendContact,
  BackendContactTypeEnum,
  BackendExperience,
  BackendIdentity,
  BackendRestApiSchema,
  RestApiClient,
} from '@packages/common';
import { BACKEND_URL } from 'constants/environment';

export class BackendService {
  private static readonly restApiClient = new RestApiClient<BackendRestApiSchema>(BACKEND_URL);

  static async getContacts(): Promise<BackendContact[]> {
    // return this.restApiClient.typed.get('contacts', {});

    return Promise.resolve([
      {
        name: 'location',
        value: 'Tbilisi, Georgia',
        type: BackendContactTypeEnum.LOCATION,
      },
      {
        name: 'phone',
        link: 'tel:+995511419188',
        value: '+995511419188',
        type: BackendContactTypeEnum.PHONE,
      },
      {
        name: 'email',
        link: 'mailto:iipekolict@gmail.com',
        value: 'iipekolict@gmail.com',
        type: BackendContactTypeEnum.MAIL,
      },
      {
        name: 'github',
        link: 'https://github.com/evgenii-shcherbakov',
        value: 'evgenii-shcherbakov',
        type: BackendContactTypeEnum.GITHUB,
      },
      {
        name: 'telegram',
        link: 'https://t.me/IIPEKOLICT',
        value: '@IIPEKOLICT',
        type: BackendContactTypeEnum.TELEGRAM,
      },
      {
        name: 'linkedin',
        link: 'https://www.linkedin.com/iipekolict',
        value: 'www.linkedin.com/iipekolict',
        type: BackendContactTypeEnum.LINKEDIN,
      },
    ]);
  }

  static async getIdentity(): Promise<BackendIdentity> {
    // return this.restApiClient.typed.get('identity', {});

    return Promise.resolve({
      fullName: 'Evgenii Shcherbakov',
      mainJobTitle: 'Node.js developer',
      jobTitles: [
        'Node.js developer',
        'Nest.js developer',
        'Full-Stack (Node.js) developer',
        'React developer',
      ],
      summary:
        'I am Full-stack (Node.js) developer with 2 years of commercial experience in ' +
        'developing and delivering Node.js web applications.',
    });
  }

  static async getExperience(): Promise<BackendExperience[]> {
    // return this.restApiClient.typed.get('experience', {});

    return Promise.resolve([
      {
        company: 'Scrump LLC',
        position: 'Node.js developer',
        projects: [
          {
            domain: 'fintech, blockchain',
            role: 'Node.js developer',
            responsibilities: [
              'Nest.js backend feature development',
              'work with MongoDB indexes, aggregations',
              'work with Nats, Kafka',
              'parsing of Ethereum blockchain blocks and events',
            ],
            stack: ['Nest.js', 'Mongoose', 'MongoDB', 'Web3', 'Kafka', 'Nats'],
          },
        ],
        dates: 'Fed 2024 - present',
      },
      {
        company: 'Plan9',
        position: 'Node.js developer',
        projects: [
          {
            domain: 'gamedev platform',
            role: 'Full-Stack developer',
            responsibilities: [
              'Nest.js backend feature development (REST API)',
              'work with MongoDB aggregations, indexes',
              'Next.js-based admin panel feature development (Payload CMS)',
            ],
            stack: ['TypeScript', 'Nest.js', 'Next.js', 'Payload CMS', 'MongoDB', 'Mongoose'],
          },
        ],
        dates: 'Sep 2023 - Dec 2023',
      },
      {
        company: 'yumasoft inc.',
        position: 'Node.js developer',
        projects: [
          {
            domain: 'web platform for managing business-clients online conversations',
            role: 'Backend developer',
            responsibilities: [
              'Express-based backend feature development (REST API, websockets, email notifications, Open Search)',
              'work with MongoDB aggregations and indexes, optimize database requests',
              'work closely with project AWS infrastructure (AWS Lambda, AWS CloudWatch, AWS Pipeline, AWS Cognito, AWS SQS)',
              'mentoring and cooperation with frontend and data science teams',
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
    ]);
  }
}
