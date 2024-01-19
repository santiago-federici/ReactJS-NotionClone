import { ClockBig, Dots, Star } from '../Icons'

export function PageHeader ({ title }) {
  return (
    <header className='table-view-header'>
      <div className='header-route-container'>
        {title}
      </div>
      <div className='header-options-container'>
        <p className='options-edited'>Edited Dec 12, 2023</p>
        <p>Share</p>
        <ClockBig />
        <Star />
        <Dots />
      </div>
    </header>
  )
}
