import { useForm, useFieldArray, Controller } from 'react-hook-form'
import { TextInput } from '../../components'
import { User } from '../../data/model'
import { httpClient } from '../../lib/http-client/http-client-api'
import { useStore } from '../../store/store'

const AdminScreen = () => {
  const { listUsers, setListUser } = useStore((state) => state)

  const { control, setValue, handleSubmit } = useForm({
    defaultValues: {
      users: listUsers,
    },
  })
  const { fields } = useFieldArray({
    control,
    name: 'users',
  })

  const handleDeleteUser = async (user: User) => {
    try {
      await httpClient.delete(`/delete/user?id=${user.id}`)
      const getUsers = localStorage.getItem('usersList')
      if (getUsers) {
        const formatUsers = JSON.parse(getUsers)
        const removedUser = formatUsers.filter(
          (item: User) => item.email !== user.email
        )
        if (removedUser.length > 0) {
          localStorage.setItem('usersList', JSON.stringify(removedUser))
          setListUser(removedUser)
          setValue('users', removedUser)
        } else {
          localStorage.removeItem('usersList')
          setListUser([])
          setValue('users', [])
        }
      }
    } catch (error) {
      console.log(error)
      alert('Error, try delete again')
    }
  }

  const handleUpdateUser = async (data: { users: User[] }, user: User) => {
    try {
      const findUser = data?.users?.find(
        (item: User) => item.email === user.email
      )

      await httpClient.put(`/update/user?id=${user.id}`)
      const getUsers = localStorage.getItem('usersList')
      if (getUsers) {
        const formatUsers = JSON.parse(getUsers)
        const updateList = formatUsers.map((item: User) => {
          if (item.email === findUser?.email) {
            return findUser
          }
          return item
        })
        localStorage.setItem('usersList', JSON.stringify(updateList))
        setListUser(updateList)
      }
    } catch (error) {
      console.log(error)
      alert('Error, try update again')
    }
  }

  if (listUsers.length <= 0)
    return (
      <div className="w-full h-full py-48 px-4 container mx-auto flex flex-col items-center">
        <p className="font-primary text-bold text-3xl">Users not found</p>
      </div>
    )

  return (
    <div className="w-full h-full py-48 px-4 container mx-auto flex flex-col items-center">
      <div className="flex flex-col gap-4">
        <div className="py-4 px-4 bg-white-600 rounded border-indigo-600 border-2 shadow-2xl">
          {fields.map((item, index) => (
            <div key={item.id}>
              <div className="flex flex-wrap gap-2">
                <div className="flex-1">
                  <div className="flex flex-col mb-4">
                    <p className="text-slate-900 font-bold mb-2">Email</p>
                    <Controller
                      control={control}
                      name={`users.${index}.email`}
                      rules={{
                        required: 'Email is required',
                      }}
                      render={({ field }) => (
                        <TextInput
                          onChange={field.onChange}
                          label="Email"
                          placeholder="Email"
                          id="email"
                          name={field.name}
                          value={field.value}
                          type="email"
                        />
                      )}
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col mb-4">
                    <p className="text-slate-900 font-bold mb-2">Role</p>
                    <Controller
                      control={control}
                      name={`users.${index}.role`}
                      rules={{
                        required: 'Role is required',
                      }}
                      render={({ field }) => (
                        <TextInput
                          onChange={field.onChange}
                          label="Role"
                          placeholder="Role"
                          id="role"
                          name={field.name}
                          value={field.value}
                          type="text"
                        />
                      )}
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col mb-4">
                    <p className="text-slate-900 font-bold mb-2">Spread</p>
                    <Controller
                      control={control}
                      name={`users.${index}.spread`}
                      rules={{
                        required: 'Spread is required',
                      }}
                      render={({ field }) => (
                        <TextInput
                          onChange={field.onChange}
                          label="Spread"
                          placeholder="Spread"
                          id="spread"
                          name={field.name}
                          value={field.value as any}
                          type="number"
                        />
                      )}
                    />
                  </div>
                </div>
                <div className="flex flex-1 justify-center items-center">
                  <div className="flex flex-col">
                    <div className="h-full flex items-center justify-center">
                      <button
                        onClick={() => handleDeleteUser(item)}
                        className="mr-2 whitespace-nowrap inline-flex items-center justify-center px-2 py-2 border-transparent rounded-md shadow-sm text-base font-medium text-indigo-600 border-2 border-indigo-600 hover:-translate-y-1 ease-in duration-300"
                      >
                        Delete
                      </button>
                      <button
                        onClick={handleSubmit((data) =>
                          handleUpdateUser(data, item)
                        )}
                        className="whitespace-nowrap inline-flex items-center justify-center px-2 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-900 hover:-translate-y-1 ease-in duration-300"
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AdminScreen
