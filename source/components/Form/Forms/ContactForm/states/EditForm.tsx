import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import { GOOGLE_RECAPTCHA_KEY } from 'CONSTANTS/emailjs';
import * as REGEX_NAMES from 'CONSTANTS/regex';

import { TextAreaInput, TextInput } from 'Atoms';
import Button, { ButtonType } from 'Atoms/Button/Button';

import FormFooter from 'Components/Form/FormFooter';
import { FormStateProps } from 'Components/Form/types';

import { ContactFormViewType } from '../index';

const EditContactForm = ({
  viewState,
}: FormStateProps<ContactFormViewType>): JSX.Element => {
  const { validation, recaptcha } = viewState;
  const { recaptchaValue, setReCAPTCHA } = recaptcha;
  const { isValid } = validation;
  const canSubmit = isValid && recaptchaValue;

  return (
    <div className="mt-3">
      <div>
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
            type="text"
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
            type="text"
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
      </div>
      <FormFooter className="flex-row items-center justify-between">
        <div className="flex items-start justify-start w-2/3 overflow-x-hidden">
          <ReCAPTCHA
            badge="bottomleft"
            onChange={(value) => {
              setReCAPTCHA(!!value);
            }}
            sitekey={GOOGLE_RECAPTCHA_KEY}
            size="normal"
            theme="dark"
          />
        </div>
        <div className="flex items-center justify-end flex-1 sm:justify-center md:justify-end lg:justify-center">
          <Button
            buttonType={ButtonType.PRIMARY}
            disabled={!canSubmit}
            type="submit"
          >{`{{@ cms.site.common.submit @}}`}</Button>
        </div>
      </FormFooter>
    </div>
  );
};

export default EditContactForm;
