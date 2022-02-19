import { Disclosure } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/outline'
import Link from 'next/link'

import { Item } from '../../constants/menu'

type SidebarChildNavProps = {
  route: string
  item: Item
}

const SidebarChildNav = ({ item, route }: SidebarChildNavProps) => {
  const containUrl = item.children?.map((child) => child.url).includes(route)

  return (
    <Disclosure defaultOpen={containUrl}>
      {({ open }) => {
        return (
          <>
            <Disclosure.Button className="flex h-12 w-full items-center justify-start px-8 text-slate-400 hover:text-cyan-500">
              <div className="flex flex-1 items-center justify-start space-x-2">
                {<item.icon className="h-4 w-4" />}
                <span>{item.name}</span>
              </div>
              <ChevronRightIcon
                className={`h-4 w-4 transition ${
                  open ? 'rotate-90 transform' : ''
                }`}
              />
            </Disclosure.Button>
            {open && (
              <Disclosure.Panel static as="ul">
                {item.children?.map((child) => (
                  <li key={child?.name}>
                    <Link href={child.url}>
                      <a
                        className={`flex h-12 w-full items-center justify-start px-16 ${
                          route === child.url
                            ? 'text-cyan-500'
                            : 'hover:text-cyan-500'
                        }`}
                      >
                        {child?.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </Disclosure.Panel>
            )}
          </>
        )
      }}
    </Disclosure>
  )
}

export { SidebarChildNav }
