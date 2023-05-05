import {RxHamburgerMenu} from 'react-icons/rx';
import {
  AiFillGithub,
  AiOutlineLinkedin,
  AiOutlineInstagram,
} from 'react-icons/ai';
import tw, {styled, css} from 'twin.macro';

const SocialIconLi = styled.li(() => [
  tw`w-10 h-10 flex justify-center items-center rounded-full`,
  css`
    background-color: rgba(0, 0, 0, 0.2);
    a {
      ${tw`w-10 h-10 flex justify-center items-center`}
    }
    svg {
      ${tw`text-main-gray text-xl transition-all`}
    }
    &:hover {
      svg {
        ${tw`text-blue-300`}
      }
    }
  `,
]);

interface HeaderProps {
  onMenuClick(): void;
}

export default function Header({onMenuClick}: HeaderProps) {
  return (
    <header className="pt-4 mb-4">
      <div className="w-full h-full flex justify-center relative">
        <div
          className="absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer"
          onClick={onMenuClick}>
          <RxHamburgerMenu className="text-white text-2xl" />
        </div>
        <ul className="flex gap-x-4">
          <SocialIconLi>
            <a href="https://github.com/SeogJongYu" target="_blank">
              <AiFillGithub />
            </a>
          </SocialIconLi>
          <SocialIconLi>
            <a
              href="https://linkedin.com/in/seogjong-yu-37510b206/"
              target="_blank">
              <AiOutlineLinkedin />
            </a>
          </SocialIconLi>
          <SocialIconLi>
            <a href="https://https://www.instagram.com/mni_sj/" target="_blank">
              <AiOutlineInstagram />
            </a>
          </SocialIconLi>
        </ul>
      </div>
    </header>
  );
}
