import { useContext } from 'react'
import { SidebarStoreContext, SidebarDispatchContext } from './SidebarContext'

const useSidebar = () => {
  return useContext(SidebarStoreContext)
}

const useDispatchSidebar = () => {
  return useContext(SidebarDispatchContext)
}

export { useSidebar, useDispatchSidebar }
