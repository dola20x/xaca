---
to: src/components/<%= level %>/<%= h.changeCase.pascalCase(name) %>/index.stories.tsx
---
import { Meta, StoryObj } from '@storybook/react';

import <%= h.changeCase.pascalCase(name) %> from '.';

const meta = {
  title: 'Components/<%= level %>/<%= h.changeCase.pascalCase(name) %>',
  component: <%= h.changeCase.pascalCase(name) %>,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof <%= h.changeCase.pascalCase(name) %>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    children: ''
  }
};
