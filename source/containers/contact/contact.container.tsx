import { USER_ID } from 'API/data/contact/constants';
import { createFormStatusEvent, useFormStatus } from 'API/hooks/forms';
import Email2Icon from 'ASSETS/icons/email.svg';
import GithubIcon from 'ASSETS/icons/github.svg';
import LinkedinIcon from 'ASSETS/icons/linkedin.svg';
import * as STATUSES from 'CONSTANTS/status';
import { Card, Header, Link, List, ListItem } from 'Atoms';
import { init } from 'emailjs-com';
import { ContactForm } from 'Forms';
import React, { FunctionComponent, useEffect } from 'react';

export const ContactContainer: FunctionComponent = () => {
  // action hooks
  const formStatus = useFormStatus();
  const setFormReady = createFormStatusEvent(STATUSES.READY);

  // side effects
  useEffect(() => {
    if (formStatus === STATUSES.EMPTY) {
      // Initialize Email API - https://dashboard.emailjs.com/admin/integration/npm
      init(USER_ID); // only init once
      window.dispatchEvent(setFormReady); // only set to Ready if EMPTY
    }
  }, [formStatus, setFormReady]);

  // render
  return (
    <div className="flex flex-col items-center justify-between md:flex-row md:items-start">
      <Card className="w-5/6 md:w-1/2 md:mr-1">
        <Header
          className="mb-2"
          headerLevel={2}
          title="{{@ cms.contact.title @}}"
        />
        <p className="font-nugo">{`{{@ cms.contact.description @}}`}</p>
        <List className="flex justify-center mt-3 leading-none text-scale-6">
          <ListItem>
            <Link href="https://www.linkedin.com/in/opanitch/" target="_blank">
              <LinkedinIcon />
            </Link>
          </ListItem>
          <ListItem className="ml-4">
            <Link href="https://github.com/opanitch" target="_blank">
              <GithubIcon />
            </Link>
          </ListItem>
          <ListItem className="ml-4">
            <Link href="mailto:oren@opanitch.com">
              <Email2Icon />
            </Link>
          </ListItem>
        </List>
      </Card>
      <Card className="w-5/6 md:w-1/2 md:ml-1">
        <ContactForm
          className=""
          id="contact-me"
          status={formStatus}
          title="{{@ cms.contact.form.title @}}"
        />
      </Card>
    </div>
  );
};
