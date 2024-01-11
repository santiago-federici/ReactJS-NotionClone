import { DropdownRight } from '../../../../components/Icons.jsx'

export function SolutionsDetails () {
  return (
    <details className='solutions-details'>
      <summary>
        Solutions
        <DropdownRight />
      </summary>
      <div className='dropdown-info-container solutions-dropdown'>
        <span>BY TEAM SIZE</span>
        <p>Enterprise</p>
        <p>Small business</p>
        <p>Personal</p>
        <span>BY TEAM FUNCTION</span>
        <p>Design</p>
        <p>Engineering</p>
        <p>Product</p>
        <p>Managers</p>
        <span>NOTION FOR</span>
        <p>Startups</p>
        <p>Remote work</p>
        <p>Education</p>
        <p>Nonprofits</p>
      </div>
    </details>
  )
}
