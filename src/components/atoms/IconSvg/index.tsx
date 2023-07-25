import React from 'react';

import ImageDefault from '~/assets/icons/image.svg';
import { IIconName, IIconSize } from '~/components/atoms/Icon';
import { useDynamicSvgImport } from '~/hooks/useDynamicSvgImport';
import { ModifierUtils } from '~/utils';

import './index.scss';

interface IIconSvgProps {
  iconName: IIconName;
  size?: IIconSize;
  svgProp?: React.SVGProps<SVGSVGElement>;
  modifiers?: 'black' | 'white';
}

const IconSvg: React.FC<IIconSvgProps> = ({ iconName, size, modifiers, svgProp }) => {
  const { loading, SvgIcon } = useDynamicSvgImport(iconName);
  return (
    <>
      {loading && (
        <i className={ModifierUtils.map('a-iconSvg', modifiers, size)}>
          <img src={ImageDefault} alt='a-iconSvg_image' />
        </i>
      )}
      {SvgIcon && (
        <i className={ModifierUtils.map('a-iconSvg', modifiers, size)}>
          <SvgIcon {...svgProp} />
        </i>
      )}
    </>
  );
};

IconSvg.defaultProps = {
  size: '24x24',
  modifiers: 'black'
};

export default IconSvg;
