import React, { FunctionComponent } from 'react';
import classnames from 'classnames';

import { Header } from '../../atoms';

type FormHeaderProps = JSX.IntrinsicElements['div'] & {
  description: string;
  title: string;
};

const FormHeader: FunctionComponent<FormHeaderProps> = ({
  className: parentClasses,
  description,
  title,
}) => {
  return (
    <div className={classnames('', parentClasses)}>
      <Header className="mb-1" headerLevel={2} title={title} />
      <p className="mb-3">{description}</p>
    </div>
  );
};

export default FormHeader;
