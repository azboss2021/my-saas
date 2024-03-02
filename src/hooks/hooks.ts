import { HTMLFactory, MutableRefObject, useEffect, useState } from "react";

export const useIsVisible = ({
  ref,
}: {
  ref: MutableRefObject<Element | null>;
}) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    });

    observer.observe(ref.current!);

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
};
