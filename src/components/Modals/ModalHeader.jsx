import { ChevronDown, ChevronUp, Clock, Dots, DoubleChevronRight, MaximizeArrows, Message, SidebarRight, Star } from '../Icons'

import './Modals.css'

export function ModalHeader({ taskModal }) {
  return (
    <div className='group-modal-header'>
      <div>
        <DoubleChevronRight />
        <MaximizeArrows />
        <SidebarRight />
        {
          taskModal
            ? <div className='chevrons-task-modal'><ChevronUp /><ChevronDown /></div>
            : <></>
        }
      </div>
      <div>
        <p>Share</p>
        <Message />
        <Clock />
        <Star />
        <Dots />
      </div>
    </div>
  )
}
