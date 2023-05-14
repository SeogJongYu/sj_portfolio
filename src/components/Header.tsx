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

export default function Header() {
  return (
    <header className="pt-4 mb-4">
      <div className="w-full h-full flex justify-center">
        <ul className="flex gap-x-4">
          <SocialIconLi>
            <a
              href="https://github.com/SeogJongYu"
              target="_blank"
              rel="noreferrer">
              <AiFillGithub />
            </a>
          </SocialIconLi>
          <SocialIconLi>
            <a
              href="https://linkedin.com/in/seogjong-yu-37510b206/"
              target="_blank"
              rel="noreferrer">
              <AiOutlineLinkedin />
            </a>
          </SocialIconLi>
          <SocialIconLi>
            <a
              href="https://https://www.instagram.com/mni_sj/"
              target="_blank"
              rel="noreferrer">
              <AiOutlineInstagram />
            </a>
          </SocialIconLi>
        </ul>
      </div>
    </header>
  );
}
