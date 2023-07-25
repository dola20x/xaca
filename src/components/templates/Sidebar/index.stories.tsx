import { Meta, StoryObj } from '@storybook/react';

import Sidebar from '.';

const meta = {
  title: 'Components/templates/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    children: ''
  }
};
