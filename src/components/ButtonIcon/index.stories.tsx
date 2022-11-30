import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { userEvent, waitFor, within } from '@storybook/testing-library'
import { expect } from '@storybook/jest';

import { ButtonIcon } from './index'
import { Microphone } from '../../assets/svg'

export default {
  title: 'Components/ButtonIcon',
  component: ButtonIcon,
  args: {
    icon: Microphone,
    iconText: 'Button',
    disabled: false,
  },
  argTypes: {
    disabled: { control: 'boolean' },
    onClick: { action: true },
  },
} as ComponentMeta<typeof ButtonIcon>

const Template: ComponentStory<typeof ButtonIcon> = (args) => (
  <ButtonIcon {...args} />
)

export const Default = Template.bind({})
Default.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement)
  await userEvent.click(canvas.getByRole('button'))

  await waitFor(() => expect(args.onClick).toHaveBeenCalled())
}
