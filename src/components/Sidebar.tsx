import classNames from 'classnames';
import tw, {styled, css} from 'twin.macro';
import {BsFillPersonFill} from 'react-icons/bs';
import {GiFilmProjector} from 'react-icons/gi';
import {CgFileDocument} from 'react-icons/cg';
import {BiPhoneCall} from 'react-icons/bi';
import {ImOffice} from 'react-icons/im';

interface SidebarProps {
  isActive: boolean;
}

const NavLi = styled.li(() => [
  tw`text-main-gray hover:text-white flex flex-col items-center cursor-pointer transition duration-150`,
  css`
    svg {
      ${tw`text-main-gray text-2xl transition duration-150`}
    }
    span {
      ${tw`text-xs mt-1`}
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

export default function Sidebar({isActive}: SidebarProps) {
  return (
    <div
      // style={{transition: '0.2s all'}}
      className={classNames(
        'fixed top-1/2 transform -translate-y-1/2 bg-main-navy transition-all ease-in-out duration-300',
        {
          'left-4': isActive,
          '-left-24': !isActive,
        },
      )}>
      <nav>
        <ul
          className="px-2 py-4 rounded-xl flex flex-col gap-y-8"
          css={{backgroundColor: 'rgba(0,0,0,0.1)'}}>
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
            <ImOffice className="w-5 h-auto" />
            <span>COMPANY</span>
          </NavLi>
          <NavLi onClick={() => scrollToTarget('projects')}>
            <GiFilmProjector />
            <span>PROJECTS</span>
          </NavLi>
          <NavLi>
            <CgFileDocument />
            <span>RESUME</span>
          </NavLi>
          <NavLi>
            <BiPhoneCall />
            <span>CONTACT</span>
          </NavLi>
        </ul>
      </nav>
    </div>
  );
}
