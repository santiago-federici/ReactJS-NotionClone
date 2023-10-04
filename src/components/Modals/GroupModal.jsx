import { ModalHeader } from './ModalHeader'
import './Modals.css'

export function GroupModal({ taskModal }) {
  return (
    <aside className='modal'>
      <ModalHeader taskModal={taskModal} />
    </aside>
  )
}
