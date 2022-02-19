import { ReactNode } from 'react'

type TableProps = {
  children: ReactNode
}

const Table = ({ children }: TableProps) => (
  <table className="min-w-full">{children}</table>
)

export { Table }
