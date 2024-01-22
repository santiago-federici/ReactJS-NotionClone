import { useState } from 'react'
import { updateMainContent, findRows, createRow, updateStatus, updatePriority } from '../services/rows'

export function useRows () {
  const [rows, setRows] = useState([])
  const [rowsUpdated, setRowsUpdated] = useState()
  const [localMainContent, setLocalMainContent] = useState({})

  const getRows = (tableId) => {
    findRows(tableId)
      .then(data => setRows(data))
      .catch(err => console.log('err from useRows: ', err))
  }

  const handleChangeLocalMainContent = (rowId, newMainContent) => {
    setLocalMainContent((prevLocalMainContent) => ({
      ...prevLocalMainContent,
      [rowId]: newMainContent
    }))
  }

  const addARow = (tableId) => {
    createRow(tableId)
      .then(data => setRowsUpdated(!rowsUpdated))
      .catch(err => console.log('err from useRows: ', err))
  }

  const getUpdatedMainContent = (rowId, newMainContent) => {
    updateMainContent({ rowId, newMainContent })
      .then(() => {
        setRowsUpdated(!rowsUpdated)
      })
      .catch((err) => console.log('err from useRows: ', err))
  }

  const getUpdatedStatus = (rowId, newStatus) => {
    updateStatus(rowId, newStatus)
      .then(data => setRowsUpdated(!rowsUpdated))
      .catch(err => console.log('err from useRows: ', err))
  }

  const getUpdatedPriority = (rowId, newPriority) => {
    updatePriority(rowId, newPriority)
      .then(data => setRowsUpdated(!rowsUpdated))
      .catch(err => console.log('err from useRows: ', err))
  }

  return { rows, setRows, getRows, rowsUpdated, setRowsUpdated, addARow, handleChangeLocalMainContent, getUpdatedMainContent, localMainContent, getUpdatedStatus, getUpdatedPriority }
}
