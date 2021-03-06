import { render, screen } from '@testing-library/react'
import { LoginScreen } from '../../screens'

jest.mock('uuid', () => ({
  v4: jest.fn(),
}))

describe('LoginScreen', () => {
  const makeSut = () => render(<LoginScreen />)
  it('should be render', () => {
    makeSut()
  })

  it('should be find title', () => {
    makeSut()
    const text = screen.getByText(/Login/i)
    expect(text).toBeInTheDocument()
  })
})
