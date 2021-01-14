import React from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

import mainNavItems from 'CONFIG/main-nav';

import { Header, List, ListItem } from 'Atoms';

import { FullWidthContainer } from 'Components';

const SiteHeader = (): JSX.Element => {
  return (
    <FullWidthContainer>
      {({ ChildContainer }) => (
        <ChildContainer>
          <header className="flex items-end justify-between mb-3 h-100">
            <Header
              className="mb-2 text-scale-8"
              fontName="font-logo"
              headerLevel={1}
              title="O.P"
            />
            <nav className="pl-50 md:pl-100 border-b-1">
              <List
                className="flex leading-none font-header text-scale-6"
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
          </header>
        </ChildContainer>
      )}
    </FullWidthContainer>
  );
};

export default SiteHeader;
