import { createApp } from './app.js'

import { AuthModel } from './models/SQLite/auth.js' // <-- Change folder between MySQL and SQLite as needed
import { UserModel } from './models/SQLite/users.js' // <-- Change folder between MySQL and SQLite as needed
import { TableModel } from './models/SQLite/tables.js' // <-- Change folder between MySQL and SQLite as needed
import { RowModel } from './models/SQLite/rows.js' // <-- Change folder between MySQL and SQLite as needed

createApp({ userModel: UserModel, tableModel: TableModel, rowModel: RowModel, authModel: AuthModel })
