import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import AbexCase from './AbexCase';

const meta: Meta<typeof AbexCase> = {
  tags: ['autodocs'],
  component: AbexCase,
};

export default meta;

type Story = StoryObj<typeof AbexCase>;
/*
 *👇 Render functions are a framework specific feature to
 * allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  name: 'Example',
  render: () => <AbexCase variant="sample_variant">Sample case</AbexCase>,
};
