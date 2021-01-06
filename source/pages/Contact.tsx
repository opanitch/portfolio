import React from 'react';

import { CONTACT } from '../../api/constants/page-names';

const ContactPage = () => {
  return (
    <div id={CONTACT} className="mb-1">
      <p>{`{{@ cms.contact.title @}}`} 3</p>
    </div>
  );
};

export default ContactPage;
