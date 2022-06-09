import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from '../../components'

jest.mock('next/router', () => ({
  useRouter: () => ({
    pathname: '',
    push: jest.fn(),
  }),
}))

describe('Navbar', () => {
  const makeSut = () => render(<Navbar />)
  it('should be render', () => {
    makeSut()
  })

  it('should be click on signin', async () => {
    makeSut()
    const button = screen.getByText(/Sign in/i)
    userEvent.click(button)

    expect(button).toHaveProperty('href', 'http://localhost/login')
  })

  it('should be click on sign up', async () => {
    makeSut()
    const button = screen.getByText(/Sign up/i)
    userEvent.click(button)

    expect(button).toHaveProperty('href', 'http://localhost/register')
  })
})
