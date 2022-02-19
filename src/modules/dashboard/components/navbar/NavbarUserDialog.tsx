import Image from 'next/image'
import { signOut } from 'next-auth/react'
import { LogoutIcon, PencilAltIcon } from '@heroicons/react/outline'

import Avatar from '@/public/avatars/avatar.png'

type NavbarUserDialogProps = {
  name: string | null
  email: string | null
  image: string | null
}

const NavbarUserDialog = ({ name, email, image }: NavbarUserDialogProps) => {
  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex items-center space-x-2 border-b bg-slate-600 p-6">
        <Image
          className="rounded-full"
          src={image ?? Avatar}
          width={60}
          height={60}
          alt={name || 'User avatar'}
        />
        <div className="flex flex-col space-y-1">
          <span className="bold text-xl text-slate-50">
            {name || 'John Doe'}
          </span>
          <span className="text-sm text-slate-200">
            {email || 'john@doe.com'}
          </span>
        </div>
      </div>
      <div className="flex h-full w-full flex-col items-center justify-center p-6">
        <button className="flex w-full items-center space-x-2 rounded-md p-3 hover:bg-indigo-50 hover:text-indigo-400">
          <PencilAltIcon className="h-5 w-5" />
          <span>Account settings</span>
        </button>
        <button
          className="flex w-full items-center space-x-2 rounded-md p-3 hover:bg-indigo-50 hover:text-indigo-400"
          onClick={() => signOut()}
        >
          <LogoutIcon className="h-5 w-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  )
}

export { NavbarUserDialog }
export type { NavbarUserDialogProps }
