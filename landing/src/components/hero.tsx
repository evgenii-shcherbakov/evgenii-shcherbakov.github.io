'use client';

import { FC } from 'react';
import { Button, Divider, Spacer } from '@nextui-org/react';
import { AiFillGithub } from 'react-icons/ai';
import Link from 'next/link';

export const Hero: FC = () => {
  const contacts = [
    {
      link: 'https://github.com/evgenii-shcherbakov',
      icon: <AiFillGithub />,
    },
  ];

  return (
    <center className="p-60">
      <h2 className="font-bold text-4xl p-5">Evgenii Shcherbakov</h2>
      <h5 className="font-bold text-2xl pb-2">Software engineer</h5>
      <div className="flex flex-row justify-center align-middle p-10">
        <Button variant="shadow">Resume</Button>
      </div>
    </center>
  );
};
