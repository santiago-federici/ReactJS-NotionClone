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

      <section className='pages-aside__section'>
        <p>
          <Search />
          Search
        </p>
        <p>
          <Clock />
          Updates
        </p>
        <p>
          <Settings />
          Settings & members
        </p>
        <p>
          <CirclePlus />
          New page
        </p>
      </section>

      <section className='pages-aside__section'>
        {/* <p>
          <span className='chevron-container'>
            <ChevronRight />
          </span>
          <Scissors />
          Taks List
        </p>
        <p>
          <span className='chevron-container'>
            <ChevronRight />
          </span>
          <TrendingUp />
          Tasks
        </p>
        <p>
          <span className='chevron-container'>
            <ChevronRight />
          </span>
          <Target />
          Projects
        </p> */}

        <ul>
          {
            pages.map(page => (
              <li key={page.id}>
                <p>
                  {/* <TrendingUp /> */}
                  {renderIcon(page.icon)}
                  {page.title}
                </p>
              </li>
            ))
          }
          <li>
            <p>
              <Plus />
              Add a page
            </p>
          </li>
        </ul>
      </section>

      <section className='pages-aside__section'>
        <p>
          <UserSearch />
          Create a team space
        </p>
        <p>
          <Template />
          Templates
        </p>
        <p>
          <Download />
          Import
        </p>
        <p>
          <Trash />
          Trash
        </p>
      </section>
    </aside>
  )
}
