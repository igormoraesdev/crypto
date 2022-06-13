import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { HomeScreen } from '../../screens'

jest.mock('next/router', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}))

jest.mock('uuid', () => ({
  v4: jest.fn(),
}))

describe('HomeScreen', () => {
  const makeSut = () => render(<HomeScreen />)
  it('should be render', () => {
    makeSut()
  })

  it('should be find title', () => {
    makeSut()
    const text = screen.getByText(/Crypto/i)
    expect(text).toBeInTheDocument()
  })

  it('should be click on join us', async () => {
    makeSut()
    const button = screen.getByText(/Join us now/i)
    userEvent.click(button)
    expect(button).toHaveProperty('href', 'http://localhost/login')
  })
})
