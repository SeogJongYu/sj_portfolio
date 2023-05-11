import {useRef, useState} from 'react';
import {IoMdPause, IoMdPlay} from 'react-icons/io';
import {Navigation, Pagination, Autoplay} from 'swiper';
import {Swiper, SwiperRef, SwiperSlide} from 'swiper/react';
import classNames from 'classnames';
import tw, {styled, css} from 'twin.macro';

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
      ${tw`mb-1`}
    }
  `,
]);

export default function ProjectDetailModal({
  onClose,
  projectInfo,
}: ProjectDetailModal) {
  const [activeLoop, setActiveLoop] = useState(true);
  const swiperRef = useRef<SwiperRef | null>(null);
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
        <div className="text-main-gray text-sm whitespace-pre-line mb-8">
          <p className="mb-4">{projectInfo.intro}</p>
          <CommonUl>
            {projectInfo.intro_list?.map((introItem, index) => (
              <li key={index}>{introItem}</li>
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
            {projectInfo?.position && (
              <li>
                <h4>역할</h4>
                <span>{projectInfo.position.join(', ')}</span>
              </li>
            )}
            {projectInfo?.language && (
              <li>
                <h4>언어</h4>
                <span>{projectInfo.language.join(', ')}</span>
              </li>
            )}
            {projectInfo?.styling && (
              <li>
                <h4>스타일링</h4>
                <span>{projectInfo.styling.join(', ')}</span>
              </li>
            )}
            {projectInfo?.state_manage && (
              <li>
                <h4>상태관리</h4>
                <span>{projectInfo.state_manage.join(', ')}</span>
              </li>
            )}
            {projectInfo?.bundler && (
              <li>
                <h4>번들러</h4>
                <span>{projectInfo.bundler.join(', ')}</span>
              </li>
            )}
            {projectInfo?.distribution && (
              <li>
                <h4>배포</h4>
                <span>{projectInfo.distribution.join(', ')}</span>
              </li>
            )}
            {projectInfo?.collaboration_tool && (
              <li>
                <h4>협업툴</h4>
                <span>{projectInfo.collaboration_tool.join(', ')}</span>
              </li>
            )}
          </ProjectDetailUl>
        </ProjectSection>
        <ProjectSection title="목표">
          <CommonUl>
            {projectInfo.purpose_list.map((purpose, index) => (
              <li key={index}>{purpose}</li>
            ))}
          </CommonUl>
        </ProjectSection>
        {projectInfo?.learing_summary && projectInfo?.learning_list && (
          <ProjectSection title="러닝포인트">
            <div className="text-sm whitespace-pre-line mb-4">
              {projectInfo.learing_summary}
            </div>
            <CommonUl>
              {projectInfo.learning_list.map((learing, index) => (
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
            {projectInfo?.required_list && (
              <CommonUl className="mt-4">
                {projectInfo.required_list.map((requiredItem, index) => (
                  <li key={index}>{requiredItem}</li>
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
