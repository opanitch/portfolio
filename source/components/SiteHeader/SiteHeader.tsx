import React from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

import mainNavItems from '../../../api/config/main-nav';

import { Header, List } from '../../atoms';

import FullWidthContainer from '../FullWidthContainer/FullWidthContainer';

const SiteHeader = (): JSX.Element => {
  return (
    <FullWidthContainer>
      {({ ChildContainer }) => (
        <ChildContainer>
          <header className="flex items-end justify-between mb-3 h-100">
            <Header className="logo" headerLevel={1} title="O." />
            <nav className="pl-50 md:pl-100 border-b-1">
              <List
                className="flex leading-none font-header text-scale-6"
                isOrdered={false}
              >
                {mainNavItems.map((navItem, index) => {
                  return (
                    <li
                      className={classnames({ 'ml-3': index > 0 }, 'px-1')}
                      key={index}
                    >
                      <NavLink to={navItem.href}>{navItem.text}</NavLink>
                    </li>
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
