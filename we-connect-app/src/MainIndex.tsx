import React from 'react';
import MainProvider from './app/provider/Main.provider';
import RouterIndex from './app/routes/RouterIndex.routes';

const MainIndex = () => {
  return (
    <MainProvider>
      <RouterIndex />
    </MainProvider>
  );
};

export default MainIndex;
