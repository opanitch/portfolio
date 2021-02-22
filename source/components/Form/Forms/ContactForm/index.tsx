import React, { FormEvent, SyntheticEvent, useEffect, useState } from 'react';
import { init } from 'emailjs-com';

import { sendEmail } from 'API/data/contact/send-email';

import { USER_ID } from 'CONSTANTS/emailjs';
import * as STATUSES from 'CONSTANTS/status';

import { FormInputsType } from '../../form-helpers';
import Form, { FormSwitcher } from '../../Form';
import { FormProps } from '../../types';

import EditContactForm from './states/EditForm';

export interface ContactFormViewType extends FormProps {
  recaptcha: {
    recaptchaValue: boolean;
    setReCAPTCHA: any;
  };
  validation: {
    isValid: boolean;
    setValidity: any;
  };
}

const ContactForm = ({ className: parentClasses }: FormType): JSX.Element => {
  const [formStatus, setStatus] = useState(STATUSES.EMPTY);
  const [isValid, setValidity] = useState(false);
  const [recaptchaValue, setReCAPTCHA] = useState(false);

  useEffect(() => {
    console.log('ContactForm Rendered');
    setStatus(STATUSES.READY);
    // Initialize Email API - https://dashboard.emailjs.com/admin/integration/npm
    init(USER_ID);
  }, []);

  const viewState: ContactFormViewType = {
    actions: {
      onChange: (event: FormEvent) => {
        const updatedInput = event.target as FormInputsType;
        const form = updatedInput.form;

        form?.checkValidity();

        // form && setValidity(form.checkValidity());
      },
      onSubmit: (e: SyntheticEvent) => sendEmail(e, setStatus),
    },
    description: '{{@ cms.contact.form.description @}}',
    id: 'contact-me',
    recaptcha: {
      recaptchaValue,
      setReCAPTCHA,
    },
    validation: {
      isValid,
      setValidity,
    },
  };

  return (
    <Form
      className={parentClasses}
      FormBody={FormSwitcher({
        FormEdit: EditContactForm,
      })}
      status={formStatus}
      viewState={viewState}
    />
  );
};

export default ContactForm;
