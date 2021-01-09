import React from 'react';

import { CONTACT } from '../../api/constants/page-names';

import { FullWidthContainer } from '../components';

const ContactPage = () => {
  return (
    <FullWidthContainer id={CONTACT} className="pb-5">
      {({ ChildContainer }) => (
        <ChildContainer>
          <p>{`{{@ cms.contact.title @}}`} 3</p>
        </ChildContainer>
      )}
    </FullWidthContainer>
  );
};

export default ContactPage;
