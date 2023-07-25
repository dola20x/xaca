import React from 'react';
import './index.scss';

interface IWrapperProps {
  children?: React.ReactNode;
}

const Wrapper: React.FC<IWrapperProps> = ({ children }) => {
  return <div>{children}</div>;
};

Wrapper.defaultProps = {
  children: undefined
};

export default Wrapper;
