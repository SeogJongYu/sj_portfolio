import tw, {styled, css} from 'twin.macro';
import classNames from 'classnames';
import {HTMLAttributes, useEffect, useRef} from 'react';
import {TiDelete} from 'react-icons/ti';
import {useClickAway, useLockBodyScroll, useToggle} from 'react-use';
import {motion} from 'framer-motion';

import Portal from './Portal';

export const FullBackdrop = styled.div<{backgroundColor?: string}>(() => [
  tw`w-full h-full fixed top-0 right-0 left-0 bottom-0 z-[100]`,
  css`
    background-color: rgba(0, 0, 0, 0.5);
  `,
]);

export const ModalLayer = styled(motion.div)(() => [
  tw`w-full md:w-3/4 md:max-w-[815px] bg-main-navy-light absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg`,
  css`
    box-shadow: 0px 7px 18px rgba(0, 0, 0, 0.2);
    max-width: 90vw;
  `,
]);

export interface ModalBodyProps {
  onClose(): void;
  className?: HTMLAttributes<HTMLDivElement>['className'];
  children?: React.ReactNode;
}

export function ModalBody({onClose, className, children}: ModalBodyProps) {
  const layerRef = useRef<HTMLDivElement | null>(null);
  const [locked, toggleLocked] = useToggle(false);

  useLockBodyScroll(locked);

  useClickAway(layerRef, () => {
    onClose();
  });

  useEffect(() => toggleLocked(), [toggleLocked]);

  return (
    <Portal>
      <FullBackdrop>
        <ModalLayer
          ref={layerRef}
          initial={{y: '-45%', x: '-50%', opacity: 0}}
          whileInView={{y: '-50%', x: '-50%', opacity: 1}}
          transition={{duration: 0.2}}>
          <div className={classNames('w-full h-full pt-8 relative', className)}>
            <button
              className="absolute top-5 right-5 p-1 cursor-pointer z-10"
              onClick={onClose}>
              <TiDelete className="text-white text-3xl" />
            </button>
            <div className="min-h-[500px] max-h-[85vh] overflow-y-auto">
              <div className="flex-1">{children}</div>
            </div>
          </div>
        </ModalLayer>
      </FullBackdrop>
    </Portal>
  );
}
