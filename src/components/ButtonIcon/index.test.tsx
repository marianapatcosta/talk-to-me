import { Keyboard } from '@/assets/svg'
import { render, screen, fireEvent } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'

import { ButtonIcon } from './index'
import * as stories from './index.stories'

const { Default } = composeStories(stories)

describe('ButtonIcon', () => {
  const onClickMock = jest.fn()
  const defaultProps = {
    icon: Keyboard,
    onClick: onClickMock,
  }
  it('renders without errors and matches snapshot', () => {
    const {
      container: { firstChild },
    } = render(<ButtonIcon {...defaultProps} />)
    render(<Default />)
    expect(firstChild).toMatchSnapshot()
  })

  it('should display icon', () => {
    render(<ButtonIcon {...defaultProps} />)
    const icon = screen.getByRole('img')
    expect(icon).toBeTruthy()
  })

  it('should handle click events', () => {
    const {
      container: { firstChild },
    } = render(<ButtonIcon {...defaultProps} />)

    firstChild && fireEvent.click(firstChild)

    expect(onClickMock).toBeCalled()
  })

  it('should apply additionalClass, if provided', () => {
    const additionalClass = 'additional-class'
    render(<ButtonIcon {...defaultProps} additionalClass={additionalClass} />)
    const button = screen.getByRole('button')
    expect(button).toHaveClass(additionalClass)
  })
})
