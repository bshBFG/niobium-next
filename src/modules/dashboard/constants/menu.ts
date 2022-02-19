import { ChartPieIcon, CogIcon, UsersIcon } from '@heroicons/react/outline'
import { ComponentProps } from 'react'

type Item = {
  name: string
  url: string
  icon: (props: ComponentProps<'svg'>) => JSX.Element
  children: ChildItem[] | null
}

type ChildItem = {
  name: string
  url: string
}

type Menu = {
  label: string
  items: Item[]
}

const menu = [
  {
    label: 'Navigation',
    items: [
      {
        name: 'Dashboard',
        url: '/dashboard',
        icon: ChartPieIcon,
        children: null,
      },
      {
        name: 'Users',
        url: '/dashboard/users',
        icon: UsersIcon,
        children: [
          { name: 'Main', url: '/dashboard/users' },
          { name: 'Roles', url: '/dashboard/users/roles' },
        ],
      },
      {
        name: 'Settings',
        url: '/dashboard/settings',
        icon: CogIcon,
        children: null,
      },
    ],
  },
]

export { menu }
export type { Menu, Item, ChildItem }
