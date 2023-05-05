import {HTMLMotionProps, motion} from 'framer-motion';

import {SectionWithMotion} from '~/pages/home/Home';

interface ProjectProps {
  sectionMotions?: HTMLMotionProps<'section'>;
}

export default function Project({sectionMotions}: ProjectProps) {
  return (
    <SectionWithMotion {...sectionMotions}>
      <h2>Projects</h2>
      <div className="text-main-gray">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
        voluptatibus natus corporis magnam nobis! Nemo deleniti dignissimos
        cupiditate, cumque, possimus expedita optio molestias explicabo
        molestiae natus enim, ipsam nulla eligendi.
        <br />
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
        voluptatibus natus corporis magnam nobis! Nemo deleniti dignissimos
        cupiditate, cumque, possimus expedita optio molestias explicabo
        molestiae natus enim, ipsam nulla eligendi.
        <br />
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
        voluptatibus natus corporis magnam nobis! Nemo deleniti dignissimos
        cupiditate, cumque, possimus expedita optio molestias explicabo
        molestiae natus enim, ipsam nulla eligendi.
        <br />
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
        voluptatibus natus corporis magnam nobis! Nemo deleniti dignissimos
        cupiditate, cumque, possimus expedita optio molestias explicabo
        molestiae natus enim, ipsam nulla eligendi.
        <br />
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
        voluptatibus natus corporis magnam nobis! Nemo deleniti dignissimos
        cupiditate, cumque, possimus expedita optio molestias explicabo
        molestiae natus enim, ipsam nulla eligendi.
        <br />
      </div>
    </SectionWithMotion>
  );
}
