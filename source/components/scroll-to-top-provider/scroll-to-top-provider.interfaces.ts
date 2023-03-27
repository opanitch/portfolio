import { ReactNode } from 'react';

// enums
export enum Position {
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}

// types
export interface ScrollToTopProps {
  children: ReactNode;
  position?: Position;
  scrollYTrigger?: number;
}

export interface ScrollToTopContextProps {
  showButton: boolean;
  setShowButton: (showButton: boolean) => void;
}
