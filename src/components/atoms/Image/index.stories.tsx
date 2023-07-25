import { Meta, StoryObj } from '@storybook/react';

import Image from '.';

const meta = {
  title: 'Components/atoms/Image',
  component: Image,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Image>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    children: ''
  }
};
