import React, { FunctionComponent, useState } from 'react';
import classnames from 'classnames';

import Label from './Label';

type TextInputProps = JSX.IntrinsicElements['textarea'] & {
  errorText?: string;
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
  errorText,
  id,
  labelPosition = LABEL_POSITION.TOP_LEFT,
  labelText,
  ...props
}) => {
  const [isSelected, setSelected] = useState(false);
  const [error, showError] = useState(false);

  return (
    <div
      className={classnames(
        'flex',
        {
          ['flex-row']: labelPosition === LABEL_POSITION.LEFT,
          ['flex-col']: labelPosition === LABEL_POSITION.TOP_LEFT,
        },
        {
          ['border-red-700 border-1']: error,
        },
        parentClasses
      )}
    >
      {labelText && (
        <Label
          className={classnames({
            ['mb-1']: labelPosition === LABEL_POSITION.TOP_LEFT,
          })}
          htmlFor={id}
          text={labelText}
        />
      )}
      <textarea
        id={id}
        className="p-2 border-gray-300 border-1"
        onBlur={(e) => {
          e.target.form?.checkValidity();
          setSelected(false);
        }}
        onChange={() => error && showError(false)}
        onFocus={() => setSelected(true)}
        onInvalid={() => isSelected && showError(true)}
        spellCheck={true}
        {...props}
      />
      {errorText && (
        <p
          className={classnames('ml-1 pt-1 text-scale-n2 text-red-700', {
            ['visually-hidden']: !error,
          })}
        >
          {errorText}
        </p>
      )}
    </div>
  );
};

export default TextInput;
