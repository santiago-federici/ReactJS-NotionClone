import { DropdownRight } from '../../../Icons'

export function DownloadDetails () {
  return (
    <details className='download-details'>
      <summary>
        Download
        <DropdownRight />
      </summary>
      <div className='dropdown-info-container'>
        <p>iOS & Android</p>
        <p>Mac & Windows</p>
        <p>Web Clipper</p>
      </div>
    </details>
  )
}
