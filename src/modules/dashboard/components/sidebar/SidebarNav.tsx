import { useRouter } from 'next/router'

import { SidebarNavItem } from './SidebarNavItem'
import { menu } from '../../constants/menu'

const SidebarNav = () => {
  const router = useRouter()

  return (
    <>
      {menu.map((group) => (
        <div key={group.label} className="mt-4">
          <span className="flex px-8 py-6 text-sm uppercase text-white">
            {group.label}
          </span>
          <ul className="flex flex-col">
            {group.items.map((item) => (
              <SidebarNavItem
                key={item.url}
                item={item}
                route={router.asPath}
              />
            ))}
          </ul>
        </div>
      ))}
    </>
  )
}

export { SidebarNav }
