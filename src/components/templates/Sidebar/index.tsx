import React from 'react';
import './index.scss';

interface ISidebarProps {
  children?: React.ReactNode;
}

const Sidebar: React.FC<ISidebarProps> = ({ children }) => {
  return <div>{children}</div>;
};

Sidebar.defaultProps = {
  children: undefined
};

export default Sidebar;
