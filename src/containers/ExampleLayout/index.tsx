import React from 'react';
import './index.scss';

import { Outlet } from 'react-router-dom';

interface IExampleLayoutProps {
  children?: React.ReactNode;
}

const ExampleLayout: React.FC<IExampleLayoutProps> = ({ children }) => {
  return (
    <div>
      <div>Container ExampleLayout is working file!</div>
      {children}
      <Outlet />
    </div>
  );
};

ExampleLayout.defaultProps = {
  children: undefined
};

export default React.memo(ExampleLayout);
