import React, { FunctionComponent } from 'react';
import classnames from 'classnames';

import { CONTACT } from 'CONSTANTS/page-names';
import { FullWidthContainer } from 'Components';
import { ContactContainer } from 'Containers/contact/contact.container';

const ContactPage: FunctionComponent<Page> = ({ className: parentClasses }) => {
  // render
  return (
    <FullWidthContainer
      childClasses="flex items-center justify-center h-full"
      className={classnames(
        'pb-5 bg-center bg-no-repeat relative z-1',
        parentClasses
      )}
      id={CONTACT}
    >
      <ContactContainer />
    </FullWidthContainer>
  );
};

export default ContactPage;
