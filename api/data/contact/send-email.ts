import { send } from 'emailjs-com';

import * as EMAILJS from 'API/data/contact/constants';
import * as STATUSES from 'CONSTANTS/status';
import { createFormStatusEvent } from 'HOOKS/forms';

import { SendEmailAction } from './types';

export const sendEmail = (values: SendEmailAction): void => {
  const { comment, emailAddress, firstName, lastName, phoneNumber } = values;
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
      window.dispatchEvent(createFormStatusEvent(STATUSES.SUCCESS));
    })
    // Handle errors here however you like, or use a React error boundary
    .catch((err) => {
      console.log(err);
      console.error(
        'Oh well, you failed. Here some thoughts on the error that occured:',
        err
      );
      window.dispatchEvent(createFormStatusEvent(STATUSES.ERROR));
    });
};
