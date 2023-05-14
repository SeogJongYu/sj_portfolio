import classNames from 'classnames';
import tw, {styled, css} from 'twin.macro';
import {BsFillPersonFill} from 'react-icons/bs';
import {GiFilmProjector} from 'react-icons/gi';
import {BiPhoneCall} from 'react-icons/bi';
import {ImOffice} from 'react-icons/im';

const NavLi = styled.li(() => [
  tw`text-main-gray hover:text-white flex flex-col items-center cursor-pointer transition duration-150`,
  css`
    svg {
      ${tw`text-main-gray text-2xl transition duration-150`}
    }
    span {
      ${tw`text-xs mt-1.5`}
    }
    &:hover {
      svg {
        ${tw`text-white`}
      }
    }
  `,
]);

function scrollToTarget(target: string) {
  const element = document.getElementById(target);

  element?.scrollIntoView({behavior: 'smooth'});
}

export default function Sidebar() {
  return (
    <div
      className={classNames(
        'fixed bottom-0 left-0 w-full h-auto border-t border-main-orange md:top-1/2 md:left-4 md:w-auto md:h-full md:border-none transform md:-translate-y-1/2 bg-main-navy z-10 transition-all ease-in-out duration-300',
      )}>
      <nav className="block h-auto md:flex md:h-full md:items-center">
        <ul className="px-2 py-4 rounded-xl flex flex-row md:flex-col justify-around md:justify-start items-center md:gap-y-8">
          <NavLi
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              })
            }>
            <BsFillPersonFill />
            <span>PROFILE</span>
          </NavLi>
          <NavLi onClick={() => scrollToTarget('company')}>
            <ImOffice className="" />
            <span>COMPANY</span>
          </NavLi>
          <NavLi onClick={() => scrollToTarget('projects')}>
            <GiFilmProjector />
            <span>PROJECTS</span>
          </NavLi>
          <NavLi onClick={() => scrollToTarget('contact')}>
            <BiPhoneCall />
            <span>CONTACT</span>
          </NavLi>
        </ul>
      </nav>
    </div>
  );
}
