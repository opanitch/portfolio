import React from 'react';

import Email2Icon from 'ASSETS/icons/email.svg';
import GithubIcon from 'ASSETS/icons/github.svg';
import LinkedinIcon from 'ASSETS/icons/linkedin.svg';

import { CONTACT } from 'CONSTANTS/page-names';

import {
  Button,
  Card,
  Header,
  Link,
  List,
  ListItem,
  TextAreaInput,
  TextInput,
} from 'Atoms';
import { Form, FullWidthContainer } from 'Components';

const ContactPage = () => {
  return (
    <FullWidthContainer id={CONTACT} className="pb-5 bg-center bg-no-repeat">
      {({ ChildContainer }) => (
        <ChildContainer className="flex items-center justify-center h-full">
          {/* <Card className="w-5/6 md:w-3/5 lg:w-1/2">
            <Form
              description="{{@ cms.contact.form.description @}}"
              id="contact-form"
              formActions={
                <Button
                  type="submit"
                  onClick={(e) => console.log(e)}
                >{`{{@ cms.site.common.submit @}}`}</Button>
              }
              title="{{@ cms.contact.form.title @}}"
            >
              <div className="flex flex-col mb-2 md:flex-row md:justify-between">
                <TextInput
                  className="w-full mb-2 md:w-1/2 md:pr-1"
                  id="firstName"
                  labelText="{{@ cms.contact.form.inputs.first-name @}}"
                  required={true}
                  regex="NAME"
                  title="{{@ cms.contact.form.validation.names @}}"
                />
                <TextInput
                  className="w-full mb-2 md:w-1/2 md:pl-1"
                  id="lastName"
                  labelText="{{@ cms.contact.form.inputs.last-name @}}"
                  required={true}
                  regex="NAME"
                  title="{{@ cms.contact.form.validation.names @}}"
                />
              </div>
              <div className="flex flex-col mb-2 md:flex-row md:justify-between">
                <TextInput
                  className="w-full mb-2 md:w-1/2 md:pr-1"
                  id="emailAddress"
                  labelText="{{@ cms.contact.form.inputs.email @}}"
                  regex="EMAIL"
                  title="{{@ cms.contact.form.validation.email @}}"
                />
                <TextInput
                  className="w-full mb-2 md:w-1/2 md:pl-1"
                  id="phoneNumber"
                  labelText="{{@ cms.contact.form.inputs.phone-number @}}"
                  regex="PHONE"
                  title="{{@ cms.contact.form.validation.phone @}}"
                />
              </div>
              <TextAreaInput
                id="comment"
                labelText="{{@ cms.contact.form.inputs.message @}}"
              />
            </Form>
          </Card> */}
          <Card className="w-5/6 md:w-3/5 lg:w-1/2">
            <Header headerLevel={2} title={`{{@ cms.contact.form.title @}}`} />
            <p>{`{{@ cms.contact.description @}}`}</p>
            <List className="flex justify-center mt-3 leading-none text-scale-6">
              <ListItem>
                <Link
                  href="https://www.linkedin.com/in/opanitch/"
                  target="_blank"
                >
                  <LinkedinIcon />
                </Link>
              </ListItem>
              <ListItem className="md:ml-4">
                <Link href="https://github.com/opanitch" target="_blank">
                  <GithubIcon />
                </Link>
              </ListItem>
              <ListItem className="md:ml-4">
                <Link href="mailto:oren@opanitch.com">
                  <Email2Icon />
                </Link>
              </ListItem>
            </List>
          </Card>
        </ChildContainer>
      )}
    </FullWidthContainer>
  );
};

export default ContactPage;
