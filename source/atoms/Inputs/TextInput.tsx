import React, { FunctionComponent, useState } from 'react';
import classnames from 'classnames';

import { getRegExp } from 'Components/Form/form-helpers';

import Label from './Label';
import { InputProps } from './types';

export enum LabelPosition {
  LEFT = 'LEFT',
  TOP_LEFT = 'TOP_LEFT',
}

const TextInput: FunctionComponent<InputProps> = ({
  className: parentClasses,
  disabled,
  errorText,
  id,
  labelPosition = LabelPosition.TOP_LEFT,
  labelText,
  pattern,
  regex,
  required,
  ...props
}) => {
  const RegExpPattern = pattern || (regex && getRegExp(regex)?.pattern);
  const [isSelected, setSelected] = useState(false);
  const [error, showError] = useState(false);

  return (
    <div
      className={classnames(
        'flex',
        {
          ['flex-row']: labelPosition === LabelPosition.LEFT,
          ['flex-col']: labelPosition === LabelPosition.TOP_LEFT,
        },
        parentClasses
      )}
    >
      {labelText && (
        <Label
          className={classnames({
            ['mb-1']: labelPosition === LabelPosition.TOP_LEFT,
          })}
          htmlFor={id}
          required={required}
          text={labelText}
        />
      )}
      <input
        className="p-2 border-gray-300 border-1"
        disabled={disabled}
        id={id}
        onBlur={(e) => {
          e.target.form?.checkValidity();
        }}
        onChange={() => error && showError(false)}
        onFocus={() => setSelected(true)}
        onInvalid={(e) => {
          isSelected && showError(true);
        }}
        pattern={`${RegExpPattern}`}
        required={required}
        title="{{@ cms.contact.form.validation.names @}}"
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
