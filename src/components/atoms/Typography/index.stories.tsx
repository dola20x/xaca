import { Meta, StoryObj } from '@storybook/react';

import Typography from '.';

const meta = {
  title: 'Components/atoms/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    children: ''
  }
};
