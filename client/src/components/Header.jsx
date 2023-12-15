import { Board, Bolt, ChevronDown, Dots, List, Plus, Search, Target } from './Icons'
import './Header.css'

export function Header() {
  return (

    <header className='views-header'>
      <ul>
        <li className="element selected">
          <Target />
          By Projects
        </li>
        <li className="element">
          <Board />
          Board
        </li>
        <li className="element">
          <List />
          All tasks
        </li>
        <li className="element">
          <Plus />
        </li>
      </ul>

      <ul>
        <li className="element">Filter</li>
        <li className="element">Sort</li>
        <li className="element"><Bolt /></li>
        <li className="element"><Search /></li>
        <li className="element"><Dots /></li>
        <li className="new-btn">
          <div>New</div>
          <ChevronDown />
        </li>
      </ul>
    </header>
  )
}
