import { ONE, TWO } from '@packages/common';
import { useContext } from 'react';
import { IdentityContext } from 'components/core/providers/identity';

type Sequence = (string | number)[];

export const useHomeHero = () => {
  const identity = useContext(IdentityContext);

  const ONE_SECOND = 1000;
  const TWO_SECONDS = 2000;
  const FOUR_SECONDS = 4000;

  const typingSpeed = 30 as const;

  const greetingSequence: Sequence = [
    ONE_SECOND / TWO,
    'Hey there!, my name is',
    ONE_SECOND,
    'const myName = () =>',
    ONE_SECOND,
    'val myName = { ->',
    ONE_SECOND / TWO,
  ];

  const jobTitleSequence: Sequence = identity.jobTitles.reduce(
    (acc: Sequence, jobTitle, index, array) => {
      if (!index) {
        acc.push(TWO_SECONDS, jobTitle);
        return acc;
      }

      if (index === array.length - ONE) {
        acc.push(jobTitle, TWO_SECONDS);
        return acc;
      }

      acc.push(FOUR_SECONDS, jobTitle);
      return acc;
    },
    [],
  );

  return {
    ...identity,
    typingSpeed,
    greetingSequence,
    jobTitleSequence,
  };
};
