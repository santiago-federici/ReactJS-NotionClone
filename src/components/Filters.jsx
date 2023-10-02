import { BsPlus } from 'react-icons/bs'
import { BiChevronDown } from 'react-icons/bi'
import { CiBrightnessUp } from 'react-icons/ci'
import { FaExclamation } from 'react-icons/fa'
import { RiFocus2Line } from 'react-icons/ri'
import { RxCalendar } from 'react-icons/rx'

import './Filters.css'

export function Filters() {
  return (

    <div className="filters-container">
      <ul>
        <li><CiBrightnessUp /><span> Status <BiChevronDown /></span></li>
        <li className='exclamation'><FaExclamation /><span>Priority <BiChevronDown /></span></li>
        <li><RiFocus2Line /><span>Project <BiChevronDown /></span></li>
        <li><RxCalendar /><span>Due <BiChevronDown /></span></li>
      </ul>
      <button className="add-filter-btn"><BsPlus />Add filter</button>
    </div>
  )
}
