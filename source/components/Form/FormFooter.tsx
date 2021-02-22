import React, { FunctionComponent } from 'react';
import classnames from 'classnames';

const FormFooter: FunctionComponent<DivType> = ({
  children,
  className: parentClasses,
}) => {
  return (
    <div className={classnames('mt-3 flex', parentClasses)}>{children}</div>
  );
};

export default FormFooter;
