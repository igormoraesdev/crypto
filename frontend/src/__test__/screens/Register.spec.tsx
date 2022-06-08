import { render, screen } from '@testing-library/react'
import { RegisterScreen } from '../../screens'

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
})
