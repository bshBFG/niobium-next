import { ReactNode, useContext } from 'react'

import { TableLvlContext } from './TableLvlContext'

type TableCellProps = {
  children: ReactNode
  as?: 'th' | 'td'
}

const TableCell = ({ children, as = 'td' }: TableCellProps) => {
  const context = useContext(TableLvlContext)

  if (context?.parent === 'head') {
    return (
      <th className="px-6 py-4 text-left text-xs font-semibold uppercase text-slate-500">
        {children}
      </th>
    )
  }

  return (
    <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-500">
      {children}
    </td>
  )
}

export { TableCell }
