import {HTMLMotionProps} from 'framer-motion';
import tw, {styled, css} from 'twin.macro';
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiFillGithub,
  AiOutlineLinkedin,
  AiOutlineInstagram,
} from 'react-icons/ai';

import {SectionWithMotion} from '~/pages/home/Home';

interface ContactProps {
  sectionMotions?: HTMLMotionProps<'section'>;
}

const ContactUl = styled.ul(() => [
  css`
    li {
      ${tw`mb-2 flex items-center`}
    }
    li > svg {
      ${tw`text-xl mr-3 text-white`}
    }
    li > span > a {
      ${tw`underline underline-offset-2`}
    }
  `,
]);

export default function Contact({sectionMotions}: ContactProps) {
  return (
    <SectionWithMotion {...sectionMotions} id="contact">
      <h2>Contact</h2>
      <div className="text-main-gray">
        <ContactUl>
          <li>
            <AiOutlineMail />
            <span>seogjongyu@gmail.com</span>
          </li>
          <li>
            <AiOutlinePhone />
            <span>010-7661-5589</span>
          </li>
          <li>
            <AiFillGithub />
            <span>
              <a
                href="https://github.com/SeogJongYu"
                target="_blank"
                rel="noreferrer">
                https://github.com/SeogJongYu
              </a>
            </span>
          </li>
          <li>
            <AiOutlineInstagram />
            <span>
              <a
                href="https://www.instagram.com/mni_sj/"
                target="_blank"
                rel="noreferrer">
                https://www.instagram.com/mni_sj/
              </a>
            </span>
          </li>
          <li>
            <AiOutlineLinkedin />
            <span>
              <a
                href="https://www.linkedin.com/in/seogjong-yu-37510b206/"
                target="_blank"
                rel="noreferrer">
                https://www.linkedin.com/in/seogjong-yu-37510b206/
              </a>
            </span>
          </li>
        </ContactUl>
        <div className="mt-4 text-right">
          <a
            href="https://github.com/SeogJongYu/sj_portfolio"
            target="_blank"
            className="inline-block bg-[#465981] hover:bg-[#4f6591] text-white font-bold text-xs px-5 py-2 rounded-full transition-all"
            rel="noreferrer">
            포트폴리오 저장소 보기
          </a>
        </div>
      </div>
    </SectionWithMotion>
  );
}
