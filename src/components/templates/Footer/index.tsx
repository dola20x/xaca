import React from 'react';
import './index.scss';

interface IFooterProps {
  children?: React.ReactNode;
}

const Footer: React.FC<IFooterProps> = ({ children }) => {
  return <div>{children}</div>;
};

Footer.defaultProps = {
  children: undefined
};

export default Footer;
