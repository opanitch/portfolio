import React from 'react';

import { CONTACT } from '../../api/constants/page-names';

import { Button, Card, TextInput } from '../atoms';
import { Form, FullWidthContainer } from 'Components';

const ContactPage = () => {
  return (
    <FullWidthContainer id={CONTACT} className="pb-5">
      {({ ChildContainer }) => (
        <ChildContainer className="flex items-center justify-center h-full">
          <Card className="w-1/2">
            <Form
              description="{{@ cms.contact.form.description @}}"
              id="contact-form"
              formActions={
                <Button type="submit">{`{{@ cms.site.common.submit @}}`}</Button>
              }
              title="{{@ cms.contact.form.title @}}"
            >
              <div className="flex justify-between mb-3">
                <TextInput
                  id="firstName"
                  labelText="{{@ cms.contact.form.inputs.first-name @}}"
                />
                <TextInput
                  id="lastName"
                  labelText="{{@ cms.contact.form.inputs.last-name @}}"
                />
              </div>
              <TextInput
                id="emailAddress"
                labelText="{{@ cms.contact.form.inputs.email @}}"
              />
              <TextInput
                id="phoneNumber"
                labelText="{{@ cms.contact.form.inputs.phone-number @}}"
              />
              {/* <TextInput id="phoneNumber" labelText="Phone Number" /> */}
            </Form>
          </Card>
        </ChildContainer>
      )}
    </FullWidthContainer>
  );
};

export default ContactPage;
