import { Calendar, ChevronDown, Exclamation, Plus, Sun, Target } from './Icons'

import './Filters.css'

export function Filters() {
  return (

    <div className="filters-container">
      <ul>
        <li><Sun /><span>Status <ChevronDown /></span></li>
        <li><Exclamation /><span>Priority <ChevronDown /></span></li>
        <li><Target /><span>Project <ChevronDown /></span></li>
        <li><Calendar /><span>Due <ChevronDown /></span></li>
      </ul>
      <button className="add-filter-btn"><Plus />Add filter</button>
    </div>
  )
}
