import { useEffect, useState } from 'react'
import { ChevronRight, CirclePlus, Clock, Download, EmptyPage, Plus, Scissors, Search, Settings, Target, Template, Trash, TrendingUp, UserSearch } from './Icons'
import './PagesAside.css'

export function PagesAside() {
  const [pages, setPages] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/pages/e144e0c6-9b56-11ee-b0a7-e0d464e5bd01')
      .then(res => res.json())
      .then(data => setPages(data))
  }, [])

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

  return (
    <aside className='fixed-pages-aside'>
      <div className="user-container">
        <img
          src="https://lh3.googleusercontent.com/a/AAcHTtc6qAUeOnXlMeW8kAEPVdkCl5UgiNSRJWoyezVHdRlP=s100"
        />
        <h3 className="pages-aside-username">Santiago Federicis Notion</h3>
      </div>

      <ul className='pages-aside__section'>
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

      <ul className='pages-aside__section'>
        {
          pages.map(page => (
            <li key={page.id}>
                <span className='icon-container'>
                  {renderIcon(page.icon)}
                </span>
                {page.title}
            </li>
          ))
        }

        <li>
          <Plus />
          Add a page
        </li>
      </ul>

      <ul className='pages-aside__section'>
        <li>
          <UserSearch />
          Create a team space
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
    </aside>
  )
}
