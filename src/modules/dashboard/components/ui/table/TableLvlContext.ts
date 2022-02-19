import { createContext } from 'react'

type TableLvlContextStore = {
  parent: 'head' | 'body' | 'footer'
}

const TableLvlContext = createContext<TableLvlContextStore | null>(null)

export { TableLvlContext }
