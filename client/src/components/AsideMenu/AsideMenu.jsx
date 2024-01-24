import { useEffect } from 'react'

import { useAuth } from '../../hooks/useAuth'

import { CirclePlus, Clock, Dots, Download, EmptyPage, Plus, Search, Settings, Template, Trash, UserSearch } from '../Icons'

import './AsideMenu.css'

export function AsideMenu({ getAllTables, tables, setTableId, tablesUpdated, addAPage, deleteAPage }) {
  const { currentUser, logoutUser } = useAuth()

  useEffect(() => {
    if (currentUser) {
      getAllTables(currentUser.id)
    }
  }, [tablesUpdated])

  return (
    <aside className='aside-menu'>

      <div className="menu-username-container">
        <div className='users-first-letter'><p>{currentUser && currentUser.username.split('')[0]}</p></div>
        <p>{currentUser && currentUser.username}`s Notion</p>
      </div>

      <ul className='menu-options-container'>
        <li>
          <Search />
          Search
        </li>
        <li>
          <Clock />
          Updates
        </li>
        <li>
          <Settings />
          Settings & members
        </li>
        <li>
          <CirclePlus />
          New page
        </li>
      </ul>

      <ul className='menu-options-container'>
        {
          tables && tables.length > 0 && tables.map(table => (
            <li key={table.id} onClick={() => setTableId(table.id)}>
                <span className='icon-container'>
                  <EmptyPage />
                </span>
                {table.title}

                <span onClick={() => deleteAPage(table.id)}> <Dots /> </span>
            </li>
          ))
        }

        <li onClick={() => addAPage(currentUser && currentUser.id)}>
          <Plus />
          Add a page
        </li>
      </ul>

      <ul className='menu-options-container'>
        <li>
          <UserSearch />
          Create a teamspace
        </li>
        <li>
          <Template />
          Templates
        </li>
        <li>
          <Download />
          Import
        </li>
        <li>
          <Trash />
          Trash
        </li>
      </ul>

      <span className='logout-btn' onClick={() => logoutUser()}>Logout</span>
    </aside>
  )
}
