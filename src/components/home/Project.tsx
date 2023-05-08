import {HTMLMotionProps, Variants, motion} from 'framer-motion';
import {BsArrowRight} from 'react-icons/bs';
import {useState} from 'react';

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
  return (
    <ModalBody onClose={onClose}>
      <div className="px-4 md:px-12">
        <h2 className="text-white text-2xl text-center font-bold mb-6">
          {projectInfo.project_name}
        </h2>
        <div>
          <img
            src={projectInfo.thumbnail}
            className="rounded mb-4"
            css={{
              filter: 'opacity(0.9) drop-shadow(0 0 0 #000)',
            }}
          />
          <div className="text-main-gray text-sm whitespace-pre-line mb-6">
            {projectInfo.intro}
          </div>
          <div className="grid grid-cols-2 gap-3">
            {projectInfo.images.map((image, index) => (
              <div
                key={index}
                className="col-span-1 bg-cover rounded-sm md:rounded"
                css={{
                  backgroundImage: `url(${image})`,
                  aspectRatio: '2/1',
                }}
              />
            ))}
          </div>
          {/* <div className="grid grid-cols-2 gap-4">
            {projectInfo.images.map((image, index) => (
              <motion.img
                whileHover={{aspectRatio: 'unset'}}
                transition={{duration: 0.3}}
                key={index}
                src={image}
                alt="이미지 리스트"
                className="col-span-1 rounded"
                css={{
                  aspectRatio: '2/1',
                }}
              />
            ))}
          </div> */}
          {/* <div className="grid grid-cols-2 gap-4">
            {projectInfo.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt="이미지 리스트"
                className="col-span-1 aspect-square"
              />
            ))}
          </div> */}
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
