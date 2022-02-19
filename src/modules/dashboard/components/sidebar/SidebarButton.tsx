import { useDispatchSidebar } from './useSidebar'

const SidebarButton = (props: React.ComponentProps<'button'>) => {
  const dispatchSidebar = useDispatchSidebar()

  const { children, ...rest } = props

  return (
    <button
      {...rest}
      onClick={() => dispatchSidebar({ type: 'TOGGLE_SIDEBAR' })}
    >
      {children}
    </button>
  )
}

export { SidebarButton }
