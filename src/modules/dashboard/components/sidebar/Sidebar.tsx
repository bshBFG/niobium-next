import { SidebarLogo } from './SidebarLogo'
import { SidebarNav } from './SidebarNav'
import { useDispatchSidebar, useSidebar } from './useSidebar'

const Sidebar = () => {
  const { mobileSidebar, showSidebar } = useSidebar()
  const dispatchSidebar = useDispatchSidebar()

  return (
    <>
      <div
        className={`fixed left-0 top-0 z-50 flex h-screen w-80 transform flex-col bg-slate-700 drop-shadow-xl duration-200 md:translate-x-0 ${
          showSidebar ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-20 items-center px-8">
          <SidebarLogo />
        </div>

        <div className="flex flex-auto flex-col">
          <SidebarNav />
        </div>
      </div>
      {mobileSidebar && showSidebar && (
        <div
          className="absolute top-0 left-0 z-10 h-screen w-screen bg-black/40"
          onClick={() => dispatchSidebar({ type: 'TOGGLE_SIDEBAR' })}
        ></div>
      )}
    </>
  )
}

export { Sidebar }
