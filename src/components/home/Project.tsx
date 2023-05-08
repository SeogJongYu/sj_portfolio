import {useRef, useState} from 'react';
import {HTMLMotionProps, Variants, motion} from 'framer-motion';
import {BsArrowRight} from 'react-icons/bs';
import {IoMdPause, IoMdPlay} from 'react-icons/io';
import {Navigation, Pagination, Autoplay} from 'swiper';
import {Swiper, SwiperRef, SwiperSlide} from 'swiper/react';
import _ from 'lodash';

import {ProjectInfo, projectInfos} from '~/data/project';
import {SectionWithMotion} from '~/pages/home/Home';

import {ModalBody} from '../common/modal';

interface ProjectProps {
  sectionMotions?: HTMLMotionProps<'section'>;
}

export default function Project({sectionMotions}: ProjectProps) {
  return (
    <SectionWithMotion {...sectionMotions} id="projects">
      <h2>Projects</h2>
      <div className="flex flex-col gap-y-4">
        {projectInfos.map((projectInfo, index) => (
          <ProjectCard key={index} projectInfo={projectInfo} />
        ))}
      </div>
    </SectionWithMotion>
  );
}

const arrowMotion: Variants = {
  rest: {
    x: 0,
  },
  hover: {
    x: 5,
    transition: {
      duration: 0.3,
    },
  },
};

function ProjectCard({projectInfo}: {projectInfo: ProjectInfo}) {
  const [showDetail, setShowDetail] = useState(false);
  return (
    <>
      <div className="grid grid-cols-10 gap-x-6">
        <div className="col-span-10 md:col-span-4">
          <img
            src={projectInfo.thumbnail}
            className="rounded"
            alt="프로젝트 썸네일"
          />
        </div>
        <div className="col-span-10 md:col-span-6 flex flex-col mt-2 md:mt-0">
          <h3 className="mb-2 text-white text-lg">{projectInfo.title}</h3>
          <p className="text-main-gray text-sm mb-4">{projectInfo.summary}</p>
          <h4 className="text-white font-babes tracking-wide">Tech Stack:</h4>
          <ul className="text-sm text-main-gray">
            {projectInfo.stacks.map((stack, index) => (
              <li className="mr-3 inline-block" key={index}>
                {stack}
              </li>
            ))}
          </ul>
          <div className="flex-1 flex items-end mt-2">
            <motion.button
              className="text-[#629feb] hover:text-[#4b91e8] text-xs font-bold flex"
              whileHover="hover"
              onClick={() => setShowDetail(true)}>
              View Detail
              <motion.span className="ml-0.5" variants={arrowMotion}>
                <BsArrowRight className="text-base pb-0.5" />
              </motion.span>
            </motion.button>
          </div>
        </div>
      </div>
      {showDetail && (
        <ProjectDetailModal
          onClose={() => setShowDetail(false)}
          projectInfo={projectInfo}
        />
      )}
    </>
  );
}

interface ProjectDetailModal {
  onClose(): void;
  projectInfo: ProjectInfo;
}

function ProjectDetailModal({onClose, projectInfo}: ProjectDetailModal) {
  const [activeLoop, setActiveLoop] = useState(true);
  const swiperRef = useRef<SwiperRef | null>(null);
  return (
    <ModalBody onClose={onClose}>
      <div className="px-4 md:px-12">
        <h2 className="text-white text-2xl text-center font-bold mb-6">
          {projectInfo.project_name}
        </h2>
        <div className="mb-4 relative">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            navigation
            pagination={{
              clickable: true,
              el: '.custom-pagination',
            }}
            autoplay={{delay: 5000}}
            loop={true}>
            <SwiperSlide>
              <img
                src={projectInfo.thumbnail}
                className="rounded mb-4"
                css={{
                  aspectRatio: '710/450',
                }}
              />
            </SwiperSlide>
            {projectInfo.images.map((image, imageIndex) => (
              <SwiperSlide key={imageIndex}>
                <img
                  src={image}
                  alt="이미지 리스트"
                  css={{aspectRatio: '710/450'}}
                />
              </SwiperSlide>
            ))}
            <div className="custom-pagination flex justify-center" />
          </Swiper>
          <button
            className="absolute right-0 text-lg bottom-[-6px] p-0.5 z-10"
            onClick={() => {
              if (activeLoop) {
                setActiveLoop(false);
                swiperRef.current?.swiper.autoplay.stop();
              }
              if (!activeLoop) {
                setActiveLoop(true);
                swiperRef.current?.swiper.autoplay.start();
              }
            }}>
            {activeLoop && <IoMdPause className="text-gray-400" />}
            {!activeLoop && <IoMdPlay className="text-gray-400" />}
          </button>
        </div>
        <div className="text-main-gray text-sm whitespace-pre-line mb-6">
          {projectInfo.intro}
        </div>
        <div className="grid grid-cols-12 gap-x-5">
          <div className="col-span-3">소개</div>
          <div className="col-span-9">ㅇㅇㅇㅇ</div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta fugiat
        neque provident reprehenderit impedit quod magni aliquam culpa,
        molestias molestiae nesciunt aliquid ipsam debitis eaque quidem autem
        esse! Nesciunt, vel!
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta fugiat
        neque provident reprehenderit impedit quod magni aliquam culpa,
        molestias molestiae nesciunt aliquid ipsam debitis eaque quidem autem
        esse! Nesciunt, vel!
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta fugiat
        neque provident reprehenderit impedit quod magni aliquam culpa,
        molestias molestiae nesciunt aliquid ipsam debitis eaque quidem autem
        esse! Nesciunt, vel!
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta fugiat
        neque provident reprehenderit impedit quod magni aliquam culpa,
        molestias molestiae nesciunt aliquid ipsam debitis eaque quidem autem
        esse! Nesciunt, vel!
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta fugiat
        neque provident reprehenderit impedit quod magni aliquam culpa,
        molestias molestiae nesciunt aliquid ipsam debitis eaque quidem autem
        esse! Nesciunt, vel!
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta fugiat
        neque provident reprehenderit impedit quod magni aliquam culpa,
        molestias molestiae nesciunt aliquid ipsam debitis eaque quidem autem
        esse! Nesciunt, vel!
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta fugiat
        neque provident reprehenderit impedit quod magni aliquam culpa,
        molestias molestiae nesciunt aliquid ipsam debitis eaque quidem autem
        esse! Nesciunt, vel!
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta fugiat
        neque provident reprehenderit impedit quod magni aliquam culpa,
        molestias molestiae nesciunt aliquid ipsam debitis eaque quidem autem
        esse! Nesciunt, vel!
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta fugiat
        neque provident reprehenderit impedit quod magni aliquam culpa,
        molestias molestiae nesciunt aliquid ipsam debitis eaque quidem autem
        esse! Nesciunt, vel!
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta fugiat
        neque provident reprehenderit impedit quod magni aliquam culpa,
        molestias molestiae nesciunt aliquid ipsam debitis eaque quidem autem
        esse! Nesciunt, vel!
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta fugiat
        neque provident reprehenderit impedit quod magni aliquam culpa,
        molestias molestiae nesciunt aliquid ipsam debitis eaque quidem autem
        esse! Nesciunt, vel!
        <br />
        <br />
      </div>
    </ModalBody>
  );
}
