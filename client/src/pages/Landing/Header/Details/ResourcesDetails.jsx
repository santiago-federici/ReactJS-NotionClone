import { DropdownRight } from '../../../../components/Icons.jsx'

export function ResourcesDetails () {
  return (
    <details className='resources-details'>
      <summary>
        Resources
        <DropdownRight />
      </summary>
      <div className='dropdown-info-container resources-dropdown'>
        <p>Blog</p>
        <p>Guides & tutorials</p>
        <p>Webinars</p>
        <p>Help center</p>
        <p>API docs</p>
        <p>Community</p>
        <p>Hire a consultant</p>
      </div>
    </details>
  )
}
