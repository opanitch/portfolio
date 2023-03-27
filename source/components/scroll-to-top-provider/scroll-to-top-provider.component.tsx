import React, {
  FunctionComponent,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import classnames from 'classnames';
import DownArrow from 'ASSETS/icons/chevron-down.svg';
import { Button } from 'Atoms';
import {
  Position,
  ScrollToTopContextProps,
  ScrollToTopProps,
} from './scroll-to-top-provider.interfaces';

export const ScrollToTopProvider: FunctionComponent<ScrollToTopProps> = ({
  children,
  position = Position.LEFT,
  scrollYTrigger = 10,
}) => {
  // component state
  const [pageYPosition, setPageYPosition] = useState(window.scrollY);
  const [showButton, setShowButton] = useState(false);

  // utils
  const handleViewportScroll = (): void => {
    setPageYPosition(window.scrollY);
  };

  // side effects
  useEffect(() => {
    // keep track of Y-axis scroll position
    window.addEventListener('scroll', handleViewportScroll, {
      passive: true,
    });

    // clean up on un-mount
    return () => {
      window.removeEventListener('scroll', handleViewportScroll);
    };
  }, []);

  useEffect(() => {
    // show button if scrolled beyond trigger position
    if (pageYPosition >= scrollYTrigger && !showButton) {
      setShowButton(true);
    }
    // hide button if above trigger position
    else if (pageYPosition < scrollYTrigger && showButton) {
      setShowButton(false);
    }
  }, [pageYPosition, scrollYTrigger, showButton]);

  const contextProps = {
    showButton,
    setShowButton,
  };

  // interactions
  const handleScrollToTop = (): void => {
    window.scrollTo(0, 0);
  };

  // render
  return (
    <ScrollToTopContext.Provider value={contextProps}>
      {children}
      {showButton && (
        <Button
          className={classnames(
            'fixed bg-primary-default bottom-2 md:bottom-3 lg:bottom-5',
            'hover:bg-primary-hover',
            position === Position.LEFT && 'left-2 md:left-3 lg:left-5',
            position === Position.RIGHT && 'right-2 md:right-3 lg:right-5'
          )}
          onClick={handleScrollToTop}
        >
          <DownArrow
            className="transform rotate-180"
            height="1.5em"
            width="1.5em"
          />
        </Button>
      )}
    </ScrollToTopContext.Provider>
  );
};

const ScrollToTopContext = createContext<ScrollToTopContextProps>(
  {} as ScrollToTopContextProps
);

export const useScrollToTopProvider = (): ScrollToTopContextProps => {
  return useContext(ScrollToTopContext);
};
