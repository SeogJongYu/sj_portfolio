import classNames from 'classnames';
import {HTMLMotionProps, motion} from 'framer-motion';
import {useMemo, useState} from 'react';
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io';
import {HiOutlineCursorClick} from 'react-icons/hi';

import {SectionWithMotion} from '~/pages/home/Home';

interface CompanyProps {
  sectionMotions?: HTMLMotionProps<'section'>;
}

const COMPANY_MAP = {
  0: {
    companyName: 'Bigtree',
    title: '투자추천서비스 스타트업 (2020.10 - 2023.03)',
    workList: [
      '웹뷰 앱, 웹서비스 프론트엔드 개발 및 기획, 디자인, 퍼블리싱',
      'React, Typescript',
    ],
    url: 'https://www.ibigtree.kr/',
  },
  1: {
    companyName: 'Travelai',
    title: '프리랜서 (2023.03 ~ 2023.04)',
    workList: [
      '영풍문고 리뉴얼 어드민(주문관리), 쇼핑몰(검색) 프론트 개발',
      'Vue3, Typescript',
    ],
    url: 'https://www.travelai.io/',
  },
  2: {
    companyName: 'Teero',
    title: '서브 프로젝트 (2022.06 ~ 2023.03)',
    workList: [
      '소규모 프로젝트 프론트, 백엔드 전체 개발',
      'React, Typescript, Django',
    ],
    url: '',
  },
};

export default function Company({sectionMotions}: CompanyProps) {
  const [activeComp, setActiveComp] = useState(0);

  const companyInfo = useMemo(
    () => COMPANY_MAP[activeComp as keyof typeof COMPANY_MAP],
    [activeComp],
  );

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
    <SectionWithMotion {...sectionMotions} id="company">
      <h2>Company I Worked With</h2>
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
          <h3 className="mb-4 text-white text-center">{companyInfo.title}</h3>
          {companyInfo.workList.map((work, index) => (
            <p key={index} className="text-sm mb-1">
              • {work}
            </p>
          ))}
          {companyInfo?.url && (
            <div className="float-right mt-1">
              <a
                href={companyInfo.url}
                target="_blank"
                className="inline-block bg-[#465981] hover:bg-[#4f6591] text-white font-bold text-xs px-5 py-2 rounded-full transition-all"
                rel="noreferrer">
                Website
                <HiOutlineCursorClick className="inline-block text-sm ml-2" />
              </a>
            </div>
          )}
        </motion.div>
        <br />
      </div>
    </SectionWithMotion>
  );
}
