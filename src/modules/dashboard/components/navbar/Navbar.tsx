import Link from 'next/link'
import { ExternalLinkIcon, MenuAlt3Icon } from '@heroicons/react/outline'

import { UserInfo } from './NavbarUserAvatar'
import { SidebarButton } from '../sidebar'

const Navbar = () => {
  return (
    <div className="flex h-16 w-full items-center justify-end space-x-5 px-4">
      <SidebarButton className="px-4 hover:text-cyan-500 md:hidden">
        <MenuAlt3Icon className="h6 w-6" />
      </SidebarButton>
      <div className="flex-1"></div>
      <Link href="/">
        <a className="p-2 hover:text-cyan-500">
          <ExternalLinkIcon className="h-6 w-6" />
        </a>
      </Link>
      <UserInfo />
    </div>
  )
}

export { Navbar }
