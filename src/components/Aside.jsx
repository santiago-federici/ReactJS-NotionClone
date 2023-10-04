import { ChevronRight, CirclePlus, Clock, Download, Plus, Scissors, Search, Settings, Target, Template, Trash, TrendingUp, UserSearch } from './Icons'
import './Aside.css'

export function Aside() {
  return (
    <aside className='fixed-aside'>
      <div className="user-container">
        <img
          src="https://lh3.googleusercontent.com/a/AAcHTtc6qAUeOnXlMeW8kAEPVdkCl5UgiNSRJWoyezVHdRlP=s100"
        />
        <h3 className="aside-username">Santiago Federicis Notion</h3>
      </div>

      <section className='aside__section'>
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

      <section className='aside__section'>
        <p>
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
        </p>
        <p>
          <Plus />
          Add a page
        </p>
      </section>

      <section className='aside__section'>
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
