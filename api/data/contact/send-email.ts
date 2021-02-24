import { Dispatch, SyntheticEvent } from 'react';
import { send } from 'emailjs-com';

import * as EMAILJS from 'CONSTANTS/emailjs';
import * as STATUSES from 'CONSTANTS/status';

import { getFormValues } from 'Components/Form/form-helpers';
import { FormStatuses } from 'Components/Form/types';

export const sendEmail = (
  event: SyntheticEvent,
  callback: Dispatch<FormStatuses>
): void => {
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
  send(EMAILJS.SERVICE_ID, EMAILJS.DEFAULT_TEMPLATE, templateVariables)
    // On Success
    .then((res) => {
      console.log('Email successfully sent!');
      console.log(res);
      callback(STATUSES.SUCCESS);
    })
    // Handle errors here however you like, or use a React error boundary
    .catch((err) => {
      console.log(err);
      console.error(
        'Oh well, you failed. Here some thoughts on the error that occured:',
        err
      );
      callback(STATUSES.ERROR);
    });
};
