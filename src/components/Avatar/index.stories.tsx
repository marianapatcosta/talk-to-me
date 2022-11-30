import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Avatar } from './index'

export default {
  title: 'Components/Avatar',
  component: Avatar,
  args: {
    blinking: true,
    isBreathing: true,
    talking: false,
    smiling: false,
    pouting: false,
    liftLeftEyebrow: false,
    liftRightEyebrow: false,
    rollingEyes: false,
    lookingUp: false,
    leftEyeWink: false,
    rightEyeWink: false,
    width: 200,
  },
  argTypes: {
    blinking: {
      control: 'boolean',
    },
    isBreathing: {
      control: 'boolean',
    },
    talking: {
      control: 'boolean',
    },
    smiling: {
      control: 'boolean',
    },
    pouting: {
      control: 'boolean',
    },
    liftLeftEyebrow: {
      control: 'boolean',
    },
    liftRightEyebrow: {
      control: 'boolean',
    },
    rollingEyes: {
      control: 'boolean',
    },
    lookingUp: {
      control: 'boolean',
    },
    leftEyeWink: {
      control: 'boolean',
    },
    rightEyeWink: {
      control: 'boolean',
    },
    width: {
      control: { type: 'number' },
    },
    height: {
      control: { type: 'number' },
    },
  },
  decorators: [
    (Story) => {
      return <div style={{ margin: '2rem' }}>{Story()}</div>
    },
  ],
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />
export const Default = Template.bind({})

export const Talking = Template.bind({})
Talking.args = {
  talking: true,
}

export const Smiling = Template.bind({})
Smiling.args = { smiling: true }
