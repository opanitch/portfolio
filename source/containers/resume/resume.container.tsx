import React, { FunctionComponent, useEffect, useRef } from 'react';
import ResumeHTML from 'resume/resume.html';

export const ResumeContainer: FunctionComponent = () => {
  // plugins
  const iFrameRef = useRef<HTMLIFrameElement>(null);

  // utils
  const checkContentHeight = (): void => {
    const iFrame = iFrameRef.current;

    if (iFrame) {
      // get iFrame content size
      const contentHeight = iFrame.contentWindow?.document.body.offsetHeight;

      // only set height if we have a number
      if (contentHeight) {
        // set iFrame height
        iFrame.style.height = `${contentHeight + 80}px`;
      }
    }
  };

  // side effects
  useEffect(() => {
    // keep track of content height
    window.addEventListener('resize', checkContentHeight, {
      passive: true,
    });

    // clean up on un-mount
    return () => {
      window.removeEventListener('resize', checkContentHeight);
    };
  }, []);

  // render
  return (
    <iframe
      className="w-full"
      ref={iFrameRef}
      src={ResumeHTML}
      onLoad={checkContentHeight}
    />
  );
};
