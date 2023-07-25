import { Meta, StoryObj } from '@storybook/react';

import Wrapper from '.';

const meta = {
  title: 'Components/templates/Wrapper',
  component: Wrapper,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Wrapper>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    children: ''
  }
};
