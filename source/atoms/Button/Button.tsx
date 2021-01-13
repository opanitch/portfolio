import React, { FunctionComponent } from 'react';
import classnames from 'classnames';

type ButtonProps = JSX.IntrinsicElements['button'] & {
  theme?: string;
};

export enum Theme {
  BASE = 'BASE',
  PRIMARY = 'PRIMARY',
}

const Button: FunctionComponent<ButtonProps> = ({
  className: parentClasses,
  theme = 'BASE',
  ...props
}) => {
  return (
    <button
      className={classnames(
        'block',
        {
          // Base State
          ['']: theme === Theme.BASE,
          ['px-4 py-2 bg-grey-12 border-2 border-white text-white rounded-md']:
            theme === Theme.PRIMARY,
        },
        {
          // Hover State
          ['']: theme === Theme.BASE,
          ['hover:bg-white hover:border-2 hover:border-grey-12 hover:text-grey-12']:
            theme === Theme.PRIMARY,
        },
        parentClasses
      )}
      {...props}
    />
  );
};

export default Button;
