import {useEffect, useRef, useState} from 'react';
import ReactDOM from 'react-dom';

interface PortalProps {
  selector?: string;
  onRender?(element: HTMLElement): void;
  children: React.ReactNode;
}

export default function Portal({
  selector = '#root',
  onRender,
  children,
}: PortalProps) {
  const [element, setElement] = useState<HTMLElement>();
  const onRenderRef = useRef(onRender);

  useEffect(() => {
    const elem = document.querySelector(selector) as HTMLElement;

    if (elem) {
      setElement(elem);
    }
  }, [selector]);

  useEffect(() => {
    onRenderRef.current = onRender;
  }, [onRender]);

  useEffect(() => {
    if (element) {
      onRenderRef.current?.(element);
    }
  }, [element]);

  if (!element) {
    return null;
  }

  return ReactDOM.createPortal(children, element);
}
