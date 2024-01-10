import { useContext, useEffect, useState } from 'react'

import { AuthContext } from '../context/auth'

import { CirclePlus, Clock, Dots, Download, EmptyPage, Plus, Search, Settings, Target, Template, Trash, TrendingUp, UserSearch } from './Icons'

import './AsideMenu.css'

export function AsideMenu() {
  const renderIcon = (icon) => {
    switch (icon) {
      case 'TrendingUp':
        return <TrendingUp />
      case 'Target':
        return <Target />
      default:
        return <EmptyPage />
    }
  }

  const { currentUser } = useContext(AuthContext)
  const [tables, setTables] = useState()

  useEffect(() => {
    fetch(`http://localhost:3000/tables/${currentUser.id}`)
      .then(res => res.json())
      .then(data => {
        setTables(data)
      })
  }, [])

  const handleAddAPage = () => {
    fetch('http://localhost:3000/tables',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId: currentUser.id })
      })
      .then(res => res.json())
      .then(data => {
        console.log(data.title)
        const newTables = [...tables, data]
        setTables(newTables)
      })
      .catch(err => console.log(err))
  }

  const handleDeleteAPage = (tableId) => {
    fetch(`http://localhost:3000/tables/${tableId}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(data => {
        const newTables = tables.filter(table => table.id !== data.id)
        setTables(newTables)
      })
      .catch(err => console.log(err))
  }

  const handleLogout = () => {
    fetch('http://localhost:3000/auth/logout')
      // .then(res => console.log(res))
      .then(res => res.json())
      .then(data => console.log(data))
  }

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
            <li key={table.id}>
                <span className='icon-container'>
                  {renderIcon(table.icon)}
                </span>
                {table.title}

                <span onClick={(id) => handleDeleteAPage(table.id)}> <Dots /> </span>
            </li>
          ))
        }

        <li onClick={() => handleAddAPage()}>
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

      <button onClick={() => handleLogout()}>Logout</button>
    </aside>
  )
}
