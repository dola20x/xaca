import React from 'react';
import './index.scss';

interface ITypographyProps {
  children?: React.ReactNode;
}

const Typography: React.FC<ITypographyProps> = ({ children }) => {
  return <div>{children}</div>;
};

Typography.defaultProps = {
  children: undefined
};

export default Typography;
