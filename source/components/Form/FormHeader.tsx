import React, { FunctionComponent } from 'react';

import { Header } from 'Atoms';

type FormHeaderProps = JSX.IntrinsicElements['div'] & {
  description: string | undefined;
  title: string | undefined;
};

const FormHeader: FunctionComponent<FormHeaderProps> = ({
  className: parentClasses,
  description,
  title,
}) => {
  return (
    <div className={parentClasses}>
      {title && <Header className="mb-1" headerLevel={2} title={title} />}
      {description && <p className="font-nugo">{description}</p>}
    </div>
  );
};

export default FormHeader;
