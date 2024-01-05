import { Link } from 'react-router-dom'

export function RightSection () {
  return (
    <div className='right-section'>
      <span className='special-span'>
        Request a demo
      </span>

      <div className='buttons-container'>
        <button className='get-notion-free get-notion-free-small'>Get Notion free</button>
        <Link to='/login' className='login-btn'>Log in</Link>
      </div>
    </div>
  )
}
