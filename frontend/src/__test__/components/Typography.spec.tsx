import { render, screen } from '@testing-library/react'
import { Typography } from '../../components'

describe('Typography', () => {
  const makeSut = () =>
    render(
      <Typography className="text-black" as="p">
        Title
      </Typography>
    )
  it('should be render', () => {
    makeSut()
  })

  it('should be test children value', () => {
    makeSut()
    const text = screen.getByText(/Title/i)
    expect(text).toBeInTheDocument()
  })
})
