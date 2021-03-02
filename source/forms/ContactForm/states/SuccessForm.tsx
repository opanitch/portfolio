import React, { FunctionComponent } from 'react';

import * as STATUSES from 'CONSTANTS/status';
import { createFormStatusEvent } from 'HOOKS/forms';

import Button, { ButtonType } from 'Atoms/Button/Button';

import FormBody from 'Components/Form/FormBody';
import FormFooter from 'Components/Form/FormFooter';
import FormHeader from 'Components/Form/FormHeader';
import { FormStateProps } from 'Components/Form/types';

import { ContactFormViewType } from '../types';

const FormSuccess: FunctionComponent<FormStateProps<ContactFormViewType>> = ({
  className: parentClasses,
  id,
  title,
}) => {
  return (
    <div id={id} className={parentClasses}>
      {title && <FormHeader title={title} />}
      <FormBody
        description={'{{@ cms.site.contact.form.success.description @}}'}
      >
        <p>{'{{@ cms.site.contact.form.success.message @}}'}</p>
      </FormBody>
      <FormFooter>
        <Button
          buttonType={ButtonType.PRIMARY}
          onClick={() =>
            window.dispatchEvent(createFormStatusEvent(STATUSES.READY))
          }
          type="button"
        >{`{{@ cms.site.common.reset @}}`}</Button>
      </FormFooter>
    </div>
  );
};

export default FormSuccess;
