import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { TalkToMe } from './index'

const input = 'This is a message'
const placeholder = 'text here'
const defaultOutput = "I didn't understand"
const onTypingMock = jest.fn()
const onUnmatchedOutputMock = jest.fn()
const onStopTalkingMock = jest.fn()
const onNoSpeechRecognitionSupportMock = jest.fn()

const startListeningMock = jest.fn()
const stopListeningMock = jest.fn()
const talkMock = jest.fn()

jest.mock('../../hooks/useSpeech', () => ({
  useSpeech: jest.fn().mockImplementation(() => ({
    startListening: startListeningMock,
    stopListening: stopListeningMock,
    talk: talkMock,
    talking: false,
  })),
}))

describe('TalkToMe', () => {
  const defaultProps = {
    conversation: [
      {
        inputKeywords: [],
        inputs: [input],
        output: 'Successful test!',
      },
    ],
    defaultOutput,
    textChatPlaceholder: placeholder,
    avatarProps: {},
    onTyping: onTypingMock,
    onUnmatchedOutput: onUnmatchedOutputMock,
    onStopTalking: onStopTalkingMock,
    onNoSpeechRecognitionSupport: onNoSpeechRecognitionSupportMock,
  }
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should render without errors and matches snapshot', () => {
    const {
      container: { firstChild },
    } = render(<TalkToMe {...defaultProps} />)

    expect(firstChild).toMatchSnapshot()
  })

  it('should render microphone icon if toggle mode is pressed', () => {
    render(<TalkToMe {...defaultProps} />)
    const button = screen.getByTestId('toggle-button')
    expect(screen.getByTestId('text-svg')).toBeInTheDocument()
    fireEvent.click(button)

    expect(screen.getByTestId('microphone-svg')).toBeInTheDocument()
  })

  it('should activate Talk mode and call startListening on avatar click, if chat speech mode is on', () => {
    render(<TalkToMe {...defaultProps} />)
    const button = screen.getByTestId('toggle-button')
    expect(screen.getByTestId('text-svg')).toBeInTheDocument()
    fireEvent.click(button)
    expect(screen.getByTestId('microphone-svg')).toBeInTheDocument()

    fireEvent.click(screen.getByTestId('avatar-button'))
    expect(startListeningMock).toHaveBeenCalled()
  })

  it('should not call startListening on avatar click, if chat text mode is on', () => {
    render(<TalkToMe {...defaultProps} />)
    const button = screen.getByTestId('toggle-button')
    expect(screen.getByTestId('text-svg')).toBeInTheDocument()
    fireEvent.click(button)
    fireEvent.click(screen.getByTestId('avatar-button'))
    expect(startListeningMock).toHaveBeenCalled()
  })
})
