import React, { createContext, Dispatch, useEffect, useReducer } from 'react'

import { useBreakpoint } from '@/common/hooks'

const SIDEBAR_BREAKPOINTS = ['md', 'lg', 'xl', '2xl']

type SidebarStore = {
  mobileSidebar: boolean
  showSidebar: boolean
}

type SidebarActions = {
  type: 'TOGGLE_SIDEBAR' | 'MOBILE_SIDEBAR' | 'DESCTOP_SIDEBAR'
}

const reducer = (state: SidebarStore, action: SidebarActions): SidebarStore => {
  switch (action.type) {
    case 'TOGGLE_SIDEBAR':
      return {
        ...state,
        showSidebar: !state.showSidebar,
      }
    case 'MOBILE_SIDEBAR':
      return {
        mobileSidebar: true,
        showSidebar: false,
      }
    case 'DESCTOP_SIDEBAR':
      return {
        mobileSidebar: false,
        showSidebar: true,
      }
    default:
      throw new Error('Incorrect Action')
  }
}

const SidebarStoreContext = createContext({} as SidebarStore)
const SidebarDispatchContext = createContext({} as Dispatch<SidebarActions>)

type SidebarProviderProps = {
  children: JSX.Element
}

const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const breakpoints = useBreakpoint()

  const [state, dispatch] = useReducer(reducer, {
    mobileSidebar: true,
    showSidebar: false,
  })

  useEffect(() => {
    if (SIDEBAR_BREAKPOINTS.includes(breakpoints || '')) {
      dispatch({ type: 'DESCTOP_SIDEBAR' })
    } else {
      dispatch({ type: 'MOBILE_SIDEBAR' })
    }
  }, [breakpoints])

  return (
    <SidebarDispatchContext.Provider value={dispatch}>
      <SidebarStoreContext.Provider value={state}>
        {children}
      </SidebarStoreContext.Provider>
    </SidebarDispatchContext.Provider>
  )
}

export { SidebarStoreContext, SidebarDispatchContext, SidebarProvider }
