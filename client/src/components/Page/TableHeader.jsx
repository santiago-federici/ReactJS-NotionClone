import { Bolt, ChevronDown, Dots, Plus, Search } from '../Icons'

export function TableHeader () {
  return (
    <section className='table-view-section'>
      <div className='header-views'>
        <p>Table</p>
        <Plus />
      </div>

      <div className='header-options-container'>
        <p>Filter</p>
        <p className='sort'>Sort</p>
        <Bolt />
        <Search />
        <Dots />
        <span className='new-btn'>New <ChevronDown /></span>
      </div>
    </section>
  )
}
