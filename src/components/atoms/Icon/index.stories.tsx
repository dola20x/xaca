import { Meta, StoryFn } from '@storybook/react';

import Icon, { IIconName, IIconSize, iconList } from '.';

export default {
  title: 'Components/atoms/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: {
        type: 'select'
      },
      options: ['14x14', '18x18', '20x20', '24x24']
    }
  }
} satisfies Meta;

interface StoryProps {
  iconName: IIconName[];
  size: IIconSize;
}

const Template: StoryFn<StoryProps> = (args) => {
  return (
    <div
      style={{
        display: 'flex',
        gap: '16px',
        flexWrap: 'wrap'
      }}
    >
      {args.iconName.map((name, index) => (
        <div
          key={name + index.toString()}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            width: '100px',
            alignItems: 'center',
            textAlign: 'center'
          }}
        >
          <Icon key={name} iconName={name} size={args.size} />
          <p>{name}</p>
        </div>
      ))}
    </div>
  );
};

export const ListIcon = Template.bind({});
ListIcon.args = {
  iconName: Object.keys(iconList).map((item) => item as IIconName),
  size: '16x16'
};
