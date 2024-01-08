import { NextPage } from 'next';
import { CvWrapper } from '@/features/cv/components/wrapper/cv-wrapper';
import { FULLSTACK_DATA } from '@/features/cv/constants/data';
import '@/features/cv/styles/global.scss';
import { CvSpy } from '@/features/cv/components/hoc/spy/cv-spy';

const CVPage: NextPage = () => {
  return (
    <>
      <CvSpy />
      <CvWrapper data={FULLSTACK_DATA} />
    </>
  );
};

export default CVPage;
