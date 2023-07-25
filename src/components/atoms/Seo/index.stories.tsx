import { Meta, StoryObj } from '@storybook/react';

import Seo from '.';

const meta = {
  title: 'Components/atoms/Seo',
  component: Seo,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Seo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {}
};
