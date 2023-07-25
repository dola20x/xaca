import React from 'react';

import { ModifierUtils } from '~/utils';
import './index.scss';

export const iconList = {
  user: 'user',
  power_off: 'power_off'
};

export type IIconName = keyof typeof iconList;

export type IIconSize = '10x10' | '14x14' | '16x16' | '18x18' | '20x20' | '24x24';

interface IIconProps {
  iconName: IIconName;
  size?: IIconSize;
}

const Icon: React.FC<IIconProps> = ({ iconName, size }) => {
  return <i className={ModifierUtils.map('a-icon', iconName, size)} />;
};

Icon.defaultProps = {
  size: '24x24'
};

export default Icon;
