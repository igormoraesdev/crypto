import { render } from '@testing-library/react'
import { DashboardScreen } from '../../screens'

jest.mock('next/router', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}))

jest.mock('uuid', () => ({
  v4: jest.fn(),
}))

describe('DashboardScreen', () => {
  const props = {
    user: {
      email: 'admin@example.com',
      role: 'admin',
      spread: 1,
      id: '1',
    },
  }
  const makeSut = () => render(<DashboardScreen {...props} />)
  it('should be render', () => {
    makeSut()
  })
})
