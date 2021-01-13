import React, { FunctionComponent } from 'react';

type FormFooterProps = JSX.IntrinsicElements['div'];

const FormFooter: FunctionComponent<FormFooterProps> = ({
  children,
  className: parentClasses,
}) => {
  return <div className={parentClasses}>{children}</div>;
};

export default FormFooter;
