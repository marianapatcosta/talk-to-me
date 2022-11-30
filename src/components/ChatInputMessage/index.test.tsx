import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'

import { ChatInputMessage } from './index'
import * as stories from './index.stories'

const { Default, ChatInputMessageWithLabel } = composeStories(stories)

describe('ChatInputMessage', () => {
  const defaultProps = {
    placeholder: 'text here',
    onSubmitMessage: () => null,
  }
  it('renders without errors and matches snapshot', () => {
    const {
      container: { firstChild },
    } = render(<ChatInputMessage {...defaultProps} />)
    render(<Default />)

    expect(firstChild).toMatchSnapshot()
  })

  it('should adopt the inserted text', () => {
    const onSubmitMessageMock = jest.fn()
    const input = 'This is a message'
    render(
      <ChatInputMessage
        {...defaultProps}
        onSubmitMessage={onSubmitMessageMock}
      />
    )
    const textAreaElement = screen.getByPlaceholderText(
      'text here'
    ) as HTMLTextAreaElement
    fireEvent.click(textAreaElement, { target: { value: input } })
    expect(textAreaElement.value).toBe(input)
  })

  it('should submit message on button click', () => {
    const onSubmitMessageMock = jest.fn()
    const input = 'This is a message'
    render(
      <ChatInputMessage
        {...defaultProps}
        onSubmitMessage={onSubmitMessageMock}
      />
    )
    const textAreaElement = screen.getByPlaceholderText(
      'text here'
    ) as HTMLTextAreaElement
    fireEvent.click(textAreaElement, { target: { value: input } })
    expect(textAreaElement.value).toBe(input)
    fireEvent.click(screen.getByRole('button'))

    expect(onSubmitMessageMock).toHaveBeenCalled()
    expect(onSubmitMessageMock).toHaveBeenCalledWith(input)
  })

  it('should submit message on enter', () => {
    const onSubmitMessageMock = jest.fn()
    const input = 'This is a message'
    render(
      <ChatInputMessage
        {...defaultProps}
        onSubmitMessage={onSubmitMessageMock}
      />
    )
    const textAreaElement = screen.getByPlaceholderText(
      'text here'
    ) as HTMLTextAreaElement
    fireEvent.click(textAreaElement, { target: { value: input } })
    expect(textAreaElement.value).toBe(input)

    fireEvent.keyDown(textAreaElement, {
      key: 'Enter',
      code: 'Enter',
      charCode: 13,
    })

    expect(onSubmitMessageMock).toHaveBeenCalled()
    expect(onSubmitMessageMock).toHaveBeenCalledWith(input)
  })

  it('should not submit message, if textarea is empty', () => {
    const onSubmitMessageMock = jest.fn()
    render(
      <ChatInputMessage
        {...defaultProps}
        onSubmitMessage={onSubmitMessageMock}
      />
    )
    const textAreaElement = screen.getByPlaceholderText(
      'text here'
    ) as HTMLTextAreaElement
    expect(textAreaElement.value).toBe('')
    fireEvent.click(screen.getByRole('button'))

    expect(onSubmitMessageMock).not.toHaveBeenCalled()
  })

  it('should apply additionalClass, if provided', () => {
    const additionalClass = 'additional-class'
    const {
      container: { firstChild },
    } = render(
      <ChatInputMessage {...defaultProps} additionalClass={additionalClass} />
    )
    expect(firstChild).toHaveClass(additionalClass)
  })

  it('should render a label, if provided', () => {
    const label = 'this label'
    render(<ChatInputMessage {...defaultProps} label={label} />)
    render(<ChatInputMessageWithLabel />)

    expect(screen.getByLabelText(label)).toBeInTheDocument()
  })
})
