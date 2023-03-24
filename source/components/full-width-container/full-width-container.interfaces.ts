import { HTMLAttributes, ReactNode } from 'react';

export interface FullWidthContainerProps
  extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  childClasses?: string;
}
