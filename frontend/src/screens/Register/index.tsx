import { useForm, Controller } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'
import { setCookie } from 'nookies'
import { ErrorMessage } from '@hookform/error-message'
import { TextInput, Typography } from '../../components'
import { httpClient } from '../../lib/http-client/http-client-api'
import { useStore } from '../../store/store'
import { useRouter } from 'next/router'
interface RegisterData {
  email: string
  password: string
}

const RegisterScreen = () => {
  const router = useRouter()
  const { setUser, listUsers } = useStore((state) => state)
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RegisterData>()

  const handleRegister = async (data: RegisterData) => {
    const payload = {
      email: data.email,
      password: data.password,
    }
    try {
      await httpClient.post('/register', payload)
      const dataStore = {
        user: {
          ...payload,
          role: 'user',
          spread: 1,
          id: uuidv4(),
        },
        token: uuidv4(),
      }
      setUser(dataStore?.user)
      router.push('/dashboard')

      const newListUsers = [...listUsers, dataStore.user]

      localStorage.setItem('usersList', JSON.stringify(newListUsers))

      setCookie(null, 'auth', JSON.stringify(dataStore), {
        maxAge: 60 * 60,
      })
    } catch (error) {
      alert('Error, please check if server running')
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
                Sign up
              </Typography>
            </div>
            <form
              onSubmit={handleSubmit(handleRegister)}
              className="mt-8 space-y-6"
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

export default RegisterScreen
