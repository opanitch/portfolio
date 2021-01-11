import React, { FunctionComponent } from 'react';
import classnames from 'classnames';

import Label from './Label';

type TextInputProps = JSX.IntrinsicElements['input'] & {
  id: string;
  labelPosition?: string;
  labelText?: string;
};

export enum LABEL_POSITION {
  LEFT = 'LEFT',
  TOP_LEFT = 'TOP_LEFT',
}

const TextInput: FunctionComponent<TextInputProps> = ({
  className: parentClasses,
  id,
  labelPosition = LABEL_POSITION.TOP_LEFT,
  labelText,
  ...props
}) => {
  return (
    <div
      className={classnames(
        'flex',
        {
          ['flex-row']: labelPosition === LABEL_POSITION.LEFT,
          ['flex-col']: labelPosition === LABEL_POSITION.TOP_LEFT,
        },
        parentClasses
      )}
    >
      {labelText && <Label htmlFor={id} text={labelText} />}
      <input
        id={id}
        className="border-gray-300 border-1"
        type="text"
        {...props}
      />
    </div>
  );
};

export default TextInput;
