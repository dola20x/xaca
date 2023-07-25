import React from 'react';
import './index.scss';

interface IButtonProps {
  children?: React.ReactNode;
}

const Button: React.FC<IButtonProps> = ({ children }) => {
  return <div>{children}</div>;
};

Button.defaultProps = {
  children: undefined
};

export default Button;
