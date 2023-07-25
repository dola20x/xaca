import { Meta, StoryObj } from '@storybook/react';

import IconSvg from '.';

const meta = {
  title: 'Components/atoms/IconSvg',
  component: IconSvg,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['14x14', '18x18', '20x20', '24x24']
      }
    }
  }
} satisfies Meta<typeof IconSvg>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    iconName: 'user',
    modifiers: 'black'
  }
};
