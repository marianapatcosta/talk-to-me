import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { TextChat } from './index'

const input = 'This is a message'
const placeholder = 'text here'
const defaultOutput = "I didn't understand"
const onTypingMock = jest.fn()
const onUnmatchedOutputMock = jest.fn()

describe('TextChat', () => {
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
    onTyping: onTypingMock,
    onUnmatchedOutput: onUnmatchedOutputMock,
  }
  
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders without errors and matches snapshot', () => {
    const {
      container: { firstChild },
    } = render(<TextChat {...defaultProps} />)

    expect(firstChild).toMatchSnapshot()
  })

  it('should display the corresponding output, if the provided input is in `conversation`', async () => {
    render(<TextChat {...defaultProps} />)
    const textarea = screen.getByPlaceholderText(
      placeholder
    ) as HTMLTextAreaElement
    fireEvent.click(textarea, { target: { value: input } })
    expect(textarea.value).toBe(input)
    fireEvent.click(screen.getByRole('button'))

    expect(onTypingMock).toHaveBeenCalled()
    expect(onUnmatchedOutputMock).not.toHaveBeenCalled()

    const output = await screen.findByText('Successful test!', undefined, {
      timeout: 5000,
    })
    expect(output).toBeInTheDocument()
  })

  it('should display the defaultOutput, if the provided input is not in `conversation`', async () => {
    const randomInput = 'This is random'
    render(<TextChat {...defaultProps} />)
    const textarea = screen.getByPlaceholderText(
      placeholder
    ) as HTMLTextAreaElement
    fireEvent.click(textarea, { target: { value: randomInput } })
    expect(textarea.value).toBe(randomInput)
    fireEvent.click(screen.getByRole('button'))

    const output = await screen.findByText(defaultOutput, undefined, {
      timeout: 5000,
    })
    expect(onTypingMock).toHaveBeenCalled()
    expect(onUnmatchedOutputMock).toHaveBeenCalled()
    expect(output).toBeInTheDocument()
  })
})
