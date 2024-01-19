import { useState } from 'react'
import { createTable, findTable, findAllTables, deleteTable, updateTitle } from '../services/tables'

export function useTables() {
  const [tables, setTables] = useState()
  const [tablesUpdated, setTablesUpdated] = useState(false)
  const [tableId, setTableId] = useState(0)
  const [tableInfo, setTableInfo] = useState([])

  const getAllTables = (userId) => {
    findAllTables(userId)
      .then(data => setTables(data))
      .catch(err => console.log('err from useTables: ', err))
  }

  const getTable = (tableId) => {
    findTable(tableId)
      .then(data => setTableInfo(data))
      .catch(err => console.log('err from useTables: ', err))
  }

  const addAPage = (userId) => {
    createTable(userId)
      .then(data => { if (data) setTablesUpdated(!tablesUpdated) })
      .catch(err => console.log('err from useTables: ', err))
  }

  const deleteAPage = (tableId) => {
    deleteTable(tableId)
      .then(data => { if (data) setTablesUpdated(!tablesUpdated) })
      .catch(err => console.log('err from useTables: ', err))
  }

  const updateTableTitle = (newTitle, tableId) => {
    updateTitle(newTitle, tableId)
      .then(data => { if (data) setTablesUpdated(!tablesUpdated) })
      .catch(err => console.log('err from useTables: ', err))
  }

  return { getAllTables, getTable, tableInfo, tables, tablesUpdated, addAPage, deleteAPage, tableId, setTableId, updateTableTitle }
}
