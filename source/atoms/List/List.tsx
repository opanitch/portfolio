import React, { FunctionComponent, ReactNode } from 'react';
import classnames from 'classnames';

type ListTypes = 'ul' | 'ol';

interface ListProps {
  children: ReactNode[];
  className?: string;
  isOrdered?: boolean;
}

const List: FunctionComponent<ListProps> = ({
  children,
  className: parentClasses,
  isOrdered = false,
}: ListProps) => {
  const ListType: ListTypes = isOrdered ? `ol` : `ul`;

  return (
    <ListType className={classnames('', parentClasses)} children={children} />
  );
};

export default List;
