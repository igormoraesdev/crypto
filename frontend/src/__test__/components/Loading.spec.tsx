import { render } from '@testing-library/react'
import { Loading } from '../../components'

describe('TextInput', () => {
  const makeSut = () => render(<Loading />)
  it('should be render', () => {
    makeSut()
  })
})
