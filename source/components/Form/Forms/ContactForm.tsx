import React, { ReactNode, useState } from 'react';
// import classnames from 'classnames';

import * as REGEX_NAMES from 'CONSTANTS/regex';

import { TextAreaInput, TextInput } from 'Atoms';
import Button, { ButtonType } from 'Atoms/Button/Button';

import Form from '../Form';
import { submitForm } from '../form-helpers';

const ContactForm = () => {
  const [isValid, setValidity] = useState(false);
  const canSubmit = isValid; // to extend for future `isDirty` or similar

  return (
    <Form
      className="mt-5"
      description="{{@ cms.contact.form.description @}}"
      id="contact-form"
      formActions={
        <Button
          buttonType={ButtonType.PRIMARY}
          disabled={!canSubmit}
          type="submit"
        >{`{{@ cms.site.common.submit @}}`}</Button>
      }
      onChange={(e) => {
        setValidity(e.target.form.checkValidity());
      }}
      onSubmit={submitForm}
    >
      <div className="flex flex-col mb-2 md:flex-row md:justify-between">
        <TextInput
          className="w-full mb-2 md:w-1/2 md:pr-1"
          errorText="{{@ cms.contact.form.error.names @}}"
          id="firstName"
          labelText="{{@ cms.contact.form.inputs.first-name.label @}}"
          placeholder="{{@ cms.contact.form.inputs.first-name.placeholder @}}"
          required={true}
          regex={REGEX_NAMES.NAME}
          title="{{@ cms.contact.form.validation.names @}}"
        />
        <TextInput
          className="w-full mb-2 md:w-1/2 md:pl-1"
          errorText="{{@ cms.contact.form.error.names @}}"
          id="lastName"
          labelText="{{@ cms.contact.form.inputs.last-name.label @}}"
          placeholder="{{@ cms.contact.form.inputs.last-name.placeholder @}}"
          required={true}
          regex={REGEX_NAMES.NAME}
          title="{{@ cms.contact.form.validation.names @}}"
        />
      </div>
      <div className="flex flex-col mb-2 md:flex-row md:justify-between md:items-start">
        <TextInput
          className="w-full mb-2 md:w-1/2 md:pr-1"
          errorText="{{@ cms.contact.form.error.email @}}"
          id="emailAddress"
          labelText="{{@ cms.contact.form.inputs.email.label @}}"
          placeholder="{{@ cms.contact.form.inputs.email.placeholder @}}"
          regex={REGEX_NAMES.EMAIL}
          required={true}
          title="{{@ cms.contact.form.validation.email @}}"
          type="email"
        />
        <TextInput
          className="w-full mb-2 md:w-1/2 md:pl-1"
          errorText="{{@ cms.contact.form.error.phone @}}"
          id="phoneNumber"
          labelText="{{@ cms.contact.form.inputs.phone-number.label @}}"
          placeholder="{{@ cms.contact.form.inputs.phone-number.placeholder @}}"
          regex={REGEX_NAMES.PHONE}
          required={false}
          title="{{@ cms.contact.form.validation.phone @}}"
          type="tel"
        />
      </div>
      <TextAreaInput
        id="comment"
        errorText="{{@ cms.contact.form.error.comments @}}"
        labelText="{{@ cms.contact.form.inputs.message.label @}}"
        placeholder="{{@ cms.contact.form.inputs.message.placeholder @}}"
      />
    </Form>
  );
};

export default ContactForm;
