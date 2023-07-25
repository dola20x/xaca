import React from 'react';
import './index.scss';

interface IImageProps {
  children?: React.ReactNode;
}

const Image: React.FC<IImageProps> = ({ children }) => {
  return <div>{children}</div>;
};

Image.defaultProps = {
  children: undefined
};

export default Image;
