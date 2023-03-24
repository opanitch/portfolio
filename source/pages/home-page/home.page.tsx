import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { HOME } from 'API/constants/page-names';
import { FullWidthContainer } from 'Components';
import { HomeContainer } from 'Containers/home/home.container';

const HomePage: FunctionComponent<Page> = ({ className: parentClasses }) => {
  // render
  return (
    <FullWidthContainer
      childClasses="flex items-center justify-center h-full text-center"
      className={classnames(
        'pb-5 bg-center bg-no-repeat relative z-1',
        parentClasses
      )}
      id={HOME}
    >
      <HomeContainer />
    </FullWidthContainer>
  );
};

export default HomePage;
