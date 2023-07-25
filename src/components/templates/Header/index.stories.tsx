import { Meta, StoryObj } from '@storybook/react';

import Header from '.';

const meta = {
  title: 'Components/templates/Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    children: ''
  }
};
