import React from 'react';
import './index.scss';

interface ILinkProps {
  children?: React.ReactNode;
}

const Link: React.FC<ILinkProps> = ({ children }) => {
  return <div>{children}</div>;
};

Link.defaultProps = {
  children: undefined
};

export default Link;
