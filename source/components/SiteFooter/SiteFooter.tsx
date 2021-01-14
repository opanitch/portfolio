import React, { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

import mainNavItems from 'CONFIG/main-nav';

import { Header, List, ListItem } from 'Atoms';

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
                  className="flex leading-none font-header text-scale-4"
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
                className="mt-2 text-scale-5"
                fontName="font-logo"
                headerLevel={2}
                title="O.P"
              />
            </div>
            <p className="py-2 mt-3 text-right text-scale-n1">
              &copy; 2021 Oren Panitch
            </p>
          </footer>
        </ChildContainer>
      )}
    </FullWidthContainer>
  );
};

export default Footer;
