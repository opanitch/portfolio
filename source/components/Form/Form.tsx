import React, { FunctionComponent } from 'react';

import * as STATUSES from 'CONSTANTS/status';
import { validateForm } from './form-helpers';

import EmptyView from './FormEmpty';
import FailedView from './FormFailure';
import FormHeader from './FormHeader';
// import LoadingView from './FormLoading';
import SuccessView from './FormSuccess';
import { FormConfigType, FormStateProps, FormStateSwitcher } from './types';

export const FormSwitcher = <Props extends FormStateProps<any>>({
  FormEdit,
  FormEmpty = EmptyView,
  FormFailure = FailedView,
  // FormLoading = LoadingView,
  FormSuccess = SuccessView,
}: FormStateSwitcher<Props>): FunctionComponent<Props> => {
  return (props: Props) => {
    const { status } = props;

    console.log('FORM SWITCHER');
    console.log(props);
    console.log(status);

    switch (status) {
      case STATUSES.EMPTY:
        return <FormEmpty {...props} />;
      case STATUSES.ERROR:
        return <FormFailure {...props} />;
      // case STATUSES.LOADING:
      //   return <FormLoading {...props} />;
      case STATUSES.READY:
        return <FormEdit {...props} />;
      case STATUSES.SUCCESS:
        return <FormSuccess {...props} />;
      default:
        return <div></div>;
    }
  };
};

const Form: FunctionComponent<FormConfigType> = ({
  className: parentClasses,
  FormBody,
  status,
  viewState,
}) => {
  const { actions, description, id, title } = viewState;
  const { onChange, onSubmit } = actions;

  return (
    <form
      className={parentClasses}
      id={id}
      onChange={onChange}
      onSubmit={(e) => {
        e.preventDefault();

        validateForm(e) && onSubmit(e);
      }}
      noValidate
    >
      {(description || title) && (
        <FormHeader title={title} description={description} />
      )}
      <FormBody status={status} viewState={viewState} />
    </form>
  );
};

export default Form;
