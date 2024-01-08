'use client';
import { FC } from 'react';
import { useTelegram } from '@/features/telegram/hooks/use-telegram';

export const CvSpy: FC = () => {
  useTelegram();
  return <></>;
};
