import React from 'react'
type Props = {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h5' | 'span' | 'p'
  children: React.ReactNode
  className: string | undefined
}
const Typography = ({ children, as, ...props }: Props) => {
  return React.createElement(
    as,
    {
      ...(props as HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement),
    },
    children
  )
}

export default Typography
