import React, { FunctionComponent, ReactNode } from 'react';
import classnames from 'classnames';

import FormFooter from './FormFooter';
import FormHeader from './FormHeader';

type FormProps = JSX.IntrinsicElements['form'] & {
  description?: string;
  formActions: ReactNode;
  id: string;
  title?: string;
};

const TextInput: FunctionComponent<FormProps> = ({
  children,
  className: parentClasses,
  description,
  formActions,
  id,
  title,
}) => {
  return (
    <form className={classnames('', parentClasses)} id={id}>
      {(description || title) && (
        <FormHeader title={title} description={description} />
      )}
      <div className="my-3">{children}</div>
      {formActions && <FormFooter>{formActions}</FormFooter>}
    </form>
  );
};

export default TextInput;
