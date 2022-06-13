import { setCookie } from 'nookies'
import { v4 as uuidv4 } from 'uuid'
import { useRouter } from 'next/router'
import { useForm, Controller } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { TextInput, Typography } from '../../components'
import { httpClient } from '../../lib/http-client/http-client-api'
import { useStore } from '../../store/store'
import { User } from '../../data/model'

interface LoginData {
  email: string
  password: string
}

const LoginScreen = () => {
  const router = useRouter()
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginData>()

  const setUser = useStore((state) => state.setUser)

  const handleSubmitLogin = async (data: LoginData) => {
    try {
      const usersList = localStorage.getItem('usersList')
      const formatedList = JSON.parse(usersList as string)
      const hasEmail = formatedList?.find(
        (item: User) => item.email === data.email
      )
      if (data.email === 'admin@example.com') {
        const response = await httpClient.get(`/login?email=${data.email}`)

        const dataStore = {
          user: {
            ...response.data,
            id: uuidv4(),
          },
          token: uuidv4(),
        }
        setUser(response.data)
        setCookie(null, 'auth', JSON.stringify(dataStore), {
          maxAge: 60 * 60,
        })
        router.push('/dashboard')
      } else if (hasEmail) {
        await httpClient.get(`/login?email=${data.email}`)
        const dataStore = {
          user: {
            ...hasEmail,
            id: uuidv4(),
          },
          token: uuidv4(),
        }
        setUser(hasEmail)
        router.push('/dashboard')
        setCookie(null, 'auth', JSON.stringify(dataStore), {
          maxAge: 60 * 60,
        })
      } else {
        throw new Error()
      }
    } catch (error) {
      alert('Credentials not found')
    }
  }

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
                Login
              </Typography>
            </div>
            <form
              className="mt-8 space-y-6"
              onSubmit={handleSubmit(handleSubmitLogin)}
            >
              <Controller
                control={control}
                name="email"
                rules={{
                  required: 'Email is required',
                  pattern: {
                    message: 'Email format wrong',
                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  },
                }}
                render={({ field }) => (
                  <TextInput
                    onChange={field.onChange}
                    label="Email address"
                    placeholder="Email address"
                    id="email-address"
                    name={field.name}
                    value={field.value}
                    type="email"
                    autocomplete="email"
                  />
                )}
              />
              <ErrorMessage
                className="text-red-600"
                errors={errors}
                name="email"
                as="span"
              />
              <Controller
                control={control}
                name="password"
                rules={{
                  required: 'Password is required',
                }}
                render={({ field }) => (
                  <TextInput
                    onChange={field.onChange}
                    label="Password"
                    placeholder="Password"
                    id="password"
                    name={field.name}
                    value={field.value}
                    type="password"
                    autocomplete="current-password"
                  />
                )}
              />
              <ErrorMessage
                className="text-red-600"
                errors={errors}
                name="password"
                as="span"
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
export default LoginScreen
