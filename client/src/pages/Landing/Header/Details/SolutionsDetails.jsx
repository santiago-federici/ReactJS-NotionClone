import { DropdownRight } from '../../../../components/Icons.jsx'

export function SolutionsDetails () {
  return (
    <details className='solutions-details'>
      <summary>
        Solutions
        <DropdownRight />
      </summary>
      <div className='dropdown-info-container solutions-dropdown'>
        <div className='solutions-divider'>
          <span>BY TEAM SIZE</span>
          <p>Enterprise</p>
          <p>Small business</p>
          <p>Personal</p>
        </div>
        <div className='solutions-divider'>
          <span>BY TEAM FUNCTION</span>
          <p>Design</p>
          <p>Engineering</p>
          <p>Product</p>
          <p>Managers</p>
        </div>
        <div className='solutions-divider'>
          <span>NOTION FOR</span>
          <p>Startups</p>
          <p>Remote work</p>
          <p>Education</p>
          <p>Nonprofits</p>
        </div>
      </div>
    </details>
  )
}
