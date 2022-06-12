import Image from 'next/image'
import Link from 'next/link'
import { destroyCookie } from 'nookies'
import { useRouter } from 'next/router'
import { useStore } from '../../store/store'
import Typography from '../Typography'

const Navbar = () => {
  const router = useRouter()
  const user = useStore((state) => state.user)
  const isRegisterPath = router.pathname.includes('register')
  const isLoginPath = router.pathname.includes('login')
  const isDashboardPath = router.pathname.includes('dashboard')

  const handleLogout = () => {
    destroyCookie(null, 'auth')
    router.push('/')
  }

  return (
    <div className="z-50 fixed bg-white min-w-full max-w-7xl mx-auto px-4 sm:px-6 py-4 border-b-2 border-indigo-600">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Link passHref href="/">
          <div className="flex items-center cursor-pointer">
            <Image
              height={50}
              width={50}
              className="h-8 w-auto sm:h-10"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt=""
            />
            <Typography
              as="span"
              className="ml-4 font-bold sm:text-2xl text-base text-indigo-600"
            >
              Crypto
            </Typography>
          </div>
        </Link>

        {isDashboardPath && user?.role === 'admin' && (
          <div className="">
            <div className="flex items-center justify-end md:flex-1">
              <p className="hidden sm:block whitespace-nowrap text-base font-medium text-indigo-600 mr-4">
                Wecolme {user?.email}
              </p>
              <Link passHref href="/admin">
                <a className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-indigo-600 ease-in duration-300 hover:-translate-y-1">
                  Admin
                </a>
              </Link>
              <button
                onClick={handleLogout}
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-900 hover:-translate-y-1 ease-in duration-300"
              >
                Logout
              </button>
            </div>
          </div>
        )}
        {isDashboardPath && user?.role === 'user' ? (
          <div className="">
            <div className="flex items-center justify-end md:flex-1">
              <p className="hidden sm:block whitespace-nowrap text-base font-medium text-indigo-600 mr-4">
                Wecolme {user?.email}
              </p>
              <button
                onClick={handleLogout}
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-900 hover:-translate-y-1 ease-in duration-300"
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          <div className="">
            <div className="flex items-center justify-end md:flex-1 lg:w-0">
              {!isLoginPath && !isDashboardPath && (
                <Link passHref href="/login">
                  <a className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-900 hover:-translate-y-1 ease-in duration-300">
                    Sign in
                  </a>
                </Link>
              )}
              {!isRegisterPath && !isDashboardPath && (
                <Link passHref href="/register">
                  <a className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-900 hover:-translate-y-1 ease-in duration-300">
                    Sign up
                  </a>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
