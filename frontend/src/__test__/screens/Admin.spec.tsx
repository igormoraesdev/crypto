import { render } from '@testing-library/react'
import { AdminScreen } from '../../screens'

jest.mock('next/router', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}))

jest.mock('uuid', () => ({
  v4: jest.fn(),
}))

describe('AdminScreen', () => {
  const makeSut = () => render(<AdminScreen />)
  it('should be render', () => {
    makeSut()
  })
})
