import { Meta, StoryObj } from '@storybook/react';

import Link from '.';

const meta = {
  title: 'Components/atoms/Link',
  component: Link,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    children: ''
  }
};
