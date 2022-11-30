import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { jest } from '@storybook/jest'

import { TalkToMe } from './index'

const input = 'This is a message'
const placeholder = 'text here'

export default {
  title: 'Components/TalkToMe',
  component: TalkToMe,
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
    onStopTalking: jest.fn(),
    onNoSpeechRecognitionSupport: jest.fn(),
  },

  argTypes: { onTyping: { action: true }, onUnmatchedOutput: { action: true } },
} as ComponentMeta<typeof TalkToMe>

const Template: ComponentStory<typeof TalkToMe> = (args) => (
  <TalkToMe {...args} />
)

export const Default = Template.bind({})
