import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { FullWidthContainerProps } from './full-width-container.interfaces';

const FullWidthContainer: FunctionComponent<FullWidthContainerProps> = ({
  children,
  childClasses,
  className: parentClasses,
  ...props
}) => {
  return (
    <div className={classnames(parentClasses, 'w-full')} {...props}>
      {children && (
        <div className={classnames(childClasses, 'container')}>{children}</div>
      )}
    </div>
  );
};

export default FullWidthContainer;
