import React, { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

import GitHubIcon from 'ASSETS/icons/github.svg';

import mainNavItems from 'CONFIG/main-nav';

import { Header, Link, List, ListItem } from 'Atoms';

import { FullWidthContainer } from 'Components';

const Footer: FunctionComponent = () => {
  return (
    <FullWidthContainer>
      {({ ChildContainer }) => (
        <ChildContainer>
          <footer className="mt-3">
            <div className="flex items-start justify-between w-full">
              <nav className="pr-50 md:pr-100 border-t-1">
                <List
                  className="flex pt-1 leading-none font-coffee text-scale-4"
                  isOrdered={false}
                >
                  {mainNavItems.map((navItem, index) => {
                    return (
                      <ListItem
                        className={classnames({ 'ml-3': index > 0 }, 'px-1')}
                        key={index}
                      >
                        <NavLink to={navItem.href}>{navItem.text}</NavLink>
                      </ListItem>
                    );
                  })}
                </List>
              </nav>
              <Header
                className="mt-2 text-scale-5 font-logo"
                headerLevel={2}
                title="O.P"
              />
            </div>
            <div className="flex items-start justify-between w-full">
              <Link
                className="p-2 mt-1 rounded-md text-scale-n1 border-1"
                href="https://github.com/opanitch/portfolio"
                target="_blank"
              >
                See on <GitHubIcon className="inline-block text-scale-3" />
              </Link>

              <p className="py-2 mt-3 text-scale-n1">
                &copy; 2021 Oren Panitch
              </p>
            </div>
          </footer>
        </ChildContainer>
      )}
    </FullWidthContainer>
  );
};

export default Footer;
