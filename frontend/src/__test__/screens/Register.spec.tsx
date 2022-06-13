import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RegisterScreen } from '../../screens'

jest.mock('uuid', () => ({
  v4: jest.fn(),
}))

describe('RegisterScreen', () => {
  const makeSut = () => render(<RegisterScreen />)
  it('should be render', () => {
    makeSut()
  })

  it('should be find title', () => {
    makeSut()
    const text = screen.getByText(/Sign up/i)
    expect(text).toBeInTheDocument()
  })
  it('should be click on button register', () => {
    makeSut()
    const button = screen.getByRole('button', { name: /Send/i })
    userEvent.click(button)
    expect(button).toBeInTheDocument()
  })
})
