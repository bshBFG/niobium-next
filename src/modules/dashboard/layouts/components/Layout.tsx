import { Navbar, Sidebar } from '../../components'
import { SidebarProvider } from '../../components/sidebar/SidebarContext'

type LayoutProps = {
  children: JSX.Element
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full overflow-x-hidden bg-slate-100 text-slate-500">
        <Sidebar />

        <div className="mx-auto flex flex-auto flex-col overflow-x-hidden md:ml-80">
          <Navbar />

          <div className="flex-auto px-4 py-4 md:px-8 md:py-8">{children}</div>
        </div>
      </div>
    </SidebarProvider>
  )
}

export { Layout }
