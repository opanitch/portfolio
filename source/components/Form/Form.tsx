import React, { FunctionComponent, ReactNode } from 'react';

import { submitForm, validateForm } from './form-helpers';

import FormFooter from './FormFooter';
import FormHeader from './FormHeader';

export type FormType = JSX.IntrinsicElements['form'];

type FormProps = FormType & {
  description?: string;
  formActions: ReactNode;
  id: string;
  title?: string;
};

const Form: FunctionComponent<FormProps> = ({
  children,
  className: parentClasses,
  description,
  formActions,
  id,
  onSubmit = submitForm,
  title,
  ...props
}) => {
  return (
    <form
      className={parentClasses}
      id={id}
      {...props}
      onSubmit={(e) => {
        e.preventDefault();

        validateForm(e) && onSubmit(e);
      }}
      noValidate
    >
      {(description || title) && (
        <FormHeader title={title} description={description} />
      )}
      <div className="my-3">{children}</div>
      {formActions && <FormFooter>{formActions}</FormFooter>}
    </form>
  );
};

export default Form;
