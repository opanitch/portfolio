import { Card } from 'Atoms';
import React, { FunctionComponent } from 'react';

export const NotFoundContainer: FunctionComponent = () => {
  // render
  return (
    <Card className="w-5/6 md:w-3/5 lg:w-1/2">
      <p>{`{{@ cms.not-found.title @}}`}</p>
    </Card>
  );
};
