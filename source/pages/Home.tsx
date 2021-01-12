import React from 'react';

import { HOME } from 'API/constants/page-names';

import { FullWidthContainer } from 'Components';

const HomePage = () => {
  return (
    <FullWidthContainer id={HOME} className="pb-5 bg-center bg-no-repeat">
      {({ ChildContainer }) => <ChildContainer></ChildContainer>}
    </FullWidthContainer>
  );
};

export default HomePage;
