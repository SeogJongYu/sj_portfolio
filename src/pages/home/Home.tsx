import tw, {styled, css} from 'twin.macro';
import {motion} from 'framer-motion';

import Page from '~/components/Page';
import Profile from '~/components/home/Profile';
import Project from '~/components/home/Project';
import Contact from '~/components/home/Contact';
import Company from '~/components/home/Company';

export const SectionWithMotion = styled(motion.section)(() => [
  tw`bg-[#1e2738] w-full p-4 sm:p-10 mb-10 rounded-lg`,
  css`
    h2 {
      font-family: 'Roboto', sans-serif;
      ${tw`text-white text-center text-3xl tracking-wide font-bold`}
    }
  `,
]);

const SectionCommonMotions = {
  initial: {opacity: 0, transform: 'translateY(50px)'},
  whileInView: {opacity: 1, transform: 'translateY(0px)'},
  transition: {duration: 0.4},
  viewport: {once: false, margin: '-100px'},
};

export default function Home() {
  return (
    <Page>
      <Profile />
      <Company sectionMotions={SectionCommonMotions} />
      <Project sectionMotions={SectionCommonMotions} />
      <Contact sectionMotions={SectionCommonMotions} />
    </Page>
  );
}
