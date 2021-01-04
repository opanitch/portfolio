import React, { FunctionComponent, HTMLAttributes, ReactNode } from 'react';
import classnames from 'classnames';

interface RenderFunctionArguments {
  ChildContainer: typeof ChildContainer;
}

interface FullWidthContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: (a: RenderFunctionArguments) => ReactNode;
}

const ChildContainer: FunctionComponent<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className: parentClassNames,
  ...props
}) => (
  <div className={classnames(parentClassNames, 'container')} {...props}>
    {children}
  </div>
);

const FullWidthContainer: FunctionComponent<FullWidthContainerProps> = ({
  children,
  className: parentClasses,
  ...props
}) => {
  return (
    <div className={'w-full'} {...props}>
      {children && children({ ChildContainer })}
    </div>
  );
};

export default FullWidthContainer;
