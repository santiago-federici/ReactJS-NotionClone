import { ChevronDownBigger, ChevronRightPipe, ChevronUp, MaximizeArrows, OpenSidebar, Trash } from '../Icons'
import { PriorityComponent } from '../Page/PriorityComponent'
import { StatusComponent } from '../Page/StatusComponent'
import './SidebarComponent.css'

export function SidebarComponent (
  {
    rows,
    mainContent,
    status,
    id,
    priority,
    due,
    description,
    index,
    setOpenSidebarRowIndex,
    localMainContent,
    getUpdatedMainContent,
    handleChangeLocalMainContent,
    localDescription,
    getUpdatedDescription,
    handleChangeLocalDescription,
    getUpdatedStatus,
    getUpdatedPriority,
    getDeletedRow
  }) {
  return (
    <aside className="sidebar">
      <div className='rotate-content'>
        <header className='sidebar-header'>
          <span className='close-sidebar-btn' onClick={() => setOpenSidebarRowIndex(null)}><ChevronRightPipe /></span>
          <MaximizeArrows />
          <OpenSidebar />
          <ChevronUp />
          <ChevronDownBigger />
        </header>

        <main className='sidebar-main'>
          <input
            className='sidebar-main-content'
            value={localMainContent[id] || mainContent || ''}
            onChange={(e) => handleChangeLocalMainContent(id, e.target.value)}
            onBlur={() => getUpdatedMainContent(id, localMainContent[id])}
          />
          <article className='properties-container'>
            <span className='property'>
              <p>Status</p>
              <StatusComponent rows={rows} status={status} id={id} index={index} getUpdatedStatus={getUpdatedStatus} />
            </span>
            <span className='property'>
              <p>Priority</p>
              <PriorityComponent rows={rows} priority={priority} id={id} index={index} getUpdatedPriority={getUpdatedPriority} />
            </span>
            <span className='property'>
              <p>Due</p>
              <p>{due}</p>
            </span>
          </article>

          <input
            className='description-input'
            placeholder='Write a description...'
            value={localDescription[id] || description || ''}
            onChange={(e) => handleChangeLocalDescription(id, e.target.value)}
            onBlur={() => getUpdatedDescription(id, localDescription[id])}
          />
        </main>

        <span className='delete-row' onClick={() => getDeletedRow(id)}>
          <Trash />
          Delete
        </span>
      </div>
    </aside>
  )
}
