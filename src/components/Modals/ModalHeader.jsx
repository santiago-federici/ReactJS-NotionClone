import { useModal } from '../../hooks/useModal'
import { ChevronDown, ChevronRightPipe, ChevronUp, Clock, Dots, MaximizeArrows, Message, SidebarRight, Star } from '../Icons'

export function ModalHeader() {
  const { modal, setModal, chevronsForTasks } = useModal()

  return (
    <div className='group-modal-header'>
      <div>
        <span onClick={() => setModal(!modal)}><ChevronRightPipe /></span>
        <span><MaximizeArrows /></span>
        <span><SidebarRight /></span>
        {
          chevronsForTasks
            ? <div className='chevrons-task-modal'>
              <span><ChevronUp /></span>
              <span><ChevronDown /></span>
            </div>
            : <></>
        }
      </div>
      <div>
        <p>Share</p>
        <span><Message /></span>
        <span><Clock /></span>
        <span><Star /></span>
        <span><Dots /></span>
      </div>
    </div>
  )
}
