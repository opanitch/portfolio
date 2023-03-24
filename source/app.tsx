import React, { FunctionComponent } from 'react';
import { VideoBackground } from 'Atoms';
import { SiteFooter, SiteHeader } from 'Components';
import { AppRouter } from './routers/app/app.router';

export const App: FunctionComponent = () => (
  <>
    {/* app background */}
    <VideoBackground className="z-0" />
    {/* app nav */}
    <SiteHeader className="z-1" />
    {/* app */}
    <AppRouter />
    {/* app footer */}
    <SiteFooter className="z-1" />
  </>
);

export default App;
