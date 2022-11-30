import React from 'react'
import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import '@testing-library/jest-dom/extend-expect'
import { AvatarProps } from '@/types'
import { Avatar } from './index'
import * as stories from './index.stories'

const { Default, Talking, Smiling } = composeStories(stories)

describe('Avatar', () => {
  const defaultProps = {
    label: 'Input',
    value: 'Hello',
    onChange: () => null,
  } as AvatarProps

  it('renders without errors and matches snapshot', () => {
    const {
      container: { firstChild },
    } = render(<Avatar {...defaultProps} />)
    render(<Default />)
    expect(firstChild).toMatchSnapshot()
  })

  /*   it('should apply smile class, if `smiling=true', () => {
    render(<Avatar {...defaultProps} smiling />)
        render(<Smiling />)
    const element = screen.getByTestId('mouth-lips')
    expect(element).toHaveClass('--smile')
  })

  it('should apply talk class, if `talking=true', () => {
    render(<Avatar {...defaultProps} talking />)
        render(<Talking />)
    const element = screen.getByTestId('mouth-lips')
    expect(element).toHaveClass('--talk')
  }) */
})
