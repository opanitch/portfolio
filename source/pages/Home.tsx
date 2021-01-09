import React from 'react';

import { HOME } from '../../api/constants/page-names';

import { FullWidthContainer } from '../components';

const HomePage = () => {
  return (
    <FullWidthContainer id={HOME} className="pb-5">
      {({ ChildContainer }) => (
        <ChildContainer>
          <p>{`{{@ cms.home.title @}}`} 1</p>
        </ChildContainer>
      )}
    </FullWidthContainer>
  );
};

export default HomePage;
