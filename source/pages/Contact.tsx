import React, { FunctionComponent } from 'react';
import classnames from 'classnames';

import Email2Icon from 'ASSETS/icons/email.svg';
import GithubIcon from 'ASSETS/icons/github.svg';
import LinkedinIcon from 'ASSETS/icons/linkedin.svg';

import { CONTACT } from 'CONSTANTS/page-names';

import { Card, Header, Link, List, ListItem } from 'Atoms';
import { ContactForm, FullWidthContainer } from 'Components';

const ContactPage: FunctionComponent<Page> = ({
  className: parentClasses,
}: {
  className: string;
}) => (
  <FullWidthContainer
    id={CONTACT}
    className={classnames('pb-5 bg-center bg-no-repeat', parentClasses)}
  >
    {({ ChildContainer }) => (
      <ChildContainer className="flex items-center justify-center h-full">
        <div className="flex flex-col items-center justify-between md:flex-row md:items-start">
          <Card className="w-5/6 md:w-1/2 md:mr-1">
            <Header
              className="mb-2"
              headerLevel={2}
              title={`{{@ cms.contact.title @}}`}
            />
            <p className="font-nugo">{`{{@ cms.contact.description @}}`}</p>
            <List className="flex justify-center mt-3 leading-none text-scale-6">
              <ListItem>
                <Link
                  href="https://www.linkedin.com/in/opanitch/"
                  target="_blank"
                >
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
            <ContactForm />
          </Card>
        </div>
      </ChildContainer>
    )}
  </FullWidthContainer>
);

export default ContactPage;
