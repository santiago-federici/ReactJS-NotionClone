import { DropdownRight } from '../../../../components/Icons.jsx'

export function DownloadDetails () {
  return (
    <details className='download-details'>
      <summary>
        Download
        <DropdownRight />
      </summary>
      <div className='dropdown-info-container  download-dropdown'>
        <p>iOS & Android</p>
        <p>Mac & Windows</p>
        <p>Web Clipper</p>
      </div>
    </details>
  )
}
