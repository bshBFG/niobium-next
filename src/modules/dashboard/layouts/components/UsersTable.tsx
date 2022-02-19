import Image from 'next/image'
import { PencilAltIcon, TrashIcon } from '@heroicons/react/outline'

import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '../../components'

type UsersTableProps = {
  people: any
}

const UsersTable = ({ people }: UsersTableProps) => {
  return (
    <div className="flex w-full flex-col">
      <div className="space-x-2 px-6 py-6">
        <span className="font-bold">All users</span>
        <span className="font-bold text-slate-400">{people.length}</span>
      </div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <input type="checkbox" name="" id="" />
            </TableCell>
            <TableCell>Order</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>
              <span className="sr-only">Edit</span>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {people.map((person: any) => (
            <TableRow key={person.email}>
              <TableCell>
                <input type="checkbox" />
              </TableCell>
              <TableCell>
                <div className="flex items-center">
                  <div className="relative h-10 w-10 flex-shrink-0">
                    <Image
                      className="rounded-full"
                      layout="fill"
                      src={person.image}
                      alt="user"
                    />
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-slate-700">
                      {person.name}
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div className="text-md text-slate-600">{person.email}</div>
              </TableCell>
              <TableCell>
                <span className="inline-flex rounded-full bg-green-100 px-3 text-xs font-semibold leading-7 text-green-800">
                  Active
                </span>
              </TableCell>
              <TableCell>{person.role}</TableCell>
              <TableCell>
                <button className="mr-4 hover:text-red-600">
                  <TrashIcon className="h-5 w-5" />
                </button>
                <button className="hover:text-indigo-600">
                  <PencilAltIcon className="h-5 w-5" />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export { UsersTable }
