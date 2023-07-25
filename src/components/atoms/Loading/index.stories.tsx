import { Meta, StoryObj } from '@storybook/react';

import Loading from '.';

const meta = {
  title: 'Components/atoms/Loading',
  component: Loading,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Loading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    children: ''
  }
};
