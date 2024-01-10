// import { AsideProvider } from '../../context/aside'
// import { GroupsProvider } from '../../context/groups'
// import { Filters } from '../Filters'
// import { GroupsContainer } from '../Groups/GroupsContainer'
// import { Header } from '../Header'
import { AsideMenu } from '../../AsideMenu'
import { UntitledTable } from '../../UntitledTable'
import './UserDefaultPage.css'

export function UserDefaultPage () {
  return (
    <main className="user-main">
      <AsideMenu />
      <UntitledTable />
    </main>
  )
}
