import React from 'react';
import MainProvider from './app/provider/Main.provider';
import RouterIndex from './app/routes/RouterIndex.routes';

const MainIndex: React.FC = () => {
  return (
    <MainProvider>
      <RouterIndex />
    </MainProvider>
  );
};

export default MainIndex;
