import { createApp } from './app.js'

import { AuthModel } from './models/SQLite/auth.js' // <-- Change folder between MySQL and SQLite as needed
import { UserModel } from './models/SQLite/users.js' // <-- Change folder between MySQL and SQLite as needed
import { TableModel } from './models/MySQL/tables.js'
import { RowModel } from './models/MySQL/rows.js'

createApp({ userModel: UserModel, tableModel: TableModel, rowModel: RowModel, authModel: AuthModel })
