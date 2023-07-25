import React from 'react';
import './index.scss';

interface IBodyProps {
  children?: React.ReactNode;
}

const Body: React.FC<IBodyProps> = ({ children }) => {
  return <div>{children}</div>;
};

Body.defaultProps = {
  children: undefined
};

export default Body;
