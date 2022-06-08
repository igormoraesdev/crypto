import { render, screen } from '@testing-library/react'
import { HomeScreen } from '../../screens'

describe('HomeScreen', () => {
  const makeSut = () => render(<HomeScreen />)
  it('should be render', () => {
    makeSut()
  })

  it('should be find title', () => {
    makeSut()
    const text = screen.getByText(/The World’s Best Crypto House/i)
    expect(text).toBeInTheDocument()
  })
})
