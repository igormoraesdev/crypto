import { TextInput, Typography } from '../../components'

const RegisterScreen = () => {
  return (
    <div className="h-screen bg-white">
      <div className="w-full h-full container mx-auto flex flex-col justify-start items-center">
        <div className="w-full min-h-full flex py-48 justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div>
              <Typography
                as="h2"
                className="mt-6 text-center text-3xl font-extrabold text-indigo-600"
              >
                Sign up
              </Typography>
            </div>
            <form className="mt-8 space-y-6" action="#" method="POST">
              <TextInput
                label="Email address"
                placeholder="Email address"
                id="email-address"
                name="email"
                type="email"
                autocomplete="email"
                required
              />
              <TextInput
                label="Password"
                placeholder="Password"
                id="email-address"
                name="password"
                type="password"
                autocomplete="current-password"
                required
              />
              <button
                type="submit"
                className="group relative text-base w-full flex justify-center py-4 px-4 border border-transparent font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterScreen
