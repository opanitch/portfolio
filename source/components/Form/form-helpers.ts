import { SyntheticEvent } from 'react';
import { send as emailSend } from 'emailjs-com';

import * as EMAILJS from 'CONSTANTS/emailjs';
import * as NODE_NAMES from 'CONSTANTS/node-names';
import * as REGEX_NAMES from 'CONSTANTS/regex';

type FormValuesType = {
  [key: string]: string;
};

type FormInputsType = HTMLInputElement | HTMLTextAreaElement;

interface RegexDictionaryEntry {
  flags: string;
  pattern: string;
}

type RegexDictionaryType = Record<string, RegexDictionaryEntry>;

export const RegexDictionary: RegexDictionaryType = {
  /* eslint-disable-next-line */
  [REGEX_NAMES.EMAIL]: {
    flags: 'g',
    pattern: `^([^<>()\\[\\]\\.,;:\\s@"](.[^<>()\\[\\]\\.,;:\\s@"]+)*)@(([a-zA-Z\\-0-9]+)\\.[a-zA-Z]{2,})$`,
  },
  [REGEX_NAMES.NAME]: {
    flags: 'gu',
    pattern: `^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$`,
  },
  /* eslint-disable-next-line */
  [REGEX_NAMES.PHONE]: {
    flags: 'g',
    pattern: `^(\\+\\d{1,2}\\s)?\\(?\\d{3}\\)?[\\s.-]?\\d{3}[\\s.-]?\\d{4}$`,
  },
};

export const createRegExp = (key: string, flags = ''): RegExp => {
  if (key.charAt(0) === '/') return new RegExp(key, flags);

  const RegEx = RegexDictionary[key];

  return RegEx && new RegExp(RegEx.pattern, RegEx.flags);
};

// const getFormDefaultValues = (form: HTMLFormElement) => {
//   const formInputs = getFormInputs(form) as FormInputsType[];

//   // Construct Object of form values based on { `id`: `value` } pairing.
//   return formInputs.reduce(
//     (values, input) => ({ ...values, [input.id]: input.defaultValue }),
//     {}
//   );
// };

const getFormInputs = (form: HTMLFormElement): Element[] => {
  const formInputs = Array.from(form.elements).filter((element) => {
    // Filter out all elements that are not Input Types
    return (
      element.nodeName === NODE_NAMES.INPUT ||
      element.nodeName === NODE_NAMES.TEXTAREA
    );
  });

  return formInputs;
};

const getFormValues = (form: HTMLFormElement): FormValuesType => {
  const formInputs = getFormInputs(form) as FormInputsType[];

  // Construct Object of form values based on { `id`: `value` } pairing.
  return formInputs.reduce(
    (values, input) => ({ ...values, [input.id]: input.value }),
    {}
  );
};

export const getRegExp = (
  entryName: UnionOf<typeof REGEX_NAMES>
): RegexDictionaryEntry => {
  const RegEx = RegexDictionary[entryName];

  return { ...RegEx };
};

// export const handleInvalid = (event: SyntheticEvent): void => {
//   console.log('INVALID helper');
//   console.log(event);
// };

export const submitForm = (event: SyntheticEvent): void => {
  const form = event.target as HTMLFormElement;
  const {
    comment,
    emailAddress,
    firstName,
    lastName,
    phoneNumber,
  } = getFormValues(form);
  const templateVariables = {
    from_name: `${firstName} ${lastName}`,
    message: comment,
    phone_number: phoneNumber,
    reply_to: emailAddress,
  };

  // Send the email using EmailJS
  emailSend(EMAILJS.SERVICE_ID, EMAILJS.DEFAULT_TEMPLATE, templateVariables)
    // On Success
    .then((res) => {
      console.log('Email successfully sent!');
    })
    // Handle errors here however you like, or use a React error boundary
    .catch((err) =>
      console.error(
        'Oh well, you failed. Here some thoughts on the error that occured:',
        err
      )
    );
};

// export const validateField = (
//   field: EventTarget & (HTMLInputElement | HTMLTextAreaElement)
// ): void => {
//   console.log('VALIDATE FIELD helper');
//   const {
//     defaultValue,
//     type: fieldType,
//     pattern,
//     required,
//     validity,
//     value,
//   } = field;

//   console.log(`required: ${required}`);
//   console.log(`validity: ${validity.valid}`);
//   console.log(`value: ${value}`);

//   const isValid = validity.valid;

//   if (required) {
//     // isValid = value !== defaultValue;
//   }

//   console.log(isValid);
//   console.log(`******************************************************`);
// };

export const validateForm = (event: SyntheticEvent): boolean => {
  const form = event.target as HTMLFormElement;

  return form.checkValidity();
};
