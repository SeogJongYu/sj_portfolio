import {useMemo, useRef, useState} from 'react';
import {IoMdPause, IoMdPlay} from 'react-icons/io';
import classNames from 'classnames';
import tw, {styled, css} from 'twin.macro';
import {Navigation, Pagination, Autoplay} from 'swiper';
import type {SwiperOptions} from 'swiper';
import {Swiper, SwiperRef, SwiperSlide} from 'swiper/react';

import {ProjectInfo} from '~/types/common';

import {ModalBody} from '../common/modal';

interface ProjectDetailModal {
  onClose(): void;
  projectInfo: ProjectInfo;
}

const ProjectDetailUl = styled.ul(() => [
  tw`flex flex-col gap-y-1`,
  css`
    li {
      ${tw`flex text-sm`}
    }
    h4 {
      ${tw`w-28 text-white`}
    }
    span {
      ${tw`flex-1`}
    }
  `,
]);

const CommonUl = styled.ul(() => [
  tw`list-disc pl-3 text-sm`,
  css`
    li {
      ${tw`mb-1 whitespace-pre-line`}
    }
  `,
]);

export default function ProjectDetailModal({
  onClose,
  projectInfo,
}: ProjectDetailModal) {
  const [activeLoop, setActiveLoop] = useState(true);
  const swiperRef = useRef<SwiperRef | null>(null);

  const imageList = useMemo(() => {
    const results = [];
    results.push(projectInfo.thumbnail);
    projectInfo.images && results.push(...projectInfo.images);
    return results;
  }, [projectInfo.images, projectInfo.thumbnail]);

  const breakPoints = useMemo(() => {
    let results: SwiperOptions['breakpoints'];
    const isMobile = projectInfo.type === 'mobile';

    if (isMobile) {
      results = {
        1024: {
          slidesPerView: 2,
        },
      };
    }

    return results;
  }, [projectInfo.type]);

  return (
    <ModalBody onClose={onClose}>
      <div className="px-4 md:px-12">
        <h2 className="text-white text-2xl text-center font-bold mb-6">
          {projectInfo.project_name}
        </h2>
        <div className="mb-6 relative">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            breakpoints={breakPoints}
            navigation
            pagination={{
              clickable: true,
              el: '.custom-pagination',
            }}
            autoplay={{delay: 5000}}
            loop={true}>
            {imageList.map((image, imageIndex) => (
              <SwiperSlide key={imageIndex}>
                <img
                  src={image}
                  className={classNames('rounded mb-4 w-full h-auto', {
                    'w-full h-auto': projectInfo.type === 'desktop',
                    'w-auto h-[50vh] lg:h-[60vh] mx-auto':
                      projectInfo.type === 'mobile',
                  })}
                  alt="이미지 리스트"
                  css={{
                    aspectRatio:
                      projectInfo.type === 'desktop' ? '710/450' : 'auto',
                  }}
                />
              </SwiperSlide>
            ))}
            <div className="custom-pagination flex justify-center" />
          </Swiper>
          {projectInfo.images && (
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
          )}
        </div>
        <div className="text-main-gray text-sm whitespace-pre-line mb-8">
          <p className="mb-4">{projectInfo.intro_summary}</p>
          <CommonUl>
            {projectInfo.intros?.map((intro, index) => (
              <li key={index}>{intro}</li>
            ))}
          </CommonUl>
        </div>
        <ProjectSection title="상세">
          <ProjectDetailUl>
            {projectInfo?.date_range && (
              <li>
                <h4>작업기간</h4>
                <span>{projectInfo.date_range}</span>
              </li>
            )}
            {projectInfo?.app_types && (
              <li>
                <h4>형태</h4>
                <span>{projectInfo.app_types.join(', ')}</span>
              </li>
            )}
            {projectInfo?.positions && (
              <li>
                <h4>역할</h4>
                <span>{projectInfo.positions.join(', ')}</span>
              </li>
            )}
            {projectInfo?.front_stacks && (
              <li>
                <h4>프론트 스택</h4>
                <span>{projectInfo.front_stacks.join(', ')}</span>
              </li>
            )}
            {projectInfo?.back_stacks && (
              <li>
                <h4>백 스택</h4>
                <span>{projectInfo.back_stacks.join(', ')}</span>
              </li>
            )}
            {projectInfo?.stylings && (
              <li>
                <h4>스타일링</h4>
                <span>{projectInfo.stylings.join(', ')}</span>
              </li>
            )}
            {projectInfo?.state_manages && (
              <li>
                <h4>상태관리</h4>
                <span>{projectInfo.state_manages.join(', ')}</span>
              </li>
            )}
            {projectInfo?.bundlers && (
              <li>
                <h4>빌드</h4>
                <span>{projectInfo.bundlers.join(', ')}</span>
              </li>
            )}
            {projectInfo?.dbs && (
              <li>
                <h4>DB</h4>
                <span>{projectInfo.dbs.join(', ')}</span>
              </li>
            )}
            {projectInfo?.distributions && (
              <li>
                <h4>배포</h4>
                <span>{projectInfo.distributions.join(', ')}</span>
              </li>
            )}
            {projectInfo?.collaboration_tools && (
              <li>
                <h4>협업툴</h4>
                <span>{projectInfo.collaboration_tools.join(', ')}</span>
              </li>
            )}
          </ProjectDetailUl>
        </ProjectSection>
        <ProjectSection title="목표">
          <CommonUl>
            {projectInfo.purposes.map((purpose, index) => (
              <li key={index}>{purpose}</li>
            ))}
          </CommonUl>
        </ProjectSection>
        {projectInfo?.learing_summary && projectInfo?.learnings && (
          <ProjectSection title="러닝포인트">
            <div className="text-sm whitespace-pre-line mb-4">
              {projectInfo.learing_summary}
            </div>
            <CommonUl>
              {projectInfo.learnings.map((learing, index) => (
                <li key={index}>{learing}</li>
              ))}
            </CommonUl>
          </ProjectSection>
        )}
        {projectInfo.website_link && (
          <ProjectSection title="보러가기">
            <a
              href={projectInfo.website_link}
              target="_blank"
              className="inline-block bg-[#465981] hover:bg-[#4f6591] text-white font-bold text-xs px-5 py-2 rounded-full transition-all"
              rel="noreferrer">
              페이지 보기
            </a>
            {projectInfo?.requireds && (
              <CommonUl className="mt-4">
                {projectInfo.requireds.map((required, index) => (
                  <li key={index}>{required}</li>
                ))}
              </CommonUl>
            )}
          </ProjectSection>
        )}
      </div>
    </ModalBody>
  );
}

interface ProjectSectionProps extends React.ComponentPropsWithoutRef<'div'> {
  title: string;
  className?: string;
  children: React.ReactNode;
}

function ProjectSection({
  title,
  className,
  children,
  ...props
}: ProjectSectionProps) {
  return (
    <div
      className={classNames('grid grid-cols-12 gap-x-5 mb-10', className)}
      {...props}>
      <div className="col-span-12 md:col-span-3 mb-4 md:mb-0">
        <h3 className="text-white text-xl font-bold">{title}</h3>
      </div>
      <div className="col-span-12 md:col-span-9 text-main-gray">{children}</div>
    </div>
  );
}
