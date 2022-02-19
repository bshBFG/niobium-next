import { ReactNode } from 'react'

import { TableLvlContext } from './TableLvlContext'

type TableHeadProps = {
  children: ReactNode
}

const TableHead = ({ children }: TableHeadProps) => (
  <TableLvlContext.Provider value={{ parent: 'head' }}>
    <thead className="divide-slate-200 border-y bg-slate-50">{children}</thead>
  </TableLvlContext.Provider>
)

export { TableHead }
