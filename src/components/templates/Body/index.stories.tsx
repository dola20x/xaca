import { Meta, StoryObj } from '@storybook/react';

import Body from '.';

const meta = {
  title: 'Components/templates/Body',
  component: Body,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Body>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    children: ''
  }
};
