import { Meta, StoryObj } from '@storybook/react';

import Footer from '.';

const meta = {
  title: 'Components/templates/Footer',
  component: Footer,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    children: ''
  }
};
