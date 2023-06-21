import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import AbexCase from '../AbexCase/AbexCase';
import AbexSwitch from './AbexSwitch';

const meta: Meta<typeof AbexSwitch> = {
  tags: ['autodocs'],
  component: AbexSwitch,
};

export default meta;

type Story = StoryObj<typeof AbexSwitch>;
/*
 *👇 Render functions are a framework specific feature to
 * allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  name: 'Example',
  render: () => (
    <AbexSwitch experimentKey="experiment1">
      <AbexCase variant="default">Default Case</AbexCase>
      <AbexCase variant="sample_variant">Sample Case</AbexCase>
    </AbexSwitch>
  ),
};
