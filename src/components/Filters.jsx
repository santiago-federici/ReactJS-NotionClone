import { BsPlus, BsChevronDown } from 'react-icons/bs'

import './Filters.css'

export function Filters() {
  return (

    <div className="filters-container">
      <ul>
        <li className="element">Status <BsChevronDown /></li>
        <li>Priority <BsChevronDown /></li>
        <li>Project <BsChevronDown /></li>
        <li>Due <BsChevronDown /></li>
      </ul>
      <button className="add-btn"><BsPlus />Add filter</button>
    </div>
  )
}
