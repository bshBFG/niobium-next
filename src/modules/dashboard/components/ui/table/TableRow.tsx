import { ReactNode, useContext } from 'react'

import { TableLvlContext } from './TableLvlContext'

type TableRowProps = {
  children: ReactNode
}

const TableRow = ({ children }: TableRowProps) => {
  const context = useContext(TableLvlContext)

  if (context?.parent === 'head') {
    return <tr>{children}</tr>
  }

  return <tr className="hover:bg-slate-50">{children}</tr>
}

export { TableRow }
