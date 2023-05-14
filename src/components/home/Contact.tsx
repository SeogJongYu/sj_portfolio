import {HTMLMotionProps} from 'framer-motion';
import {useRef} from 'react';

import {SectionWithMotion} from '~/pages/home/Home';

interface ContactProps {
  sectionMotions?: HTMLMotionProps<'section'>;
}

export default function Contact({sectionMotions}: ContactProps) {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  return (
    <SectionWithMotion {...sectionMotions} id="contact">
      <h2>Contact</h2>
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
