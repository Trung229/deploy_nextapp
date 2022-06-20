import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'
import ReactTestUtils from 'react-dom/test-utils';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: "Welcome to my",
      hidden: true
    })

    const body = screen.getByLabelText("yahalo");

    expect(heading).toBeInTheDocument()
  })
})
