import { useCallback, useState } from 'react'
import { changeRowMainContent, findRows } from '../services/rows'
import debounce from 'just-debounce-it'

export function useRows (tableId) {
  const [rows, setRows] = useState([])

  const getRows = () => {
    findRows(tableId)
      .then(data => setRows(data))
      .catch(err => console.log('err from useRows: ', err))
  }

  const [rowsUpdated, setRowsUpdated] = useState()

  const debouncedGetRowMainContent = useCallback(
    debounce((rowId, newMainContent) => {
      changeRowMainContent({ rowId, newMainContent })
        // .then(setRowsUpdated(!rowsUpdated))
        .then(() => getRows(tableId))
        .catch(err => console.log('err from useRows: ', err))
    }, 300)
    , [])

  return { rows, getRows, rowsUpdated, setRowsUpdated, getRowMainContent: debouncedGetRowMainContent }
}
