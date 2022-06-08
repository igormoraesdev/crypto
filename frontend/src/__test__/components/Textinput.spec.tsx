import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TextInput } from '../../components'

describe('TextInput', () => {
  const onChange = jest.fn()
  const makeSut = () =>
    render(
      <TextInput onChange={onChange} label="Email" name="email" type="email" />
    )
  it('should be render', () => {
    makeSut()
  })

  it('should be change the value', async () => {
    makeSut()
    const input = screen.getByTestId(/textinput/i)
    await userEvent.type(input, 'teste')
    expect(input).toHaveValue('teste')
  })
})
