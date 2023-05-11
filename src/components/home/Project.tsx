import {useState} from 'react';
import {HTMLMotionProps, Variants, motion} from 'framer-motion';
import {BsArrowRight} from 'react-icons/bs';
import _ from 'lodash';

import {projectInfos} from '~/data/project';
import {SectionWithMotion} from '~/pages/home/Home';
import {ProjectInfo} from '~/types/common';

import ProjectDetailModal from './ProjectDetailModal';

interface ProjectProps {
  sectionMotions?: HTMLMotionProps<'section'>;
}

export default function Project({sectionMotions}: ProjectProps) {
  return (
    <SectionWithMotion {...sectionMotions} id="projects">
      <h2>Projects</h2>
      <div className="flex flex-col gap-y-6">
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
