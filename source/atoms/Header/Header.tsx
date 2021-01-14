import React, { FunctionComponent } from 'react';
import classnames from 'classnames';

type HeaderType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

interface HeaderProps {
  className?: string;
  fontName?: string;
  headerLevel?: number;
  title: string;
}

const Header: FunctionComponent<HeaderProps> = ({
  className: parentClasses,
  fontName = 'font-header',
  headerLevel = 1,
  title,
}) => {
  const Header = `h${headerLevel}` as HeaderType;
  const headerClass = `text-h${headerLevel}`;

  return (
    <Header className={classnames(headerClass, fontName, parentClasses)}>
      {title}
    </Header>
  );
};

export default Header;
