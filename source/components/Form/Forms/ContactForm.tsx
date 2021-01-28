import React, { ReactNode, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
// import classnames from 'classnames';

import * as REGEX_NAMES from 'CONSTANTS/regex';

import { TextAreaInput, TextInput } from 'Atoms';
import Button, { ButtonType } from 'Atoms/Button/Button';

import Form from '../Form';
import { FormInputsType, submitForm } from '../form-helpers';

const ContactForm = () => {
  const [isValid, setValidity] = useState(false);
  const [recaptchaValue, setReCAPTCHA] = useState(false);
  const canSubmit = isValid && recaptchaValue;

  return (
    <Form
      className="mt-5"
      description="{{@ cms.contact.form.description @}}"
      id="contact-form"
      formActions={
        <div className="flex items-center justify-between">
          <ReCAPTCHA
            sitekey="6LcSXuwSAAAAAAGr0brnXFcEiS0bDLEW-4t3NFja"
            onChange={(value) => {
              setReCAPTCHA(!!value);
            }}
            theme="dark"
          />
          <div className="flex items-center justify-center flex-1">
            <Button
              buttonType={ButtonType.PRIMARY}
              disabled={!canSubmit}
              type="submit"
            >{`{{@ cms.site.common.submit @}}`}</Button>
          </div>
        </div>
      }
      onChange={(e) => {
        const updatedInput = e.target as FormInputsType;
        const form = updatedInput.form;

        form && setValidity(form.checkValidity());
      }}
      onSubmit={submitForm}
    >
      <div className="flex flex-col mb-2 md:flex-row md:justify-between">
        <TextInput
          className="w-full mb-2 md:w-1/2 md:pr-1"
          errorText="{{@ cms.contact.form.inputs.first-name.error @}}"
          id="firstName"
          labelText="{{@ cms.contact.form.inputs.first-name.label @}}"
          placeholder="{{@ cms.contact.form.inputs.first-name.placeholder @}}"
          required={true}
          regex={REGEX_NAMES.NAME}
          title="{{@ cms.contact.form.inputs.first-name.validation @}}"
        />
        <TextInput
          className="w-full mb-2 md:w-1/2 md:pl-1"
          errorText="{{@ cms.contact.form.inputs.last-name.error @}}"
          id="lastName"
          labelText="{{@ cms.contact.form.inputs.last-name.label @}}"
          placeholder="{{@ cms.contact.form.inputs.last-name.placeholder @}}"
          required={true}
          regex={REGEX_NAMES.NAME}
          title="{{@ cms.contact.form.inputs.last-name.validation @}}"
        />
      </div>
      <div className="flex flex-col mb-2 md:flex-row md:justify-between md:items-start">
        <TextInput
          className="w-full mb-2 md:w-1/2 md:pr-1"
          errorText="{{@ cms.contact.form.inputs.email.error @}}"
          id="emailAddress"
          labelText="{{@ cms.contact.form.inputs.email.label @}}"
          placeholder="{{@ cms.contact.form.inputs.email.placeholder @}}"
          regex={REGEX_NAMES.EMAIL}
          required={true}
          title="{{@ cms.contact.form.inputs.email.validation @}}"
          type="email"
        />
        <TextInput
          className="w-full mb-2 md:w-1/2 md:pl-1"
          errorText="{{@ cms.contact.form.inputs.phone-number.error @}}"
          id="phoneNumber"
          labelText="{{@ cms.contact.form.inputs.phone-number.label @}}"
          placeholder="{{@ cms.contact.form.inputs.phone-number.placeholder @}}"
          regex={REGEX_NAMES.PHONE}
          required={false}
          title="{{@ cms.contact.form.inputs.phone-number.validation @}}"
          type="tel"
        />
      </div>
      <TextAreaInput
        id="comment"
        errorText="{{@ cms.contact.form.inputs.message.error @}}"
        labelText="{{@ cms.contact.form.inputs.message.label @}}"
        placeholder="{{@ cms.contact.form.inputs.message.placeholder @}}"
      />
    </Form>
  );
};

export default ContactForm;
