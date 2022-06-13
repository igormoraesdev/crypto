type Props = {
  label: string
  name: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  value?: string
}

type InputProps = HTMLInputElement | Props

const TextInput = ({ label, name, onChange, value }: Props & InputProps) => {
  return (
    <div className="rounded -space-y-px">
      <div>
        <label htmlFor={name} className="sr-only">
          {label}
        </label>
        <input
          data-testid="textinput"
          onChange={onChange}
          id={name}
          name={name}
          value={value}
          className="appearance-none rounded relative block min-w-full px-3 py-3 border-2 font-primary border-gray-300 placeholder-gray-600 text-coolGray-900 focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 focus:z-10 sm:text-md text-md"
          placeholder={label}
        />
      </div>
    </div>
  )
}

export default TextInput
