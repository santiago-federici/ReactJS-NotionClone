import { useState } from 'react'
import { CloseIcon, HamburgerMenu, NotionCompleteLogo } from '../../../Icons.jsx'
import { MenuContainer } from './MenuContainer/MenuContainer.jsx'

export function Header () {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
        <header className='app-header-no-user'>
          <span className='notion-logo'>
            <NotionCompleteLogo />
          </span>

          <label htmlFor='menu' className='menu-icon' onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {
            isMenuOpen
              ? <CloseIcon />
              : <HamburgerMenu />
          }
          </label>

          <input type='checkbox' hidden id='menu' />

          <MenuContainer />

        </header>
  )
}
