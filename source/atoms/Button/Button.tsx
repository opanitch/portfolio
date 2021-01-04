import React, { FunctionComponent } from 'react';
import classnames from 'classnames';

type ButtonProps = JSX.IntrinsicElements['button'];

const Button: FunctionComponent<ButtonProps> = ({
  className: parentClasses,
  ...props
}) => {
  return <button className={classnames('', parentClasses)} {...props} />;
};

export default Button;
