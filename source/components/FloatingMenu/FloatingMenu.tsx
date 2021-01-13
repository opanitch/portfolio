import React, { FunctionComponent, SVGProps } from 'react';
import classnames from 'classnames';

import DownArrow from 'ASSETS/icons/chevron-down.svg';

import { Button, List, ListItem } from 'Atoms';

type LinkType = {
  icon?: FunctionComponent<SVGProps<SVGSVGElement>>;
  text: string;
  url: string;
};

export type LinksType = LinkType[];

type FloatingMenuType = JSX.IntrinsicElements['div'] & {
  links: LinksType;
  onClick?: () => void;
  position: string;
};

export enum Position {
  TOP_LEFT = 'TOP_LEFT',
  TOP_RIGHT = 'TOP_RIGHT',
}

// const Icon = ({ src }) => <img className="" src={src} alt="" />;

const FloatingMenu: FunctionComponent<FloatingMenuType> = ({
  className: parentClasses,
  links,
  onClick,
  position,
}) => {
  return (
    <div
      className={classnames(
        'absolute bg-white p-3 shadow-md',
        {
          ['left-1']: position === Position.TOP_LEFT,
          ['right-1']: position === Position.TOP_RIGHT,
        },
        parentClasses
      )}
    >
      <div className="absolute bg-white shadow-sm -left-3">
        <Button onClick={onClick}>
          <DownArrow />
        </Button>
      </div>
      <List className={''}>
        {links.map((link, index) => (
          <ListItem className="flex flex-row items-center" key={index}>
            <Button className="leading-loose" onClick={onClick}>
              {link.text}
            </Button>
            {/* {link.icon && <Icon src={link.icon} />} */}
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default FloatingMenu;
