import classNames from 'classnames';
import {HTMLMotionProps, motion} from 'framer-motion';
import {useState} from 'react';
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io';

import {SectionWithMotion} from '~/pages/home/Home';

interface CompanyProps {
  sectionMotions?: HTMLMotionProps<'section'>;
}

const COMPANY_MAP = {
  0: {
    companyName: 'Bigtree',
    workList: [
      '안녕하세요! 3년차 프론트엔드 개발자 유석종 입니다. 투자추천서비스 스타트업에서 개발을 시작했고, 모바일, 웹페이지 화면을 개발했습니다.',
      'ㄴㄴㄴㄴ',
      'ㅇㅇㅇㅇ',
    ],
  },
  1: {
    companyName: 'Teero',
    workList: ['12321', '2445', '566875'],
  },
  2: {
    companyName: 'Travelai',
    workList: ['wqeqwewq', 'asdsad', 'xczxcx'],
  },
};

export default function Company({sectionMotions}: CompanyProps) {
  const [activeComp, setActiveComp] = useState(0);

  function handleSlide(type: 'next' | 'prev') {
    const lastIndex = Object.keys(COMPANY_MAP).length - 1;

    if (type === 'next') {
      setActiveComp(activeComp === lastIndex ? 0 : activeComp + 1);
    }
    if (type === 'prev') {
      setActiveComp(activeComp === 0 ? lastIndex : activeComp - 1);
    }
  }
  return (
    <SectionWithMotion {...sectionMotions}>
      <h2 className="mb-10">Company I Worked With</h2>
      <div className="text-main-gray">
        <ul className="flex justify-center items-center gap-x-4 md:gap-x-10">
          {Object.values(COMPANY_MAP)
            .map(d => d.companyName)
            .map((name, index) => (
              <li
                key={index}
                className={classNames(
                  'bg-main-navy text-lg px-4 py-2 rounded cursor-pointer hover:text-white font-babes tracking-wide',
                  {
                    'text-white border border-main-orange':
                      activeComp === index,
                    'text-gray-400': activeComp !== index,
                  },
                )}
                onClick={() => setActiveComp(index)}>
                {name}
              </li>
            ))}
        </ul>
        <div className="relative">
          <div
            className="absolute left-0 top-14 w-10 h-10 rounded-full flex justify-center items-center bg-black bg-opacity-10 hover:bg-opacity-30 cursor-pointer"
            onClick={() => handleSlide('prev')}>
            <IoIosArrowBack className="text-main-gray text-2xl" />
          </div>
          <div
            className="absolute right-0 top-14 w-10 h-10 rounded-full flex justify-center items-center bg-black bg-opacity-10 hover:bg-opacity-30 cursor-pointer"
            onClick={() => handleSlide('next')}>
            <IoIosArrowForward className="text-main-gray text-2xl" />
          </div>
        </div>
        <motion.div
          className="w-2/3 mt-8 mx-auto min-h-[120px] transition-all"
          key={activeComp}
          initial={{y: 0, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{duration: 0.5}}>
          {COMPANY_MAP[activeComp as keyof typeof COMPANY_MAP].workList.map(
            work => (
              <p>{work}</p>
            ),
          )}
        </motion.div>
        {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
        voluptatibus natus corporis magnam nobis! Nemo deleniti dignissimos
        cupiditate, cumque, possimus expedita optio molestias explicabo
        molestiae natus enim, ipsam nulla eligendi.
        <br />
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
        voluptatibus natus corporis magnam nobis! Nemo deleniti dignissimos
        cupiditate, cumque, possimus expedita optio molestias explicabo
        molestiae natus enim, ipsam nulla eligendi.
        <br />
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
        voluptatibus natus corporis magnam nobis! Nemo deleniti dignissimos
        cupiditate, cumque, possimus expedita optio molestias explicabo
        molestiae natus enim, ipsam nulla eligendi.
        <br />
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
        voluptatibus natus corporis magnam nobis! Nemo deleniti dignissimos
        cupiditate, cumque, possimus expedita optio molestias explicabo
        molestiae natus enim, ipsam nulla eligendi.
        <br />
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
        voluptatibus natus corporis magnam nobis! Nemo deleniti dignissimos
        cupiditate, cumque, possimus expedita optio molestias explicabo
        molestiae natus enim, ipsam nulla eligendi. */}
        <br />
      </div>
    </SectionWithMotion>
  );
}
