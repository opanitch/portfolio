import React from 'react';

import { CONTACT } from 'CONSTANTS/page-names';

import { Button, Card, TextAreaInput, TextInput } from 'Atoms';
import { Form, FullWidthContainer } from 'Components';

const ContactPage = () => {
  return (
    <FullWidthContainer id={CONTACT} className="pb-5 bg-center bg-no-repeat">
      {({ ChildContainer }) => (
        <ChildContainer className="flex items-center justify-center h-full">
          <Card className="w-5/6 md:w-3/5 lg:w-1/2">
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
              {/* <TextInput id="phoneNumber" labelText="Phone Number" /> */}
              <TextAreaInput
                id="comment"
                labelText="{{@ cms.contact.form.inputs.message @}}"
              />
            </Form>
          </Card>
        </ChildContainer>
      )}
    </FullWidthContainer>
  );
};

export default ContactPage;
