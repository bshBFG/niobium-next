import { ReactNode } from 'react'

import { TableLvlContext } from './TableLvlContext'

type TableHeadProps = {
  children: ReactNode
}

const TableBody = ({ children }: TableHeadProps) => (
  <TableLvlContext.Provider value={{ parent: 'body' }}>
    <tbody className="divide-y divide-slate-200 bg-white">{children}</tbody>
  </TableLvlContext.Provider>
)

export { TableBody }
