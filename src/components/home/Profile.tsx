import {Variants, motion} from 'framer-motion';
import {GrReactjs} from 'react-icons/gr';
import {DiDjango} from 'react-icons/di';
import {SiAmazonec2} from 'react-icons/si';

import {SectionWithMotion} from '~/pages/home/Home';
import {ReactComponent as Typescript} from '~/assets/image/skills/typescript.svg';
import {ReactComponent as Vue} from '~/assets/image/skills/vue.svg';
import {ReactComponent as Javascript} from '~/assets/image/skills/javascript.svg';

export default function Profile() {
  const boxVariants: Variants = {
    out: {},
    in: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const iconVariants: Variants = {
    out: {
      y: 30,
      opacity: 0,
    },
    in: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <SectionWithMotion className="mt-28 relative" id="profile">
      <div className="absolute w-40 h-40 bg-[#1e2738] rounded-full -top-20 left-1/2 transform -translate-x-1/2">
        <motion.div
          initial={{scale: 0}}
          whileInView={{scale: 1}}
          transition={{duration: 0.4, delay: 0.2}}
          viewport={{once: true}}>
          <img src={require('~/assets/image/profileGIF.gif')} />
        </motion.div>
      </div>
      <div className="mt-14 sm:mt-10">
        <h2 className="relative">
          유석종
          <span className="ml-2 text-sm block sm:inline">
            Web Frontend Developer
          </span>
        </h2>
        <p className="text-main-gray mt-4 tracking-wide">
          안녕하세요! 3년차 프론트엔드 개발자 유석종 입니다. 투자추천서비스
          스타트업에서 개발을 시작했고, 모바일, 웹페이지 화면을 개발했습니다.
          <br />
          <br />
          확장성, 가독성있는 코드를 구성하기 위해 고민하는 것과 팀원들과 새로운
          기술을 알아가는 것을 좋아합니다.
        </p>
      </div>
      <div className="mt-10">
        <h3 className="text-xl text-white text-center font-header font-bold">
          SKILLS
        </h3>
        <motion.ul
          variants={boxVariants}
          initial="out"
          animate="in"
          className="flex justify-center gap-x-8 mt-4">
          <motion.li variants={iconVariants}>
            <GrReactjs className="w-12 h-auto text-[#61DBFB]" />
          </motion.li>
          <motion.li variants={iconVariants}>
            <Typescript className="w-12 h-auto rounded" />
          </motion.li>
          <motion.li variants={iconVariants}>
            <Javascript className="w-12 h-auto rounded" />
          </motion.li>
          <motion.li variants={iconVariants}>
            <Vue className="w-12 h-auto" />
          </motion.li>
        </motion.ul>
      </div>
      <div className="mt-10">
        <h3 className="text-xl text-white text-center font-header font-bold">
          EXPERIENCED SKILLS
        </h3>
        <motion.ul
          variants={boxVariants}
          initial="out"
          animate="in"
          className="flex justify-center gap-x-8 mt-4">
          <motion.li variants={iconVariants}>
            <DiDjango className="text-6xl text-[#2CA977]" title="django" />
          </motion.li>
          <motion.li variants={iconVariants}>
            <SiAmazonec2 className="w-12 h-auto text-[#FF9900]" title="EC2" />
          </motion.li>
        </motion.ul>
      </div>
    </SectionWithMotion>
  );
}
