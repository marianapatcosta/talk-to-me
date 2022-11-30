import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { userEvent, waitFor, within } from '@storybook/testing-library'
import { jest, expect } from '@storybook/jest'

import { TextChat } from './index'

const input = 'This is a message'
const placeholder = 'text here'

export default {
  title: 'Components/TextChat',
  component: TextChat,
  args: {
    conversation: [
      {
        inputKeywords: [],
        inputs: [input],
        output: 'Successful test!',
      },
    ],
    defaultOutput: "I didn't understand",
    textChatPlaceholder: placeholder,
    onTyping: jest.fn(),
    onUnmatchedOutput: jest.fn(),
  },

  argTypes: { onTyping: { action: true }, onUnmatchedOutput: { action: true } },
} as ComponentMeta<typeof TextChat>

const Template: ComponentStory<typeof TextChat> = (args) => (
  <TextChat {...args} />
)

export const Default = Template.bind({})
Default.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement)

  userEvent.type(canvas.getByPlaceholderText(placeholder), input)
  await userEvent.click(canvas.getByRole('button'))

  await waitFor(
    () => expect(canvas.getByText('Successful test!')).toBeInTheDocument(),
    { timeout: 3000 }
  )
  await waitFor(() => expect(args.onTyping).toHaveBeenCalled())
  await waitFor(() => expect(args.onUnmatchedOutput).not.toHaveBeenCalled())
}
