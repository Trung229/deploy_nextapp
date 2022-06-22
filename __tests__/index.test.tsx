import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'
import ReactTestUtils from 'react-dom/test-utils';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)
    expect(2 + 2).toEqual(4)
  })
})
