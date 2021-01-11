import React, { FunctionComponent } from 'react';
import classnames from 'classnames';

type FormFooterProps = JSX.IntrinsicElements['div'];

const FormFooter: FunctionComponent<FormFooterProps> = ({
  children,
  className: parentClasses,
}) => {
  return <div className={classnames('', parentClasses)}>{children}</div>;
};

export default FormFooter;
