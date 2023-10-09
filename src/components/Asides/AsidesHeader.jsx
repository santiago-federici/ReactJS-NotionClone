import { useAside } from '../../hooks/useAside'
import { ChevronDown, ChevronRightPipe, ChevronUp, Clock, Dots, MaximizeArrows, Message, SidebarRight, Star } from '../Icons'

export function AsidesHeader() {
  const { setGroupAside, setTaskAside, chevronsForTasks } = useAside()

  const handleClickCloseAsides = () => {
    setGroupAside(false)
    setTaskAside(false)
  }

  return (
    <div className='asides-header'>
      <div>
        <span onClick={handleClickCloseAsides}><ChevronRightPipe /></span>
        <span><MaximizeArrows /></span>
        <span><SidebarRight /></span>
        {
          chevronsForTasks
            ? <div className='chevrons-tasks'>
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
