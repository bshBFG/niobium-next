import { NextPage } from 'next'
import { PlusIcon } from '@heroicons/react/outline'

import { Layout, UsersTable } from '@/modules/dashboard/layouts'
import { Button } from '@/modules/dashboard/components/ui'

const Users: NextPage = () => {
  const people = [
    {
      id: 1,
      name: 'Jane Cooper',
      role: 'Admin',
      email: 'jane.cooper@example.com',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
      id: 2,
      name: 'Cody Fisher',
      role: 'Owner',
      email: 'cody.fisher@example.com',
      image:
        'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
  ]

  return (
    <Layout>
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <h2 className="mb-8 text-3xl font-semibold text-slate-700">Users</h2>
          <Button>
            <PlusIcon className="h-5 w-5 text-cyan-200" />
            <span>Add User</span>
          </Button>
        </div>
        <div className="flex overflow-hidden overflow-x-auto rounded-lg bg-white drop-shadow-md">
          <UsersTable people={people} />
        </div>
      </div>
    </Layout>
  )
}

export default Users
