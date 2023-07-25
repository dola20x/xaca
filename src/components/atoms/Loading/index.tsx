import React from 'react';
import './index.scss';

interface ILoadingProps {
  children?: React.ReactNode;
}

const Loading: React.FC<ILoadingProps> = ({ children }) => {
  return <div>{children}</div>;
};

Loading.defaultProps = {
  children: undefined
};

export default Loading;
