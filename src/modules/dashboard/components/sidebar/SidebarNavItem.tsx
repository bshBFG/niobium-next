import Link from 'next/link'

import { SidebarChildNav } from './SidebarChildNav'
import { Item } from '../../constants/menu'

type SidebarNavItemProps = {
  route: string
  item: Item
}

const SidebarNavItem = ({ item, route }: SidebarNavItemProps) => {
  return (
    <li
      className={`flex flex-col ${
        (item.children && route.includes(item.url)) || route === item.url
          ? 'bg-slate-800 bg-opacity-50 drop-shadow-md before:absolute before:top-0 before:left-0 before:h-full before:w-[2px] before:bg-cyan-500'
          : ''
      } `}
    >
      {item.children ? (
        <SidebarChildNav item={item} route={route} />
      ) : (
        <Link href={item.url}>
          <a
            className={`flex h-12 w-full items-center justify-start px-8 hover:text-cyan-500 ${
              route === item.url ? 'text-white' : 'text-slate-400'
            }`}
          >
            <div className="flex flex-1 items-center justify-start space-x-2">
              {<item.icon className="h-4 w-4" />}
              <span className="">{item.name}</span>
            </div>
          </a>
        </Link>
      )}
    </li>
  )
}

export { SidebarNavItem }
