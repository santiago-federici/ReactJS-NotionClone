import { HiLightningBolt } from 'react-icons/hi'
import { RiFocus2Line } from 'react-icons/ri'
import { CgBoard } from 'react-icons/cg'
import { BsCardChecklist, BsPlus, BsChevronDown } from 'react-icons/bs'
import { AiOutlineSearch } from 'react-icons/ai'
import { BiDotsHorizontalRounded } from 'react-icons/bi'

import './Header.css'

export function Header() {
  return (

    <header>
      <ul>
        <li className="element selected">
          <RiFocus2Line />By Projects
        </li>
        <li className="element"><CgBoard />Board</li>
        <li className="element"><BsCardChecklist />All tasks</li>
        <li className="element"><BsPlus /></li>
      </ul>

      <ul>
        <li className="element">Filter</li>
        <li className="element">Sort</li>
        <li className="element"><HiLightningBolt /></li>
        <li className="element"><AiOutlineSearch /></li>
        <li className="element"><BiDotsHorizontalRounded /></li>
        <li className="new-btn">
          <div>New</div>
          <BsChevronDown />
        </li>
      </ul>
    </header>
  )
}
