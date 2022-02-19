import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { Popover } from '@headlessui/react'

import Avatar from '@/public/avatars/avatar.png'
import { NavbarUserDialog, NavbarUserDialogProps } from './NavbarUserDialog'

const UserInfo = () => {
  const { data: session } = useSession()

  const user: NavbarUserDialogProps = {
    name: session?.user?.name || null,
    email: session?.user?.email || null,
    image: session?.user?.image || null,
  }

  return (
    <Popover className="relative">
      <Popover.Button className="flex h-10 w-10 drop-shadow-md">
        <Image
          className="overflow-hidden rounded-full"
          src={user.image || Avatar}
          height={40}
          width={40}
          alt={user.name || 'User avatar'}
          priority
        />
      </Popover.Button>

      <Popover.Panel className="container absolute right-0 z-10 mt-1 mr-1 flex h-max w-72 overflow-y-auto overflow-x-hidden rounded-md bg-white drop-shadow-md">
        <NavbarUserDialog {...user} />
      </Popover.Panel>
    </Popover>
  )
}

export { UserInfo }
