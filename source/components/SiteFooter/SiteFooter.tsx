import React, { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

import mainNavItems from '../../../api/config/main-nav';

import { Header, List } from '../../atoms';

import FullWidthContainer from '../FullWidthContainer/FullWidthContainer';

const Footer: FunctionComponent = () => {
  return (
    <FullWidthContainer>
      {({ ChildContainer }) => (
        <ChildContainer>
          <footer className="flex items-start justify-between mt-3 h-100">
            <nav className="pr-100 border-b-1">
              <List
                className="flex leading-none font-header text-scale-4"
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
            <Header className="logo" headerLevel={2} title="O." />
          </footer>
        </ChildContainer>
      )}
    </FullWidthContainer>
  );
};

export default Footer;
