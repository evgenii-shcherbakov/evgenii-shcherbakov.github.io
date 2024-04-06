import dynamic from 'next/dynamic';

const BaseLayout = dynamic(() =>
  import('components/core/hoc/base-layout').then((mod) => mod.BaseLayout),
);
const HomeHero = dynamic(() => import('components/home/home-hero').then((mod) => mod.HomeHero));
const HomeLooking = dynamic(() =>
  import('components/home/home-looking').then((mod) => mod.HomeLooking),
);
const HomeAbout = dynamic(() => import('components/home/home-about').then((mod) => mod.HomeAbout));
const HomeExperience = dynamic(() =>
  import('components/home/home-experience').then((mod) => mod.HomeExperience),
);
const HomeConnect = dynamic(() =>
  import('components/home/home-connect').then((mod) => mod.HomeConnect),
);

export default function Home() {
  return (
    <BaseLayout>
      <HomeHero />
      {/*<HomeLooking />*/}
      {/*<HomeAbout />*/}
      <HomeExperience />
      <HomeConnect />
    </BaseLayout>
  );
}
