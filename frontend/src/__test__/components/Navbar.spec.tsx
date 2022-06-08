import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from '../../components'

describe('Navbar', () => {
  const makeSut = () => render(<Navbar />)
  it('should be render', () => {
    makeSut()
  })

  it('should be click on signin', () => {
    makeSut()
    const button = screen.getByText(/Sign in/i)
    userEvent.click(button)
    expect(button).toHaveAttribute('href', '#')
  })

  it('should be click on sign up', () => {
    makeSut()
    const button = screen.getByText(/Sign up/i)
    userEvent.click(button)
    expect(button).toHaveAttribute('href', '#')
  })
})
