import React, { FunctionComponent } from 'react';
import classnames from 'classnames';

import { Dictionary } from 'HELPERS/regex';

import Label from './Label';

type TextInputProps = JSX.IntrinsicElements['input'] & {
  disabled?: boolean;
  id: string;
  labelPosition?: string;
  labelText?: string;
  regex?: string;
};

export enum LABEL_POSITION {
  LEFT = 'LEFT',
  TOP_LEFT = 'TOP_LEFT',
}

const TextInput: FunctionComponent<TextInputProps> = ({
  className: parentClasses,
  disabled,
  id,
  labelPosition = LABEL_POSITION.TOP_LEFT,
  labelText,
  regex,
  ...props
}) => {
  const regexPattern = (regex && Dictionary[regex]) || regex;

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
      {labelText && (
        <Label
          className={classnames({
            ['mb-1']: labelPosition === LABEL_POSITION.TOP_LEFT,
          })}
          htmlFor={id}
          text={labelText}
        />
      )}
      <input
        id={id}
        className="p-2 border-gray-300 border-1"
        disabled={disabled}
        pattern={regexPattern}
        title="{{@ cms.contact.form.validation.names @}}"
        type="text"
        {...props}
      />
    </div>
  );
};

export default TextInput;
