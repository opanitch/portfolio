import React, { FunctionComponent } from 'react';
import classnames from 'classnames';

type LabelProps = JSX.IntrinsicElements['label'] & {
  htmlFor: string;
  text: string;
};

const Label: FunctionComponent<LabelProps> = ({
  className: parentClasses,
  htmlFor,
  text,
  ...props
}) => {
  return (
    <label
      className={classnames('', parentClasses)}
      htmlFor={htmlFor}
      {...props}
    >
      {text}
    </label>
  );
};

export default Label;
