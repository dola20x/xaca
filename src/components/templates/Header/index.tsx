import React from 'react';
import './index.scss';

interface IHeaderProps {
  children?: React.ReactNode;
}

const Header: React.FC<IHeaderProps> = ({ children }) => {
  return <div>{children}</div>;
};

Header.defaultProps = {
  children: undefined
};

export default Header;
