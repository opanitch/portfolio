import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
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
            <Header headerLevel={1} title="O." />
            <nav className="pl-100 border-b-1">
              <List className="flex" isOrdered={false}>
                {mainNavItems.map((navItem, index) => {
                  return (
                    <li
                      className={classnames({ 'ml-3': index > 0 }, 'px-1')}
                      key={index}
                    >
                      <RouterLink to={navItem.href}>{navItem.text}</RouterLink>
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
