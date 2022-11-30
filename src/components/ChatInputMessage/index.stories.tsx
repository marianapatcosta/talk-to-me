import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { userEvent, waitFor, within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

import { ChatInputMessage } from './index'

export default {
  title: 'Components/ChatInputMessage',
  component: ChatInputMessage,
  args: {
    placeholder: 'text here',
    disabled: false,
  },
  argTypes: {
    disabled: { control: 'boolean' },
    onSubmitMessage: { action: true },
  },
} as ComponentMeta<typeof ChatInputMessage>

const Template: ComponentStory<typeof ChatInputMessage> = (args) => (
  <ChatInputMessage {...args} />
)

export const Default = Template.bind({})
Default.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement)
  const input = 'This is a message'

  userEvent.type(canvas.getByPlaceholderText('text here'), input)
  await userEvent.click(canvas.getByRole('button'))

  await waitFor(() => expect(args.onSubmitMessage).toHaveBeenCalled())
  await waitFor(() => expect(args.onSubmitMessage).toHaveBeenCalledWith(input))
}

export const ChatInputMessageWithLabel = Template.bind({})
ChatInputMessageWithLabel.args = {
  label: 'chat input',
}

